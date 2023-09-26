import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const MyContext = createContext();

const Context = ({ children }) => {
  const [eventData, setEventData] = useState({});
  const [addToCart, setAddToCart] = useState([]);
  const [user, setUser] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'bn');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const info = {
    eventData,
    setEventData,
    addToCart,
    setAddToCart,
    user,
    setUser,
    language
,setLanguage  };

  return <MyContext.Provider value={info}>{children}</MyContext.Provider>;
};

export default Context;
