import Navbar from "./Navbar"

const Home = () => {
    return (
        <>
            <div className="fixed  top-0 w-full">
                <div className="bg-[#0F2D38] h-[110px] rounded-b-md">
                    <div className="flex flex-row justify-between py-[14px] px-6 items-center">
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                            <path d="M0 14H14V12.1667H0V14ZM0 9.41667H14V7.58333H0V9.41667ZM0 3V4.83333H14V3H0Z" fill="white" />
                            <path d="M20 5C20 7.76142 17.7614 10 15 10C12.2386 10 10 7.76142 10 5C10 2.23858 12.2386 0 15 0C17.7614 0 20 2.23858 20 5Z" fill="#E53935" />
                        </svg>
                        <div className="flex gap-3 items-center justify-center">
                            <svg width="7" height="10" viewBox="0 0 7 10" fill="none">
                                <path d="M3.5 0C1.565 0 0 1.565 0 3.5C0 6.125 3.5 10 3.5 10C3.5 10 7 6.125 7 3.5C7 1.565 5.435 0 3.5 0ZM3.5 4.75C2.81 4.75 2.25 4.19 2.25 3.5C2.25 2.81 2.81 2.25 3.5 2.25C4.19 2.25 4.75 2.81 4.75 3.5C4.75 4.19 4.19 4.75 3.5 4.75Z" fill="white" />
                            </svg>
                            <p className="text-white font-normal text-xs">Bengaluru</p>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1.175 0.500002L5 4.82659L8.825 0.500002L10 1.83199L5 7.5L0 1.83199L1.175 0.500002Z" fill="white" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-row  text-white items-center justify-between px-6 my-2">
                        <h2 className="font-medium text-lg">
                            Good Afternoon gagan
                        </h2>
                        <div className="flex items-center justify-center gap-2">
                            <p>28.5 °C</p>
                            <svg width="18" height="11" viewBox="0 0 18 11" fill="none">
                                <path d="M14.5125 4.1525C14.0025 1.78062 11.73 0 9 0C6.8325 0 4.95 1.1275 4.0125 2.7775C1.755 2.9975 0 4.75063 0 6.875C0 9.15063 2.0175 11 4.5 11H14.25C16.32 11 18 9.46 18 7.5625C18 5.7475 16.4625 4.27625 14.5125 4.1525Z" fill="url(#paint0_linear_86_197)" />
                                <defs>
                                    <linearGradient id="paint0_linear_86_197" x1="-2.34595e-08" y1="7.99219" x2="21.6513" y2="7.17419" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.338191" stop-color="#F6F6F6" />
                                        <stop offset="1" stop-color="#F6F6F6" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="relative shadow mx-4 -mt-5 rounded-lg  ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6987 12.9058C11.3506 14.2027 9.51839 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 9.26353 14.3913 10.8849 13.3726 12.1655L17.8536 16.6464C18.0488 16.8417 18.0488 17.1583 17.8536 17.3536C17.6583 17.5488 17.3417 17.5488 17.1464 17.3536L12.6987 12.9058ZM14 7.5C14 11.0899 11.0899 14 7.5 14C3.91015 14 1 11.0899 1 7.5C1 3.91015 3.91015 1 7.5 1C11.0899 1 14 3.91015 14 7.5Z" fill="#7C7C7C" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full h-14 pl-12  text-lg rounded-lg  placeholder-[#7C7C7C] " placeholder="Search destination" />

                    <div className="absolute right-14 top-2 py-2 w-[2px] h-[75%] bg-[#E5E5E5]"></div>
                    <div className="absolute right-2 top-5  flex items-center ">
                        <svg className="scale-[1.3]" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM6.049 5.68087C7.26856 4.53785 8.89506 4.92361 9.86843 6.17187C10.8418 4.92361 12.4406 4.54988 13.6812 5.68087C14.9217 6.81187 15.0724 8.73496 14.1147 10.0868C13.3184 11.2108 10.9086 13.5814 10.1188 14.3486L10.1184 14.349C10.0302 14.4346 9.98616 14.4774 9.93469 14.4942C9.88968 14.5089 9.84046 14.5089 9.79551 14.4942C9.74396 14.4774 9.69976 14.4345 9.61143 14.3486C8.82161 13.5814 6.41176 11.2108 5.61547 10.0868C4.65773 8.73496 4.82943 6.8239 6.049 5.68087Z" fill="#EE5869" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="pt-44 pb-10 px-5 overflow-y-auto h-full no-scrollbar">
                <h1 className="text-[#0F2D38] font-medium text-xl">Passes & Tickets</h1>

                <div className="bg-contain bg-no-repeat relative bg-[url('assets/bus-passes.png')] w-full h-14">
                    <p className="top-[18px] left-[70px] absolute bg-white font-semibold text-sm text-[#0F2D38]">BMTC Passes</p>
                    <p className="top-[18px] right-[30px] absolute bg-white font-semibold text-sm text-[#0F2D38]">AC Bus Tickets</p>
                </div>
            </div>

            <Navbar />
        </>
    )
}

export default Home