import {render, screen} from "@testing-library/react";
import Header from "./index";

describe('Header component test', () => {
    it('should render without crash', () => {
        render(<Header />);

        const elem = screen.getByText(/SPENT TIME/i);
        expect(elem).toBeInTheDocument();
    })
})