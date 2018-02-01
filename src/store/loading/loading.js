/* 
 *loading模块
 */
const state = {
    loadingList:[]
}

const mutations = {
    push_loading(state,playload){
        state.loadingList.push({text: playload || "加载中..."});
    },
    shift_loading(state){
        state.loadingList.shift();
    }
}

const getters = {
    isLoading(state){
        return state.loadingList.length > 0;
    },
    loadingText(state){
        return state.loadingList.length > 0 ? state.loadingList[0].text : null;
    }
}

const actions = {
    openLoading(contaxt,playload){
        contaxt.commit("push_loading",playload);
    },
    closeLoading(contaxt){
        contaxt.commit("shift_loading");
    }
}

export default ({
    state,
    getters,
    mutations,
    actions
})