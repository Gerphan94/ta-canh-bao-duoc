import { useState, useRef } from "react";

function ConfirmModal({ setShow, mabn, onClick, confirmType }) {



    const [lyDo, setLyDo] = useState('');
    const inputRef = useRef(null);


    const handleClickTuChoi = () => {
        if (!lyDo.trim()) {
            // If empty, focus the input
            inputRef.current?.focus();
            return;
        }

        setShow(false);
        onClick(mabn, confirmType === 'dongy' ? 'Đồng ý' : 'Từ chối');
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto px-6 py-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Xác nhận {confirmType === 'dongy' ? "đồng ý" : "từ chối"}</h2>
                    <div>
                        <textarea
                            ref={inputRef}
                            value={lyDo}
                            onChange={(e) => setLyDo(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                            placeholder={`Nhập lý do ${confirmType === 'dongy' ? "đồng ý" : "từ chối"}...`}
                        />
                    </div>
                    <div className="flex justify-center gap-4 pt-4 text-sm">
                        <button className={` ${confirmType === 'dongy' ? "bg-blue-600 hover:bg-blue-700" :"bg-red-500 hover:bg-red-600"} text-white px-8 py-1.5 rounded`}
                            onClick={() => handleClickTuChoi()}
                        >
                         {confirmType === 'dongy' ? "Đồng ý" : "Từ chối"}   
                        </button>
                        <button
                            onClick={() => setShow(false)}
                            className="border border-red-600 text-red-600 hover:bg-red-50 px-8 py-1.5 rounded"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}


export default ConfirmModal