import React, { useState } from "react";
import DanhSachPhieuTable from "./danh-sach-phieu-table";
import DrugInfoModal from "./thongtinthuoc-modal";

function HomePage() {




    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [showTThuoc, setShowTThuoc] = useState(false);
    const [sltTrangThai, setSltTrangThai] = useState('chuaduyet');

    const trangthais = [
        { id: "chuaduyet", name: "Chưa Duyệt" },
        { id: "dangduyet", name: "Đang Duyệt" },
        { id: "daduyet", name: "Đã Duyệt" },
        // { id: "dongy", name: "Đồng ý" },
        // { id: "tuchoi", name: "Từ chối" },
    ]

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="flex">
                    {/* Sidebar */}
                    <div className="w-56 h-screen fixed bg-[#2C43A8] text-white p-2">
                        <div className="p-4">
                            <img src="/img/talogo.png" alt="Logo" className="w-full h-18 mx-auto" />

                        </div>
                        <div className="mt-20 text-left space-y-1">
                            <button className={`text-lg w-full block font-semibold cursor-pointer bg-[#017BFB] hover:bg-[#017BFB] px-10 py-1 rounded`}
                            >
                                {'Duyệt thuốc'}
                            </button>

                        </div>

                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-6 ml-56">
                        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <label className="text-sm font-medium">Từ ngày:</label>
                                    <input
                                        type="date"
                                        defaultValue={startDate.toISOString().split('T')[0]}
                                        onChange={(e) => setStartDate(new Date(e.target.value))}
                                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <label className="text-sm font-medium">Đến ngày:</label>
                                    <input
                                        type="date"
                                        defaultValue={endDate.toISOString().split('T')[0]}
                                        onChange={(e) => setEndDate(new Date(e.target.value))}
                                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                                    />
                                </div>
                                <div className="flex gap-2 items-center">
                                    {trangthais.map((trangthai) => (
                                        <label className="cursor-pointer">
                                            <input
                                                type="radio"
                                                name='status'
                                                className="mr-2"
                                                checked={sltTrangThai === trangthai.id}
                                                onClick={() => setSltTrangThai(trangthai.id)}
                                            />
                                            {trangthai.name}
                                        </label>
                                    ))}



                                </div>
                                <button className="bg-blue-800 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-900">
                                    Xem
                                </button>
                            </div>
                        </div>

                        <DanhSachPhieuTable setShowTThuoc={setShowTThuoc} sltTrangThai={sltTrangThai} />

                    </div>
                </div>
            </div>
            <DrugInfoModal show={showTThuoc} setShow={setShowTThuoc} />
        </>
    );
}

export default HomePage;