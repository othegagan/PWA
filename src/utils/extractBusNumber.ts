import clsx , { ClassValue } from 'clsx';
import { DateTime } from 'luxon';
import { twMerge } from 'tailwind-merge';

export const extractBusNumber = (inputString: string) => {
    const regex = /tummoc_qr=([A-Z0-9\s-]+)Banglore/i;
    const match = regex.exec(inputString);

    if (match && match[1]) {
        const busNumber = match[1].replace('Banglore', '').replace('-', '').trim();
        return busNumber;
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
