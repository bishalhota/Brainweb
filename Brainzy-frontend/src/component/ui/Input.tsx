interface InputProps {
    placeholder:string;
    reference?:any;
}


export function Input({placeholder,reference}:InputProps){
    return(
        <div>
            {/*input field with the provided pplaceholder and reference*/}
            <input
                ref={reference}
                placeholder={placeholder}
                type={"text"}
                className="px-4 py-2 border rounded m-2"
            />
        </div>
    );
}