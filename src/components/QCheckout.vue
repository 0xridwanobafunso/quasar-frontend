<template>
  <!-- checkout | css -> checkout.css -->
  <div class="info-container-2">
    <div class="checkout-grid-1">
      <span class="info-left-text-1">Payment Method</span>
      <span class="info-left-text-3">
        <a class="info-left-text-4" href="">Select Payment</a>
      </span>

      <div class="info-left-container-3">
        <div class="flex-container">
          <span class="info-left-text-5">Wire Transfer</span>
          <div class="info-left-wise-logo">
            <img src="/images/wise.svg" class="wise-logo" alt="" />
          </div>
        </div>

        <div style="margin-top: -10px">
          <p>
            <span class="checkout-text-1">Account Name:</span>
            <span class="checkout-text-2"> {{ invoice.payment_name }}</span>
          </p>
          <p>
            <span class="checkout-text-1">Account Number:</span>
            <span class="checkout-text-2"> {{ invoice.payment_number }}</span>
          </p>
          <p>
            <span class="checkout-text-1">Routing Number:</span>
            <span class="checkout-text-2">
              {{ invoice.payment_routing_number }}</span
            >
          </p>
        </div>
      </div>
    </div>
    <div class="checkout-grid-2"></div>
    <div class="checkout-grid-3">
      <div class="info-right-container">
        <div class="info-right-container-half">
          <p class="info-right-text-1">Sub Total</p>
          <p class="checkout-text-1">Discount</p>
          <p class="checkout-text-1">Total tax</p>

          <p class="checkout-text-1" style="margin-top: 50px">Total Amount</p>
        </div>
        <div class="info-right-container-half" style="text-align: right">
          <p class="info-right-text-2">$ {{ invoice.payment_total }}</p>
          <p class="info-right-text-2">$ {{ invoice.payment_discount }}</p>
          <p class="info-right-text-2">$ {{ invoice.payment_tax }}</p>

          <p class="info-right-text-2" style="margin-top: 50px">
            $ {{ invoice.payment_total }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "QCheckout",
  beforeMount: async () => {
    const store = useStore();

    store.dispatch("getInvoiceFromMockDB");
  },
  setup() {
    const store = useStore();

    return {
      invoice: computed(() => store.getters.invoice),
    };
  },
});
</script>

<style scoped>
.checkout-grid-1,
.checkout-grid-2,
.checkout-grid-3 {
  margin-top: 10px;
  width: 100%;
}

.checkout-text-1 {
  color: #6b7280;
}

.checkout-text-2 {
  margin-left: 5px;
  font-weight: 600;
  color: #111827;
}

.info-container-2 {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-top: 25px;
}

.info-left-text-1 {
  color: #111827;
  line-height: 0.6rem;
  font-weight: 600;
}

.info-left-text-3 {
  color: #111827;
  line-height: 0.6rem;
  font-weight: 600;
  margin-top: 2px;
  float: right;
}

.info-left-text-4 {
  color: #5b5097;
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.info-left-container-3 {
  margin-top: 20px;
  background-color: #f3f4f6;
  border-radius: 1rem;
  border-width: 1px;
  border-color: #f3f4f6;
  padding: 1rem;
}

.info-left-text-5 {
  width: 70%;
  font-weight: 600;
  color: #111827;
}

.wise-logo {
  height: 80px;
  width: 80%;
  margin-top: -30px;
  margin-left: 20px;
  float: right;
}
.info-left-wise-logo {
  width: 30%;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.info-right-container {
  display: flex;
  flex-wrap: wrap;
}

.info-right-container-half {
  width: 50%;
}

.info-right-text-1 {
  font-weight: 600;
  color: #111827;
}

.info-right-text-2 {
  font-weight: 600;
  color: #111827;
}

@media (min-width: 1024px) {
  .checkout-grid-1 {
    width: 40%;
  }
  .checkout-grid-2 {
    width: 20%;
  }
  .checkout-grid-3 {
    width: 40%;
  }
}
</style>
