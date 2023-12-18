import Link from "next/link";

export default function EventNotFound(){
    return(
        <div className="max-w-5xl mx-auto mt-4 p-5">
            <h1 className="text-6xl"> Sorry, we could not find it</h1>
            <Link href="/">Back home</Link>
        </div>
    )
}