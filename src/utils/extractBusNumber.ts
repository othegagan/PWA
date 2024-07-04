import clsx , { ClassValue } from 'clsx';
import { DateTime } from 'luxon';
import { twMerge } from 'tailwind-merge';

export const extractBusNumber = (inputString: string) => {
    console.log("inputString", inputString)
    const regex = /tummoc_qr=([A-Z0-9\s-]+)&/i;
    const match = regex.exec(inputString);

    console.log("match", match)
    if (match && match[1]) {
        return match[1].replace('Bangalore', '').trim();
    } else {
        return null; // Return null if the pattern is not found
    }
};

export const getCurrentTimeFormatted = () => {
    const now = DateTime.now();
    return now.toFormat('dd LLL yyyy, hh:mm a');
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
