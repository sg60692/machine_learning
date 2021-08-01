import { React } from 'react';
import { Stage, Rect, Layer, Line } from 'react-konva';
import { useState, useRef } from 'react';
import * as api from '../../../../api';
import './drawingboard.scoped.css';
import sweetalert from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(sweetalert);

const DrawingBoard = (props) => {

    const [lines, setLines] = useState([]);
    const isDrawing = useRef(false);
    const stageRef = useRef(false);

    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { points: [pos.x, pos.y] }]);
    };

    const handleMouseMove = (e) => {
        // no drawing - skipping
        if (!isDrawing.current) {
            return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();

        // To draw line
        let lastLine = lines[lines.length - 1];

        if (lastLine) {
            // add point
            lastLine.points = lastLine.points.concat([point.x, point.y]);

            // replace last
            lines.splice(lines.length - 1, 1, lastLine);
            setLines(lines.concat());
        }
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    const handleExport = () => {
        if (lines.length === 0) {
            MySwal.fire({
                title: " Result ",
                html: <p>Draw a number to see prediction</p>,
            });
            return;
        }
        const url = stageRef.current.toDataURL();

        MySwal.fire({
            title: " Result ",
            html: <Alert feature={url} url={props.url} />,
            allowOutsideClick: false
        }).then(() => setLines([]));
    }

    return (
        <div class="top">
            <div className="drawing-area text-center text-dark">
                <Stage
                    width={224}
                    height={224}
                    onMouseDown={handleMouseDown}
                    onMousemove={handleMouseMove}
                    onMouseup={handleMouseUp}
                    className="canvas-stage"
                    ref={stageRef}
                >
                    <Layer>
                        <Rect
                            x={0}
                            y={0}
                            width={224}
                            height={224}
                            fill="black"
                        />
                    </Layer>
                    <Layer>
                        {lines.map((line, i) => (
                            <Line
                                key={i}
                                points={line.points}
                                stroke="#fff"
                                strokeWidth={10}
                                tension={0.5}
                            />
                        ))}
                    </Layer>

                </Stage>
            </div>
            <div className="Project-form-grid" style={{ marginTop: '10px' }}>
                <button type="reset" onClick={e => setLines([])} className="btn-clear">Clear</button>
                <button type="submit" onClick={handleExport} className="btn-submit">Submit</button>
            </div>

        </div>
    )
}

function Alert(props) {
    const [alert, setalert] = useState({ text: "Loading..." });
    console.log(props.feature);
    if (alert.text === "Loading...")
        api.fetchreq({ imageUrl: props.feature }, props.url).then(data => { setalert({ text: data.data }); console.log(data); });

    return <div>{alert.text}</div>
}

export default DrawingBoard
