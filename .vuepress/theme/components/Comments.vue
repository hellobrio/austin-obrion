<template>
  <div class="">
    <p class="font-nunito font-bold leading-none text-4xl text-center">TESTIMONIALS</p>
    <div class="px-5 md:px-20 flex" :class="index % 2 == 0 ? 'justify-start' : 'justify-end'"
      v-for="(comment, index) in comments">
      <div class="bg-comment my-2 md:my-5 w-full md:w-3/5 text-black" :class="index % 2 == 0 ? 'comment-left' : 'comment-right'">
        <div class="flex flex-col">
          <p class="text-xl italic p-10 font-nunito">{{ comment.quote }}</p>
          <div class="px-10 mb-5 font-nunito text-xl" :class="index % 2 == 0 ? 'text-left' : 'text-right'">
            <div class="flex items-center gap-5">
              <img class="h-16 w-16 rounded-full " :src="require(`../../public/images/${comment.contact_image}`)"
                alt="">
              <div class="flex flex-col">
                <p class="text-left"> {{ comment.contact_name }}</p>
                <div class="text-commentColor flex gap-2 items-center">
                  <div class="flex flex-col xl:flex-row items-left xl:items-center">
                    <p class="text-sm sm:text-md md:text-sm italic">{{ comment.relationship }}</p>
                   <div class="flex items-center">
                    <img class="w-6 h-6 mr-2 xl:ml-4" src="../../public/images/icon_linkedin-blue.svg" alt="">
                    <a :href="comment.linkedin_url" target="_blank" class="text-sm sm:text-md md:text-sm border-b-2 border-teal-700">View on LinkedIn</a>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { testimonials } from "../../Testimonials.js"
export default {
  name: 'Comments',
  data() {
    return {
      comments: testimonials
    };
  },
}
</script>

<style scoped>
.comment-left {
  border-radius: 20px 20px 20px 0px
}

.comment-right {
  border-radius: 20px 20px 0px 20px
}
</style>
