import { useState } from "react";

export default function DrugInfoModal({ show, setShow }) {

    


    const fields = [
        { label: "Thành phần:", data: "text", default: "Ibuprofen" },
        { label: "Chỉ định:", data: "textarea" },
        { label: "Chống chỉ định:", data: "textarea" },
        { label: "Chú ý đề phòng:", data: "textarea" },
        { label: "Lúc có thai:", data: "textarea" },
        { label: "Tương tác thuốc:", data: "textarea" },
        { label: "Tác dụng ngoài ý:", data: "textarea" },
        { label: "Liều lượng:", data: "textarea" },
        { label: "Đường dùng:", data: "text", default: "Uống" },
        { label: "Cách dùng:", data: "textarea" },
        { label: "Tên File:", data: "text" }
    ];

    if (!show) {
        return null;
    }

    return (
        <>

            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <div className="bg-white w-[800px] rounded-md shadow-lg border border-gray-300">
                    {/* Header */}
                    <div className="bg-gray-100 px-4 py-2 border-b flex justify-between items-center">
                        <h2 className="font-semibold text-gray-800">Thông tin dược lâm sàng</h2>
                        <button
                            className="text-gray-500 hover:text-red-500"
                            onClick={() => setShow(false)}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Body */}
                    <div className="max-h-[500px] overflow-y-auto">
                        {/* Drug Info Top Section */}
                        <div className="flex p-4 gap-4 border-b">
                            <img
                                src="/img/medicine.png"
                                alt="drug"
                                className="w-20 h-20 object-contain"
                            />
                            <div className="text-left p-2">
                                <div className="font-bold text-blue-700">
                                    A.T IBUPROFEN SYRUP 100mg/5ml; 60ml Chai
                                </div>
                                <div className="grid grid-cols-2 text-left">
                                    <div className="px-2">Số đăng ký: VD-25631-16</div>
                                    <div className="px-2">Dạng bào chế: Chai</div>
                                    <div className="px-2">Qui cách đóng gói: Hộp 1 chai x 60 ml</div>
                                    <div className="px-2">Công ty: KXD</div>
                                </div>

                            </div>
                        </div>

                        {/* Form Fields */}
                        <div>
                            {fields.map((field, idx) => (
                                <div key={idx} className="flex border-b text-left">
                                    <div className="w-40 bg-gray-50 border-r px-2 py-2 text-sm">
                                        {field.label}
                                    </div>
                                    <div className="flex-1 p-1">
                                        {field.type === "textarea" ? (
                                            <textarea
                                                className="w-full border rounded-sm px-2 py-1 text-sm"
                                                rows={2}
                                                defaultValue={field.default || ""}
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                className="w-full border rounded-sm px-2 py-1 text-sm"
                                                defaultValue={field.default || ""}
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-2 p-3 border-t bg-gray-50">
                        <button className="border px-3 py-1 rounded bg-white hover:bg-gray-100">
                            Hình
                        </button>
                        <button className="border px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700">
                            Lưu
                        </button>
                        <button
                            className="border px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                            onClick={() => setShow(false)}
                        >
                            Kết thúc
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}
