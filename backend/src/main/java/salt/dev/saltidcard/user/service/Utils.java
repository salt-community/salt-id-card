package salt.dev.saltidcard.user.service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import static salt.dev.saltidcard.user.service.IdCardServiceConstants.*;

public class Utils {

    public static String getEndDate(String startDate) {
        Pattern pattern = Pattern.compile("(\\d{4})-(\\d{2})-(\\d{2})");
        Matcher matcher = pattern.matcher(startDate);
        if(!matcher.find()){
            throw new IllegalArgumentException(ERROR_END_DATE);
        }
        int year = Integer.parseInt(matcher.group(1)) + 2;
        return year + "-" + matcher.group(2) + "-" + matcher.group(3);
    }

    public static String ifNotEmptyReturn(String input, String errorMessage){
        if(input == null || input.equals(NULL) || input.isEmpty()){
            throw new IllegalArgumentException(errorMessage);
        }
        return input;
    }

    public static String getGitHubAvatarUrl(String profileUrl) {
        if (profileUrl == null || !profileUrl.startsWith(GITHUB_URL)) {
            throw new IllegalArgumentException(ERROR_GITHUB);
        }
        String username = profileUrl.replace(GITHUB_URL, "").trim();
        return IMAGE_URL + username;
    }
}
