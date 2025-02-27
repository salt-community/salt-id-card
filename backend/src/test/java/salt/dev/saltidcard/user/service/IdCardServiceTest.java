package salt.dev.saltidcard.user.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import salt.dev.saltidcard.notionproxy.NotionProxyService;
import salt.dev.saltidcard.notionproxy.dtos.UserNotionProxyDto;
import salt.dev.saltidcard.user.model.User;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class IdCardServiceTest {

    @Mock
    private NotionProxyService notionProxyService;

    @InjectMocks
    private IdCardService idCardService;

    private UserNotionProxyDto mockUserDto;

    @BeforeEach
    void setUp() {
        mockUserDto = new UserNotionProxyDto(
                "02e93524-a7a9-4f63-9e2e-aa5b729ce398",
                "John Doe",
                "jfs-nyc-2025-05-12",
                "john.doe@example.com",
                "https://github.com/johndoe"
        );
    }

    @Test
    void getIdCardEmail() {
        when(notionProxyService.fetchUser("id-cards/email/john.doe@example.com")).thenReturn(mockUserDto);

        User user = idCardService.getIdCardEmail("john.doe@example.com");

        assertNotNull(user);
        assertEquals("02e93524-a7a9-4f63-9e2e-aa5b729ce398", user.getUuid());
        assertEquals("John Doe", user.getName());
        assertEquals("jfs-nyc-2025-05-12", user.getCourse());
        assertEquals("john.doe@example.com", user.getEmail());
        assertEquals("https://avatars.githubusercontent.com/johndoe", user.getImage());

        verify(notionProxyService, times(1)).fetchUser("id-cards/email/john.doe@example.com");
    }

    @Test
    void getIdCardUuid() {
        UUID uuid = UUID.fromString("02e93524-a7a9-4f63-9e2e-aa5b729ce398");
        when(notionProxyService.fetchUser("id-cards/uuid/" + uuid)).thenReturn(mockUserDto);

        User user = idCardService.getIdCardUuid(uuid);

        assertNotNull(user);
        assertEquals("02e93524-a7a9-4f63-9e2e-aa5b729ce398", user.getUuid());
        assertEquals("John Doe", user.getName());
        assertEquals("jfs-nyc-2025-05-12", user.getCourse());
        assertEquals("john.doe@example.com", user.getEmail());
        assertEquals("https://avatars.githubusercontent.com/johndoe", user.getImage());

        verify(notionProxyService, times(1)).fetchUser("id-cards/uuid/" + uuid);
    }

    @Test
    void getGitHubAvatarUrlValid() {
        String avatarUrl = IdCardService.getGitHubAvatarUrl("https://github.com/testuser");
        assertEquals("https://avatars.githubusercontent.com/testuser", avatarUrl);
    }

    @Test
    void getGitHubAvatarUrlInvalid() {
        assertThrows(IllegalArgumentException.class, () -> IdCardService.getGitHubAvatarUrl("https://gitlab.com/testuser"));
    }

    @Test
    void testIfNotEmptyReturnValid() {
        assertEquals("test", IdCardService.ifNotEmptyReturn("test", "Error message"));
    }

    @Test
    void testIfNotEmptyReturnInvalid() {
        assertThrows(IllegalArgumentException.class, () -> IdCardService.ifNotEmptyReturn(null, "Error message"));
        assertThrows(IllegalArgumentException.class, () -> IdCardService.ifNotEmptyReturn("null", "Error message"));
    }

    @Test
    void getEndDateValid() {
        String endDate = IdCardService.getEndDate(mockUserDto);
        assertEquals("2027-05-12", endDate);
    }

    @Test
    void getEndDateInvalid() {
        UserNotionProxyDto invalidDto = new UserNotionProxyDto(
                "02e93524-a7a9-4f63-9e2e-aa5b729ce398",
                "John Doe",
                "invalid-date",
                "john.doe@example.com",
                "https://github.com/johndoe"
        );
        assertThrows(IllegalArgumentException.class, () -> IdCardService.getEndDate(invalidDto));
    }
}
