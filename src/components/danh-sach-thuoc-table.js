import { useState } from "react";
import { MdOutlineWarningAmber } from "react-icons/md";
import DrugInfoModal from "./thongtinthuoc-modal";

function DanhSachThuocTable({ group, thuoc }) {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="list-disc pl-5 text-sm space-2 text-gray-700 py-4">
                {group.map((g, idx) => (
                    <div className="flex">
                        <div className="w-1.5 border-l-2 border-y-2 rounded-l-xl border-blue-400">
                        </div>
                        <div className="  pl-2 ">
                            {g.data.map((group, idx) => (
                                <div key={idx} className="">
                                    <div className="flex gap-2 items-center">
                                        {group.day > 0 && <span className="font-medium text-xs border border-black rounded-full w-4 h-4 flex items-center justify-center">{group.day}</span>}
                                        <div className="font-bold hover:underline cursor-pointer" onClick={() => setShow(true)} >{group.name}</div>
                                        <div>{group.desc}</div>
                                    </div>
                                </div>
                            ))}
                            <div className="pl-2 italic py-1">{group && g.cachpha}</div>
                        </div>
                    </div>

                ))}
                {thuoc.map((item, idx) => (
                    <div key={idx}>
                        <div className="flex gap-2 items-center space-y-1">
                            {item.day > 0 && <span className="font-medium border border-black rounded-full w-5 h-5 flex items-center justify-center">{item.day}</span>}
                            <div className="font-bold hover:underline cursor-pointer" onClick={() => setShow(true)} >{item.name}</div>
                            <div>{item.desc}</div>
                            {item.ard && <span >
                                <span className="text-red-500 flex items-center  gap-1  text-xs border border-red-500 px-2 rounded-xl"><MdOutlineWarningAmber />adr</span>
                            </span>
                            }
                        </div>
                        <div>{item.use}</div>
                    </div>
                ))}
            </div>

            <DrugInfoModal show={show} setShow={setShow} />

        </>
    )
}

export default DanhSachThuocTable;