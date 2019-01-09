<template>
  <div >
   
    <div id="portfolio" class="mt-4">
      <v-layout row wrap class="home text-xs-center">
        <v-flex xs12 sm12 lg12>
          <p class=" font-weight-light mt-5 " style="font-size:35px;">Certifications</p>
          <v-divider ></v-divider>
        </v-flex>
      </v-layout>

    </div>

    <v-container>
      <v-timeline dense>
        <v-timeline-item
        v-for="certificate in certificates"
        v-bind:color="certificate.color"
        :key="certificate.heading"
        small
        >
          <v-card
          light
          >
            <v-card-title class="title"  >
              <p class="font-weight-light" style="font-size:24px;">{{certificate.heading}} </p>
            </v-card-title>
            <v-card-text class="white text--primary "  style="font-size:20px;">
              <p class="font-weight-thin" >{{certificate.content}}</p>
              <v-btn round small outline color="green" v-bind:href="certificate.link" depressed fab>
                <v-icon  color="success">arrow_forward</v-icon>
              </v-btn  >
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>

  </div>

</template>

<script>

export default {
 
  data(){
    return{
    
      certificates: [
        { heading: 'Neural Networks and Deep Learning',color:'purple lighten-2',content:
                    'An online non-credit course authorized by deeplearning.ai and offered through Coursera',
                    link: "https://drive.google.com/open?id=1L0VmtdsiIGKOieBzM1UcylJFve19wbzu" },
        { heading: 'Android Developer Intern at ATG',color:'black lighten-1',content:'Letter of recommendation', 
                    link: 'https://drive.google.com/open?id=1N8DddD1cIhU3OiuoEIdKxmijvP8dF446' },
        { heading: 'Hyperparameter tuning, Regularization and'+
                    'Optimization',color:'cyan lighten-1' ,content:'An online non-credit course authorized by deeplearning.ai and offered through Coursera',
                    link: 'https://drive.google.com/open?id=1WHjqT0p02KqUAOKuzwcB37ViIFDhcXZy' },
        { heading: 'Structuring Machine Learning Projects',color:'red lighten-1',content:'An online non-credit course authorized by deeplearning.ai and offered through Coursera', 
                    link: 'https://drive.google.com/open?id=1291oU2Y9f0i9wxV1350ROB_PaFNXuHSU' },
        { heading: 'Convolutional Neural Networks',color:'green lighten-1',content:'An online non-credit course authorized by deeplearning.ai and offered through Coursera', 
                    link: 'https://drive.google.com/open?id=1QYSLgO_SOLJg2L-kENGwRSg-MQglqW7s' },
        { heading: 'Blockchain Hackathon',color:'orange lighten-1',content:'Awarded for outstanding performance and exemplary contribution on'+
                    'TechGig Code Gladiators 2018', 
                    link: 'https://drive.google.com/open?id=1zjtaCik1mznsecP19hwND8ImD9OTiYsA' },
        { heading: 'Sequence Models',color:'yellow lighten-1',content:'An online non-credit course authorized by deeplearning.ai and offered through Coursera', 
                    link: 'https://drive.google.com/open?id=1OkworEJNOGXB9pNY50jnEYMTJfuOP3Zm' },
       
      ]
    }
  },
  
}
</script>

