package salt.dev.saltidcard.controller.dtos;

import salt.dev.saltidcard.model.User;

public record UserDto(
        String uuid,
        String name,
        String course,
        String endDate,
        String email,
        String image
) {
    public static UserDto toModel(User user) {
        return new UserDto(user.getUuid() ,user.getName(), user.getCourse(), user.getEndDate(), user.getEmail(), user.getImage());
    }
}
