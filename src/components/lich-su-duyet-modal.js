import { useState } from "react";
import DanhSachThuocTable from "./danh-sach-thuoc-table";

const data = [
    {
        id: 1,
        gioylenh: '14:00',
        mabn: '2510001304',
        hoten: 'Nguyễn Thị Hồng',
        gioitinh: 'Nữ',
        ngaysinh: '01/01/2000',
        chandoan: 'Cao huyết áp (I10); Đái tháo đường týp 2 (E11); Rối loạn mỡ máu (E78.5); Béo phì (E66.9); Bệnh mạch vành (I25.1); Hen phế quản (J45.9); Viêm dạ dày mạn (K29.5); Trào ngược dạ dày-thực quản (K21.9); Bệnh thận mạn (N18.9); Thiếu máu không xác định (D64.9)',

        i3: true,
        trangthai: 'Từ chối',
        ghichu: 'Toa thuốc không hợp lệ',
        group: [
            {
                cachpha: "Pha với nước cất",
                data: [
                    { name: "Rocephin 1g", desc: "Ceftriaxone x 1 Lọ", day: 1, ard: false },
                    { name: "Paracetamol 1g/100ml", desc: "Paracetamol truyền x 1 Chai", day: 0, ard: false },
                    { name: "Nước cất 10ml", desc: "Dung môi pha x 1 Ống", day: 0, ard: false }
                ]
            },
        ],
        thuoc: [
            { id: 2, name: "Amoxicillin 500mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 1, ard: false },   // Kháng sinh
            { id: 3, name: "Cefixime 200mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 2, ard: false },   // Kháng sinh
            { id: 4, name: "Metformin 850mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 0, ard: true },   // Thuốc hạ đường huyết (ARD)
        ]
    },
    {
        id: 2,
        gioylenh: '12:00',
        mabn: '2410008542',
        hoten: 'Phan Thị Hoa',
        gioitinh: 'Nữ',
        ngaysinh: '16/11/1980',
        chandoan: 'Loãng xương (M81)',
        i3: true,
        trangthai: 'Từ chối',
        ghichu: 'Toa thuốc không hợp lệ',
        group: [
            {
                cachpha: "Pha với Glucose 5%",
                data: [
                    { name: "Vancomycin 500mg", desc: "Vancomycin x 1 Lọ", day: 2, ard: false },
                    { name: "Glucose 5% 100ml", desc: "Dung dịch truyền x 1 Chai", day: 0, ard: false }
                ]
            },
        ],
        thuoc: [
            { id: 2, name: "Amoxicillin 500mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 1, ard: false },   // Kháng sinh
            { id: 3, name: "Cefixime 200mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 2, ard: false },   // Kháng sinh
            { id: 4, name: "Metformin 850mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 0, ard: true },   // Thuốc hạ đường huyết (ARD)
        ]
    },
    {
        gioylenh: '11:00',
        mabn: '2520013641',
        hoten: 'Trương Văn Phúc',
        gioitinh: 'Nam',
        ngaysinh: '16/11/2002',
        chandoan: 'Sỏi thận (N20)', i3: false, trangthai: 'Đồng ý',
        ghichu: 'Đồng ý với y lệnh bác sĩ',
        group: [],
        thuoc: [
            { id: 8, name: "Clarithromycin 500mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 1, ard: false }, // Kháng sinh
            { id: 9, name: "Vitamin C 500mg", desc: "Uống 1 viên/lần * 1 lần/ngày", day: 0, ard: false },
            { id: 10, name: "Prednisolone 5mg", desc: "Uống 2 viên/lần * 1 lần/ngày", day: 0, ard: true }, // Corticoid (ARD)
            { id: 11, name: "Warfarin 2mg", desc: "Uống 1 viên/lần * 1 lần/ngày", day: 0, ard: true },     // Thuốc chống đông (ARD - thêm mới)
            { id: 12, name: "Insulin 10ml", desc: "Tiêm dưới da theo chỉ định", day: 0, ard: true }
        ]

    },

]

export default function LichSuDuyetModal({ setShow }) {


    const lichsu = [
        { ngayduyet: '19/09/2025 ', gioduyet: '16:00',nguoiduyet: "Nguyễn Thị Hồng", ghichu: "Cách dùng thuốc chưa đúng", trangthai: "Từ chối" },
        { ngayduyet: '18/09/2025 ', gioduyet: '12:00', nguoiduyet: "Nguyễn Thị Hồng", ghichu: "Sai chẩn đoán", trangthai: "Từ chối" },

    ]



    return (
        <>

            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 ">
                <div className="bg-white w-4/6 h-5/6 rounded-md shadow-lg border border-gray-300 flex flex-col ">
                    {/* Header */}
                    <div className="bg-gray-100   px-4 py-2 border-b flex justify-between items-center">
                        <h2 className="font-semibold text-gray-800">Lịch sử duyệt</h2>
                        <button
                            className="text-gray-500 hover:text-red-500"
                            onClick={() => setShow(false)}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Body */}
                    <div className=" overflow-y-auto w-full h-full">
                        <div className="">
                            {lichsu.map((detail, i) => (
                                <LichSuRow key={i} lichsu={detail} />

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



const LichSuRow = ({ lichsu }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="p-2">
                <div className="w-full flex justify-between px-6 py-1 bg-[#2C43A8] text-white "
                    onClick={() => setShow(!show)}
                >
                    <div className="flex-1 text-left"><strong>Ngày duyệt: </strong>{lichsu.ngayduyet} {lichsu.gioduyet}</div>
                    <div className="flex-1 text-left"><strong>Người duyệt: </strong>{lichsu.nguoiduyet}</div>
                    <div className="flex-1 text-left"><strong>Trạng thái: </strong>{lichsu.trangthai}</div>
                    <div className="flex-1 text-left"><strong>Ghi chú: </strong>{lichsu.ghichu}</div>
                </div>

                {show &&
                    <div className="border w-full border-gray-300 px-6 py-3 bg-gray-50">
                        {data.map((detail, i) => (
                            <div key={detail.id} className="mb-2 text-left border rounded-xl">
                                <div className="flex justify-between bg-gray-300 p-2 rounded-t-lg w-full">
                                    <div className=" flex gap-2 items-center w-full ">
                                        <div className="flex gap-2 items-center"><div className="font-semibold">Mã BN:</div> {detail.mabn}</div>
                                        <div className="flex gap-2 items-center"><div className="font-semibold">Họ tên: </div> {detail.hoten}</div>
                                        <div className="flex gap-2 items-center"><div className="font-semibold">Giới tính: </div> {detail.gioitinh}</div>
                                        <div className="flex gap-2 items-center"><div className="font-semibold">Ngày sinh: </div> {detail.ngaysinh}</div>

                                    </div>
                                    <div className="flex gap-4 items-center w-20">
                                        <div className="italic inline-block">
                                            <div className={`${detail.trangthai === 'Đồng ý' ? 'text-blue-700' : detail.trangthai === 'Từ chối' ? 'text-red-700' : 'text-gray-700'}`}>{detail.trangthai}</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/3 p-4 border-r">
                                        <div className="flex gap-2 items-center"><div className="font-semibold underline">Ngày y lệnh:</div>{lichsu.ngayduyet}{detail.gioylenh}</div>
                                        <div className=" rounded-md font-medium underline ">Chẩn đoán:</div>
                                        <div className="">
                                            {detail.chandoan.split(';').map((item, i) =>
                                                <div key={i} className=" ">{item}</div>)}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <DanhSachThuocTable group={detail.group} thuoc={detail.thuoc} />

                                        <div className="p-2">
                                            {detail.i3 && (
                                                <a
                                                    className=" text-blue-500 underline flex gap-1 items-center "
                                                    href="http://172.20.9.22/preview/10dc653d-7abd-4648-a24a-726bbf513dc3"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Toa thuốc có cảnh báo I3
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                </div>
                                {detail.trangthai === 'Từ chối' && (
                                    <div className="p-2 space-y-1">
                                        <label className="block text-red-500">Lý do từ chối:</label>
                                        <textarea
                                            className="border rounded-md outline-none p-2 w-full"
                                            readOnly value={detail.ghichu} />
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    );
};
