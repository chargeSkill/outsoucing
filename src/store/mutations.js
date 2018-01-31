export default {
    add (state, payload) {                      //新增列表
        state.index=state.todolist.length;
        state.todolist.push({
            id:state.index+1,
            title:'新列表'+(state.index+1),
            color:state.colorArr[state.index%7],
            list:[

            ]
        });
    },
    changeIndex (state, i) {                    //触发index的改变
      state.index = i
    },
    showState(state){                           //控制选项状态的改变
        state.setShow=!state.setShow;
        var o=state.todolist[state.index];
        // state.cTitle=o.title;
        state.cColor=o.color;
    },
    changeColor(state, val){                    //改变颜色
        state.cColor = val;
    },     
    del(state){                                 //删除
        state.setShow=false;
        state.todolist.splice(state.index,1);
        state.index=0;
    },
    cancel(state){                               // 取消
        state.setShow=false;
    },
    complate(state,tit){                             // 完成
        state.setShow=false;
        var o=state.todolist[state.index];
        o.title=tit;
        o.color=state.cColor;
    },   
    comState(state) {                            // 已完成和未完成切换
        state.comFlag=!state.comFlag;
    },   
    clearAll(state){                             //清除已完成事件
        state.todolist[state.index].list=state.todolist[state.index].list.filter(todo => !todo.done);
    },  
    addEvent (state) {                          //新建事项
        state.todolist[state.index].list.push({title:'', done:false});
    },    
    changeBg (state, i){                        //点击切换事项的背景
        state.bgindex = i;
    },    
    delEvent (state, i) {                       // 删除当前事件
        state.todolist[state.index].list.splice(i,1);    
    }             
}