<template>
  <div class="max-w-screen-2xl  mx-auto two-way-gradient px-3 md:px-0">
    <Home />
    <Work />
    <Email />
    <About />
    <Comments />
    <Connect />
  </div>
</template>

<script>
import Home from '@theme/components/Home'
import Work from "@theme/components/Work"
import Email from "@theme/components/EmailSection"
import About from "@theme/components/About"
import Comments from '@theme/components/Comments.vue'
import Connect from "@theme/components/Connect"

export default {
  name: 'HomeLayout',
  components: {
    Home,
    Work,
    Email,
    About,
    Comments,
    Connect
  }
}
</script>

<!-- :src="require('@/public/images/vuepress+tailwindcss.png')" -->
