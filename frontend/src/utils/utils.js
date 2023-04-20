
export const formatTime = (hours, minutes) => {
    let output = ""
    let newHrs;
    let newMins;
    let amPm;
    if (hours === 0) {
        newHrs = '12';
        amPm = 'AM';
    } else if (hours < 12) {
        newHrs = hours.toString();
        amPm = 'AM';
    } else if (hours === 12) {
        newHrs = hours.toString();
        amPm = 'PM';
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

export const formatMonth = month => {
    let key = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    }
    return key[month];
}

export const formFormatTime = obj => {
    let output = '';
    if (obj.hours < 10) {
        output += `0${obj.hours.toString()}`
    } else {
        output += obj.hours.toString();
    }
    output += ":"
    if (obj.minutes < 10) {
        output += `0${obj.minutes.toString()}`
    } else {
        output += obj.minutes.toString();
    }
    return output;
}

export const formFormatDate = obj => {
    let output = '';
    output += `${obj.year.toString()}`
    output += '-'

    if (obj.month < 10) {
        output += `0${obj.month.toString()}`
    }else{
        output += `${obj.month.toString()}`
    }

    output += '-'

    if (obj.day < 10) {
        output += `0${obj.day.toString()}`
    }else{
        output += `${obj.day.toString()}`
    }

    return output
}