<template>
    <div >
        <v-container class=" text-xs-center mt-5">
            <v-layout>
              <v-flex class="pa-4">
                <v-card elevation=4 >
                  <v-card-title class="grey white--text">
                    <h1 >Contact</h1>
                  </v-card-title>
                  <v-card-text>
                    <v-form class="px-3" ref="form">
                      <v-text-field v-model="name" label="Name" prepend-icon="person" :rules="inputRules"></v-text-field>
                      <v-text-field v-model="email" label="Email" prepend-icon="mail"  :rules="inputRules"></v-text-field>
                      <v-textarea v-model="message" label="Message" prepend-icon="edit"  :rules="inputRules"></v-textarea>
                    <v-spacer></v-spacer>

                      <v-btn color="grey" v-on:click="submit" class=" mx-0 mt-3" v-bind:loading="loading">
                        <span  class="white--text">Send</span>
                      </v-btn>
           
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
        </v-container>    
    </div>
</template>

<script>

import db from '@/firebase'

export default {
    data(){
        return{
            name:'',
            email:'',
            message:'',
            inputRules:[
              v => !!v || 'This field is required',
              v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading:false,
            
        }
    },
    methods:{
        submit(){
            
             if(this.$refs.form.validate()) {
                  this.loading = true
                  
                  const msg = { 
                    name: this.name,
                    email: this.email,
                    message: this.message,
                 }
                 db.collection('messages').add(msg).then(() => {
                 this.loading = false;
                 

          }
        )
      }
    }
        
    }
}
</script>

