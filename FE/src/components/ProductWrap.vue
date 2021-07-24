<template>
  <div class="card" style="width: 18rem;">
    <div class="card-product" >
      <img
        :src="
          products?.images
            ? product.image[0]
            : 'https://cf.shopee.vn/file/f4e3e6dd332e562a176a23a92a3ec6d0'
        "
        class="card-img-top"
        alt="loi"
        @click="toProductDetail"
      />
    </div>
    <div class="card-body text-start">
      <h6 class="card-title">{{ product?.name ? product.name : '' }}</h6>
      <p class="card-text">
        {{ product?.price ? product.price : '' }}
      </p>
      <button class="btn" @click="addProductToCart(product)">Buy</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductWrap',
  props: ['product'],
  methods: {
    addProductToCart(item) {
      this.$store.dispatch('cart/addProductToCart', item);
    },
    toProductDetail() {
      this.$router.push(`/products/${this.product.handle}`);
    },
  },
};
</script>
<style scoped>
.card {
  background-color: transparent;
  max-width: 250px;
}
.card img{
  max-width: 250px;
  max-height: 250px;
  display: block;
  text-align: center;
  margin: 0 auto;
}
.card-title{
  max-width: 250px;
  max-height: 250px;
  display: block;
  /* text-align: center; */
  margin: 0 auto;
  font-size: 15px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.card-body {
  padding: 1rem 0rem;
}
.btn {
  color: red;
  border: 1px solid;
}
.btn:hover {
  background-color: yellow;
}
.card-product::before {
  content: '';
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in;
  z-index: -1;
}
.card-product:hover:before {
  visibility: visible;
  opacity: 1;
}
</style>
