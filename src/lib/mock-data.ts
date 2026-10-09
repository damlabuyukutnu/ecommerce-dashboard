import type { AppSettings, Customer, Order, Product } from "@/types";

export const seedSettings: AppSettings = {
  store: {
    storeName: "Northwind Goods",
    storeEmail: "hello@northwindgoods.com",
    storeCurrency: "USD",
    storeAddress: "221 Market Street, Austin, TX 78701, USA",
    supportPhone: "+1-555-0199",
  },
  profile: {
    fullName: "Damla Buyukutnu",
    email: "damla.buyukutnu@gmail.com",
    role: "Store Administrator",
    bio: "Managing storefront operations, catalog, and fulfillment for Northwind Goods.",
  },
  preferences: {
    compactTables: false,
    emailNotifications: true,
    weeklySummary: true,
  },
};

export const seedProducts: Product[] = [
  {
    "id": "p-01",
    "name": "Wireless Noise-Cancelling Headphones",
    "category": "Electronics",
    "price": 179,
    "stock": 42,
    "status": "active",
    "sku": "ELC-1001",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-02",
    "name": "Aria Smart Watch",
    "category": "Electronics",
    "price": 229,
    "stock": 18,
    "status": "active",
    "sku": "ELC-1002",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-03",
    "name": "Portable Bluetooth Speaker",
    "category": "Electronics",
    "price": 89,
    "stock": 6,
    "status": "active",
    "sku": "ELC-1003",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-04",
    "name": "4K Action Camera",
    "category": "Electronics",
    "price": 249,
    "stock": 0,
    "status": "active",
    "sku": "ELC-1004",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-05",
    "name": "Mechanical Keyboard RGB",
    "category": "Electronics",
    "price": 119,
    "stock": 31,
    "status": "active",
    "sku": "ELC-1005",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-06",
    "name": "USB-C Fast Charger 65W",
    "category": "Electronics",
    "price": 39,
    "stock": 54,
    "status": "active",
    "sku": "ELC-1006",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-07",
    "name": "Men's Denim Jacket",
    "category": "Clothing",
    "price": 94,
    "stock": 27,
    "status": "active",
    "sku": "CLO-2001",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-08",
    "name": "Women's Wool Coat",
    "category": "Clothing",
    "price": 168,
    "stock": 9,
    "status": "active",
    "sku": "CLO-2002",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-09",
    "name": "Classic Cotton T-Shirt",
    "category": "Clothing",
    "price": 24,
    "stock": 120,
    "status": "active",
    "sku": "CLO-2003",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-10",
    "name": "Running Leggings",
    "category": "Clothing",
    "price": 48,
    "stock": 3,
    "status": "active",
    "sku": "CLO-2004",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-11",
    "name": "Leather Belt",
    "category": "Clothing",
    "price": 36,
    "stock": 0,
    "status": "archived",
    "sku": "CLO-2005",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-12",
    "name": "Stainless Steel Cookware Set",
    "category": "Home & Kitchen",
    "price": 219,
    "stock": 14,
    "status": "active",
    "sku": "HNK-3001",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-13",
    "name": "Ceramic Coffee Mug Set",
    "category": "Home & Kitchen",
    "price": 32,
    "stock": 62,
    "status": "active",
    "sku": "HNK-3002",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-14",
    "name": "Digital Air Fryer 6L",
    "category": "Home & Kitchen",
    "price": 139,
    "stock": 8,
    "status": "active",
    "sku": "HNK-3003",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-15",
    "name": "Memory Foam Pillow",
    "category": "Home & Kitchen",
    "price": 44,
    "stock": 35,
    "status": "active",
    "sku": "HNK-3004",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-16",
    "name": "Scented Candle Gift Set",
    "category": "Home & Kitchen",
    "price": 29,
    "stock": 5,
    "status": "active",
    "sku": "HNK-3005",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-17",
    "name": "The Art of Clean Code",
    "category": "Books",
    "price": 27,
    "stock": 48,
    "status": "active",
    "sku": "BOK-4001",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-18",
    "name": "Modern Web Design Handbook",
    "category": "Books",
    "price": 34,
    "stock": 22,
    "status": "active",
    "sku": "BOK-4002",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-19",
    "name": "Atomic Habits Daily Journal",
    "category": "Books",
    "price": 19,
    "stock": 0,
    "status": "draft",
    "sku": "BOK-4003",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-20",
    "name": "Science Fiction Anthology Vol. 2",
    "category": "Books",
    "price": 22,
    "stock": 16,
    "status": "active",
    "sku": "BOK-4004",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-21",
    "name": "Pro Yoga Mat",
    "category": "Sports",
    "price": 49,
    "stock": 29,
    "status": "active",
    "sku": "SPT-5001",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-22",
    "name": "Adjustable Dumbbell Set",
    "category": "Sports",
    "price": 189,
    "stock": 4,
    "status": "active",
    "sku": "SPT-5002",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-23",
    "name": "Trail Running Shoes",
    "category": "Sports",
    "price": 112,
    "stock": 17,
    "status": "active",
    "sku": "SPT-5003",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-24",
    "name": "Vitamin C Brightening Serum",
    "category": "Beauty",
    "price": 38,
    "stock": 40,
    "status": "active",
    "sku": "BTY-6001",
    "createdAt": "2026-01-15"
  },
  {
    "id": "p-25",
    "name": "Matte Lipstick Set",
    "category": "Beauty",
    "price": 26,
    "stock": 0,
    "status": "draft",
    "sku": "BTY-6002",
    "createdAt": "2026-01-15"
  }
];

export const seedCustomers: Customer[] = [
  {
    "id": "c-01",
    "name": "Olivia Bennett",
    "email": "olivia.bennett@example.com",
    "phone": "+1-555-0100",
    "joinedAt": "2025-06-11",
    "location": "Austin, USA"
  },
  {
    "id": "c-02",
    "name": "Liam Carter",
    "email": "liam.carter@example.com",
    "phone": "+1-555-0101",
    "joinedAt": "2025-07-15",
    "location": "Toronto, Canada"
  },
  {
    "id": "c-03",
    "name": "Emma Diaz",
    "email": "emma.diaz@example.com",
    "phone": "+1-555-0102",
    "joinedAt": "2026-05-08",
    "location": "Sydney, Australia"
  },
  {
    "id": "c-04",
    "name": "Noah Ellis",
    "email": "noah.ellis@example.com",
    "phone": "+1-555-0103",
    "joinedAt": "2025-02-11",
    "location": "Sydney, Australia"
  },
  {
    "id": "c-05",
    "name": "Ava Foster",
    "email": "ava.foster@example.com",
    "phone": "+1-555-0104",
    "joinedAt": "2026-06-06",
    "location": "Berlin, Germany"
  },
  {
    "id": "c-06",
    "name": "Ethan Grant",
    "email": "ethan.grant@example.com",
    "phone": "+1-555-0105",
    "joinedAt": "2026-09-26",
    "location": "Manchester, UK"
  },
  {
    "id": "c-07",
    "name": "Sophia Harper",
    "email": "sophia.harper@example.com",
    "phone": "+1-555-0106",
    "joinedAt": "2026-02-18",
    "location": "Toronto, Canada"
  },
  {
    "id": "c-08",
    "name": "Mason Ibrahim",
    "email": "mason.ibrahim@example.com",
    "phone": "+1-555-0107",
    "joinedAt": "2025-02-09",
    "location": "Seattle, USA"
  },
  {
    "id": "c-09",
    "name": "Isabella Jensen",
    "email": "isabella.jensen@example.com",
    "phone": "+1-555-0108",
    "joinedAt": "2025-11-16",
    "location": "Toronto, Canada"
  },
  {
    "id": "c-10",
    "name": "Lucas Kelly",
    "email": "lucas.kelly@example.com",
    "phone": "+1-555-0109",
    "joinedAt": "2025-11-20",
    "location": "Vancouver, Canada"
  },
  {
    "id": "c-11",
    "name": "Mia Lindberg",
    "email": "mia.lindberg@example.com",
    "phone": "+1-555-0110",
    "joinedAt": "2025-10-07",
    "location": "Madrid, Spain"
  },
  {
    "id": "c-12",
    "name": "Henry Morales",
    "email": "henry.morales@example.com",
    "phone": "+1-555-0111",
    "joinedAt": "2025-05-19",
    "location": "Oslo, Norway"
  },
  {
    "id": "c-13",
    "name": "Amelia Nakamura",
    "email": "amelia.nakamura@example.com",
    "phone": "+1-555-0112",
    "joinedAt": "2026-06-12",
    "location": "Seattle, USA"
  },
  {
    "id": "c-14",
    "name": "Jack O'Connor",
    "email": "jack.oconnor@example.com",
    "phone": "+1-555-0113",
    "joinedAt": "2025-12-19",
    "location": "Berlin, Germany"
  },
  {
    "id": "c-15",
    "name": "Charlotte Pereira",
    "email": "charlotte.pereira@example.com",
    "phone": "+1-555-0114",
    "joinedAt": "2025-12-16",
    "location": "Amsterdam, Netherlands"
  },
  {
    "id": "c-16",
    "name": "Leo Quinn",
    "email": "leo.quinn@example.com",
    "phone": "+1-555-0115",
    "joinedAt": "2025-06-02",
    "location": "Seattle, USA"
  },
  {
    "id": "c-17",
    "name": "Grace Reyes",
    "email": "grace.reyes@example.com",
    "phone": "+1-555-0116",
    "joinedAt": "2026-03-07",
    "location": "Austin, USA"
  },
  {
    "id": "c-18",
    "name": "Oscar Silva",
    "email": "oscar.silva@example.com",
    "phone": "+1-555-0117",
    "joinedAt": "2025-05-04",
    "location": "Lisbon, Portugal"
  },
  {
    "id": "c-19",
    "name": "Zoe Turner",
    "email": "zoe.turner@example.com",
    "phone": "+1-555-0118",
    "joinedAt": "2026-01-26",
    "location": "Toronto, Canada"
  },
  {
    "id": "c-20",
    "name": "Felix Vasquez",
    "email": "felix.vasquez@example.com",
    "phone": "+1-555-0119",
    "joinedAt": "2026-01-04",
    "location": "Vancouver, Canada"
  },
  {
    "id": "c-21",
    "name": "Nora Walsh",
    "email": "nora.walsh@example.com",
    "phone": "+1-555-0120",
    "joinedAt": "2026-06-17",
    "location": "Madrid, Spain"
  },
  {
    "id": "c-22",
    "name": "Theo Yilmaz",
    "email": "theo.yilmaz@example.com",
    "phone": "+1-555-0121",
    "joinedAt": "2026-08-10",
    "location": "Dublin, Ireland"
  }
];

export const seedOrders: Order[] = [
  {
    "id": "ORD-1049",
    "customerId": "c-22",
    "customerName": "Theo Yilmaz",
    "date": "2026-10-08",
    "status": "processing",
    "items": [
      {
        "productId": "p-11",
        "productName": "Leather Belt",
        "quantity": 3,
        "unitPrice": 36
      },
      {
        "productId": "p-22",
        "productName": "Adjustable Dumbbell Set",
        "quantity": 3,
        "unitPrice": 189
      },
      {
        "productId": "p-19",
        "productName": "Atomic Habits Daily Journal",
        "quantity": 3,
        "unitPrice": 19
      }
    ],
    "shippingAddress": "Dublin, Ireland"
  },
  {
    "id": "ORD-1044",
    "customerId": "c-11",
    "customerName": "Mia Lindberg",
    "date": "2026-10-07",
    "status": "pending",
    "items": [
      {
        "productId": "p-10",
        "productName": "Running Leggings",
        "quantity": 3,
        "unitPrice": 48
      }
    ],
    "shippingAddress": "Madrid, Spain"
  },
  {
    "id": "ORD-1046",
    "customerId": "c-20",
    "customerName": "Felix Vasquez",
    "date": "2026-10-05",
    "status": "processing",
    "items": [
      {
        "productId": "p-07",
        "productName": "Men's Denim Jacket",
        "quantity": 3,
        "unitPrice": 94
      },
      {
        "productId": "p-01",
        "productName": "Wireless Noise-Cancelling Headphones",
        "quantity": 1,
        "unitPrice": 179
      }
    ],
    "shippingAddress": "Vancouver, Canada"
  },
  {
    "id": "ORD-1045",
    "customerId": "c-06",
    "customerName": "Ethan Grant",
    "date": "2026-10-05",
    "status": "shipped",
    "items": [
      {
        "productId": "p-12",
        "productName": "Stainless Steel Cookware Set",
        "quantity": 3,
        "unitPrice": 219
      },
      {
        "productId": "p-22",
        "productName": "Adjustable Dumbbell Set",
        "quantity": 1,
        "unitPrice": 189
      }
    ],
    "shippingAddress": "Manchester, UK"
  },
  {
    "id": "ORD-1048",
    "customerId": "c-06",
    "customerName": "Ethan Grant",
    "date": "2026-10-04",
    "status": "shipped",
    "items": [
      {
        "productId": "p-19",
        "productName": "Atomic Habits Daily Journal",
        "quantity": 2,
        "unitPrice": 19
      },
      {
        "productId": "p-23",
        "productName": "Trail Running Shoes",
        "quantity": 1,
        "unitPrice": 112
      }
    ],
    "shippingAddress": "Manchester, UK"
  },
  {
    "id": "ORD-1047",
    "customerId": "c-10",
    "customerName": "Lucas Kelly",
    "date": "2026-10-04",
    "status": "processing",
    "items": [
      {
        "productId": "p-24",
        "productName": "Vitamin C Brightening Serum",
        "quantity": 3,
        "unitPrice": 38
      },
      {
        "productId": "p-16",
        "productName": "Scented Candle Gift Set",
        "quantity": 3,
        "unitPrice": 29
      }
    ],
    "shippingAddress": "Vancouver, Canada"
  },
  {
    "id": "ORD-1043",
    "customerId": "c-08",
    "customerName": "Mason Ibrahim",
    "date": "2026-09-30",
    "status": "shipped",
    "items": [
      {
        "productId": "p-05",
        "productName": "Mechanical Keyboard RGB",
        "quantity": 3,
        "unitPrice": 119
      },
      {
        "productId": "p-11",
        "productName": "Leather Belt",
        "quantity": 3,
        "unitPrice": 36
      }
    ],
    "shippingAddress": "Seattle, USA"
  },
  {
    "id": "ORD-1039",
    "customerId": "c-17",
    "customerName": "Grace Reyes",
    "date": "2026-09-28",
    "status": "shipped",
    "items": [
      {
        "productId": "p-07",
        "productName": "Men's Denim Jacket",
        "quantity": 1,
        "unitPrice": 94
      },
      {
        "productId": "p-14",
        "productName": "Digital Air Fryer 6L",
        "quantity": 2,
        "unitPrice": 139
      }
    ],
    "shippingAddress": "Austin, USA"
  },
  {
    "id": "ORD-1036",
    "customerId": "c-10",
    "customerName": "Lucas Kelly",
    "date": "2026-09-28",
    "status": "cancelled",
    "items": [
      {
        "productId": "p-02",
        "productName": "Aria Smart Watch",
        "quantity": 2,
        "unitPrice": 229
      },
      {
        "productId": "p-07",
        "productName": "Men's Denim Jacket",
        "quantity": 1,
        "unitPrice": 94
      }
    ],
    "shippingAddress": "Vancouver, Canada"
  },
  {
    "id": "ORD-1033",
    "customerId": "c-03",
    "customerName": "Emma Diaz",
    "date": "2026-09-25",
    "status": "delivered",
    "items": [
      {
        "productId": "p-19",
        "productName": "Atomic Habits Daily Journal",
        "quantity": 1,
        "unitPrice": 19
      },
      {
        "productId": "p-07",
        "productName": "Men's Denim Jacket",
        "quantity": 3,
        "unitPrice": 94
      },
      {
        "productId": "p-11",
        "productName": "Leather Belt",
        "quantity": 3,
        "unitPrice": 36
      }
    ],
    "shippingAddress": "Sydney, Australia"
  },
  {
    "id": "ORD-1042",
    "customerId": "c-11",
    "customerName": "Mia Lindberg",
    "date": "2026-09-14",
    "status": "cancelled",
    "items": [
      {
        "productId": "p-22",
        "productName": "Adjustable Dumbbell Set",
        "quantity": 2,
        "unitPrice": 189
      }
    ],
    "shippingAddress": "Madrid, Spain"
  },
  {
    "id": "ORD-1041",
    "customerId": "c-12",
    "customerName": "Henry Morales",
    "date": "2026-09-14",
    "status": "delivered",
    "items": [
      {
        "productId": "p-07",
        "productName": "Men's Denim Jacket",
        "quantity": 3,
        "unitPrice": 94
      }
    ],
    "shippingAddress": "Oslo, Norway"
  },
  {
    "id": "ORD-1037",
    "customerId": "c-20",
    "customerName": "Felix Vasquez",
    "date": "2026-09-14",
    "status": "delivered",
    "items": [
      {
        "productId": "p-17",
        "productName": "The Art of Clean Code",
        "quantity": 3,
        "unitPrice": 27
      },
      {
        "productId": "p-15",
        "productName": "Memory Foam Pillow",
        "quantity": 2,
        "unitPrice": 44
      }
    ],
    "shippingAddress": "Vancouver, Canada"
  },
  {
    "id": "ORD-1031",
    "customerId": "c-13",
    "customerName": "Amelia Nakamura",
    "date": "2026-09-12",
    "status": "delivered",
    "items": [
      {
        "productId": "p-17",
        "productName": "The Art of Clean Code",
        "quantity": 1,
        "unitPrice": 27
      },
      {
        "productId": "p-10",
        "productName": "Running Leggings",
        "quantity": 3,
        "unitPrice": 48
      }
    ],
    "shippingAddress": "Seattle, USA"
  },
  {
    "id": "ORD-1038",
    "customerId": "c-08",
    "customerName": "Mason Ibrahim",
    "date": "2026-09-08",
    "status": "delivered",
    "items": [
      {
        "productId": "p-13",
        "productName": "Ceramic Coffee Mug Set",
        "quantity": 2,
        "unitPrice": 32
      },
      {
        "productId": "p-10",
        "productName": "Running Leggings",
        "quantity": 3,
        "unitPrice": 48
      }
    ],
    "shippingAddress": "Seattle, USA"
  },
  {
    "id": "ORD-1040",
    "customerId": "c-04",
    "customerName": "Noah Ellis",
    "date": "2026-09-06",
    "status": "delivered",
    "items": [
      {
        "productId": "p-18",
        "productName": "Modern Web Design Handbook",
        "quantity": 2,
        "unitPrice": 34
      },
      {
        "productId": "p-04",
        "productName": "4K Action Camera",
        "quantity": 2,
        "unitPrice": 249
      }
    ],
    "shippingAddress": "Sydney, Australia"
  },
  {
    "id": "ORD-1035",
    "customerId": "c-01",
    "customerName": "Olivia Bennett",
    "date": "2026-09-06",
    "status": "delivered",
    "items": [
      {
        "productId": "p-15",
        "productName": "Memory Foam Pillow",
        "quantity": 3,
        "unitPrice": 44
      }
    ],
    "shippingAddress": "Austin, USA"
  },
  {
    "id": "ORD-1034",
    "customerId": "c-15",
    "customerName": "Charlotte Pereira",
    "date": "2026-09-05",
    "status": "delivered",
    "items": [
      {
        "productId": "p-05",
        "productName": "Mechanical Keyboard RGB",
        "quantity": 2,
        "unitPrice": 119
      }
    ],
    "shippingAddress": "Amsterdam, Netherlands"
  },
  {
    "id": "ORD-1032",
    "customerId": "c-05",
    "customerName": "Ava Foster",
    "date": "2026-09-04",
    "status": "delivered",
    "items": [
      {
        "productId": "p-04",
        "productName": "4K Action Camera",
        "quantity": 3,
        "unitPrice": 249
      }
    ],
    "shippingAddress": "Berlin, Germany"
  },
  {
    "id": "ORD-1024",
    "customerId": "c-06",
    "customerName": "Ethan Grant",
    "date": "2026-08-27",
    "status": "delivered",
    "items": [
      {
        "productId": "p-21",
        "productName": "Pro Yoga Mat",
        "quantity": 3,
        "unitPrice": 49
      },
      {
        "productId": "p-02",
        "productName": "Aria Smart Watch",
        "quantity": 3,
        "unitPrice": 229
      }
    ],
    "shippingAddress": "Manchester, UK"
  },
  {
    "id": "ORD-1022",
    "customerId": "c-02",
    "customerName": "Liam Carter",
    "date": "2026-08-20",
    "status": "delivered",
    "items": [
      {
        "productId": "p-16",
        "productName": "Scented Candle Gift Set",
        "quantity": 3,
        "unitPrice": 29
      },
      {
        "productId": "p-05",
        "productName": "Mechanical Keyboard RGB",
        "quantity": 3,
        "unitPrice": 119
      },
      {
        "productId": "p-07",
        "productName": "Men's Denim Jacket",
        "quantity": 2,
        "unitPrice": 94
      }
    ],
    "shippingAddress": "Toronto, Canada"
  },
  {
    "id": "ORD-1029",
    "customerId": "c-04",
    "customerName": "Noah Ellis",
    "date": "2026-08-19",
    "status": "delivered",
    "items": [
      {
        "productId": "p-09",
        "productName": "Classic Cotton T-Shirt",
        "quantity": 1,
        "unitPrice": 24
      }
    ],
    "shippingAddress": "Sydney, Australia"
  },
  {
    "id": "ORD-1023",
    "customerId": "c-04",
    "customerName": "Noah Ellis",
    "date": "2026-08-10",
    "status": "delivered",
    "items": [
      {
        "productId": "p-04",
        "productName": "4K Action Camera",
        "quantity": 2,
        "unitPrice": 249
      },
      {
        "productId": "p-18",
        "productName": "Modern Web Design Handbook",
        "quantity": 2,
        "unitPrice": 34
      },
      {
        "productId": "p-25",
        "productName": "Matte Lipstick Set",
        "quantity": 3,
        "unitPrice": 26
      }
    ],
    "shippingAddress": "Sydney, Australia"
  },
  {
    "id": "ORD-1027",
    "customerId": "c-11",
    "customerName": "Mia Lindberg",
    "date": "2026-08-06",
    "status": "delivered",
    "items": [
      {
        "productId": "p-21",
        "productName": "Pro Yoga Mat",
        "quantity": 1,
        "unitPrice": 49
      },
      {
        "productId": "p-15",
        "productName": "Memory Foam Pillow",
        "quantity": 3,
        "unitPrice": 44
      },
      {
        "productId": "p-11",
        "productName": "Leather Belt",
        "quantity": 2,
        "unitPrice": 36
      }
    ],
    "shippingAddress": "Madrid, Spain"
  },
  {
    "id": "ORD-1026",
    "customerId": "c-18",
    "customerName": "Oscar Silva",
    "date": "2026-08-06",
    "status": "delivered",
    "items": [
      {
        "productId": "p-04",
        "productName": "4K Action Camera",
        "quantity": 1,
        "unitPrice": 249
      },
      {
        "productId": "p-18",
        "productName": "Modern Web Design Handbook",
        "quantity": 1,
        "unitPrice": 34
      }
    ],
    "shippingAddress": "Lisbon, Portugal"
  },
  {
    "id": "ORD-1030",
    "customerId": "c-02",
    "customerName": "Liam Carter",
    "date": "2026-08-05",
    "status": "delivered",
    "items": [
      {
        "productId": "p-24",
        "productName": "Vitamin C Brightening Serum",
        "quantity": 2,
        "unitPrice": 38
      }
    ],
    "shippingAddress": "Toronto, Canada"
  },
  {
    "id": "ORD-1028",
    "customerId": "c-14",
    "customerName": "Jack O'Connor",
    "date": "2026-08-05",
    "status": "delivered",
    "items": [
      {
        "productId": "p-03",
        "productName": "Portable Bluetooth Speaker",
        "quantity": 1,
        "unitPrice": 89
      },
      {
        "productId": "p-20",
        "productName": "Science Fiction Anthology Vol. 2",
        "quantity": 2,
        "unitPrice": 22
      },
      {
        "productId": "p-14",
        "productName": "Digital Air Fryer 6L",
        "quantity": 2,
        "unitPrice": 139
      }
    ],
    "shippingAddress": "Berlin, Germany"
  },
  {
    "id": "ORD-1025",
    "customerId": "c-20",
    "customerName": "Felix Vasquez",
    "date": "2026-08-03",
    "status": "delivered",
    "items": [
      {
        "productId": "p-24",
        "productName": "Vitamin C Brightening Serum",
        "quantity": 3,
        "unitPrice": 38
      }
    ],
    "shippingAddress": "Vancouver, Canada"
  },
  {
    "id": "ORD-1014",
    "customerId": "c-18",
    "customerName": "Oscar Silva",
    "date": "2026-07-29",
    "status": "delivered",
    "items": [
      {
        "productId": "p-01",
        "productName": "Wireless Noise-Cancelling Headphones",
        "quantity": 2,
        "unitPrice": 179
      }
    ],
    "shippingAddress": "Lisbon, Portugal"
  },
  {
    "id": "ORD-1016",
    "customerId": "c-18",
    "customerName": "Oscar Silva",
    "date": "2026-07-22",
    "status": "delivered",
    "items": [
      {
        "productId": "p-24",
        "productName": "Vitamin C Brightening Serum",
        "quantity": 2,
        "unitPrice": 38
      },
      {
        "productId": "p-01",
        "productName": "Wireless Noise-Cancelling Headphones",
        "quantity": 2,
        "unitPrice": 179
      },
      {
        "productId": "p-03",
        "productName": "Portable Bluetooth Speaker",
        "quantity": 2,
        "unitPrice": 89
      }
    ],
    "shippingAddress": "Lisbon, Portugal"
  },
  {
    "id": "ORD-1017",
    "customerId": "c-03",
    "customerName": "Emma Diaz",
    "date": "2026-07-18",
    "status": "delivered",
    "items": [
      {
        "productId": "p-24",
        "productName": "Vitamin C Brightening Serum",
        "quantity": 2,
        "unitPrice": 38
      },
      {
        "productId": "p-21",
        "productName": "Pro Yoga Mat",
        "quantity": 1,
        "unitPrice": 49
      },
      {
        "productId": "p-19",
        "productName": "Atomic Habits Daily Journal",
        "quantity": 3,
        "unitPrice": 19
      }
    ],
    "shippingAddress": "Sydney, Australia"
  },
  {
    "id": "ORD-1020",
    "customerId": "c-20",
    "customerName": "Felix Vasquez",
    "date": "2026-07-10",
    "status": "delivered",
    "items": [
      {
        "productId": "p-02",
        "productName": "Aria Smart Watch",
        "quantity": 1,
        "unitPrice": 229
      },
      {
        "productId": "p-18",
        "productName": "Modern Web Design Handbook",
        "quantity": 3,
        "unitPrice": 34
      }
    ],
    "shippingAddress": "Vancouver, Canada"
  },
  {
    "id": "ORD-1018",
    "customerId": "c-15",
    "customerName": "Charlotte Pereira",
    "date": "2026-07-09",
    "status": "delivered",
    "items": [
      {
        "productId": "p-02",
        "productName": "Aria Smart Watch",
        "quantity": 1,
        "unitPrice": 229
      },
      {
        "productId": "p-17",
        "productName": "The Art of Clean Code",
        "quantity": 3,
        "unitPrice": 27
      }
    ],
    "shippingAddress": "Amsterdam, Netherlands"
  },
  {
    "id": "ORD-1015",
    "customerId": "c-02",
    "customerName": "Liam Carter",
    "date": "2026-07-09",
    "status": "delivered",
    "items": [
      {
        "productId": "p-08",
        "productName": "Women's Wool Coat",
        "quantity": 2,
        "unitPrice": 168
      }
    ],
    "shippingAddress": "Toronto, Canada"
  },
  {
    "id": "ORD-1021",
    "customerId": "c-20",
    "customerName": "Felix Vasquez",
    "date": "2026-07-02",
    "status": "delivered",
    "items": [
      {
        "productId": "p-07",
        "productName": "Men's Denim Jacket",
        "quantity": 3,
        "unitPrice": 94
      }
    ],
    "shippingAddress": "Vancouver, Canada"
  },
  {
    "id": "ORD-1019",
    "customerId": "c-05",
    "customerName": "Ava Foster",
    "date": "2026-06-30",
    "status": "delivered",
    "items": [
      {
        "productId": "p-04",
        "productName": "4K Action Camera",
        "quantity": 1,
        "unitPrice": 249
      },
      {
        "productId": "p-15",
        "productName": "Memory Foam Pillow",
        "quantity": 3,
        "unitPrice": 44
      }
    ],
    "shippingAddress": "Berlin, Germany"
  },
  {
    "id": "ORD-1007",
    "customerId": "c-19",
    "customerName": "Zoe Turner",
    "date": "2026-06-27",
    "status": "delivered",
    "items": [
      {
        "productId": "p-19",
        "productName": "Atomic Habits Daily Journal",
        "quantity": 1,
        "unitPrice": 19
      },
      {
        "productId": "p-13",
        "productName": "Ceramic Coffee Mug Set",
        "quantity": 2,
        "unitPrice": 32
      },
      {
        "productId": "p-11",
        "productName": "Leather Belt",
        "quantity": 1,
        "unitPrice": 36
      }
    ],
    "shippingAddress": "Toronto, Canada"
  },
  {
    "id": "ORD-1011",
    "customerId": "c-20",
    "customerName": "Felix Vasquez",
    "date": "2026-06-25",
    "status": "delivered",
    "items": [
      {
        "productId": "p-09",
        "productName": "Classic Cotton T-Shirt",
        "quantity": 1,
        "unitPrice": 24
      }
    ],
    "shippingAddress": "Vancouver, Canada"
  },
  {
    "id": "ORD-1013",
    "customerId": "c-16",
    "customerName": "Leo Quinn",
    "date": "2026-06-14",
    "status": "cancelled",
    "items": [
      {
        "productId": "p-19",
        "productName": "Atomic Habits Daily Journal",
        "quantity": 2,
        "unitPrice": 19
      },
      {
        "productId": "p-08",
        "productName": "Women's Wool Coat",
        "quantity": 1,
        "unitPrice": 168
      }
    ],
    "shippingAddress": "Seattle, USA"
  },
  {
    "id": "ORD-1008",
    "customerId": "c-07",
    "customerName": "Sophia Harper",
    "date": "2026-06-11",
    "status": "delivered",
    "items": [
      {
        "productId": "p-21",
        "productName": "Pro Yoga Mat",
        "quantity": 1,
        "unitPrice": 49
      },
      {
        "productId": "p-04",
        "productName": "4K Action Camera",
        "quantity": 1,
        "unitPrice": 249
      }
    ],
    "shippingAddress": "Toronto, Canada"
  },
  {
    "id": "ORD-1012",
    "customerId": "c-08",
    "customerName": "Mason Ibrahim",
    "date": "2026-06-07",
    "status": "delivered",
    "items": [
      {
        "productId": "p-24",
        "productName": "Vitamin C Brightening Serum",
        "quantity": 2,
        "unitPrice": 38
      },
      {
        "productId": "p-06",
        "productName": "USB-C Fast Charger 65W",
        "quantity": 2,
        "unitPrice": 39
      }
    ],
    "shippingAddress": "Seattle, USA"
  },
  {
    "id": "ORD-1010",
    "customerId": "c-16",
    "customerName": "Leo Quinn",
    "date": "2026-06-07",
    "status": "delivered",
    "items": [
      {
        "productId": "p-11",
        "productName": "Leather Belt",
        "quantity": 2,
        "unitPrice": 36
      },
      {
        "productId": "p-09",
        "productName": "Classic Cotton T-Shirt",
        "quantity": 1,
        "unitPrice": 24
      },
      {
        "productId": "p-08",
        "productName": "Women's Wool Coat",
        "quantity": 3,
        "unitPrice": 168
      }
    ],
    "shippingAddress": "Seattle, USA"
  },
  {
    "id": "ORD-1009",
    "customerId": "c-12",
    "customerName": "Henry Morales",
    "date": "2026-05-31",
    "status": "delivered",
    "items": [
      {
        "productId": "p-12",
        "productName": "Stainless Steel Cookware Set",
        "quantity": 2,
        "unitPrice": 219
      },
      {
        "productId": "p-14",
        "productName": "Digital Air Fryer 6L",
        "quantity": 1,
        "unitPrice": 139
      },
      {
        "productId": "p-23",
        "productName": "Trail Running Shoes",
        "quantity": 3,
        "unitPrice": 112
      }
    ],
    "shippingAddress": "Oslo, Norway"
  },
  {
    "id": "ORD-1003",
    "customerId": "c-21",
    "customerName": "Nora Walsh",
    "date": "2026-05-19",
    "status": "delivered",
    "items": [
      {
        "productId": "p-24",
        "productName": "Vitamin C Brightening Serum",
        "quantity": 3,
        "unitPrice": 38
      }
    ],
    "shippingAddress": "Madrid, Spain"
  },
  {
    "id": "ORD-1005",
    "customerId": "c-07",
    "customerName": "Sophia Harper",
    "date": "2026-05-17",
    "status": "delivered",
    "items": [
      {
        "productId": "p-18",
        "productName": "Modern Web Design Handbook",
        "quantity": 3,
        "unitPrice": 34
      },
      {
        "productId": "p-08",
        "productName": "Women's Wool Coat",
        "quantity": 2,
        "unitPrice": 168
      }
    ],
    "shippingAddress": "Toronto, Canada"
  },
  {
    "id": "ORD-1004",
    "customerId": "c-17",
    "customerName": "Grace Reyes",
    "date": "2026-05-14",
    "status": "delivered",
    "items": [
      {
        "productId": "p-23",
        "productName": "Trail Running Shoes",
        "quantity": 2,
        "unitPrice": 112
      },
      {
        "productId": "p-07",
        "productName": "Men's Denim Jacket",
        "quantity": 3,
        "unitPrice": 94
      }
    ],
    "shippingAddress": "Austin, USA"
  },
  {
    "id": "ORD-1002",
    "customerId": "c-09",
    "customerName": "Isabella Jensen",
    "date": "2026-05-13",
    "status": "delivered",
    "items": [
      {
        "productId": "p-08",
        "productName": "Women's Wool Coat",
        "quantity": 1,
        "unitPrice": 168
      },
      {
        "productId": "p-24",
        "productName": "Vitamin C Brightening Serum",
        "quantity": 1,
        "unitPrice": 38
      },
      {
        "productId": "p-16",
        "productName": "Scented Candle Gift Set",
        "quantity": 1,
        "unitPrice": 29
      }
    ],
    "shippingAddress": "Toronto, Canada"
  },
  {
    "id": "ORD-1006",
    "customerId": "c-12",
    "customerName": "Henry Morales",
    "date": "2026-05-12",
    "status": "delivered",
    "items": [
      {
        "productId": "p-15",
        "productName": "Memory Foam Pillow",
        "quantity": 2,
        "unitPrice": 44
      }
    ],
    "shippingAddress": "Oslo, Norway"
  },
  {
    "id": "ORD-1001",
    "customerId": "c-13",
    "customerName": "Amelia Nakamura",
    "date": "2026-05-04",
    "status": "delivered",
    "items": [
      {
        "productId": "p-11",
        "productName": "Leather Belt",
        "quantity": 1,
        "unitPrice": 36
      }
    ],
    "shippingAddress": "Seattle, USA"
  }
];

