import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceLine
  } from "recharts";

function BarChartComponent(props) {
    return (
        <>
            <div>
                <h3 className="info-title">NPMI distribution</h3>
            </div>
            <BarChart
                width={500}
                height={300}
                data={props.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="npmi" fill="#8884d8" />
            </BarChart>
        </>

    )
}

export default BarChartComponent;