import React, {useState,createContext,useContext, ReactNode} from 'react'


interface UserContextProps {
    showLoadingPage: boolean;
    setShowLoadingPage: (showLoadingPage: boolean) => void;
    userData :any[];
    userDataSlice: any[];
    setUserDataSlice: (userDataSlice: any)=> void;
    setUserData : (userData: any)=> void;
  }

  const UserContext = createContext<UserContextProps>({
    showLoadingPage: false,
    setShowLoadingPage: (showLoadingPage: boolean) => {},
    userData : [],
    userDataSlice : [],
    setUserData : (userData: any)=> {},
    setUserDataSlice : (userDataSlice: any)=> {}
    
  });
  
  const useUserContext = () => useContext<UserContextProps>(UserContext);

  interface UserProviderProps {
    children: ReactNode;
  }


  const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [showLoadingPage, setShowLoadingPage] = useState(false);
    const [userData,setUserData] = useState([])
    const [userDataSlice,setUserDataSlice] = useState([])

return(
    <UserContext.Provider value={{ showLoadingPage, setShowLoadingPage,userData,setUserData,userDataSlice,setUserDataSlice}}>
      {children}
    </UserContext.Provider>
)
}

export { useUserContext, UserProvider };