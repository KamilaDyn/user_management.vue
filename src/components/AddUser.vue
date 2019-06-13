<template>
  <div class="add container mt-3">
    <router-link class="back btn mb-3" to="/">Back</router-link>
    <br>
    <Alert v-if="alert" v-bind:message="alert"/>
    <br>
    <div class="card">
      <h5 class="card-header">
        <i class="fa fa-user-plus mr-2"></i>Add User
      </h5>
      <div class="card-body">
        <form @submit="addUser">
          <div class="form-group">
            <label for="Name">Name</label>
            <input
              type="text"
              id="Name"
              class="form-control"
              placeholder="Enter name"
              v-model="user.name"
            >
          </div>
          <div>
            <h4 class="text-center">User contact</h4>
          </div>
          <div class="form-group">
            <label for="Email">Email</label>
            <input
              type="text"
              id="Email"
              class="form-control"
              placeholder="Enter email"
              v-model="user.email"
            >
          </div>
          <div class="row">
            <div class="form-group col-6">
              <label for="Phone_1">Phone_1</label>
              <input
                type="text"
                id="Phone_1"
                class="form-control"
                placeholder="Enter contact phone number"
                v-model="user.phone_1"
              >
            </div>
            <div class="form-group col-6">
              <label for="Phone_2">Phone_2</label>
              <input
                type="text"
                id="Phone_2"
                class="form-control"
                placeholder="Enter second phone number"
                v-model="user.phone_2"
              >
            </div>
          </div>
          <div class="my-4">
            <h4 class="text-center">User delivery address details</h4>
          </div>
          <div class="row">
            <div class="form-group col-5">
              <label for="ship_street">Street</label>
              <input
                type="text"
                id="ship_street"
                class="form-control"
                placeholder="Enter street"
                name="ship_street"
                v-model="user.ship_street"
              >
            </div>
            <div class="form-group col-3">
              <label for="ship_number_home">Number</label>
              <input
                type="text"
                id="ship_number_home"
                class="form-control"
                placeholder="Number"
                name="ship_number_home"
                v-model="user.ship_number_home"
              >
            </div>

            <div class="form-group col-4">
              <label for="ship_zipcode">ZipCode</label>
              <input
                type="text"
                id="ship_zipcode"
                class="form-control"
                placeholder="Enter street"
                name="ship_zipcode"
                v-model="user.ship_zipcode"
              >
            </div>
          </div>

          <div class="row">
            <div class="form-group col-6">
              <label for="ship_city">City</label>
              <input
                type="text"
                id="ship_city"
                class="form-control"
                placeholder="Enter city name"
                name="ship_city"
                v-model="user.ship_city"
              >
            </div>
            <div class="form-group col-6">
              <label for="ship_city">Country</label>
              <input
                type="text"
                id="ship_country"
                class="form-control"
                placeholder="Enter city name"
                name="ship_country"
                v-model="user.ship_country"
              >
            </div>
          </div>
          <div class="my-4">
            <h4 class="text-center">User billing address details</h4>
          </div>
          <div class="row">
            <div class="form-group col-5">
              <label for="bill_street">Street</label>
              <input
                type="text"
                id="bill_street"
                class="form-control"
                placeholder="Enter street"
                name="bill_street"
                v-model="user.bill_street"
              >
            </div>
            <div class="form-group col-3">
              <label for="bill_number_home">Number</label>
              <input
                type="text"
                id="bill_number_home"
                class="form-control"
                placeholder="Number"
                name="bill_number_home"
                v-model="user.bill_number_home"
              >
            </div>

            <div class="form-group col-4">
              <label for="bill_zipcode">ZipCode</label>
              <input
                type="text"
                id="bill_zipcode"
                class="form-control"
                placeholder="Enter street"
                name="bill_zipcode"
                v-model="user.bill_zipcode"
              >
            </div>
          </div>

          <div class="row">
            <div class="form-group col-6">
              <label for="bill_city">City</label>
              <input
                type="text"
                id="bill_city"
                class="form-control"
                placeholder="Enter city name"
                name="bill_city"
                v-model="user.bill_city"
              >
            </div>
            <div class="form-group col-6">
              <label for="bill_country">Country</label>
              <input
                type="text"
                id="bill_country"
                class="form-control"
                placeholder="Enter city name"
                name="bill_country"
                v-model="user.bill_country"
              >
            </div>
          </div>
          <button type="submit" class="btn btn-primary text-white">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Alert from "./Alert";
export default {
  name: "add",
  data() {
    return {
      user: {},
      alert: ""
    };
  },

  components: {
    Alert
  },
  methods: {
    fetchUsers() {
      axios
        .get("https://my-json-server.typicode.com/KamilaDyn/demo/users")
        .then(response => (this.users = response.data))
        .catch(err => console.log(err));
    },
    addUser(e) {
      e.preventDefault();
      if (
        !this.user.name ||
        !this.user.phone_1 ||
        !this.user.email ||
        !this.user.ship_street ||
        !this.user.ship_number_home ||
        !this.user.ship_zipcode ||
        !this.user.ship_city ||
        !this.user.ship_country
      ) {
        this.alert = "Please fill in, all requied";
      } else {
        let newUser = {
          name: this.user.name,
          email: this.user.email,
          phone: this.user.phone,
          ship_street: this.user.ship_street,
          ship_number_home: this.user.ship_number_home,
          ship_zipcode: this.user.ship_zipcode,
          ship_city: this.user.ship_city,
          ship_country: this.user.ship_country,
          bill_street: this.user.bill_street,
          bill_number_home: this.user.bill_number_home,
          bill_zipcode: this.user.bill_zipcode,
          bill_city: this.user.bill_city,
          bill_country: this.user.bill_country
        };
        this.$emit("add-user", newUser);

        axios
          .post(`https://jsonplaceholder.typicode.com/users`, { newUser })
          .then(response => console.log(response.data))
          .then(response => {
            this.fetchUsers();
          })
          .then(response => {
            this.$router.history.push({
              path: "/",
              query: { alert: `New users name: ${this.user.name} added` }
            });
          });
      }
    }
  }
};
</script>

<style scoped>
h5 {
  color: rgb(25, 25, 112);
}
</style>

