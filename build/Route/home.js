"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerHome = void 0;
const categoryController_1 = require("../Controller/categoryController");
const express_1 = require("express");
const itemController_1 = require("../Controller/itemController");
const routerHome = (0, express_1.Router)();
exports.routerHome = routerHome;
routerHome.get("/api/getCategory", categoryController_1.getCategoryController);
routerHome.post("/api/setCategory", categoryController_1.setCategoryController);
routerHome.post("/api/setItem", itemController_1.setItemController);
routerHome.get("/api/getItem", itemController_1.getItemController);
routerHome.get("/api/getItemPopular", itemController_1.getItemPopularController);
routerHome.get("/api/getItemforCategory/:categoryId", itemController_1.getItemforCategoryController);
