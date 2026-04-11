let version = "v1";
const ENDPOINT = {
    AUTH: {
        LOGIN: `/admin/${version}/auth/login`,
        FORGOT: `/admin/${version}/auth/forgot-password`,
        RESET: `/admin/${version}/auth/reset-password`,
        VERIFY_FORGOT_PASSWORD_LINK: `/admin/${version}/auth/verify-forgot-password-link`,
        LOGOUT: "/auth/logout",
        USER: "/auth/user",
    },
    PG_OWNERS: {
        ALL_LIST: `/admin/${version}/pg-owner/list`,
        REQUESTS_LIST: `/admin/${version}/pg-owner/request-list`,
        ACTIVATE_DEACTIVATE: `/admin/${version}/pg-owner/activate-deactivate`,
        APPROVE_REJECT: `/admin/${version}/pg-owner/approve-reject`,
    },
    PG_LIST: {
        PG_ALL_LIST: `/admin/${version}/pg/list`,
        REQUESTED_LIST: `/admin/${version}/pg/request-list`,
        APPROVE_REJECT: `/admin/${version}/pg/approve-reject`,
        PG_DETAIL: `/admin/${version}/pg/view`,
    },
    DASHBOARD: {
        DETAILS: `/admin/${version}/dashboard`
    }

}
export default ENDPOINT;