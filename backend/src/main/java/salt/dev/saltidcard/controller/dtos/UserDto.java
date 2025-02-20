package salt.dev.saltidcard.controller.dtos;

public record UserDto(
        String name,
        String course,
        String endDate,
        String status,
        String image
) {
}
