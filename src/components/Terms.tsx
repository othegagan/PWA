import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
const Terms = () => {
    const [showTerms, setShowTerms] = useState(false);

    return (
        <>
            {showTerms && (
                <div
                    onClick={() => {
                        setShowTerms(!showTerms);
                    }}
                    className='fixed inset-0 z-40 flex items-end justify-center bg-black bg-opacity-60'>
                    <div className='w-full overflow-hidden bg-white p-8'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-4'>
                                <div className='max-w-[10px]'>
                                    <svg className='h-2 w-2' viewBox='0 0 14 14' fill='none'>
                                        <circle cx='6.39734' cy='6.16113' r='6' fill='#0DBBC4' />
                                    </svg>
                                </div>
                                <p className='text-sm font-medium leading-none text-mid-green'>
                                    Pass is valid for travel for the services it has been purchased and until the expiry date printed on the pass
                                </p>
                            </div>
                            <div className='flex gap-4'>
                                <div className='max-w-[10px]'>
                                    <svg className='h-2 w-2' viewBox='0 0 14 14' fill='none'>
                                        <circle cx='6.39734' cy='6.16113' r='6' fill='#0DBBC4' />
                                    </svg>
                                </div>
                                <p className='text-sm font-medium leading-none text-mid-green'>
                                    In case the conductor asks for your ID proof, you can either show a physical/digital copy of the ID used at the time of
                                    booking.
                                </p>
                            </div>
                            <div className='flex gap-4'>
                                <div className='max-w-[10px]'>
                                    <svg className='h-2 w-2' viewBox='0 0 14 14' fill='none'>
                                        <circle cx='6.39734' cy='6.16113' r='6' fill='#0DBBC4' />
                                    </svg>
                                </div>
                                <p className='text-sm font-medium leading-none text-mid-green'>Only one pass is allowed for one ID card</p>
                            </div>
                            <div className='flex gap-4'>
                                <div className='max-w-[10px]'>
                                    <svg className='h-2 w-2' viewBox='0 0 14 14' fill='none'>
                                        <circle cx='6.39734' cy='6.16113' r='6' fill='#0DBBC4' />
                                    </svg>
                                </div>
                                <p className='text-sm font-medium leading-none text-mid-green'>
                                    Pass holders must show their passes to conductors or any authorised person on demand
                                </p>
                            </div>
                            <div className='flex gap-4'>
                                <div className='max-w-[10px]'>
                                    <svg className='h-2 w-2' viewBox='0 0 14 14' fill='none'>
                                        <circle cx='6.39734' cy='6.16113' r='6' fill='#0DBBC4' />
                                    </svg>
                                </div>
                                <p className='text-sm font-medium leading-none text-mid-green'>
                                    Improper/misuse of past results in withdrawal of pass attract penalty and pass holder will be liable to legal implications
                                </p>
                            </div>
                            <div className='flex gap-4'>
                                <div className='max-w-[10px]'>
                                    <svg className='h-2 w-2' viewBox='0 0 14 14' fill='none'>
                                        <circle cx='6.39734' cy='6.16113' r='6' fill='#0DBBC4' />
                                    </svg>
                                </div>
                                <p className='text-sm font-medium leading-none text-mid-green'>
                                    BMTC is not responsible if passenger/pass holder's mobile application is not working or switched off
                                </p>
                            </div>
                            <div className='flex gap-4'>
                                <div className='max-w-[10px]'>
                                    <svg className='h-2 w-2' viewBox='0 0 14 14' fill='none'>
                                        <circle cx='6.39734' cy='6.16113' r='6' fill='#0DBBC4' />
                                    </svg>
                                </div>
                                <p className='text-sm font-medium leading-none text-mid-green'>
                                    BMTC is not responsible if passenger/pass holder has entered wrong ID number in mobile pass purchased and the same cannot be
                                    accepted
                                </p>
                            </div>
                            <div className='flex gap-4'>
                                <div className='max-w-[10px]'>
                                    <svg className='h-2 w-2' viewBox='0 0 14 14' fill='none'>
                                        <circle cx='6.39734' cy='6.16113' r='6' fill='#0DBBC4' />
                                    </svg>
                                </div>
                                <p className='text-sm font-medium leading-none text-mid-green'>
                                    Pass holders should abide by and accept the conditions on which the pass is issued
                                </p>
                            </div>
                            <div className='flex gap-4'>
                                <div className='max-w-[10px]'>
                                    <svg className='h-2 w-2' viewBox='0 0 14 14' fill='none'>
                                        <circle cx='6.39734' cy='6.16113' r='6' fill='#0DBBC4' />
                                    </svg>
                                </div>
                                <p className='text-sm font-medium leading-none text-mid-green'>
                                    {' '}
                                    It is not required to carry BMTC ID card for pass holders who have purchased a digital pass
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div
                className='mx-auto mb-6 w-full max-w-2xl rounded-[10px] bg-[#ECECEC] px-4'
                onClick={() => {
                    setShowTerms(true);
                }}>
                <div
                    className='flex items-center justify-between rounded-lg bg-white px-3 py-3'
                    style={{
                        boxShadow: ' 0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
                    }}>
                    <p className='font-medium text-gray'>Terms and Conditions</p>
                    <IoIosArrowDown />
                </div>
            </div>
        </>
    );
};

export default Terms;
