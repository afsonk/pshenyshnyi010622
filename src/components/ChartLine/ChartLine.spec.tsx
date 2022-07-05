import {render, screen} from "@testing-library/react";
import ChartLine from "./index";
import {IChartLine} from "../../utils/types";

const props: IChartLine = {
    name: "Test",
    time: 2.4
};

describe("ChartLine component test", () => {
    it("should render without crash", () => {
        render(<ChartLine line={props} />);

        const elem = screen.getByTestId("chartLine");
        expect(elem).toBeInTheDocument();
    });

    it("should create elements with input props", () => {
        const expectedStyle = `${props.time * 10}%`;
        render(<ChartLine line={props} />);

        const text = screen.getByTestId("chartText");
        const value = screen.getByTestId("chartValue");

        expect(text).toHaveTextContent(props.name);
        expect(value).toHaveTextContent(props.time + '');
        expect(value.style.maxWidth).toBe(expectedStyle);
    });
})