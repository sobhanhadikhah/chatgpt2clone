import React from 'react'
import { Messgere } from "../components/"
function Body() {

    const aiStyle = " bg-white mx-3 bg-opacity-40 text-purple-400 font-semibold self-start backdrop-blur-lg drop-shadow-md mr-auto "
    return (
        <div className="flex flex-col gap-4">


            {/* clint message */}
            <Messgere  />
            {/* AI respone */}
            <Messgere aiStyle={aiStyle} />
        </div>
    )
}

export default Body;