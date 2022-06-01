import "./MovingBackground.scss"

const MovingBackground = (props) => {
    return (
        <div
            className="registration__moving-bg"
            ref={props.containerRef}
            onClick={props.onClick}>
            <div className="moving-bg__content">
                <div className="text">{props.current}</div>
            </div>
        </div>
    );
}

export default MovingBackground