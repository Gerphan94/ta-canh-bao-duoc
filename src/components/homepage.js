import React, { useState } from "react";
import ExpandableTable from "./table";
import DrugInfoModal from "./thongtinthuoc-modal";

function HomePage() {

    const [showTThuoc, setShowTThuoc] = useState(false);
    const [sltTrangThai, setSltTrangThai] = useState(-1);

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="flex">
                    {/* Sidebar */}
                    <div className="w-56 h-screen fixed bg-[#2C43A8] text-white p-2">
                        <div className="mt-20 text-left">
                            <div className="text-lg font-semibold cursor-pointer bg-[#017BFB] px-10 py-1 rounded">Duyệt thuốc</div>
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
                                <div>
                                    <select
                                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                                        value={sltTrangThai}
                                        onChange={(e) => setSltTrangThai(e.target.value)}
                                    >
                                        <option value={-1}>Tất cả</option>
                                        <option value={0}>Chưa duyệt</option>
                                        <option value={1}>Đã duyệt</option>
                                        <option value={1}>Đã duyệt phát</option>
                                    </select>
                                </div>
                                <button className="bg-blue-800 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-900">
                                    Xem
                                </button>
                            </div>
                        </div>

                        <ExpandableTable setShowTThuoc={setShowTThuoc} />

                    </div>
                </div>
            </div>
            <DrugInfoModal show={showTThuoc} setShow={setShowTThuoc} />
        </>
    );
}

export default HomePage;