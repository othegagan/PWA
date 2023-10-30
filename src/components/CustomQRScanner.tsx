import { useState } from "react";
//@ts-ignore
import { QrScanner } from "react-qrcode-scanner";

const CustomQRScanner = () => {
    const [data, setData] = useState("");

    function extractBusNumber(inputString: any) {
        const regex = /tummoc_qr=([A-Z0-9\s]+)&/i;
        const match = inputString.match(regex);

        if (match && match[1]) {
            return match[1].replace("Bangalore", "");
        } else {
            return null; // Return null if the pattern is not found
        }
    }

    const handleScan = (value: any) => {
        // console.log({ value })

        setData(extractBusNumber(value));
    };

    const handleError = (error: any) => {
        console.log({ error });
    };

    return (
        <div>
            {data === "" && (
                <div className="h-[2px] animate-pulse bg-red-700 w-[300px] mx-auto z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            )}

            {data !== "" && <p>{data}</p>}

            {data === "" && (
                <QrScanner
                    onScan={handleScan}
                    onError={handleError}
                    facingMode="environment" // Use the back camera
                    flipHorizontally={true} // Do not flip the video output
                    // onLoad={val :{mirrorVideo, streamLabel}}

                    //  onError = (error) => console.log({error}),

                    //  onScan = (value) => console.log({value}),

                    //  facingMode = 'environment', // environment|face

                    //  constraints = null, //device constraints

                    //  onLoad = (val :{mirrorVideo, streamLabel}) => null,

                    //  flipHorizontally = false, //flip or reflect the video output based on facing mode

                    //  style, //section styling can be added here

                    //  className, //classnames will be added to the section wrapper

                    //  delay = 800, //delay between each scan

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
