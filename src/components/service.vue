<template>
  <div>
    <div class="top click">
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
    <div class="x" @click="serviceAction"></div>
  </div>
  
  </template>
  <script>
  // <input type="text" v-bind:value="firstnum" name=item />
  import vuex from 'vuex';
  export default {
    data () {
      return {
      }
    },
  
    watch: {
  
    },
  
    computed: {
      ...vuex.mapState([
      'close'
    ]),
    },
  
    methods: {
      ...vuex.mapMutations([
        'serviceAction'
      ]),
    },
    created() {

    },
  
  }
  
  </script>
<style lang="scss">
  @import '../css/translateLength';
.top {
  display: flex;
  position: absolute;
  width: transLength(350);
  height: transLength(125);
  left: transLength(185);
  top: transLength(60);
  font-size: transLength(60);
  align-items: center;
  justify-content: center; 
  /* background-image: url(../assets/top-service.png); */
  background-size: contain;
  background-position: center;
  cursor: pointer;

  &.click {
    background-image: url(../assets/top-service.png);
    z-index: 2;
    color: #FFFF00;
  }

  &.unclick {
    background-image: url(../assets/duckBox.png);
    color: #ffffff;
  }
}

.topText {
  display: flex;
  position: absolute;
  font-size: transLength(60);
  width: transLength(320);
  height: transLength(95);
  margin: transLength(15);
  /* 置中 */
  align-items: center;
  justify-content: center; 
}

.box {
  display: flex;
  position: absolute;
  width: transLength(1600);
  height: transLength(850);
  left: transLength(160);
  top: transLength(170);
  background-image: url(../assets/service-background.png);
  background-size: contain;
  background-position: center;
}

.serviceLog {
  display: flex;
  position: absolute;
  width: transLength(520);
  height: transLength(700);
  left: transLength(200);
  top: transLength(220);
  background-image: url(../assets/service-log.png);
  background-size: contain;
  background-position: center;
}

.lineId {
  display: flex;
  position: absolute;
  width: transLength(900);
  height: transLength(180);
  left: transLength(760);
  top: transLength(260);
  background-image: url(../assets/line.png);
  background-size: contain;
  background-position: center;
}

.lineText {
  display: flex;
  position: absolute;
  width: transLength(450);
  height: transLength(100);
  top: transLength(40);
  color:#FFFF00;
  font-size: transLength(70);
  align-items: center;
  justify-content: center; 
}

.lineText2 {
  display: flex;
  position: absolute;
  width: transLength(420);
  height: transLength(100);
  top: transLength(40);
  left: transLength(450);
  font-size: transLength(70);
  align-items: center;
  justify-content: center; 
}


.serviceMessage {
  display: flex;
  position: absolute;
  width: transLength(900);
  height: transLength(320);
  left: transLength(760);
  top: transLength(480);
  background-image: url(../assets/message.png);
  background-size: contain;
  background-position: center;
}

.messageText {
  display: flex;
  position: absolute;
  width: transLength(840);
  height: transLength(260);
  margin: transLength(30);
  font-size: transLength(50);
  color:#ffffff;
  align-items: center;
  justify-content: center; 
}

.open {
  display: flex;
  position: absolute;
  width: transLength(350);
  height: transLength(100);
  left: transLength(1030);
  top: transLength(860);
  background: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  background-image: url(../assets/open.png);
  background-size: contain;
  background-position: center;
}

.x {
  display: flex;
  position: absolute;
  width: transLength(110);
  height: transLength(110);
  left: transLength(1650);
  top: transLength(60);
  background-image: url(../assets/x.png);
  background-size: contain;
  background-position: center;
  cursor: pointer;
}
</style>