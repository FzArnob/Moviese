function setCookie(cName, cValue, expDays) {
            let date = new Date();
            date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
        }
setCookie('wordpress_logged_in_68c526a5b114f2027adee3c7a7977de6', 'wordpress_logged_in_68c526a5b114f2027adee3c7a7977de6', 2);