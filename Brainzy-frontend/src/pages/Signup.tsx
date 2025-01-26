import { Button } from "../component/ui/Button";
import { Input } from "../component/ui/Input";

export function Signup() {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-2-48">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <div className="flex justify-center pt-4">
                <Button variant="primary" size="md" text="Signup" fullwidth={true}  />
            </div>
        </div>
    </div>
}