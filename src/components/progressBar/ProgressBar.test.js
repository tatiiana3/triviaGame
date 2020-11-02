import { render, screen } from '@testing-library/react';
import React from 'react';
import ProgressBar from './ProgressBar';

describe("<ProgressBar/> Component", () => {
    it('renders the percentage of questions a user has done so far', () => {
        render(<ProgressBar totalQs={10} questionId={4} />);
        let percentage = Math.round(4 / 10 * 100)
        expect(screen.getByText(`${percentage}%`)).toBeInTheDocument();
    })
})