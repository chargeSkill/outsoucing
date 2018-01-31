import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'


Vue.use(Vuex);
const state = {
    colorArr:['#C970E2','#6DDC31','#40ACF9','#F3CC00','#A0855E','#F62368','#F89600'],   //颜色数组
    todolist:[
        {id:1,title:'新列表1',
            list:[
            {title:'fasdfasd', done:false,},
            {title:'热爱生活', done:true,},
            {title:'abfdfsd', done:false,},
            {title:'fasdfasd', done:true,},
            ],color:'#CD76E2'},
        {id:2,title:'新列表2',
            list:[
                {title:'你好OA', done:true,},
                {title:'fasdfasd', done:false,},
                {title:'请问的的撒', done:true,},
                {title:'fasdfasd', done:false,},
                {title:'fasdfasd', done:true,},
            ],color:'#1BACF8'},
        {id:3,title:'新列表3',
            list:[
                {title:'fasdfasd', done:true,},
                {title:'fasdfasd', done:false,},
                {title:'fasdfasd', done:true,},
                {title:'fasdfasd', done:false,},
                {title:'你好东方闪电', done:true,},
            ],color:'#FF2969'},
    ],
    index:0,            //当前列表的索引值
    setShow:false,      //控制选项显示的开关
    // cTitle:'',          
    cColor:'',
    comFlag:false,     //已完成和未完成切换
    comNum:0,          //已完成事件的数量
    bgindex:'',        //控制背景颜色的下标 
};


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})