import { useState } from "react";
import { Link } from "react-router-dom";

const Bookings = () => {
    const [active, setActive] = useState("active");
    return (
        <>
            <div className="flex flex-row  w-full bg-[#122A34] h-[50px]">
                <div className="px-5 flex items-center justify-center w-[43px]  h-full text-white ">
                    <Link to="/">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path
                                d="M14 6.125H3.35125L8.2425 1.23375L7 0L0 7L7 14L8.23375 12.7663L3.35125 7.875H14V6.125Z"
                                fill="white"
                            />
                        </svg>
                    </Link>
                </div>
                <div className="font-medium w-full text-[14px] h-full text-white flex flex-row">
                    <div className="flex items-center  w-1/2 justify-center border-b-2  border-green-500">
                        Passes
                    </div>
                    <div className=" w-1/2 text-[#72858C] flex items-center justify-center  ">
                        Trips/Tickets
                    </div>
                </div>
            </div>

            <div className="h-full bg-cover bg-[url('assets/long-bg-design.png')]">
                <div className="m-2 flex items-center justify-between gap-4">
                    <div
                        onClick={() => setActive("active")}
                        className={`w-1/2 text-center rounded-md py-2 uppercase font-normal text-sm ${
                            active === "active"
                                ? "bg-[#99C450] text-white"
                                : null
                        }`}
                    >
                        Active
                    </div>
                    <div
                        onClick={() => setActive("expired")}
                        className={`w-1/2 text-center rounded-md py-2 uppercase font-normal text-sm ${
                            active === "expired"
                                ? "bg-red-500 text-white"
                                : null
                        }`}
                    >
                        Expired
                    </div>
                </div>

                {active === "active" && (
                    <div className="bg-gradient-to-r group from-[#122A34] text-white to-[#167B83] mx-1 py-4 px-5  rounded-[7px]">
                        <Link to="/pass">
                            <div className="flex justify-between items-center">
                                <div className="bg-white rounded-[10px] px-2 py-1 ">
                                    <p className="text-black font-normal text-xs">
                                        Ordinary
                                    </p>
                                </div>
                                <p className="font-medium text-white text-xl">
                                    ₹ 1050.0
                                </p>
                            </div>

                            <h1 className="font-normal text-[20px] text-white mt-[10px] mb-[18px]">
                                Ordinary Service Monthly Pass
                            </h1>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <p className="text-sm font-normal">
                                        Pass valid till
                                    </p>
                                    <p className="text-xs font-normal">
                                        26 Jun 2024, 11:59 PM
                                    </p>
                                </div>
                                <div className="px-4 py-[9px] group-hover:bg-[#62afb6] bg-[#4C898E] rounded shadow">
                                    {" "}
                                    {">"}
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {active == "expired" && (
                    <div className="flex flex-col gap-3">
                        <div className="bg-gradient-to-r group from-[#696969] text-white to-[#B8B8B8] mx-1 py-4 px-5  rounded-[7px]">
                            <div>
                                <div className="flex justify-between items-center">
                                    <div className="bg-white rounded-[10px] px-2 py-1 ">
                                        <p className="text-black font-normal text-xs">
                                            Ordinary
                                        </p>
                                    </div>
                                    <p className="font-medium text-white text-xl">
                                        ₹ 1050.0
                                    </p>
                                </div>

                                <h1 className="font-normal text-[20px] text-white mt-[10px] mb-[18px]">
                                    Ordinary Service Monthly Pass
                                </h1>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <p className="text-sm font-normal">
                                            Pass valid till
                                        </p>
                                        <p className="text-xs font-normal">
                                            27 Dec 2023, 11:59 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r group from-[#696969] text-white to-[#B8B8B8] mx-1 py-4 px-5  rounded-[7px]">
                            <div>
                                <div className="flex justify-between items-center">
                                    <div className="bg-white rounded-[10px] px-2 py-1 ">
                                        <p className="text-black font-normal text-xs">
                                            Ordinary
                                        </p>
                                    </div>
                                    <p className="font-medium text-white text-xl">
                                        ₹ 1050.0
                                    </p>
                                </div>

                                <h1 className="font-normal text-[20px] text-white mt-[10px] mb-[18px]">
                                    Ordinary Service Monthly Pass
                                </h1>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <p className="text-sm font-normal">
                                            Pass valid till
                                        </p>
                                        <p className="text-xs font-normal">
                                            27 Nov 2023, 11:59 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex flex-row justify-between items-center px-2">
                    <div className="border border-[#E5E5E5] w-full h-[2px]"></div>
                    <p className="px-2 py-[10px] whitespace-nowrap">
                        Looking for pass purchase?
                    </p>
                    <div className="border border-[#E5E5E5] w-full h-[2px]"></div>
                </div>

                <div className="bg-[#11B4BD] mx-2 flex flex-row justify-center items-center py-3  gap-2 text-white font-medium rounded-md">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.47782 16.8245C4.3411 15.8027 4.19768 15.5244 4.38083 14.6951C4.77594 13.7833 4.06266 13.0567 3.10812 13.5649C2.56318 13.8552 2.28183 13.7089 1.2333 12.5907C0.205441 11.494 6.07807e-07 11.0475 7.07281e-07 9.90964C8.22998e-07 8.586 0.131793 8.41307 4.29329 4.27211C8.04553 0.538072 8.71903 -8.11368e-07 9.63932 -7.30914e-07C11.7596 -5.4555e-07 13.7895 1.64475 13.4297 3.07125C13.1264 4.275 13.7117 4.88861 14.7253 4.42896C15.3943 4.12554 15.6359 4.18789 16.3466 4.84875C17.6012 6.01489 18.1752 7.31796 17.9533 8.49471C17.8089 9.26132 16.679 10.584 13.4565 13.7594C9.50914 17.6487 9.05432 18 7.96897 18C7.0603 18 6.48145 17.7271 5.47782 16.8245ZM9.77854 15.4565C11.1123 14.2187 11.1243 14.1885 10.5344 13.5399C9.96202 12.9105 8.72161 11.9668 9.52917 11.4107C10.1752 10.7679 11.1504 12.1873 11.478 12.5476C12.0701 13.1985 12.0852 13.1905 14.2737 11.0292C15.8775 9.4455 16.4742 8.62811 16.4742 8.01386C16.4742 6.88596 15.372 5.93357 14.2082 6.05507C12.9684 6.18428 11.9518 5.14704 11.9518 3.75236C11.9518 2.63893 10.8813 1.28571 10.0005 1.28571C9.74947 1.28571 8.49065 2.32714 7.20308 3.6C5.13348 5.64525 4.68383 5.78571 5.49139 6.26786C5.79729 6.60439 8.07557 8.23468 7.26801 9C6.46046 10.125 5.08179 7.80943 4.49292 7.44621C3.86109 7.05632 3.68375 7.128 2.54509 8.23468C1.13252 9.60685 1.01752 10.1732 1.91972 11.3143C2.40329 11.9263 2.76927 12.0757 3.51578 11.9668C4.89282 11.7659 6.28699 13.158 6.02308 14.471C5.87384 15.2132 6.00467 15.5308 6.67655 16.0566C7.84299 16.9695 8.229 16.8949 9.77854 15.4565Z"
                            fill="#ffffff"
                        />
                    </svg>
                    Book a new pass
                </div>
            </div>
        </>
    );
};

export default Bookings;
