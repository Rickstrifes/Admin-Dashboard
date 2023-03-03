// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Bar } from "react-chartjs-2";

// const ChartComponent = () => {
//     const [chartData, setChartData] = useState({});
//     const [startDate, setStartDate] = useState("");
//     const [endDate, setEndDate] = useState("");

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const result = await axios.get(
//                     `https://bootcamp-rent-cars.herokuapp.com/admin/order/reports?start=${startDate}&end=${endDate}`,
//                     {
//                         headers: {
//                             access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc',
//                         },
//                     }
//                 );
//                 const chartData = {
//                     labels: result.data.map((data) => data.day),
//                     datasets: [
//                         {
//                             label: "Order Count",
//                             data: result.data.map((data) => data.orderCount),
//                             backgroundColor: "rgba(75, 192, 192, 0.6)",
//                             borderWidth: 1,
//                         },
//                     ],
//                 };
//                 setChartData(chartData);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         if (startDate && endDate) {
//             fetchData();
//         }
//     }, [startDate, endDate]);

//     const handleStartDateChange = (e) => {
//         setStartDate(e.target.value);
//     };

//     const handleEndDateChange = (e) => {
//         setEndDate(e.target.value);
//     };

//     return (
//         <div>
//             <h2>Order Count Chart</h2>
//             <div>
//                 <label htmlFor="startDate">Start Date:</label>
//                 <input
//                     type="date"
//                     id="startDate"
//                     value={startDate}
//                     onChange={handleStartDateChange}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="endDate">End Date:</label>
//                 <input
//                     type="date"
//                     id="endDate"
//                     value={endDate}
//                     onChange={handleEndDateChange}
//                 />
//             </div>
//             <Bar
//                 data={chartData}
//                 options={{
//                     maintainAspectRatio: false,
//                     scales: {
//                         yAxes: [
//                             {
//                                 ticks: {
//                                     beginAtZero: true,
//                                 },
//                             },
//                         ],
//                     },
//                 }}
//             />
//         </div>
//     );
// };

// export default ChartComponent;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const ChartComponent = () => {
    const [chartData, setChartData] = useState({});
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (startDate && endDate) {
                    const result = await axios.get(
                        `https://bootcamp-rent-cars.herokuapp.com/admin/order/reports?start=${startDate}&end=${endDate}`,
                        {
                            headers: {
                                access_token: "your-access-token",
                            },
                        }
                    );
                    if (result.data) {
                        const chartData = {
                            labels: result.data.map((data) => data.day),
                            datasets: [
                                {
                                    label: "Order Count",
                                    data: result.data.map((data) => data.orderCount),
                                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                                    borderWidth: 1,
                                },
                            ],
                        };
                        setChartData(chartData);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [startDate, endDate]);

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    return (
        <div>
            <h2>Order Count Chart</h2>
            <div>
                <label htmlFor="startDate">Start Date:</label>
                <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={handleStartDateChange}
                />
            </div>
            <div>
                <label htmlFor="endDate">End Date:</label>
                <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={handleEndDateChange}
                />
            </div>
            {chartData.labels && chartData.datasets ? (
                <Bar
                    data={chartData}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                        },
                    }}
                />
            ) : (
                <div>Loading chart...</div>
            )}
        </div>
    );
};

export default ChartComponent;

