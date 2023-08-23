const model = require("../models/model");
const mongoose = require("mongoose");

// Get all properties
const getProperties = async (req, res) => {
  try {
    const properties = await model.find({});

    res.status(200).json({ properties });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

// Get single property
const getProperty = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such property" });
  }
  const property = await model.findById(id);

  if (!property) {
    return res.status(404).json({ error: "No such property" });
  }

  res.status(200).json(property);
};

// create property
const createProperty = async (req, res) => {
  const {
    purpose,
    type,
    location,
    title,
    description,
    price,
    area,
    bedrooms,
    bathrooms,
  } = req.body;

  try {
    const property = await model.create({
      purpose,
      type,
      location,
      title,
      description,
      price,
      area,
      bedrooms,
      bathrooms,
    });
    res.status(200).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a property
const deleteProperty = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such property" });
  }
  const property = await model.findOneAndDelete({ _id: id });

  if (!property) {
    return res.status(404).json({ error: "No such property" });
  }

  res.status(200).json(property);
};

// Update property
const updateProperty = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such property" });
  }
  const property = await model.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!property) {
    return res.status(404).json({ error: "No such property" });
  }

  res.status(200).json(property);
};

module.exports = {
  createProperty,
  getProperties,
  getProperty,
  deleteProperty,
  updateProperty,
};
