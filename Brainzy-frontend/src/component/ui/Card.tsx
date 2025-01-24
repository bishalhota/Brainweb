import { ShareIcon } from "../../icons/share";

interface CardProps {
    title:string;
    link:string;
    type:"twitter"|"youtube"|"instagram"|"linkedin";
}

export function Card({title,link,type}:CardProps){
    return(
        <div>
            {/* card */}
            <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border min-h-48 min-w-72">
                {/*header*/}
                <div className="flex justify-between">
                    {/*left side*/}
                    <div className="flex items-center text-md">
                        <div className="text-gray-500 pr-2">
                            <ShareIcon size="sm"/>
                        </div>
                        {title}
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500">
                            {/*clickable share icon */}
                            <a href={link} target="_blank">
                                <ShareIcon size="sm"/>
                            </a>
                        </div>
                        <div className="text-gray-500">
                            <ShareIcon size="sm"/>
                        </div>
                    </div>
                </div>
                
                {/*content section*/}
                <div className="pt-4">
                    {/*render youtube video if */}
                    {type === "youtube" && (
                        <iframe 
                            className="w-full"
                            src = {link.replace("watch","embed")
                                .replace("?v=","/")
                            }
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>    
                    )}

                    {/*render Twitter embed if type is twitter*/}
                    {type === "twitter" &&(
                        <blockquote className="twitter-tweet">
                            <a href={link.replace("x.com","twitter.com")}></a>
                        </blockquote>
                    )}
                </div>
            </div>
        </div>
    );
}