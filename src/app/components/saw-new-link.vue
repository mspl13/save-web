<template>
  <div v-if="isLoggedIn">
    <input type="text" id="linkInput" placeholder="link">
    <input type="text" id="annotationInput" placeholder="annotation">
    <button v-on:click="saveNewLink()">Save Link</button>
  </div>
</template>

<script>
import { httpPostAsync } from "./../wrappers.js";
import { postLinkAddress } from "./../config.js";
import { sawBus, linkList } from "./../index.js";

export default {
  name: "saw-new-link",
  data: () => {
    return {
      isLoggedIn: false
    }
  },
  created: function() {
    sawBus.$on("logIn", () => {
      this.$data.isLoggedIn = true;
    });

    sawBus.$on("logOut", () => {
      this.$data.isLoggedIn = false;
    });
  },
  destroyed: () => {
    sawBus.$off("logIn");
    sawBus.$off("logOut");
  },
  methods: {
    saveNewLink: () => {
      const urlInput = document.getElementById("linkInput");
      const annotationInput = document.getElementById("annotationInput");
      const linkObject = {
        "url": urlInput.value,
        "annotation": annotationInput.value
      };

      // Post new link object to server (async)
      httpPostAsync(
        postLinkAddress,
        localStorage.getItem("authToken"),
        JSON.stringify(linkObject),
        response => {
          if (response.error) {
            console.error("Couldn't post link. Got error:", response.error);
            return;
          }
          
          // Add links to link list
          linkList.items.push(response.link);

          // Clear inputs
          urlInput.value = "";
          annotationInput.value = "";
        }
      );
    }
  }
}
</script>

<style>
</style>
