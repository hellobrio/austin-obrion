<template><div class="text-black">
    
   <div class="px-5 md:px-20 flex" :class="index%2==0?'justify-start':'justify-end'" v-for="(comment,index) in comments">
    <div class="bg-comment my-2 md:my-5 w-full md:w-3/5" :class="index%2==0?'comment-left':'comment-right'">
   <div class="flex flex-col">
    <p class="text-xl italic p-10 font-nunito">{{ comment.message }}</p>
    <p class="px-10 mb-5 font-nunito text-xl" :class="index%2==0?'text-left':'text-right'">--{{ comment.sender }}.</p>
   </div>
</div>
   </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'Comments',
    data() {
    return {
        comments:[
            {message:"I'm grateful for Austin's mentorship and guidance throughout my career. He knows how to motivate and is always bringing out the best qualities in his team.",sender:"Chris H"},
            {message:"During our tenure together at Cambria — and the years since then — I’ve admired Austin's fearless and process-driven approach to taking on big, bold challenges.",sender:"Dave M"},
            {message:"He is methodical and process orientated, a strong leader and has a deep knowledge of digital analytics and CRM.",sender:"MacKenzie W"},
            {message:"His reliable insight and planning has helped successfully launch new products, propel brand performance and optimize business processes.  Austin’s expertise, especially in the area of digital branding, is unmatched.",sender:"Greg L"},
        ]
    };
  },
  }
  </script>
  
  <style scoped>
.comment-left{
    border-radius:20px 20px 20px 0px
    }
.comment-right{
    border-radius:20px 20px 0px 20px
    }
</style>
