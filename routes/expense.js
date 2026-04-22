const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");
const auth = require("../middleware/authMiddleware");

router.post("/expense", auth, async (req, res) => {
  const expense = new Expense({
    ...req.body,
    userId: req.user.id,
  });
  await expense.save();
  res.json(expense);
});

router.get("/expenses", auth, async (req, res) => {
  const expenses = await Expense.find({ userId: req.user.id });
  res.json(expenses);
});

module.exports = router;
