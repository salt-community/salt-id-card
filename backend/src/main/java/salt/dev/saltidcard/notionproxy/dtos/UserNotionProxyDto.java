package salt.dev.saltidcard.notionproxy.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserNotionProxyDto {

    private String uuid, name, course, email, gitHub;

    private static final ObjectMapper objectMapper = new ObjectMapper();

    public static UserNotionProxyDto fromJson(String json) throws JsonProcessingException {
        return objectMapper.readValue(json, UserNotionProxyDto.class);
    }
}
