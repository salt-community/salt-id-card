package salt.dev.saltidcard.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import salt.dev.saltidcard.controller.dtos.UserDto;
import salt.dev.saltidcard.service.IdCardService;

@RestController
@RequestMapping("api/v1/id-card")
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
