const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  url: { type: String, required: true },
});

const UrlModel = mongoose.model("Url", urlSchema);

module.exports = UrlModel;
