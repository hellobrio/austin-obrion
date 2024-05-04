<template>
    <div class="text-black" id="work">
        <div class="flex flex-wrap md:flex-no-wrap gap-0 md:gap-5 lg:gap-10 sm:px-10 lg:px-20 sm:my-5 lg:my-10">
      <div class="w-full xs:w-1/2 lg:w-1/3 workImage work1 mb-5 md:mb-0" @click="activeWork===1?activeWork=null:activeWork=1">
        <div class="flex flex-col items-end">
          <p class="leading-3 mt-10 px-10 text-2xl font-nunito">TOKEN OF TRUST</p>
          <p class="text-4xl leading-10 font-rubik font-bold px-10">Onboarding</p>
        </div>
       <div class="w-full flex justify-end px-10 mt-5">
        <div class="p-10 rounded-md text-white flex flex-col items-center justify-center bg-gray-700 transition-opacity duration-700 ease-in"
        :class="activeWork===1?'opacity-100':'opacity-0'"
        >
              <span>Work Examples</span>
              <span>Coming Soon.</span>
            </div>
       </div>
      </div>
      <div class="w-full xs:w-1/2 lg:w-2/3 workImage work2 mb-5 md:mb-0" @click="activeWork===2?activeWork=null:activeWork=2">
        <div class="flex flex-col items-end">
          <p class="leading-3 mt-10 px-10 text-2xl font-nunito">TOKEN OF TRUST</p>
          <p class="text-4xl leading-10 font-rubik font-bold px-10 text-right">Revenue Growth</p>
        </div>
        <div class="w-full flex justify-end px-10 mt-5">
        <div class="p-10 rounded-md text-white flex flex-col items-center justify-center bg-gray-700 transition-opacity duration-700 ease-in"
        :class="activeWork===2?'opacity-100':'opacity-0'"
        >
              <span>Work Examples</span>
              <span>Coming Soon.</span>
            </div>
       </div>
      </div>
    </div>
    <div class="flex flex-wrap md:flex-no-wrap gap-0 md:gap-5 lg:gap-10 sm:px-10 lg:px-20 sm:my-5 lg:my-10">
      <div class="w-full xs:w-1/2 lg:w-2/3 workImage work3 mb-5 md:mb-0"  @click="activeWork===3?activeWork=null:activeWork=3">
        <div class="flex flex-col items-end">
          <p class="leading-3 mt-10 px-10 text-2xl font-nunito">CAMBRIA</p>
          <p class="text-4xl leading-10 font-rubik font-bold px-10 text-right">Digital Marketing</p>
        </div>
        <div class="w-full flex justify-end px-10 mt-5">
        <div class="p-10 rounded-md text-white flex flex-col items-center justify-center bg-gray-700 transition-opacity duration-700 ease-in"
        :class="activeWork===3?'opacity-100':'opacity-0'"
        >
              <span>Work Examples</span>
              <span>Coming Soon.</span>
            </div>
       </div>
      </div>
      <div class="w-full xs:w-1/2 lg:w-1/3 workImage work4  mb-5 md:mb-0" @click="activeWork===4?activeWork=null:activeWork=4">
        <div class="flex flex-col items-end">
          <p class="leading-3 mt-10 px-10 text-2xl font-nunito">MICHAEL FOODS</p>
          <p class="text-4xl leading-10 font-rubik font-bold px-10">Go-to-Market</p>
        </div>
        <div class="w-full flex justify-end px-10 mt-5">
        <div class="p-10 rounded-md text-white flex flex-col items-center justify-center bg-gray-700 transition-opacity duration-700 ease-in"
        :class="activeWork===4?'opacity-100':'opacity-0'"
        >
              <span>Work Examples</span>
              <span>Coming Soon.</span>
            </div>
       </div>
      </div>
    </div>

    <div class="flex flex-wrap md:flex-no-wrap gap-0 md:gap-5 lg:gap-10 sm:px-10 lg:px-20">
      <div class="w-full xs:w-1/2 lg:w-1/3 workImage work5 mb-5 md:mb-0" @click="activeWork===5?activeWork=null:activeWork=5">
        <div class="flex flex-col items-end">
          <p class="leading-3 mt-10 px-10 text-2xl font-nunito">OTTOBOCK</p>
          <p class="text-4xl leading-10 font-rubik font-bold px-10">CX Research</p>
        </div>
        <div class="w-full flex justify-end px-10 mt-5">
        <div class="p-10 rounded-md text-white flex flex-col items-center justify-center bg-gray-700 transition-opacity duration-700 ease-in"
        :class="activeWork===5?'opacity-100':'opacity-0'"
        >
              <span>Work Examples</span>
              <span>Coming Soon.</span>
            </div>
       </div>
      </div>
      <div class="w-full xs:w-1/2 lg:w-2/3 workImage work6" @click="activeWork===6?activeWork=null:activeWork=6">
        <div class="flex flex-col items-end">
          <p class="leading-3 mt-10 px-10 text-2xl font-nunito">LEMOND</p>
          <p class="text-4xl leading-10 font-rubik font-bold px-10">Brand & GTM</p>
        </div>
        <div class="w-full flex justify-end px-10 mt-5">
        <div class="p-10 rounded-md text-white flex flex-col items-center justify-center bg-gray-700 transition-opacity duration-700 ease-in"
        :class="activeWork===6?'opacity-100':'opacity-0'"
        >
              <span>Work Examples</span>
              <span>Coming Soon.</span>
            </div>
       </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Work',
    data:function(){
      return{
        activeWork:0
      }
    },
    watch:{
      activeWork: function (newQuestion, oldQuestion) {
        setTimeout(() => {
          this.activeWork=null
        }, 2000);
    }
    }
  }
  </script>
  
 
<style lang="stylus" scoped>
.workImage{
  height: 25rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  cursor:pointer
}

@media (max-width: 767.98px) {
  /* CSS rules for small screens */
  .workImage{
  height: 20rem;
}
}
.workImage:hover{
  transition: all 0.3s ease
  transform: translateY(10px)
  }
.workImage p{
  transition: all 0.3s ease
  }
.workImage:hover p{
  transition: all 0.3s ease
  transform: translateY(-20px)
  }
.work1{
  background: url('../../public/images/work1.webp') no-repeat center center
  background-size: cover;
}
.work2{
  background: url('../../public/images/work2.webp') no-repeat center center
  background-size: cover;
}
.work3{
  background: url('../../public/images/work3.webp') no-repeat center center
  background-size: cover;
}
.work4{
  background: url('../../public/images/work4.webp') no-repeat center center
  background-size: cover;
}
.work5{
  background: url('../../public/images/work5.webp') no-repeat center center
  background-size: cover;
}
.work6{
  background: url('../../public/images/work6.webp') no-repeat center center
  background-size: cover;
}
</style>
