<template>
  <div class="set">
    <img alt="Back ground" src="../assets/set.png">
    <div v-for="(item, index) in listArr" :key="item + '_' + index" :class="'setList' + (index + 2)"
      @click="item.listBtn">
    </div>
    <!-- <div class="setList1"></div>    
    <div class="setList2" @click="accountButton"></div>   
    <div class="setList3"></div>   
    <div class="setList4"></div>    -->
  </div>
  <accontSet  v-show="showAccountSet" @close="accountButton"></accontSet>
  <!-- v-show="showAccountSet" @close="accountButton" -->
</template>
<script>
// <input type="text" v-bind:value="firstnum" name=item />
import accontSet from '../components/accontSet.vue'
export default {
  
  components: {
    accontSet,
  },

  data () {
    return {
      showAccountSet: false,
      listArr: [
        {
          listBtn: this.accountButton
        },
        {
          listBtn:''
        },
        {
          listBtn:''
        }
      ],
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
    // for (let ii = 2; ii <= 4; ii++) {
    //   this.listArr.push(ii);
    // }

    // console.log('list created to do:', this.listArr);
  },

}

</script>
<style lang="scss">
@import '../css/translateLength';

body{
  margin: 0;
}

$set-width: transLength(350);
$set-height: transLength(100);

.set {
  display: flex;
  position: absolute;
  width: transLength(450);
  height: transLength(650);
  left: transLength(1520);
  top: transLength(100);
  background-size: contain;
  background-position: center;
}

.setList1 {
  position: absolute;
  width: transLength(100);
  height: transLength(100);
  left: transLength(240);
  top: transLength(20);
  background-image: url(../assets/list.png);
  background-size: contain;
  background-position: center;
}

@for $j from 2 through 4{
  .setList#{$j}{
    position: absolute;
    width: $set-width;
    height: $set-height;
    left: transLength(25);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}

.setList2 {
  top: transLength(180);
  background-image: url(../assets/account.png);
  cursor: pointer;
}

.setList3 {
  top: transLength(340);
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  border-radius: 30px;
  background-image: url(../assets/voice.png);
}

.setList4 {
  top: transLength(500);
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  border-radius: 30px;
  background-image: url(../assets/signout.png);
}

</style>