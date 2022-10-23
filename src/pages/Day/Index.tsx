import { useLocation } from 'react-router-dom';
import QuotesBG from '../../assets/QuotesBG.png';
import data from '../../data/data.json';


export default function Day() {
    const location = useLocation()
    const day = location.state.id - 1
    const dayPageData = data[day]
    const leetcodeData = dayPageData.Leetcode

    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    const getClassName = (difficulty: string) => {
        if (difficulty === "easy") {
            return "flex justify-center items-center m-2 p-2 w-96 h-16 font-googleSans text-lg shadow transition-all text-gray-800 bg-slate-50 rounded-md hover:transition-all hover:bg-green-100 hover:text-green-900"
        } else if (difficulty === "medium") {
            return "flex justify-center items-center m-2 p-2 w-96 h-16 font-googleSans text-lg shadow transition-all text-gray-800 bg-slate-50 rounded-md hover:transition-all hover:bg-orange-100 hover:text-orange-900"
        } else {// hard difficulty
            return "flex justify-center items-center m-2 p-2 w-96 h-16 font-googleSans text-lg shadow transition-all text-gray-800 bg-slate-50 rounded-md hover:transition-all hover:bg-red-100 hover:text-red-900"
        }
    }

    return (
        <div>
            <img className="absolute h-full w-full object-cover -z-10" src={QuotesBG} alt="Background img"/>
            <div className="h-screen flex flex-col justify-between">
                <div className="flex justify-center font-heading text-xl mt-2">
                    Job Hunt
                </div>
                <div className="flex flex-col justify-start w-8/12 h-5/6 m-auto">
                    <div className="flex justify-center my-2 justify-center font-googleSans text-4xl font-normal">LeetCode</div>
                    <div className="flex flex-wrap justify-center">
                    {leetcodeData.map((d, _) => 
                        <button type="button" onClick={() => openInNewTab(d.source)} className={getClassName(d.difficulty)}>{d.title}</button>
                    )}
                    </div>
                    {/* <div className="flex justify-center my-2 font-googleSans text-4xl font-normal">System Design - In Progress</div>
                    <div className="flex justify-center my-2 font-googleSans text-4xl font-normal">Extras - In Progress</div> */}
                </div>
            </div>
        </div>
    )
}