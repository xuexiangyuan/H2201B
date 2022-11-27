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
body,html,#app{
  height: 100%;
  background: repeating-linear-gradient(to right, #ffafbd, #ffc3a0)
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
