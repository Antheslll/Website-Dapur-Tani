function formatCustomDate(year, month, day) {
  const date = new Date(year, month - 1, day);

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dayName = days[date.getDay()];
  const formattedDay = date.getDate().toString().padStart(2, "0");
  const monthName = months[date.getMonth()];
  const yearFormatted = date.getFullYear();

  return ` ${formattedDay}-${monthName}-${yearFormatted}`;
}

export const orderStatusData = [
  {
    orderCode: "OrderTracking-BZ278CDFG",
    type: "instant",
    status: "Payment",
    expected: formatCustomDate(2025, 4, 2),
    invoice: {
      orderCode: "OrderTracking-BZ278CDFG",
      code: "#0123988",
      purchasedOn: formatCustomDate(2025, 3, 27),
      product: {
        orderCode: "OrderTracking-BZ278CDFG",
        qty: 10,
        photo: "/Products/vegetable/fresh/asparagus.jpg",
        category: "Vegetable",
        name: "Fresh Asparagus – Rp 85,000/kg [ Crisp and tender, ideal for grilling, roasting, or steaming. ]",
        materialType: "Fresh",
        amount: (850000).toLocaleString("id-ID"),
      },
    },
  },
  {
    orderCode: "OrderTracking-BG278CDFG",
    type: "instant",
    status: "Packed",
    expected: formatCustomDate(2025, 4, 2),
    invoice: {
      orderCode: "OrderTracking-BG278CDFG",
      code: "#0123980",
      purchasedOn: formatCustomDate(2025, 3, 27),
      product: {
        orderCode: "OrderTracking-BG278CDFG",
        qty: 5,
        photo: "/Products/vegetable/fresh/baby-corn.jpg",
        category: "Vegetable",
        name: "Fresh Baby Corn – Rp 30,000/kg [ Sweet and crunchy, perfect for stir-fries and salads. ]",
        materialType: "Fresh",
        amount: (150000).toLocaleString("id-ID"),
      },
    },
  },
  {
    orderCode: "OrderTracking-BD278CDFG",
    type: "instant",
    status: "Packed",
    expected: formatCustomDate(2025, 4, 2),
    invoice: {
      orderCode: "OrderTracking-BD278CDFG",
      code: "#0123989",
      purchasedOn: formatCustomDate(2025, 3, 27),
      product: {
        orderCode: "OrderTracking-BD278CDFG",
        qty: 30,
        photo: "/Products/vegetable/fresh/bell-pepper.jpg",
        category: "Vegetable",
        name: "Fresh Bell Pepper – Rp 45,000/kg [ Vibrant colors, crisp texture, perfect for salads and stir-fries. ]",
        materialType: "Fresh",
        amount: (900000).toLocaleString("id-ID"),
      },
    },
  },
  {
    orderCode: "OrderTracking-BF278CDFG",
    type: "instant",
    status: "Delivered",
    expected: formatCustomDate(2025, 4, 2),
    invoice: {
      orderCode: "OrderTracking-BF278CDFG",
      code: "#0123949",
      purchasedOn: formatCustomDate(2025, 3, 27),
      product: {
        orderCode: "OrderTracking-BF278CDFG",
        qty: 30,
        photo: "/Products/fruit/fresh/fresh-apple.jpg",
        category: "Fruit",
        name: "Fresh Apple – Rp 25,000/kg [ Crisp and sweet, perfect for snacking. ]",
        materialType: "Fresh",
        amount: (750000).toLocaleString("id-ID"),
      },
    },
  },
  {
    orderCode: "OrderTracking-BA278CDFG",
    type: "instant",
    status: "Completed",
    expected: formatCustomDate(2025, 4, 2),
    invoice: {
      orderCode: "OrderTracking-BA278CDFG",
      code: "#0123919",
      purchasedOn: formatCustomDate(2025, 3, 27),
      product: {
        orderCode: "OrderTracking-BA278CDFG",
        qty: 40,
        photo: "/Products/fruit/frozen/kiwi.jpg",
        category: "Fruit",
        name: "Frozen Kiwi – Rp 55,000/kg [ Preserved freshness and nutrients. ]",
        materialType: "Frozen",
        amount: (2200000).toLocaleString("id-ID"),
      },
    },
  },
];
