
function checkSlotAvailability (time, jobLength, date, availability) {

    // your code here
    let currentDate = '2016-05-19T11:27:00';

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
        const bookingTime = new Date(date)
        bookingTime.setHours(time - 2)
        // Check that the current time is more than 2 hours away from the booking time
        if(new Date(currentDate).getTime() > bookingTime.getTime()) {
            return "UNAVAILABLE"
        }

        let buffer = 1;


        //check if time is first slot of the day
        if(availability[0] === time) {
            //then beginning buffer not needed unless booking is for current day
            let finishTime = time + jobLength + buffer;
            //check if actually available
            for(let i = time; i < finishTime; i++) {
                if(!availability.includes(i)) {
                    return "UNAVAILABLE"
                }
                
            }
        //check for last slot of the day
        } else if(time + jobLength === 18) {
            let finishTime = time + jobLength;

            //check if actually available
                for(let i = time - 1; i < finishTime; i++) {
                    if(!availability.includes(i)) {
                        return "UNAVAILABLE"
                    }
                }
        } else {
            //buffer before and after counts, so the time slots before and after the job need to remain open
            let finishTime = time + jobLength + buffer;
            //check if actually available
            for(let i = time - 1; i < finishTime; i++) {
                if(!availability.includes(i)) {
                    return "UNAVAILABLE"
                }
            }
        }

        return "AVAILABLE";
    };

    console.log(checkSlotAvailability (9, 1, '2016-05-20', [9, 10, 14, 15, 16, 17]))
    console.log(checkSlotAvailability (10, 1, '2016-05-20', [9, 10, 14, 15, 16, 17]))
    console.log(checkSlotAvailability (11, 1, '2016-05-20', [9, 10, 14, 15, 16, 17]))

    
    function formatSlot(availability) {
        switch (availability) {
            case "FULL":
                return <td className="full cell">Full</td>
            case "AVAILABLE": 
                return <td className="available cell">Available</td>
            case "UNAVAILABLE":
                return <td className="unavailable cell">Unavailable</td> 
            default:
                return <td className="unavailable cell">Unavailable</td>
        }
    }

    export {checkSlotAvailability, formatSlot};