<template> 
  <Sidebar />
  <Loader />
  <router-view/>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Loader from "@/components/Loader.vue";
export default {
  name: "App",
  components: {
    Sidebar,
    Loader
  }
}
</script>

<style scoped>
</style>
