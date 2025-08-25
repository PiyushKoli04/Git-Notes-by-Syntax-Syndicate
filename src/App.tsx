
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatIsGit from "./pages/WhatIsGit";
import Installation from "./pages/Installation";
import BasicCommands from "./pages/BasicCommands";
import Repositories from "./pages/Repositories";
import Branching from "./pages/Branching";
import GitHubBasics from "./pages/GitHubBasics";
import Collaboration from "./pages/Collaboration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-is-git" element={<WhatIsGit />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/basic-commands" element={<BasicCommands />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/branching" element={<Branching />} />
          <Route path="/github-basics" element={<GitHubBasics />} />
          <Route path="/collaboration" element={<Collaboration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
