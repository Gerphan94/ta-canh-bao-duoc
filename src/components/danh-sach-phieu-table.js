import { useEffect, useState } from "react";
import { DanhsachPhieu } from "../data/receipt-data";
import ToaThuocTable from "./toa-thuoc-tablev2";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import ConfirmPhieuModal from "./confirm-phieu-modal";
import LichSuDuyetModal from "./lich-su-duyet-modal";
import ConfirmMokhoa from "./comfirm-mokhoa";
import Pagination from "./pagination";
import { FaCheck , FaHistory, FaUnlockAlt  } from "react-icons/fa";

export default function DanhSachPhieuTable({ setShowTThuoc, sltTrangThai }) {
    const [expandedRows, setExpandedRows] = useState([]);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showLSDuyetModal, setShowLSDuyetModal] = useState(false);
    const [showMokhoaModal, setShowMokhoaModal] = useState(false);
    const [r, setR] = useState(0);

    const filterData = DanhsachPhieu.filter((item) => {
        if (sltTrangThai === "chuaduyet") {
            return item.trangthai === "chuaduyet" || item.trangthai === "duyetlai";
        }
        else if (sltTrangThai === "daduyet") {
            return item.trangthai === "dongy" || item.trangthai === "tuchoi";
        } else {
            return item.trangthai === sltTrangThai;
        }
    });

    useEffect(() => {
        setExpandedRows([]); // Reset expanded rows when the filter changes
    }, [sltTrangThai]);



    const toggleExpand = (id) => {
        setExpandedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    const handleConfirm = () => {
        setShowConfirmModal(true);
        setR(Math.floor(Math.random() * 3));
    }



    return (
        <div className="p-4 overflow-x-auto w-full">
            <table className=" border-collapse border border-gray-300 w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-2 py-1">STT</th>
                        <th className="border border-gray-300 px-2 py-1">PHIẾU</th>
                        <th className="border border-gray-300 px-2 py-1">KHOA</th>
                        <th className="border border-gray-300 px-2 py-1">NGÀY</th>
                        <th className="border border-gray-300 px-2 py-1">KHO</th>
                        <th className="border border-gray-300 px-2 py-1">TRẠNG THÁI</th>

                        <th className="border border-gray-300 px-2 py-1">NGÀY DUYỆT</th>
                        <th className="border border-gray-300 px-2 py-1">Ghi chú</th>
                        <th className="border border-gray-300 px-2 py-1 w-20 sticky right-0"></th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((row, index) => (
                        <>
                            <tr
                                key={row.id}
                                className={`cursor-pointer hover:bg-gray-50 text-left border-b truncate select-none ${row.trangthai === 'duyetlai' && 'text-red-400'}`}
                               
                            >
                                <td className=" border-gray-300 px-2 py-1 text-center flex gap-3 items-center">
                                    <div 
                                    className="border border-gray-200 rounded-md px-1 py-1 text-blue-300"
                                     onClick={() => toggleExpand(row.id)}
                                    
                                    >
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
                                <td className="border-r border-gray-300 px-2 py-1">{(row.trangthai === 'dongy' || row.trangthai === 'tuchoi') && row.ngayduyet}</td>
                                <td className="border-r border-gray-300 px-2 py-1">{row.ghichu}</td>
                                <td className="px-2 py-1">
                                    <div className="flex gap-2">
                                        {(row.trangthai === 'chuaduyet' || row.trangthai === 'dangduyet' || row.trangthai === 'duyetlai') &&
                                            <button
                                                className="bg-blue-400 hover:bg-[#017BFB] text-white p-1.5 rounded text-sm "
                                                onClick={() => handleConfirm()}
                                            >
                                                <FaCheck className="size-4" />
                                            </button>}
                                        {row.trangthai === 'duyetlai' &&
                                            <div className="flex gap-2 items-center">

                                                <button 
                                                className="bg-blue-400 hover:bg-[#017BFB] text-white p-1.5 rounded text-sm" 
                                                onClick={() => setShowLSDuyetModal(true)} >
                                                    <FaHistory className="size-4" />
                                                    </button>

                                            </div>
                                        }
                                        {(row.trangthai === 'tuchoi' || row.trangthai === 'dongy' || row.trangthai === 'dangduyet') &&
                                            <button className="bg-blue-400 hover:bg-[#017BFB] text-white p-1.5 rounded text-sm" onClick={() => setShowMokhoaModal(true)}>
                                                <FaUnlockAlt  className="size-4" />
                                                </button>}
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
            {showConfirmModal && <ConfirmPhieuModal setShow={setShowConfirmModal} r={r} />}
            {showLSDuyetModal && <LichSuDuyetModal setShow={setShowLSDuyetModal} />}
            {showMokhoaModal && <ConfirmMokhoa setShow={setShowMokhoaModal} />}
        </div>
    );
}
