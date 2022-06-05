import * as React from 'react';
import Keycloak from 'keycloak-js';
import { getConfigValue } from './Configuration'
import { configureAuthHeaders } from './RestClient';

const _kc = new Keycloak({
    url: getConfigValue('AUTH_URL'),
    realm: 'pink-pig-bank',
    clientId: 'bank-ui'
});

const refreshToken = () => {
    _kc.updateToken(70).then((refreshed) => {
        if (refreshed) {
            console.log('Token was successfully refreshed');
            configureAuthHeaders(_kc.token);
        }
    }).catch(() => {
        console.log('Failed to refresh the token, or the session has expired', _kc);
        _kc.login();
    });
}

export const authInit = (onAuthenticatedCallback) => {
    _kc.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: `${window.location.origin}/check-sso.html`,
        pkceMethod: 'S256',
    })
        .then((authenticated) => {
            console.log(`User is ${!authenticated ? 'not ' : ''}authenticated.`);
            if (authenticated) {
                setInterval(refreshToken, 10000);
                configureAuthHeaders(_kc.token);
            }
            onAuthenticatedCallback();
        })
        .catch(console.error);
}

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const value = {
        token: _kc.tokenParsed,
        isLoggedIn: !!_kc.token,
        username: _kc.tokenParsed?.preferred_username,
        fullName: _kc.tokenParsed?.name,
        firstName: _kc.tokenParsed?.given_name,
        lastName: _kc.tokenParsed?.family_name,
        email: _kc.tokenParsed?.email,

        onLogin: _kc.login,
        onLogout: _kc.logout,
        hasRole: (roles) => roles.some((role) => _kc.hasRealmRole(role))
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return React.useContext(AuthContext);
};
