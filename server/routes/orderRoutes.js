import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";

import {
  addOrderItems,
  getAllOrders,
  getOrderById,
  getUserOrders,
  updateOrderToDelivered,
} from "../controllers/orderController.js";
const router = express.Router();

router
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, admin, getAllOrders);
router.route("/user-orders").get(protect, getUserOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/deliver/:id").patch(protect, admin, updateOrderToDelivered);

export default router;
