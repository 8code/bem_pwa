import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            baseUrl: 'https://api.bem.citumangview.com/',
            mode: (localStorage.getItem('mode')) ? localStorage.getItem('mode') : 'dark-mode',
            mhs: '',
            sidebar_mode: (localStorage.getItem('sidebar_mode')) ? localStorage.getItem('sidebar_mode') : '',
            sideBarClass: (localStorage.getItem('sideBarClass')) ? localStorage.getItem('sideBarClass') : 'sidebar sidebar-to-top'
        },
        mutations: {
            mode(state) {
                if (state.mode == 'dark-mode') {
                    state.mode = 'light-mode'
                    localStorage.setItem("mode", state.mode)
                } else {
                    state.mode = 'dark-mode'
                    localStorage.setItem("mode", state.mode)

                }

            },
            sidebarMode(state) {
                if (state.sidebar_mode == '') {
                    state.sidebar_mode = 'sidebar-top'
                    localStorage.setItem("sidebar_mode", state.sidebar_mode)
                } else {
                    state.sidebar_mode = ''
                    localStorage.setItem("sidebar_mode", state.sidebar_mode)
                }


            },
            sidebarTopRight(state) {
                if (state.sideBarClass == 'sidebar sidebar-to-top') {
                    state.sideBarClass = 'sidebar sidebar-to-top sidebar-to-top-right';
                    localStorage.setItem("sideBarClass", state.sideBarClass)

                } else {
                    state.sideBarClass = 'sidebar sidebar-to-top';
                    localStorage.setItem("sideBarClass", state.sideBarClass)
                }
            }
        }
    })
}

export default createStore