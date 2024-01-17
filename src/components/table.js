import { useEffect, useState } from "react";
import { checkSlotAvailability, formatDay } from "./functions";
import "../css/table.css"

function Table({ length }) {

    const [localLength, setLength] = useState(length);
    const [selectedTime, setSelectedTime] = useState({})

    useEffect(() => {
        setLength(length)
    }, [length]);


    const data = [
        {
            "Date": "2016-05-18",
            "HoursAvailable": [9, 10, 11, 12, 13, 14, 17]
        },
        {
            "Date": "2016-05-19",
            "HoursAvailable": [9, 10, 11, 12, 13, 14, 15, 16, 17]
        },
        {
            "Date": "2016-05-20",
            "HoursAvailable": [9, 10, 14, 15, 16, 17]
        },
        {
            "Date": "2016-05-21",
            "HoursAvailable": [9, 10, 11, 12, 13]
        },
        {
            "Date": "2016-05-23",
            "HoursAvailable": [13, 14, 15, 16]
        },
        {
            "Date": "2016-05-24",
            "HoursAvailable": [11, 12, 15, 16, 17]
        }
    ];

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] ;


    return (
        <div>
            <h1>Step 2. Select an arrival time.</h1>
            <div className="booking-table">
                <table>
                    <tr>
                        <td className="cell header"></td>
                        {data.map((data) => {
                            let date = new Date(data.Date);
                            return <th className="cell header">{weekDays[date.getDay()]} {date.getDate()}{formatDay(date)}</th>
                        })}
                    </tr>
                    <tbody>
                        {[9, 10, 11, 12, 13, 14, 15, 16, 17].map((time) => (
                            <tr>
                                <td className="table-time">{time}:00-{time + 1}:00</td>
                                {data.map((data) => {
                                    const availability = checkSlotAvailability(time, localLength, data.Date, data.HoursAvailable)
                                    switch (availability) {
                                        case "FULL":
                                            return <td className="full cell">Full</td>
                                        case "AVAILABLE":
                                            if (selectedTime.date === data.Date && (selectedTime.time === time || (time >= selectedTime.time && time < selectedTime.time + selectedTime.localLength))) {
                                                return <td className="selected cell">Selected</td>
                                            }
                                            return <td className="cell"><button className="available" onClick={() => {
                                                setSelectedTime({ date: data.Date, time, localLength })
                                            }}>
                                                Available</button></td>
                                        case "UNAVAILABLE":
                                            if (selectedTime.date === data.Date && (time >= selectedTime.time && time < selectedTime.time + selectedTime.localLength)) {
                                                return <td className="selected cell">Selected</td>
                                            }
                                            return <td className="unavailable cell">Unavailable</td>
                                        default:
                                            return <td className="unavailable cell">Unavailable</td>
                                    }
                                }

                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Table;
