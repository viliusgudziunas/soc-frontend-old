import Utils from 'shared/utils';

export const AuthService = {
  login: (authToken: string | undefined): void => {
    if (authToken) {
      localStorage.setItem('authToken', authToken);
    }
  },

  getAuthToken: (): string | null => localStorage.getItem('authToken'),

  isLoggedIn: (): boolean => {
    const authToken = AuthService.getAuthToken();
    return Utils.isSet(authToken);
  },
};
