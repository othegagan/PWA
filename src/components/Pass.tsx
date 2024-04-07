import { Link } from "react-router-dom";
import CustomQRScanner from "./CustomQRScanner";
import Terms from "./Terms";
import { useEffect, useState } from "react";
import PassFare from "./PassFare";
import BookingDetails from "./BookingDetails";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";
import { LiaQrcodeSolid } from "react-icons/lia";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { TbMailOpenedFilled } from "react-icons/tb";

const Pass = () => {
    const [showQRScanner, setshowQRScanner] = useState(false);
    const [busNumber, setBusNumber] = useState("");
    const [lastValidated, setLastValidated] = useState("");
    const [showPassFare, setShowPassFare] = useState(false);
    const [showBookingDetails, setShowBookingDetails] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const storedBusNumber = localStorage.getItem("busNumber");
        const storedTime = localStorage.getItem("time");
        setBusNumber(storedBusNumber || "");
        setLastValidated(storedTime || "");
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

            {showBookingDetails && (
                <BookingDetails setShowBookingDetails={setShowBookingDetails} />
            )}

            {showPassFare && <PassFare setShowPassFare={setShowPassFare} />}

            {showSuccess && <SuccessAlert setShowSuccess={setShowSuccess} />}

            {showError && <ErrorAlert setShowError={setShowError} />}

            {!showQRScanner && (
                <div className="flex flex-col h- bg-[#ECECEC]">
                    <div className="px-6 pt-3 pb-3 flex flex-row justify-between fixed items-center w-full z-50 bg-[#122A34]">
                        <div className="flex flex-row items-center gap-6">
                            <Link to="/bookings">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
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

                            <p className="text-white text-lg font-medium">
                                Your Bus Pass
                            </p>
                        </div>

                        <p className="text-white text-[14px] font-medium">
                            Support
                        </p>
                    </div>

                    <div
                        className="bg-[#ECECEC] max-w-2xl pt-[4.5rem] mx-4 rounded-t-[10px] mb-6 rounded-b-none"
                        style={{
                            boxShadow: " 0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
                        }}
                    >
                        <div className="max-w-2xl  bg-white px-3 py-4  rounded-[10px] ">
                            <div className="flex gap-[18px]">
                                <div className="h-[70px] w-[70px] rounded-full bg-[url('assets/bmtc-logo.jpg')] bg-cover "></div>

                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[18px] font-normal  text-black">
                                        Ordinary Monthly Pass
                                    </p>

                                    <div className="flex flex-row gap-2">
                                        <div className="bg-[#FDE685] rounded-[6px] px-3 py-1 ">
                                            <p className="text-[#9A7D00] font-medium text-[14px]">
                                                monthly
                                            </p>
                                        </div>
                                        <div className="bg-[hsl(0,0%,93%)] rounded-[6px] px-3 py-1 ">
                                            <p className="text-[hsl(0,0%,14%)] font-medium text-[14px]">
                                                Ordinary
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[16px] mt-2 font-normal text-black">
                                <span className="text-gray">Pass ID:</span>
                                <span className="pl-6">TPASS1390276</span>
                            </p>

                            <div
                                className="py-2 mt-2 bg-[#4ad9e4] rounded-[6px] flex items-center justify-center "
                                onClick={() => {
                                    setTimeout(() => {
                                        setshowQRScanner(true);
                                    }, 400);
                                }}
                            >
                                <div className="flex gap-2 items-center">
                                    <LiaQrcodeSolid className="w-8  h-8 text-white" />
                                    <span className=" text-md font-normal  text-white ">
                                        Scan QR
                                    </span>
                                </div>
                            </div>

                            <p
                                onClick={() => setShowBookingDetails(true)}
                                className=" text-center  mt-3 text-[17px] text-[#4ad9e4] font-medium tracking-tight "
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <AiOutlineInfoCircle /> How to Validate You
                                    Pass?
                                </div>
                            </p>
                        </div>
                    </div>

                    <div
                        className="max-w-2xl mx-auto  bg-white px-4 py-6 pb-3 rounded-[10px] mb-6"
                        style={{
                            boxShadow: " 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
                        }}
                    >
                        <h2 className="font-medium text-[18px] -mt-2  text-[#0D2733]">
                            Booking Details
                        </h2>
                        <Lines />
                        <div className="flex justify-between flex-row">
                            <div className="flex flex-col gap-2">
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
                                    <p className="value">
                                        06 Apr 2024, 08:28 AM
                                    </p>
                                </div>
                                <div className="flex flex-col gap-0">
                                    <p className="label">Pass valid from</p>
                                    <p className="value">
                                        06 Apr 2024, 12:00 AM
                                    </p>
                                </div>
                                <div className="flex flex-col gap-0">
                                    <p className="label">Pass valid till</p>
                                    <p className="value">
                                        05 May 2024, 11:59 PM
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                                <div className="h-24 w-24 rounded-full bg-[url('assets/photo.png')] bg-cover"></div>
                                <div className="flex flex-col justify-end items-end mt-3 ">
                                    <p
                                        className="underline underline-offset-2 text-gray font-medium text-sm"
                                        onClick={() => setShowPassFare(true)}
                                    >
                                        Pass fare
                                    </p>
                                    <p className="font-medium leading-none text-mid-green text-xl">
                                        ₹ 1050.0
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Lines />

                        <div className=" flex justify-center items-center my-5">
                            <div className="flex flex-row items-center gap-2  font-medium text-sm py-2 px-3 border-2 border-[#4ad9e4] rounded-md text-[#4ad9e4]">
                                <TbMailOpenedFilled className="w-5 h-5" />
                                Generate mail receipt
                            </div>
                        </div>

                        <div className="flex flex-col gap-2  my-5">
                            <Lines />

                            <div className="bg-[#E8F0D8] p-3 rounded-[8px]">
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-col">
                                        <p className="text-gray font-medium text-sm">
                                            Last Validated
                                        </p>
                                        <p className="text-mid-green font-medium text-sm">
                                            {lastValidated}
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-gray font-medium text-sm">
                                            Bus Number
                                        </p>
                                        <p className="text-mid-green font-medium text-sm">
                                            {busNumber}
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-gray font-medium text-sm">
                                            Validated By
                                        </p>
                                        <p className="text-mid-green font-medium text-sm">
                                            Self
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Lines />
                        </div>

                        <div className="mx-auto w-[180px] h-[180px] my-7    bg-[url('assets/qrcode.gif')] bg-cover "></div>
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
        <div className="flex items-center gap-1 -my-2 opacity-60">
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
            <hr className="my-3 border-2 w-3  rounded-md text-[#f0f0f0]" />
        </div>
    );
}
