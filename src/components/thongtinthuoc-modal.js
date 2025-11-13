

export default function DrugInfoModal({ show, setShow }) {

    


    const fields = [
    { "label": "Thành phần:", "data": "Ibuprofen" },
    { "label": "Chỉ định:", "data": "Giảm đau nhẹ đến vừa: đau đầu, đau răng, đau cơ, đau bụng kinh; hạ sốt; giảm triệu chứng viêm trong viêm khớp dạng thấp, viêm khớp thiếu niên, viêm xương khớp." },
    { "label": "Chống chỉ định:", "data": "Mẫn cảm với ibuprofen hoặc các thuốc chống viêm không steroid (NSAIDs) khác; loét dạ dày – tá tràng tiến triển, xuất huyết tiêu hóa; suy tim nặng, suy gan nặng, suy thận nặng; bệnh nhân có tiền sử hen, co thắt phế quản, viêm mũi dị ứng do aspirin hoặc NSAIDs." },
    { "label": "Chú ý đề phòng:", "data": "Thận trọng ở bệnh nhân có tiền sử bệnh đường tiêu hóa, tăng huyết áp, bệnh tim mạch, suy thận, suy gan; uống sau bữa ăn để giảm kích ứng dạ dày; không dùng đồng thời với các NSAIDs khác." },
    { "label": "Lúc có thai:", "data": "Tránh sử dụng trong 3 tháng cuối thai kỳ; chỉ dùng khi thật cần thiết trong 6 tháng đầu, theo chỉ định bác sĩ." },
    { "label": "Tương tác thuốc:", "data": "Tăng nguy cơ xuất huyết khi dùng cùng thuốc chống đông máu (warfarin); tăng nguy cơ loét, xuất huyết tiêu hóa khi dùng cùng corticosteroid hoặc các NSAIDs khác; giảm tác dụng của thuốc hạ huyết áp, lợi tiểu; tăng độc tính trên thận khi dùng cùng cyclosporin, tacrolimus." },
    { "label": "Tác dụng ngoài ý:", "data": "Thường gặp: buồn nôn, nôn, đau bụng, ợ nóng, tiêu chảy; ít gặp: chóng mặt, nhức đầu, phát ban; hiếm gặp: loét, xuất huyết tiêu hóa, phản ứng dị ứng nặng (phù mạch, phản vệ)." },
    { "label": "Liều lượng:", "data": "Trẻ em: 5–10 mg/kg/lần, mỗi 6–8 giờ nếu cần, tối đa 40 mg/kg/ngày; người lớn: 200–400 mg/lần, mỗi 4–6 giờ nếu cần, tối đa 1.200 mg/ngày (không kê toa) hoặc 2.400 mg/ngày (kê toa)." },
    { "label": "Đường dùng:", "data": "Uống" },
    { "label": "Cách dùng:", "data": "Lắc kỹ trước khi dùng, uống sau bữa ăn hoặc cùng sữa để giảm kích ứng dạ dày." },
    { "label": "Tên File:", "data": "" }
]
;

    if (!show) {
        return null;
    }

    return (
        <>

            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 ">
                <div className="bg-white w-[800px] h-5/6 rounded-md shadow-lg border border-gray-300 flex flex-col">
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
                    <div className="max-h-[800px] overflow-y-auto">
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
                        <div className="p-2">
                            {fields.map((field, idx) => (
                                <div key={idx} className="flex border text-left">
                                    <div className="w-40 bg-gray-50 border-r px-2 py-2 text-sm">
                                        {field.label}
                                    </div>
                                    <div className="flex-1 p-1">
                                        <p className="text-sm">{field.data}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-2 p-3 border-t bg-gray-50">
                       
                        <button
                            className="border px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                            onClick={() => setShow(false)}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}
