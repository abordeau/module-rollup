import React, {useEffect, useState} from "react";
import {rword} from "rword"


const HelloWorld: React.FC = () => {
    const [word, setWord] = useState<string>('');

    useEffect(() => {
        // @ts-ignore
        setWord(rword.generate(1))
    }, [])
    return (
        <div
            className='helloWorld'
        >
            Here the name of the day : {word}
        </div>
    )
};

export default HelloWorld;
