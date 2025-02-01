import { Button } from "../component/ui/Button";
import { Input } from "../component/ui/Input";
import { useRef } from "react";
import { BACKEND_URL } from "../Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signin() {

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
            username: username,
            password: password
        }
        );
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/");
}



    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-2-48 p-8">
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password" />
                <div className="flex justify-center pt-4">
                    <Button variant="primary" size="md" text="Signin" fullwidth={true} onClick={signin} />
                </div>
            </div>
        </div>
    )
}