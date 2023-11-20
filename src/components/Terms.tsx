import { useState } from "react";

const Terms = () => {

    const [showTerms, setShowTerms] = useState(false);

    return (

        <>
            {showTerms && (

                <div onClick={() => { setShowTerms(!showTerms) }} className="fixed inset-0 z-40 flex items-end justify-center bg-black bg-opacity-60 ">
                    <div className="w-full  overflow-hidden bg-white p-8 ">
                        <div className="flex flex-col gap-4">

                            <div className="flex gap-4">
                                <div className="max-w-[10px]">
                                    <svg className="w-2 h-2 " viewBox="0 0 14 14" fill="none">
                                        <circle cx="6.39734" cy="6.16113" r="6" fill="#0DBBC4" />
                                    </svg>
                                </div>
                                <p className="text-mid-green text-sm leading-none font-medium">Pass is valid for travel for the services it has been purchased and until the expiry date printed on the pass</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="max-w-[10px]">
                                    <svg className="w-2 h-2 " viewBox="0 0 14 14" fill="none">
                                        <circle cx="6.39734" cy="6.16113" r="6" fill="#0DBBC4" />
                                    </svg>
                                </div>
                                <p className="text-mid-green text-sm leading-none font-medium">In case the conductor asks for your ID proof, you can either show a physical/digital copy of the ID used at the time of booking.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="max-w-[10px]">
                                    <svg className="w-2 h-2 " viewBox="0 0 14 14" fill="none">
                                        <circle cx="6.39734" cy="6.16113" r="6" fill="#0DBBC4" />
                                    </svg>
                                </div>
                                <p className="text-mid-green text-sm leading-none font-medium">Only one pass is allowed for one ID card
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="max-w-[10px]">
                                    <svg className="w-2 h-2 " viewBox="0 0 14 14" fill="none">
                                        <circle cx="6.39734" cy="6.16113" r="6" fill="#0DBBC4" />
                                    </svg>
                                </div>
                                <p className="text-mid-green text-sm leading-none font-medium">Pass holders must show their passes to conductors or any authorised person on demand
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="max-w-[10px]">
                                    <svg className="w-2 h-2 " viewBox="0 0 14 14" fill="none">
                                        <circle cx="6.39734" cy="6.16113" r="6" fill="#0DBBC4" />
                                    </svg>
                                </div>
                                <p className="text-mid-green text-sm leading-none font-medium">Improper/misuse of past results in withdrawal of pass attract penalty and pass holder will be liable to legal implications
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="max-w-[10px]">
                                    <svg className="w-2 h-2 " viewBox="0 0 14 14" fill="none">
                                        <circle cx="6.39734" cy="6.16113" r="6" fill="#0DBBC4" />
                                    </svg>
                                </div>
                                <p className="text-mid-green text-sm leading-none font-medium">BMTC is not responsible if passenger/pass holder's mobile application is not working or switched off
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="max-w-[10px]">
                                    <svg className="w-2 h-2 " viewBox="0 0 14 14" fill="none">
                                        <circle cx="6.39734" cy="6.16113" r="6" fill="#0DBBC4" />
                                    </svg>
                                </div>
                                <p className="text-mid-green text-sm leading-none font-medium">BMTC is not responsible if passenger/pass holder has entered wrong ID number in mobile pass purchased and the same cannot be accepted
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="max-w-[10px]">
                                    <svg className="w-2 h-2 " viewBox="0 0 14 14" fill="none">
                                        <circle cx="6.39734" cy="6.16113" r="6" fill="#0DBBC4" />
                                    </svg>
                                </div>
                                <p className="text-mid-green text-sm leading-none font-medium">Pass holders should abide by and accept the conditions on which the pass is issued
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="max-w-[10px]">
                                    <svg className="w-2 h-2 " viewBox="0 0 14 14" fill="none">
                                        <circle cx="6.39734" cy="6.16113" r="6" fill="#0DBBC4" />
                                    </svg>
                                </div>
                                <p className="text-mid-green text-sm leading-none font-medium">        It is not required to carry BMTC ID card for pass holders who have purchased a digital pass
                                </p>
                            </div>
                        </div>
                    </div>

                </div >
            )}


            <div className="w-full bg-white py-2 px-7 border-t border-zinc-200  fixed bottom-0">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h2 className="text-sm font-bold leading-normal text-[#727272]">
                            Terms of Use
                        </h2>
                        <p className="text-[12px] leading-none tracking-normal font-semibold text-[#727272]">
                            Click to read the terms and conditions for this pass.
                        </p>
                    </div>

                    <svg onClick={() => { setShowTerms(!showTerms); }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="scale-110"
                        fill="none">
                        <g clipPath="url(#clip0_45_2)">
                            <path
                                d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8Z"
                                fill="#FFD13C"
                            />
                            <path
                                d="M4 8.5H10.085L7.29 11.295L8 12L12 8L8 4L7.295 4.705L10.085 7.5H4V8.5Z"
                                fill="#825A00"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_45_2">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Terms;
