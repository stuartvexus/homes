export const invoiceProperties = {
  type: "object",
  properties: {
    property_id: { type: "string" },
    name: { type: "string" },
    booking_id:{type:"string"},
    user_id: { type: "string" },
    amount:{type:"number"},
    date:{type:"string"},
	merchantRequestId:{type:"string"},
	checkoutRequestId:{type:"string"},
	due:{type:"date"},
  },
};

export const bookingProperties = {
  type: "object",
  properties: {
    property_id: { type: "string" },
	property:{type:"object",properties: {
		property_id: { type: "string" },
		name: { type: "string" },
		address: { type: "string" },
		description: { type: "string" },
		type: { type: "string" },
		position: {
		  type: "object",
		  properties: { lat: { type: "number" }, lng: { type: "number" } },
		},
		price: { type: "number" },
		enquiries: { type: "array" },
		features: { type: "array" },
		profileImage: { type: "string" },
		images: { type: "array" },
		currency: { type: "string" },
		contactNumber: { type: "string" },
		contactEmail: { type: "string" },
		createdAt: { type: "string" },
		updatedAt: { type: "string" },
		user_id: { type: "string" },
		}
	},
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