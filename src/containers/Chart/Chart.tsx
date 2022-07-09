import {useCallback, useEffect, useRef, useState} from "react";
import {ChartLine, Header, Footer} from "./components";
import {IChartLine, IChartLineExtended} from "./types";
import "./Chart.css";
import {countWidth, getRandomNumber} from "./helpers";

const initialData = (): Array<IChartLine> => ([
    {name: "Landing Page", time: 7.4},
    {name: "Configurator", time: 0.2},
    {name: "Check-out", time: 7.0},
    {name: "Deal", time: 3.8},
]);

function Chart(): JSX.Element {
    const [data, setData] = useState(initialData);
    const intervalRef = useRef<NodeJS.Timer | null>(null);

    const changeInitialData = useCallback(() => {
        intervalRef.current = setInterval(() => {
            const randomData = data.map((line) => ({
                time: getRandomNumber(),
                name: line.name
            }));

            setData([...randomData]);
        }, 30000);
    }, [data]);

    const shuffleCharts = (): void => {
        const shuffledArr = data.sort(() => Math.random() - 0.5);
        setData([...shuffledArr]);
    };

    const totalTimeCount = data.reduce((acc, next) => next.time + acc, 0);

    const extendedLine = data.map(line => ({
        width: countWidth(line.time, totalTimeCount),
        ...line
    })) as IChartLineExtended[];

    useEffect(() => {
        changeInitialData();

        return () => {
            const id = intervalRef.current!;
            clearInterval(id);
        }
    }, [changeInitialData])

    return (
        <div className="container" data-testid="chart">
            <Header/>
            <main className="chart__list">
                {
                    extendedLine.map((line, i, arr) => {
                        return <ChartLine line={line}
                                          key={line.name}
                                          arr={arr}
                                          index={i}/>
                    })
                }
            </main>
            <Footer onClick={shuffleCharts}/>
        </div>
    );
}

export default Chart;