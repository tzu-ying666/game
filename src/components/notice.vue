<template>
  <div>
    <div class="top click">
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
      <div v-for="(item, index) in formArr" :key="item + '_' + index" :class="'noticeLineText' + (index)" >
        <div class="formText4">{{ item.num }}</div>
        <div class="formText5">{{ item.title }}</div>
        <div class="formText6" @click="serviceAction">{{item.text}}</div>
      </div>
      <!-- <div >
        <div class="formText4">1</div>
        <div class="formText5">新年快樂</div>
        <div class="formText6" @click="serviceAction">祝預秀網路員工新年快樂</div>
      </div> -->
    </div>
    <!-- <div class="enter" @click="testx"></div> -->
    <div class="gray"></div>
    <div class="gray1"></div>
    <div class="gray2"></div>
    <!-- <div class="bar"></div>
    <div class="bar1"></div> -->
    <div class="line"></div>
    <div class="line1"></div>
    <div class="x" @click="testx"></div>
  </div>
  <textBox v-show="serviceVisible"></textBox>
</template>
<script>
import vuex from 'vuex';
import textBox from '../components/textBox.vue';

export default {
components: {
  textBox
},

data () {
  return {
    showMessage: false,
    arr: [],
    formArr: [
      {
        num: 1,
        title: '新年快樂',
        text: '祝預秀網路員工新年快樂',
      },
      {
        num: 2,
        title: '元宵快樂',
        text: '祝預秀網路員工元宵快樂',
      },
      // {
      //   num: 3,
      //   title: '端午快樂',
      //   text: '祝預秀網路員工端午快樂',
      // },
    ],
  }
},

watch: {

},

computed: {
  ...vuex.mapState([
    'serviceVisible'
  ]),

},

methods: {
  ...vuex.mapMutations([
    'serviceAction'
  ]),
  testx () {
    console.log('close');
    this.$emit('close');
  },
  test () {
    this.showMessage = true; //將布林值變成反向
    console.log(this.shoeMessage);
  },
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
  background-size: contain;
  background-position: center;
}

.enter {
  display: flex;
  position: absolute;
  width: transLength(350);
  height: transLength(100);
  left: transLength(785);
  top: transLength(860);
  background-image: url(../assets/enter.png);
  background-size: contain;
  background-position: center;
  cursor: pointer;
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

@for $i from 0 through 10{
  .noticeLineText#{$i}{
    display: flex;
    position: absolute;
    width: transLength(1350);
    height: transLength(80);
    top: $i * 110px;
    z-index: 1;
  }
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
  color: #ffff00;
  align-items: center;
  justify-content: center;
  cursor: pointer; 
}

</style>