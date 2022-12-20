<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body,#app{
 height: 100%;
//  font-family: "微软雅黑"
font-family: myFont !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
