package salt.dev.saltidcard.controller.dtos;

import salt.dev.saltidcard.model.User;

public record UserDto(
        String name,
        String course,
        String endDate,
        String status,
        String image
) {
    public static UserDto toModel(User user) {
        return new UserDto(user.getName(), user.getCourse(), user.getEndDate(), user.getStatus(), user.getImage());
    }
}
