import { randomizer } from './Quiz';
import { randomizeQuestions, allQuestions } from '../../data'

describe('randomizing questions and answers', () => {
    it('picks 10 random questions out of the data passed', () => {
        let firstQuestions = randomizeQuestions(allQuestions)
        expect(firstQuestions.length).toEqual(10);
        let secondQuestions = randomizeQuestions(allQuestions)
        expect(JSON.stringify(firstQuestions) === JSON.stringify(secondQuestions)).toEqual(false);
    })

    it('randomizes the answers', () => {
        const answers = ["Chick", "Kitty", "Puppy", "Mouse"];
        const answersCopy = ["Chick", "Kitty", "Puppy", "Mouse"]
        let firstRandom = randomizer(answers)
        let secRandom = randomizer(answersCopy)
        expect(JSON.stringify(secRandom) === JSON.stringify(firstRandom)).toEqual(false);
    })
})


