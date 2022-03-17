<template>
    <div class="content">
        <button @click="$emit('click')">
            {{label}}
        </button>
    </div>
    
</template>

<script>

export default {
  name: 'SimpleButton',
  props: {
      label: String,

  }
}
</script>

<style scoped>
    .content {
        position: relative;
        width: 180px;
        height: 55px;
        background-color: #090221;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:30px;
        overflow: hidden;
    }
    .content::before, .content::after {
        content: "";
        position: absolute;
        top: -130%;
        width: 100px;
        height: 100px;
        background-color: #005AFE;
        transform-origin: right bottom;
        transition: .5s;
    }
    .content::before{
        left: -5%;
    }
    .content::after{
        right: -5%;
    }
    .content:hover:before{
        transform: rotate(-90deg);
    }
    .content:hover:after{
        transform: rotate(270deg);
    }
    .content button{
        position: relative;
        z-index: 1;
        width: 175px;
        height: 50px;
        border-radius: 30px;
        outline: none;
        border: none;
        background-color: #fff;
        color: #090221;
        cursor: pointer;
        font-size: 1.1rem;
        font-family: 'Alata',sans-serif;
        text-transform: 'uppercase';
        letter-spacing:2px;
    }
</style>