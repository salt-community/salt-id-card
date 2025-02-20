package salt.dev.saltidcard.service;

import org.springframework.stereotype.Service;
import salt.dev.saltidcard.model.User;

@Service
public class IdCardService {
    public User getIdCard(){
        return new User("Tobias Johansson",
                "jfs-sthlm-2024-09-06",
                "2025-06-01",
                "PGP",
                "https://avatars.githubusercontent.com/TobiasBlankJohansson");
    }
}
