<template>
  <div v-if="!isLoggedIn()">
    <h3>Login:</h3>
    <form>
      <input type="text" placeholder="username" ref="username">
      <input type="password" placeholder="password" ref="password">
      <button v-on:click="login($event)">Login</button>
    </form>
    <hr>
  </div>
</template>

<script>
  import { httpGetAsync } from "../wrappers.js";
  import { requestAuthTokenAddress } from "../config.js";

  export default {
    name: "saw-user-login",
    methods: {
      isLoggedIn: () => {
        // Check if an auth token already exists
        if(!localStorage.getItem("authToken")) {
          return false;
        }
        // TODO: check if token is still valid
        return true;
      },
      login: function(event) {
        if(event) event.preventDefault();

        // Get username and password from input fields
        const username = this.$refs.username.value;
        const password = this.$refs.password.value;

        // Request authentication token and save it to the local storage
        httpGetAsync(
          requestAuthTokenAddress,
          username,
          password,
          response => {
            if (response.token) {
              // Save auth token to local storage and force rerendering
              localStorage.setItem("authToken", response.token);
              this.$forceUpdate();
            } else {
              // TODO: clear password input field or do some useful stuff
              console.log("Sorry. Couldn't log in.");
            }
          }
        );
      }
    }
  }
</script>

<style>
</style>
