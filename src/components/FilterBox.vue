<template>
  <div v-on:click="boxClick" v-bind:class="`filter-item ${필터하나}`" :style="`background-image: url(${업로드이미지})`">
     <slot></slot>
  </div>
</template>

<script>
import EventBus from './../EventBus.js'

export default {
    name: 'filterBox',
    methods: {
        boxClick(){
            EventBus.$emit('select-filter', this.필터하나);
        }
    },
    props: {
        업로드이미지: Object,
        필터하나: String,
    },

}
</script>


<style>
.filter-item {
width: 100px;
height: 100px;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
background-position : center;
}
</style>