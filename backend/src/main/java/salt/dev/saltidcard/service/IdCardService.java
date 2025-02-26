package salt.dev.saltidcard.service;

import org.springframework.stereotype.Service;
import salt.dev.saltidcard.model.User;
import salt.dev.saltidcard.notionproxy.NotionProxyService;
import salt.dev.saltidcard.notionproxy.dtos.UserNotionProxyDto;

import java.util.UUID;

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
        return new User("4c51571d-7244-478c-9fff-9ec8941f0094",
                "Tobias Johansson",
                "jfs-sthlm-2024-09-06",
                "2026-09-06",
                "tobias.johansson@appliedtechnology.se",
                "https://avatars.githubusercontent.com/TobiasBlankJohansson");
    }
}
