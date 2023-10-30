import smallQRCode from "../assets/small-qrcode.png";
import Terms from "./Terms";

const Pass = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="w-full  h-[128px] bg-[url('assets/pass-top-design.png')] border-b border-zinc-200  fixed top-0">
                <div className="px-5 pt-4 pb-5 flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none">
                            <path
                                d="M14 6.125H3.35125L8.2425 1.23375L7 0L0 7L7 14L8.23375 12.7663L3.35125 7.875H14V6.125Z"
                                fill="white"
                            />
                        </svg>

                        <p className="text-white text-lg font-medium">
                            Your Bus Pass
                        </p>
                    </div>

                    <p className="text-white text-[14px] font-medium">
                        Support
                    </p>
                </div>

                <div
                    className="max-w-2xl  mx-5 bg-white px-3 py-4  rounded-[10px] mb-6"
                    style={{
                        boxShadow: " 0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
                    }}>
                    <div className="flex gap-[18px]">
                        <div className="h-[70px] w-[70px] rounded-full bg-[url('assets/bmtc-logo.jpg')] bg-cover "></div>

                        <div className="flex flex-col gap-[5px]">
                            <p className="text-sm font-medium">
                                Ordinary Service Monthly Pass
                            </p>

                            <div className="flex flex-row gap-2">
                                <div className="bg-[#FDE685] rounded-[10px] px-2 py-1 ">
                                    <p className="text-[#9A7D00] font-bold text-xs">
                                        monthly
                                    </p>
                                </div>
                                <div className="bg-[#DCECC8] rounded-[10px] px-2 py-1 ">
                                    <p className="text-[#5B8215] font-bold text-xs">
                                        Ordinary
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm font-medium">
                                Pass ID:{" "}
                                <span className="font-medium">
                                    TPASS2397123
                                </span>
                            </p>
                        </div>
                    </div>

                    <p className="underline text-center underline-offset-2 mt-1 mb-3 text-sm text-[#157B83] font-semibold">
                        Click here to view validation instructions
                    </p>

                    <div className="flex h-[36px] items-center ">
                        <div className=" bg-[#157B83]  p-[7px] rounded-[6px]">
                            <img
                                src={smallQRCode}
                                alt="Small QR Code"
                                className="w-8 h-7"
                            />
                        </div>

                        <p className="bg-[#E8F7F0] text-sm font-medium w-full  rounded-r-[6px]  py-3 pl-3">
                            Scan conductor QR for validation{" "}
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-[50px] pb-10 px-5 overflow-y-auto h-full bg-[#ECECEC] no-scrollbar">
                <h2 className="font-bold text-lg ml-2 text-[#0D2733] mt-[12rem]">
                    Booking Details
                </h2>
                <div
                    className="max-w-2xl mx-auto  bg-white px-4 py-6 rounded-[10px] mb-6"
                    style={{
                        boxShadow: " 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
                    }}>
                    <div className="flex justify-between flex-row">
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-0">
                                <p className="label">Passenger name</p>
                                <p className="value">Gagan Kumar</p>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="label">Identification type</p>
                                <p className="value">Addhar Card</p>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="label">
                                    Identification number (Last 4 digits)
                                </p>
                                <p className="value">0242</p>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="label">Pass purchase date</p>
                                <p className="value">28 Sep 2023, 11:01 AM</p>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="label">Pass valid from</p>
                                <p className="value">28 Sep 2023, 02:30 AM</p>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="label">Pass valid till</p>
                                <p className="value">28 Oct 2023, 02:29 AM</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between items-end">
                            <div className="h-24 w-24 rounded-full bg-[#D9D9D9]"></div>
                            <div className="flex flex-col justify-end items-end">
                                <p className="underline underline-offset-2 text-gray font-medium text-sm">
                                    Pass fare
                                </p>
                                <p className="font-semibold text-mid-green text-xl">
                                    ₹ 1050.0
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" flex justify-center items-center my-4">
                        <div className="flex flex-row items-center gap-2 text-white font-medium text-sm py-2 px-3 bg-[#99C450] rounded-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="10"
                                viewBox="0 0 12 10"
                                fill="none">
                                <path
                                    d="M10.8 0H1.2C0.54 0 0.00599999 0.5625 0.00599999 1.25L0 8.75C0 9.4375 0.54 10 1.2 10H10.8C11.46 10 12 9.4375 12 8.75V1.25C12 0.5625 11.46 0 10.8 0ZM10.8 8.75H1.2V2.5L6 5.625L10.8 2.5V8.75ZM6 4.375L1.2 1.25H10.8L6 4.375Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Generate mail receipt
                        </div>
                    </div>

                    <div className="flex flex-col gap-2  my-6">
                        <div className="border border-[#BBBFBE] w-full"></div>

                        <div className="bg-[#E8F0D8] p-3 rounded-[8px]">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <p className="text-gray font-semibold text-sm">
                                        Last Validated
                                    </p>
                                    <p className="text-mid-green font-semibold text-sm">
                                        30 Sep 2023, 08:32 PM
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray font-semibold text-sm">
                                        Bus Number
                                    </p>
                                    <p className="text-mid-green font-semibold text-sm">
                                        BMTC BUS KA57F2400
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray font-semibold text-sm">
                                        Validated By
                                    </p>
                                    <p className="text-mid-green font-semibold text-sm">
                                        Self
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-[#BBBFBE] w-full"></div>
                    </div>

                    <div className="mx-auto w-[160px] h-[160px] bg-[url('assets/qrcode.gif')] bg-cover "></div>
                </div>
            </div>

            <Terms />
        </div>
    );
};

export default Pass;
