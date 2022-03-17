<template>
  <div class="home">
    
    <simple-button label="Hola Mundo" @click="hello">

    </simple-button>
  </div>
</template>

<script>
import AxiosService from '../services/AxiosService'

export default {
  name: 'HomeView',
  data () {
    return {
      
    }
  },
  methods: {
    async hello(){
      let response = await AxiosService.get('/example/hello-world')
      return response.data.message
    }
  },
}
</script>

<style scoped>
  .home{
    display:flex;
    justify-content:center;
    align-items:center;
  }
</style>