import { useState } from "react";
import { MdOutlineWarningAmber } from "react-icons/md";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

const data = [
    {
        id: 1,
        phieu: "Phiếu lĩnh thuốc lần 1",
        khoa: "Kho thuốc hồi tỉnh",
        ngay: "13/08/2025",
        trangThai: "Đang duyệt",
        kho: "Kho Dược nội trú C",
        ngayDuyet: "",
        details: [
            {
                time: '08/12/2025 14:30',
                pid: "24103239284",
                patientName: "Nguyễn Văn An",
                diagnosis: "Cao huyết áp (I10)",
                accepted: false,
                i3: true,
                groups: {
                    note: 'Pha với nước cất',
                    data: [
                        { name: "Paracetamol 500mg", desc: "Uống 2  lần/lần * 3 lần/ngày", day: 0 },
                        { name: "Amoxicillin 250mg", desc: "Uống 1  lần/lần * 2 lần/ngày", day: 1 }
                    ]

                },
                pharmacy: [
                    { name: "Cozaar 50mg", desc: "Losartan x 1 Viên", use: "Uống 1 viên/lần * 1 lần/ngày", day: 0, ard: true },
                    { name: "Paracetamol 500mg", desc: "Uống 2 viên/lần * 3 lần/ngày", day: 0, ard: false },
                    { name: "Amoxicillin 250mg", desc: "Uống 1  lần/lần * 2 lần/ngày", day: 1, ard: false }

                ]
            },
            {
                time: '08/12/2025 14:30',
                pid: "24103239284",
                patientName: "Nguyễn Văn An",
                diagnosis: "Cao huyết áp (I10)",
                accepted: true,
                i3: false,
                groups: {
                    note: 'Pha với nước cất',
                    data: [
                        { name: "Paracetamol 500mg", desc: "Uống 2  lần/lần * 3 lần/ngày", day: 0 },
                        { name: "Amoxicillin 250mg", desc: "Uống 1  lần/lần * 2 lần/ngày", day: 1 }
                    ]

                },
                pharmacy: [
                    { name: "Cozaar 50mg", desc: "Losartan x 1 Viên", use: "Uống 1 viên/lần * 1 lần/ngày", day: 0 },
                    { name: "Paracetamol 500mg", desc: "Uống 2 viên/lần * 3 lần/ngày", day: 0, ard: false },
                    { name: "Amoxicillin 250mg", desc: "Uống 1  lần/lần * 2 lần/ngày", day: 2, ard: true }

                ]
            }
        ]
    },
    {
        id: 2,
        phieu: "Phiếu lĩnh thuốc lần 2",
        khoa: "Kho thuốc nội khoa",
        ngay: "12/08/2025",
        trangThai: "Đã duyệt",
        kho: "Kho Dược Nội trú C",
        ngayDuyet: "08/12/2025 14:30",
        details: [
            {
                time: '08/12/2025 14:30',
                pid: "24103239284",
                patientName: "Nguyễn Văn An",
                diagnosis: "Cao huyết áp (I10)",
                accepted: true,
                i3: false,
                groups: {
                    note: 'Pha với nước cất',
                    data: [
                        { name: "Paracetamol 500mg", desc: "Uống 2  lần/lần * 3 lần/ngày", day: 0 },
                        { name: "Amoxicillin 250mg", desc: "Uống 1  lần/lần * 2 lần/ngày", day: 1 }
                    ]

                },
                pharmacy: [
                    "Paracetamol 500mg x 2 Viên (Uống 2 viên/lần * 3 lần/ngày sau ăn)",
                    "Amoxicillin 250mg x 1 Viên (Uống 1 viên/lần * 2 lần/ngày)"
                ]
            }
        ]
    }
];

export default function ExpandableTable({ setShowTThuoc }) {
    const [expandedRows, setExpandedRows] = useState([]);

    const handleClickThuoc = () => {
        setShowTThuoc(true);
    };

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
                        <th className="border border-gray-300 px-2 py-1">TRẠNG THÁI</th>
                        <th className="border border-gray-300 px-2 py-1">KHO</th>
                        <th className="border border-gray-300 px-2 py-1">NGÀY DUYỆT</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <>
                            <tr
                                key={row.id}
                                className="cursor-pointer hover:bg-gray-50 text-left"
                                onClick={() => toggleExpand(row.id)}
                            >
                                <td className="border border-gray-300 px-2 py-1 text-center">{row.id}</td>
                                <td className="border border-gray-300 px-2 py-1 ">
                                    {row.phieu}
                                </td>
                                <td className="border border-gray-300 px-2 py-1">{row.khoa}</td>
                                <td className="border border-gray-300 px-2 py-1">{row.ngay}</td>
                                <td className="border border-gray-300 px-2 py-1">
                                    {row.trangThai === "Đã duyệt" ? (
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                                            {row.trangThai}
                                        </span>
                                    ) : (
                                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                                            {row.trangThai}
                                        </span>
                                    )}
                                </td>
                                <td className="border border-gray-300 px-2 py-1">{row.kho}</td>
                                <td className="border border-gray-300 px-2 py-1">{row.ngayDuyet}</td>

                            </tr>
                            {expandedRows.includes(row.id) && (
                                <tr>
                                    <td colSpan={8} className="border border-gray-300 px-6 py-3 bg-gray-50">
                                        {row.details.map((detail, i) => (
                                            <div key={i} className="mb-2 text-left border rounded-xl">
                                                <div className="flex justify-between bg-gray-300 p-2 rounded-t-lg">
                                                    <div className=" flex gap-2 items-center ">
                                                        <div><strong>Ngày y lệnh:</strong> {detail.time}</div>
                                                        <div><strong>PID:</strong> {detail.pid}</div>
                                                        <div><strong>Họ tên: </strong> {detail.patientName}</div>
                                                        <div><strong>Chẩn đoán</strong> {detail.diagnosis}</div>

                                                    </div>
                                                    <div className="flex gap-4 items-center">
                                                        {detail.i3 && (
                                                            <a
                                                                className="inline-block border px-2 py-1 rounded-md bg-blue-700 text-white "
                                                                href="http://172.20.9.22/preview/10dc653d-7abd-4648-a24a-726bbf513dc3"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                Xem I3
                                                            </a>
                                                        )}
                                                        {detail.accepted ?
                                                            <>
                                                            
                                                                <button className={`w-24 text-sm  px-4 py-1 rounded bg-red-500 text-white`}>
                                                                   Hủy duyệt
                                                                </button>
                                                            </>
                                                            :
                                                            <>
                                                            <button className={`w-24 text-sm  px-4 py-1 rounded border bg-white border-red-600 text-red-600`}>
                                                                   Từ chối
                                                                </button>
                                                                <button className={`w-24 text-sm  px-4 py-1 rounded border bg-green-600 text-white`}>
                                                                    Duyệt
                                                                </button>
                                                            </>

                                                        }



                                                    </div>
                                                </div>

                                                <div className="list-disc pl-5 text-sm space-2 text-gray-700 py-4">
                                                    <div className="border-l-2 border-gray-400 pl-2 mb-1">
                                                        {detail.groups.data.map((group, idx) => (
                                                            <div key={idx} className="">
                                                                <div className="flex gap-2 items-center">
                                                                    {group.day > 0 && <span className="font-medium border border-black rounded-full w-5 h-5 flex items-center justify-center">{group.day}</span>}
                                                                    <div className="font-bold underline" onClick={() => handleClickThuoc(group.name)}>{group.name}</div>
                                                                    <div>{group.desc}</div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                        <div className="pl-2 italic py-1">{detail.groups.note}</div>
                                                    </div>

                                                    {detail.pharmacy.map((item, idx) => (
                                                        <div key={idx}>
                                                            <div className="flex gap-2 items-center">
                                                                {item.day > 0 && <span className="font-medium border border-black rounded-full w-5 h-5 flex items-center justify-center">{item.day}</span>}

                                                                <div className="font-bold underline" onClick={() => handleClickThuoc}>{item.name}</div>
                                                                <div>{item.desc}</div>
                                                                {item.ard && <span >
                                                                    <span className="text-red-500 flex items-center gap-1 border border-red-500 px-2 rounded-xl"><MdOutlineWarningAmber />adr</span>

                                                                </span>
                                                                }
                                                            </div>
                                                            <div>{item.use}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            )}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
