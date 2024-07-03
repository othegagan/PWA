import { useState } from 'react';
import { Link } from 'react-router-dom';
import useProfileData from '../hooks/useProfileData';

const Bookings = () => {
    const { profileData } = useProfileData();
    const [active, setActive] = useState('active');
    return (
        <>
            <div className='flex h-[50px] w-full flex-row items-center justify-start gap-4 px-4'>
                <Link to='/'>
                    <svg width='14' height='14' viewBox='0 0 14 14' className='text-neutral-500' fill='currentColor'>
                        <path d='M14 6.125H3.35125L8.2425 1.23375L7 0L0 7L7 14L8.23375 12.7663L3.35125 7.875H14V6.125Z' />
                    </svg>
                </Link>

                <p className='font-medium'>Bookings</p>
            </div>
            <div className='flex h-[50px] w-full flex-row'>
                <div className='flex h-full w-full flex-row text-[14px] font-medium text-white'>
                    <div className='flex w-1/2 items-center justify-center border-b-2 border-[#11B4BD] text-[#11B4BD]'>Passes</div>
                    <div className='flex w-1/2 items-center justify-center border-b-2 border-neutral-200 text-[#72858C]'>Trips/Tickets</div>
                </div>
            </div>

            <div className="h-full bg-[url('assets/long-bg-design.png')] bg-cover">
                <div className='m-2 flex items-center justify-start gap-4'>
                    <div
                        onClick={() => setActive('active')}
                        className={`w-[25%] rounded-md py-1 text-center text-sm font-normal ${active === 'active' ? 'bg-[#11B4BD30] text-[#11B4BD]' : 'bg-neutral-200 text-neutral-500'}`}>
                        Active
                    </div>
                    <div
                        onClick={() => setActive('expired')}
                        className={`w-[25%] rounded-md py-1 text-center text-sm font-normal ${active === 'expired' ? 'bg-[#11B4BD30] text-[#11B4BD]' : 'bg-neutral-100 text-neutral-500'}`}>
                        Expired
                    </div>
                </div>

                <hr className='my-3 border-neutral-100' />

                {active === 'active' && (
                    <div className='group mx-1 rounded-[7px] bg-gradient-to-r from-[#122A34] to-[#167B83] px-5 py-4 text-white'>
                        <Link to='/pass'>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-2'>
                                    <p className='rounded-[10px] bg-[#a7a7a760] px-2 py-1 text-xs font-normal text-white'>Ordinary</p>
                                    <p className='rounded-[10px] bg-[#a7a7a760] px-2 py-1 text-xs font-normal text-white'>Monthly</p>
                                </div>
                                <p className='text-xl font-medium text-white'>₹ 1050.0</p>
                            </div>

                            <h1 className='mb-[18px] mt-[10px] text-[20px] font-normal text-white'>Ordinary Service Monthly Pass</h1>
                            <div className='flex items-center justify-between'>
                                <div className='flex flex-col'>
                                    <p className='text-sm font-normal'>Pass valid till</p>
                                    <p className='text-xs font-normal'>{profileData?.passValidTill}</p>
                                </div>
                                <div className='rounded bg-[#4C898E] px-4 py-[9px] shadow group-hover:bg-[#62afb6]'> {'>'}</div>
                            </div>
                        </Link>
                    </div>
                )}

                {active == 'expired' && (
                    <div className='flex flex-col gap-3'>
                        <div className='group mx-1 rounded-[7px] bg-gradient-to-r from-[#696969] to-[#B8B8B8] px-5 py-4 text-white'>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-2'>
                                        <p className='rounded-[10px] bg-[#a7a7a7] px-2 py-1 text-xs font-normal text-white'>Ordinary</p>
                                        <p className='rounded-[10px] bg-[#a7a7a7] px-2 py-1 text-xs font-normal text-white'>Monthly</p>
                                    </div>
                                    <p className='text-xl font-medium text-white'>₹ 1050.0</p>
                                </div>

                                <h1 className='mb-[18px] mt-[10px] text-[24px] font-normal text-white'>Ordinary Service Monthly Pass</h1>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-normal'>Pass valid till</p>
                                        <p className='text-xs font-normal'>27 Dec 2023, 11:59 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='group mx-1 rounded-[7px] bg-gradient-to-r from-[#696969] to-[#B8B8B8] px-5 py-4 text-white'>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-2'>
                                        <p className='rounded-[10px] bg-[#a7a7a7] px-2 py-1 text-xs font-normal text-white'>Ordinary</p>
                                        <p className='rounded-[10px] bg-[#a7a7a7] px-2 py-1 text-xs font-normal text-white'>Monthly</p>
                                    </div>
                                    <p className='text-xl font-medium text-white'>₹ 1050.0</p>
                                </div>

                                <h1 className='mb-[18px] mt-[10px] text-[24px] font-normal text-white'>Ordinary Service Monthly Pass</h1>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-normal'>Pass valid till</p>
                                        <p className='text-xs font-normal'>27 Nov 2023, 11:59 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='flex flex-row items-center justify-between px-2'>
                    <div className='h-[2px] w-full border border-[#E5E5E5]'></div>
                    <p className='whitespace-nowrap px-2 py-[10px]'>Looking for pass purchase?</p>
                    <div className='h-[2px] w-full border border-[#E5E5E5]'></div>
                </div>

                <div className='mx-2 flex flex-row items-center justify-center gap-2 rounded-md bg-[#11B4BD] py-3 font-medium text-white'>
                    <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M5.47782 16.8245C4.3411 15.8027 4.19768 15.5244 4.38083 14.6951C4.77594 13.7833 4.06266 13.0567 3.10812 13.5649C2.56318 13.8552 2.28183 13.7089 1.2333 12.5907C0.205441 11.494 6.07807e-07 11.0475 7.07281e-07 9.90964C8.22998e-07 8.586 0.131793 8.41307 4.29329 4.27211C8.04553 0.538072 8.71903 -8.11368e-07 9.63932 -7.30914e-07C11.7596 -5.4555e-07 13.7895 1.64475 13.4297 3.07125C13.1264 4.275 13.7117 4.88861 14.7253 4.42896C15.3943 4.12554 15.6359 4.18789 16.3466 4.84875C17.6012 6.01489 18.1752 7.31796 17.9533 8.49471C17.8089 9.26132 16.679 10.584 13.4565 13.7594C9.50914 17.6487 9.05432 18 7.96897 18C7.0603 18 6.48145 17.7271 5.47782 16.8245ZM9.77854 15.4565C11.1123 14.2187 11.1243 14.1885 10.5344 13.5399C9.96202 12.9105 8.72161 11.9668 9.52917 11.4107C10.1752 10.7679 11.1504 12.1873 11.478 12.5476C12.0701 13.1985 12.0852 13.1905 14.2737 11.0292C15.8775 9.4455 16.4742 8.62811 16.4742 8.01386C16.4742 6.88596 15.372 5.93357 14.2082 6.05507C12.9684 6.18428 11.9518 5.14704 11.9518 3.75236C11.9518 2.63893 10.8813 1.28571 10.0005 1.28571C9.74947 1.28571 8.49065 2.32714 7.20308 3.6C5.13348 5.64525 4.68383 5.78571 5.49139 6.26786C5.79729 6.60439 8.07557 8.23468 7.26801 9C6.46046 10.125 5.08179 7.80943 4.49292 7.44621C3.86109 7.05632 3.68375 7.128 2.54509 8.23468C1.13252 9.60685 1.01752 10.1732 1.91972 11.3143C2.40329 11.9263 2.76927 12.0757 3.51578 11.9668C4.89282 11.7659 6.28699 13.158 6.02308 14.471C5.87384 15.2132 6.00467 15.5308 6.67655 16.0566C7.84299 16.9695 8.229 16.8949 9.77854 15.4565Z'
                            fill='#ffffff'
                        />
                    </svg>
                    Book a new pass
                </div>
            </div>
        </>
    );
};

export default Bookings;
