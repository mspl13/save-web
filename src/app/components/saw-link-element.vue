<template>
  <li>
    <a :href="linkitem.url">{{ linkitem.url }}</a>
    <p>{{ linkitem.annotation }}</p>
  </li>
</template>

<script>
export default {
  name: "saw-link-element",
  props: {
    linkitem: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
li {
  margin: 5px 0;
  border: 1px solid black;
}
</style>
