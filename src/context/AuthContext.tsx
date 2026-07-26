import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the auth state
export interface AuthState {
  user: {
    id: string;
    username: string;
    email: string;
  } | null;
  isAuthenticated: boolean;
  token: string | null;
}

// Define the shape of the auth actions
export interface AuthActions {
  login: (userData: { id: string; username: string; email: string; token: string }) => void;
  logout: () => void;
}

// Combined context type
export interface AuthContextType extends AuthState, AuthActions {}

// Create context with a default value (will be overridden by provider)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use auth context safely
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    token: null,
  });

  // Load persisted auth state from localStorage on initial mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setState({
          user: parsedUser,
          isAuthenticated: true,
          token: storedToken,
        });
      } catch (e) {
        // If parsing fails, clear invalid data
        console.warn('Failed to parse stored user data', e);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }, []);

  // Login action
  const login = (userData: { id: string; username: string; email: string; token: string }) => {
    const { id, username, email, token } = userData;
    setState({
      user: { id, username, email },
      isAuthenticated: true,
      token,
    });
    // Persist to localStorage
    localStorage.setItem('user', JSON.stringify({ id, username, email }));
    localStorage.setItem('token', token);
  };

  // Logout action
  const logout = () => {
    setState({
      user: null,
      isAuthenticated: false,
      token: null,
    });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const value: AuthContextType = {
    ...state,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;