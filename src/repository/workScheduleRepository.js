const { prisma } = require("../config/database");

const workScheduleRepository = {
    create: (title, description, start_datetime, end_datetime) => prisma.workSchedule.create({
        data: {
            title,
            description,
            start_datetime,
            end_datetime,
        },
        }),

    findAll: () => prisma.workSchedule.findMany({
        orderBy: { created_at: "desc" },
        }),

    findById: (id) => prisma.workSchedule.findUnique({
        where: { id },
        }),

    updateById: (id, data) => prisma.workSchedule.update({
        where: { id },
        data,
        }),

    deleteById: (id) => prisma.workSchedule.delete({
        where: { id },
        }),
    };

module.exports = workScheduleRepository;