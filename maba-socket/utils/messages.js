const moment = require('moment');


function formatMessage(room, user, message) {
  return {
    room,
    user,
    message,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;
