import {useState} from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./Button";
import { useRef } from "react";


enum ContentType {
    Youtube = "youtube",
    Facebook = "facebook",
    Twitter = "twitter",
    Instagram = "instagram",
    Linkdin = "linkedin",
}


export function CreateContentmodal({open,onClose}){

    const TitleRef = useRef<HTMLInputElement>();
    const LinkRef = useRef<HTMLInputElement>();
    const [Type,setType] = useState(ContentType.Youtube);

    function addcontent(){
        const title = TitleRef.current?.value;
        const link = LinkRef.current?.value;
    }

    return<div>
        {open &&<div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded-sm">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon  />
                        </div>
                        
                    </div>
                    <div>
                        <Input reference = {TitleRef} placeholder={"Title"} />
                        <Input reference = {LinkRef} placeholder={"Link"} />
                    </div>
                    <div className="flex justify-center"><Button onClick={addcontent} variant = "primary" text="Submit" size="sm"/>
                    </div>
                    
                </span>
            </div>
        </div>}
    </div>
}  
