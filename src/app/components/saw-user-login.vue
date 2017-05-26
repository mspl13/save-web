<template>
  <div v-if="!isLoggedIn">
    <h3>Login:</h3>
    <form>
      <input type="text" placeholder="username" ref="username">
      <input type="password" placeholder="password" ref="password">
      <button v-on:click="login($event)">Login</button>
    </form>
  </div>
  <div class="flex" v-else>
    <button id="saw-logout__button" v-on:click="logout($event)">Logout</button>
  </div>
</template>

<script>
  import { httpLogin, httpGetAsync } from "./../wrappers.js";
  import {
    requestAuthTokenAddress,
    authTokenValidationAddress } from "./../config.js";
  import { sawBus, linkList, fetchLinkList } from "./../index.js";

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
        fetchLinkList();
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

            // Emit event that user logged in successfully
            sawBus.$emit("logIn");

            // TODO: bind this to the new data bus with an event
            this.$nextTick(() => {
              fetchLinkList();
            });
          }
        );
      },
      logout: function(event) {
        if (event) event.preventDefault();

        // TODO: make current authentication token invalid when API exists

        // Remove auth token from local storage and reload elements
        localStorage.removeItem("authToken");
        this.$data.isLoggedIn = false;

        // Emit event that user logged out
        sawBus.$emit("logOut");

        // Remove all link items from the list
        linkList.items = [];
      }
    }
  }
</script>

<style scoped>
  .flex {
    display: flex;
  }

  #saw-logout__button {
    margin-left: auto;
  }
</style>
