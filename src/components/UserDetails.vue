<template>
  <div class="details container mt-5">
    <router-link class="btn back mb-3" to="/">Back</router-link>
    <div>
      <span class="right">
        <router-link class="btn btn-primary" v-bind:to="`/users/edit/${user.id}`">Edit</router-link>

        <button class="btn btn-danger text-white del" @click="deleteUser(user.id)">Delete</button>
      </span>
      <div>
        <div class="card mt-3" style="width: 80vw;">
          <div class="card-body">
            <h2 class="card-title">{{user.name}}</h2>
            <ul class="list-group">
              <li class="list-group-item">
                <span class="glyphicon glyphicon-phone" aria-hidden="true">
                  <strong>Phone:</strong>
                  {{user.phone_1}}
                </span>
              </li>
              <li class="list-group-item">
                <span class="glyphicon glyphicon-phone" aria-hidden="true">
                  <strong>Second phone:</strong>
                  {{user.phone_2}}
                </span>
              </li>
              <li class="list-group-item">
                <strong>Email:</strong>
                {{user.email}}
              </li>
            </ul>
            <li class="list-group-item">
              <strong>
                <h5>Delivery Address</h5>
              </strong>
            </li>
            <!-- <div v-for="street in user" v-bind:key="street.id"> -->
            <div>
              <ul>
                <li class="list-group-item">
                  <strong>Street:</strong>
                  {{user.ship_street}}
                </li>
                <li class="list-group-item">
                  <strong>Home Number:</strong>
                  {{user.ship_number_home}}
                </li>
                <li class="list-group-item">
                  <strong>Zipcode:</strong>
                  {{user.ship_zipcode}}
                </li>
                <li class="list-group-item">
                  <strong>City:</strong>
                  {{user.ship_city}}
                </li>
                <li class="list-group-item">
                  <strong>Country:</strong>
                  {{user.ship_country}}
                </li>
              </ul>
            </div>
            <li class="list-group-item">
              <strong>
                <h5>Billing Address</h5>
              </strong>
            </li>
            <div>
              <ul>
                <li class="list-group-item">
                  <strong>Street:</strong>
                  {{user.bill_street}}
                </li>
                <li class="list-group-item">
                  <strong>Home Number:</strong>
                  {{user.bill_number_home}}
                </li>
                <li class="list-group-item">
                  <strong>Zipcode:</strong>
                  {{user.bill_zipcode}}
                </li>
                <li class="list-group-item">
                  <strong>City:</strong>
                  {{user.bill_city}}
                </li>
                <li class="list-group-item">
                  <strong>Country:</strong>
                  {{user.bill_country}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import router from "../router";
import axios from "axios";
export default {
  name: "userdetails",


  data() {
    return {
      user: ""
    };
  },
  methods: {
    fetchUser() {
      axios
        .get(
          `https://my-json-server.typicode.com/KamilaDyn/demo/users/${
            this.$route.params.id
          }`
        )
        .then(response => console.log((this.user = response.data)))

        .catch(err => console.log(err));
    },
    deleteUser(id) {
      axios
        .delete(
          `https://my-json-server.typicode.com/KamilaDyn/demo/users/${id}`
        )
        .then(response => {
          this.fetchUser();
        })
        .then(response => {
          router.push({
            path: "/",
            query: { alert: `user ${this.user.name} deleted` }
          });
        })
        .then(response => console.log(id))
        .catch(err => console.log(err));
    }
  },
  created: function() {
    this.fetchUser(this.$route.params.id);
  }
};
</script>
<style scoped>
h2,
h5 {
  color: rgb(25, 25, 112);
}
</style>

