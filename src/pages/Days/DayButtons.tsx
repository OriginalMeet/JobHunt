import { useNavigate } from "react-router-dom";

export default function DayButtons() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row flex-wrap justify-around p-12 w-full h-full">
            {[...Array(30)].map((_, i) =>
                <button onClick={() => { navigate("/day", {state:{id:i+1}}); }} key={i+1} type="button" className="disabled transition-all hover:transition-all flex w-24 h-24 m-4 px-8 py-4 justify-center font-poiret font-black text-xl text-violet-900 bg-purple-100 rounded-md shadow hover:bg-purple-200 hover:rounded-3xl hover:text-2xl">
                    Day {i+1}
                </button>
            )}
        </div>
    )
}