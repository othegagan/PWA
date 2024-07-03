'use client';
import { cn } from '../../utils/extractBusNumber';

interface FormErrorProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    message?: any;
    className?: string;
}

export default function FormError({ message, className }: FormErrorProps) {
    return <p className={cn(className, 'ml-1 text-xs font-normal text-red-500')}>{message}</p>;
}
