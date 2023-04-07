import React, {useState,createContext,useContext, ReactNode} from 'react'


interface UserContextProps {
    showLoadingPage: boolean;
    setShowLoadingPage: (showLoadingPage: boolean) => void;
    userData :any[];
    userDataSlice: any[];
    userDetail: {[key:string]:any};
    setUserDataSlice: (userDataSlice: any)=> void;
    setUserData : (userData: any)=> void;
    setUserDetail: (userDetail: any)=>void;
  }

  const UserContext = createContext<UserContextProps>({
    showLoadingPage: false,
    setShowLoadingPage: (showLoadingPage: boolean) => {},
    userData : [],
    userDataSlice : [],
    userDetail: {},
    setUserData : (userData: any)=> {},
    setUserDataSlice : (userDataSlice: any)=> {},
    setUserDetail : (userDetail: any)=> {},
    
  });
  
  const useUserContext = () => useContext<UserContextProps>(UserContext);

  interface UserProviderProps {
    children: ReactNode;
  }


  const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [showLoadingPage, setShowLoadingPage] = useState(false);
    const [userData,setUserData] = useState([])
    const [userDataSlice,setUserDataSlice] = useState([])
    const [userDetail, setUserDetail] = useState<any>()

return(
    <UserContext.Provider value={{ userDetail,setUserDetail,showLoadingPage, setShowLoadingPage,userData,setUserData,userDataSlice,setUserDataSlice}}>
      {children}
    </UserContext.Provider>
)
}

export { useUserContext, UserProvider };