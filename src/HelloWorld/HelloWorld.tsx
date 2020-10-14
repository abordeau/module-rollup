import React, {useEffect, useState} from "react";
import {rword} from "rword"


const HelloWorld: React.FC = () => {
    const [word, setWord] = useState<string>('');

    useEffect(() => {
        console.log('useEffect')
        getNewWord()
    }, [])

    function getNewWord() {
        console.log('getNewWord')
        const word: string = rword.generate(1) as string
        console.log(`rword ? ${rword}`)
        console.log(`generate ? ${rword.generate}`)
        console.log('word > ', word)
        setWord(word)
    }

    return (
        <div
            className='helloWorld'
        >
            Here the name of the day : {word}
            <br/>
            <button onClick={getNewWord}>New World plz</button>
        </div>
    )
};

export default HelloWorld;
