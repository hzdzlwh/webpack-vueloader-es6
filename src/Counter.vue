<template>
  <div class="example">
    {{ msg }}
    <comp-a></comp-a>
  </div>
</template>
<script>
import CompA from './components/a.vue'
console.log(CompA)
export default {
  data () {
    return {
      msg: 'hello'
    }
  },
  components: {
    CompA
  }
}
</script>
<style>
.example {
  color: red;
}
</style>
