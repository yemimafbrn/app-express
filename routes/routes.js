import express from "express";


import { Home, Product } from "../controllers/page.js";

const router = express.Router();


router.get('/', Home);


router.get('/product', Product);


export default router;