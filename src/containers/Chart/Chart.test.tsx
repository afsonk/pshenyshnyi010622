import {render, screen} from '@testing-library/react';
import Chart from './Chart';

describe('Chart page', () => {
    it('should render without crash', () => {
        render(<Chart />);

        expect(screen.getByTestId('chart')).toBeInTheDocument();
    });

    it('should render four chart lines', () => {
        render(<Chart />);

        const chartLines = screen.getAllByTestId('chartLine');
        expect(chartLines.length).toBe(4);
    });

    it('should render footer and header components', () => {
       render(<Chart />);

       const header = screen.getByTestId('header');
       const footer = screen.getByTestId('footer');

       expect(header).toBeInTheDocument();
       expect(footer).toBeInTheDocument();
    });
});