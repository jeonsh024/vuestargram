<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="`background-image:url( ${포스팅.userImage} )`" ></div>
      <span class="profile-name">{{포스팅.name}}</span>
    </div>

    <div :class="[`post-body`, 포스팅.filter]" :style="'background-image:url(' + 포스팅.postImage + ')'"></div>
    <!-- <div class="post-body" :style="`background-image:url( ${포스팅.postImage} )`"></div> --> <!-- //신문법 -->

    <div class="post-content">
      <p>{{포스팅.likes}} Likes</p>
      <p>
        <strong>{{포스팅.name}}</strong> {{포스팅.caption}}
      </p>
      <p class="date">{{포스팅.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        포스팅: Object,
    }
};
</script>

<style>
.post {
width: 100%;
}
.profile {
background-image: url('https://placeimg.com/100/100/arch');
width: 30px;
height: 30px;
background-size: 100%;
border-radius: 50%;
float: left;
}
.profile-name {
display: block;
float: left;
padding-left: 10px;
padding-top: 7px;
font-size: 14px;
}
.post-header {
height: 30px;
padding: 10px;
}
.post-body {
background-image: url('https://placeimg.com/640/480/animals');
height: 450px;
background-position: center;
background-size: cover;
}
.post-content {
padding-left: 15px;
padding-right: 15px;
font-size: 14px;
text-align: left;
}
.date {
font-size: 11px;
color: grey;
margin-top: -8px;
}
</style>