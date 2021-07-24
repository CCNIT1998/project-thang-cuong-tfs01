<template>
  <div class="container">
    <p>Home > {{ $route.params.name }}</p>
    <div class="row">
      <div class="col">Furniture</div>
      <div class="col">
        <div class="form-group">
          <label class="text-end" for="exampleFormControlSelect1"
            >Sort by</label
          >
          <select class="form-control" id="exampleFormControlSelect1">
            <option value="price:asc">Price, Low to high</option>
            <option value="price:desc">Price, High to low</option>
          </select>
        </div>
      </div>
    </div>
    <!-- product -->
    <div class="row">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="col-sm-12 col-md-6 col-lg-3 productByCollection"
      >
        <ProductWrap :product="product" />
      </div>
    </div>
    <Pagination
          :length="lastPage"
          :pageSize="limit"
          :pageIndex="pageIndex"
          @change="changePage"
        >
        </Pagination>
  </div>
</template>
<script>
import ProductWrap from '@/components/ProductWrap.vue';
import Pagination from '@/components/Pagination.vue';
import { mapState } from 'vuex';
import parseQueryProduct from '@/utils/parseQueryProduct.js'
export default {
  name: 'collectionDetail',
  computed: {
    ...mapState('collection', ['products','pageIndex','limit','lastPage']),
  },
  components: {
    ProductWrap,
    Pagination,
  },
  methods: {
    changePage(pageIndex) {
      this.$router.push({
        name: 'Collection',
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
      let handle = this.$route.params.name;
      let collectionId;
      switch (handle) {
        case 'mp4':
          collectionId = 36;
          break;
        case 'guitar':
          collectionId = 35;
          break;
        case 'speaker':
          collectionId = 33;
          break;
        case 'headphone':
          collectionId = 34;
          break;
        default:
          collectionId = 0;
          return;
      }
      await this.$store.dispatch('collection/getProducts', {...queryUrl, collectionId});
    },
  },
  async created() {
    let handle = this.$route.params.name;
    let collectionId;
    switch (handle) {
      case 'mp4':
        collectionId = 36;
        break;
      case 'guitar':
        collectionId = 35;
        break;
      case 'speaker':
        collectionId = 33;
        break;
      case 'headphone':
        collectionId = 34;
        break;
      default:
        collectionId = 0;
        return;
    }
    await this.$store.dispatch('collection/getProducts', { collectionId });
  },
};
</script>
<style scoped>
.productByCollection{
  padding: 6px;
}
.form-group {
  display: flex;
  padding-bottom: 20px;
}
label {
  width: 100%;
  padding-right: 10px;
  line-height: 38px;
}
</style>