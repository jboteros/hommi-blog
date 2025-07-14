import { useQuery, useMutation } from "@apollo/client";
import {
  GetBlogsDocument,
  GetBlogsQuery,
  GetBlogsQueryVariables,
  GetBlogDocument,
  GetBlogQuery,
  GetBlogQueryVariables,
  GetBlogByIdDocument,
  GetBlogByIdQuery,
  GetBlogByIdQueryVariables,
  DeleteBlogDocument,
  DeleteBlogMutation,
  DeleteBlogMutationVariables,
  UpdateBlogDocument,
  UpdateBlogMutation,
  UpdateBlogMutationVariables,
  BlogInput,
  GetBlogStatsDocument,
  GetBlogStatsQuery,
  CreateBlogMutation,
  CreateBlogMutationVariables,
  CreateBlogDocument,
} from "../gql/graphql";
import { useAuthStore } from "@/store/useAuthStore";

type UseGetBlogsOptions = {
  limit?: number;
  page?: number;
  filter?: {
    search?: string;
  };
};

export const useGetBlogs = (options: UseGetBlogsOptions = {}) => {
  const { isAdmin } = useAuthStore();
  const {
    limit = 10,
    page = 1,
    filter = {
      search: "",
    },
  } = options;

  const {
    data: dataBlogs,
    loading: loadingBlogs,
    error,
    fetchMore,
    refetch,
  } = useQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, {
    variables: {
      limit,
      page,
      filter,
    },
    notifyOnNetworkStatusChange: true,
    skip: !isAdmin,
  });

  const loadMore = async () => {
    if (!dataBlogs?.getBlogs?.data?.hasNextPage) return;
    await fetchMore({
      variables: {
        page: dataBlogs.getBlogs.data.nextPage,
        limit,
      },
    });
  };

  const blogs = dataBlogs?.getBlogs?.data?.docs || [];

  return {
    dataBlogs,
    blogs,
    loadingBlogs,
    error,
    loadMore,
    hasNextPage: dataBlogs?.getBlogs?.data?.hasNextPage,
    refetch,
  };
};

export const useGetBlog = (slug: string) => {
  const { data, loading, error, refetch } = useQuery<
    GetBlogQuery,
    GetBlogQueryVariables
  >(GetBlogDocument, {
    variables: { slug },
    skip: !slug,
  });

  const blog = data?.getBlog?.data || null;

  return {
    blog,
    loading,
    error,
    refetch,
  };
};

export const useGetBlogById = (id: string) => {
  const { data, loading, error, refetch } = useQuery<
    GetBlogByIdQuery,
    GetBlogByIdQueryVariables
  >(GetBlogByIdDocument, {
    variables: { id },
    skip: !id,
  });

  const blog = data?.getBlogById?.data || null;

  return {
    blog,
    loading,
    error,
    refetch,
  };
};

export const useDeleteBlog = () => {
  const [deleteBlog, { loading, error, data }] = useMutation<
    DeleteBlogMutation,
    DeleteBlogMutationVariables
  >(DeleteBlogDocument);

  const handleDeleteBlog = async (blogId: string) => {
    try {
      const result = await deleteBlog({
        variables: { blogId },
        // Optionally refetch the blogs list after deletion
        refetchQueries: [
          {
            query: GetBlogsDocument,
            variables: { page: 1, limit: 10, filter: { search: "" } },
          },
        ],
      });

      return {
        success: result.data?.deleteBlog?.success || false,
        message:
          result.data?.deleteBlog?.message || "Blog deleted successfully",
        data: result.data?.deleteBlog?.data,
      };
    } catch (error) {
      console.error("Error deleting blog:", error);
      return {
        success: false,
        message: "Failed to delete blog",
        data: null,
      };
    }
  };

  return {
    deleteBlog: handleDeleteBlog,
    loading,
    error,
    data,
  };
};

export const useUpdateBlog = () => {
  const [updateBlog, { loading, error, data }] = useMutation<
    UpdateBlogMutation,
    UpdateBlogMutationVariables
  >(UpdateBlogDocument);

  const handleUpdateBlog = async (blogId: string, blogData: BlogInput) => {
    try {
      const result = await updateBlog({
        variables: { blogId, blogData },
        // Optionally refetch the blogs list after update
        refetchQueries: [
          {
            query: GetBlogsDocument,
            variables: { page: 1, limit: 10, filter: { search: "" } },
          },
        ],
      });

      return {
        success: result.data?.updateBlog?.success || false,
        message:
          result.data?.updateBlog?.message || "Blog updated successfully",
        data: result.data?.updateBlog?.data,
      };
    } catch (error) {
      console.error("Error updating blog:", error);
      return {
        success: false,
        message: "Failed to update blog",
        data: null,
      };
    }
  };

  return {
    updateBlog: handleUpdateBlog,
    loading,
    error,
    data,
  };
};

export const useCreateBlog = () => {
  const [createBlog, { loading, error, data }] = useMutation<
    CreateBlogMutation,
    CreateBlogMutationVariables
  >(CreateBlogDocument);

  const handleCreateBlog = async (blogData: BlogInput) => {
    try {
      const result = await createBlog({
        variables: { blogData },
        // Optionally refetch the blogs list after deletion
        refetchQueries: [
          {
            query: GetBlogsDocument,
            variables: { page: 1, limit: 10, filter: { search: "" } },
          },
        ],
      });

      return {
        success: result.data?.createBlog?.success || false,
        message:
          result.data?.createBlog?.message || "Blog created successfully",
        data: result.data?.createBlog?.data,
      };
    } catch (error) {
      console.error("Error creating blog:", error);
      return {
        success: false,
        message: "Failed to creating blog",
        data: null,
      };
    }
  };

  return {
    createBlog: handleCreateBlog,
    loading,
    error,
    data,
  };
};

// export const _useCreateBlog = () => {
//   // Temporary implementation until codegen is run
//   const handleCreateBlog = async (blogData: BlogInput) => {
//     try {
//       // Get the current user's token
//       const { getFreshToken } = useAuthStore.getState();
//       const token = await getFreshToken();

//       // For now, we'll use a simple fetch to the GraphQL endpoint
//       const response = await fetch("http://localhost:8080/graphql", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "JnGlOceliNcLAdOYDrEng",
//           ...(token && { "x-token": `Bearer ${token}` }),
//         },
//         body: JSON.stringify({
//           query: `
//             mutation CreateBlog($blogData: BlogInput!) {
//               createBlog(blogData: $blogData) {
//                 success
//                 message
//                 data {
//                   _id
//                   title
//                   summary
//                   content
//                   status
//                   slug
//                   mainImage
//                   tags
//                   seo_title
//                   seo_desc
//                   author {
//                     _id
//                     displayName
//                   }
//                   timesViewed
//                   savedCount
//                   publicationScore
//                   score
//                   ogImage
//                   createdAt
//                   updatedAt
//                 }
//               }
//             }
//           `,
//           variables: { blogData },
//         }),
//       });

//       const result = await response.json();

//       if (result.errors) {
//         console.error("GraphQL errors:", result.errors);
//         throw new Error(result.errors[0].message);
//       }

//       return {
//         success: result.data?.createBlog?.success || false,
//         message:
//           result.data?.createBlog?.message || "Blog created successfully",
//         data: result.data?.createBlog?.data,
//       };
//     } catch (error) {
//       console.error("Error creating blog:", error);
//       return {
//         success: false,
//         message:
//           error instanceof Error ? error.message : "Failed to create blog",
//         data: null,
//       };
//     }
//   };

//   return {
//     createBlog: handleCreateBlog,
//     loading: false,
//     error: null,
//     data: null,
//   };
// };

export const useGetBlogStats = () => {
  const { isAdmin } = useAuthStore();

  const { data, loading, error, refetch } = useQuery<GetBlogStatsQuery>(
    GetBlogStatsDocument,
    { skip: !isAdmin }
  );

  const stats = data?.getBlogStats?.data || null;

  return {
    stats,
    loading,
    error,
    refetch,
  };
};
