import { render, screen } from '@testing-library/react';
import React from 'react';
import Answer from './Answer';

describe("<Answer/> Component", () => {
    const answers = ["Chick", "Kitty", "Puppy", "Mouse"]
    it('renders all the possible answers', () => {
        render(<Answer answers={answers} />);
        answers.forEach(answer => {
            expect(screen.getByText(answer)).toBeInTheDocument();
        })
    })
})
