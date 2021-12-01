import React, { createContext, useContext, useState } from "react";

// interface IContextData { 
//       firstName: string;
//       lastName: string;
//       age: number;
//       email: string;
//       hasPhone: boolean;
//       phoneNumber?: underfined | string;
//       files?: {
//         name?: String;
//         size?: String;
//       }[];
// }  

// const DataContext = React.createContext<IContextData | null>(null);

// export const DataProvider = ({children}) => {
//     const [data, setData] = useState<IContextData>({});

//     const setValues = (values) => {
//         setData((prevState)=>({...prevState, ...values,}))
//     }

//     return (
//         <DataContext.Provider value={{ data, setValues}}>{children}</DataContext.Provider>
//     );
// }

// export const useData = () => useContext(DataContext)


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