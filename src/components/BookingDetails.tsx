import BirdImg from '../assets/bird.svg';

const BookingDetails = ({ setShowBookingDetails }: any) => {
    return (
        <>
            <div onClick={() => setShowBookingDetails(false)} className='fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60'>
                <div className='mx-4 w-full max-w-2xl overflow-hidden rounded-[3px] bg-white p-4' role='dialog' onClick={() => setShowBookingDetails(true)}>
                    <div>
                        <div className='flex justify-center'>
                            <img src={BirdImg} className='h-[74px] w-[74px] rounded-full' alt='' />
                        </div>
                        <div className='mt-3 space-y-3'>
                            <p className='text-sm leading-none text-gray'>
                                1. <span className='font-semibold'>SELF VALIDATION:</span> Click on the button - Scan conductor QR for validation - and scan the
                                QR code displayed by the conductor{' '}
                            </p>
                            <p className='text-sm leading-none text-gray'>
                                2. <span className='font-semibold'>CONDUCTOR VALIDATION:</span>
                                {'  '}
                                Present your pass QR code displayed here to the conductor for validation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingDetails;
