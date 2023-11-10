import { useState } from "react";
//@ts-ignore
import { QrScanner } from "react-qrcode-scanner";

import { extractBusNumber } from "../utils/extractBusNumber";
import { getCurrentTimeFormatted } from "../utils/extractBusNumber";

const CustomQRScanner = ({ setBusNumber, setshowQRScanner, setLastValidated, setShowSuccess, setShowError }: any) => {
    const [hideQRScanner, setHideQRScanner] = useState("");


    const handleScan = (value: any) => {
        const busNumber = extractBusNumber(value);
        const time = getCurrentTimeFormatted();

        // Store busNumber and time in local storage
        localStorage.setItem('busNumber', busNumber);
        localStorage.setItem('time', time);

        setshowQRScanner(false);
        setShowSuccess(true);
        setHideQRScanner(busNumber);
        setBusNumber(busNumber);
        setLastValidated(time);
    };

    const handleError = (error: any) => {
        setShowError(false);
        console.log({ error });
    };

    const style = {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#333333",
        overflow: "hidden",
    };

    return (
        <div>
            {hideQRScanner === "" && (
                <div className="h-[2px] animate-pulse bg-red-700 w-[300px] mx-auto z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            )}

            {hideQRScanner === "" && (
                <QrScanner
                    onScan={handleScan}
                    onError={handleError}
                    facingMode="environment" // Use the back camera
                    flipHorizontally={true} // Do not flip the video output

                    delay={800} //delay between each scan
                    // style={style}
                    containerStyle={style}

                    // onLoad={val :{mirrorVideo, streamLabel}}

                    //  onError = (error) => console.log({error}),

                    //  onScan = (value) => console.log({value}),

                    //  facingMode = 'environment', // environment|face

                    //  constraints = null, //device constraints

                    //  onLoad = (val :{mirrorVideo, streamLabel}) => null,

                    //  flipHorizontally = false, //flip or reflect the video output based on facing mode

                    //  style, //section styling can be added here

                    //  className, //classnames will be added to the section wrapper


                    //  resolution = 600, //canvas resolution
                    //any valid JS-CSS can be added here

                    resolution={1000}

                    video={{
                        width: "100vw",
                        height: "100vh",
                    }}
                    
                    showViewFinder={true}

                    //any valid JS-CSS can be added here
                    viewFinder={{
                        inset: "0px",
                        margin: "auto",
                        outline: "400px solid rgba(0, 0, 0, 0.4)", // Adjust the border size
                        position: "absolute",
                        width: "300px",
                        height: "300px",
                        zIndex: 10,
                        top: "50%", // Center vertically
                        left: "50%", // Center horizontally
                        transform: "translate(0%, 0%)", // Center the viewFinder
                    }}
                />
            )}
        </div>
    );
};

export default CustomQRScanner;
