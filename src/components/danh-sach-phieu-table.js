import { useState } from "react";
import { DanhsachPhieu } from "../data/receipt-data";
import ToaThuocTable from "./toa-thuoc-table";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import ConfirmPhieuModal from "./confirm-phieu-modal";
import LichSuDuyetModal from "./lich-su-duyet-modal";
import Pagination from "./pagination";

export default function DanhSachPhieuTable({ setShowTThuoc, sltTrangThai }) {
    const [expandedRows, setExpandedRows] = useState([]);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showLSDuyetModal, setShowLSDuyetModal] = useState(false);


    const filterData = DanhsachPhieu.filter((item) => {
        if (sltTrangThai === "dangduyet") {
            return item.trangthai === "dangduyet" || item.trangthai === "duyetlai";
        }
        else if (sltTrangThai === "daduyet") {
            return item.trangthai === "dongy" || item.trangthai === "tuchoi";
        } else {
            return item.trangthai === sltTrangThai;
        }
    });

    const toggleExpand = (id) => {
        setExpandedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    return (
        <div className="p-4">
            <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-2 py-1">STT</th>
                        <th className="border border-gray-300 px-2 py-1">PHIẾU</th>
                        <th className="border border-gray-300 px-2 py-1">KHOA</th>
                        <th className="border border-gray-300 px-2 py-1">NGÀY</th>
                        <th className="border border-gray-300 px-2 py-1">KHO</th>
                        <th className="border border-gray-300 px-2 py-1">TRẠNG THÁI</th>

                        <th className="border border-gray-300 px-2 py-1">NGÀY DUYỆT</th>
                        <th className="border border-gray-300 px-2 py-1 w-40"></th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((row, index) => (
                        <>
                            <tr
                                key={row.id}
                                className="cursor-pointer hover:bg-gray-50 text-left border-b"
                                onClick={() => toggleExpand(row.id)}
                            >
                                <td className=" border-gray-300 px-2 py-1 text-center flex gap-3 items-center">
                                    <div className="border border-gray-200 rounded-md px-1 py-1 text-blue-300">
                                        {expandedRows.includes(row.id) ? <FaAngleDown /> : <FaAngleRight />}
                                    </div>
                                    <div>{index + 1}</div>
                                </td>
                                <td className="border-r border-l border-gray-300 px-2 py-1 ">
                                    {row.phieu}
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1">{row.khoa}</td>
                                <td className="border-r border-gray-300 px-2 py-1">{row.ngay} {row.gio}</td>
                                <td className="border-r border-gray-300 px-2 py-1">{row.kho}</td>
                                <td className="border-r border-gray-300 px-4">
                                    <div className={`${row.trangthai === 'chuaduyet' ? 'text-gray-800' : row.trangthai === 'dangduyet' ? 'text-blue-500' : row.trangthai === 'dongy' ? 'text-green-500' : "text-red-500"}  rounded-md px-2 py-1}`}>
                                        {row.trangthai === 'chuaduyet' ? 'Chưa duyệt' :
                                            row.trangthai === 'duyetlai' ? 'Duyệt lại' :
                                                row.trangthai === 'dangduyet' ? 'Đang duyệt' :
                                                    row.trangthai === 'dongy' ? 'Đồng ý' :
                                                        "Từ Chối"}
                                    </div>
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1">{(row.trangthai === 'dongy' || row.trangthai === 'tuchoi') && row.ngayduyet }</td>
                                <td className="px-2 py-1">
                                    <div >
                                        {row.trangthai === 'chuaduyet' && <button className="bg-blue-400 hover:bg-[#017BFB] text-white px-2 py-0.5 rounded text-sm" onClick={() => setShowConfirmModal(true)}>Xác nhận</button>}
                                        {row.trangthai === 'dangduyet' && <button className="bg-blue-400 hover:bg-[#017BFB] text-white px-2 py-0.5 rounded text-sm" onClick={() => setShowConfirmModal(true)}>Xác nhận</button>}
                                        {row.trangthai === 'duyetlai' &&
                                            <div className="flex gap-2 items-center">
                                                <button className="bg-blue-400 hover:bg-[#017BFB] text-white px-2 py-0.5 rounded text-sm" onClick={() => setShowConfirmModal(true)}>Xác nhận</button>
                                                
                                                <button className="bg-blue-400 hover:bg-[#017BFB] text-white px-2 py-0.5 rounded text-sm" onClick={() => setShowLSDuyetModal(true)} >Lịch sử</button>

                                            </div>
                                        }
                                        {row.trangthai === 'tuchoi' && <button className="bg-blue-400 hover:bg-[#017BFB] text-white px-2 py-0.5 rounded text-sm" onClick={() => setShowConfirmModal(true)}>Mở khóa</button>}
                                        {row.trangthai === 'dongy' && <button className="bg-blue-400 hover:bg-[#017BFB] text-white px-2 py-0.5 rounded text-sm" onClick={() => setShowConfirmModal(true)}>Mở khóa</button>}
                                    </div>
                                </td>
                            </tr>
                            {expandedRows.includes(row.id) && (
                                <ToaThuocTable ngay={row.ngay} trangthaiphieu={row.trangthai} sltTrangThai={sltTrangThai} />
                            )}
                        </>
                    ))}
                </tbody>
            </table>
            <Pagination
                currentPage={1}
                totalPage={1}
            />
            {showConfirmModal && <ConfirmPhieuModal setShow={setShowConfirmModal} />}
            {showLSDuyetModal && <LichSuDuyetModal setShow={setShowLSDuyetModal} />}
        </div>
    );
}
