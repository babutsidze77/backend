import express from "express";
import data from "../models/data.js";
const dataRouter = express.Router();

// get all data
dataRouter.get("/", async (req, res) => {
  try {
    res.json(await data.find());
  } catch (error) {
    res.send(error.message);
  }
});

// add data
dataRouter.post("/", async (req, res) => {
  try {
    const newData = new data(req.body);
    const savedData = await newData.save();
    res.json(savedData);
  } catch (error) {
    res.send(error.message);
  }
});

// delete data
dataRouter.delete("/:id", async (req, res) => {
  try {
    const deletedData = await data.deleteOne({
      _id: req.params.id,
    });
    res.json(deletedData);
  } catch (error) {
    res.send(error.message);
  }
});

// change info
dataRouter.put("/:id", async (req, res) => {
  try {
    const body = req.body;
    res.json(
      await data.findByIdAndUpdate(req.params.id, body, {
        name: body.name,
        email: body.email,
        gender: body.gender,
        address: body.address,
        phone: body.phone,
      })
    );
  } catch (error) {
    res.send(error.message);
  }
});

export default dataRouter;
