import React, { useState,useEffect,useRef } from "react";
import "./Question.css";
import Correct from "../../assets/Audio/correct.mp3"
import Buzzer2 from "../../assets/Audio/buzzer2.mp3"

const Question = ({ qArr, indexOfCurQ, indexLogic, numOfRightQ }) => {
    const voiceRef = useRef(window.speechSynthesis)
    const [italianVoice,setItalianVoice] =useState();
    useEffect(() => {
        setTimeout(()=>{
            console.log(voiceRef)
            console.log(qArr.italian)
            const voices = voiceRef.current.getVoices();
            console.log(voices)
            const itVoices = voices.filter((voice)=>{
                return voice.lang==="it-IT";
            })
            console.log(itVoices)
            setItalianVoice(itVoices[0])
            // readWord(qArr.italian)
            readWord(qArr.italian)
        },200)

        }, [qArr,indexOfCurQ])//  eslint-disable-line react-hooks/exhaustive-deps
    const readWord = (italianWord) => {
        const utter = new SpeechSynthesisUtterance(italianWord)
        utter.voice = italianVoice
        voiceRef.current.speak(utter);
    }

    
        
    //     useEffect(()=>{
            
    //         readWord(qArr.italian)
            
    // },[qArr,readWord])

    // useCallback(()=>{
        
    // },[qArr])//  eslint-disable-line react-hooks/exhaustive-deps
    
    const shuffleArray = (originalArray) => {
        const array = [...originalArray];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    const onUserSelect = (e) => {
        console.log(e.target.id);
        if (e.target.id === "correct-word") {
            const audio = new Audio();
            audio.src = Correct;
            audio.play();
            setTimeout(() => {
                numOfRightQ();
                indexLogic();

            }, 2000)
        }
        else {
            const audio = new Audio();
            audio.src = Buzzer2;
            audio.play();
            setTimeout(() => {
                indexLogic();
            }, 2000)
        }
    };

    const inesrtAnswers = () => {
        const arrOfA = [
            <div
                className="q-option"
                onClick={onUserSelect}
                key={qArr.english}
                id="correct-word"
            >
                {qArr.english}
            </div>,
            <div
                className="q-option"
                onClick={onUserSelect}
                key={qArr.wrongWords[0]}
                id="worng-word"
            >
                {qArr.wrongWords[0]}
            </div>,
            <div
                className="q-option"
                onClick={onUserSelect}
                key={qArr.wrongWords[1]}
                id="worng-word"
            >
                {qArr.wrongWords[1]}
            </div>,
            <div
                className="q-option"
                onClick={onUserSelect}
                key={qArr.wrongWords[2]}
                id="worng-word"
            >
                {qArr.wrongWords[2]}
            </div>,
        ];
        const suffeledArrOfAnswers = shuffleArray(arrOfA);
        return suffeledArrOfAnswers.map((e) => e);
    };
    return (
        <><div className="container-q">
            <div className="q-title">Choose Your Answer</div>
            <div className="question">
                <div className="q-score">{`${indexOfCurQ + 1} / 10`}</div>
                <div className="q-content">
                    <h2 className="q-header">{qArr.italian}</h2>
                    <div className="q-options"> {inesrtAnswers()}</div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Question;