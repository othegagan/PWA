const Terms = () => {
    return (
        <div className="w-full bg-white py-2 px-6 border-t border-zinc-200  fixed bottom-0">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h2 className="text-sm font-bold leading-normal text-[#727272]">
                        Terms of Use
                    </h2>
                    <p className="text-xs leading-none font-medium text-[#727272]">
                        Click to read the terms and conditions for this pass.
                    </p>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="scale-1.3"
                    fill="none">
                    <g clip-path="url(#clip0_45_2)">
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
    );
};

export default Terms;
