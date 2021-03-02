<template>
  <div v-show="showList">
    <div class="top">
      <div class="topText">聯繫客服</div>
    </div>
    <div class="box"></div>
    <div class="serviceLog"></div>
    <div class="lineId">
      <div class="lineText">客服LINE ID</div>>
      <div class="lineText2">MyBig2</div>>
    </div>
    <div class="serviceMessage">
      <div class="messageText">有遊戲、儲值以及BUG等相關問題<br>歡迎與客服聯繫</div>
      <!-- <div class="messageText line2">歡迎與客服聯繫</div> -->
    </div>
    <div class="open"></div>
    <div class="x" @click="test"></div>
  </div>
  </template>
  <script>
      // <input type="text" v-bind:value="firstnum" name=item />
  
  export default {
    data () {
      return {
        showList: true,
      }
    },
  
    watch: {
  
    },
  
    computed: {
  
    },
  
    methods: {
      test () {
        this.showList = false;
      }
    },
    created() {

    },
  
  }
  
  </script>
  <style lang="scss">
    .top {
      display: flex;
      position: absolute;
      width: 350px;
      height: 125px;
      left: 185px;
      top: 60px;
      background-image: url(../assets/top-service.png);
      z-index: 2;
    }

    .topText {
      display: flex;
      position: absolute;
      font-size: 60px;
      color: #FFFF00;
      width: 320px;
      height: 95px;
      margin: 15px;
      align-items: center;
      justify-content: center; 
      /* 置中 */
    }
    
    .box {
      display: flex;
      position: absolute;
      width: 1600px;
      height: 850px;
      left: 160px;
      top: 170px;
      background-image: url(../assets/service-background.png);
    }

    .serviceLog {
      display: flex;
      position: absolute;
      width: 520px;
      height: 700px;
      left: 200px;
      top: 220px;
      background-image: url(../assets/service-log.png);
    }

    .lineId {
      display: flex;
      position: absolute;
      width: 900px;
      height: 180px;
      left: 760px;
      top: 260px;
      background-image: url(../assets/line.png);
    }

    .lineText {
      display: flex;
      position: absolute;
      width: 450px;
      height: 100px;
      top: 40px;
      color:#FFFF00;
      font-size: 70px;
      align-items: center;
      justify-content: center; 
    }

    .lineText2 {
      display: flex;
      position: absolute;
      width: 420px;
      height: 100px;
      top: 40px;
      left: 450px;
      font-size: 70px;
      align-items: center;
      justify-content: center; 
    }


    .serviceMessage {
      display: flex;
      position: absolute;
      width: 900px;
      height: 320px;
      left: 760px;
      top: 480px;
      background-image: url(../assets/message.png);
    }

    .messageText {
      display: flex;
      position: absolute;
      width: 840px;
      height: 260px;
      margin: 30px;
      font-size: 50px;
      color:#ffffff;
      align-items: center;
      justify-content: center; 
    }

    .open {
      display: flex;
      position: absolute;
      width: 350px;
      height: 100px;
      left: 1030px;
      top: 860px;
      background-image: url(../assets/open.png);
    }

    .x {
      display: flex;
      position: absolute;
      width: 110px;
      height: 110px;
      left: 1650px;
      top: 60px;
      background-image: url(../assets/x.png);
    }

  </style>