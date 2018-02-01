<template>
  <div class="hello">
    <h1>{{ xuyz.msg }}</h1>
    <p>{{count}}</p>
    <div>
        <!-- mutations -->
        <!-- <button @click="$store.commit('add',20)">+</button>
        <button @click="reduce">-</button> -->
        <!-- actions -->
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
    </div>

    <!-- loading -->
    <div v-if="loading.show">{{ loading.show }} {{ loading.text }}</div>
    <loading :show="loading.show" :text="loading.text"></loading>
    <button @click="openLoading">打开</button>
    <button @click="closeLoading">关闭</button>
  </div>
</template>

<script>
// import loading from "./loading"; // 这里不用单独引用，loading已经试全局组件了
import store from "@/store/store";
import { mapState, mapMutations, mapGetters, mapActions } from "Vuex";
export default {
  name: 'HelloWorld',
  store,
  components:{
    // loading
  },
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  // method1:
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  // method2:
  // computed:mapState({
  //   count: state => state.count 
  // }),
  // method3
  // computed:mapState(['count']),
  // method4:
  computed:{
    ...mapState(['count']),
    ...mapGetters(['count']),
    xuyz(){
      console.log(this.$store)
      return {
        msg:this.$store.getters.isMsg
      }
    },
    loading(){
      console.log(this.$store)
      return {
        show:this.$store.getters.isLoading,
        text:this.$store.getters.loadingText
      }
    }
  },
  created(){
    this.openLoading();
    setTimeout(() => {
      this.closeLoading();
    }, 2000);
  },
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction']),
    openLoading(){
      this.$store.dispatch("openLoading","玩命加载中...");
    },
    closeLoading(){
      this.$store.dispatch("closeLoading");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
