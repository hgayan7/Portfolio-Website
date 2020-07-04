<template>
  <nav>
    <v-toolbar flat dark fixed>
      <v-toolbar-side-icon v-on:click="drawer =! drawer" class="grey--text hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light-uppercase white--text">H</span>
        <span>G</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat color="grey" router to="/">Home</v-btn>
        <v-btn flat color="grey" router to="/certifications">Certifications</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer dark app fixed v-model="drawer" disable-resize-watcher width="200">
      <v-list app>
        <v-list-tile v-for="page in pages" v-bind:key="page.text" router v-bind:to="page.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{page.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{page.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      pages: [
        { icon: "home", text: "Home", route: "/" },
        {
          icon: "golf_course",
          text: "Certifications",
          route: "/certifications"
        }
        // { icon: "insert_comment", text: "Contact", route: "/contact" }
      ]
    };
  }
};
</script>

