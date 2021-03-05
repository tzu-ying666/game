<template>
  <div>
    <div v-for="(item, index) in topArr" :key="item + '_' + index" 
      :class="[index > 0 ? 'top' + (index) : 'top', currentClickItem === item.name ? 'click' : 'unclick']"
      @click="changeTop(item.name)"> {{ item.text }}
    </div>
    <!-- <div class="top" @click="changeTop('accountSet')" :class="currentClickItem === 'accountSet' ? 'click' : 'unclick'">
      <div class="topText" >帳戶設定</div>
    </div>
    <div class="top1" @click="changeTop('changePw')" :class="currentClickItem === 'changePw' ? 'click' : 'unclick'">
      <div class="topText1">更改密碼</div>
    </div>
    <div class="top2" @click="changeTop('changePicture')" :class="currentClickItem === 'changePicture' ? 'click' : 'unclick'">
      <div class="topText1">更換照片</div>
    </div> -->
    <div class="box"></div>
        <div v-show="currentClickItem === 'accountSet'">
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
        <div class="enter" @click="testx"></div>
      </div>
      <div v-show="currentClickItem === 'changePw'">
        <div class="passChange"></div>
        <!-- <div v-for="(item, index) in arr" :key="item + '_' + index" :class="'passText' + item "></div> -->
        <div class="passText1">舊密碼</div>
        <div class="passText1-1">請輸入</div>
        <div class="passText2">新密碼</div>
        <div class="passText2-1">請輸入</div>
        <div class="passText3">確認密碼</div>
        <div class="passText3-1">請輸入</div>
        <div class="cancel" @click="testx"></div>
        <div class="save" @click="testx"></div>
      </div>
      <div v-show="currentClickItem === 'changePicture'">
        <div class="changePictureBox"></div>
        <div class="changePictureHead">選擇<br>圖片</div>
        <div class="changePictureText1">會員 I D : ABCDEFIJ</div>
        <div class="changePictureText2">會員暱稱 : 暱稱ID八個字</div>
        <div class="cancel" @click="testx"></div>
        <div class="save" @click="testx"></div>
      </div>  
    <div class="x" @click="testx"></div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      arr: [],
      currentClickItem: 'accountSet', // accountSet, changePw, changePicture
      set: true,
      pw: false,
      picture: false,
      topArr: [
        {
          // topNum: this.changeTop('accountSet'),
          name: 'accountSet',
          text: '帳戶設定'
        },
        {
          // topNum: this.changeTop('changePw'),
          name: 'changePw',
          text: '更改密碼'
        },
        {
          // topNum: this.changeTop('changePicture'),
          name: 'changePicture',
          text: '更換照片'
        }
      ],
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
    },
    
    changeTop (changeItemName) {
      console.log('get change top: ', changeItemName);
      this.currentClickItem = changeItemName;
      // if (this.currentClickItem === 'accountSet') {
      //   this.set = true;
      //   this.picture = false;
      //   this.pw = false;
      // }else if (this.currentClickItem === 'changePw') {
      //   this.pw = true;
      //   this.set = false;
      //   this.picture = false;
      // }else  if (this.currentClickItem === 'changePicture') {
      //   this.picture = true;
      //   this.set = false;
      //   this.pw = false;
      // }
    }
  },

  created() {
    for (let jj =1; jj <= 6; jj++) {
      this.arr.push(jj);
    }
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
  font-size: transLength(60);
  align-items: center;
  justify-content: center; 
  // background-image: url(../assets/duckBox.png);
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

.top2 {
  display: flex;
  position: absolute;
  width: transLength(350);
  height: transLength(125);
  left: transLength(885);
  top: transLength(60);
  font-size: transLength(60);
  align-items: center;
  justify-content: center; 
  background-image: url(../assets/duckBox.png);
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

.accountBox {
  display: flex;
  position: absolute;
  width: transLength(700);
  height: transLength(490);
  left: transLength(240);
  top: transLength(260);
  background-image: url(../assets/accountBox.png);
  background-size: contain;
  background-position: center;
}

.accountBox1 {
  display: flex;
  position: absolute;
  width: transLength(700);
  height: transLength(490);
  left: transLength(980);
  top: transLength(260);
  background-image: url(../assets/accountBox1.png);
  background-size: contain;
  background-position: center;
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
  background-size: contain;
  background-position: center; 
}

.coinSilver {
  display: flex;
  position: absolute;
  width: transLength(420);
  height: transLength(120);
  left: transLength(1120);
  top: transLength(460);
  background-image: url(../assets/silverCoin.png);
  background-size: contain;
  background-position: center;
}

.point {
  display: flex;
  position: absolute;
  width: transLength(530);
  height: transLength(90);
  left: transLength(1065);
  top: transLength(620);
  background-image: url(../assets/point.png);
  background-size: contain;
  background-position: center;
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
  background-size: contain;
  background-position: center;
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

.passChange {
  display: flex;
  position: absolute;
  width: transLength(1000);
  height: transLength(510);
  left: transLength(460);
  top: transLength(250);
  background-image: url(../assets/changePw.png);
  background-size: contain;
  background-position: center;
}

.cancel {
  display: flex;
  position: absolute;
  width: transLength(350);
  height: transLength(100);
  left: transLength(510);
  top: transLength(860);
  background-image: url(../assets/cancel.png);
  background-size: contain;
  background-position: center;
  cursor: pointer;
}

.save {
  display: flex;
  position: absolute;
  width: transLength(350);
  height: transLength(100);
  left: transLength(1060);
  top: transLength(860);
  background-image: url(../assets/save.png);
  background-size: contain;
  background-position: center;
  cursor: pointer;
}

.passText1 {
  position: absolute;
  width: transLength(290);
  height: transLength(100);
  left: transLength(470);
  top: transLength(305);
  font-size: transLength(60);
  color: #ffffff;
}

.passText1-1 {
  display: flex;
  position: absolute;
  width: transLength(650);
  height: transLength(100);
  left: transLength(760);
  top: transLength(305);
  font-size: transLength(40);
  background-color: #ffffff;
  color: #A0A0A0;
  text-align:left;
  align-items: center;
}

.passText2 {
  position: absolute;
  width: transLength(290);
  height: transLength(100);
  left: transLength(470);
  top: transLength(455);
  font-size: transLength(60);
  color: #ffffff;
}

.passText2-1 {
  display: flex;
  position: absolute;
  width: transLength(650);
  height: transLength(100);
  left: transLength(760);
  top: transLength(455);
  font-size: transLength(40);
  background-color: #ffffff;
  color: #A0A0A0;
  text-align:left;
  align-items: center;
}

.passText3 {
  position: absolute;
  width: transLength(290);
  height: transLength(100);
  left: transLength(470);
  top: transLength(605);
  font-size: transLength(60);
  color: #ffffff;
}

.passText3-1 {
  display: flex;
  position: absolute;
  width: transLength(650);
  height: transLength(100);
  left: transLength(760);
  top: transLength(605);
  font-size: transLength(40);
  background-color: #ffffff;
  color: #A0A0A0;
  text-align:left;
  align-items: center;
}

.changePictureBox {
  display: flex;
  position: absolute;
  width: transLength(700);
  height: transLength(490);
  left: transLength(610);
  top: transLength(260);
  background-image: url(../assets/accountBox.png);
  background-size: contain;
  background-position: center;
}

.changePictureText1 {
  position: absolute;
  left: transLength(745);
  top: transLength(570);
  font-size: transLength(40);
  color: #ffffff;
}

.changePictureText2 {
  position: absolute;
  left: transLength(745);
  top: transLength(650);
  font-size: transLength(40);
  color: #ffffff;
}

.changePictureHead {
  display: flex;
  position: absolute;
  width: transLength(230);
  height: transLength(230);
  left: transLength(848);
  top: transLength(300);
  background-color: #000032;
  background-image: url(../assets/head.png);
  background-size: contain;
  background-position: center;
  color: #ffff00;
  font-size: 60px;
  align-items: center;
  justify-content: center; 
}
  
  </style>