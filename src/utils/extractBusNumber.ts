//@ts-ignore
import { DateTime } from "luxon";



export const extractBusNumber = (inputString: any) => {
    const regex = /tummoc_qr=([A-Z0-9\s]+)&/i;
    const match = inputString.match(regex);

    if (match && match[1]) {
        return match[1].replace("Bangalore", "");
    } else {
        return null; // Return null if the pattern is not found
    }
}


export const getCurrentTimeFormatted = () => {
    const now = DateTime.now();
    return now.toFormat("dd LLL yyyy, hh:mm a");
}