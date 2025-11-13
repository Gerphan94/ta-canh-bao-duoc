import { useState } from "react";
import DanhSachPhieuTable from "./danh-sach-phieu-table";
import DrugInfoModal from "./thongtinthuoc-modal";
import GhiChuModal from "./ghi-chu-modal";

function HomePage() {




    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [showTThuoc, setShowTThuoc] = useState(false);
    const [sltTrangThai, setSltTrangThai] = useState('chuaduyet');
    const [showGhiChu, setShowGhiChu] = useState(false);
    const [noted, setNoted] = useState('');

    const trangthais = [
        { id: "chuaduyet", name: "Chưa Duyệt" },
        { id: "dangduyet", name: "Đang Duyệt" },
        { id: "daduyet", name: "Đã Duyệt" },
        // { id: "dongy", name: "Đồng ý" },
        // { id: "tuchoi", name: "Từ chối" },
    ]


    const khoas = [
        { id: 0, name: "" },
        { id: 1, name: "Tủ trực phòng Cấp cứu sàng lọc" },
        { id: 2, name: "Khoa Nội tổng quát" },
        { id: 3, name: "Tủ trực Khoa Cấp Cứu" },
        { id: 4, name: "TT Tiểu Phẫu Nhi" },
        { id: 5, name: "Khoa Ngoại Tổng Hợp" },
        { id: 6, name: "Tủ trực Nội Soi bàng quang (pk)" },
        { id: 7, name: "Khoa Sản" },
        { id: 8, name: "Khoa CDHA" },
        { id: 9, name: "Kho vật tư tiêu hao/thuốc lâm sàng IVF" },
        { id: 10, name: "Khoa Sơ Sinh" },
        { id: 11, name: "Tủ trực nội soi tiêu hóa" },
        { id: 12, name: "Tủ trực Phòng tiểu phẫu chỉnh hình" },
        { id: 13, name: "Khoa Nam Học" },
        { id: 14, name: "Khoa Nhi" },
        { id: 15, name: "KHO THUỐC HỒI TỈNH" },
        { id: 16, name: "Tủ trực Phòng Khám" },
        { id: 17, name: "Tủ trực Sơ cấp cứu  Nhi" },
        { id: 18, name: "TT Khoa Kiểm Soát Nhiễm Khuẩn" },
        { id: 19, name: "Xe E-cart" },
        { id: 20, name: "Phòng Tiểu phẫu (pk)" }
    ];


    return (
        <>
            <div className="h-screen bg-gray-50 overflow-hidden">
                {/* Sidebar */}
                <aside className="fixed inset-y-0 left-0 w-56 bg-[#2C43A8] text-white overflow-y-auto">
                    <div className="p-4">
                        <img src="/img/talogo.png" alt="Logo" className="w-full mx-auto" />
                    </div>

                    <nav className="mt-6 p-2 space-y-2">
                        <button
                            type="button"
                            className="text-lg w-full font-semibold bg-[#017BFB] hover:bg-[#017BFB] px-4 py-2 rounded"
                        >
                            Duyệt thuốc
                        </button>
                    </nav>
                </aside>

                {/* Main */}
                <main className="ml-56 h-full w-[calc(100%-14rem)] flex flex-col">
                    <div>
                        <div className="font-bold text-xl p-1 border-b">TAH NỘI TRÚ - BỆNH VIỆN ĐA KHOA TÂM ANH TP. HỒ CHÍ MINH</div>

                    </div>
                    {/* Filters (non-scrolling header) */}
                    <div className="px-6 mt-2">
                        <div className="bg-white p-4 shadow-sm rounded-md">
                            <div className="flex items-center gap-4">
                                <div className="flex justify-between items-center gap-2">
                                    <label className="text-sm font-medium">Từ ngày:</label>
                                    <input
                                        type="date"
                                        defaultValue={startDate.toISOString().split('T')[0]}
                                        onChange={(e) => setStartDate(new Date(e.target.value))}
                                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                                    />
                                </div>

                                <div className="flex lg:justify-end md:justify-between items-center gap-2">
                                    <label className="text-sm font-medium">Đến ngày:</label>
                                    <input
                                        type="date"
                                        defaultValue={endDate.toISOString().split('T')[0]}
                                        onChange={(e) => setEndDate(new Date(e.target.value))}
                                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                                    />
                                </div>

                                <div className="col-span-2 flex gap-4 items-center">
                                    {trangthais.map((trangthai) => (
                                        <label
                                            key={trangthai.id}
                                            className="inline-flex items-center gap-2 cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="status"
                                                value={trangthai.id}
                                                checked={sltTrangThai === trangthai.id}
                                                onChange={() => setSltTrangThai(trangthai.id)}
                                            />
                                            {trangthai.name}
                                        </label>
                                    ))}
                                </div>

                            </div>
                            <div className="flex gap-4 items-center py-2">
                                <input
                                    type="text"
                                    className="border outline-none px-2 py-1 rounded"
                                    placeholder="Nhập PID"
                                />

                                <select
                                    className="col-span-2 border outline-none px-2 py-1 rounded"
                                >
                                    {khoas.map((khoa) => (
                                        <option key={khoa.id} value={khoa.id}>
                                            {khoa.name}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    type="button"
                                    className="w-32 bg-blue-800 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-900"
                                >
                                    Xem
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Scrollable content area */}
                    <section className="flex-1 overflow-auto p-6 pt-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            {/* horizontal scroll if table is wide */}
                            <div className="overflow-x-auto ">
                                <DanhSachPhieuTable
                                    setShowTThuoc={setShowTThuoc}
                                    sltTrangThai={sltTrangThai}
                                    setShowGhiChu={setShowGhiChu}
                                    setNoted={setNoted}
                                />
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <DrugInfoModal show={showTThuoc} setShow={setShowTThuoc} />
            {showGhiChu && <GhiChuModal setShow={setShowGhiChu} ghichu={noted} />}
        </>
    );
}

export default HomePage;