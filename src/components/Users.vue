<template>
  <div class="container users mt-3">
    <Alert class="mt-3" v-if="alert" v-bind:message="alert"/>
    <router-link to="/add">
      <h3 class="add">
        <i class="fa fa-user-plus mr-2"></i>Add New User
      </h3>
    </router-link>
    <br>
    <input class="form-control search" v-model="search" type="text" placeholder="Search name">
    <div class="table-responsive-sm">
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="user.id" v-for="user in (users, filteredUsers) ">
            <td class="align-middle">
              <router-link
                class="btn btn-default"
                v-bind:to="`/users/${user.id}`"
              >{{user.name | to-uppercase}}</router-link>
            </td>
            <td class="align-middle">{{user.email}}</td>
            <td class="align-middle">{{user.phone_1}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Alert from "./Alert";

export default {
  name: "users",

  data() {
    return {
      alert: "",
      search: ""
    };
  },
  props: ["users"],
  components: {
    Alert
  },
  computed: {
    filteredUsers: function() {
      return this.users.filter(user => {
        return user.name.match(this.search);
      });
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}
.add {
  color: rgb(112, 128, 144);
}
.add:hover {
  color: rgb(176, 196, 222);
}
.search {
  border: 1px solid rgb(112, 128, 144);
  margin: 30px auto;
}
th {
  color: rgb(25, 25, 112);
  padding: 20px;
}
</style>


