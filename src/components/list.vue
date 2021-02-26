<template>
  <div class="set">
    <img alt="Back ground" src="../assets/set.png">
    <div v-for="(item, index) in arr" :key="item + '_' + index" :class="'setList' + item "></div>   
  </div>
</template>
<script>
    // <input type="text" v-bind:value="firstnum" name=item />

export default {
  data () {
    return {
      arr: [],
    }
  },

  watch: {

  },

  computed: {

  },

  methods: {

  },
  created() {
    for (let ii = 1; ii <= 4; ii++) {
      this.arr.push(ii);
    }
  },

}

</script>
<style>
  .set {
    display: flex;
    position: absolute;
    width: 400px;
    height: 650px;
    left: 1520px;
    top: 100px;
  }

  .setList1 {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 240px;
    top: 20px;
    background-image: url(../assets/list.png);
  }

  .setList2 {
    width: 350px;
    height: 100px;
    position: absolute;
    left: 25px;
    top: 180px;
    background-image: url(../assets/account.png);
  }

  .setList3 {
    width: 350px;
    height: 100px;
    position: absolute;
    left: 25px;
    top: 340px;
    background-image: url(../assets/voice.png);
  }

  .setList4 {
    width: 350px;
    height: 100px;
    position: absolute;
    left: 25px;
    top: 500px;
    background-image: url(../assets/signout.png);
  }

</style>