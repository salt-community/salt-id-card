package salt.dev.saltidcard.notionproxy;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.client.RestClient;

public class NotionProxyService {

    private final RestClient restClient;
    private final String API_KEY;
    private final String API_KEY_HEADER;

    public NotionProxyService(RestClient.Builder builder,
                            @Value("${NOTION_PROXY_API_KEY}") String API_KEY,
                            @Value("${NOTION_PROXY_API_KEY_HEADER}") String API_KEY_HEADER,
                            @Value("${NOTION_URL}") String NOTION_URL) {
        this.restClient = builder.baseUrl(NOTION_URL).build();
        this.API_KEY = API_KEY;
        this.API_KEY_HEADER = API_KEY_HEADER;
    }

    public JsonNode fetchUser(String uri) {
        return restClient
                .get()
                .uri(uri)
                .header(API_KEY_HEADER, API_KEY)
                .retrieve()
                .body(JsonNode.class);
    }
}
