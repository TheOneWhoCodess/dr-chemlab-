export interface FragranceCategory {
  slug: string;
  title: string;
  icon: string;
  image: string;
  products: string[];
}

export const fragranceCategories: FragranceCategory[] = [
  {
    slug: "candle-fragrances",
    title: "Candle Fragrances",
    icon: "local_fire_department",
    image: "/candle-fragrances.png",
    products: ["Snow Kissed Cranberry", "Sunlight On Snow", "Apple Cinnamon Cider", "Cherry Vanilla", "Fruit & Spicy Pudding", "Vanilla", "Ginger Bread", "Fresh Linen", "Energising Citrus", "Eucalyptus", "Woodland Seas", "Raspberry", "Vanilla Cup Cake", "Black Forest", "Fresh Flower", "Pineapple", "Coconut", "Jasmine", "Rose", "Cinnamon & Nutmeg", "Sugar Plum", "Winter White", "Frankincense", "Mulled Wine", "Warm Apple Pie", "Christmas Tree", "Bergamot", "Patchouli", "Citronella", "Grape Fruit", "Lavender Kashmir", "Lemon", "Thyme", "Winter Green", "Vanilla Bean Tonka", "Autumn Delight", "Indian Jasmine", "Fresh Linen & Bamboo", "Sunset Citrus", "Harvest Berries", "Aquatic", "Oakmoss Amber", "Mahogany", "Gardenia Blooms", "Green Tea", "Neroli", "Amber", "Fruit Burst", "Sugar Cookie", "Pink Peony"],
  },
  {
    slug: "diffuser-fragrances",
    title: "Diffuser Fragrances",
    icon: "air",
    image: "/diffuser-fragrances.png",
    products: ["Sunglow Orchid", "Gucci", "Wild Berry", "Vanilla Bean", "Fancy", "Herbal", "Sunrise", "Blooms", "White Rose", "Calm", "Cactus Blossom", "Fresh Cut Lilac", "Gardenia Colonia", "Warm Cozy", "Patchouli & Pine", "Snow Forest", "Cardamom Milk", "Mulled Cider", "Golden Milk", "Fruity Orange", "Lily", "Ocean", "Rose", "Jasmine", "Lavender", "Twilight Blooms", "Tulip", "Lemongrass", "Water Lily", "Tuberose", "Mogra", "White Musk", "Lime", "Vanilla", "Mahogany Teakwood", "Cotton Flower", "Cherry Flower", "Amberwood", "Sandalwood", "Green Apple", "Citron Berry"],
  },
  {
    slug: "air-freshener-fragrances",
    title: "Air Freshener Fragrances",
    icon: "spa",
    image: "/airfreshner-fragrances.png",
    products: ["Coffee", "Sweet Vanilla", "Jasmine", "Aqua", "Morning Breeze", "Baby Powder", "Floral", "Lavender", "Mixed Fruit", "Lemon", "Rose", "Crystal Rose", "Strawberry", "Sandalwood", "Citrus Fresh", "Cherry Blossom", "Refresh", "Pleasure", "Fig", "Lemongrass", "Oudh", "Lily", "Citron Berry"],
  },
  {
    slug: "incense-fragrances",
    title: "Incense Fragrances",
    icon: "self_improvement",
    image: "/insence-fragrances.png",
    products: ["Rose", "Jasmine", "Lily", "Lavender", "Nagchampa", "Mogra", "Flora", "Water Lily", "Frankincense", "Sandalwood", "Myrrh", "Vibhuthi", "Oudh", "Pineapple", "Mango Pineapple", "Mango Papaya", "Marigold", "Hydrangea", "Spiritual", "Patchouli", "Sage", "Lemongrass", "Citronella", "Lotus", "Jenifer", "Orange", "Fancy", "Full Moon", "Dragon", "Juniper Moss", "Dark Neroli", "Lotus Petal", "Chandan", "Gulab", "Bliss", "Jasmine & Bergamot", "Sandalwood & Musk", "Wild & Spicy", "Bergamot & Lemon", "Amber Caramel & Vanilla", "Raspberry Mixed", "Rhubarb & Daffodil", "Tropical Mod", "Mandarin Flower", "Woody", "Angel Wings", "Watermelon Martini", "Wedding Bells", "Floral Fusion", "Captain Black", "Cherry", "Goddess Musk", "Calming Lavender", "Fireball", "Zest", "First Rain", "Lavender Field Berry", "Grapes", "Banana", "Sunset Citrus", "Renew", "Indian Jasmine", "Christmas Spice", "Harvest Berries", "Autumn Delight"],
  },
  {
    slug: "soap-fragrances",
    title: "Soap Fragrances",
    icon: "soap",
    image: "/soap-fragrances.png",
    products: ["Neem & Aloevera", "Lavender", "Jasmine", "Papaya Glow", "Sandalwood & Oud", "Pink Blossom", "Herbal", "Orange & Tulsi", "Rose & Geranium", "Orange", "Vanilla & Coffee", "Eucalyptus & Mint", "Jasmine & Amber Rose", "Aloevera & Turmeric", "Milk & Honey", "Mango", "Almond & Honey", "Neem & Turmeric", "Malai Cream", "Sandal Gold", "Lime Mint & Cucumber", "Watermelon", "Turmeric", "Pears", "Tulsi", "Neem Tulsi", "Kayakalpam", "Lemongrass", "Honey Comb", "Lime", "Rose & Mint", "Gulkand", "Haldi Chandan", "Menthol Cool", "Glycerine Honey", "Cinnamon", "Tea Tree", "Oudh"],
  },
];

export const fragranceTotal = fragranceCategories.reduce(
  (sum, cat) => sum + cat.products.length,
  0
);