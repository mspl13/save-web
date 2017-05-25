<template>
  <p v-on:click="deleteLink(linkId)">Delete Link</p>
</template>

<script>
  import { httpDeleteAsync } from "./../wrappers.js";
  import { deleteLinkAddress } from "./../config.js";
  import { linkList } from "./../index.js";

  export default {
    name: "saw-delete-link",
    props: {
      linkId: {
        type: Number,
        required: true
      }
    },
    methods: {
      deleteLink: id => {
        httpDeleteAsync(
          deleteLinkAddress,
          localStorage.getItem("authToken"),
          id,
          response => {
            const linkObjectIndex = linkList.items.indexOf(
              linkList.items.find(linkObject => linkObject.id === id)
            );

            if (linkObjectIndex > -1) {
              linkList.items.splice(linkObjectIndex, 1);
            }
          }
        );
      }
    }
  }
</script>

<style scoped>
  p {
    cursor: pointer;
  }

  p:hover {
    color: blue;
  }
</style>
