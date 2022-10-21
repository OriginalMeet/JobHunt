import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button() {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => { navigate("/days"); }} type="button" className="py-4 px-10 font-googleSans text-violet-900 text-xl font-bold bg-purple-100 hover:bg-purple-200 rounded-3xl hover:rounded-md hover:shadow transition-all hover:transition-all">Let's GO</button>
        </div>
    )
}