<template>
  <header>
    <nav class="navbar navbar-expand-lg shadow rounded ">
      <div class="container">
        <router-link to="/">
          <a class="navbar-brand" href="#"
            ><img src="https://via.placeholder.com/50x50" alt="logo" />
          </a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-filter-right"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link to="/">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </router-link>
            <li class="nav-item">
              <a class="nav-link" href="#"></a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Collection
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Loa</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Tai nghe</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"
                >Contact</a
              >
            </li>
          </ul>
          <form class="d-flex" @submit.prevent="searchProducts()">
            <input
              class="form-control position-relative"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="textSearch"
            />
            <i class="bi bi-search header-icon-search"></i>
            <!-- <button class="btn btn-outline-success position-relative" type="submit">Search</button> -->
          </form>
          <div class="header-cart">
            <router-link to="/cart">
              <i class="bi bi-cart-plus">
                <sup>{{ totalItems }}</sup>
              </i>
            </router-link>
          </div>

          <div v-if="user" class="dropdown">
            <router-link
              to="/admin/product"
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{
                user.role == 1
                  ? 'Admin'
                  : user.first_name + ' ' + user.last_name
              }}
            </router-link>

            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link v-if="user.role==1" class="dropdown-item" to="/admin/product">
                  Manager
                </router-link>
              </li>
              <li>
                <button class="dropdown-item" @click="logout">Logout</button>
              </li>
            </ul>
          </div>
          <div v-else>
            <router-link class="navbar-brand" to="/login">
              Login
            </router-link>
            <router-link class="navbar-brand" to="/register">
              Register
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
￼￼

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name: 'Header',

  data() {
    return { textSearch: '' };
  },
  created() {
    this.$store.dispatch('cart/getProductsInCart');
  },
  computed: {
    ...mapGetters('cart', ['totalItems']),
    ...mapState('user', ['user']),
  },
  methods: {
    async searchProducts() {
      await this.$store.dispatch('products/getProducts', {
        search: this.textSearch,
        pageIndex: 1,
      });
    },
    async logout() {
      await this.$store.dispatch('user/logout');
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  font-size: 15px;
  color: white;
}

header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  background-color: #362222 !important;
  border-bottom: 1px solid rgba(223, 170, 67, 0.3);
}
.dropdown-menu {
  background-color: #2b2b2b;
}
.dropdown-item {
  color: white;
}

form input {
  border: 1px solid transparent;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  border-radius: 24px;
}

.header-cart {
  padding: 5px 20px 0 10px;
  font-size: 25px;
}
.header-cart a {
  padding: 5px 20px 0 10px;
  font-size: 20px;
  color: white;
}
sup {
  border: 1px solid rgba(0, 0, 0, 0.144);
  padding: 0 2px;
  background-color: #ffb243;
  border-radius: 50%;
  text-align: center;
}
.header-icon-search {
  right: 26px;
  top: 9px;
  position: relative;
  cursor: pointer;
}
</style>
