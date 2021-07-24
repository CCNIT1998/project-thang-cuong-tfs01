import {  getProductByCollection} from '@/service/products.service.js';

const state = {
  collections:[],
  products: [],
  total: 0,
  isLoading: false,
  pageIndex: 1,
  lastPage: 0,
  limit: 4,
  sort: '',
  order: '',
  search: '',
  colllectionId:0,
};
// const getters = {
//   listImage(state) {
//     let images = [...state.product.image]
//     console.log(images)
//       images = images.map((item) => {
//         console.log(item)
//         return "http://localhost:3000/images/" + item.url
//       })
//       return images
//   }

// }



const actions = {
  async getProducts(
    { state, commit },
    { pageIndex, limit, sort, order, search, collectionId }
  ) {
    commit('setLoading', true);
    if (pageIndex) commit('setPageIndex', pageIndex);
    if (limit) commit('setLimit', limit);
    if (sort) commit('setSort', sort);
    if (order) commit('setOrder', order);
    if (search !== undefined) commit('setSearch', search);
    if (collectionId) commit('setCollectionId', collectionId);

    const response = await getProductByCollection({
      page: state.pageIndex,
      limit: state.limit,
      sort: state.sort,
      order: state.order,
      search: state.search,
      collection_id: collectionId,
    })
    console.log(response.data)
    commit('setProducts', response.data);
    commit('setLastPage', response.meta.last_page);
    commit('setTotal', response.meta.total);
    commit('setLoading', false);
  },
};
const mutations = {
  setLoading(state, status) {
    state.isLoading = status;
  },
  setProducts(state, response) {
    state.products = response;
  },
  setProduct(state, product) {
    state.product = product;
  },
  setPageIndex(state, index) {
    index = parseInt(index, 10);
    state.pageIndex = index;
  },
  setLimit(state, limit) {
    state.limit = limit;
  },
  setOrder(state, order) {
    state.order = order;
  },
  setSearch(state, search) {
    state.search = search;
  },
  setCollectionId(state, category) {
    state.category = category;
  },
  setTotal(state, total) {
    state.total = total;
  },
  setLastPage(state, total) {
    state.lastPage = total;
  },
  setSort(state, sort) {
    state.sort = sort;
  },
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,

};