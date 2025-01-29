db.products.find(
    { category: "Electronics", price: { $gt: 500 } }  // Filtering condition
).sort(
    { price: -1 }  // Sorting in descending order
);