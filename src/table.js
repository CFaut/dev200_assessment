import "./css/table.css"

function Table({length}) {
    
let currentDate = '2016-05-20';
let currentTime = '11:27:00';

console.log(length)

function checkSlotAvailability (time, jobLength, date, availability) {
    // your code here
        if(jobLength > 5 || jobLength < 1) {
            return "Error, please enter a valid JobLength"
        };

        if(time > 17 || time < 9) {
            return "Operating times are from 8:00 - 18:00, please enter a valid time"
        }

        if(!availability.includes(time)) {
            return "FULL"
        };

        //if date is today, buffer is 2 hours, otherwise 1 hour
        let buffer = 1;
        let beginningBuffer = 1;
        if(date === currentDate) {
            beginningBuffer = 2;
        } 

        //check if time is first slot of the day
        if(availability[0] === time) {
            //then beginning buffer not needed unless booking is for current day
            beginningBuffer > 1? beginningBuffer = 2 : beginningBuffer = 0;
            let finishTime = time + jobLength + buffer;
            //check if actually available
            for(let i = time - beginningBuffer; i < finishTime; i++) {
                if(!availability.includes(i)) {
                    return "UNAVAILABLE"
                }
            }
        //check for last slot of the day
        } else if(time + jobLength === 18) {
            let finishTime = time + jobLength;

            //check if actually available
                for(let i = time - beginningBuffer; i < finishTime; i++) {
                    if(!availability.includes(i)) {
                        return "UNAVAILABLE"
                    }
                }
        } else {
            //buffer before and after counts, so the time slots before and after the job need to remain open
            let finishTime = time + jobLength + buffer;
            //check if actually available
            for(let i = time - beginningBuffer; i < finishTime; i++) {
                if(!availability.includes(i)) {
                    return "UNAVAILABLE"
                }
            }
        }

        return "AVAILABLE";
    };

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
                <tr>
                    <th>time slots</th>  
                    <th>9-10</th>
                    <th>10-11</th>
                    <th>11-12</th>
                    <th>12-13</th>
                    <th>13-14</th>
                    <th>14-15</th>
                    <th>15-16</th>
                    <th>16-17</th>
                    <th>17-18</th>
                </tr>
                {data.map((data) => (
                    <div>
                    <tr> 
                        <td>{data.Date}</td>
                        <td>{checkSlotAvailability(9, length, data.Date, data.HoursAvailable)}</td>
                    </tr>
                    <tr>
                        <td>{checkSlotAvailability(10, length, data.Date, data.HoursAvailable)}</td>
                    </tr>
                    <tr>
                        <td>{checkSlotAvailability(11, length, data.Date, data.HoursAvailable)}</td>
                    </tr>
                    <tr>
                        <td>{checkSlotAvailability(12, length, data.Date, data.HoursAvailable)}</td>
                    </tr>
                    <tr>
                        <td>{checkSlotAvailability(13, length, data.Date, data.HoursAvailable)}</td>
                    </tr>
                    <tr>
                        <td>{checkSlotAvailability(14, length, data.Date, data.HoursAvailable)}</td>
                    </tr>
                    <tr>
                        <td>{checkSlotAvailability(15, length, data.Date, data.HoursAvailable)}</td>
                    </tr>
                    <tr>
                        <td>{checkSlotAvailability(16, length, data.Date, data.HoursAvailable)}</td>
                    </tr>
                    <tr>
                        <td>{checkSlotAvailability(17, length, data.Date, data.HoursAvailable)}</td>
                    </tr>
                    </div>
                    )) }
                
            </table>

        </div>
      </div>
    );
  }
  
  export default Table;
  