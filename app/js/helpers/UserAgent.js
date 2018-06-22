class UserAgentClass {
    ua = navigator.userAgent;
    mobile = !!this.ua.match(/mobi/i);

    userAgent() {
        return this.ua;
    }

    isMobile() {
        return this.mobile;
    }

    isDesktop() {
        return !this.mobile;
    }
}

export const UserAgent = new UserAgentClass();
