import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import { get } from "axios";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: () => ({
      ping: {},
      company: {},
      invoice: {},
    }),
    getters: {
      ping: (state) => {
        return state.ping;
      },
      company: (state) => {
        return state.company;
      },
      invoice: (state) => {
        return state.invoice;
      },
    },
    mutations: {
      updatePing: (state, payload) => {
        state.ping = payload;
      },
      updateCompany: (state, payload) => {
        state.company = payload;
      },
      updateInvoice: (state, payload) => {
        state.invoice = payload;
      },
    },
    actions: {
      getPingFromMockDB: async ({ commit }) => {
        let { data } = await get("/api/ping");

        commit("updatePing", data);
      },
      getCompanyFromMockDB: async ({ commit }) => {
        let { data } = await get("/api/company");

        commit("updateCompany", data);
      },
      getInvoiceFromMockDB: async ({ commit }) => {
        let { data } = await get("/api/invoice");

        commit("updateInvoice", data);
      },
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
