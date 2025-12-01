//
// Handles environment variable detection for backend/API URLs
//
// PUBLIC_INTERFACE
export function getApiBaseUrl() {
  // Prefer REACT_APP_API_BASE, then fallback to REACT_APP_BACKEND_URL or blank (makes frontend safe if no API).
  const base = process.env.REACT_APP_API_BASE || process.env.REACT_APP_BACKEND_URL || '';
  return base?.replace(/\/+$/, '');
}

// PUBLIC_INTERFACE
/** Returns placeholder recipe data (if no API) */
export function getPlaceholderRecipes() {
  return [
    {
      id: 1,
      title: "Classic Lasagna",
      category: "Dinner",
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a9b0?auto=format&fit=crop&w=400&q=80",
      ingredients: ["Lasagna noodles", "Ground beef", "Tomato sauce", "Ricotta", "Mozzarella", "Parmesan", "Egg"],
      steps: [
        "Preheat oven to 375°F.",
        "Brown ground beef in a skillet, add tomato sauce.",
        "Boil noodles per instructions.",
        "Layer noodles, ricotta, meat sauce, mozzarella, repeat.",
        "Top with parmesan and bake for ~50 min."
      ]
    },
    {
      id: 2,
      title: "Tropical Smoothie",
      category: "Breakfast",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      ingredients: ["Banana", "Pineapple", "Mango", "Greek yogurt", "Orange juice", "Ice"],
      steps: [
        "Add all ingredients to blender.",
        "Blend until smooth.",
        "Serve chilled."
      ]
    },
    {
      id: 3,
      title: "Summer Avocado Salad",
      category: "Lunch",
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      ingredients: ["Avocado", "Cherry tomatoes", "Cucumber", "Red onion", "Lime", "Olive oil", "Salt"],
      steps: [
        "Dice avocado, tomatoes, cucumber.",
        "Slice red onion thinly.",
        "Mix all veggies, dress with lime juice, olive oil, and salt."
      ]
    }
  ];
}
