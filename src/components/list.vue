<template>
  <div class="set">
    <img alt="Back ground" src="../assets/set.png">
    <!-- <div v-for="(item, index) in arr" :key="item + '_' + index" :class="'setList' + item "></div> -->
    <div class="setList1"></div>>   
    <div class="setList2" @click="accountButton"></div>>   
    <div class="setList3"></div>>   
    <div class="setList4"></div>>   
  </div>
  <accontSet v-show="showAccountSet"></accontSet>
</template>
<script>
// <input type="text" v-bind:value="firstnum" name=item />
import accontSet from '../components/accontSet.vue'
export default {
  name: 'App',
  components: {
    accontSet,
  },

  data () {
    return {
      arr: [],
      showAccountSet: false,
    }
  },

  watch: {

  },

  computed: {

  },

  methods: {
    accountButton () {
    this.showAccountSet = !this.showAccountSet; //將布林值變成反向
    console.log('123');
  },

  },
  created() {
    for (let ii = 1; ii <= 4; ii++) {
      this.arr.push(ii);
    }
  },

}

</script>
<style lang="scss">
@import '../css/translateLength';

  .set {
    display: flex;
    position: absolute;
    width: transLength(400);
    height: transLength(650);
    left: transLength(1520);
    top: transLength(100);
  }

  .setList1 {
    width: transLength(100);
    height: transLength(100);
    position: absolute;
    left: transLength(240);
    top: transLength(20);
    background-image: url(../assets/list.png);
  }

  .setList2 {
    width: transLength(350);
    height: transLength(100);
    position: absolute;
    left: transLength(25);
    top: transLength(180);
    background-image: url(../assets/account.png);
  }

  .setList3 {
    width: transLength(350);
    height: transLength(100);
    position: absolute;
    left: transLength(25);
    top: transLength(340);
    background-image: url(../assets/voice.png);
  }

  .setList4 {
    width: transLength(350);
    height: transLength(100);
    position: absolute;
    left: transLength(25);
    top: transLength(500);
    background-image: url(../assets/signout.png);
  }

</style>