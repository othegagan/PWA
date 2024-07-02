import { Link } from 'react-router-dom';
import Terms from './Terms';

const TummocMoney = () => {
    return (
        <>
            <div className="flex h-screen flex-col bg-[url('assets/long-bg-design.png')] bg-cover">
                <div className='flex flex-row items-center justify-between px-5 pb-5 pt-4'>
                    <div className='flex flex-row items-center gap-6 text-[#122A34]'>
                        <Link to='/'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
                                <path d='M14 6.125H3.35125L8.2425 1.23375L7 0L0 7L7 14L8.23375 12.7663L3.35125 7.875H14V6.125Z' fill='currentColor' />
                            </svg>
                        </Link>

                        <p className='text-lg font-medium text-[#122A34]'>Tummoc Money</p>
                    </div>
                </div>

                <div
                    className='mx-5 mt-4 max-w-2xl rounded-[10px] bg-white p-5'
                    style={{
                        boxShadow: ' 0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
                    }}>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                            <p className='label'>Avaiable Balance</p>
                            <p className='text-2xl font-semibold text-neutral-800'>₹ 0.0</p>
                        </div>
                        <div className='rounded-full bg-[#E3F7F8] p-2'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='20' viewBox='0 0 22 20' fill='none'>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M0.5 3.45098C0.5 1.54506 1.95154 0 3.74211 0H18.2579C20.0485 0 21.5 1.54506 21.5 3.45098V16.549C21.5 18.4549 20.0485 20 18.2579 20H3.74211C1.95154 20 0.5 18.4549 0.5 16.549V3.45098ZM1.86364 7.5C1.86364 5.59408 3.31518 3.45098 5.10574 3.45098H11H16.8943C18.6848 3.45098 20.1364 5.09408 20.1364 7V4.94118C20.1364 3.03525 18.6848 1.4902 16.8943 1.4902H5.10574C3.31518 1.4902 1.86364 3.03525 1.86364 4.94118V7.5ZM14.1596 8.47059C13.0171 8.47059 12.0909 9.45643 12.0909 10.6725C12.0909 11.9255 13.0451 12.9412 14.2223 12.9412H20.1364V8.47059H14.1596ZM14.0579 11.6863C14.5055 11.6863 14.8684 11.2649 14.8684 10.7451C14.8684 10.2253 14.5055 9.80392 14.0579 9.80392C13.6103 9.80392 13.2474 10.2253 13.2474 10.7451C13.2474 11.2649 13.6103 11.6863 14.0579 11.6863Z'
                                    fill='#102C37'
                                />
                            </svg>
                        </div>
                    </div>

                    <div className='mt-4 flex flex-row items-center justify-center gap-2 rounded-md bg-[#11B4BD] py-3 font-medium text-white'>Add Money</div>
                </div>

                <div
                    className='relative mx-5 mt-4 flex flex-row items-center justify-center gap-2 rounded-md bg-[#11B4BD20] py-3 font-medium text-[#122A34]'
                    style={{
                        boxShadow: ' 0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
                    }}>
                    Transaction History
                    <p className='absolute right-5 -rotate-90 font-bold'>
                        <svg width='10' height='8' viewBox='0 0 10 8' fill='none'>
                            <path d='M1.175 0.500002L5 4.82659L8.825 0.500002L10 1.83199L5 7.5L0 1.83199L1.175 0.500002Z' fill='currentColor' />
                        </svg>
                    </p>
                </div>
            </div>

            <Terms />
        </>
    );
};

export default TummocMoney;
