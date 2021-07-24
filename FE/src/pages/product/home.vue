<template>
  <main class="main container">
    <Slide />
    <div class="marketing text-center mb-5 pt-2 pb-4">
      <!-- Four columns of text below the carousel -->
      <h4 class="mb-5">Quick links to what you're looking for</h4>
      <div class="row text-center">
        <div class="col-lg-3">
          <router-link to="/collection/mp4">
            <img
              class="bd-placeholder-img rounded-circle"
              width="220"
              height="220"
              src="https://lh3.googleusercontent.com/-0oHz0_YU-CM/XNW7_9lwipI/AAAAAAAAmec/yHQWJOrZGB4Wfra8XroaUQoeG6aDexORgCLcBGAs/s1600/may-nghe-dai-fm-vintage-coocaa-live-time-banner-1-min.jpg"
              role="img"
            />
            <h4 class="pt-3">Mp4</h4>
          </router-link>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-3">
           <router-link to="/collection/guitar">
          <img
            class="bd-placeholder-img rounded-circle"
            width="220"
            height="220"
            src="https://i.pinimg.com/originals/1a/13/85/1a1385cee2b4acd86efa327a67268c5a.jpg"
            role="img"
          />

          <h4 class="pt-3">Guitar</h4>
          </router-link>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-3">
          <router-link to="/collection/headphone">
          <img
            class="bd-placeholder-img rounded-circle"
            width="220"
            height="220"
            src="https://previews.123rf.com/images/wamsler/wamsler2102/wamsler210200061/164752247-audio-book-concept-with-books-and-vintage-headphones-literature-entertainment-education-close-up-sel.jpg"
            role="img"
          />

          <h4 class="pt-3">Headphone</h4>
          </router-link>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-3">
          <router-link to="/collection/speaker">
          <img
            class="bd-placeholder-img rounded-circle"
            width="220"
            height="220"
            src="https://i.pinimg.com/originals/1a/13/85/1a1385cee2b4acd86efa327a67268c5a.jpg"
            role="img"
          />

          <h4 class="pt-3">Speaker</h4>
          </router-link>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->
    </div>
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <div class="row text-center pt-5 pb-2">
      <h4 class="mb-5">Quick links to what you're looking for</h4>

      <div class="col-12 col-md-6 col-lg-3">
        <ProductWrap />
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <ProductWrap />
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <ProductWrap />
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <ProductWrap />
      </div>
    </div>
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <div class="banner mb-4">
      <div class="hero-image">
        <div class="hero-text">
          <h1 style="font-size:50px">Vintage</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <button>Buy</button>
        </div>
      </div>
    </div>
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <div class="row">
      <div class="col-6 section-1">
        <div class=" hero-image">
          <div class="hero-text">
            <h1 style="font-size:50px">Vintage</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam
            </p>
            <button>Buy</button>
          </div>
        </div>
      </div>
      <div class="col-6 section-2">
        <div class=" hero-image">
          <div class="hero-text">
            <h1 style="font-size:50px">Vintage</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam
            </p>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </div>

    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->

    <div class="testimonials-clean">
      <div class="container">
        <div class="intro">
          <h2 class="text-center">Testimonials</h2>
          <p class="text-center">
            Our customers love us! Read what they have to say below. Aliquam sed
            justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
          </p>
        </div>
        <div class="row people">
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <p class="description">
                Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                finibus est.
              </p>
            </div>
            <div class="author">
              <img
                class="rounded-circle"
                src="https://i.imgur.com/nUNhspp.jpg"
              />
              <h5 class="name">Ben Johnson</h5>
              <p class="title">CEO of Company Inc.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <p class="description">
                Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                est, et interdum justo suscipit id.
              </p>
            </div>
            <div class="author">
              <img
                class="rounded-circle"
                src="https://i.imgur.com/o5uMfKo.jpg"
              />
              <h5 class="name">Carl Kent</h5>
              <p class="title">Founder of Style Co.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <p class="description">
                Aliquam varius finibus est, et interdum justo suscipit.
                Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam
                in tellus eu.
              </p>
            </div>
            <div class="author">
              <img
                class="rounded-circle"
                src="https://i.imgur.com/At1IG6H.png"
              />
              <h5 class="name">Emily Clark</h5>
              <p class="title">Owner of Creative Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <Pagination
      :length="lastPage"
      :pageSize="limit"
      :pageIndex="pageIndex"
      @change="changePage"
    >
    </Pagination> -->
  </main>
</template>
<script>
import { mapState } from 'vuex';
import Slide from '@/components/Slide.vue';
import parseQueryProduct from '@/utils/parseQueryProduct.js';
import formatMoney from '@/utils/formatMoney.js';
import ProductWrap from '@/components/ProductWrap.vue';
export default {
  name: 'Home',
  components: {
    Slide,
    ProductWrap,
  },
  computed: {
    ...mapState('products', [
      'isLoading',
      'products',
      'totalItems',
      'pageIndex',
      'limit',
      'lastPage',
      'sort',
      'search',
      'order',
    ]),
  },
  methods: {
    handle(name) {
      return name;
    },
    formatMoney,
    changePage(pageIndex) {
      this.$router.push({
        name: 'Product',
        query: { page: pageIndex, sort: this.sort, order: this.order },
      });
    },
    sortPrice(sort) {
      this.$router.push({
        name: 'Product',
        query: { page: this.pageIndex, sort: sort, order: 'price' },
      });
    },
  },
  watch: {
    async '$route.query'() {
      let queryUrl = parseQueryProduct(this.$route.query);
      await this.$store.dispatch('products/getProducts', queryUrl);
    },
  },
  async created() {
    let queryUrl = parseQueryProduct(this.$route.query);
    queryUrl.limit = 6;
    await this.$store.dispatch('products/getProducts', queryUrl);
  },
};
</script>
<style scoped>
.col-lg-4 {
  text-align: center;
}
.banner-wrap {
  min-height: 756px;
  width: 100%;
}
a{
  text-decoration: none;
}
.rounded-circle:hover{ 
  transform: scale(1.1);
  transition-timing-function: ease-in
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: #000;
  z-index: 10;
  opacity: 0.4;
  transition: opacity 0.15s ease-out;
  backface-visibility: hidden;
}
.banner .hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://landolatui.files.wordpress.com/2014/02/vintage-white-guitar-music-hd-wallpaper-1920x1080-9102.jpg?w=584');
  height: 420px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}
.hero-text button:hover {
  background-color: #555;
  color: white;
}
.section-1 .hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://www.hifivietnam.vn/wp-content/uploads/2020/03/ezgif_com_webp_to_jpg_8__tzeu.jpg');
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.section-2 .hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://thegadgetflow.com/wp-content/uploads/2019/10/AmazonBasics-Vintage-Retro-Inspired-Bluetooth-Speaker-01.jpg');
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.testimonials-clean {
  color: #313437;
}
.testimonials-clean p {
  color: #7d8285;
}
.testimonials-clean h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: inherit;
}
@media (max-width: 767px) {
  .testimonials-clean h2 {
    margin-bottom: 25px;
    padding-top: 25px;
    font-size: 24px;
  }
}
.testimonials-clean .intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto;
}
.testimonials-clean .intro p {
  margin-bottom: 0;
}
.testimonials-clean .people {
  padding: 50px 0 20px;
}
.testimonials-clean .item {
  margin-bottom: 32px;
}
@media (min-width: 768px) {
  .testimonials-clean .item {
    height: 220px;
  }
}
.testimonials-clean .item .box {
  padding: 30px;
  background-color: #fff;
  position: relative;
}
.testimonials-clean .item .box:after {
  content: '';
  position: absolute;
  left: 30px;
  bottom: -24px;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-width: 12px 15px;
  border-top-color: #fff;
}
.testimonials-clean .item .author {
  margin-top: 28px;
  padding-left: 25px;
}
.testimonials-clean .item .name {
  font-weight: bold;
  margin-bottom: 2px;
  color: inherit;
}
.testimonials-clean .item .title {
  font-size: 13px;
  color: #9da9ae;
}
.testimonials-clean .item .description {
  font-size: 15px;
  margin-bottom: 0;
}
.testimonials-clean .item img {
  max-width: 40px;
  float: left;
  margin-right: 12px;
  margin-top: -5px;
}
</style>