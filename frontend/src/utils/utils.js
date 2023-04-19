
export const formatTime = (hours, minutes) => {
    let output = ""
    let newHrs;
    let newMins;
    let amPm;
    if (hours === 0) {
        newHrs = '12';
        amPm = 'AM';
    } else if (hours <= 12) {
        newHrs = hours.toString();
        amPm = 'AM'
    } else {
        newHrs = (hours - 12).toString();
        amPm = 'PM';
    }
    if (minutes <= 9) {
        newMins = '0' + minutes.toString();
    } else {
        newMins = minutes.toString();
    }

    output = newHrs + ":" + newMins + amPm;
    return output
}