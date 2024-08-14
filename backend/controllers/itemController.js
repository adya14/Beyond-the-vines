// itemController.js
const Item = require('../models/item'); // Assuming you have a model named Item

// Controller to get items
const getItems = async (req, res) => {
  try {
    const items = await Item.find(); // Fetch items from the database
    res.status(200).json(items); // Send the items as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch items' });
  }
};

module.exports = { getItems };
