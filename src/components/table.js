import { useEffect, useState } from "react";
import { checkSlotAvailability, formatSlot } from "./functions";

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


    return (
        <div>
            <h1>Step 2. Select an arrival time.</h1>
            <div className="booking-table">
                <table>
                    <tbody>
                        {[9, 10, 11, 12, 13, 14, 15, 16, 17].map((time) => (

                            <tr>
                                <td>{time}:00-{time + 1}:00</td>
                                {data.map((data) => {
                                    const availability = checkSlotAvailability(time, localLength, data.Date, data.HoursAvailable)
                                    switch (availability) {
                                        case "FULL":
                                            return <td className="full cell">Full</td>
                                        case "AVAILABLE":
                                            if (selectedTime.date === data.Date && selectedTime.time === time) {
                                                return <td className="selected cell">Selected</td>
                                            }
                                            return <td className="available cell" onClick={() => {
                                                console.log("CLICKED")
                                                setSelectedTime({ date: data.Date, time })
                                            }}>Available</td>
                                        case "UNAVAILABLE":
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
