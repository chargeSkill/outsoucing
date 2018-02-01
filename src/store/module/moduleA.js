// import Vue from "Vue";
// import Vuex from "Vuex";

// Vue.use(Vuex);

const state = {
    msg: "我是模块A"
}

const getters = {
    isMsg(state){
        return state.msg;
    }
}

export default ({
    state,
    getters
})