
<template>
    <div class="user-item" v-bind:user="user">
    </div>
  

</template>
<script>
export default {
  name: "UserItem",
  props: ["user"]
};
</script>