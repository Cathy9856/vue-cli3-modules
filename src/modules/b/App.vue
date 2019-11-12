<template>
  <div class="b">
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    document.title = 'Dashboard - ModuleB'
  }
}
</script>
