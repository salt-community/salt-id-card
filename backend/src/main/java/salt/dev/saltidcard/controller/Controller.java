package salt.dev.saltidcard.controller;

import org.springframework.web.bind.annotation.*;
import salt.dev.saltidcard.controller.dtos.UserDto;
import salt.dev.saltidcard.service.IdCardService;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/id-card")
@CrossOrigin
public class Controller {

    public final IdCardService service;

    public Controller(IdCardService service) {
        this.service = service;
    }

    @GetMapping("{email}")
    public UserDto getIdCardFromEmail(@PathVariable String email) {
        return UserDto.toModel(service.getIdCard(email));
    }

    @GetMapping("{privateEmail}")
    public UserDto getIdCardFromPrivateEmail(@PathVariable String privateEmail) {
        return UserDto.toModel(service.getIdCard(privateEmail));
    }

    @GetMapping("{uuid}")
    public UserDto getIdCardFromUuid(@PathVariable UUID uuid) {
        return UserDto.toModel(service.getIdCard(uuid));
    }
}
