import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {},
    },
    Property: {
      keyFields: ["_id"],
    },
    PropertyPublic: {
      keyFields: ["_id"],
    },
    PropertyPaginated: {
      fields: {
        docs: {
          merge: false, // Don't merge arrays, replace them
        },
      },
    },
    PropertyPaginatedPublic: {
      fields: {
        docs: {
          merge: false, // Don't merge arrays, replace them
        },
      },
    },
  },
});
