/**
 * @description This file contain a route for main endpoints

 */

import express, { type Router } from "express";
import MainController from "../app/controllers/main.controller";

const router: Router = express.Router();

/**
 * @method GET
 * @access public
 * @endpoint /api
 */
router.get("/", MainController.index);

export default router;
