const UrlModel = require("../models/UrlModel");

// Save a URL (Only Run Once)
const saveUrl = async (req, res) => {
  try {
    const { url } = req.body;
    const newUrl = new UrlModel({ url });
    await newUrl.save();
    res.status(201).json({ message: "URL Saved", data: newUrl });
  } catch (error) {
    res.status(500).json({ message: "Error saving URL", error });
  }
};

// Retrieve the URL
const getUrl = async (req, res) => {
  try {
    const urlData = await UrlModel.findOne();
    if (urlData) {
      res.status(200).json({ url: urlData.url });
    } else {
      res.status(404).json({ message: "No URL found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving URL", error });
  }
};

module.exports = { saveUrl, getUrl };
