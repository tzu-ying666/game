<template>
  <div class="box0">
    <!-- <img alt="Back ground" src="./assets/background.png"> -->
  </div>
  <div class="box1">
    <ul>
      <!-- <li><a href="http://www.google.com.tw" title="Google" target="_blank">{{ mag }}</a></li> -->
      <li><a href="http://www.google.com.tw" title="Google" target="_blank">{{ greeting }}</a></li>
      <!-- <li>123</li> -->
    </ul>
  </div>
  <div class="box2">
  </div>
  <div class="box3">
  </div>
  <div class="box4" @click="test"></div>
  <div v-for="(item, index) in gameList" :key="item + '_' + index" :class="'box' + item ">
    <div :class="'box' + item + '-1'"></div>
  </div>
  <!-- <div class="box5">
    <div class="box5-1"></div>
  </div>
  <div class="box6">
    <div class="box6-1"></div>
  </div>
  <div class="box7">
    <div class="box7-1"></div>
  </div>
  <div class="box8">
    <div class="box8-1"></div>
  </div>
  <div class="box9">
    <div class="box9-1"></div>
  </div> -->
  <div class="box10">
    <div class="b1"></div>
    <div class="b2">
      <div class="text">123,456,789</div>
    </div>
    <!-- <div v-for="(item, index) in arr" :key="item + '_' + index" :class="'b' + item "></div> -->
    <div class="b3"></div>
    <div class="b4"></div>
    <div class="b5"></div>
    <div class="b6"></div>
    <div class="b7" @click="test2"></div>
    <div class="b8" @click="test1"></div> 
    <div class="b9">ABCDEFG</div>
  </div>
  <list v-show="showList" ></list>
  <service v-show="showService" ></service>
  <notice v-show="showNotice" ></notice>
  <!-- <accontSet v-show="showAccountSet"></accontSet> -->
</template>

<script>
// import vue from 'vue';
import vuex from 'vuex';
import list from './components/list.vue'
import service from './components/service.vue'
import notice from './components/notice.vue'
// import accontSet from './components/accontSet.vue'

export default {
  name: 'App',
  components: {
    list,
    service,
    notice,
    // accontSet,
  },

  data() {
    return {
      arr: [],
      gameList: [],
      mag: "跑馬燈!!!!!!!!!!!!!!!!!!!!!!",
      intervalId: null,
      showList: false,
      showService: false,
      showNotice: false,
    }
  },

  watch: {},
  computed: {
    ...vuex.mapState([
      'greeting',
      'close'
    ]),
  },
  methods: {
    test () {
      this.showList = !this.showList; //將布林值變成反向
      console.log('123');
    },
      test1 () {
      this.showService = !this.showService; //將布林值變成反向
      console.log('123');
    },
      test2 () {
      this.showNotice = !this.showNotice; //將布林值變成反向
      console.log('123');
    },
 
  },

  created() {
    for (let ii = 3; ii <= 7; ii++) {
      this.arr.push(ii);
    }
    for (let jj =5; jj <= 9; jj++) {
      this.gameList.push(jj);
    }
    // this.lang();
  },
}

</script>

<style lang="scss">
@import './css/translateLength';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

$game-width: transLength(320);
$game-height: transLength(430);
$bottom-width: transLength(156);
$bottom-height: transLength(196);

body {
  margin: 0;
  width: transLength(1920);
  height: transLength(1080);
  overflow: hidden;
}

.box0 {
  position: absolute;
  width: transLength(1920);
  height: transLength(1080);
  z-index: -1;
  background-image: url(./assets/background.png);
}

.box1 {
  position: absolute;
  width:  transLength(1920);
  // height: transLength(80);
  height:  transLength(80);
  font-size:  transLength(60);
  background-color: black;
}

.box1 > ul {
	padding-left: 0;
  margin: 0;
	display: flex;
	list-style-type: none;
	animation: mag 5s linear infinite;
	position: absolute;
  z-index: 1;
}

.box1 > ul > li {
	white-space: nowrap;
	margin-right: 2em;
	font-weight: bold;
	color: yellow;
  z-index: 2;
}

@keyframes mag {
	0% {
		left: 100%;
		transform: translateX(0%);
	}
	100% {
		left: 0;
		transform: translateX(-100%);
	}
}

.box2 {
  position: absolute;
  // width: 1500px;
  // height: 340px;
  width: transLength(1500);
  height: transLength(340);
  left: transLength(210);
  z-index: 0;
  background-image: url(./assets/money..png);
  background-size: contain;
  background-position: center;
}

.box3 {
  position: absolute;
  width:  transLength(100);
  height:  transLength(100);
  top:  transLength(120);
  left:  transLength(50);
  background-image: url(./assets/home.png);
  background-size: contain;  
  // div裡的圖片
  background-position: center;
  // 圖片在div裡的位置 
}

.box4 {
  position: absolute;
  width:  transLength(100);
  height:  transLength(100);
  top:  transLength(120);
  left:  transLength(1760);
  background-image: url(./assets/list.png);
  background-size: contain;
  background-position: center;
  z-index: 2;
}

.box5 {
  position: absolute;
  width:  $game-width;
  height:  $game-height;
  top:  transLength(270);
  left:  transLength(50);
  background-image: url(./assets/box.png);
}

.box5-1 {
  width:  $game-width;
  height:  $game-height;
  top:  transLength(270);
  left:  transLength(50);
  background-image: url(./assets/game1.png);
  background-size: contain;
  background-position: center;
}

.box6 {
  position: absolute;
  width: $game-width;
  height: $game-height;
  top: transLength(270);
  left: transLength(425);
  background-image: url(./assets/box.png);
}

.box6-1 {
  width: $game-width;
  height: $game-height;
  top: transLength(270);
  left: transLength(425);
  background-image: url(./assets/game2.png);
  background-size: contain;
  background-position: center;
}

.box7 {
  display: flex;
  align-items: center;
  position: absolute;
  width: $game-width;
  height: $game-height;
  top: transLength(270);
  left: transLength(800);
  background-image: url(./assets/box.png);
  background-size: contain;
  background-position: center;
}

.box7-1 {
  width: $game-width;
  height: $game-width;
  background-image: url(./assets/benz.png);
  background-size: contain;
  background-position: center;
}

.box8 {
  display: flex;
  align-items: center;
  position: absolute;
  width: $game-width;
  height: $game-height;
  top: transLength(270);
  left: transLength(1175);
  background-image: url(./assets/box.png);
  background-size: contain;
  background-position: center;
}

.box8-1 {
  width: $game-width;
  height: $game-width;
  background-image: url(./assets/dragon.png);
  background-size: contain;
  background-position: center;
}

.box9 {
  display: flex;
  align-items: center;
  position: absolute;
  width: $game-width;
  height: $game-height;
  top: transLength(270);
  left: transLength(1550);
  background-image: url(./assets/box.png);
  background-size: contain;
  background-position: center;
}

.box9-1 {
  width: $game-width;
  height: $game-width;
  background-image: url(./assets/ele.png);
  background-size: contain;
  background-position: center;
}

.box10 {
  display: flex;
  position: absolute;
  width: transLength(1920);
  height: transLength(350);
  top: transLength(730);
  background-image: url(./assets/bottom.png);
  background-size: contain;
  background-position: center;
}

.b1 {
  position: absolute;
  width: transLength(230);
  height: transLength(230);
  margin-left: transLength(60);
  background-image: url(./assets/head.png);
  background-color: #000032;
  background-size: contain;
  background-position: center;
}

.b2 {
  position: absolute;
  width: transLength(420);
  height: transLength(120);
  left: $game-width;
  bottom: transLength(80);
  background-image: url(./assets/coin.png);
  background-size: contain;
  background-position: center;
  }

  .b3 {
  position: absolute;
  width: $bottom-width;
  height: $bottom-height;
  left: transLength(770);
  bottom: transLength(80);
  background: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  border-radius: 50px;
  background-image: url(./assets/friend.png);
  background-size: contain;
  background-position: center;
  }

  .b4 {
  position: absolute; 
  width: $bottom-width;
  height: $bottom-height;
  left: transLength(956);
  bottom: transLength(80);
  background: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  border-radius: 50px;
  background-image: url(./assets/give.png);
  background-size: contain;
  background-position: center;
  }

  .b5 {
  position: absolute;
  width: $bottom-width;
  height: $bottom-height;
  left: transLength(1142);
  bottom: transLength(80);
  background: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  border-radius: 50px;
  background-image: url(./assets/deposit.png);
  background-size: contain;
  background-position: center;
  }

  .b6 {
  position: absolute;
  width: $bottom-width;
  height: $bottom-height;
  left: transLength(1328);
  bottom: transLength(80);
  background: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  border-radius: 50px;
  background-image: url(./assets/record.png);
  background-size: contain;
  background-position: center;
  }

  .b7 {
  position: absolute;
  width: $bottom-width;
  height: $bottom-height;
  left: transLength(1514);
  bottom: transLength(80);
  background-image: url(./assets/notice.png);
  background-size: contain;
  background-position: center;
  }

  .b8 {
  position: absolute;
  width: $bottom-width;
  height: $bottom-height;
  left: transLength(1700);
  bottom: transLength(80);
  background-image: url(./assets/service.png);
  background-size: contain;
  background-position: center;
  }

  .b9 {
  position: absolute;
  width: transLength(230);
  height: transLength(60);
  left: transLength(60);
  bottom: transLength(60);
  background-color: black;
  font-size: transLength(35);
  color: #ffffff;
  }

  .text {
    position: absolute;
    left: transLength(130);
    top: transLength(50);
    font-size: transLength(45);
    color: #ffffff;
  }

</style>
