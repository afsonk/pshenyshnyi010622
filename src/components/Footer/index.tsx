import {memo, useEffect, useRef} from "react";
import "./style.css"

type Props = {
    onClick: () => void
}

const Footer = ({onClick}: Props): JSX.Element => {
    const elementRef = useRef<HTMLButtonElement | null>(null);
    const intervalRef = useRef<NodeJS.Timer | null>(null);

    const shuffleOnTime = () => {
        const intervalId = setInterval(() => {
            elementRef.current?.click();
        }, 30000);

        intervalRef.current = intervalId;
    }

    useEffect(() => {
        shuffleOnTime();

        return () => {
            const id = intervalRef.current!;
            clearInterval(id)
        }
    }, [])

    return (
        <footer className="footer" data-testid='footer'>
            <button onClick={onClick}
                    className="shuffle-button"
                    ref={elementRef}
                    data-testid='shuffleButton'>Shuffle</button>
        </footer>
    )
}

export default memo(Footer);