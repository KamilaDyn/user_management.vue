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
<style >
body {
  max-width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
i {
  color: rgb(25, 25, 112);
}
h4 {
  color: rgb(192, 192, 192);
}
.back {
  background-color: rgb(25, 25, 112);
  color: white;
}
.container {
  width: 100vw;
  margin: auto;
}

@media (min-width: 900px) {
  .container {
    width: 90vw;
  }
}
@media (min-width: 1000px) {
  .container {
    width: 80vw;
  }
}
@media (min-width: 1100px) {
  .container {
    width: 70vw;
  }
}
</style>