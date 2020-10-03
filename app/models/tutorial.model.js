const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial",{
        TaskTitle: {type: Sequelize.STRING},
        TaskDate: {type: Sequelize.DATEONLY},
        TaskTimeStart: {type: Sequelize.TIME},
        TaskTimeEnd: {type: Sequelize.TIME},
        TaskDescription: {type: Sequelize.STRING},
        TaskReady: {type: Sequelize.BOOLEAN}
    });
    return Tutorial;
};