package salt.dev.saltidcard.user.controller.dtos;

import salt.dev.saltidcard.user.model.User;

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
