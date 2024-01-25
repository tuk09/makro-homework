const prisma = require("../config/prisma");

exports.getUserBId = (id) => {
    return prisma.user.findFirst({
        where: {
            id,
        },
    });
};