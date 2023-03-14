import { createServer } from "miragejs";

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api";

      this.get("/ping", () => {
        return {
          success: true,
          message: "Mock API up and running",
          data: {},
          code: 200,
        };
      });

      this.get("/company", () => {
        return {
          success: true,
          message: "Company retrieved successfully",
          data: {
            company: {
              name: "Dipa Inhouse",
              email: "hello@dipainhouse.com",
              street: "Ijen Boulevard Street 101",
              city: "Malang City",
              postal_code: "65115",
              country: "East Java, Indonesia",
            },
          },
        };
      });

      this.get("/invoices", () => {
        return {
          success: true,
          message: "Invoice retrieved successfully",
          data: {
            invoice: {
              number: "INV-2022-010",
              issued_date: "11 Jan 2020",
              due_date: "11 Jan 2020",
              recepient: {
                name: "Zoky Grizzly",
                company: "Moonlight Agency LTD",
                address: "New York, USA",
              },
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
              payment: {
                name: "Barley Vallendito",
                number: "9700 0918 197",
                routing_number: "73827275",
                discount: "00.00",
                tax: "00.00",
                total: "4,800.00",
              },
            },
          },
          code: 200,
        };
      });
    },
  });

  return server;
}
