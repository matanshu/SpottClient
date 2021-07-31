<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card
      v-for="product in this.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
import ProductCard from './ProductCard';
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const response = await this.axios.get('http://localhost:3001/products');
        console.log(response.status);
        if (response.status != 404) {
          this.products = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
