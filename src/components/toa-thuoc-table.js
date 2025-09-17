import { useEffect, useState } from "react";
import { Patient } from "../data/patient-data";
import { UnapprovedPrescription, ApprovedPrescription } from "../data/prescription-data";
import DanhSachThuocTable from "./danh-sach-thuoc-table";

import ConfirmModal from "./confirm-modal";
function ToaThuocTable({ ngay, trangthaiphieu, sltTrangThai }) {
    console.log('sltTrangThai', sltTrangThai)


    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [confirmType, setConfirmType] = useState('');
    const [sltMabn, setSltMabn] = useState('');

    const [data, setData] = useState(UnapprovedPrescription);

    useEffect(() => {
        if (sltTrangThai === 'chuaduyet' || sltTrangThai === 'dangduyet') {
            setData(UnapprovedPrescription);
        } else {
            setData(ApprovedPrescription);
        }
    }, [sltTrangThai]);



    const handleClick = (mabn, type) => {
        setShowConfirmModal(true);
        setSltMabn(mabn);
        setConfirmType(type);
    };

    const handleDuyet = (mabn, trangthai) => {
        console.log(mabn, trangthai);
        setData((prev) =>
            prev.map((item) =>
                item.mabn === mabn ? { ...item, trangthai } : item
            )
        );
    };


    return (
        <>

            <tr>
                <td colSpan={8} className="border border-gray-300 px-6 py-3 bg-gray-50">
                    {data.map((detail, i) => (
                        <div key={detail.id} className="mb-2 text-left border rounded-xl">
                            <div className="flex justify-between bg-gray-300 p-2 rounded-t-lg">
                                <div className=" flex gap-2 items-center ">
                                    <div className="flex gap-2 items-center"><div className="font-semibold">Ngày y lệnh:</div> {ngay} {detail.gioylenh}</div>
                                    <div className="flex gap-2 items-center"><div className="font-semibold">PID:</div> {detail.mabn}</div>
                                    <div className="flex gap-2 items-center"><div className="font-semibold">Họ tên: </div> {detail.hoten}</div>
                                    <div className="flex gap-2 items-center"><div className="font-semibold">Chẩn đoán</div> {detail.chandoan}</div>
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
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="italic">
                                        <div className={`${detail.trangthai === 'Đồng ý' ? 'text-blue-700' : detail.trangthai === 'Từ chối' ? 'text-red-700' : 'text-gray-700'}`}>{detail.trangthai}</div>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        {detail.trangthai === 'Chưa duyệt' || detail.trangthai === 'Đang duyệt' ?
                                            <>
                                                <button className="  bg-red-500 text-white rounded px-2 py-0.5" onClick={() => handleClick(detail.mabn, 'tuchoi')} >Từ chối</button>
                                                <button className=" bg-blue-500 text-white rounded px-2 py-0.5" onClick={() => handleClick(detail.mabn, 'dongy')} >Đồng ý</button>
                                                {/* {trangthaiphieu === 'duyetlai' &&
                                                    <button
                                                        className=" bg-blue-500 text-white rounded px-2 py-0.5"
                                                        onClick={() => handleClick(detail.mabn, 'dongy')} >
                                                        Lịch sử
                                                    </button>
                                                } */}
                                            </>
                                            :
                                            <button className=" bg-blue-500 text-white rounded px-2 py-0.5" onClick={() => handleDuyet(detail.mabn, 'Chưa duyệt')} >Duyệt lại</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <DanhSachThuocTable group={detail.group} thuoc={detail.thuoc} />
                        </div>
                    ))}
                </td>
            </tr>
            {showConfirmModal &&
                <ConfirmModal
                    setShow={setShowConfirmModal}
                    mabn={sltMabn}
                    onClick={handleDuyet}
                    confirmType={confirmType}
                />}
        </>
    );
}

export default ToaThuocTable;