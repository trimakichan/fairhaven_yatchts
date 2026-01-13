import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextsProvider } from "./contexts/contexts.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      staleTime: 10 * 60 * 1000,
      gcTime: 20 * 60 * 1000,  
      refetchInterval: 20 * 60 * 1000
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextsProvider>
        <App />
      </ContextsProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
