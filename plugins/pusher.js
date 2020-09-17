// import Pusher from 'pusher-js'
// export default ({ store }) => {
//   const socket = new Pusher('11f9581467d13252a180', {
//     cluster: 'ap1',
//     forceTLS: true
//   })
//   const channel = socket.subscribe('aplikasi-maba')
//     channel.bind('notif', function (data) {
//         // data dari pusher dimasukan ke dalam state di vuex melalu mutation setNotif
//         store.commit('setNotif', data)
//     })
// }