import Vue from "vue";

import NewLink from "./components/saw-new-link.vue";
import ListItem from "./components/saw-link-element.vue";

// Importing the main css files
import "./stylesheets/main.scss";
import "file-loader?name=index.html!./../index.html";

import { httpGetAsync } from "./wrappers.js";

import {
  serverUsername,
  serverPassword,
  getListAddress
} from "./config.js";

/**
 * The element for a new link and it's annotation.
 */
// eslint-disable-next-line no-unused-var
const newLink = new Vue({
  el: "#new-link",
  components: {"saw-new-link": NewLink}
});

/**
 * The element that contains the list of all links.
 */
export const linkList = new Vue({
  el: "#link-list",
  data: {items: []},
  components: {"saw-link-element": ListItem}
});

// Get the list of user saved links at start
httpGetAsync(getListAddress, serverUsername, serverPassword, response => {
  response.forEach(element => {
    linkList.items.push(element);
  });
});
