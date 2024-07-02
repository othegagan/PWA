import { Link } from 'react-router-dom';
import CustomQRScanner from './CustomQRScanner';
import Terms from './Terms';
import { useEffect, useState } from 'react';
import PassFare from './PassFare';
import BookingDetails from './BookingDetails';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';
import { LiaQrcodeSolid } from 'react-icons/lia';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { TbMailOpenedFilled } from 'react-icons/tb';
import useProfileData from '../hooks/useProfileData';

const Pass = () => {
    const { profileData } = useProfileData();

    const [showQRScanner, setshowQRScanner] = useState(false);
    const [busNumber, setBusNumber] = useState('');
    const [lastValidated, setLastValidated] = useState('');
    const [showPassFare, setShowPassFare] = useState(false);
    const [showBookingDetails, setShowBookingDetails] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const storedBusNumber = localStorage.getItem('busNumber');
        const storedTime = localStorage.getItem('time');
        setBusNumber(storedBusNumber || '');
        setLastValidated(storedTime || '');
    }, []);

    return (
        <>
            {showQRScanner && (
                <CustomQRScanner
                    setBusNumber={setBusNumber}
                    setshowQRScanner={setshowQRScanner}
                    setLastValidated={setLastValidated}
                    setShowSuccess={setShowSuccess}
                    setShowError={setShowError}
                />
            )}

            {showBookingDetails && <BookingDetails setShowBookingDetails={setShowBookingDetails} />}

            {showPassFare && <PassFare setShowPassFare={setShowPassFare} />}

            {showSuccess && <SuccessAlert setShowSuccess={setShowSuccess} />}

            {showError && <ErrorAlert setShowError={setShowError} />}

            {!showQRScanner && (
                <div className='h- flex flex-col bg-[#ECECEC]'>
                    <div className='fixed z-50 flex w-full flex-row items-center justify-between bg-[#122A34] px-6 pb-3 pt-3'>
                        <div className='flex flex-row items-center gap-6'>
                            <Link to='/bookings'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
                                    <path d='M14 6.125H3.35125L8.2425 1.23375L7 0L0 7L7 14L8.23375 12.7663L3.35125 7.875H14V6.125Z' fill='white' />
                                </svg>
                            </Link>

                            <p className='text-lg font-medium text-white'>Your Bus Pass</p>
                        </div>

                        <p className='text-[14px] font-medium text-white'>Support</p>
                    </div>

                    <div
                        className='mx-4 mb-6 max-w-2xl rounded-b-none rounded-t-[10px] bg-[#ECECEC] pt-[4.5rem]'
                        style={{
                            boxShadow: ' 0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
                        }}>
                        <div className='max-w-2xl rounded-[10px] bg-white px-3 py-4'>
                            <div className='flex gap-[18px]'>
                                <div className="h-[70px] w-[70px] rounded-full bg-[url('assets/bmtc-logo.jpg')] bg-cover"></div>

                                <div className='flex flex-col gap-[5px]'>
                                    <p className='text-[18px] font-normal text-black'>Ordinary Monthly Pass</p>

                                    <div className='flex flex-row gap-2'>
                                        <div className='rounded-[6px] bg-[#FDE685] px-3 py-1'>
                                            <p className='text-[14px] font-medium text-[#9A7D00]'>monthly</p>
                                        </div>
                                        <div className='rounded-[6px] bg-[hsl(0,0%,93%)] px-3 py-1'>
                                            <p className='text-[14px] font-medium text-[hsl(0,0%,14%)]'>Ordinary</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='mt-2 text-[16px] font-normal text-black'>
                                <span className='text-gray'>Pass ID:</span>
                                <span className='pl-6'>{profileData?.passId}</span>
                            </p>

                            <div
                                className='mt-2 flex items-center justify-center rounded-[6px] bg-[#4ad9e4] py-2'
                                onClick={() => {
                                    setTimeout(() => {
                                        setshowQRScanner(true);
                                    }, 400);
                                }}>
                                <div className='flex items-center gap-2'>
                                    <LiaQrcodeSolid className='h-8 w-8 text-white' />
                                    <span className='text-md font-normal text-white'>Scan QR</span>
                                </div>
                            </div>

                            <p onClick={() => setShowBookingDetails(true)} className='mt-3 text-center text-[17px] font-medium tracking-tight text-[#4ad9e4]'>
                                <div className='flex items-center justify-center gap-2'>
                                    <AiOutlineInfoCircle /> How to Validate You Pass?
                                </div>
                            </p>
                        </div>
                    </div>

                    <div
                        className='mx-auto mb-6 max-w-2xl rounded-[10px] bg-white px-4 py-6 pb-3'
                        style={{
                            boxShadow: ' 0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
                        }}>
                        <h2 className='-mt-2 text-[18px] font-medium text-[#0D2733]'>Booking Details</h2>
                        <Lines />
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-0'>
                                    <p className='label'>Passenger name</p>
                                    <p className='value'>{profileData?.username}</p>
                                </div>
                                <div className='flex flex-col gap-0'>
                                    <p className='label'>Identification type</p>
                                    <p className='value'>Addhar Card</p>
                                </div>
                                <div className='flex flex-col gap-0'>
                                    <p className='label'>Identification number (Last 4 digits)</p>
                                    <p className='value'>{profileData?.addharNumber}</p>
                                </div>
                                <div className='flex flex-col gap-0'>
                                    <p className='label'>Pass purchase date</p>
                                    <p className='value'>{profileData?.purchaseDate}</p>
                                </div>
                                <div className='flex flex-col gap-0'>
                                    <p className='label'>Pass valid from</p>
                                    <p className='value'>{profileData?.passValidFrom}</p>
                                </div>
                                <div className='flex flex-col gap-0'>
                                    <p className='label'>Pass valid till</p>
                                    <p className='value'>{profileData?.passValidTill}</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-end justify-between'>
                                <img src={profileData?.photo || ''} alt='' className='h-24 w-24 rounded-full object-cover object-center' />

                                <div className='mt-3 flex flex-col items-end justify-end'>
                                    <p className='text-sm font-medium text-gray underline underline-offset-2' onClick={() => setShowPassFare(true)}>
                                        Pass fare
                                    </p>
                                    <p className='text-xl font-medium leading-none text-mid-green'>₹ 1050.0</p>
                                </div>
                            </div>
                        </div>

                        <Lines />

                        <div className='my-5 flex items-center justify-center'>
                            <div className='flex flex-row items-center gap-2 rounded-md border-2 border-[#4ad9e4] px-3 py-2 text-sm font-medium text-[#4ad9e4]'>
                                <TbMailOpenedFilled className='h-5 w-5' />
                                Generate mail receipt
                            </div>
                        </div>

                        <div className='my-5 flex flex-col gap-2'>
                            <Lines />

                            <div className='rounded-[8px] bg-[#E8F0D8] p-3'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-medium text-gray'>Last Validated</p>
                                        <p className='text-sm font-medium text-mid-green'>{lastValidated}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-medium text-gray'>Bus Number</p>
                                        <p className='text-sm font-medium text-mid-green'>{busNumber}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-medium text-gray'>Validated By</p>
                                        <p className='text-sm font-medium text-mid-green'>Self</p>
                                    </div>
                                </div>
                            </div>

                            <Lines />
                        </div>

                        <div className="mx-auto my-7 h-[180px] w-[180px] bg-[url('assets/qrcode.gif')] bg-cover"></div>
                    </div>
                    <Terms />
                </div>
            )}
        </>
    );
};

export default Pass;

function Lines() {
    return (
        <div className='-my-2 flex items-center gap-1 opacity-60'>
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
            <hr className='my-3 w-3 rounded-md border-2 text-[#f0f0f0]' />
        </div>
    );
}
