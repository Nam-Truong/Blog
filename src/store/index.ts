import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: { // NOTE: mutations must be synchronous as mutating state. Should not called directly by components.
    },
    actions: { // NOTE: actions can be either asyn- or synchronous as calling mutations.
    }
    // modules: {} // UNUSED BECAUSE WE DONT HAVE MULTIPLE MODULES AT THE MOMENT.
});
