<template>
  <li>
    <a :href="linkitem.url">{{ linkitem.url }}</a>
    <p>{{ linkitem.annotation }}</p>
    <p>({{ linkitem.id }})</p>
    <saw-delete-link :link-id="linkitem.id"></saw-delete-link>
  </li>
</template>

<script>
  import DeleteLink from "./saw-delete-link.vue";

  export default {
    name: "saw-link-element",
    props: {
      linkitem: {
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
  border: 1px solid black;
}
</style>
