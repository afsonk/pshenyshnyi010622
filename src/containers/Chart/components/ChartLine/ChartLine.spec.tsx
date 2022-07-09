import {render, screen} from "@testing-library/react";
import ChartLine from "./index";
import {IChartLineExtended} from "../../types";
import {countLeftIndent} from "../../helpers";

const initialData: Array<IChartLineExtended> = [
    {name: "Landing Page", time: 3, width: 30},
    {name: "Configurator", time: 2, width: 2},
    {name: "Check-out", time: 4, width: 4},
    {name: "Deal", time: 1, width: 1},
];

describe("ChartLine component test", () => {
    it("should render without crash", () => {
        render(<ChartLine line={initialData[0]} index={0} arr={initialData} />);

        const elem = screen.getByTestId("chartLine");
        expect(elem).toBeInTheDocument();
    });

    it("should create elements with input props", () => {
        const chartLineProp = initialData[2];
        const expectedLeftIndent = `${countLeftIndent(initialData, 2)}%`;

        render(<ChartLine line={chartLineProp} index={2} arr={initialData} />);

        const text = screen.getByTestId("chartText");
        const value = screen.getByTestId("chartValue");

        expect(text).toHaveTextContent(chartLineProp.name);
        expect(value).toHaveTextContent(chartLineProp.time + '');
        expect(value.style.maxWidth).toBe(chartLineProp.width + '%');
        expect(value.style.left).toBe(expectedLeftIndent);
    });
})