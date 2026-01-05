const express = require("express");
const workScheduleController = require("../controller/workScheduleController");

const workScheduleRoute = express.Router();

workScheduleRoute.post("/", workScheduleController.createWorkSchedule);
workScheduleRoute.get("/", workScheduleController.getAllWorkSchedules);
workScheduleRoute.get("/:id", workScheduleController.getWorkScheduleById);
workScheduleRoute.put("/:id", workScheduleController.updateWorkScheduleById);
workScheduleRoute.delete("/:id", workScheduleController.deleteWorkScheduleById);

module.exports = workScheduleRoute;