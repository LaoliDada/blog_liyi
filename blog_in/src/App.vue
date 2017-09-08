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
*{
margin:0;
padding:0;
}
html,body{
width:100%;
height:100%;
background:rgba(0,0,0,0.7)
}#app{
width:1366px;
height:100%;
margin:0 auto;
}
</style>
