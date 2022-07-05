import "./style.css";
import {IChartLine} from "../../utils/types";

type Props = {
    line: IChartLine
};

function ChartLine({line}: Props): JSX.Element {
    const style = {
        maxWidth: `${line.time * 10}%`
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