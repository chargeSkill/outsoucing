import Vue from "vue";
import Vuex from "vuex";
import xuyz from './module/moduleA'
import loading from './loading/loading'

Vue.use(Vuex);

const state = {
    count:1
}

const mutations = {
    add(state,n){
        state.count += n;
    },
    reduce(state){
        state.count--;
    }
}

const getters = {
    count(){
        return state.count += 100;
    }
}

const actions = {
    addAction(context){
        context.commit('add',10);
    },
    reduceAction({commit}){
        // commit('reduce')
        setTimeout(() => { commit('reduce') }, 3000);
        console.log('我比reduce提前执行');
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules:{
        xuyz,
        loading
    }
})