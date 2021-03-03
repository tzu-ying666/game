<template>
  <div>
    <div class="top">
      <div class="topText">帳戶設定</div>
    </div>
    <div class="top1">
      <div class="topText1">更改密碼</div>
    </div>
    <div class="top2">
      <div class="topText1">更換照片</div>
    </div>
    <div class="box"></div>
    <div class="accountBox"></div>
      <div class="accountHead"></div>
      <div class="accountBoxText1">會員 I D : ABCDEFIJ</div>
      <div class="accountBoxText2">會員暱稱 : 暱稱ID八個字</div>
    <div class="accountBox1"></div>
    <div class="coin">
      <div class="coinText">123,456,789</div>
    </div>
    <div class="coinSilver">
      <div class="coinText">123,456,789</div>
    </div>
    <div class="point">
      <div class="pointText">123,456,789</div>
    </div>
    <div class="enter"></div>
    <div class="x" @click="testx"></div>
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
    testx () {
      this.$emit('close'); //子傳父
      console.log('123');
    }
  },
  created() {

  },

}

</script>
  <style lang="scss">
  @import '../css/translateLength'; 
  .top1 {
    display: flex;
    position: absolute;
    width: transLength(350);
    height: transLength(125);
    left: transLength(535);
    top: transLength(60);
    background-image: url(../assets/duckBox.png);
  }

  .top2 {
    display: flex;
    position: absolute;
    width: transLength(350);
    height: transLength(125);
    left: transLength(885);
    top: transLength(60);
    background-image: url(../assets/duckBox.png);
  }

  .topText {
    display: flex;
    position: absolute;
    font-size: transLength(60);
    color: #FFFF00;
    width: transLength(320);
    height: transLength(95);
    margin: transLength(15);
    align-items: center;
    justify-content: center; 
    /* 置中 */
  }

  .topText1 {
    color: #ffffff;
    display: flex;
    position: absolute;
    font-size: transLength(60);
    width: transLength(320);
    height: transLength(95);
    margin: transLength(15);
    align-items: center;
    justify-content: center; 
  }

  .accountBox {
    display: flex;
    position: absolute;
    width: transLength(700);
    height: transLength(490);
    left: transLength(240);
    top: transLength(260);
    background-image: url(../assets/accountBox.png);
  }

  .accountBox1 {
    display: flex;
    position: absolute;
    width: transLength(700);
    height: transLength(490);
    left: transLength(980);
    top: transLength(260);
    background-image: url(../assets/accountBox1.png);
  }

  .coin {
    display: flex;
    position: absolute;
    width: transLength(420);
    height: transLength(120);
    left: transLength(1120);
    top: transLength(300);
    background-image: url(../assets/coin.png);
    align-items: center;
    justify-content: center; 
  }

  .coinSilver {
    display: flex;
    position: absolute;
    width: transLength(420);
    height: transLength(120);
    left: transLength(1120);
    top: transLength(460);
    background-image: url(../assets/silverCoin.png);
  }

  .point {
    display: flex;
    position: absolute;
    width: transLength(530);
    height: transLength(90);
    left: transLength(1065);
    top: transLength(620);
    background-image: url(../assets/point.png);
  }

  .accountHead {
    display: flex;
    position: absolute;
    width: transLength(230);
    height: transLength(230);
    left: transLength(478);
    top: transLength(300);
    background-color: #000032;
    background-image: url(../assets/head.png);
  }

  .coinText {
    position: absolute;
    left: transLength(130);
    top: transLength(50);
    font-size: transLength(45);
    color: #ffffff;
  }

  .pointText {
    position: absolute;
    left: transLength(245);
    top: transLength(20);
    font-size: transLength(45);
    color: #ffffff;
  }

  .accountBoxText1 {
    position: absolute;
    left: transLength(400);
    top: transLength(580);
    font-size: transLength(40);
    color: #ffffff;
  }

  .accountBoxText2 {
    position: absolute;
    left: transLength(370);
    top: transLength(650);
    font-size: transLength(40);
    color: #ffffff;
  }
  
  </style>