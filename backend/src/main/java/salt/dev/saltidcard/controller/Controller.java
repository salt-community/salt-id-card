package salt.dev.saltidcard.controller;

import org.springframework.web.bind.annotation.*;
import salt.dev.saltidcard.controller.dtos.UserDto;
import salt.dev.saltidcard.service.IdCardService;

@RestController
@RequestMapping("api/v1/id-card")
@CrossOrigin
public class Controller {

    public final IdCardService service;

    public Controller(IdCardService service) {
        this.service = service;
    }

    @GetMapping("{email}")
    public UserDto getIdCard(@PathVariable String email) {
        return UserDto.toModel(service.getIdCard(email));
    }
}
