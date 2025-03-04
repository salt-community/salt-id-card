package salt.dev.saltidcard.user;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Utils {
    public static String getEndDate(String startDate) {
        Pattern pattern = Pattern.compile("(\\d{4})-(\\d{2})-(\\d{2})");
        Matcher matcher = pattern.matcher(startDate);
        if(!matcher.find()){
            throw new IllegalArgumentException("Invalid end date");
        }
        int year = Integer.parseInt(matcher.group(1)) + 2;
        return year + "-" + matcher.group(2) + "-" + matcher.group(3);
    }

    public static String ifNotEmptyReturn(String input, String errorMessage){
        if(input == null || input.equals("null") || input.isEmpty()){
            throw new IllegalArgumentException(errorMessage);
        }
        return input;
    }

    public static String getGitHubAvatarUrl(String profileUrl) {
        if (profileUrl == null || !profileUrl.startsWith("https://github.com/")) {
            throw new IllegalArgumentException("Invalid GitHub profile URL");
        }
        String username = profileUrl.replace("https://github.com/", "").trim();
        return "https://avatars.githubusercontent.com/" + username;
    }
}
