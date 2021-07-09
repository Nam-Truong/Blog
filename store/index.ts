import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const state = () => ({
    counter: 0,
    person: {
        'name': 'John',
        'age': 45
    }
  })
  
export const mutations = {
    increment(state) {
        // mutations.initState(state)
        state.counter++
        state.person.age++
        console.log(state.counter)


        localStorage.setItem('agreedToPrivacy', true);
        localStorage.setItem('counter', state.counter)
        localStorage.setItem('person', JSON.stringify(state.person))
    },

    initState(state) {
        /**
         * DO NOT CALL THIS IN VUE COMPONENT by using Vue Hooks, e.g.
         * created, mounted, beforeCreate
         */
        state.counter = localStorage.getItem('counter')
        const person = localStorage.getItem('person')
        console.log(person)
        state.person =  (person != null) ? JSON.parse(person) : state.person
        console.log('initState.counter: ' + state.counter)
        console.log('initState.person: ')
        console.log(state.person)
    }
}