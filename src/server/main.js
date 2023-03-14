import { createServer } from "miragejs";

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api";

      this.get("/ping", () => {
        return {
          message: "Mock API up and running",
        };
      });

      this.get("/company", () => {
        return {
          name: "Dipa Inhouse",
          email: "hello@dipainhouse.com",
          street: "Ijen Boulevard Street 101",
          city: "Malang City",
          postal_code: "65115",
          country: "East Java, Indonesia",
        };
      });

      this.get("/invoice", () => {
        return {
          number: "INV-2022-010",
          issued_date: "11 Jan 2020",
          due_date: "11 Jan 2020",
          recipient_name: "Zoky Grizzly",
          recipient_company: "Moonlight Agency LTD",
          recipient_address: "New York, USA",
          items: [
            {
              item_name: "Payment Project - Monlight Mobile Design",
              item_desc: "",
              item_hrs: "120",
              item_rate_per_hr: "40.00",
              tax: "00.00",
              total: "4,800.00",
            },
          ],
          payment_name: "Barley Vallendito",
          payment_number: "9700 0918 197",
          payment_routing_number: "73827275",
          payment_discount: "00.00",
          payment_tax: "00.00",
          payment_total: "4,800.00",
        };
      });
    },
  });

  return server;
}
