<template>
  <div>
    <div class="top">
      <div class="topText">系統通知</div>
    </div>
    <div class="box"></div>
    <div class="redBox"></div>
    <div class="form">
      <!-- <div v-for="(item, index) in arr" :key="item + '_' + index" :class="'formText' + item "></div> -->
      <div class="formText1">#</div>
      <div class="formText2">主旨</div>
      <div class="formText3">內文</div>
    </div>
    <div class="blackBox">
      <div class="formText4">001</div>
      <div class="formText5">系統維修中</div>
      <div class="formText6">注意事項...</div>
    </div>
    <div class="enter"></div>
    <div class="gray"></div>
    <div class="gray1"></div>
    <div class="gray2"></div>
    <div class="bar"></div>
    <div class="bar1"></div>
    <div class="line"></div>
    <div class="line1"></div>
    <div class="x" @click="testx"></div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      arr: [],
    }
  },

  watch: {

  },

  computed: {

  },

  methods: {

  },
  created() {
    for (let ii = 1; ii <= 3; ii++) {
      this.arr.push(ii);
    }
  },

}

</script>

<style lang="scss">
@import '../css/translateLength';

  .redBox {
    display: flex;
    position: absolute;
    width: transLength(1440);
    height: transLength(600);
    top: transLength(220);
    left: transLength(240);
    background-color: #460300;
    border-radius: transLength(30);
  }

  .form {
    display: flex;
    position: absolute;
    width: transLength(1350);
    height: transLength(100);
    left: transLength(270);
    top: transLength(250);
    background-image: url(../assets/form.png);
  }

  .enter {
    display: flex;
    position: absolute;
    width: transLength(350);
    height: transLength(100);
    left: transLength(785);
    top: transLength(860);
    background-image: url(../assets/enter.png);
  }

  .blackBox {
    display: flex;
    position: absolute;
    width: transLength(1350);
    height: transLength(440);
    top: transLength(350);
    left: transLength(270);
    background-color: #646464;
  }

  .gray {
    display: flex;
    position: absolute;
    width: transLength(1350);
    height: transLength(80);
    top: transLength(430);
    left: transLength(270);
    background-color: #414141;
  }

  .gray1 {
    display: flex;
    position: absolute;
    width: transLength(1350);
    height: transLength(80);
    top: transLength(590);
    left: transLength(270);
    background-color: #414141;
  }

  .gray2 {
    display: flex;
    position: absolute;
    width: transLength(1350);
    height: transLength(40);
    top: transLength(750);
    left: transLength(270);
    background-color: #414141;
  }

  .bar {
    display: flex;
    position: absolute;
    width: transLength(20);
    height: transLength(440);
    top: transLength(350);
    left: transLength(1635);
    background-color: #323232;
  }

  .bar1 {
    display: flex;
    position: absolute;
    width: transLength(20);
    height: transLength(80);
    top: transLength(430);
    left: transLength(1635);
    background-color: #B4B4B4;
  }

  .line {
    display: flex;
    position: absolute;
    width: transLength(1);
    height: transLength(540);
    top: transLength(250);
    left: transLength(380);
    background-color: #000000;
  }

  .line1 {
    display: flex;
    position: absolute;
    width: transLength(1);
    height: transLength(540);
    top: transLength(250);
    left: transLength(1000);
    background-color: #000000;
  }

  .formText1 {
    display: flex;
    width: transLength(110);
    height: transLength(100);
    top: transLength(250);
    left: transLength(270);
    font-size: transLength(50);
    color: #ffff00;
    align-items: center;
    justify-content: center; 
  }

  .formText2 {
    display: flex;
    width: transLength(620);
    height: transLength(100);
    top: transLength(250);
    left: transLength(380);
    font-size: transLength(50);
    color: #ffff00;
    align-items: center;
    justify-content: center; 
  }

  .formText3 {
    display: flex;
    width: transLength(620);
    height: transLength(100);
    top: transLength(250);
    left: transLength(1000);
    font-size: transLength(50);
    color: #ffff00;
    align-items: center;
    justify-content: center; 
  }

  .formText4 {
    display: flex;
    width: transLength(110);
    height: transLength(80);
    top: transLength(350);
    left: transLength(270);
    font-size: transLength(40);
    color: #ffffff;
    align-items: center;
    justify-content: center; 
  }

  .formText5 {
    display: flex;
    width: transLength(620);
    height: transLength(80);
    top: transLength(350);
    left: transLength(380);
    font-size: transLength(40);
    color: #ffffff;
    align-items: center;
    justify-content: center; 
  }

  .formText6 {
    display: flex;
    width: transLength(620);
    height: transLength(80);
    top: transLength(350);
    left: transLength(1000);
    font-size: transLength(40);
    color: #ffffff;
    align-items: center;
    justify-content: center; 
  }

</style>