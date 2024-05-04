<template>
  <div class="text-black">
    <div class="px-5 md:px-20 flex" :class="index % 2 == 0 ? 'justify-start' : 'justify-end'"
      v-for="(comment, index) in comments">
      <div class="bg-comment my-2 md:my-5 w-full md:w-3/5" :class="index % 2 == 0 ? 'comment-left' : 'comment-right'">
        <div class="flex flex-col">
          <p class="text-xl italic p-10 font-nunito">{{ comment.quote }}</p>
          <div class="px-10 mb-5 font-nunito text-xl" :class="index % 2 == 0 ? 'text-left' : 'text-right'">
            <div class="flex items-center gap-5">
              <img class="h-16 w-16 rounded-full " :src="require(`../../public/images/${comment.contact_image}`)"  alt="">
              <div class="flex flex-col">
              <p class="text-left"> {{ comment.contact_name }}</p>
              <div class="text-commentColor flex gap-2 items-center"> 
                <p>{{ comment.relationship }}</p>
              <img class="w-6 h-6 ml-4" src="../../public/images/icon_linkedin-blue.svg" alt="">
              <a :href="comment.linkedin_url">View on LinkedIn</a>
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
