<template>
  <div id="app">
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>

      <ul class="header-button-right" v-on:click="지금몇번째탭 = 2" v-if="지금몇번째탭 == 1">
        <li>Next</li>
      </ul>
      <ul class="header-button-right" v-on:click="Publish" v-if="지금몇번째탭 == 2">
        <li>발행</li>
      </ul>

      <img src="./assets/logo.png" class="logo" />
    </div>

    <Body
      v-bind:선택한필터="선택한필터"
      v-bind:포스팅들="포스팅들"
      v-bind:지금몇번째탭="지금몇번째탭"
      v-bind:업로드이미지="업로드이미지"
      v-on:입력="작성한글 = $event"
    />

    <!-- 
  1. GET 읽을때 주소창에 뭘 때려받거나 / AJAX
  2. POSY 정보보낼때 

  $ajax(담을데이터, 경로)
    -->

    <button v-on:click="more">더보기</button>

    <!-- <div class="sample-box">임시 박스</div> -->

    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" v-on:change="upload" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>



<script>
import Body from "./components/Body.vue";
import Postdata from "./assets/postdata.js";
import EventBus from "./EventBus.js";
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      포스팅들: Postdata,
      지금몇번째탭: 0,
      업로드이미지: "",
      작성한글: "",
      선택한필터: "",
    };
  },
  mounted() {
    EventBus.$on("select-filter", (받은자료) => {
      /* eslint-disable */
      // console.log(받은자료);
      this.선택한필터 = 받은자료;
      // 받은 자료를 저거 body.vue의 이미지 div의 클래스명으로 삽입
    });
  },
  components: {
    Body,
  },
  methods: {
    more() {
      axios.get("https://yogoho210.github.io/postdata2.json").then((결과) => {
        /* eslint-disable */
        console.log(결과.data);

        this.포스팅들.push(결과.data);
      });
    },
    upload(e) {
      this.지금몇번째탭 = 1;

      let 파일들 = e.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(파일들[0]);
      reader.onload = (e) => {
        /* eslint-disable */
        // console.log(e.target.result);
        this.업로드이미지 = e.target.result;
      };
    },
    Publish() {
      this.지금몇번째탭 = 0;

      var 내데이터 = {
        name: "내이름",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.업로드이미지,
        likes: 36,
        date: "방금전",
        liked: false,
        caption: this.작성한글,
        filter: this.선택한필터,
      };
      this.포스팅들.unshift(내데이터);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
