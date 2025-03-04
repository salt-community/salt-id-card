package salt.dev.saltidcard.user.service;

import org.springframework.stereotype.Service;
import salt.dev.saltidcard.user.model.User;
import salt.dev.saltidcard.notionproxy.NotionProxyService;
import salt.dev.saltidcard.notionproxy.dtos.UserNotionProxyDto;

import java.util.UUID;

import static salt.dev.saltidcard.user.Utils.*;

@Service
public class IdCardService {

    private final NotionProxyService notionProxyService;

    public IdCardService(NotionProxyService notionProxyService) {
        this.notionProxyService = notionProxyService;
    }

    public User getIdCardEmail(String email){
        //UserNotionProxyDto userDto = notionProxyService.fetchUser("id-cards/email/" + email);
        UserNotionProxyDto userDto = new UserNotionProxyDto(
                "02e93524-a7a9-4f63-9e2e-aa5b729ce398",
                "John Doe",
                "jfs-nyc-2025-05-12",
                "john.doe@example.com",
                "https://github.com/johndoe"
        );
        return createUserFromNotionDto(userDto);
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
}
