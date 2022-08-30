import React  from 'react';
import { useState, createContext } from 'react';

const useValue = () => {
  const [profile, setProfile] = useState<string>('investor');
  const [userId, setUserId] = useState<string>('123456');
  const [companyName, setCompanyName] = useState<string>('Example');
  return {
    profile,
    setProfile,
    userId,
    setUserId,
    companyName,
    setCompanyName,
  };
};

const AppContext = createContext({} as ReturnType<typeof useValue>);

const AppProvider = (props: any) => {
  return (
    <AppContext.Provider value={useValue()}>
      {props.children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
