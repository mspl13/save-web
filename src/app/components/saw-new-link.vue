<template>
  <div>
    <input type="text" id="linkInput" placeholder="link">
    <input type="text" id="annotationInput" placeholder="annotation">
    <button v-on:click="saveNewLink()">Save Link</button>
  </div>
</template>

<script>
import { httpPostAsync } from "./../wrappers.js";
import { postLinkAddress } from "./../config.js";
import { linkList } from "./../index.js";

export default {
  name: "saw-new-link",
  methods: {
    saveNewLink: () => {
      const linkObject = {
        "url": document.getElementById("linkInput").value,
        "annotation": document.getElementById("annotationInput").value
      };

      // Post new link object to server (async)
      httpPostAsync(
        postLinkAddress,
        localStorage.getItem("authToken"),
        JSON.stringify(linkObject),
        response => {
          linkList.items.push(response.link);
        }
      );
    }
  }
}
</script>

<style>
</style>
