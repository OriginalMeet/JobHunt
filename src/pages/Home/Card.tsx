import { useEffect, useState } from "react"
import quotesData from "../../data/quotes.json"

export default function Card() {
    const [quote, setQuote] = useState<string | null>("");
    const [author, setAuthor] = useState<string | null>("");

    function randomNumberInRange(min: number, max: number) {
        // returns a random number in the range of min & max
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        const num = randomNumberInRange(0,1643);
        const data = quotesData[num] 
        setQuote(data.text)
        setAuthor(data.author === null ? "Unknown" : data.author)
    }, [])

    return (
        <div className="w-3/5 h-100% flex flex-col justify-between px-16 py-16 bg-blue-100 rounded-2xl shadow-lg">
            <div className="flex justify-center font-googleSans text-3xl text-center font-extralight">
                {quote}
            </div>
            <div className="flex justify-center font-heading text-xl">
                {author}
            </div>
        </div>
    )
}
