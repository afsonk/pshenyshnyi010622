import "./style.css";
import {countLeftIndent} from "../../helpers";
import {IChartLineExtended} from "../../types";

type Props = {
    line: IChartLineExtended,
    arr: Array<IChartLineExtended>,
    index: number
};

function ChartLine({line, arr, index}: Props): JSX.Element {
    const style = {
        maxWidth: `${line.width}%`,
        left: `${countLeftIndent(arr, index)}%`
    };

    return (
        <div className='chart-line' data-testid='chartLine'>
            <p className='chart-line__text' data-testid='chartText'>{line.name}</p>
            <div className='chart-line__value'>
                <div className='chart-line__value-fill' style={style} data-testid='chartValue'>{line.time}</div>
            </div>
        </div>
    )
}

export default ChartLine;