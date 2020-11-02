import React from 'react';
import { randomizeQuestions, allQuestions } from '../../data';
import Answer from './answers/Answer';
import Button from '../button/Button';
import Score from '../score/Score';
import ProgressBar from '../progressBar/ProgressBar';
import {
    Card,
    Container
} from '@material-ui/core'

import './QuizStyle.css';

export const randomizer = (answers) => {
    for (let i = 0; i < answers.length; i++) {
        let randomIdx = Math.floor(Math.random() * (answers.length - 1))
        let temp = answers[i]
        answers[i] = answers[randomIdx]
        answers[randomIdx] = temp
    }
    return answers
}

const Quiz = ({ setTriviaStatus }) => {
    const [questions, setQuestions] = React.useState([]);
    const [questionIdx, setQuestionIdx] = React.useState(0);
    const [score, setScore] = React.useState(0);

    React.useEffect(() => {
        const tenQuestions = randomizeQuestions(allQuestions)
        setQuestions(tenQuestions)
    }, [])
    let currQuestion = questions[questionIdx] ? questions[questionIdx] : {};

    return (
        <Container maxWidth="sm">
            {questionIdx >= questions.length ?
                <div>
                    <Card className="answerBox">
                        <h3>You Finished!🎉</h3>
                        <p>You Scored {score} out of {questions.length}</p>
                        <Button message="Play Again" handleSubmit={() => setTriviaStatus(false)} />

                    </Card>
                </div>
                :
                <div>
                    {currQuestion.correct &&
                        <div className="header">
                            <ProgressBar questionId={questionIdx} totalQs={questions.length} />
                            <Score currScore={score} />
                            <h3>{currQuestion.question}</h3>
                            <Card className="answerBox">
                                <Answer answers={randomizer([...currQuestion.incorrect, currQuestion.correct])} correctAnswer={currQuestion.correct} currScore={score} setScore={setScore} setQuestionIdx={setQuestionIdx} questionIdx={questionIdx} />
                            </Card>
                        </div>

                    }
                </div>
            }
        </Container>

    )
}

export default Quiz