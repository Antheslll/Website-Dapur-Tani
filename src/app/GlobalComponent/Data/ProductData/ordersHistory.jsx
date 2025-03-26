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
export const orderHistory = [
  {
    invoice: "#0123348",
    type: "instant",
    purchasedOn: formatCustomDate(2025, 3, 2),
    amount: (1850000).toLocaleString("id-ID"),
    status: "Finished",
    product: [
      {
        key: "#0123348-1",
        qty: 20,
        photo: "/Products/vegetable/fresh/asparagus.jpg",
        category: "Vegetable",
        name: "Fresh Asparagus – Rp 85,000/kg [ Crisp and tender, ideal for grilling, roasting, or steaming. ]",
        materialType: "Fresh",
        amount: (1700000).toLocaleString("id-ID"),
      },

      {
        key: "#0123348-2",
        qty: 5,
        photo: "/Products/vegetable/fresh/baby-corn.jpg",
        category: "Vegetable",
        name: "Fresh Baby Corn – Rp 30,000/kg [ Sweet and crunchy, perfect for stir-fries and salads. ]",
        materialType: "Fresh",
        amount: (150000).toLocaleString("id-ID"),
      },
    ],
  },

  {
    invoice: "#0123359",
    type: "auto",
    purchasedOn: formatCustomDate(2025, 3, 2),
    amount: (900000).toLocaleString("id-ID"),
    status: "Finished",
    product: [
      {
        key: "#0123359-1",
        qty: 30,
        photo: "/Products/vegetable/fresh/bell-pepper.jpg",
        category: "Vegetable",
        name: "Fresh Bell Pepper – Rp 45,000/kg [ Vibrant colors, crisp texture, perfect for salads and stir-fries. ]",
        materialType: "Fresh",
        amount: (900000).toLocaleString("id-ID"),
      },
    ],
  },

  {
    invoice: "#0123349",
    type: "wholesale",
    purchasedOn: formatCustomDate(2025, 3, 2),
    amount: (750000).toLocaleString("id-ID"),
    status: "Finished",
    product: [
      {
        key: "#0123349-1",
        qty: 30,
        photo: "/Products/fruit/fresh/fresh-apple.jpg",
        category: "Fruit",
        name: "Fresh Apple – Rp 25,000/kg [ Crisp and sweet, perfect for snacking. ]",
        materialType: "Fresh",
        amount: (750000).toLocaleString("id-ID"),
      },
    ],
  },
  {
    invoice: "#0123350",
    type: "instant",
    purchasedOn: formatCustomDate(2025, 3, 3),
    amount: (4000000).toLocaleString("id-ID"),
    status: "Finished",
    product: [
      {
        key: "#0123350-1",
        qty: 50,
        photo: "/Products/fruit/fresh/fresh-blueberry.jpg",
        category: "Fruit",
        name: "Fresh Blueberry – Rp 80,000/kg [ Antioxidant-rich, perfect for desserts. ]",
        materialType: "Fresh",
        amount: (4000000).toLocaleString("id-ID"),
      },
    ],
  },

  {
    invoice: "#0123351",
    type: "auto",
    purchasedOn: formatCustomDate(2025, 3, 3),
    amount: (2200000).toLocaleString("id-ID"),
    status: "Finished",
    product: [
      {
        key: "#0123351-1",
        qty: 40,
        photo: "/Products/fruit/frozen/kiwi.jpg",
        category: "Fruit",
        name: "Frozen Kiwi – Rp 55,000/kg [ Preserved freshness and nutrients. ]",
        materialType: "Frozen",
        amount: (2200000).toLocaleString("id-ID"),
      },
    ],
  },

  {
    invoice: "#0123352",
    type: "wholesale",
    purchasedOn: formatCustomDate(2025, 3, 3),
    amount: (2100000).toLocaleString("id-ID"),
    status: "Finished",
    product: [
      {
        key: "#0123352-1",
        qty: 70,
        photo: "/Products/fruit/fresh/guava.jpg",
        category: "Fruit",
        name: "Fresh Guava – Rp 30,000/kg [ Sweet and crunchy, rich in vitamin C. ]",
        materialType: "Fresh",
        amount: (2100000).toLocaleString("id-ID"),
      },
    ],
  },
  {
    invoice: "#0123353",
    type: "instant",
    purchasedOn: formatCustomDate(2025, 3, 4),
    amount: (2200000).toLocaleString("id-ID"),
    status: "Finished",
    product: [
      {
        key: "#0123353-1",
        qty: 70,
        photo: "/Products/fruit/fresh/orange.jpg",
        category: "Fruit",
        name: "Fresh Orange – Rp 30,000/kg [ Sweet and tangy, great for fresh juice. ]",
        materialType: "Fresh",
        amount: (2100000).toLocaleString("id-ID"),
      },
    ],
  },

  {
    invoice: "#0123354",
    type: "auto",
    purchasedOn: formatCustomDate(2025, 3, 4),
    amount: (4500000).toLocaleString("id-ID"),
    status: "Finished",
    product: [
      {
        key: "#0123354-1",
        qty: 30,
        photo: "/Products/meat/fresh/fresh-beef-flank.jpg",
        category: "Fruit",
        name: "Fresh Beef Flank – Rp 150,000/kg [ Perfect for grilling or stir-fries. ]",
        materialType: "Fresh",
        amount: (4500000).toLocaleString("id-ID"),
      },
    ],
  },

  {
    invoice: "#0123355",
    type: "wholesale",
    purchasedOn: formatCustomDate(2025, 3, 4),
    amount: (2800000).toLocaleString("id-ID"),
    status: "Finished",
    product: [
      {
        key: "#0123355-1",
        qty: 30,
        photo: "/Products/meat/fresh/fresh-brisket-beef.jpg",
        category: "Fruit",
        name: "Fresh Brisket Beef – Rp 200,000/kg [ Perfect for slow cooking or smoking. ]",
        materialType: "Fresh",
        amount: (4500000).toLocaleString("id-ID"),
      },
    ],
  },
];
