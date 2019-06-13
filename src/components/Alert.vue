<template>
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="close">
      <span aria-hidden="true">&times;</span>
    </button>
    {{message}}
  </div>
</template>

<script>
export default {
  name: "alert",
  props: ["message"],
  data() {
    return {};
  }
};
</script>

<style >
.alert {
  width: 80vw;
  margin: 20px auto;
  height: 40px;
  padding-top: 20px;
}
</style>
