<template>
  <div class="col-3 mt-3">
    <!-- <router-link
      class="link"
      :to="{ name: 'editProduct', params: { product: product } }"
    > -->
    <div class="card h-100 text-left" v-on:click.capture="openEditForm">
      <div class="card-body">
        <h4 class="card-title">
          {{ product.productName }}
        </h4>
        <p class="card-text">
          <strong> Unit Manu Cost: </strong>{{ product.unitManufacturingCost }}
        </p>
        <p class="card-text">
          <strong> Ship Unit Cost:</strong> {{ product.shipmentUnitCost }}
        </p>

        <p class="card-text">
          <strong> Monthly Adv Cost: </strong
          >{{ product.monthlyAdvertismentCost }}
        </p>
        <p class="card-text">
          <strong> Manu Country: </strong>{{ product.manufacturingCountry }}
        </p>
      </div>
    </div>
    <!-- </router-link> -->
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openEditForm() {
      this.$router.push({
        name: 'editProduct',
        params: { product: this.product },
      });
    },
  },
};
</script>

<style>
.card {
  margin: 10px;
  background-color: lightblue;
}
.card-title {
  height: 6rem;
}
</style>
