<template>
  <div>
    <div class="home text-xs-center" id="home">
      <v-container fluid class="ma-0 pa-0">
        <v-parallax
          height="700"
          dark
          src="https://user-images.githubusercontent.com/29502161/50774755-1c67fb80-1249-11e9-9317-5e568fac468d.jpg"
        >
          <v-layout align-center column justify-center class="mt-5">
            <p class="font-weight-thin mt-2" style="font-size:50px;">I'm</p>
            <p class="font-weight-light mb-3" style="font-size:50px;">Himshikhar Gayan</p>
            <v-btn href="#portfolio" depressed medium color="white--text " class="mb-0" fab dark>
              <v-icon dark>arrow_downward</v-icon>
            </v-btn>
          </v-layout>
        </v-parallax>
      </v-container>
    </div>

    <div id="portfolio">
      <v-layout row wrap class="home text-xs-center mt-5">
        <v-flex xs12 sm12 lg12 class="mt-3">
          <p class="font-weight-thin mt-5" style="font-size:40px;">Some of my work</p>
          <v-divider class="mb-5"></v-divider>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm12 lg12>
          <p class="font-weight-thin mt-2 ml-4 mt-5" style="font-size:35px;">Android development</p>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 ma-5 v-for="android in androidCards" :key="android.name">
          <v-hover>
            <v-card class="pa-2" slot-scope="{hover}" :class="`elevation-${hover ? 8 : 2}`">
              <v-card-title>
                <div>
                  <h3 class="headline mb-0">{{android.heading}}</h3>
                  <div>{{android.content}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-layout align-center column justify-center>
                  <v-btn dark v-bind:href="android.link" medium color=" white--text">View</v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>

      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm12 lg12>
          <p class="font-weight-thin mt-2 ml-4" style="font-size:35px;">Technical Writing</p>
        </v-flex>
        <v-flex
          xs12
          sm6
          md4
          lg3
          ma-5
          v-for="techWriting in techWritingCards"
          :key="techWriting.heading"
        >
          <v-hover>
            <v-card class="pa-2" slot-scope="{hover}" :class="`elevation-${hover ? 8 : 2}`">
              <v-card-title>
                <div>
                  <h3 class="headline mb-2">{{techWriting.heading}}</h3>
                  <div>{{techWriting.content}}</div>
                </div>
              </v-card-title>
              <div class="text-center">
                <v-chip v-for="tag in techWriting.tags" :key="tag" class="ma-2">{{tag}}</v-chip>
              </div>
              <v-card-actions>
                <v-layout align-center column justify-center>
                  <v-btn v-bind:href="techWriting.link" medium dark class="white--text">Read More</v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>

      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm12 lg12>
          <p class="font-weight-thin mt-2 ml-4" style="font-size:35px;">Machine Learning</p>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 ma-5 v-for="machine in machineCards" :key="machine.heading">
          <v-hover>
            <v-card class="pa-2" slot-scope="{hover}" :class="`elevation-${hover ? 8 : 2}`">
              <v-card-title>
                <div>
                  <h3 class="headline mb-2">{{machine.heading}}</h3>
                  <div>{{machine.content}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-layout align-center column justify-center>
                  <v-btn v-bind:href="machine.link" medium dark class="white--text">View</v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>

      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm12 lg12>
          <p class="font-weight-thin mt-2 ml-4" style="font-size:35px;">Blockchain</p>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 ma-5 v-for="block in blockchainCards" :key="block.heading">
          <v-hover>
            <v-card class="pa-2" slot-scope="{hover}" :class="`elevation-${hover ? 8 : 2}`">
              <v-card-title>
                <div>
                  <h3 class="headline mb-2">{{block.heading}}</h3>
                  <div>{{block.content}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-layout align-center column justify-center>
                  <v-btn v-bind:href="block.link" medium dark class="white--text">View</v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>

      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm12 lg12>
          <p class="font-weight-thin mt-2 ml-4" style="font-size:35px;">iOS & watchOS</p>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 ma-5 v-for="block in iosCards" :key="block.heading">
          <v-hover>
            <v-card class="pa-2" slot-scope="{hover}" :class="`elevation-${hover ? 8 : 2}`">
              <v-card-title>
                <div>
                  <h3 class="headline mb-2">{{block.heading}}</h3>
                  <div>{{block.content}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-layout align-center column justify-center>
                  <v-btn v-bind:href="block.link" medium dark class="white--text">View</v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>

      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm12 lg12>
          <p class="font-weight-thin mt-2 ml-4" style="font-size:35px;">Flutter</p>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 ma-5 v-for="block in flutterCards" :key="block.heading">
          <v-hover>
            <v-card class="pa-2" slot-scope="{hover}" :class="`elevation-${hover ? 8 : 2}`">
              <v-card-title>
                <div>
                  <h3 class="headline mb-2">{{block.heading}}</h3>
                  <div>{{block.content}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-layout align-center column justify-center>
                  <v-btn v-bind:href="block.link" medium dark class="white--text">View</v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      techWritingCards: [
        {
          heading:
            "Working with Firebase ML Kit Barcode scanner and Room Database",
          content:
            "Extract data from barcode and save the inforamation locally using the Room Persistence Library.",
          link: "https://eidk.org/Firebase-BarcodeScanning-saving-locally.html",
          tags: ["ML Kit", "Firebase", "Room Persistance Library", "Kotlin"]
        },
        {
          heading:
            "Working with Local notification and Firebase push notification",
          content:
            "Sending push notification using FCM and also about triggering a local notification.",
          link:
            "https://eidk.org/Firebase-push-local-notfications-android-eidk.html",
          tags: ["Local notification", "Push notification", "FCM", "Kotlin"]
        },
        {
          heading: "Data Visualization using Matplotlib",
          content:
            "Data visualization is a key aspect in data analysis which allows us to represent data in a visual format.",
          link: "https://eidk.org/data-visualization-using-matplotlib.html",
          tags: ["Matplotlib", "Visualization", "Python"]
        },
        {
          heading: "Neural Network in Pytorch using Google Colab",
          content:
            "Building a deep learning model and understanding the building blocks on which that model will be built upon.",
          link:
            "https://eidk.org/Neural-Network-in-PyTorch-Using-Google-CoLab.html",
          tags: ["Pytorch", "Deep Learning", "Google Colab", "Python"]
        },
        {
          heading: "Working with Retrofit in Kotlin using MVVM architecture",
          content:
            "Fetching JSON data from an API using Retrofit, Coroutines, Glide and updating the views using LiveData.",
          link: "https://eidk.org/Working-with-Retorfit-kotlin-eidk.html",
          tags: ["Coroutines", "LiveData", "Retrofit", "Kotlin"]
        }
      ],
      androidCards: [
        {
          heading: "Picfuse",
          content: "A photo editor for Android.It is lightweight (nearly 3mb).",
          link:
            "https://www.amazon.com/UltraVisionStudio-Picfuse-Photo-Editor/dp/B07167RRGM?tag=incepin-20"
        },
        {
          heading: "FilterLibrary",
          content: "Android image filter library having 16 unique filters.",
          link: "https://hgayan7.github.io/FilterLibrary/"
        },
        {
          heading: "Code Converter",
          content:
            "Android app for conversion of numbers between number systems.",
          link:
            "https://play.google.com/store/apps/details?id=com.uvstudio.codeconverter&hl=en"
        },
        {
          heading: "WiFiDirect Data Tranfer",
          content:
            "Data transfer from one device to another android device using Wifi P2P.",
          link: "https://github.com/hgayan7/WiFiDirectDataTranfer"
        },
        {
          heading: "Hackathon App",
          content:
            "App made for Smart India Hackathon 2018 .This app uses the Near library for P2P chat over wifi direct.",
          link: "https://github.com/hgayan7/Hackathon-App"
        }
      ],
      machineCards: [
        {
          heading: "Face Recognition",
          content: "Face recognition system using FaceNet and OpenCV",
          link: "https://github.com/hgayan7/Face-Recognizer"
        },
        {
          heading: "Review Analysis",
          content: "The is a RNN(GRU) based model",
          link: "https://github.com/hgayan7/DL-ML-notebooks/tree/master/NLP_RNN"
        },
        {
          heading: "Custom Object Detection",
          content:
            "Detection of custom objects using Tensorflow Object Detection API.",
          link:
            "https://github.com/hgayan7/DL-ML-notebooks/tree/master/CustomObjectDetectionTensorflow"
        },
        {
          heading: "Review Analysis ",
          content:
            "This model uses Natural Language Processing to make predictions whether an user review is positive or not" +
            "using Random Forest algorithm.",
          link:
            "https://github.com/hgayan7/DL-ML-notebooks/tree/master/NLP_RandomForest"
        }
      ],
      blockchainCards: [
        {
          heading: "Land Network",
          content:
            "A decentralised Land Title Ownership Dapp through which a land owner can sell his land to a peer without the involvement of government or any middlemen once registered.",
          link: "https://github.com/hgayan7/EthIndia-Codebase"
        },
        {
          heading: "DonationDapp",
          content:
            "This decentralized app allows donors to donate ether to verified NGOs to serve their purpose." +
            "Register new NGO , Remove fraud NGO(s), Make verified NGOs available for accepting donations.",
          link: "https://github.com/hgayan7/DonationDapp"
        },
        {
          heading: "Blockchain based voting system",
          content:
            "Android app showing the integration of the DApp and its features with android.The DApp is built on top of Ethereum blockchain and is live in Rinkeby.",
          link:
            "https://github.com/hgayan7/VoteX---Blockchain-based-voting-system"
        }
      ],
      flutterCards: [
        {
          heading: "CloudSpace",
          content: "Cloud storage provider app made with flutter",
          link: "https://github.com/hgayan7/CloudSpace"
        },
        {
          heading: "EMPhance",
          content: "EMPhance - Flutter based employee-employer engagement app",
          link: "https://github.com/hgayan7/EMPhance"
        }
      ],
      iosCards: [
        {
          heading: "watchOS App",
          content:
            "Weather app UI and Github Client for watchOS using combine and SwiftUI",
          link:
            "https://github.com/hgayan7/iOS-Playground/tree/master/WatchOsTest"
        }
      ]
    };
  }
};
</script>

