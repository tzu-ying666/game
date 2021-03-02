<template>
  <div>
    <div class="top">
      <div class="topText">系統通知</div>
    </div>
    <div class="box"></div>
    <div class="redBox"></div>
    <div class="form"></div>
    <div class="blackBox"></div>
    <div class="enter"></div>
    <div class="gray"></div>
    <div class="gray1"></div>
    <div class="gray2"></div>
    <div class="bar"></div>
    <div class="bar1"></div>
    <div class="line"></div>
    <div class="line1"></div>
    <div class="x" @click="test"></div>
  </div>
</template>
<script>

export default {
  data () {
    return {
    }
  },

  watch: {

  },

  computed: {

  },

  methods: {

  },
  created() {

  },

}

</script>
<style>
  .redBox {
    display: flex;
    position: absolute;
    width: 1440px;
    height: 600px;
    top: 220px;
    left: 240px;
    background-color: #460300;
    border-radius: 30px;
  }

  .form {
    display: flex;
    position: absolute;
    width: 1350px;
    height: 100px;
    left: 270px;
    top: 250px;
    background-image: url(../assets/form.png);
  }

  .enter {
    display: flex;
    position: absolute;
    width: 350px;
    height: 100px;
    left: 785px;
    top: 860px;
    background-image: url(../assets/enter.png);
  }

  .blackBox {
    display: flex;
    position: absolute;
    width: 1350px;
    height: 440px;
    top: 350px;
    left: 270px;
    background-color: #646464;
  }

  .gray {
    display: flex;
    position: absolute;
    width: 1350px;
    height: 80px;
    top: 430px;
    left: 270px;
    background-color: #414141;
  }

  .gray1 {
    display: flex;
    position: absolute;
    width: 1350px;
    height: 80px;
    top: 590px;
    left: 270px;
    background-color: #414141;
  }

  .gray2 {
    display: flex;
    position: absolute;
    width: 1350px;
    height: 40px;
    top: 750px;
    left: 270px;
    background-color: #414141;
  }

  .bar {
    display: flex;
    position: absolute;
    width: 20px;
    height: 440px;
    top: 350px;
    left: 1635px;
    background-color: #323232;
  }

  .bar1 {
    display: flex;
    position: absolute;
    width: 20px;
    height: 80px;
    top: 430px;
    left: 1635px;
    background-color: #B4B4B4;
  }

  .line {
    display: flex;
    position: absolute;
    width: 1px;
    height: 540px;
    top: 250px;
    left: 380px;
    background-color: #000000;
  }

  .line1 {
    display: flex;
    position: absolute;
    width: 1px;
    height: 540px;
    top: 250px;
    left: 1000px;
    background-color: #000000;
  }

</style>