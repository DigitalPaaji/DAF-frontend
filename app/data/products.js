const products = [
  {
    id: 1,
    name: "Cardamom Tea Flavor",
    category: "Tea Masala",
    price: "$25.00",
    description:
      "Aromatic cardamom tea blend crafted for a rich and refreshing chai experience.",
    image: "/Banner/jar1.webp",
    images: [
      "/Banner/apple-jar.png",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Tea Blend",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: "Ginger Tea Flavor",
    category: "Tea Masala",
    price: "$22.00",
    description:
      "Warming ginger tea flavor with a bold and comforting Indian chai profile.",
    image: "/Banner/apple-jar.png",
    images: [
      "/Banner/jar1.webp",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Tea Blend",
    rating: 4.7,
    reviews: 56,
  },
  {
    id: 3,
    name: "Lemon Tea Flavor",
    category: "Tea Masala",
    price: "$28.00",
    description:
      "Refreshing lemon tea flavor prepared for a light, zesty and soothing cup.",
    image: "/Banner/blue-lavender-jar.webp",
    images: [
      "/Banner/blue-lavender-jar.webp",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Tea Blend",
    rating: 4.8,
    reviews: 92,
  },
  {
    id: 4,
    name: "Kitchen King Masala",
    category: "Kitchen Masalas",
    price: "$24.00",
    description:
      "A complete kitchen spice blend for everyday vegetables and rich Indian dishes.",
    image: "/Banner/apple-jar.png",
    images: [
      "/Banner/jar1.webp",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Kitchen Masala",
    rating: 4.9,
    reviews: 210,
  },
  {
    id: 5,
    name: "Biryani Masala",
    category: "Kitchen Masalas",
    price: "$18.00",
    description:
      "A fragrant spice blend made for flavorful biryani, pulao and festive rice recipes.",
    image: "/Banner/apple-jar.png",
    images: [
      "/Banner/apple-jar.png",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Kitchen Masala",
    rating: 5,
    reviews: 14,
  },
  {
    id: 6,
    name: "Premium Garam Masala",
    category: "Kitchen Masalas",
    price: "$32.00",
    description:
      "Premium Indian spice blend with deep aroma for curries, gravies and traditional recipes.",
    image: "/Banner/blue-lavender-jar.webp",
    images: [
      "/Banner/blue-lavender-jar.webp",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Kitchen Masala",
    rating: 4.6,
    reviews: 45,
  },
  {
    id: 7,
    name: "Classic Mango Pickle Masala",
    category: "Pickle Masala",
    price: "$20.00",
    description:
      "Traditional mango pickle masala blend made for authentic homemade pickle taste.",
    image: "/Banner/jar1.webp",
    images: [
      "/Banner/jar1.webp",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Pickle Masala",
    rating: 4.8,
    reviews: 78,
  },
  {
    id: 8,
    name: "Punjabi Green Chilli Pickle Masala",
    category: "Pickle Masala",
    price: "$21.00",
    description:
      "Spicy Punjabi-style masala blend for green chilli pickles and bold achar recipes.",
    image: "/Banner/jar1.webp",
    images: [
      "/Banner/jar1.webp",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Pickle Masala",
    rating: 4.7,
    reviews: 64,
  },
  {
    id: 9,
    name: "High Protein Multigrain Atta",
    category: "Flours",
    price: "$26.00",
    description:
      "Nutritious multigrain atta designed for protein-rich daily meals and healthy rotis.",
    image: "/Banner/apple-jar.png",
    images: [
      "/Banner/apple-jar.png",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Flour",
    rating: 4.9,
    reviews: 118,
  },
  {
    id: 10,
    name: "Ragi Flour",
    category: "Flours",
    price: "$16.00",
    description:
      "Single millet flour range made for healthy, wholesome and traditional recipes.",
    image: "/Banner/jar1.webp",
    images: [
      "/Banner/jar1.webp",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Flour",
    rating: 4.6,
    reviews: 39,
  },
  {
    id: 11,
    name: "Cumin / Jeera",
    category: "Pure Spices",
    price: "$15.00",
    description:
      "Pure whole cumin seeds with strong earthy aroma for everyday Indian cooking.",
    image: "/Banner/blue-lavender-jar.webp",
    images: [
      "/Banner/blue-lavender-jar.webp",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Pure Spice",
    rating: 4.9,
    reviews: 150,
  },
  {
    id: 12,
    name: "Turmeric Powder",
    category: "Pure Spices",
    price: "$18.00",
    description:
      "Vibrant turmeric powder for curries, gravies, golden milk and traditional cooking.",
    image: "/Banner/apple-jar.png",
    images: [
      "/Banner/apple-jar.png",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Pure Spice",
    rating: 4.8,
    reviews: 92,
  },
  {
    id: 13,
    name: "Mango Pickle",
    category: "Pickles",
    price: "$22.00",
    description:
      "Classic Indian mango pickle with rich spices and bold traditional flavor.",
    image: "/Banner/blue-lavender-jar.webp",
    images: [
      "/Banner/blue-lavender-jar.webp",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Pickle",
    rating: 4.9,
    reviews: 102,
  },
  {
    id: 14,
    name: "Mixed Vegetable Pickle",
    category: "Pickles",
    price: "$24.00",
    description:
      "Tangy and spicy mixed vegetable pickle prepared for authentic Indian meals.",
    image: "/Banner/jar1.webp",
    images: [
      "/Banner/jar1.webp",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Pickle",
    rating: 4.7,
    reviews: 80,
  },
  {
    id: 15,
    name: "Butter Masala / Makhani Gravy",
    category: "Tadka Gravy",
    price: "$30.00",
    description:
      "Ready-to-use makhani gravy base for butter masala, paneer dishes and rich curries.",
    image: "/Banner/blue-lavender-jar.webp",
    images: [
      "/Banner/blue-lavender-jar.webp",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Ready Gravy",
    rating: 4.8,
    reviews: 72,
  },
  {
    id: 16,
    name: "Punjabi Tadka Gravy",
    category: "Tadka Gravy",
    price: "$29.00",
    description:
      "Ready-to-use Punjabi tadka gravy for quick, flavorful and restaurant-style cooking.",
    image: "/Banner/apple-jar.png",
    images: [
      "/Banner/apple-jar.png",
      "/Banner/jar2.webp",
      "/Banner/jar3.webp",
      "/Banner/jar4.webp",
    ],
    badge: "Ready Gravy",
    rating: 4.9,
    reviews: 88,
  },
];

export const staticProducts = products.map((product) => {
  const numericPrice = Number(
    String(product.price).replace(/[^0-9.]/g, "")
  );

  const fallbackImages = product.image ? [product.image] : [];

  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : fallbackImages;

  return {
    ...product,

    _id: String(product.id),

    slug:
      product.slug ||
      product.name
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/\//g, "-")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),

    numericPrice,

    oldPrice:
      product.oldPrice || `$${(numericPrice + 8).toFixed(2)}`,

    image: images[0] || "/Images/product-placeholder.webp",

    images:
      images.length > 0
        ? images
        : ["/Images/product-placeholder.webp"],

    sizes: product.sizes || ["100g", "250g", "500g", "1kg"],

    sku:
      product.sku ||
      `TAP-${String(product.id).padStart(4, "0")}`,

    stock: product.stock ?? 25,

    origin: product.origin || "India",

    shelfLife: product.shelfLife || "12 months",

    ingredients:
      product.ingredients ||
      "Carefully selected spices and natural ingredients blended for authentic flavour.",

    usage:
      product.usage ||
      "Use according to taste while preparing tea, curries, gravies or everyday Indian dishes.",

    nutritionalInfo:
      product.nutritionalInfo ||
      "Refer to the product packaging for detailed serving-wise nutritional information.",

    storage:
      product.storage ||
      "Store in a cool and dry place. Keep the pack tightly sealed after opening.",

    highlights: product.highlights || [
      "Authentic Indian flavour",
      "Carefully selected ingredients",
      "No artificial colours",
      "Suitable for everyday use",
    ],

    benefits: product.benefits || [
      "Authentic Indian flavour",
      "Carefully selected ingredients",
      "Easy to use",
      "Suitable for everyday cooking",
    ],
  };
});

export const getProductBySlug = (slug) => {
  return staticProducts.find((product) => product.slug === slug);
};