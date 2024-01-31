const { Product } = require('../models');

const getAllProducts = async (req, res) => {
  try {
    const productProducts = await Product.findAll();
    res.json(productProducts);
  } catch (error) {
    console.error('Error fetching productProducts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllProducts };
