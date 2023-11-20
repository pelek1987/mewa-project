import {createContext, ReactNode, useContext, useState} from "react";

interface IAuthContext {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
  toggleLoggedIn: () => void;

}

const AuthContext = createContext<null | IAuthContext>(null)

export const useAuthContext = () => {
const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthContextProvider')
  }
  return context
}

const useAuth = (): IAuthContext => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);
  const toggleLoggedIn = () => setIsLoggedIn(!isLoggedIn);
  return {
    isLoggedIn,
    logIn,
    logOut,
    toggleLoggedIn
  }
}

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
