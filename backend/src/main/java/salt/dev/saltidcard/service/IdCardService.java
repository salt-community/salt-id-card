package salt.dev.saltidcard.service;

import org.springframework.stereotype.Service;
import salt.dev.saltidcard.model.User;

import java.util.UUID;

@Service
public class IdCardService {
    public User getIdCardEmail(String email){
        return new User("Tobias Johansson",
                "jfs-sthlm-2024-09-06",
                "2025-06-01",
                "PGP",
                "https://avatars.githubusercontent.com/TobiasBlankJohansson");
    }
    public User getIdCardPrivateEmail(String privateEmail){
        return new User("Tobias Johansson",
                "jfs-sthlm-2024-09-06",
                "2025-06-01",
                "PGP",
                "https://avatars.githubusercontent.com/TobiasBlankJohansson");
    }
    public User getIdCardUuid(UUID uuid){
        return new User("Tobias Johansson",
                "jfs-sthlm-2024-09-06",
                "2025-06-01",
                "PGP",
                "https://avatars.githubusercontent.com/TobiasBlankJohansson");
    }
}
