package salt.dev.saltidcard.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import salt.dev.saltidcard.controller.dtos.UserDto;

@RestController
@RequestMapping("api/v1/id-card")
public class Controller {

    @GetMapping("{email}")
    public UserDto getIdCard(@PathVariable String email) {
        return new UserDto("Tobias Johansson",
                "jfs-sthlm-2024-09-06",
                "2025-06-01",
                "PGP",
                "https://avatars.githubusercontent.com/TobiasBlankJohansson");
    }
}
