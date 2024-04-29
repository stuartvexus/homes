export const invoiceProperties = {
  type: "object",
  properties: {
    property_id: { type: "string" },
    name: { type: "string" },
    booking_id:{type:"string"},
    user_id: { type: "string" },
    amount:{type:"number"},
    date:{type:"string"},

  },
};

export const bookingProperties = {
  type: "object",
  properties: {
    property_id: { type: "string" },
	property:{type:"object"},
    name: { type: "string" },
	name:{type:"string"},
	amount: {type:"number"},
	phone:{type:"string"},
    booking_id:{type:"string"},
    user_id: { type: "string" },
	invoice_id:{type:"string"},
	status:{type:"string"},
  accepted:{type:"boolean"},
  complete:{type:"boolean"},
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