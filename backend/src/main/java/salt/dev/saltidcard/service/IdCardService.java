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
        return new User("02e93524-a7a9-4f63-9e2e-aa5b729ce398",
                "Tobias Johansson",
                "jfs-sthlm-2024-09-06",
                "2026-09-06",
                "tobias.johansson@appliedtechnology.se",
                "https://avatars.githubusercontent.com/TobiasBlankJohansson");
    }

    public User getIdCardUuid(UUID uuid) {
        UserNotionProxyDto userDto = notionProxyService.fetchUser("id-cards/uuid/" + uuid.toString());
        return createUserFromNotionDto(userDto);
    }

    private static User createUserFromNotionDto(UserNotionProxyDto userDto) {
        return new User(
                ifNotEmptyReturn(userDto.getUuid(), "Invalid uuid"),
                ifNotEmptyReturn(userDto.getName(), "Invalid name"),
                ifNotEmptyReturn(userDto.getCourse(), "Invalid course"),
                getEndDate(userDto),
                ifNotEmptyReturn(userDto.getEmail(), "Invalid email"),
                getGitHubAvatarUrl(userDto.getGitHub()));
    }

    private static String getEndDate(UserNotionProxyDto userDto) {
        Pattern pattern = Pattern.compile("(\\d{4})-(\\d{2})-(\\d{2})");
        Matcher matcher = pattern.matcher(userDto.getCourse());
        if(!matcher.find()){
            throw new IllegalArgumentException("Invalid end date");
        }
        int year = Integer.parseInt(matcher.group(1)) + 2;
        return year + "-" + matcher.group(2) + "-" + matcher.group(3);
    }

    public static String ifNotEmptyReturn(String input, String errorMessage){
        if(input == null || input.equals("null")){
            throw new IllegalArgumentException(errorMessage);
        }
        return input;
    }

    public static String getGitHubAvatarUrl(String profileUrl) {
        if (profileUrl == null || !profileUrl.startsWith("https://github.com/")) {
            throw new IllegalArgumentException("Invalid GitHub profile URL");
        }
        String username = profileUrl.replace("https://github.com/", "").trim();
        return "https://avatars.githubusercontent.com/" + username;
    }
}
