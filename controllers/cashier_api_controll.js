const { cashier } = require("../models");

const getCashier = async (req, res, next) => {
  try {
    var data = await cashier.findAll();
    res.json({
      message: "Get Data SuccessFully ",
      data,
    });
  } catch (error) {
    console.log("Get Api is not Work Properly ", error.message);
  }
};
const createCashier = async (req, res, next) => {
  try {
    const data = await cashier.create(req.body);
    res.json({
      message: "Data Create Successfully ",
      data,
    });
  } catch (error) {
    console.log(error, res.json({ message: "Not work" }))
  }
};

const updateCashier = async (req, res, next) => {
  try {
    const data = await cashier.findByPk(req.params.id);
    await data.update(req.body);
    res.json({
      message: "Upadat Data SuccessFully",
      data,
    });
  } catch (error) { }
};
const deleteCashier = async (req, res) => {
  try {
    var data = await cashier.findByPk(req.params.id);
    await data.destroy();
    res.json({
      message: "Delete Api SuccessFully",
    });
  } catch (error) {
    console.log("Delete Api not work");
  }
};

module.exports = {
  deleteCashier,
  getCashier,
  createCashier,
  updateCashier,
};
