<template>
  <div id="app">
    <Alert v-if="alert" v-bind:message="alert"/>
    <!-- <Users v-bind:users="users" @:add-user="addUser"/> -->
    <Users v-bind:users="users"/>
  </div>
</template>

<script>
import Users from "../components/Users";
import axios from "axios";
import Alert from "../components/Alert";

export default {
  name: "Home",
  components: {
    Users,
    Alert
  },
  data() {
    return {
      users: [],
      alert: ""
    };
  },
  methods: {
    fetchUsers() {
      axios
        .get("https://my-json-server.typicode.com/KamilaDyn/demo/users")
        .then(response => (this.users = response.data))
        .catch(err => console.log(err));
    }
  },
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchUsers();
  }
};
</script>
