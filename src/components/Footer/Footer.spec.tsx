import {fireEvent, render, screen} from "@testing-library/react";
import Footer from "./index";

describe("Footer component test", () => {
    const onClick = jest.fn();

    it('should render without crash', () => {
        render(<Footer onClick={onClick}/>);

        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('should call onClick function', () => {
        render(<Footer onClick={onClick}/>);

        const button = screen.getByTestId('shuffleButton');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});