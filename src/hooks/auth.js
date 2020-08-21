import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadStorage() {
      const token = localStorage.getItem('@Navedex:token');
      const user = localStorage.getItem('@Navedex:user');

      if (token && user) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setLoading(false);
        setUser(token, JSON.parse(user));
      }
    }
    loadStorage();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    setLoading(true);
    const response = await api.post('users/login', {
      email,
      password,
    });

    const { token, id } = response.data;

    const user = { id, email };

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    localStorage.setItem('@Navedex:token', token);
    localStorage.setItem('@Navedex:user', JSON.stringify(user));

    setLoading(false);
    setUser(user);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Navedex:token');
    localStorage.removeItem('@Navedex:user');

    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: !!user, signIn, signOut, user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]),
};

AuthProvider.defaultProps = {
  children: {},
};
