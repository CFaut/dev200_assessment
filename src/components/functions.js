
function checkSlotAvailability (time, jobLength, date, availability) {

    // your code here
    let currentDate = '2016-05-18T11:27:00';

        //some initial checks in case needed at some stage
        if(jobLength > 5 || jobLength < 1) {
            return "Error, please enter a valid JobLength"
        };

        if(time > 17 || time < 9) {
            return "Operating times are from 8:00 - 18:00, please enter a valid time"
        }

        //first check if slot is full
        if(!availability.includes(time)) {
            return "FULL"
        };

        // Check that the current time is more than 2 hours away from the booking time
        const bookingTime = new Date(date)
        bookingTime.setHours(time - 2)
        if(new Date(currentDate).getTime() > bookingTime.getTime()) {
            return "UNAVAILABLE"
        }

        //declare variable buffer 
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

    export {checkSlotAvailability};