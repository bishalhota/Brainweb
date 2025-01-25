import {useState} from "react";
import { CrossIcon } from "../../icons/CrossIcon";


export function CreateContentmodal({open}){


    return<div>
        {open &&<div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded-sm">
                    <div className="flex justify-end">
                        <CrossIcon  />
                    </div>
                </span>
            </div>
        </div>}
    </div>
}  
