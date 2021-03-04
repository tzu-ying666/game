<template>
  <div>
    <div class="noticeMessage">
      <div class="noticeText">新年快樂</div>
    </div>
    <div class="messageEnter" @click="serviceAction"></div>  <!-- 從倉庫內拿serviceAction -->
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

  },

  methods: {
    ...vuex.mapMutations([
      'serviceAction'  //帶入倉庫的function
    ]),
  },

  created() {

  },

}

</script>

<style lang='scss'>
@import '../css/translateLength';
  .noticeMessage {
    position: absolute;
    width: transLength(900);
    height: transLength(500);
    left: transLength(510);
    top: transLength(290);
    background-image: url(../assets/noticeMessage.png);
    background-size: contain;
    background-position: center;
  }

  .messageEnter {
    position: absolute;
    width: transLength(350);
    height: transLength(100);
    left: transLength(785);
    top: transLength(660);
    background-image: url(../assets/enter.png);
    background-size: contain;
    background-position: center;
  }

  .noticeText {
    display: flex;
    position: absolute;
    width: transLength(350);
    height: transLength(100);
    top: transLength(150);
    left: transLength(270);
    font-size: transLength(50);
    color: #ffffff;
    align-items: center;
    justify-content: center; 
  }

</style>