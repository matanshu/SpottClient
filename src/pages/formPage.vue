<template>
  <div class="container">
    <p></p>
    <b
      ><h4 class="title">Edit Product: {{ form.productName }}</h4></b
    >
    <p></p>
    <b-form @submit.prevent="onSave" @reset.prevent="onReset">
      <b-form-group
        id="UnitManufacturingCost"
        label-cols-sm="5"
        label="Unit manufacturing cost:"
        label-for="UnitManufacturingCost"
      >
        <b-form-input
          id="UnitManufacturingCost"
          v-model="form.unitManufacturingCost"
          type="number"
          step="any"
          min="0"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="ShipmentUnitCost"
        label-cols-sm="5"
        label="Shipment unit cost"
        label-for="ShipmentUnitCost"
      >
        <b-form-input
          id="ShipmentUnitCost"
          v-model="form.shipmentUnitCost"
          type="number"
          step="any"
          required
          min="0"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="MonthlyAdvertisingCost"
        label-cols-sm="5"
        label="Monthly advertising cost:"
        label-for="MonthlyAdvertisingCost"
      >
        <b-form-input
          id="MonthlyAdvertisingCost"
          v-model="form.monthlyAdvertismentCost"
          type="number"
          step="any"
          required
          min="0"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="ManufacturingCountry"
        label-cols-sm="5"
        label="Manufacturing country:"
        label-for="ManufacturingCountry"
      >
        <b-form-select
          class="select"
          id="country"
          v-model="form.manufacturingCountry"
          :options="countries"
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary" class="savebtn ml-5"
        >save update</b-button
      >
    </b-form>
  </div>
</template>

<script>
import file from '../assets/countries.json';
// import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      countries: [{ value: null, text: '', disabled: true }],
      form: {
        id: '',
        productName: '',
        unitManufacturingCost: 0,
        shipmentUnitCost: 0,
        monthlyAdvertismentCost: 0,
        manufacturingCountry: '',
      },
      errors: [],
      // validated: false,
    };
  },
  // validations: {
  //   form: {
  //     id: {
  //       required,
  //     },
  //     productName: {
  //       required,
  //     },
  //     unitManufacturingCost: {
  //       required,
  //     },
  //     shipmentUnitCost: {
  //       required,
  //     },
  //     monthlyAdvertismentCost: {
  //       required,
  //     },
  //     manufacturingCountry: {
  //       required,
  //     },
  //   },
  // },
  async mounted() {
    let countries = file.map((x) => x.name);
    this.countries.push(...countries);
    this.updateData();
  },
  methods: {
    // validateState(param) {
    //   const { $dirty, $error } = this.$v.form[param];
    //   return $dirty ? !$error : null;
    // },
    updateData() {
      try {
        let product = this.$route.params.product;
        this.form.id = product.id;
        this.form.productName = product.productName;
        this.form.unitManufacturingCost = product.unitManufacturingCost;
        this.form.monthlyAdvertismentCost = product.monthlyAdvertismentCost;
        this.form.manufacturingCountry = product.manufacturingCountry;
        this.form.shipmentUnitCost = product.shipmentUnitCost;
      } catch (error) {
        console.log(error);
      }
    },
    async onSave() {
      try {
        await this.axios.post('http://localhost:3001/cogs', {
          id: this.form.id,
          productName: this.form.productName,
          unitManufacturingCost: this.form.unitManufacturingCost,
          shipmentUnitCost: this.form.shipmentUnitCost,
          monthlyAdvertismentCost: this.form.monthlyAdvertismentCost,
          manufacturingCountry: this.form.manufacturingCountry,
        });
        this.$router.push('/');
      } catch (err) {
        console.log(err.response);
      }
    },
  },
};
</script>
<style>
.select {
  width: 100%;
}
.savebtn {
  width: 100%;
  margin-top: 50px;
}
</style>
