<template>
  <div class="body">
    <!-- <Post v-bind:포스팅="포스팅들[0]"/>
    <Post v-bind:포스팅="포스팅들[1]"/>
    <Post v-bind:포스팅="포스팅들[2]"/>-->

    <!-- <button v-on:click="$emit('용돈','50000')">버튼</button> -->

    <div v-if="지금몇번째탭 == 0">
      <Post v-for="(포스팅,i) in 포스팅들" v-bind:포스팅="포스팅" v-bind:key="i" />
    </div>

    <div v-if="지금몇번째탭 == 1">
      <div v-bind:class="`upload-image ${선택한필터}`" :style="`background-image: url(${업로드이미지})`"></div>
      <div class="filters">
        <FilterBox v-bind:필터하나="필터하나" v-bind:업로드이미지="업로드이미지" v-for="(필터하나, i) in 필터들" :key="i" />
        <p>{{필터하나}}</p>
      </div>
    </div>

    <div v-if="지금몇번째탭 == 2">
      <div :class="[`upload-image`, 선택한필터]" :style="`background-image: url(${업로드이미지})`"></div>
      <div class="write">
        <textarea v-on:input="$emit('입력', $event.target.value)" class="write-box"></textarea>
      </div>
    </div>

  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  name: "body",
  data(){
    return{
      필터들:[ "normal", "clarendon", "gingham", "moon", "lark", "reyes", "juno", "slumber", "aden", "perpetua", "mayfair", "rise", "hudson", "valencia", "xpro2", "willow", "lofi", "inkwell", "nashville"]

    }
  },
  components: {
    Post,
    FilterBox,
  },
  props: {
    선택한필터: String,
    포스팅들: Array,
    지금몇번째탭 : Number,
    업로드이미지: Object,
  }
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
  background-position: center;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>