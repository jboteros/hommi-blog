// Hook-based client (for React components)
export {
  useGetBlogs,
  useGetBlog,
  useGetBlogById,
  useDeleteBlog,
  useUpdateBlog,
  useCreateBlog,
  useGetBlogStats,
} from "./hooks/useGetBlogs";

export * from "./gql/graphql";
export { useFragment } from "./gql/fragment-masking";

// Generated types and documents
export type {
  Blog,
  BlogPublic,
  BlogPublicFragmentFragment,
  GetBlogsQuery,
  GetBlogsQueryVariables,
  GetBlogQuery,
  GetBlogQueryVariables,
  GetBlogByIdQuery,
  GetBlogByIdQueryVariables,
  DeleteBlogMutation,
  DeleteBlogMutationVariables,
  UpdateBlogMutation,
  UpdateBlogMutationVariables,
  CreateBlogMutation,
  CreateBlogMutationVariables,
  BlogInput,
  GetBlogStatsQuery,
  GetBlogStatsQueryVariables,
} from "./gql/graphql";

// Direct client (for server-side or non-React usage)
export { client } from "./client";
export { default as apolloClient } from "./client";

// Cache
export { cache } from "./apolloCache";

// Provider component
export { GraphQLProvider } from "./provider";
