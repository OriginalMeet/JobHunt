import QuotesBG from "../../assets/QuotesBG.png";
import Card from "./Card";
import Button from "./Button";

function Quotes() {
    return (
        <div>
            <img className="absolute h-full w-full object-cover -z-10" src={QuotesBG} alt="Background img"/>
            <div className="h-screen flex flex-col justify-between">
                <div className="flex justify-center font-heading text-xl mt-2">
                    Job Hunt
                </div>
                <div className="flex justify-center w-full h-64 m-auto">
                    <Card />
                </div>
                <div className="flex justify-center w-100 h-50 mb-auto">
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Quotes;