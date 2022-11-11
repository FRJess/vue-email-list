// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// **Bonus**
// Creare un loading e far comparire gli indirizzi email solamente quando sono stati TUTTI generati.

// VARIABLES DECLARATION AND INIZIALIZATION

// FUNCTIONS

// VUE

const {createApp} = Vue; 

createApp({

  data(){
    return{
      title: 'Mailing list',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mails: [],
      isLoaded: false,
      counter: 0,
    }

  },

  methods:{
    getApi(){
      this.isLoaded = false;
      this.mails = [];
      if(this.counter < 10){
        axios.get(this.apiUrl)
        .then( result => {
        // console.log(result.data);
          this.mails.push(result.data.response);
        })
        return this.getApi (++this.counter)
      }
      this.isLoaded = true;
      this.counter = 0;
    },
  
  },
  
  mounted(){
    this.getApi();
  }
}).mount('#app')