

function checkSlotAvailability (time, jobLength, date, availability) {
    let currentDate = '2016-05-20';
    let currentTime = '11:27:00';

    // your code here
        if(jobLength > 5 || jobLength < 1) {
            return "Error, please enter a valid JobLength"
        };

        if(time > 17 || time < 9) {
            return "Operating times are from 8:00 - 18:00, please enter a valid time"
        }

        if(!availability.includes(time)) {
            return <td className="full cell">Full</td>
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
                    return <td className="unavailable cell">Unavailableb</td>
                }
            }
        //check for last slot of the day
        } else if(time + jobLength === 18) {
            let finishTime = time + jobLength;

            //check if actually available
                for(let i = time - beginningBuffer; i < finishTime; i++) {
                    if(!availability.includes(i)) {
                        return <td className="unavailable cell">Unavailablea</td>
                    }
                }
        } else {
            //buffer before and after counts, so the time slots before and after the job need to remain open
            let finishTime = time + jobLength + buffer;
            //check if actually available
            for(let i = time - beginningBuffer; i < finishTime; i++) {
                if(!availability.includes(i)) {
                    return <td className="unavailable cell">Unavailable</td>
                }
            }
        }

        return <td className="available cell">Available</td>;
    };

    export default checkSlotAvailability;