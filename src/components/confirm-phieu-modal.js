import { useState, useRef } from "react";

function ConfirmPhieuModal({ setShow, r}) {

    // const r = Math.floor(Math.random() * 3);
    const [ghichu, setGhichu] = useState('');

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto px-6 py-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{r === 0 ? 'Xác nhận đồng ý phiếu' : r === 1 ? 'Xác nhận từ chối phiếu' : 'Chưa hoàn thành duyệt toa trong phiếu, không thể xác nhận'}</h2>
                    {r !== 2 &&
                        <div>
                            <input
                                spellCheck="false"
                                autoComplete="off"
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 outline-none"
                                placeholder="Ghi chú"
                                value={ghichu}
                                onChange={(e) => setGhichu(e.target.value)}
                            />
                            {/* <textarea
                                rows={4}
                                className="w-full border border-gray-300 rounded-md p-2 outline-none"
                                placeholder="Ghi chú"
                                value={ghichu}
                                onChange={(e) => setGhichu(e.target.value)}


                            /> */}
                        </div>
                    }
                    <div className="flex justify-center gap-4 pt-4 text-sm">
                        {r < 2 &&
                            <button className={`${r === 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-red-500 hover:bg-red-600"} text-white px-8 py-1.5 rounded`}
                                onClick={() => setShow(false)}
                            >
                                {r === 0 ? 'Đồng ý' : 'Từ chối'}
                            </button>
                        }

                        <button
                            onClick={() => setShow(false)}
                            className="border border-red-600 text-red-600 hover:bg-red-50 px-8 py-1.5 rounded"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            </div >
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}


export default ConfirmPhieuModal