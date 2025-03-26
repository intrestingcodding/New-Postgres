const router = require("express").Router();
const {
  createCashier,
  deleteCashier,
  getCashier,
  updateCashier,
} = require("../controllers/cashier_api_controll");
const AddminCheck = require("../middlewares/cashier_midleman");
const asyncerror = require('../utils/asyncerror')

router.post("/", asyncerror(createCashier));

router.get("/", asyncerror(getCashier));

router.put("/:id", asyncerror(updateCashier));

router.delete("/:id", AddminCheck, asyncerror(deleteCashier));

module.exports = router;
