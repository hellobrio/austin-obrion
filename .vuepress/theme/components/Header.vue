<template>
<nav  class="z-20 flex justify-between items-center w-full" :class="{ 'fixed-header': isFixed }">
  <div class="flex w-full flex-wrap items-center justify-end md:justify-center mx-auto p-4">
  
    <button @click="toggleNav" type="button" class="bg-hamburgerbg inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-none">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="#CCFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="w-full md:block md:w-auto nav-auto" :class="showNav?'show':'hidden'">
      <ul class="font-medium flex flex-col gap-3 mt-4 glass rounded-lg md:rounded-full p-2 md:p-1 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <router-link exact to="#work" class="px-4 py-2 block w-full md:w-auto">Home</router-link to="/">
        </li>
        <li>
          <router-link exact to="#about" class="px-4 py-2 block w-full md:w-auto">About</router-link>
        </li>
        <li>
          <router-link exact to="#growth" class="px-4 py-2 block w-full md:w-auto">Advisory</router-link>
        </li>
        <li>
          <router-link exact to="#connect" class="px-4 py-2 block w-full md:w-auto">Connect</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
export default {
  name: 'Header',
  computed: {
    themeNavs () {
      return this.$themeConfig.nav
    }
  },
  data() {
    return {
      isFixed: false,
      lastScrollPosition: 0,
      showNav:false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.highlightNavbarItem);
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > 100) {
        // Scrolling down
        this.isFixed = true;
      } else {
        // Scrolling up
        this.isFixed = false;
      }

    },
    toggleNav(event){
      this.showNav = !this.showNav
    },
    highlightNavbarItem() {
      const sections = ['work', 'about', 'growth', 'connect'];

      const scrollPosition = window.scrollY;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return; // Skip if section not found

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Highlight the corresponding navbar item
          // For example, you can add a class to the navbar item
          // Or update its styling to indicate it's active
          const currentRoute = this.$route.hash;
          if (!currentRoute || currentRoute !== `#${sectionId}`) {
            this.$router.push(`/#${sectionId}`);
          }
        }
      });
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.highlightNavbarItem);
  }
}
</script>

<style lang="stylus" scoped>
.glass{
background: rgba(47, 113, 113, 0.48);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.2px);
-webkit-backdrop-filter: blur(8.2px);
border: 1px solid rgba(255, 255, 255, 0.26);
}
.router-link-exact-active {
 @apply bg-link text-white rounded-full;
}
</style>
