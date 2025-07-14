import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { cache } from "./apolloCache";
import { useAuthStore } from "@/store/useAuthStore";

// Environment configuration
const getGraphQLEndpoint = () => {
  // React Native environment
  console.log(
    "===> 🥶 NEXT_PUBLIC_GRAPHQL_URL",
    process.env.NEXT_PUBLIC_GRAPHQL_URL
  );

  console.log("===> 🙈 NEXT_PUBLIC_BASE_URL", process.env.NEXT_PUBLIC_BASE_URL);
  if (typeof window === "undefined" && typeof global !== "undefined") {
    // React Native environment
    return (
      process.env.NEXT_PUBLIC_GRAPHQL_URL || process.env.EXPO_PUBLIC_GRAPHQL_URL
    );
  }
  // Browser environment
  if (typeof window !== "undefined") {
    return process.env.NEXT_PUBLIC_GRAPHQL_URL;
  }
  // Server/Node environment
  return process.env.NEXT_PUBLIC_GRAPHQL_URL;
};

// Error Link
const errorLink = onError(({ operation, graphQLErrors, networkError }) => {
  console.log("🔥", operation);

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `🚨 [GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.log(`🚨 Network error]: ${networkError}`);
  }
});

// HTTP Link
const httpLink = new HttpLink({
  uri: getGraphQLEndpoint(),
});

// Auth Link
const authLink = setContext(async (_, { headers }) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Use Zustand store for token
  const getFreshToken = useAuthStore.getState().getFreshToken;
  const token = await getFreshToken();
  console.log("🚀 ~ authLink ~ token (zustand):", token);

  let platform = "Unknown";
  let deviceType = "Unknown";

  if (typeof window !== "undefined") {
    platform = "Web";
    deviceType = "Browser";
  } else if (typeof global !== "undefined") {
    platform = "React Native";
    deviceType = "Mobile";
  } else {
    platform = "Server";
    deviceType = "Node";
  }

  const userAgent = `hommi-dashboard v1.1.0 (${platform}; ${deviceType})`;

  return {
    headers: {
      ...headers,
      authorization:
        process.env.EXPO_PUBLIC_AUTHORIZATION ||
        process.env.NEXT_PUBLIC_AUTHORIZATION,
      ...(token !== null && { "x-token": `Bearer ${token}` }),
      timeZone,
      "user-agent": userAgent,
      "x-device-os": platform,
    },
  };
});

// Create the Apollo Client
const link = ApolloLink.from([errorLink, authLink, httpLink]);

export const client = new ApolloClient({
  connectToDevTools: true,
  link,
  cache,
});

export default client;
