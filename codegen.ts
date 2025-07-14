import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      ['http://localhost:8080/graphql']: {
        headers: {
          Authorization: 'JnGlOceliNcLAdOYDrEng',
        },
      },
    },
  ],
  documents: [
    'src/graphql/**/*.{ts,tsx,graphql}',
    '!**/node_modules/**',
  ],
  ignoreNoDocuments: true,
  generates: {
    'src/graphql/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
  watch: false, // Ensure watch mode is disabled for production builds
  // Add timeout to prevent hanging
  config: {
    timeout: 10000, // 10 second timeout
  },
  // Prevent infinite loops by limiting retries
  hooks: {
    afterOneFileWrite: 'prettier --write',
  },
};

export default config;
