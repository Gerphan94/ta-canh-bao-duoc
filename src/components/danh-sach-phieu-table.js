import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { DanhsachPhieu } from "../data/receipt-data";
import ToaThuocTable from "./toa-thuoc-table";


export default function DanhSachPhieuTable({ setShowTThuoc, sltTrangThai }) {
    const [expandedRows, setExpandedRows] = useState([]);


    const filterData = DanhsachPhieu.filter((item) => item.trangthai === sltTrangThai);

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
                    </tr>
                </thead>
                <tbody>
                   
                    {filterData.map((row, index) => (
                        <>
                            <tr
                                key={row.id}
                                className="cursor-pointer hover:bg-gray-50 text-left"
                                onClick={() => toggleExpand(row.id)}
                            >
                                <td className="border border-gray-300 px-2 py-1 text-center">{index + 1}</td>
                                <td className="border border-gray-300 px-2 py-1 ">
                                    {row.phieu}
                                </td>
                                <td className="border border-gray-300 px-2 py-1">{row.khoa}</td>
                                <td className="border border-gray-300 px-2 py-1">{row.ngay} {row.gio}</td>
                                <td className="border border-gray-300 px-2 py-1">{row.kho}</td>

                                <td className="border border-gray-300 px-2 py-1 flex justify-center">
                                    <span className={`${row.trangthai === 'daduyet' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-gray-600'} px-2 py-1 rounded-lg text-sm`}>
                                        {row.trangthai === 'chuaduyet' ? 'Chưa duyệt' : 'Đã duyệt'}
                                    </span>
                                </td>
                                <td className="border border-gray-300 px-2 py-1">{row.ngayduyet}</td>

                            </tr>
                            {expandedRows.includes(row.id) && (
                                <ToaThuocTable ngay={row.ngay} trangthaiphieu={row.trangthai} />

                            )}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
