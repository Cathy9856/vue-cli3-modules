<template>
  <div class="c">
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    document.title = 'Dashboard - ModuleC'
  }
}
</script>
