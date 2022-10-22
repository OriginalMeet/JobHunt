import { useLocation } from 'react-router-dom';
import QuotesBG from '../../assets/QuotesBG.png';


export default function Day() {
    const location = useLocation();
    const day = location.state.id;

    return (
        <div>
            <img className="absolute h-full w-full object-cover -z-10" src={QuotesBG} alt="Background img"/>
            <div className="h-screen flex flex-col justify-between">
                <div className="flex justify-center font-heading text-xl mt-2">
                    Job Hunt
                </div>
                <div className="flex justify-center w-5/6 h-5/6 m-aut shadow-2xl">
                    Day Page: {day}
                </div>
            </div>
        </div>
    )
}