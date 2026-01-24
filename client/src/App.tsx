import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import NotFound from "@/pages/not-found";
import EnhancedLoadingScreen from "@/components/EnhancedLoadingScreen";

// Check if loading screen was already shown this session
const LOADING_SHOWN_KEY = 'enigma26_loading_shown';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading screen once per session
    if (typeof window !== 'undefined') {
      const wasShown = sessionStorage.getItem(LOADING_SHOWN_KEY);
      return !wasShown;
    }
    return true;
  });

  const handleLoadingComplete = () => {
    // Mark as shown for this session
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(LOADING_SHOWN_KEY, 'true');
    }
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading ? (
        <EnhancedLoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      )}
    </QueryClientProvider>
  );
}

export default App;
