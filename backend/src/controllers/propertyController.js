const Property = require('../models/property');

// Fetch all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
};

// Add a new property
exports.addProperty = async (req, res) => {
  const { title, location, price, description, user_id } = req.body;

  if (!title || !location || !price || !user_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newProperty = new Property({
      title,
      location,
      price,
      description,
      user_id,
    });

    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add property' });
  }
};

// Fetch property details by ID
exports.getPropertyById = async (req, res) => {
  const { id } = req.params;

  try {
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch property details' });
  }
};

// Update a property
exports.updateProperty = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedProperty = await Property.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update property' });
  }
};

// Delete a property
exports.deleteProperty = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProperty = await Property.findByIdAndDelete(id);
    if (!deletedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete property' });
  }
};