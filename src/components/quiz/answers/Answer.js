import React from 'react';
import Button from '../../button/Button';
import swal from 'sweetalert';

import './AnswerStyles.css'

const Answer = ({ answers, correctAnswer, setScore, currScore, questionIdx, setQuestionIdx }) => {
    const [selectedAnswer, setAnswer] = React.useState("");
    const [submitted, setSubmit] = React.useState(false)

    const randomizer = (answers) => {
        for (let i = 0; i < answers.length; i++) {
            let randomIdx = Math.floor(Math.random() * (answers.length - 1))
            let temp = answers[i]
            answers[i] = answers[randomIdx]
            answers[randomIdx] = temp
        }
        return answers
    }
    const handleSubmit = () => {
        if (!selectedAnswer) {
            swal("Please Select an Option")
        }
        else {
            setSubmit(true);
            if (selectedAnswer === correctAnswer) {
                setScore(currScore + 1)
            }
        }
    }

    const handleNext = () => {
        setQuestionIdx(questionIdx + 1)
        setAnswer("")
        setSubmit(false)
    }
    return (
        <div>
            {!submitted ?
                <div className="answerContainer">
                    {answers.map((answer, i) => {
                        let currClass = ""
                        if (answer === selectedAnswer) {
                            currClass = "selectedAnswer"
                        }
                        return (
                            <div key={i} className={`oneAnswer ${currClass}`} onClick={() => setAnswer(answer)}>{answer}</div>
                        )
                    })
                    }
                    <br></br>
                    <Button message="Submit" handleSubmit={handleSubmit} />
                </div>
                :
                <div className="answerContainer">
                    {answers.map((answer, i) => {
                        let currClass = "";
                        if (answer === selectedAnswer) {
                            currClass = "wrongAnswer"
                        }
                        if (answer === correctAnswer) {
                            currClass = "selectedAnswer"
                        }
                        return (
                            <div className={`oneAnswer ${currClass}`} key={i}>{answer}</div>
                        )
                    })
                    }
                    <br></br>
                    <Button message="Next" handleSubmit={handleNext} />

                    {selectedAnswer === correctAnswer ?

                        <p>The answer you chose is correct!</p>
                        :
                        <div>
                            <p>Oops, you guessed wrong!</p>
                            <p>The right answer is {correctAnswer}</p>
                        </div>

                    }
                </div>
            }

        </div>
    )
}

export default Answer