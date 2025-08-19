import React, { useState } from "react";
import DanhSachPhieuTable from "./danh-sach-phieu-table";
import DrugInfoModal from "./thongtinthuoc-modal";

function HomePage() {

    const menu = [
        { id: 'duyet-thuoc', title: 'Duyệt thuốc', link: 'duyet-thuoc' },
    ]
    const currentPath = window.location.pathname.split('/').pop();
    const [sltMenu, setSltMenu] = useState(menu[0].id);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [showTThuoc, setShowTThuoc] = useState(false);
    const [sltTrangThai, setSltTrangThai] = useState('chuaduyet');

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
                            {menu.map((item) => (
                                <a
                                    key={item.id}
                                    className={`text-lg w-full block font-semibold cursor-pointer ${currentPath === item.link ? 'bg-[#017BFB]' : ''} hover:bg-[#017BFB] px-10 py-1 rounded`}
                                    onClick={() => setSltMenu(item.id)}
                                    href={`${item.link}`}
                                >{item.title}</a>
                            ))}
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
                                        defaultValue="2025-08-06"
                                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <label className="text-sm font-medium">Đến ngày:</label>
                                    <input
                                        type="date"
                                        defaultValue="2025-08-13"
                                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                                    />
                                </div>
                                <div className="flex gap-2 items-center">

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name='status'
                                            className="mr-2"
                                            checked={sltTrangThai === 'chuaduyet'}
                                            onClick={() => setSltTrangThai('chuaduyet')}
                                        />
                                        Chưa duyệt
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name='status'
                                            className="mr-2"
                                            checked={sltTrangThai === 'daduyet'}
                                            onClick={() => setSltTrangThai('daduyet')}
                                        />
                                        Đã duyệt
                                    </label>
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