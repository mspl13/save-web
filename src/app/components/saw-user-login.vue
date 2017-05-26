<template>
  <div v-if="!isLoggedIn">
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
  import { httpLogin, httpGetAsync } from "./../wrappers.js";
  import {
    requestAuthTokenAddress,
    authTokenValidationAddress } from "./../config.js";
  import { fetchLinkList } from "./../index.js";

  export default {
    name: "saw-user-login",
    data: () => {
      return {
        isLoggedIn: false
      }
    },
    beforeMount: function() {
      const token = localStorage.getItem("authToken");

      // Authentication status should be false by default
      // as long as not validated
      this.$data.isLoggedIn = false;

      // Check if an auth token already exists
      if(!token) return;

      // Check if existing token is still valid
      httpGetAsync(authTokenValidationAddress, token, response => {
        if(response.error) {
          localStorage.removeItem("authToken");
          console.error("Authentication token is invalid. Please login again.");
          return;
        }
        
        this.$data.isLoggedIn = true;
      });
    },
    methods: {
      login: function(event) {
        if(event) event.preventDefault();

        // Get username and password from input fields
        const username = this.$refs.username.value;
        const password = this.$refs.password.value;

        // Request authentication token and save it to the local storage
        httpLogin(
          requestAuthTokenAddress,
          username,
          password,
          response => {
            if (response.error) {
              console.error("Couldn't login. Got error:", response.error);
              return;
            }

            // Save auth token to local storage and force rerendering
            localStorage.setItem("authToken", response.token);
            this.$data.isLoggedIn = true;
            this.$nextTick(() => {
              fetchLinkList();
            });
          }
        );
      }
    }
  }
</script>

<style>
</style>
