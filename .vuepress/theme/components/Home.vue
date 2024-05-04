<template>
  <div class="container mx-auto flex flex-col items-center">
    <div class="site-home container w-full sm:w-2/3 md:w-1/2">
    <section class="intro mb-8 ">
      <p class="my-10 text-hero leading-none font-rubik font-black">Hey, I’m
        Austin.</p>
      <p class=" font-nunito font-medium my-10 text-2xl">Rooted in design thinking and armed with go-to-market expertise, I specialize in crafting scalable digital products that propel companies forward in their growth. 
      </p>
      <p class=" font-nunito font-medium text-2xl">Digital Product Leader / Growth Advisor / CX / Founder
      </p>
    </section>
  </div>
  <div class="site-home container w-1/2">
    <p class="font-nunito font-bold text-4xl font-normal text-center ">WORK</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
.btn
  @apply font-bold py-4 px-6 rounded

.btn-green
  @apply bg-green-600 text-white

.btn-green:hover
  @apply bg-green-500

</style>
