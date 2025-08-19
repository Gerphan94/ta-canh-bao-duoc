export const Medicines = [
  { id: 1, name: "Paracetamol 500mg", desc: "Uống 1 viên/lần * 3 lần/ngày", day: 0, ard: false },
  { id: 2, name: "Amoxicillin 500mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 1, ard: false },   // Kháng sinh
  { id: 3, name: "Cefixime 200mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 2, ard: false },   // Kháng sinh
  { id: 4, name: "Metformin 850mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 0, ard: true },   // Thuốc hạ đường huyết (ARD)
  { id: 5, name: "Losartan 50mg", desc: "Uống 1 viên/lần * 1 lần/ngày", day: 0, ard: true },     // Thuốc tim mạch (ARD)
  { id: 6, name: "Omeprazole 20mg", desc: "Uống 1 viên/lần * 1 lần/ngày", day: 0, ard: false },
  { id: 7, name: "Aspirin 81mg", desc: "Uống 1 viên/lần * 1 lần/ngày", day: 0, ard: true },      // Chống đông (ARD)
  { id: 8, name: "Clarithromycin 500mg", desc: "Uống 1 viên/lần * 2 lần/ngày", day: 1, ard: false }, // Kháng sinh
  { id: 9, name: "Vitamin C 500mg", desc: "Uống 1 viên/lần * 1 lần/ngày", day: 0, ard: false },
  { id: 10, name: "Prednisolone 5mg", desc: "Uống 2 viên/lần * 1 lần/ngày", day: 0, ard: true }, // Corticoid (ARD)
  { id: 11, name: "Warfarin 2mg", desc: "Uống 1 viên/lần * 1 lần/ngày", day: 0, ard: true },     // Thuốc chống đông (ARD - thêm mới)
  { id: 12, name: "Insulin 10ml", desc: "Tiêm dưới da theo chỉ định", day: 0, ard: true }       // Thuốc tiêm hạ đường huyết (ARD - thêm mới)
]


export const GroupMedicines = [
  {
    cachpha: "Pha với nước cất",
    data: [
      { name: "Rocephin 1g", desc: "Ceftriaxone x 1 Lọ", day: 1, ard: false },
      { name: "Paracetamol 1g/100ml", desc: "Paracetamol truyền x 1 Chai", day: 0, ard: false },
      { name: "Nước cất 10ml", desc: "Dung môi pha x 1 Ống", day: 0, ard: false }
    ]
  },
  {
    cachpha: "Pha với Glucose 5%",
    data: [
      { name: "Vancomycin 500mg", desc: "Vancomycin x 1 Lọ", day: 2, ard: false },
      { name: "Glucose 5% 100ml", desc: "Dung dịch truyền x 1 Chai", day: 0, ard: false }
    ]
  },
  {
    cachpha: "Pha với NaCl 0.9%",
    data: [
      { name: "Meronem 1g", desc: "Meropenem x 1 Lọ", day: 2, ard: false },
      { name: "NaCl 0.9% 100ml", desc: "Dung dịch truyền x 1 Chai", day: 0, ard: false }
    ]
  },
  {
    cachpha: "Pha với nước cất",
    data: [
      { name: "Gentamycin 80mg/2ml", desc: "Gentamycin x 1 Ống", day: 1, ard: false },
      { name: "Amikacin 500mg/2ml", desc: "Amikacin x 1 Ống", day: 2, ard: false },
      { name: "Nước cất 10ml", desc: "Dung môi pha x 1 Ống", day: 0, ard: false }
    ]
  },
  {
    cachpha: "Pha với NaCl 0.9%",
    data: [
      { name: "Fortum 1g", desc: "Ceftazidime x 1 Lọ", day: 1, ard: false },
      { name: "Metronidazol 500mg/100ml", desc: "Metronidazol truyền x 1 Chai", day: 0, ard: false },
      { name: "NaCl 0.9% 100ml", desc: "Dung dịch truyền x 1 Chai", day: 0, ard: false }
    ]
  },
  {
    cachpha: "Pha với Glucose 5%",
    data: [
      { name: "Cefotaxime 1g", desc: "Cefotaxime x 1 Lọ", day: 1, ard: false },
      { name: "Glucose 5% 250ml", desc: "Dung dịch truyền x 1 Chai", day: 0, ard: false }
    ]
  },
  {
    cachpha: "Pha với nước cất",
    data: [
      { name: "Tazocin 4.5g", desc: "Piperacillin + Tazobactam x 1 Lọ", day: 2, ard: false },
      { name: "Nước cất 20ml", desc: "Dung môi pha x 1 Ống", day: 0, ard: false }
    ]
  },
  {
    cachpha: "Pha với NaCl 0.9%",
    data: [
      { name: "Ciprofloxacin 200mg/100ml", desc: "Ciprofloxacin truyền x 1 Chai", day: 1, ard: false },
      { name: "NaCl 0.9% 100ml", desc: "Dung dịch truyền x 1 Chai", day: 0, ard: false }
    ]
  },
  {
    cachpha: "Pha với nước cất",
    data: [
      { name: "Augmentin 1.2g", desc: "Amoxicillin + Clavulanic acid x 1 Lọ", day: 1, ard: false },
      { name: "Gentamycin 80mg/2ml", desc: "Gentamycin x 1 Ống", day: 1, ard: false },
      { name: "Nước cất 10ml", desc: "Dung môi pha x 1 Ống", day: 0, ard: false }
    ]
  },
  {
    cachpha: "Pha với Glucose 5%",
    data: [
      { name: "Cefepime 1g", desc: "Cefepime x 1 Lọ", day: 2, ard: false },
      { name: "Glucose 5% 100ml", desc: "Dung dịch truyền x 1 Chai", day: 0, ard: false }
    ]
  }
]

