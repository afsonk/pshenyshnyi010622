import {useCallback, useState} from "react";
import {ChartLine, Header, Footer} from "../../components";
import {IChartLine} from "../../utils/types";
import "./Chart.css";

const initialData = (): Array<IChartLine> => ([
    {name: "Landing Page", time: 7.4},
    {name: "Configurator", time: 0.2},
    {name: "Check-out", time: 7.0},
    {name: "Deal", time: 3.8},
]);

function Chart(): JSX.Element {
    const [data, setData] = useState(initialData);

    const shuffleCharts = useCallback(() => {
        const shuffledArr = data.sort(() => Math.random() - 0.5);
        setData([...shuffledArr]);
    }, []);

    return (
        <div className="container" data-testid="chart">
            <Header/>
            <main className="chart__list">
                {
                    data.map((line, i) => <ChartLine line={line} key={line.name + i}/>)
                }
            </main>
            <Footer onClick={shuffleCharts}/>
        </div>
    );
}

export default Chart;