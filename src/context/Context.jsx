import React, { useContext, useEffect, useReducer } from "react";
import reducer from './Reducer'

const AppContext = React.createContext();

const initialState = {
  name: "",
  image: "",
  description:"",
  services:[],
};

const API = 'http://localhost:3031/services'

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Krimson Technology Pvt. Ltd",
        image: "./images/hero.svg",
        description:"Krimson Company is a leading technology conglomerate that has established itself as a powerhouse in the global market. With a relentless focus on innovation and cutting-edge solutions, the company has revolutionized industries such as artificial intelligence, cybersecurity, and advanced robotics.",
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Krimson Tech ....",
        image: "./images/about1.svg",
        description:" Krimson's diverse portfolio encompasses a wide range of products and services, catering to both enterprise clients and individual consumers. Their commitment to excellence is evident in their seamless integration of technology into everyday life, empowering individuals and businesses to thrive in the digital era.",
      },
    });
  };

  useEffect(() => {
    getServices(API);
  }, [])

  const getServices = async (url) =>{
    try{
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type:"GET_SERVICES",
        payload:data

        })
    }catch(error){
      console.log(error);
    };
  }

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
