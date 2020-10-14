import React, {useEffect, useState} from "react";
import {rword} from "rword"


const HelloWorld: React.FC = () => {
    const [word, setWord] = useState<string>('');

    useEffect(() => {
        console.log('useEffect')
        const word: string = rword.generate(1) as string
        console.log('word > ', word)
        setWord(word)
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
