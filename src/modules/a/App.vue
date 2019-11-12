<template>
  <div class="a">
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    document.title = 'Dashboard - ModuleA'
  }
}
</script>
