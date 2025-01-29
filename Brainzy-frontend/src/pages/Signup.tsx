import axios from "axios";
import { Button } from "../component/ui/Button";
import { Input } from "../component/ui/Input";
import { useRef } from "react";
import { BACKEND_URL } from "../Config";

export function Signup() {

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {
            username: username,
            password: password
        }
        );
}


return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
    <div className="bg-white rounded border min-2-48">
        <Input reference={usernameRef} placeholder="Username" />
        <Input reference={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
            <Button variant="primary" size="md" text="Signup" fullwidth={true} onClick={signup} />
        </div>
    </div>
</div>
}