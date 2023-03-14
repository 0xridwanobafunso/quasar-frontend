<template>
  <div class="image-card-container">
    <img class="image-card" src="/images/bg_invoice_card.PNG" alt="" />
    <div class="image-top-left">
      <p style="font-weight: bold">Invoice Number</p>
      <p>{{ invoice.number }}</p>
      <p>
        <span style="font-weight: bold">Issued Date</span>:
        {{ invoice.issued_date }}
      </p>
      <p>
        <span style="font-weight: bold">Due Date</span>: {{ invoice.due_date }}
      </p>
    </div>
    <div class="image-top-right">
      <p style="font-weight: bold">Billed to</p>
      <p>{{ invoice.recipient_name }}</p>
      <p>{{ invoice.recipient_company }}</p>
      <p>{{ invoice.recipient_address }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "QInvoiceCard",
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
.image-card-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: none;
}

.image-card {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 1.7rem;
}

.image-top-left {
  position: absolute;
  left: 0;
  top: 50%;
  margin-left: 30px;
  transform: translateY(-50%);
  color: #fff;
}

.image-top-right {
  position: absolute;
  right: 0;
  top: 50%;
  margin-right: 30px;
  transform: translateY(-50%);
  color: #fff;
}

@media (min-width: 1024px) {
  .image-card-container {
    display: block;
  }
}
</style>
