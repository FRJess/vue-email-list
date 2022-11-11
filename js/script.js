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
      numberOfMail: 10,
      isLoaded: false,
    }

  },

  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then( result => {
        console.log(result.data);
        this.mails.push(result.data.response);
        this.isLoaded = true;
      })
    },

    mailList(number){
      for (i = 0; i < number; i++){
        this.getApi();
      }

    }

  },



  mounted(){
    this.mailList(this.numberOfMail);

  }
}).mount('#app')