<template>
  <base-container title="User Authentication">
    <user-auth-vue></user-auth-vue>
    <p>User telah {{ isUserAuthNow }}</p>
  </base-container>
  <base-container title="Vuex" v-if="isUserAuth">
    <h3>{{ name }}</h3>
    <p>Multiply Age: {{ age }}</p>
    <button @click="changeName">Change Name</button>
    <button @click="increaseAge">Increase Age</button>
    <button @click="runOtherGetters">Trigger Other Getters</button>
    <code>
      <h1>Yahaha</h1>
      <span>Hwhwhw :v</span>
    </code>
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import UserAuthVue from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    UserAuthVue,
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
    age() {
      return this.$store.getters.ageMultipleByTwo;
    },
    isUserAuth() {
      return this.$store.state.isUserAuth;
    },
    isUserAuthNow() {
      return this.$store.getters.isUserAuthNow;
    },
    runOtherGetters() {
      return this.$store.getters.otherGetters;
    },
    ...mapGetters(['otherGetters']),
  },
  created() {
    // this.$store.dispatch('increment');
    this.$store.commit('irlan/whatNameIs');
  },
  methods: {
    changeName() {
      this.$store.commit('changeName');
    },
    increaseAge() {
      this.$store.commit('increaseAge');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
