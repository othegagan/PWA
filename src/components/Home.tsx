import Navbar from './Navbar';
import AutoImg from '../assets/auto.png';
import GiftImg from '../assets/gift.png';
import MetroVideo from '../assets/metro.mp4';
import OutStationVideo from '../assets/outstation.mp4';
import { useEffect, useState } from 'react';
import Icons from '../assets/homeicons.jpeg';
import PassAndTickets from '../assets/passandticket.jpeg';
import { IoIosPin } from 'react-icons/io';
import { Link } from 'react-router-dom';
import useProfileData from '../hooks/useProfileData';

const Home = () => {
    const [placeholder, setPlaceholder] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const originalText = 'Search Destination';
    const {profileData} = useProfileData()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % (2 * originalText.length));

            setPlaceholder(() => {
                const updatedText =
                    currentIndex < originalText.length
                        ? originalText.substring(0, currentIndex + 1)
                        : originalText.substring(currentIndex - originalText.length, 0);
                return updatedText;
            });
        }, 180);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    let greetingMessage = '';

    if (currentHour < 12) {
        greetingMessage = 'Good Morning';
    } else if (currentHour < 18) {
        greetingMessage = 'Good Afternoon';
    } else {
        greetingMessage = 'Good Evening';
    }

    return (
        <>
            <div className='fixed top-0 z-40 w-full'>
                <div className='h-[110px] rounded-b-md bg-[#122A34]'>
                    <div className='flex flex-row items-center justify-between px-6 py-[14px]'>
                        <Link to='/profile'>
                            <svg width='20' height='14' viewBox='0 0 20 14' fill='none'>
                                <path d='M0 14H14V12.1667H0V14ZM0 9.41667H14V7.58333H0V9.41667ZM0 3V4.83333H14V3H0Z' fill='white' />
                                <path
                                    d='M20 5C20 7.76142 17.7614 10 15 10C12.2386 10 10 7.76142 10 5C10 2.23858 12.2386 0 15 0C17.7614 0 20 2.23858 20 5Z'
                                    fill='#E53935'
                                />
                            </svg>
                        </Link>

                        <div className='flex items-center justify-center gap-3'>
                            <IoIosPin className='text-white' />
                            <p className='text-sm font-normal text-white'>Bengaluru</p>
                            <svg width='10' height='8' viewBox='0 0 10 8' fill='none'>
                                <path d='M1.175 0.500002L5 4.82659L8.825 0.500002L10 1.83199L5 7.5L0 1.83199L1.175 0.500002Z' fill='white' />
                            </svg>
                        </div>
                    </div>

                    <div className='my-2 flex flex-row items-center justify-between px-6 text-white'>
                        <h2 className='text-lg font-medium'>{greetingMessage} {profileData?.username}</h2>
                        <div className='flex items-center justify-center gap-2'>
                            <p>28.5 °C</p>
                            <svg width='18' height='11' viewBox='0 0 18 11' fill='none'>
                                <path
                                    d='M14.5125 4.1525C14.0025 1.78062 11.73 0 9 0C6.8325 0 4.95 1.1275 4.0125 2.7775C1.755 2.9975 0 4.75063 0 6.875C0 9.15063 2.0175 11 4.5 11H14.25C16.32 11 18 9.46 18 7.5625C18 5.7475 16.4625 4.27625 14.5125 4.1525Z'
                                    fill='url(#paint0_linear_86_197)'
                                />
                                <defs>
                                    <linearGradient
                                        id='paint0_linear_86_197'
                                        x1='-2.34595e-08'
                                        y1='7.99219'
                                        x2='21.6513'
                                        y2='7.17419'
                                        gradientUnits='userSpaceOnUse'>
                                        <stop offset='0.338191' stop-color='#F6F6F6' />
                                        <stop offset='1' stop-color='#F6F6F6' stop-opacity='0' />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='relative mx-4 -mt-5 rounded-lg shadow'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
                        <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M12.6987 12.9058C11.3506 14.2027 9.51839 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 9.26353 14.3913 10.8849 13.3726 12.1655L17.8536 16.6464C18.0488 16.8417 18.0488 17.1583 17.8536 17.3536C17.6583 17.5488 17.3417 17.5488 17.1464 17.3536L12.6987 12.9058ZM14 7.5C14 11.0899 11.0899 14 7.5 14C3.91015 14 1 11.0899 1 7.5C1 3.91015 3.91015 1 7.5 1C11.0899 1 14 3.91015 14 7.5Z'
                                fill='#7C7C7C'
                            />
                        </svg>
                    </div>
                    <input
                        type='search'
                        id='default-search'
                        className='block h-14 w-full rounded-lg pl-12 text-lg placeholder-[#7C7C7C]'
                        placeholder={placeholder}
                    />

                    <div className='absolute right-14 top-2 h-[75%] w-[2px] bg-[#E5E5E5] py-2'></div>
                    <div className='absolute right-2 top-5 flex items-center'>
                        <svg className='scale-[1.3]' width='28' height='28' viewBox='0 0 28 28' fill='none'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM6.049 5.68087C7.26856 4.53785 8.89506 4.92361 9.86843 6.17187C10.8418 4.92361 12.4406 4.54988 13.6812 5.68087C14.9217 6.81187 15.0724 8.73496 14.1147 10.0868C13.3184 11.2108 10.9086 13.5814 10.1188 14.3486L10.1184 14.349C10.0302 14.4346 9.98616 14.4774 9.93469 14.4942C9.88968 14.5089 9.84046 14.5089 9.79551 14.4942C9.74396 14.4774 9.69976 14.4345 9.61143 14.3486C8.82161 13.5814 6.41176 11.2108 5.61547 10.0868C4.65773 8.73496 4.82943 6.8239 6.049 5.68087Z'
                                fill='#EE5869'
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='no-scrollbar -z-10 h-full overflow-y-auto px-5 pb-24 pt-40'>
                <h1 className='text-xl font-medium text-[#122A34]'>Passes & Tickets</h1>

                <div className='my-3 overflow-hidden bg-white'>
                    <img src={PassAndTickets} alt='' className='-ml-2 -mt-1 w-full scale-105 object-cover' />
                    {/* <video autoPlay loop muted playsInline className=" scale-[1.08]" >
                        <source src={CommuteVideo} type="video/mp4" />
                    </video> */}
                </div>
                {/* <div cla
                ssName="flex flex-row gap-3 mt-3">
                    <div className="bg-contain bg-no-repeat relative bg-[url('assets/gradient-outline.svg')] w-1/2 h-16">
                        <img
                            src={BusIcon}
                            alt=""
                            className="left-3 top-3 absolute "
                        />
                         <p className="bg-[#17BBBE] rounded-full p-[1px] px-[7px] right-1 -top-2 text-xs w-fit absolute  text-white font-medium">
                            New
                        </p>
                        <p className="top-3 left-1/3 absolute bg-white font-semibold text-sm text-[#122A34]">
                            BMTC Passes
                        </p>
                    </div>

                    <div className="bg-contain bg-no-repeat relative bg-[url('assets/gradient-outline.svg')] w-1/2 h-16">
                        <img
                            src={BusIcon}
                            alt=""
                            className="left-3 top-3 absolute "
                        />
                        <p className="bg-[#FFCC05] rounded-full p-[1px] px-[7px] right-1 -top-2 text-xs w-fit absolute  text-black font-medium shadow-md">
                            Coming Soon
                        </p>
                        <p className="top-3 left-1/3 absolute bg-white font-semibold text-sm text-[#122A34]">
                            AC Bus Tickets
                        </p>
                    </div>
                </div> */}

                <h1 className='text-xl font-medium text-[#122A34]'>Commute options available</h1>

                <div className='my-3 overflow-hidden bg-white'>
                    <img src={Icons} alt='' className='-ml-2 -mt-4 w-full scale-105 object-cover' />
                    {/* <video autoPlay loop muted playsInline className=" scale-[1.08]" >
                        <source src={CommuteVideo} type="video/mp4" />
                    </video> */}
                </div>

                <div className='my-2 h-[1px] w-full bg-gray/10'></div>

                <h1 className='my-3 text-xl font-medium text-[#122A34]'>Travel Outstation</h1>

                <div className='overflow-hidden bg-white'>
                    <video autoPlay loop muted playsInline className='scale-[1.08]'>
                        <source src={OutStationVideo} type='video/mp4' />
                    </video>
                </div>

                <div className='my-3 overflow-hidden bg-white'>
                    <video autoPlay loop muted playsInline className='scale-[1.3]'>
                        <source src={MetroVideo} type='video/mp4' />
                    </video>
                </div>

                {/* <div className="bg-gray h-[180px] w-full rounded-lg mt-4"></div> */}

                <div className='mt-4 flex h-[150px] w-full gap-2 rounded-md bg-[#122E39]'>
                    <div className='flex w-1/2 items-end justify-center'>
                        <img src={AutoImg} alt='' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='m-0 text-lg font-bold leading-none text-white'>Book A Ride &</h2>
                        <h2 className='via-[#78BA73 ] m-0 bg-gradient-to-r from-[#1FADB1] to-[#BCAD37] bg-clip-text text-xl font-bold leading-none tracking-wide text-transparent'>
                            Earn Cashback
                        </h2>
                        <p className='text-sm text-white'>On Every Booking</p>
                    </div>
                </div>

                <div className='mt-6 flex'>
                    <div className='flex w-3/4 flex-col gap-5'>
                        <p className='text-sm text-[#102C37]'>
                            Let us know the greatest feature that <br />
                            matters to you the most.
                        </p>

                        <p className='w-fit rounded-lg bg-[#99C450] px-3 py-[10px] font-semibold text-white shadow-md'>Vote Now</p>
                    </div>

                    <div className='-z-0 w-1/4'>
                        <img src={GiftImg} className='mt-2 scale-[1.5]' alt='' />
                    </div>
                </div>
            </div>

            <Navbar />
        </>
    );
};

export default Home;
