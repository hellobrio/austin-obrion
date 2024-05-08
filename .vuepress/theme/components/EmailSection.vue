<template>
    <div class="w-full sm:px-10 lg:px-20 my-5 md:my-20">
        <div class="mx-auto w-full bg-emailbg rounded-2xl my-5">
            <div class="w-full md:w-1/2 mx-auto px-5 md:px-0 py-5 sm:py-10 lg:py-20">
                <p class="font-rubik font-extrabold leading-none text-4xl">Looking to drive sustainable growth?</p>
                <p class="font-nunito font-normal text-xl my-5 md:my-10">Partner with me to drive growth through customer-centric digital products and compelling product marketing. Explore how my expertise translating user insights into valued product experiences and positioning can contribute to your success.</p>
                <a href="mailto:ao@austinobrion.com">
                  <button class="text-lg md:text-2xl font-rubik font-bold font-rubik bg-emailbutton py-1 md:py-2 px-3 md:px-5 rounded-full">Email me</button>   
                </a>
            </div>
        </div>
  
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmailSection'
  }
  </script>
  
  <style lang="stylus" scoped>
  .btn
    @apply font-bold py-4 px-6 rounded
  
  .btn-green
    @apply bg-green-600 text-white
  
  .btn-green:hover
    @apply bg-green-500
  
  .bg-emailbutton:hover
    background-color:#025d5d;
    color:white;

  </style>
  