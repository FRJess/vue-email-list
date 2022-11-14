// VUE

const {createApp} = Vue; 

createApp({

  // VARIABLES DECLARATION AND INIZIALIZATION
  data(){
    return{
      title: 'Mailing list',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mails: [],
    }

  },

  // FUNCTIONS
  methods:{
    getApi(){

      //cycle to add 10 mails
      for(let i = 1; i <= 10; i++){
        axios.get(this.apiUrl)
        .then( result => {
        console.log(result.data);
          this.mails.push(result.data.response);
        })
      }
    },
  
  },
  
  mounted(){
    this.getApi();
  }
}).mount('#app')