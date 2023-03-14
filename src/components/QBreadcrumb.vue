<template>
  <!-- breadcrumb | css -> breadcrumb.css  -->
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <span class="breadcrumb-link">
      <a>Invoices</a>
    </span>
    <span class="seperator">/</span>
    <span class="breadcrumb-link-active"
      >edit invoice ({{ invoice.number }})</span
    >
  </nav>
</template>

<script>
import { defineComponent, computed } from "vue";

import { useStore } from "vuex";

export default defineComponent({
  name: "QBreadcrumb",
  components: {},
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
.breadcrumb {
  display: flex;
}

.breadcrumb-link a {
  text-decoration: none;
  color: #4d4284;
  font-weight: bold;
}

.breadcrumb-link-active {
  color: #374151;
}

.seperator {
  margin-left: 5px;
  margin-right: 5px;
  color: #374151;
}
</style>
