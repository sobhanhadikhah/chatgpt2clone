import React from 'react'

function Messgere({ aiStyle }) {
    return (
        <div className={`border-[#999999] border-2  rounded-xl self-end max-w-[80%] px-5 py-3 break-words ${aiStyle}  `}  >
            <pre className='whitespace-pre-wrap' >
                <span>
                    hi vhast gpt can you help me...
                </span>
            </pre>
        </div>
    )
}

export default Messgere