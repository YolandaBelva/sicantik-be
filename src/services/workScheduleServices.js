const workScheduleRepository = require("../repository/workScheduleRepository");

const workScheduleServices = {
    createWorkSchedule: async (title, description, start_datetime, end_datetime) => {
        if (!title || !start_datetime || !end_datetime) {
            throw new Error("Title, start datetime, and end datetime required");
        }

        const t = String(title).trim();
        if (!t) throw new Error("Title required");

        const start = new Date(start_datetime);
        const end = new Date(end_datetime);

        if (isNaN(start.getTime())) throw new Error("Invalid start datetime");
        if (isNaN(end.getTime())) throw new Error("Invalid end datetime");
        if (start >= end) throw new Error("Start time must be before end time");

        return await workScheduleRepository.create(
            t,
            description || null,
            start,
            end
        );
    },


    getAllWorkSchedules: async () => {
        const schedules = await workScheduleRepository.findAll();
        return schedules || [];
    },

    getWorkScheduleById: async (id) => {
        if (!id) throw new Error("ID required");
        const schedule = await workScheduleRepository.findById(id);
        if (!schedule) throw new Error("Work schedule not found");
        return schedule;
    },

    updateWorkScheduleById: async (id, data) => {
        if (!id) throw new Error("ID required");
        if (!data || Object.keys(data).length === 0) {
        throw new Error("No data to update");
        }
        const schedule = await workScheduleRepository.findById(id);
        if (!schedule) throw new Error("Work schedule not found");

        const payload = { ...data };
        if (payload.title !== undefined) { payload.title = String(payload.title).trim();
        if (!payload.title) throw new Error("Title required");
        }

        if (payload.date !== undefined) {
        const d = new Date(payload.date);
        if (isNaN(d.getTime())) throw new Error("Invalid date");
        payload.date = d;
        }

        if (payload.start_datetime !== undefined) {
        const s = new Date(payload.start_datetime);
        if (isNaN(s.getTime())) throw new Error("Invalid start time");
        payload.start_datetime = s;
        }

        if (payload.end_datetime !== undefined) {
        const e = new Date(payload.end_datetime);
        if (isNaN(e.getTime())) throw new Error("Invalid end time");
        payload.end_datetime = e;
        }

        const start = payload.start_datetime || schedule.start_datetime;
        const end = payload.end_datetime || schedule.end_datetime;
        if (start >= end) throw new Error("Start time must be before end time");
        return await workScheduleRepository.updateById(id, payload);
    },

    deleteWorkScheduleById: async (id) => {
        if (!id) throw new Error("ID required");
        const schedule = await workScheduleRepository.findById(id);
        if (!schedule) throw new Error("Work schedule not found");
        return await workScheduleRepository.deleteById(id);
    },
};

module.exports = workScheduleServices;