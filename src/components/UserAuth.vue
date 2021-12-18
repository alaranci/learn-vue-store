<template>
  <button @click="userLogin" v-if="!isUserAuth">Login</button>
  <button @click="userLogout" v-else>Logout</button>
</template>

<script>
export default {
  computed: {
    isUserAuth() {
      return this.$store.state.isUserAuth;
    },
  },
  methods: {
    userLogin() {
      this.$store.commit('userLogin');
    },
    userLogout() {
      this.$store.commit('userLogout');
    },
  },
};
</script>
