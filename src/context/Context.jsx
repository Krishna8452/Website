import React, { useContext, useEffect, useReducer } from "react";
import reducer from './Reducer'

const AppContext = React.createContext();

const initialState = {
  name: "",
  image: "",
  services:[],
};

const API = 'http://localhost:3031/services'

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Krishna Chaudhary",
        image: "./images/hero.svg",
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Krimson Chaudhary",
        image: "./images/about1.svg",
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
