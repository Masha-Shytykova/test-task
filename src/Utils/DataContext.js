 import React, { createContext, useContext, useState } from "react";

//  interface IContextData { 
//        firstName: string;
//        lastName: string;
//        age: number;
//        email: string;
//        hasPhone: boolean;
//        phoneNumber?: undefined | string;
//        files?: {
//          name?: string;
//          size?: string;
//        }[];
// }
 
// const initialState: IContextData = {
//        firstName: '',
//        lastName: '',
//        age: 0,
//        email: '',
//        hasPhone: false,  
// };

//  const DataContext = createContext<IContextData>(initialState);

//  export const DataProvider = ({children}) => {
//      const [data, setData] = useState<IContextData>(initialState);

//      const setValues = (values: IContextData) => {
//          setData((prevState)=>({...prevState, ...values,}))
//      }

//      return (
//          <DataContext.Provider value={{ data, setValues}}>{children}</DataContext.Provider>
//      );
//  }

//  export const useData = () => useContext(DataContext)


  const DataContext =createContext();


  export const DataProvider = ({children}) => {
      const [data, setData] = useState({});

      const setValues = (values) => {
          setData((prevState)=>({...prevState, ...values,}))
      }

      return (
          <DataContext.Provider value={{ data, setValues}}>{children}</DataContext.Provider>
      );
  }

  export const useData = () => useContext(DataContext)