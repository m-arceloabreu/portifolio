import Link from "next/link";
export default function NotFound(){
    return(
        <div className="bg-black w-screen h-screen flex items-center justify-center">
            <div className="p-5 border-solid bg-white bg-opacity-20 flex flex-col justify-center items-center">
                <div className="font-heebo text-4xl text-primary">404 - page not found</div>
                <div className="font-lato text-2xl text-secondary">Try going to <Link className="text-primary" href='/'>Home Page</Link></div>
            </div>
        </div>
    );
}