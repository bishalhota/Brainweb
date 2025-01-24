import {ReactElement} from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text?:string;
    startIcon?:any;
    endIcon?:any;
    onClick?:()=>void;
    loading?:boolean;
    fullwidth?:boolean;
}

const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600",
};

const sizeStyles = {
    "sm":"p-2",
    "md":"p-4",
    "lg":"p-6",
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";


export const Button = (props:ButtonProps) =>{

    return <button onClick={props.onClick} className={`${variantClasses[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${props.fullwidth?" w-full flex justify-center items-center" : ""} ${props.loading ? "opacity-45" : ""}}`} disabled={props.loading}>{props.startIcon ? <div className="pr-2" >{props.startIcon}</div>:null} {props.text} {props.endIcon}</button>
}


