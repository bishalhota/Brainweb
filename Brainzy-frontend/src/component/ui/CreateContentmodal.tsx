import {useState} from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./Button";


export function CreateContentmodal({open,onClose}){


    return<div>
        {open &&<div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded-sm">
                    <div className="flex justify-end">
                        <div onClick={onClose}      className="cursor-pointer">
                            <CrossIcon  />
                        </div>
                        
                    </div>
                    <div>
                        <Input placeholder={"Title"} />
                        <Input placeholder={"Link"}/>
                    </div>
                    <div className="flex justify-center"><Button variant = "primary" text="Submit" size="sm"/>
                    </div>
                    
                </span>
            </div>
        </div>}
    </div>
}  
