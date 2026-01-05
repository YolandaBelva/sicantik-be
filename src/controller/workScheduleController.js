const workScheduleServices = require("../services/workScheduleServices");
const response = require("../utils/response");

const workScheduleController = {
    createWorkSchedule: async (req, res) => {
            try {
                const { title, description, start_datetime, end_datetime } = req.body;
                await workScheduleServices.createWorkSchedule(
                title,
                description,
                start_datetime,
                end_datetime
                );

                return response({ res, message: "Success" });
            } catch (error) {
                const msg = String(error.message).toLowerCase();

                if (msg.includes("required") || msg.includes("invalid") || msg.includes("start time must be before")) {
                    return response({ res, code: 400, message: error.message });
                }
                return response({ res, code: 500, message: error.message });
            }
        },

    getAllWorkSchedules: async (req, res) => {
            try {
                const schedules = await workScheduleServices.getAllWorkSchedules();

                const mappedSchedules = (schedules || []).map(s => ({
                title: s.title,
                description: s.description,
                start_datetime: s.start_datetime, 
                end_datetime: s.end_datetime,     
                }));

                return response({ res, data: mappedSchedules, message: "Success" });
            } catch (error) {
                return response({ res, code: 500, message: error.message });
            }
        },

    getWorkScheduleById: async (req, res) => {
            try {
                const { id } = req.params;
                const schedule = await workScheduleServices.getWorkScheduleById(id);

                const mappedSchedule = {
                title: schedule.title,
                description: schedule.description,
                start_datetime: schedule.start_datetime, 
                end_datetime: schedule.end_datetime,     
                };

                return response({ res, data: mappedSchedule, message: "Success" });
            } catch (error) {
                const msg = String(error.message).toLowerCase();

                if (msg.includes("id required")) {
                    return response({ res, code: 400, message: error.message });
                }
                if (msg.includes("not found")) {
                    return response({ res, code: 404, message: error.message });
                }
                return response({ res, code: 500, message: error.message });
            }
        },

    updateWorkScheduleById: async (req, res) => {
            try {
                const { id } = req.params;
                const data = req.body;

                await workScheduleServices.updateWorkScheduleById(id, data);

                return response({ res, message: "Success" });
            } catch (error) {
                const msg = String(error.message).toLowerCase();

                if (
                msg.includes("id required") ||
                msg.includes("no data") ||
                msg.includes("required") ||
                msg.includes("invalid") ||
                msg.includes("start time must be before")
                ) {
                    return response({ res, code: 400, message: error.message });
                }
                if (msg.includes("not found")) {
                    return response({ res, code: 404, message: error.message });
                }
                return response({ res, code: 500, message: error.message });
            }
        },

    deleteWorkScheduleById: async (req, res) => {
            try {
                const { id } = req.params;
                await workScheduleServices.deleteWorkScheduleById(id);

                return response({ res, message: "Success" });
            } catch (error) {
                const msg = String(error.message).toLowerCase();
                if (msg.includes("id required")) {
                    return response({ res, code: 400, message: error.message });
                }
                if (msg.includes("not found")) {
                    return response({ res, code: 404, message: error.message });
                }
                return response({ res, code: 500, message: error.message });
            }
        },
};

module.exports = workScheduleController;