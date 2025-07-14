"use client";

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';

interface GraphQLProviderProps {
  children: React.ReactNode;
}

export const GraphQLProvider: React.FC<GraphQLProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider; 