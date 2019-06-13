<template>
  <div class="container">
    <router-link class="back btn my-3" to="/">Back</router-link>
    <br>
    <Alert v-if="alert" v-bind:message="alert"/>
    <div class="card">
      <h1 class="card-header">
        <i class="fa fa-pencil-square-o mr-2"></i>Edit User
      </h1>
      <div class="card-body">
        <form @submit="updateUser">
          <div class="form-group">
            <label for="Name">Name</label>
            <input
              type="text"
              id="Name"
              class="form-control"
              placeholder="Enter name"
              name="name"
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
              name="email"
              v-model="user.email"
            >
          </div>
          <div class="row">
            <div class="form-group col-6">
              <label for="phone_1">Phone_1st</label>
              <input
                type="text"
                id="phone_1"
                class="form-control"
                name="phone_1"
                placeholder="Enter contact phone number"
                v-model="user.phone_1"
              >
            </div>
            <div class="form-group col-6">
              <label for="phone_2">Phone_2nd</label>
              <input
                type="text"
                id="phone_2"
                class="form-control"
                name="phone_2"
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
import Alert from "./Alert";
import axios from "axios";
export default {
  name: "add",
  components: {
    Alert
  },
  data() {
    return {
      user: {},
      alert: ""
    };
  },
  methods: {
    updateUser(e) {
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
        this.alert = "Please fill in all requied";
      } else {
        let updUser = {
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
        axios
          .put(
            `https://my-json-server.typicode.com/KamilaDyn/demo/users/${
              this.$route.params.id
            }`,
            { updUser }
          )
          .then(response => console.log(response.data))
          .then(response => {
            this.$router.push({
              path: "/",
              query: {
                alert: `User ${this.user.name} updated.`
              }
            });
          });
      }
      e.preventDefault();
    }
  },
  created() {
    axios
      .get(
        `https://my-json-server.typicode.com/KamilaDyn/demo/users/${
          this.$route.params.id
        }`
      )
      .then(response => (this.user = response.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.container {
  width: 80vw;
  margin: auto;
}
h1 {
  text-align: center;
  color: rgb(25, 25, 112);
}
label {
  margin-bottom: 15px;
}
</style>

