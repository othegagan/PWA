const ErrorAlert = ({ setShowError }: any) => {
    return (
        <>
            <div className='fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60'>
                <div className='mx-10 mt-3 flex w-full max-w-2xl flex-col overflow-hidden rounded-[3px] bg-white p-4 pb-2' role='dialog'>
                    <div className='flex justify-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-[60px] w-[60px]' viewBox='0 0 115 115' fill='none'>
                            <circle cx='57.5177' cy='57.5899' r='54.1395' stroke='#E53935' strokeWidth='5' />
                            <path d='M37.0391 37.1113L77.9965 78.0687' stroke='#E53935' strokeWidth='5' strokeLinecap='round' />
                            <path d='M77.9966 37.1113L37.0391 78.0688' stroke='#E53935' strokeWidth='5' strokeLinecap='round' />
                        </svg>
                    </div>

                    <p className='my-3 text-center text-sm font-normal text-gray/80'>Unable to read QR code. Please try again</p>

                    <div className='my-2 flex items-center justify-center'>
                        <div
                            onClick={() => {
                                setShowError(!setShowError);
                            }}
                            className='rounded-lg bg-[#112C35] px-6 py-3 text-white'>
                            OK
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorAlert;
