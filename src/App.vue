<template>
  <div class="box0">
    <img alt="Back ground" src="./assets/background.png">
  </div>
  <div class="box1">
    <ul>
      <li><a href="http://www.google.com.tw" title="Google" target="_blank">{{ mag }}</a></li>
      <!-- <li>123</li> -->
    </ul>
  </div>
  <div class="box2">
    <img alt="Money" src="./assets/money..png">
  </div>
  <div class="box3">
    <img alt="Home" src="./assets/home.png">
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
      <div class="text">123,456,789</div>>
    </div>
    <div v-for="(item, index) in arr" :key="item + '_' + index" :class="'b' + item "></div>
    <!-- <div class="b3"></div>
    <div class="b4"></div>
    <div class="b5"></div>
    <div class="b6"></div>
    <div class="b7"></div>
    <div class="b8"></div> -->
    <div class="b9">ABCDEFG</div>
  </div>

  <list></list>
</template>

<script>
import list from './components/list.vue'

export default {
  name: 'App',
  components: {
    list
  },

  data() {
    return {
      arr: [],
      gameList: [],
      mag: "跑馬燈!!!!!!!!!!!!!!!!!!!!!!",
      intervalId: null,
    }
  },

  watch: {},
  computed: {},
  methods: {
    test () {
      console.log('123');
    },
    lang() {
      if(this.intervalId != null) return; 
      this.intervalId = setInterval(() => {
      //得到第一個字元
      var start = this.mag.substring(0,1)
      //得到最後一個字元
      var end = this.mag.substring(1)
      //後面與前面字元連接
      this.mag = end + start
    },400)
  },

  },

  created() {
    for (let ii = 3; ii <= 8; ii++) {
      this.arr.push(ii);
    }
    for (let jj =5; jj <= 9; jj++) {
      this.gameList.push(jj);
    }
    // this.lang();
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

.box0 {
  position: absolute;
  width: 1920px;
  height: 1080px;
  z-index: -1;
}

.box1 {
  position: absolute;
  width: 1920px;
  height: 80px;
  font-size: 60px;
  background-color: black;
}

.box1 > ul {
	padding-left: 0;
  margin: 0;
	display: flex;
	list-style-type: none;
	animation: mag 15s linear infinite;
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
  width: 1500px;
  height: 340px;
  left: 210px;
  z-index: 0;
}

.box3 {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 200px;
  left: 60px;
}

.box4 {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 200px;
  left: 1760px;
  background-image: url(./assets/list.png);
  background-size: contain;
  background-position: center;
}

.box5 {
  position: absolute;
  width: 320px;
  height: 430px;
  top: 350px;
  left: 50px;
  background-image: url(./assets/box.png);
}

.box5-1 {
  width: 320px;
  height: 430px;
  top: 350px;
  left: 50px;
  background-image: url(./assets/game1.png);
  background-size: contain;
  background-position: center;
}

.box6 {
  position: absolute;
  width: 320px;
  height: 430px;
  top: 350px;
  left: 425px;
  background-image: url(./assets/box.png);
}

.box6-1 {
  width: 320px;
  height: 430px;
  top: 350px;
  left: 425px;
  background-image: url(./assets/game2.png);
  background-size: contain;
  background-position: center;
}

.box7 {
  display: flex;
  align-items: center;
  position: absolute;
  width: 320px;
  height: 430px;
  top: 350px;
  left: 800px;
  background-image: url(./assets/box.png);
  background-size: contain;
  background-position: center;
}

.box7-1 {
  width: 320px;
  height: 320px;
  background-image: url(./assets/benz.png);
  background-size: contain;
  background-position: center;
}

.box8 {
  display: flex;
  align-items: center;
  position: absolute;
  width: 320px;
  height: 430px;
  top: 350px;
  left: 1175px;
  background-image: url(./assets/box.png);
  background-size: contain;
  background-position: center;
}

.box8-1 {
  width: 320px;
  height: 320px;
  background-image: url(./assets/dragon.png);
  background-size: contain;
  background-position: center;
}

.box9 {
  display: flex;
  align-items: center;
  position: absolute;
  width: 320px;
  height: 430px;
  top: 350px;
  left: 1550px;
  background-image: url(./assets/box.png);
  background-size: contain;
  background-position: center;
}

.box9-1 {
  width: 320px;
  height: 320px;
  background-image: url(./assets/ele.png);
  background-size: contain;
  background-position: center;
}

.box10 {
  display: flex;
  position: absolute;
  width: 1920px;
  height: 350px;
  top: 810px;
  background-image: url(./assets/bottom.png);
  background-size: contain;
  background-position: center;
}

.b1 {
  position: absolute;
  width: 230px;
  height: 230px;
  margin-left: 60px;
  background-image: url(./assets/head.png);
  background-color: black;
}

.b2 {
  position: absolute;
  width: 420px;
  height: 120px;
  left: 320px;
  bottom: 80px;
  background-image: url(./assets/coin.png);
  }

  .b3 {
  position: absolute;
  width: 156px;
  height: 196px;
  left: 770px;
  bottom: 80px;
  background-image: url(./assets/friend.png);
  background-size: contain;
  background-position: center;
  }

  .b4 {
  position: absolute; 
  width: 156px;
  height: 196px;
  left: 956px;
  bottom: 80px;
  background-image: url(./assets/give.png);
  background-size: contain;
  background-position: center;
  }

  .b5 {
  position: absolute;
  width: 156px;
  height: 196px;
  left: 1142px;
  bottom: 80px;
  background-image: url(./assets/deposit.png);
  background-size: contain;
  background-position: center;
  }

  .b6 {
  position: absolute;
  width: 156px;
  height: 196px;
  left: 1328px;
  bottom: 80px;
  background-image: url(./assets/record.png);
  background-size: contain;
  background-position: center;
  }

  .b7 {
  position: absolute;
  width: 156px;
  height: 196px;
  left: 1514px;
  bottom: 80px;
  background-image: url(./assets/notice.png);
  background-size: contain;
  background-position: center;
  }

  .b8 {
  position: absolute;
  width: 156px;
  height: 196px;
  left: 1700px;
  bottom: 80px;
  background-image: url(./assets/service.png);
  background-size: contain;
  background-position: center;
  }

  .b9 {
  position: absolute;
  width: 230px;
  height: 60px;
  left: 60px;
  bottom: 60px;
  background-color: black;
  font-size: 35px;
  color: #ffffff;
  }

  .text {
    position: absolute;
    left: 130px;
    top: 50px;
    font-size: 45px;
    color: #ffffff;
  }

</style>
