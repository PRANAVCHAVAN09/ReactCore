import { ComponentType } from "react";

export interface TabsType{
    name: string;
    component:ComponentType<TabProps>
} 



export interface FormData{
    name: string;
    email:string;
    age:number;
    intrestArray:string[];
    settings:'dark' | 'light'
}


export interface TabProps {
    userData: FormData;
    setUserData: React.Dispatch<React.SetStateAction<FormData>>;
  }