package salt.dev.saltidcard.notionproxy.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserNotionProxyDto {
    private String uuid, name, course, email, gitHub;
}
