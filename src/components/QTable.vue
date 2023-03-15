<template>
  <div class="table-container-1">
    <table class="table">
      <tr class="table-head-row">
        <td class="table-head-item">Item Name</td>
        <td class="table-head-item">Hours</td>
        <td class="table-head-item">Rate/hr</td>
        <td class="table-head-item">Tax</td>
        <td class="table-head-item">Line Total</td>
      </tr>
      <tr
        class="table-body-row"
        v-for="item in invoice.items"
        :key="item.item_name"
      >
        <td class="table-body-item">
          <div class="form-group">
            <input
              type="text"
              class="form-input form-lg"
              :value="item.item_name"
              readonly
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-input form-lg"
              placeholder="Description"
              :value="item.item_desc"
              readonly
            />
          </div>
        </td>
        <td class="table-body-item">
          <div class="form-group">
            <input
              type="text"
              class="form-input form-xs"
              :value="item.item_hrs"
              readonly
            />
          </div>
        </td>
        <td class="table-body-item">
          <div class="form-group">
            <div class="form-icon-container form-sm">
              <span class="form-icon">$</span>
              <input
                type="text"
                class="form-input form-inner"
                style="border: none !important"
                :value="item.item_rate_per_hr"
                readonly
              />
            </div>
          </div>
        </td>
        <td class="table-body-item">
          <div class="form-group">
            <div class="form-icon-container form-sm">
              <span class="form-icon">$</span>
              <input
                type="text"
                class="form-input form-inner"
                style="border: none !important; color: #ccc"
                :value="item.tax"
                readonly
              />
            </div>
          </div>
        </td>
        <td class="table-body-item">
          <div style="display: flex">
            <div class="form-group">
              <div class="form-icon-container form-sm">
                <span class="form-icon">$</span>
                <input
                  type="text"
                  class="form-input form-inner"
                  style="border: none !important"
                  :value="item.total"
                  readonly
                />
              </div>
            </div>
            <span class="table-plus-icon">+</span>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "QTable",
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
.table-container-1 {
  margin-top: 20px;
  overflow-x: auto;
  width: 100%;
  /* border-radius: 0.5rem;
  box-shadow: 0 0 0 1px #e5e7eb; */
}

.table-container-2 {
  overflow-x: auto;
  width: 100%;
}

.table {
  width: 100%;
}

.table-head-row {
  background-color: #fff;
  color: #6b7280;
  font-size: 0.8rem;
  line-height: 1rem;
  letter-spacing: 0.025em;
  text-align: left;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-collapse: collapse;
}

.table-head-item {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-weight: normal;
}

.table-body {
  background-color: #fff;
}

.table-body-row {
  color: #374151;
}

.table-body-item {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-collapse: collapse;
  vertical-align: top;
}

.form-input {
  background-color: #fcfcfc;
  border: 1px solid #f3f4f6;
  border-radius: 8px;
  padding: 10px 12px;
  outline: none;
  font-weight: 600;
}

.form-icon-container {
  background-color: #fcfcfc;
  border: 1px solid #f3f4f6;
  border-radius: 8px;
  padding: 0px 12px;
  outline: none;
  width: 150px;
}

.form-inner {
  width: 100px;
}

.form-icon {
  color: #ccc;
}

.form-lg {
  width: 350px;
}

.form-md {
  width: 350px;
}

.form-sm {
  width: 150px;
}

.form-xs {
  width: 50px;
}

.form-group {
  margin-top: 10px;
}
.table-plus-icon {
  background-color: #5b5097;
  color: #fff;
  margin: auto 0 auto 20px;
  padding: 4px 9px;
  cursor: pointer;
  border: 1px solid#5b5097;
  border-radius: 999px;
  height: 30px;
  font-weight: bold;
}
</style>
