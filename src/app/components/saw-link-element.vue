<template>
  <li>
    <a :href="linkItem.url" target="_blank">{{ linkItem.url }}</a>
    <p>{{ linkItem.annotation }}</p>
    <saw-delete-link :link-id="linkItem.id"></saw-delete-link>
  </li>
</template>

<script>
  import DeleteLink from "./saw-delete-link.vue";

  export default {
    name: "saw-link-element",
    props: {
      linkItem: {
        type: Object,
        required: true
      }
    },
    components: {
      "saw-delete-link": DeleteLink
    }
  }
</script>

<style scoped>
li {
  margin: 5px 0;
  padding: 10px;

  border: 1px solid black;
}

a {
  cursor: pointer;
}
</style>
