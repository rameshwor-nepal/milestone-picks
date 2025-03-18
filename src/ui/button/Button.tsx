import React from 'react'

interface PropsI {
    title: string | null;
}
const Button = ({ title }: PropsI) => {
    return (
        <div>
            <button className="bg-green-2 text-white font-bold py-2 px-4 w-full rounded transition-all hover:bg-green-2/80">
                {title}
            </button>
        </div>
    )
}

export default Button