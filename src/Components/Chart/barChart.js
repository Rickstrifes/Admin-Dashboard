// import React from 'react';
// import { Bar } from "react-chartjs-2";
// import { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import {
//     Chart as ChartJS,
//     BarElement,
//     LinearScale,
//     CategoryScale,
// } from "chart.js";
// import moment from "moment";

// ChartJS.register(
//     BarElement,
//     LinearScale,
//     CategoryScale
// );


// const BarChart = () => {
//     const { chartData } = useSelector((state) => state.chartReducer)
//     const countData = {}
//     const [dataChart, setDataChart] = useState({
//         labels: [],
//         datasets: [
//             {
//                 label: "",
//                 data: [],
//             },
//         ],
//     });

//     // FOR COUNT DUPLICATE AND SORTING
//     const dailyData = chartData.map((item) => moment(item, "D MMM").format("D"))
//     const sortData = dailyData.sort((a, b) => a.localeCompare(b))
//     sortData.forEach(function (x) { countData[x] = (countData[x] || 0) + 1; });

//     useEffect(() => {
//         setDataChart({
//             labels: Object.keys(countData),
//             datasets: [
//                 {
//                     label: "Rental",
//                     data: Object.values(countData),
//                     backgroundColor: "#586B90"
//                 },
//             ],
//         });
//     }, [chartData, countData]);

//     const options = {
//         scales: {
//             x: {
//                 beginAtZero: true,
//                 title: {
//                     display: true,
//                     text: "Date"
//                 }
//             },
//             y: {
//                 beginAtZero: true,
//                 title: {
//                     display: true,
//                     text: "Amout of Car Rented"
//                 }
//             }
//         }
//     }

//     return (
//         <div>
//             <Bar data={dataChart} options={options} style={{ width: 800, marginRight: 100, marginTop: 50 }} />
//         </div>
//     );
// };

// export default BarChart

import React from 'react';
import { Bar } from "react-chartjs-2";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from 'react-redux';
import {
    Chart as ChartJS,
    BarElement,
    LinearScale,
    CategoryScale,
} from "chart.js";
import moment from "moment";

ChartJS.register(
    BarElement,
    LinearScale,
    CategoryScale
);


const BarChart = () => {
    const { chartData } = useSelector((state) => state.chartReducer)

    const dailyData = useMemo(() => chartData.map((item) => moment(item, "D MMM").format("D")), [chartData]);
    const countData = useMemo(() => {
        const data = {};
        dailyData.forEach(function (x) { data[x] = (data[x] || 0) + 1; });
        return data;
    }, [dailyData]);

    const [dataChart, setDataChart] = useState({
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
            },
        ],
    });

    useEffect(() => {
        setDataChart({
            labels: Object.keys(countData),
            datasets: [
                {
                    label: "Rental",
                    data: Object.values(countData),
                    backgroundColor: "#586B90"
                },
            ],
        });
    }, [countData]);

    const options = {
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Date"
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Amout of Car Rented"
                }
            }
        }
    }

    return (
        <div>
            <Bar data={dataChart} options={options} style={{ width: 800, marginRight: 100, marginTop: 50 }} />
        </div>
    );
};

export default BarChart;
