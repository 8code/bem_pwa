var users = [];

// Join user to chat
function userJoin(id, user, room) {
  const u = { id, user, room };
    users.push(u);
    return u;
 
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);
 
  if (index !== -1) {
    let ui = users.splice(index, 1)[0];
    users = users.filter(us => us.user.username !== ui.user.username);
    
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  let u = users.filter(user => user.room === room);

  let result = [];

  let cekUsername = [];
  u.map( (d) => {
    if(cekUsername.includes(d.user.username)){
    }else{
      result.push(d)
      cekUsername.push(d.user.username)
    }
    
  })

  return result;

}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
