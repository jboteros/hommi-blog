// Hook-based client (for React components)
export { useViewer, viewerFragment, GET_VIEWER_QUERY } from "./hooks/useViewer";
export {
  useGetPropertiesPublic,
  useGetProperty,
  propertiesPublicFragment,
  GET_PROPERTIES_PUBLIC_QUERY,
} from "./hooks/useGetProperties";

export * from "./gql/graphql";
export { useFragment } from "./gql/fragment-masking";

// Generated types and documents
export type {
  Viewer,
  Viewer_FragmentFragment,
  GetViewerQuery,
  GetViewerQueryVariables,
  UpdateViewerMutation,
  UpdateViewerMutationVariables,
  InputViewerUpdate,
  InputViewerCreate,
  Property,
  PropertyPublic,
  GetPropertiesPublicQuery,
  GetPropertiesPublicQueryVariables,
} from "./gql/graphql";

// Export the union type for properties
export type { PropertyUnion } from "./hooks/useGetProperties";

// Direct client (for server-side or non-React usage)
export { client } from "./client";
export { default as apolloClient } from "./client";

// Cache
export { cache } from "./apolloCache";

// Provider component
export { GraphQLProvider } from "./provider";
