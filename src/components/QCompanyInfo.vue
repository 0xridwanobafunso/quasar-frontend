<template>
  <div class="info-container">
    <div class="info-left">
      <div class="info-left-container">
        <span class="info-left-logo">D</span>
        <div class="info-left-container-2">
          <p class="info-left-text-1">{{ company.name }}</p>
          <p class="info-left-text-2">{{ company.email }}</p>
        </div>
      </div>
    </div>
    <div class="info-right">
      <p>{{ company.street }}</p>
      <p>{{ company.city + " " + company.postal_code }}</p>
      <p>{{ company.country }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "QCompanyInfo",
  beforeMount: async () => {
    const store = useStore();

    store.dispatch("getCompanyFromMockDB");
  },
  setup() {
    const store = useStore();

    return {
      company: computed(() => store.getters.company),
    };
  },
});
</script>

<style scoped>
.info-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.info-left {
  margin-top: 10px;
  width: 100%;
}

.info-right {
  margin-top: 10px;
  width: 100%;
  text-align: left;
}

.info-right p {
  line-height: 0.6em;
  color: #6b7280;
}

.info-left-logo {
  display: inline-block;
  padding: 5px 16px;
  background-color: #3679f1;
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  border-radius: 9999px;
}

.info-left-container-2 {
  margin-top: 1rem;
}

.info-left-text-1 {
  color: #111827;
  line-height: 0.6rem;
  font-weight: 600;
}

.info-left-text-2 {
  margin-top: 20px;
  line-height: 0.6em;
  color: #6b7280;
}

@media (min-width: 1024px) {
  .info-left {
    width: 75%;
  }

  .info-right {
    width: 25%;
    text-align: right;
  }
}

@media (min-width: 768px) {
  .info-left-container {
    display: flex;
    align-items: flex-start;
  }

  .info-left-container-2 {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0;
  }
}
</style>
