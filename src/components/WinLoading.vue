<template>
  <div class="winloading">
    <span v-for="i of 5" :key="'winl-'+i"></span>
  </div>
</template>

<style scoped>
.winloading { position: relative; width: 140px; height: 140px; margin: 10px;}
.winloading span {position: absolute; width: 100px; height: 100px; animation: animate 3.5s linear infinite;}
.winloading span::before {
  position: absolute;
  content: "";
  background-color: #FFF;
  width: 10px;
  height: 10px;
  bottom: 0;
  left: calc(50% - 5px);
  border-radius: 50%;
}
.winloading span:nth-child(1) { animation-delay: 0.1s; }
.winloading span:nth-child(2) { animation-delay: 0.2s; }
.winloading span:nth-child(3) { animation-delay: 0.3s; }
.winloading span:nth-child(4) { animation-delay: 0.4s; }
.winloading span:nth-child(5) { animation-delay: 0.5s; }

@keyframes animate {
  74%{ transform: rotate(600deg); }
  79% { transform: rotate(720deg); opacity: 1; }
  80% { transform: rotate(720deg); opacity: 0; }
  100% { transform: rotate(810deg); opacity: 0; }
}
</style>