//@ts-ignore
import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { DateTime } from 'luxon';
import { twMerge } from 'tailwind-merge';

export const extractBusNumber = (inputString: any) => {
    const regex = /tummoc_qr=([A-Z0-9\s]+)&/i;
    const match = inputString.match(regex);

    if (match && match[1]) {
        return match[1].replace('Bangalore', '');
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
