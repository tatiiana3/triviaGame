import React from 'react';
import Button from '../button/Button'
import {
    Card,
    Container
} from '@material-ui/core'
import './intro.css'

const Intro = ({setTriviaStatus}) => {
    return (
        <Container maxWidth="sm">
            <Card className="introContainer">
            <h3 className="titles">Get Started!</h3>
            <p>Start Practicing Your Trivia Skills Now</p>
            <Button message="Start" handleSubmit={() => setTriviaStatus(true)}/>
            </Card>
        </Container>
    )
}

export default Intro