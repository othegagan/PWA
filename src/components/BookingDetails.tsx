import BirdImg from "../assets/bird.svg";

const BookingDetails = ({ setShowBookingDetails }: any) => {
    return (
        <>
            <div
                onClick={() => setShowBookingDetails(false)}
                className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60 ">
                <div
                    className="w-full p-4 overflow-hidden bg-white rounded-[3px]  max-w-2xl "
                    role="dialog"
                    onClick={() => setShowBookingDetails(true)}>
                    <div>
                        <div className="flex justify-center ">
                            <img
                                src={BirdImg}
                                className="w-[74px] h-[74px] rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="space-y-3 mt-3">
                            <p className=" text-sm leading-none text-gray">
                                1.{" "}
                                <span className="font-semibold">
                                    SELF VALIDATION:
                                </span>{" "}
                                Click on the button - Scan conductor QR for
                                validation - and scan the QR code displayed by
                                the conductor{" "}
                            </p>
                            <p className=" text-sm leading-none text-gray">
                                2.{" "}
                                <span className="font-semibold">
                                    CONDUCTOR VALIDATION:
                                </span>{"  "}
                                Present your pass QR code displayed here to the
                                conductor for validation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingDetails;
