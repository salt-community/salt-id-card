package salt.dev.saltidcard.user.controller;

import org.springframework.web.bind.annotation.*;
import salt.dev.saltidcard.user.controller.dtos.UserDto;
import salt.dev.saltidcard.user.service.IdCardService;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/id-cards")
@CrossOrigin
public class Controller {

    public final IdCardService service;

    public Controller(IdCardService service) {
        this.service = service;
    }

    @GetMapping("email/{email}")
    public UserDto getIdCardFromEmail(@PathVariable String email) {
        return UserDto.toModel(service.getIdCardEmail(email));
    }

    @GetMapping("uuid/{uuid}")
    public UserDto getIdCardFromUuid(@PathVariable UUID uuid) {
        return UserDto.toModel(service.getIdCardUuid(uuid));
    }
}
