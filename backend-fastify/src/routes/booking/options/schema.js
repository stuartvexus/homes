export const invoiceProperties = {
  type: "object",
  invoice: {
    property_id: { type: "string" },
    name: { type: "string" },
    booking_id:{type:"sring"},
    user_id: { type: "string" },
    amount:{type:"number"},
    date:{type:"string"},

  },
};

export const bookingProperties = {
  type: "object",
  properties: {
    property_id: { type: "string" },
    name: { type: "string" },
    booking_id:{type:"string"},
    user_id: { type: "string" },
  },
};
Object.freeze(bookingProperties);

Object.freeze(invoiceProperties);

/*

export const bookingsProperties = {
  type: "object",
  properties: {
    property_id: { type: "string" },
    name: { type: "string" },
    booking_id:{type:"String"},
    user_id: { type: "string" },
  },
};
Object.freeze(bookingsProperties);
*/