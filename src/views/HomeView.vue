<template>
  <div class="home">
    
    <simple-button label="Hola Mundo" @click="hello">

    </simple-button>
    <simple-button label="SOCKET" @click="socket">

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
  mounted(){
    window.socket.ws()
  },
  methods: {
    async hello(){
      let response = await AxiosService.get('/example/hello-world')
      return response.data.message
    },
    socket(){
      //Simple Test
      AxiosService.post('/example/message',{
        'hola' : 'mundo'
      })
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