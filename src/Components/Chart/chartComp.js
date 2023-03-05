// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { getDataChart } from "../../redux/actions/dataChartAction";
// import moment from "moment";
// import BarChart from './barChart';
// import "./chartComp.css";

// const ChartComp = () => {
//     const { chartData } = useSelector((state) => state.chartReducer)
//     const [value, setValue] = useState("");
//     const dispatch = useDispatch();

//     const getData = (value) => {
//         dispatch(getDataChart(value));
//     };

//     useEffect(() => {
//         getData(value);
//     }, []);

//     // FOR GET MONTH ONLY
//     const monthData = chartData.map((item) => moment(item, "D MMM YYYY").format("MMM YYYY"))
//     const monthOnly = monthData.filter((element, index) => {
//         return monthData.indexOf(element) === index;
//     });

//     const handleDropdownDate = () => {
//         getData(value)
//     }

//     // FOR SORTING DROPDOWN
//     let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
//         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//     const sortedData = monthOnly.sort((a, b) => {
//         const [monthA, yearA] = a.split(' '),
//             [monthB, yearB] = b.split(' ');
//         if (yearA === yearB)
//             return monthArray.indexOf(monthA) - monthArray.indexOf(monthB);
//         return +yearA - +yearB
//     })

//     return (
//         <div className="chart_component_style" style={{ marginLeft: 300, height: 200 }}>
//             <div className="action-button">
//                 <select onChange={(e) => setValue(e.target.value)} className="dropdown_button">
//                     {sortedData.map((item) => (
//                         <option>{item}</option>
//                     ))}
//                 </select>
//                 <button onClick={handleDropdownDate} className="go_button">Go</button>
//             </div>
//             <div className="chart_style">
//                 <BarChart />
//             </div>
//         </div>
//     );
// };

// export default ChartComp

import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDataChart } from "../../redux/actions/dataChartAction";
import moment from "moment";
import BarChart from './barChart';
import "./chartComp.css";

const ChartComp = () => {
    const { chartData } = useSelector((state) => state.chartReducer)
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const getData = useCallback(() => {
        dispatch(getDataChart(value));
    }, [dispatch, value]);

    useEffect(() => {
        getData();
    }, [getData]);

    // FOR GET MONTH ONLY
    const monthData = chartData.map((item) => moment(item, "D MMM YYYY").format("MMM YYYY"))
    const monthOnly = monthData.filter((element, index) => {
        return monthData.indexOf(element) === index;
    });

    const handleDropdownDate = useCallback(() => {
        getData();
    }, [getData]);

    // FOR SORTING DROPDOWN
    let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const sortedData = monthOnly.sort((a, b) => {
        const [monthA, yearA] = a.split(' '),
            [monthB, yearB] = b.split(' ');
        if (yearA === yearB)
            return monthArray.indexOf(monthA) - monthArray.indexOf(monthB);
        return +yearA - +yearB
    })

    return (
        <div className="chart_component_style" style={{ marginLeft: 300, height: 200 }}>
            <div className="action-button">
                <select onChange={(e) => setValue(e.target.value)} className="dropdown_button">
                    {sortedData.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
                <button onClick={handleDropdownDate} className="go_button">Go</button>
            </div>
            <div className="chart_style">
                <BarChart />
            </div>
        </div>
    );
};

export default ChartComp;
