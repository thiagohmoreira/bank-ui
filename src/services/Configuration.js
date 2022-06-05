/* eslint-disable no-template-curly-in-string */
const _env = process.env

const _config = {
    AUTH_URL: _env.REACT_APP_AUTH_URL ? _env.REACT_APP_AUTH_URL : "${AUTH_URL}",
    USERS_API: _env.REACT_APP_USERS_API ? _env.REACT_APP_USERS_API : "${USERS_API}",
    ACCOUNTS_API: _env.REACT_APP_ACCOUNTS_API ? _env.REACT_APP_ACCOUNTS_API : "${ACCOUNTS_API}"
}

export const getConfigValue = (key) => _config[key]