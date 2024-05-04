<template>
  <div class="">
    <div class="my-10" id="connect">
            <p class="font-nunito font-bold  leading-none text-4xl text-center">CONNECT</p>
            <div class="flex gap-5 my-10 justify-center">
                  <div class="h-32 md:h-64 w-32 md:w-64 rounded-2xl bg-connect flex flex-col justify-center items-center">
                    <a href="https://www.linkedin.com/in/austinobrion/" class="flex flex-col justify-center items-center">
                        <img src="../../public/images/icon_linkedin.svg" class="w-2/3" alt="">
                        <p class="text-sm md:text-2xl">LINKEDIN</p>  
                    </a>
                </div>
                  <div class="h-32 md:h-64 w-32 md:w-64 rounded-2xl bg-connect flex flex-col justify-center items-center">
                    <a href="https://austinobrion.medium.com/" class="flex flex-col justify-center items-center">
                        <img src="../../public/images/icon_medium.svg" class="w-2/3" alt="">
                        <p class="text-sm md:text-2xl">Medium Blog</p>  
                    </a>
                </div>
                  <div class="h-32 md:h-64 w-32 md:w-64 rounded-2xl bg-connect flex flex-col justify-center items-center">
                <a href="mailto:ao@austinobrion.com" class="flex flex-col justify-center items-center">
                    <img src="../../public/images/icon_email.svg" class="w-2/3" alt="">
                    <p class="text-sm md:text-2xl">EMAIL ME</p>  
                </a>
                  </div>
                </div>
        </div>
        <div class="">&nbsp;</div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>

<style scoped lang="stylus">
.bg-connect:hover
    background-color:#025d5d;
    color:white;
</style>
  