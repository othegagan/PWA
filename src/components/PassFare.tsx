const PassFare = ({ setShowPassFare }: any) => {
    return (
        <>
            <div onClick={() => setShowPassFare(false)} className='fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60'>
                <div className='w-full max-w-[270px] overflow-hidden rounded-[3px] bg-white p-4 shadow-xl' role='dialog' onClick={() => setShowPassFare(true)}>
                    <div>
                        <p className='text-lg font-medium text-[#112C35]'>Pass Fare</p>
                        <div className='space-y-1'>
                            <div className='flex items-center justify-between'>
                                <p className='label text-sm'>Base Price</p>
                                <p className='value font-semibold text-[#112C35]'>₹ 1050.0</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='label text-sm'>GST</p>
                                <p className='value font-semibold text-[#112C35]'> ₹ 0.0</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='label text-sm'>Toll Price</p>
                                <p className='value font-semibold text-[#112C35]'> ₹ 0.0</p>
                            </div>
                        </div>
                        <hr className='my-2 text-gray/70' />

                        <div className='flex items-center justify-between'>
                            <p className='text-lg font-medium text-[#112C35]'>Total Amount</p>
                            <p className='label text-lg font-medium text-[#112C35]'>₹ 1050.0</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PassFare;
