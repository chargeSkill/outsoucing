<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './css/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
 * {
      margin: 0;
      padding: 0;
    }
    ul,
    ol {
      list-style: none;
    }
    img {
      border: none;
    }
    input,
    select,
    textarea {
      outline: none;
      border: none;
      background: none;
    }
    textarea {
      resize: none;
    }
    a {
      text-decoration: none;
    }
    html,body {
      height: 100%;
    }
    * {
      font-family: 'SFNSText', 'Helvetica Neue', 'Microsoft YaHei','微软雅黑', sans-serif;
    }
</style>
