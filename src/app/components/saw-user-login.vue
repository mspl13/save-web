<template>
  <div v-if="isLoggedIn === false">
    <h3>Login:</h3>
    <form>
      <p><input type="text" placeholder="server URL" ref="backend"></p>
      <p>
        <input type="text" placeholder="username" ref="username">
        <input type="password" placeholder="password" ref="password">
      </p>
      <p><button v-on:click="login($event)">Login</button></p>
    </form>
  </div>
  <div class="flex" v-else>
    <button id="saw-logout__button" v-on:click="logout($event)">Logout</button>
  </div>
</template>

<script>
  import { httpLogin, httpLogout, httpGetAsync } from "./../wrappers.js";
  import {
    requestAuthTokenLocation,
    authTokenValidationLocation,
    authTokenInvalidationLocation } from "./../config.js";
  import { sawBus, linkList, fetchLinkList } from "./../index.js";
  import { getBackendURL, setBackendURL } from "./../util.js";

  export default {
    name: "saw-user-login",
    data: () => {
      return {
        isLoggedIn: null
      }
    },
    beforeMount: function() {
      const token = localStorage.getItem("authToken");

      // Check if an auth token already exists
      if(!token) {
        // User is not logged in
        this.$data.isLoggedIn = false;

        // Ensure that $refs exist
        this.$nextTick(() => {
          // Setting saved backend URL
          this.$refs.backend.value = getBackendURL();
        });

        // Hiding loading indicator
        document.getElementById("loading-indicator").style.display = "none";
        return;
      }

      // Check if existing token is still valid
      httpGetAsync(
        getBackendURL() + authTokenValidationLocation,
        token,
        response => {
          if(response.error) {
            localStorage.removeItem("authToken");
            console.error("Authentication token is invalid. Please login again.");
            return;
          }
          
          this.$data.isLoggedIn = true;

          // Hiding loading indicator
          document.getElementById("loading-indicator").style.display = "none";

          // Emit event that user logged in successfully
          sawBus.$emit("logIn");
          fetchLinkList();
        }
      );
    },
    methods: {
      login: function(event) {
        if (event) event.preventDefault();

        // Get username and password from input fields
        const username = this.$refs.username.value;
        const password = this.$refs.password.value;
        let backendURL = this.$refs.backend.value;

        backendURL = backendURL ? setBackendURL(backendURL) : getBackendURL();

        // Request authentication token and save it to the local storage
        if (backendURL) {
          httpLogin(
            backendURL + requestAuthTokenLocation,
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
              fetchLinkList();
            }
          );
        } else {
          console.error("Backend URL is not valid.");
        }
      },
      logout: function(event) {
        if (event) event.preventDefault();

        const token = localStorage.getItem("authToken");

        // Request invalidation of auth token/logout
        httpLogout(
          getBackendURL() + authTokenInvalidationLocation,
          token,
          response => {
            if (response.error) {
              console.error("Couldn't logout. Got error:", response.error);
              return;
            }

            // Remove auth token from local storage and reload elements
            localStorage.removeItem("authToken");
            this.$data.isLoggedIn = false;

            // Emit event that user logged out
            sawBus.$emit("logOut");

            // Remove all link items from the list
            linkList.items = [];
          }
        );
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
