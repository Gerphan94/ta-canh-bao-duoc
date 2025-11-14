import { useState, useRef } from "react";
import MultiSelect from "./mutil-select";
function ConfirmModal({ setShow, mabn, onClick, confirmType }) {



    const inputRef = useRef(null);
    const [lydo, setLydo] = useState('');
    const lydos = [
        'ICD gợi ý', "Dị ứng", " Có thai", " Tương tác thuốc - thuốc", "Trùng dược tính", "Tương tác thuốc - bệnh", " Tương kỵ",
        "Không dung môi tương hợp", "Sai đường dùng", "Quá liều"
    ]


    // const [sltlydo, setSltlydo] = useState('')

    // const handleAddLydo = () => {
    //     if (!sltlydo) return; 

    //     if (lydo.includes(sltlydo)) return;

    //     setLydo(prev => prev ? `${prev}; ${sltlydo}` : sltlydo);

    //     setSltlydo(''); // reset select sau khi thêm
    // };


    const handleClickTuChoi = () => {
        if (!lydo.trim()) {
            // If empty, focus the input
            inputRef.current?.focus();
            return;
        }

        setShow(false);
        onClick(mabn, confirmType === 'dongy' ? 'Đồng ý' : 'Từ chối');
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40">
                <div className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-off px-6 py-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Xác nhận {confirmType === 'dongy' ? "đồng ý" : "từ chối"}</h2>
                    <MultiSelect options={lydos} />

                    {/* <div className="flex gap-2 items-center py-2">
                        <select
                            className="w-full border px-2 py-1 outline-none rounded"
                            value={sltlydo}
                            onChange={(e) => setSltlydo(e.target.value)}
                        >
                            {lydos.map((lydo, index) => (
                                <option key={index}>{lydo}</option>
                            ))}
                        </select>
                        <button className=" border bg-blue-500 text-white px-2 py-1 rounded"
                            onClick={handleAddLydo}
                        >Chọn</button>
                    </div> */}
                    <div  className="text-left">
                        <label className="font-semibold text-gray-700">Lý do khác</label>
                        <textarea
                            ref={inputRef}
                            value={lydo}
                            rows="4"
                            spellCheck="false"
                            autoComplete="off"
                            onChange={(e) => setLydo(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2 outline-none mt-1"
                            placeholder={`Nhập lý do khác`}
                        />
                    </div>


                    <div className="flex justify-center gap-4 pt-4 text-sm">
                        <button className={` ${confirmType === 'dongy' ? "bg-blue-600 hover:bg-blue-700" : "bg-red-500 hover:bg-red-600"} text-white px-8 py-1.5 rounded`}
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
            <div className="opacity-75 fixed inset-0 z-30 bg-black"></div>
        </>
    )
}


export default ConfirmModal

