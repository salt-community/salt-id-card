package salt.dev.saltidcard.user.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;
import salt.dev.saltidcard.user.controller.dtos.UserDto;
import salt.dev.saltidcard.user.service.IdCardService;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/id-cards")
@CrossOrigin
@Tag(name = "ID Card Controller", description = "Endpoints for retrieving ID card details by email or UUID")
public class Controller {

    private final IdCardService service;

    public Controller(IdCardService service) {
        this.service = service;
    }

    @Operation(
            summary = "Retrieve ID Card by Email",
            description = "Fetches user ID card details using an email address.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Successfully retrieved ID card",
                            content = @Content(schema = @Schema(implementation = UserDto.class))),
                    @ApiResponse(responseCode = "400", description = "Invalid email format"),
                    @ApiResponse(responseCode = "404", description = "User not found"),
                    @ApiResponse(responseCode = "502", description = "Invalid value from notion proxy")
            }
    )
    @GetMapping("email/{email}")
    public UserDto getIdCardFromEmail(
            @Parameter(description = "User email address", required = true)
            @PathVariable String email) {
        return UserDto.toModel(service.getIdCardEmail(email));
    }

    @Operation(
            summary = "Retrieve ID Card by UUID",
            description = "Fetches user ID card details using a unique identifier (UUID).",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Successfully retrieved ID card",
                            content = @Content(schema = @Schema(implementation = UserDto.class))),
                    @ApiResponse(responseCode = "400", description = "Invalid UUID format"),
                    @ApiResponse(responseCode = "404", description = "User not found"),
                    @ApiResponse(responseCode = "502", description = "Invalid value from notion proxy")
            }
    )
    @GetMapping("uuid/{uuid}")
    public UserDto getIdCardFromUuid(
            @Parameter(description = "User UUID", required = true)
            @PathVariable UUID uuid) {
        return UserDto.toModel(service.getIdCardUuid(uuid));
    }
}