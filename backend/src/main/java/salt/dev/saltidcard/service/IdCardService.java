package salt.dev.saltidcard.service;

import org.springframework.stereotype.Service;
import salt.dev.saltidcard.model.User;
import salt.dev.saltidcard.notionproxy.NotionProxyService;
import salt.dev.saltidcard.notionproxy.dtos.UserNotionProxyDto;

import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class IdCardService {

    private final NotionProxyService notionProxyService;

    public IdCardService(NotionProxyService notionProxyService) {
        this.notionProxyService = notionProxyService;
    }

    public User getIdCardEmail(String email){
        return new User("4c51571d-7244-478c-9fff-9ec8941f0094",
                "Tobias Johansson",
                "jfs-sthlm-2024-09-06",
                "2026-09-06",
                "tobias.johansson@appliedtechnology.se",
                "https://avatars.githubusercontent.com/TobiasBlankJohansson");
    }

    public User getIdCardUuid(UUID uuid){
        UserNotionProxyDto userDto = notionProxyService.fetchUser("id-cards/uuid/" + uuid.toString());

        Pattern pattern = Pattern.compile("(\\d{4})-(\\d{2})-(\\d{2})");
        Matcher matcher = pattern.matcher(userDto.getCourse());
        matcher.find();
        int year = Integer.parseInt(matcher.group(1)) + 2;
        String endDate = year + "-" + matcher.group(2) + "-" + matcher.group(3);
        return new User(userDto.getUuid(),
                userDto.getName(),
                userDto.getCourse(),
                endDate,
                userDto.getEmail(),
                getGitHubAvatarUrl(userDto.getGitHub()));

    }

    public static String getGitHubAvatarUrl(String profileUrl) {
        if (profileUrl == null || !profileUrl.startsWith("https://github.com/")) {
            throw new IllegalArgumentException("Invalid GitHub profile URL");
        }

        String username = profileUrl.replace("https://github.com/", "").trim();

        return "https://avatars.githubusercontent.com/" + username;
    }
}
