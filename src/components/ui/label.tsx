import React from 'react';

export default function Label({ children }: { children: React.ReactNode }) {
    return <label className='text-gray-900 block select-text text-sm font-medium leading-6'>{children}</label>;
}
