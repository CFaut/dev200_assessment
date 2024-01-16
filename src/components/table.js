import { useEffect, useState } from "react";
import {checkSlotAvailability, formatSlot} from "./functions";

import "../css/table.css"

function Table({length}) {

    const [ localLength, setLength ] = useState(length);
 
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
                {[9,10, 11, 12, 13, 14, 15, 16, 17].map((time) => (

                    <tr>
                        <td>{time}:00-{time+1}:00</td>
                {data.map((data) => (
                        
                        formatSlot(checkSlotAvailability(time, localLength, data.Date, data.HoursAvailable))
                        )) }
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
      </div>
    );
  }
  
  export default Table;
  