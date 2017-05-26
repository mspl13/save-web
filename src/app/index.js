import Vue from "vue";

import NewLinkComponent from "./components/saw-new-link.vue";
import ListItemComponent from "./components/saw-link-element.vue";
import UserLoginComponent from "./components/saw-user-login.vue";

// Importing the main css files
import "./stylesheets/main.scss";
import "file-loader?name=index.html!./../index.html";

import { httpGetAsync } from "./wrappers.js";

import { getListAddress } from "./config.js";

/**
 * The element that contains the user login form.
 */
// eslint-disable-next-line no-unused-vars
const userLogin = new Vue({
  el: "#user-login",
  components: {"saw-user-login": UserLoginComponent}
});

/**
 * The element for a new link and it's annotation.
 */
// eslint-disable-next-line no-unused-vars
const newLink = new Vue({
  el: "#new-link",
  components: {"saw-new-link": NewLinkComponent}
});

/**
 * The element that contains the list of all links.
 */
export const linkList = new Vue({
  el: "#link-list",
  data: {items: []},
  components: {"saw-link-element": ListItemComponent}
});

export function fetchLinkList() {
  // Get the list of user saved links at start
  httpGetAsync(getListAddress, localStorage.getItem("authToken"), response => {
    if(response.error) {
      console.error("Error while fetching link list:", response.error);
      return;
    }

    response.forEach(element => {
      linkList.items.push(element);
    });
  });
}
fetchLinkList();
