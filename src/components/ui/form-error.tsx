'use client';
import React from 'react';
import { cn } from '../../utils/extractBusNumber';

interface FormErrorProps {
    message: string | undefined | any;
    className?: string;
}

const FormError: React.FC<FormErrorProps> = ({ message, className }) => {
    return <p className={cn(className, 'ml-1 text-xs font-normal text-red-500')}>{message}</p>;
};

export default FormError;
