package salt.dev.saltidcard.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/id-card")
public class Controller {

    @GetMapping("{email}")
    public String getIdCard(@PathVariable String email) {
        return null;
    }

}
