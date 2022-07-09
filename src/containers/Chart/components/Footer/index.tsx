import "./style.css";

type Props = {
    onClick: () => void
}

const Footer = ({onClick}: Props): JSX.Element => {
    return (
        <footer className="footer" data-testid='footer'>
            <button onClick={onClick}
                    className="shuffle-button"
                    data-testid='shuffleButton'>Shuffle</button>
        </footer>
    )
}

export default Footer;