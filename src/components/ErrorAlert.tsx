
const ErrorAlert = ({ setShowError }: any) => {
    return (
        <>
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60 ">
                <div
                    className="w-full mt-3 p-4 pb-2 mx-10  overflow-hidden bg-white rounded-[3px]  max-w-2xl "
                    role="dialog">
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[70px] h-[70px]" viewBox="0 0 115 115" fill="none">
                            <circle cx="57.5177" cy="57.5899" r="54.1395" stroke="#E53935" strokeWidth="5" />
                            <path d="M37.0391 37.1113L77.9965 78.0687" stroke="#E53935" strokeWidth="5" strokeLinecap="round" />
                            <path d="M77.9966 37.1113L37.0391 78.0688" stroke="#E53935" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                    </div>

                    <p className="text-sm text-center text-gray/80 font-normal my-3">Unable to read QR code. Please try again</p>

                    <div className="flex justify-center items-center my-2">
                        <div onClick={() => { setShowError(!setShowError) }} className="px-6 py-3 bg-[#112C35] text-white rounded-lg">OK</div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ErrorAlert