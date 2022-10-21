import QuotesBG from "../../assets/QuotesBG.png";
import DayButtons from "./DayButtons";

export default function Days() {
    return (
        <div>
            <img className="absolute h-full w-full object-cover -z-10" src={QuotesBG} alt="Background img"/>
            <div className="h-screen flex flex-col justify-between">
                <div className="flex justify-center font-heading text-xl mt-2">
                    Job Hunt
                </div>
                <div className="flex justify-center w-5/6 h-5/6 m-auto">
                    <DayButtons />
                </div>
            </div>
        </div>
    )
}