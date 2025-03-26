const vegetableProducts = [
  {
    key: "FV01",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/asparagus.jpg",
    brand: "Green Harvest",
    productName:
      "Fresh Asparagus – Rp 85,000/kg [ Crisp and tender, ideal for grilling, roasting, or steaming. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 85000,
    price: 76500,
    sold: "(25.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-GreenHarvest.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Asparagus – Green Harvest 🌿\n\n" +
      "Enjoy premium quality asparagus from Green Harvest. These fresh, green stalks are rich in nutrients and perfect for a healthy diet.\n" +
      "\nWhy Choose Our Asparagus?\n\n" +
      "✅ 100% Fresh & Organic – Harvested from the best farms.\n" +
      "✅ High in Fiber & Nutrients – Great for digestion and overall health.\n" +
      "✅ Versatile for Cooking – Ideal for stir-fries, soups, and salads.\n" +
      "\n\n💡 Storage Tips:\nKeep refrigerated at 2–5°C for maximum freshness.\n" +
      "Order now and taste the natural goodness of Green Harvest Asparagus! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.1,
    },
    storageTime: {
      day: 5,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV02",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/baby-corn.jpg",
    brand: "Farm Fresh",
    productName:
      "Fresh Baby Corn – Rp 30,000/kg [ Sweet and crunchy, perfect for stir-fries and salads. ]",
    star: 4,
    unit: "1kg",
    price: 30000,
    sold: "(18.000 unit)",
    type: "Fresh",
    certificate: { file: "certificate-FarmFresh.pdf", legality: "certified" },
    productDescription:
      "Fresh Baby Corn – Farm Fresh 🌽\n\nOur baby corn is handpicked from the finest farms, ensuring sweet and crunchy texture for your dishes.\n\nWhy Choose Our Baby Corn?\n\n✅ 100% Fresh & Organic – Directly sourced from local farmers.\n✅ Perfect for Various Dishes – Stir-fries, salads, and soups.\n✅ Naturally Sweet & Tender – No preservatives or chemicals.\n\n💡 Storage Tips:\nStore in a cool place or refrigerate for longer freshness.\nOrder now and bring home the goodness of Farm Fresh Baby Corn! 🌱✨",
    promotion: { type: "Cashback", value: 5000 },
    storageTime: { day: 7, week: 0, month: 0 },
  },
  {
    key: "FV03",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/bell-pepper.jpg",
    brand: "Nature's Best",
    productName:
      "Fresh Bell Pepper – Rp 45,000/kg [ Vibrant colors, crisp texture, perfect for salads and stir-fries. ]",
    star: 5,
    unit: "1kg",
    price: 45000,

    sold: "(30.000 unit)",
    type: "Fresh",
    certificate: { file: "certificate-NaturesBest.pdf", legality: "certified" },
    productDescription:
      "Fresh Bell Pepper – Nature's Best 🫑\n\nEnjoy the freshness of Bell Peppers from Nature's Best. Our premium bell peppers come in vibrant colors, naturally sweet flavors, and a crisp texture.\n\nWhy Choose Our Bell Peppers?\n\n✅ 100% Fresh & Organic – Handpicked from the finest farms.\n✅ Free from Harmful Pesticides – Safe for the whole family.\n✅ Crispy Texture & Naturally Sweet Taste – Ideal for salads, stir-fries, and stuffed recipes.\n\n💡 Storage Tips:\nKeep refrigerated at 4–7°C to maintain freshness.\nOrder now and experience the premium quality of Nature's Best Bell Peppers! 🌱✨",
    promotion: { type: "Free Delivery" },
    storageTime: { day: 10, week: 0, month: 0 },
  },
  {
    key: "FV04",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/broccoli.jpg",
    brand: "Organic Farms",
    productName:
      "Fresh Broccoli – Rp 50,000/kg [ Rich in fiber, vitamins, and antioxidants. Perfect for steaming and stir-fries. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 50000,
    price: 47500,
    sold: "(22.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-OrganicFarms.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Broccoli – Organic Farms 🥦\n\nOur broccoli is organically grown, ensuring a nutrient-rich vegetable with a crisp texture and delicious taste.\n\nWhy Choose Our Broccoli?\n\n✅ 100% Organic & Fresh – Sourced from high-quality farms.\n✅ High in Fiber & Vitamins – Supports digestion and immune health.\n✅ Versatile in Cooking – Great for steaming, stir-fries, and salads.\n\n💡 Storage Tips:\nRefrigerate at 4°C for best results.\nOrder now and enjoy the health benefits of Organic Farms Broccoli! 🌱✨",
    promotion: { type: "Membership", value: 0.05 },
    storageTime: { day: 7, week: 0, month: 0 },
  },
  {
    key: "FV05",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/cabbage.jpg",
    brand: "Eco Fresh",
    productName:
      "Fresh Cabbage – Rp 25,000/kg [ Crunchy and packed with nutrients, great for salads and soups. ]",
    star: 4,
    unit: "1kg",
    price: 25000,
    sold: "(15.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-EcoFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Cabbage – Eco Fresh 🥬\n\n" +
      "Cabbage from Eco Fresh is rich in fiber and vitamins, making it a perfect addition to your healthy meals.\n\n" +
      "Why Choose Our Cabbage?\n\n" +
      "✅ 100% Fresh & Organic – Sourced directly from our farms.\n" +
      "✅ Rich in Nutrients – High in fiber, vitamin C, and antioxidants.\n" +
      "✅ Ideal for Cooking – Great for soups, stir-fries, and fresh salads.\n\n" +
      "💡 Storage Tips:\n" +
      "Keep in a cool, dry place or refrigerate for longer shelf life.\n" +
      "Order now and taste the crisp freshness of Eco Fresh Cabbage! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.15,
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },

  {
    key: "FV06",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/carrot.jpg",
    brand: "Healthy Farm",
    productName:
      "Fresh Carrot – Rp 20,000/kg [ Naturally sweet, crunchy, and rich in beta-carotene. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 20000,
    price: 19000,
    sold: "(28.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-HealthyFarm.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Carrot – Healthy Farm 🥕\n\nOur carrots are fresh, naturally sweet, and packed with beta-carotene for eye health.\n\nWhy Choose Our Carrots?\n\n✅ 100% Fresh & Organic – Sourced from trusted farms.\n✅ High in Beta-Carotene – Good for eyesight and immune support.\n✅ Perfect for Cooking – Great for soups, stir-fries, and salads.\n\n💡 Storage Tips:\nStore in a cool place to maintain freshness.\nOrder now and enjoy the sweetness of Healthy Farm Carrots! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.05,
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV07",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/cauliflower.jpg",
    brand: "Green Choice",
    productName:
      "Fresh Cauliflower – Rp 35,000/kg [ High in fiber and antioxidants, great for healthy diets. ]",
    star: 4,
    unit: "1kg",
    price: 35000,
    sold: "(19.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-GreenChoice.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Cauliflower – Green Choice 🌿\n\nA nutritious and fiber-rich vegetable, ideal for low-carb diets and meal preps.\n\nWhy Choose Our Cauliflower?\n\n✅ 100% Fresh & Organic – Grown with natural farming methods.\n✅ High in Fiber & Antioxidants – Great for digestion and overall health.\n✅ Versatile Cooking Ingredient – Ideal for roasting, steaming, or making cauliflower rice.\n\n💡 Storage Tips:\nRefrigerate for prolonged freshness.\nOrder now and add the goodness of Green Choice Cauliflower to your meals! 🌱✨",
    promotion: {
      type: "Cashback",
      value: 3000,
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV08",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/celery.jpg",
    brand: "Nature Fresh",
    productName:
      "Fresh Celery – Rp 18,000/bunch [ Crisp, hydrating, and perfect for juicing or salads. ]",
    star: 5,
    unit: "1 bunch",
    price: 18000,
    sold: "(21.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-NatureFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Celery – Nature Fresh 🌿\n\nHydrating and full of essential nutrients, perfect for juicing or adding to meals.\n\nWhy Choose Our Celery?\n\n✅ 100% Fresh & Organic – No artificial pesticides or chemicals.\n✅ Rich in Hydration – Great for detox and maintaining hydration.\n✅ Perfect for Juicing & Cooking – Add to salads, smoothies, and soups.\n\n💡 Storage Tips:\nStore in a refrigerator for maximum freshness.\nOrder now and enjoy the crisp freshness of Nature Fresh Celery! 🌱✨",
    promotion: {
      type: "Free Delivery",
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV09",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/cucumber.jpg",
    brand: "Pure Farms",
    productName:
      "Fresh Cucumber – Rp 15,000/kg [ Hydrating and refreshing, perfect for salads and pickles. ]",
    star: 4,
    unit: "1kg",
    undiscountPrice: 15000,
    price: 14550,
    sold: "(24.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-PureFarms.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Cucumber – Pure Farms 🥒\n\nOur cucumbers are naturally hydrating and crisp, ideal for refreshing meals.\n\nWhy Choose Our Cucumbers?\n\n✅ 100% Fresh & Organic – No artificial chemicals.\n✅ High in Water Content – Keeps you hydrated.\n✅ Ideal for Salads & Pickles – Versatile ingredient for fresh meals.\n\n💡 Storage Tips:\nKeep refrigerated for prolonged freshness.\nOrder now and enjoy the freshness of Pure Farms Cucumbers! 🌱✨",
    promotion: {
      type: "Membership",
      value: 0.03,
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV10",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/eggplant.jpg",
    brand: "Farm Select",
    productName:
      "Fresh Eggplant – Rp 22,000/kg [ Soft, versatile, and perfect for grilling or stews. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 22000,
    price: 20460,
    sold: "(17.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-FarmSelect.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Eggplant – Farm Select 🍆\n\n" +
      "Soft and versatile, eggplant is a must-have for various cuisines.\n\n" +
      "Why Choose Our Eggplant?\n\n" +
      "✅ 100% Fresh & Organic – No harmful pesticides.\n" +
      "✅ Rich in Fiber & Antioxidants – Supports heart health.\n" +
      "✅ Perfect for Cooking – Ideal for grilling, frying, or adding to curries.\n" +
      "\n\n💡 Storage Tips:\nStore in a cool place or refrigerate.\n" +
      "Order now and enjoy the Farm Select Eggplant in your meals! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.07,
    },
    storageTime: {
      day: 4,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV11",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/broccoli.jpg",
    brand: "Organic Harvest",
    productName:
      "Fresh Broccoli – Rp 30,000/kg [ Rich in vitamins and fiber, perfect for a healthy diet. ]",
    star: 5,
    unit: "1kg",
    price: 30000,
    sold: "(26.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-OrganicHarvest.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Broccoli – Organic Harvest 🥦\n\nNutrient-packed and fresh, perfect for boosting your immune system.\n\nWhy Choose Our Broccoli?\n\n✅ 100% Organic & Pesticide-Free.\n✅ Rich in Vitamins & Fiber – Supports digestion and immunity.\n✅ Versatile – Can be steamed, roasted, or eaten raw.\n\n💡 Storage Tips:\nRefrigerate to maintain crispness.\nOrder now and enjoy the Organic Harvest Broccoli! 🌱✨",
    promotion: { type: "Cashback", value: 2500 },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV12",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/spinach.jpg",
    brand: "Nature Green",
    productName:
      "Fresh Spinach – Rp 12,000/bunch [ High in iron and great for boosting energy. ]",
    star: 5,
    unit: "1 bunch",
    price: 12000,
    sold: "(32.000 unit)",
    type: "Fresh",
    certificate: { file: "certificate-NatureGreen.pdf", legality: "certified" },
    productDescription:
      "Fresh Spinach – Nature Green 🌿\n\nPacked with iron and essential vitamins, ideal for a healthy lifestyle.\n\nWhy Choose Our Spinach?\n\n✅ 100% Fresh & Organic.\n✅ High in Iron – Boosts energy and strengthens immunity.\n✅ Perfect for Smoothies, Salads, or Stir-fries.\n\n💡 Storage Tips:\nKeep in a cool, dry place.\nOrder now and enjoy the health benefits of Nature Green Spinach! 🌱✨",
    promotion: { type: "Free Delivery" },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV13",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/tomato.jpg",
    brand: "Farm Fresh",
    productName:
      "Fresh Tomatoes – Rp 18,000/kg [ Juicy, rich in antioxidants, and perfect for sauces. ]",
    star: 4,
    unit: "1kg",
    undiscountPrice: 18000,
    price: 17100,
    sold: "(29.000 unit)",
    type: "Fresh",
    certificate: { file: "certificate-FarmFresh.pdf", legality: "certified" },
    productDescription:
      "Fresh Tomatoes – Farm Fresh 🍅\n\nRich in lycopene and great for heart health.\n\nWhy Choose Our Tomatoes?\n\n✅ 100% Fresh & Naturally Grown.\n✅ High in Antioxidants – Great for skin and overall health.\n✅ Ideal for Cooking – Use in sauces, salads, and soups.\n\n💡 Storage Tips:\nKeep at room temperature for ripening.\nOrder now and enjoy Farm Fresh Tomatoes! 🌱✨",
    promotion: { type: "Membership", value: 0.05 },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV14",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/redpepper.jpg",
    brand: "Natural Bounty",
    productName:
      "Fresh Red Peppers – Rp 40,000/kg [ Sweet and crunchy, packed with vitamin C. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 40000,
    price: 38000,
    sold: "(14.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-NaturalBounty.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Red Peppers – Natural Bounty 🌶️\n\nA deliciously sweet and vitamin-rich vegetable.\n\nWhy Choose Our Red Peppers?\n\n✅ 100% Organic & Fresh.\n✅ High in Vitamin C – Strengthens immune system.\n✅ Perfect for Salads, Stir-Fries, and Grilling.\n\n💡 Storage Tips:\nStore in the refrigerator for long-lasting freshness.\nOrder now and add the vibrant taste of Natural Bounty Peppers to your meals! 🌱✨",
    promotion: { type: "Discount", value: 0.1 },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV15",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/lettuce.jpg",
    brand: "Green Valley",
    productName:
      "Fresh Lettuce – Rp 10,000/bunch [ Crisp and refreshing, ideal for salads. ]",
    star: 5,
    unit: "1 bunch",
    price: 10000,
    sold: "(35.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-GreenValley.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Lettuce – Green Valley 🥬\n\n" +
      "Crisp, refreshing, and packed with hydration.\n\n" +
      "Why Choose Our Lettuce?\n\n" +
      "✅ 100% Fresh & Organic.\n" +
      "✅ Low in Calories – Perfect for healthy diets.\n" +
      "✅ Great for Salads, Wraps, and Sandwiches.\n" +
      "\n\n💡 Storage Tips:\nKeep refrigerated for maximum freshness.\n" +
      "Order now and enjoy the freshness of Green Valley Lettuce! 🌱✨",
    promotion: {
      type: "Cashback",
      value: 1500,
    },
    storageTime: {
      day: 3,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV16",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/carrot.jpg",
    brand: "Farm Fresh",
    productName:
      "Fresh Carrots – Rp 15,000/kg [ Sweet and crunchy, high in beta-carotene. ]",
    star: 5,
    unit: "1kg",
    price: 15000,
    sold: "(40.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-FarmFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Carrots – Farm Fresh 🥕\n\nPerfectly sweet and nutritious, great for snacking and cooking.\n\nWhy Choose Our Carrots?\n\n✅ 100% Organic & Fresh.\n✅ High in Beta-Carotene – Supports eye health.\n✅ Great for Juices, Salads, and Stews.\n\n💡 Storage Tips:\nStore in the fridge for lasting freshness.\nOrder now and enjoy Farm Fresh Carrots! 🌱✨",
    promotion: {
      type: "Free Delivery",
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV17",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/potato.jpg",
    brand: "Nature Green",
    productName:
      "Fresh Potatoes – Rp 20,000/kg [ Starchy and nutritious, perfect for various dishes. ]",
    star: 4,
    unit: "1kg",
    price: 20000,
    sold: "(50.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-NatureGreen.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Potatoes – Nature Green 🥔\n\nRich in carbohydrates and perfect for any meal.\n\nWhy Choose Our Potatoes?\n\n✅ 100% Natural & High-Quality.\n✅ Energy-Rich – Great for a balanced diet.\n✅ Ideal for Mashed Potatoes, Fries, and Soups.\n\n💡 Storage Tips:\nKeep in a cool, dry place.\nOrder now and enjoy the goodness of Nature Green Potatoes! 🌱✨",
    promotion: {
      type: "Cashback",
      value: 2000,
    },
    storageTime: {
      day: 10,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV18",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/eggplant.jpg",
    brand: "Organic Harvest",
    productName:
      "Fresh Eggplants – Rp 22,000/kg [ Rich in antioxidants, great for grilling and frying. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 22000,
    price: 19800,
    sold: "(18.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-OrganicHarvest.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Eggplants – Organic Harvest 🍆\n\nPerfectly fresh and loaded with antioxidants.\n\nWhy Choose Our Eggplants?\n\n✅ 100% Organic & Fresh.\n✅ Rich in Antioxidants – Great for heart health.\n✅ Ideal for Grilling, Stir-fries, and Curries.\n\n💡 Storage Tips:\nStore in a cool, dry place.\nOrder now and enjoy the best Organic Harvest Eggplants! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.1,
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV19",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/cucumber.jpg",
    brand: "Green Valley",
    productName:
      "Fresh Cucumbers – Rp 14,000/kg [ Hydrating and refreshing, great for salads. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 14000,
    price: 13300,
    sold: "(30.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-GreenValley.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Cucumbers – Green Valley 🥒\n\nCrisp, refreshing, and packed with hydration.\n\nWhy Choose Our Cucumbers?\n\n✅ 100% Organic & Fresh.\n✅ High in Water Content – Perfect for hydration.\n✅ Great for Salads, Smoothies, and Detox Drinks.\n\n💡 Storage Tips:\nRefrigerate for maximum freshness.\nOrder now and refresh yourself with Green Valley Cucumbers! 🌱✨",
    promotion: {
      type: "Membership",
      value: 0.05,
    },
    storageTime: {
      day: 5,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV20",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/garlic.jpg",
    brand: "Natural Bounty",
    productName:
      "Fresh Garlic – Rp 35,000/kg [ Aromatic and essential for cooking. ]",
    star: 5,
    unit: "1kg",
    price: 35000,
    sold: "(25.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-NaturalBounty.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Garlic – Natural Bounty 🧄\n\n" +
      "Aromatic and flavorful, essential in every kitchen.\n" +
      "\nWhy Choose Our Garlic?\n\n" +
      "✅ 100% Fresh & Organic.\n" +
      "✅ Rich in Antibacterial Properties – Supports immune health.\n" +
      "✅ Great for Stir-Fries, Soups, and Marinades.\n" +
      "\n\n💡 Storage Tips:\nStore in a dry, cool place.\n" +
      "Order now and enjoy the Natural Bounty Garlic! 🌱✨",
    promotion: {
      type: "Cashback",
      value: 2500,
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV21",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/onion.jpg",
    brand: "Farm Fresh",
    productName:
      "Fresh Onions – Rp 25,000/kg [ Essential for flavor in every dish. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 25000,
    price: 22500,
    sold: "(33.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-FarmFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Onions – Farm Fresh 🧅\n\n" +
      "Adds rich flavor and aroma to any dish.\n" +
      "\nWhy Choose Our Onions?\n\n" +
      "✅ 100% Fresh & Organic.\n" +
      "✅ High in Antioxidants – Supports heart health.\n" +
      "✅ Great for Soups, Stir-Fries, and Curries.\n" +
      "\n\n💡 Storage Tips:\nKeep in a dry, well-ventilated place.\n" +
      "Order now and spice up your dishes with Farm Fresh Onions! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.1,
    },
    location: "Jakarta",
    storageTime: {
      day: 200,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV22",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/cabbage.jpg",
    brand: "Green Valley",
    productName:
      "Fresh Cabbage – Rp 18,000/kg [ Crunchy and perfect for salads and stir-fries. ]",
    star: 4,
    unit: "1kg",
    price: 18000,
    sold: "(28.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-GreenValley.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Cabbage – Green Valley 🥬\n\n" +
      "Nutritious and crunchy, great for various dishes.\n" +
      "\nWhy Choose Our Cabbage?\n\n" +
      "✅ 100% Fresh & Organic.\n" +
      "✅ High in Fiber – Good for digestion.\n" +
      "✅ Perfect for Stir-Fries, Soups, and Kimchi.\n" +
      "\n\n💡 Storage Tips:\nRefrigerate for lasting freshness.\n" +
      "Order now and enjoy the crispiness of Green Valley Cabbage! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV23",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/daikon-radish.jpg",
    brand: "Pure Harvest",
    productName:
      "Fresh Daikon Radish – Rp 28,000/kg [ Mild and crunchy, perfect for salads and soups. ]",
    star: 4,
    unit: "1kg",
    price: 28000,
    sold: "(12.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-PureHarvest.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Daikon Radish – Pure Harvest 🌿\n\n" +
      "Enjoy the crisp texture and mild flavor of our fresh Daikon Radish. A great addition to Asian cuisine!\n" +
      "\nWhy Choose Our Daikon Radish?\n\n" +
      "✅ 100% Fresh & Organic – Sourced from premium farms.\n" +
      "✅ Mild & Crunchy Texture – Perfect for raw dishes or soups.\n" +
      "✅ Rich in Nutrients – High in fiber and vitamins.\n" +
      "\n\n💡 Storage Tips:\nStore in a cool, dry place or refrigerate for extended freshness.\n" +
      "Order now and elevate your dishes with Pure Harvest Daikon Radish! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV24",
    category: "Vegetable",
    imageRef: "/Products/vegetable/fresh/okra.jpg",
    brand: "Farm Select",
    productName:
      "Fresh Okra – Rp 35,000/kg [ Tender and nutritious, great for soups and stir-fries. ]",
    star: 5,
    unit: "1kg",
    price: 35000,
    sold: "(14.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-FarmSelect.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Okra – Farm Select 🌱\n\n" +
      "Enjoy farm-fresh Okra, known for its tender texture and high nutritional value.\n" +
      "\nWhy Choose Our Okra?\n\n" +
      "✅ 100% Fresh & Organic – Handpicked for the best quality.\n" +
      "✅ High in Fiber & Vitamins – Supports digestion and immunity.\n" +
      "✅ Versatile for Cooking – Perfect for soups, curries, and stir-fries.\n" +
      "\n\n💡 Storage Tips:\nKeep refrigerated at 3–5°C for maximum freshness.\n" +
      "Order now and enjoy the goodness of Farm Select Okra! 🌱✨",
    promotion: {
      type: "Cashback",
      value: 5000,
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV25",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-spinach.jpg",
    brand: "Green Harvest",
    productName:
      "Frozen Spinach – Rp 30,000/kg [ Nutritious and convenient, perfect for smoothies and cooking. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 30000,
    price: 27000,
    sold: "(20.000 unit)",
    certificate: "certificate-GreenHarvest.pdf",
    productDescription:
      "Frozen Spinach – Green Harvest 🌿\n\n" +
      "Enjoy the convenience of pre-washed and frozen spinach, retaining its full nutrients and freshness.\n" +
      "\nWhy Choose Our Frozen Spinach?\n\n" +
      "✅ 100% Fresh & Organic – Instantly frozen to lock in nutrients.\n" +
      "✅ High in Iron & Vitamins – Great for a healthy diet.\n" +
      "✅ Easy to Use – Ideal for smoothies, soups, and stir-fries.\n" +
      "\n\n💡 Storage Tips:\nKeep frozen at -18°C for best quality.\n" +
      "Order now and enjoy the goodness of Green Harvest Frozen Spinach! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.1,
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FV26",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-broccoli.jpg",
    brand: "Farm Fresh",
    productName:
      "Frozen Broccoli – Rp 40,000/kg [ Rich in fiber and nutrients, perfect for healthy meals. ]",
    star: 4,
    unit: "1kg",
    price: 40000,
    sold: "(18.500 unit)",
    certificate: {
      file: "certificate-FarmFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Broccoli – Farm Fresh 🥦\n\nPerfectly cut and frozen to retain maximum freshness and nutrients.\n\nWhy Choose Our Frozen Broccoli?\n\n✅ 100% Fresh & Organic – Picked at peak ripeness.\n✅ No Preservatives – Just pure, fresh broccoli.\n✅ Easy to Cook – Ideal for stir-fries, steaming, and casseroles.\n\n💡 Storage Tips:\nKeep frozen at -18°C for extended shelf life.\nOrder now and enjoy the convenience of Farm Fresh Frozen Broccoli! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV27",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-cauliflower.jpg",
    brand: "Nature's Best",
    productName:
      "Frozen Cauliflower – Rp 35,000/kg [ Low-calorie and fiber-rich, great for soups and stir-fries. ]",
    star: 5,
    unit: "1kg",
    price: 35000,
    sold: "(22.000 unit)",
    certificate: {
      file: "certificate-NaturesBest.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Cauliflower – Nature's Best 🌱\n\nA healthy alternative for low-carb diets, perfect for mashed cauliflower or roasted dishes.\n\nWhy Choose Our Frozen Cauliflower?\n\n✅ 100% Natural – No artificial preservatives.\n✅ Rich in Fiber & Vitamins – Great for digestion.\n✅ Ready to Cook – Just steam, sauté, or bake!\n\n💡 Storage Tips:\nStore at -18°C for best freshness.\nOrder now and try Nature’s Best Frozen Cauliflower! 🌱✨",
    promotion: {
      type: "Free Delivery",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV28",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-carrot.jpg",
    brand: "Fresh Valley",
    productName:
      "Frozen Carrot – Rp 28,000/kg [ Sweet and crunchy, perfect for soups and stir-fries. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 28000,
    price: 26600,
    sold: "(19.000 unit)",
    certificate: {
      file: "certificate-FreshValley.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Carrot – Fresh Valley 🥕\n\nPerfectly sliced and frozen to retain sweetness and nutrients.\n\nWhy Choose Our Frozen Carrots?\n\n✅ 100% Fresh – No artificial preservatives.\n✅ Rich in Beta-Carotene – Good for eye health.\n✅ Convenient – Ready for cooking and salads.\n\n💡 Storage Tips:\nKeep frozen at -18°C for freshness.\nOrder now and enjoy Fresh Valley Frozen Carrots! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.05,
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV29",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-greenbeans.jpg",
    brand: "Green Farm",
    productName:
      "Frozen Green Beans – Rp 32,000/kg [ Crisp and fresh, great for healthy meals. ]",
    star: 4,
    unit: "1kg",
    price: 32000,
    sold: "(15.000 unit)",
    certificate: {
      file: "certificate-GreenFarm.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Green Beans – Green Farm 🌿\n\nPre-cut and frozen to keep the crunchiness and nutrients intact.\n\nWhy Choose Our Frozen Green Beans?\n\n✅ Naturally Fresh – No preservatives added.\n✅ High in Fiber – Supports digestion and heart health.\n✅ Quick & Easy – Great for stir-fries and soups.\n\n💡 Storage Tips:\nKeep frozen at -18°C for best quality.\nOrder now and enjoy Green Farm Frozen Green Beans! 🌱✨",
    promotion: {
      type: "Cashback",
      value: 3000,
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV30",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-mixed.jpg",
    brand: "Nature Mix",
    productName:
      "Frozen Mixed Vegetables – Rp 38,000/kg [ A mix of carrots, corn, and peas for easy meal prep. ]",
    star: 5,
    unit: "1kg",
    price: 38000,
    sold: "(25.000 unit)",
    certificate: {
      file: "certificate-NatureMix.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Mixed Vegetables – Nature Mix 🌽🥕\n\nA healthy mix of frozen carrots, corn, and peas for convenient meals.\n\nWhy Choose Our Frozen Mixed Vegetables?\n\n✅ Perfect Blend – Balanced nutrition for every meal.\n✅ 100% Fresh & Preservative-Free.\n✅ Versatile – Use for fried rice, soups, or pasta dishes.\n\n💡 Storage Tips:\nStore at -18°C for maximum freshness.\nOrder now and enjoy Nature Mix Frozen Vegetables! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV31",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-corn.jpg",
    brand: "Golden Harvest",
    productName:
      "Frozen Sweet Corn – Rp 34,000/kg [ Naturally sweet and crunchy, great for soups and side dishes. ]",
    star: 4,
    unit: "1kg",
    undiscountPrice: 34000,
    price: 31280,
    sold: "(21.000 unit)",
    certificate: {
      file: "certificate-GoldenHarvest.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Sweet Corn – Golden Harvest 🌽\n\nHarvested at peak ripeness and frozen to lock in sweetness.\n\nWhy Choose Our Frozen Sweet Corn?\n\n✅ Naturally Sweet – No added sugar.\n✅ High in Fiber – Supports digestion.\n✅ Easy to Use – Perfect for soups, salads, and snacks.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy Golden Harvest Frozen Sweet Corn! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.08,
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV32",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-broccoli2.jpg",
    brand: "Green Harvest",
    productName:
      "Frozen Broccoli – Rp 40,000/kg [ Rich in vitamins, perfect for steaming and stir-frying. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 40000,
    price: 36000,
    sold: "(18.000 unit)",
    certificate: {
      file: "certificate-GreenHarvest.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Broccoli – Green Harvest 🥦\n\nPremium-quality broccoli, carefully frozen to maintain freshness and nutrients.\n\nWhy Choose Our Frozen Broccoli?\n\n✅ High in Antioxidants – Supports immunity.\n✅ No Additives – 100% natural.\n✅ Versatile – Great for steaming, stir-frying, or soups.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy Green Harvest Frozen Broccoli! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.1,
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV33",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-spinach2.jpg",
    brand: "Fresh Greens",
    productName:
      "Frozen Spinach – Rp 30,000/kg [ Nutrient-packed, ideal for soups and smoothies. ]",
    star: 4,
    unit: "1kg",
    price: 30000,
    sold: "(14.000 unit)",
    certificate: {
      file: "certificate-FreshGreens.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Spinach – Fresh Greens 🌿\n\nHigh-quality spinach, frozen to lock in nutrients and flavor.\n\nWhy Choose Our Frozen Spinach?\n\n✅ Iron-Rich – Great for energy and health.\n✅ No Preservatives – 100% organic.\n✅ Ready to Use – Add to smoothies, soups, or pasta dishes.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy Fresh Greens Frozen Spinach! 🌱✨",
    promotion: {
      type: "Cashback",
      value: 2000,
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV34",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-zucchini.jpg",
    brand: "Nature's Best",
    productName:
      "Frozen Zucchini – Rp 32,000/kg [ Mild flavor, perfect for stir-fries and casseroles. ]",
    star: 4,
    unit: "1kg",
    undiscountPrice: 32000,
    price: 28800,
    sold: "(14.500 unit)",
    certificate: {
      file: "certificate-NaturesBest.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Zucchini – Nature's Best 🥒\n\nSliced zucchini, frozen to maintain freshness and texture, making it a convenient option for your meals.\n\nWhy Choose Our Frozen Zucchini?\n\n✅ Low-Calorie & Packed with Nutrients.\n✅ No Preservatives – 100% Natural.\n✅ Versatile – Ideal for stir-fries, soups, and casseroles.\n\n💡 Storage Tips:\nKeep frozen at -18°C for best quality.\nOrder now and enjoy Nature's Best Frozen Zucchini! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.1,
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV35",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-carrot2.jpg",
    brand: "Eco Fresh",
    productName:
      "Frozen Carrots – Rp 25,000/kg [ Naturally sweet, great for soups and stir-fries. ]",
    star: 5,
    unit: "1kg",
    price: 25000,
    sold: "(12.000 unit)",
    certificate: {
      file: "certificate-EcoFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Carrots – Eco Fresh 🥕\n\nNaturally sweet and rich in beta-carotene, our frozen carrots are perfect for any meal.\n\nWhy Choose Our Frozen Carrots?\n\n✅ Rich in Vitamin A – Supports eye health.\n✅ No Artificial Preservatives.\n✅ Perfect for Soups, Stews, and Stir-Fries.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy Eco Fresh Frozen Carrots! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV36",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-greenbeans2.jpg",
    brand: "Farm Fresh",
    productName:
      "Frozen Green Beans – Rp 28,000/kg [ Crisp and fresh, ideal for stir-fries and side dishes. ]",
    star: 4,
    unit: "1kg",
    price: 28000,
    sold: "(14.500 unit)",
    certificate: {
      file: "certificate-FarmFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Green Beans – Farm Fresh 🌿\n\nEnjoy the freshness of farm-picked green beans, frozen to retain nutrients.\n\nWhy Choose Our Frozen Green Beans?\n\n✅ High in Fiber – Supports digestion.\n✅ No Added Chemicals.\n✅ Ideal for Stir-Fries and Side Dishes.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy Farm Fresh Frozen Green Beans! 🌱✨",
    promotion: {
      type: "Cashback",
      value: 3000,
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV37",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-sweet-corn.jpg",
    brand: "Golden Harvest",
    productName:
      "Frozen Sweet Corn – Rp 30,000/kg [ Naturally sweet, perfect for soups and salads. ]",
    star: 5,
    unit: "1kg",
    price: 30000,
    sold: "(20.000 unit)",
    certificate: {
      file: "certificate-GoldenHarvest.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Sweet Corn – Golden Harvest 🌽\n\nSweet and juicy kernels, frozen to keep their natural flavor and texture.\n\nWhy Choose Our Frozen Sweet Corn?\n\n✅ Naturally Sweet & Crunchy.\n✅ No Artificial Additives.\n✅ Perfect for Soups, Salads, and Stir-Fries.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy Golden Harvest Frozen Sweet Corn! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV38",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-spinach3.jpg",
    brand: "Nature's Best",
    productName:
      "Frozen Spinach – Rp 32,000/kg [ Rich in iron and vitamins, great for smoothies and soups. ]",
    star: 5,
    unit: "1kg",
    price: 32000,
    sold: "(10.500 unit)",
    certificate: {
      file: "certificate-NaturesBest.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Spinach – Nature's Best 🌿\n\nPacked with iron and antioxidants, our frozen spinach is a healthy choice.\n\nWhy Choose Our Frozen Spinach?\n\n✅ Rich in Iron & Vitamins – Supports energy and immune function.\n✅ Freshly Frozen to Preserve Nutrients.\n✅ Ideal for Smoothies, Soups, and Pasta.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy Nature's Best Frozen Spinach! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV39",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-cauliflower2.jpg",
    brand: "Organic Farms",
    productName:
      "Frozen Cauliflower – Rp 29,000/kg [ Low-carb alternative, perfect for stir-fries and rice substitutes. ]",
    star: 5,
    unit: "1kg",
    price: 29000,
    sold: "(9.500 unit)",
    certificate: {
      file: "certificate-OrganicFarms.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Cauliflower – Organic Farms 🥦\n\nA great low-carb vegetable, frozen to keep its freshness and crunch.\n\nWhy Choose Our Frozen Cauliflower?\n\n✅ High in Fiber & Antioxidants.\n✅ Great for Stir-Fries, Cauliflower Rice, and Purees.\n✅ No Artificial Preservatives.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy Organic Farms Frozen Cauliflower! 🌱✨",
    promotion: {
      type: "Cashback",
      value: 3000,
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV40",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-mixed2.jpg",
    brand: "Farm Fresh",
    productName:
      "Frozen Mixed Vegetables – Rp 35,000/kg [ Perfect mix of carrots, peas, and corn for quick meals. ]",
    star: 5,
    unit: "1kg",
    price: 35000,
    sold: "(15.000 unit)",
    certificate: {
      file: "certificate-FarmFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Mixed Vegetables – Farm Fresh 🥕🌽\n\nA convenient mix of essential veggies for a quick, nutritious meal.\n\nWhy Choose Our Frozen Mixed Vegetables?\n\n✅ Balanced Nutrients – Carrots, Peas, and Corn.\n✅ Ready-to-Cook – Ideal for Fried Rice, Soups, and Stir-Fries.\n✅ No Artificial Additives.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy Farm Fresh Frozen Mixed Vegetables! 🌱✨",
    promotion: {
      type: "Free Delivery",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV41",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-arthicoke.jpg",
    brand: "Nature's Best",
    productName:
      "Frozen Artichoke Hearts – Rp 65,000/kg [ Tender and flavorful, perfect for dips, salads, and pasta. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 65000,
    price: 58500,
    sold: "(7.500 unit)",
    certificate: {
      file: "certificate-NaturesBest.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Artichoke Hearts – Nature's Best 🌱\n\nEnjoy premium-quality frozen artichoke hearts, carefully selected and frozen to preserve their delicate taste and texture.\n\nWhy Choose Our Frozen Artichoke Hearts?\n\n✅ Naturally Tender & Mildly Sweet.\n✅ Great for Dips, Salads, Pasta, and Pizzas.\n✅ No Preservatives – 100% Natural.\n\n💡 Storage Tips:\nKeep frozen at -18°C for best freshness.\nOrder now and enjoy Nature's Best Frozen Artichoke Hearts! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.1,
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV42",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-carrot-cubes.jpg",
    brand: "Eco Fresh",
    productName:
      "Frozen Carrot Cubes – Rp 22,000/kg [ Rich in beta-carotene, great for stews and fried rice. ]",
    star: 4,
    unit: "1kg",
    price: 22000,
    sold: "(11.000 unit)",
    certificate: {
      file: "certificate-EcoFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Carrot Cubes – Eco Fresh 🥕\n\nPerfectly diced frozen carrots, rich in nutrients and ready to cook.\n\nWhy Choose Our Frozen Carrot Cubes?\n\n✅ High in Beta-Carotene for Eye Health.\n✅ Ready-to-Use – Saves Preparation Time.\n✅ No Preservatives or Artificial Colors.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy Eco Fresh Frozen Carrot Cubes! 🌱✨",
    promotion: {
      type: "Cashback",
      value: 3000,
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV43",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-okra.jpg",
    brand: "Green Harvest",
    productName:
      "Frozen Okra – Rp 38,000/kg [ Tender and nutritious, great for soups and stir-fries. ]",
    star: 4,
    unit: "1kg",
    price: 38000,
    sold: "(10.000 unit)",
    certificate: {
      file: "certificate-GreenHarvest.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Okra – Green Harvest 🌱\n\nCarefully selected okra, frozen fresh to maintain its texture and natural goodness.\n\nWhy Choose Our Frozen Okra?\n\n✅ Rich in Fiber & Antioxidants.\n✅ Helps Support Digestive Health.\n✅ Great for Gumbo, Soups, and Stir-Fries.\n\n💡 Storage Tips:\nKeep frozen at -18°C for best quality.\nOrder now and enjoy Green Harvest Frozen Okra! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV44",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-eggplant.jpg",
    brand: "Farm Fresh",
    productName:
      "Frozen Eggplant – Rp 32,000/kg [ Soft and flavorful, ideal for grilling and stir-fries. ]",
    star: 4,
    unit: "1kg",
    price: 32000,
    sold: "(8.500 unit)",
    certificate: {
      file: "certificate-FarmFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Eggplant – Farm Fresh 🍆\n\nPremium quality eggplants, frozen fresh to preserve their unique flavor and texture.\n\nWhy Choose Our Frozen Eggplant?\n\n✅ Naturally Soft & Flavorful.\n✅ No Preservatives, 100% Natural.\n✅ Perfect for Grilling, Stir-Fries, and Pasta Dishes.\n\n💡 Storage Tips:\nKeep frozen at -18°C for best quality.\nOrder now and enjoy Farm Fresh Frozen Eggplant! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV45",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-edamame.jpg",
    brand: "Green Delight",
    productName:
      "Frozen Edamame – Rp 40,000/kg [ Naturally protein-rich, great for snacking and cooking. ]",
    star: 5,
    unit: "1kg",
    price: 40000,
    sold: "(9.500 unit)",
    certificate: {
      file: "certificate-GreenDelight.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Edamame – Green Delight 🌱\n\nPerfectly blanched and frozen edamame, rich in protein and fiber.\n\nWhy Choose Our Frozen Edamame?\n\n✅ High in Plant-Based Protein.\n✅ Great for Snacking and Side Dishes.\n✅ No Additives or Preservatives.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy Green Delight Frozen Edamame! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV46",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-mixed-vegetable3.jpg",
    brand: "Farm Fresh",
    productName:
      "Frozen Mixed Vegetables – Rp 33,000/kg [ A blend of corn, peas, carrots, and beans, ideal for soups and fried rice. ]",
    star: 4,
    unit: "1kg",
    undiscountPrice: 33000,
    price: 29040,
    sold: "(12.500 unit)",
    certificate: {
      file: "certificate-FarmFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Mixed Vegetables – Farm Fresh 🥗\n\nA healthy mix of vegetables, perfect for quick and nutritious meals.\n\nWhy Choose Our Frozen Mixed Vegetables?\n\n✅ Balanced Nutrition – A Perfect Blend of Fresh Veggies.\n✅ Ideal for Fried Rice, Soups, and Casseroles.\n✅ No Artificial Preservatives or Colors.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and make cooking easier with Farm Fresh Frozen Mixed Vegetables! 🌱✨",
    promotion: {
      type: "Discount",
      value: 0.12,
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV47",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-spinach4.jpg",
    brand: "Healthy Greens",
    productName:
      "Frozen Spinach – Rp 27,000/kg [ High in iron and vitamins, great for smoothies and cooking. ]",
    star: 5,
    unit: "1kg",
    undiscountPrice: 27000,
    price: 25110,
    sold: "(10.200 unit)",
    certificate: {
      file: "certificate-HealthyGreens.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Spinach – Healthy Greens 🥬\n\nNutritious frozen spinach, washed and ready to cook.\n\nWhy Choose Our Frozen Spinach?\n\n✅ High in Iron & Vitamins.\n✅ Perfect for Smoothies, Soups, and Stir-Fries.\n✅ No Artificial Chemicals or Preservatives.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy the benefits of Healthy Greens Frozen Spinach! 🌱✨",
    promotion: {
      type: "Membership",
      value: 0.07,
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "FV48",
    category: "Vegetable",
    type: "Frozen",
    imageRef: "/Products/vegetable/frozen/frozen-broccoli3.jpg",
    brand: "Eco Fresh",
    productName:
      "Frozen Broccoli – Rp 38,000/kg [ Packed with fiber and antioxidants, perfect for a healthy meal. ]",
    star: 5,
    unit: "1kg",
    price: 38000,
    sold: "(11.000 unit)",
    certificate: {
      file: "certificate-EcoFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Frozen Broccoli – Eco Fresh 🥦\n\nEnjoy nutritious frozen broccoli, ideal for a balanced diet.\n\nWhy Choose Our Frozen Broccoli?\n\n✅ Rich in Fiber & Antioxidants.\n✅ Great for Stir-Fries, Soups, and Roasting.\n✅ 100% Natural – No Preservatives.\n\n💡 Storage Tips:\nKeep frozen at -18°C.\nOrder now and enjoy the freshness of Eco Fresh Frozen Broccoli! 🌱✨",
    promotion: {
      type: "Free Delivery",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
];

export default vegetableProducts;
