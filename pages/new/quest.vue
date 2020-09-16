<template>
  <div>
    <new-quest showModalDefault="true" hiddenbottom="true" />
  </div>
</template>
<script>
export default {
  scrollToTop: true,
  layout: "no-header",
  middleware: "auth",
}
</script>
