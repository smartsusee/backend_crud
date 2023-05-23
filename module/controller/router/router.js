const express =require("express");
const { post_data, Login, Get, Update, Del } = require("../curd");

  const router =express.Router();

  router.post("/create",post_data)

  router.post("/login",Login)

  router.get("/get",Get)

  router.put("/update/:id",Update)

  router.delete("delete/:id",Del)
  module.exports=router