<template>
  <div class="wrapper">
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
    <notifications />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
// import Slide from "@/components/Slide.vue";
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    // Slide,
    Footer,
  },
};
</script>

<style>
* {
  color: white;
}
body {
  padding-top: 4rem;
  padding-bottom: 3rem;
  background-color: #171010;
}
</style>
