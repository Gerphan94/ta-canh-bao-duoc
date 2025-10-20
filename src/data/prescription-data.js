export const UnapprovedPrescription = [
    {
        id: 1,
        gioylenh: '14:00',
        mabn: '2510001304',
        hoten: 'Nguyễn Thị Hồng',
        gioitinh: 'Nữ',
        ngaysinh: '01/01/2000',
        chandoan: 'Cao huyết áp (I10); Đái tháo đường týp 2 (E11); Rối loạn mỡ máu (E78.5); Béo phì (E66.9); Bệnh mạch vành (I25.1); Hen phế quản (J45.9); Viêm dạ dày mạn (K29.5); Trào ngược dạ dày-thực quản (K21.9); Bệnh thận mạn (N18.9); Thiếu máu không xác định (D64.9)',
        i3: true,
        trangthai: 'Chưa duyệt',
        group: [
            {
                cachpha: "Pha với nước cất",
                data: [
                    { name: "Rocephin 1g", desc: "Ceftriaxone x 1 Lọ", day: 1, ard: false },
                    { name: "Paracetamol 1g/100ml", desc: "Paracetamol truyền x 1 Chai", day: 0, ard: false },
                    { name: "Nước cất 10ml", desc: "Dung môi pha x 1 Ống", day: 0, ard: false }
                ]
            },
        ],
        thuoc: [
            { id: 2, name: "Amoxicillin 500mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 1, ard: false },   // Kháng sinh
            { id: 3, name: "Cefixime 200mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 2, ard: false },   // Kháng sinh
            { id: 4, name: "Metformin 850mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 0, ard: true },   // Thuốc hạ đường huyết (ARD)
        ]
    },
    {
        id: 2,
        gioylenh: '12:00',
        mabn: '2410008542',
        hoten: 'Phan Thị Hoa',
        gioitinh: 'Nữ',
        ngaysinh: '16/11/1980',
        chandoan: 'Loãng xương (M81)',
        i3: false,
        trangthai: 'Chưa duyệt',
        group: [
            {
                cachpha: "Pha với Glucose 5%",
                data: [
                    { name: "Vancomycin 500mg", desc: "Vancomycin x 1 Lọ", day: 2, ard: false },
                    { name: "Glucose 5% 100ml", desc: "Dung dịch truyền x 1 Chai", day: 0, ard: false }
                ]
            },
        ],
        thuoc: [
            { id: 2, name: "Amoxicillin 500mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 1, ard: false },   // Kháng sinh
            { id: 3, name: "Cefixime 200mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 2, ard: false },   // Kháng sinh
            { id: 4, name: "Metformin 850mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 0, ard: true },   // Thuốc hạ đường huyết (ARD)
        ]
    },
    {
        gioylenh: '11:00',
        mabn: '2520013641', 
        hoten: 'Trương Văn Phúc', 
        gioitinh: 'Nam',
        ngaysinh: '16/11/2002',
        chandoan: 'Sỏi thận (N20)', 
        i3: false, 
        trangthai: 'Đồng ý',
        group: [],
        thuoc: [
            { id: 8, name: "Clarithromycin 500mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 1, ard: false }, // Kháng sinh
            { id: 9, name: "Vitamin C 500mg", desc: "Uống 1 viên/lần * 1 lần/ngày", day: 0, ard: false },
            { id: 10, name: "Prednisolone 5mg", desc: "Uống 2 viên/lần * 1 lần/ngày", day: 0, ard: true }, // Corticoid (ARD)
            { id: 11, name: "Warfarin 2mg", desc: "Uống 1 viên/lần * 1 lần/ngày", day: 0, ard: true },     // Thuốc chống đông (ARD - thêm mới)
            { id: 12, name: "Insulin 10ml", desc: "Tiêm dưới da theo chỉ định", day: 0, ard: true }
        ]

    },

]



export const ApprovedPrescription = [
    {
        id: 1,gioylenh: '14:00',
        mabn: '2520019647', 
        hoten: 'Hồ Văn Hải', 
        gioitinh: 'Nam',
        ngaysinh: '16/11/2012',
        chandoan: 'Viêm loét dạ dày tá tràng (K25)', 
        i3: true, 
        trangthai: 'Đồng ý',
        group: [],
        thuoc: [
            { id: 2, name: "Amoxicillin 500mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 1, ard: false },   // Kháng sinh
            { id: 3, name: "Cefixime 200mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 2, ard: false },   // Kháng sinh
            { id: 4, name: "Metformin 850mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 0, ard: true },   // Thuốc hạ đường huyết (ARD)
        ]
    },
    {
        id: 1,
        gioylenh: '16:00',
        mabn: '2520018888', 
        hoten: 'Lê Thị Riêng', 
        gioitinh: 'Nữ',
        ngaysinh: '16/05/1970',
        chandoan: 'Viêm loét dạ dày tá tràng (K25)', 
        i3: true, 
        trangthai: 'Đồng ý',
        group: [
            {
                cachpha: "Pha với Glucose 5%",
                data: [
                    { name: "Vancomycin 500mg", desc: "Vancomycin x 1 Lọ", day: 2, ard: false },
                    { name: "Glucose 5% 100ml", desc: "Dung dịch truyền x 1 Chai", day: 0, ard: false }
                ]
            },
        ],
        thuoc: [
            { id: 2, name: "Amoxicillin 500mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 1, ard: false },   // Kháng sinh
            { id: 3, name: "Cefixime 200mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 2, ard: false },   // Kháng sinh
            { id: 4, name: "Metformin 850mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 0, ard: true },   // Thuốc hạ đường huyết (ARD)
        ]
    },
    {
        gioylenh: '11:00',
        mabn: '2520013641', 
        hoten: 'Trương Văn Phúc', 
        gioitinh: 'Nam',
        ngaysinh: '16/12/1997',
        chandoan: 'Sỏi thận (N20)', 
        i3: false,
         trangthai: 'Đồng ý',
        group: [],
        thuoc: [
            { id: 8, name: "Clarithromycin 500mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 1, ard: false }, // Kháng sinh
            { id: 9, name: "Vitamin C 500mg", desc: "Uống 1 viên/lần * 1 lần/ngày", day: 0, ard: false },
            { id: 10, name: "Prednisolone 5mg", desc: "Uống 2 viên/lần * 1 lần/ngày", day: 0, ard: true }, // Corticoid (ARD)
            { id: 11, name: "Warfarin 2mg", desc: "Uống 1 viên/lần * 1 lần/ngày", day: 0, ard: true },     // Thuốc chống đông (ARD - thêm mới)
            { id: 12, name: "Insulin 10ml", desc: "Tiêm dưới da theo chỉ định", day: 0, ard: true }
        ]

    },

]