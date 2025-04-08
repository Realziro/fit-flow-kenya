import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MemberDashboard from "./pages/member/MemberDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Profile from "./pages/member/Profile";
import Sessions from "./pages/member/Sessions";
import Membership from "./pages/member/Membership";
import Settings from "./pages/member/Settings";
import Payments from "./pages/member/Payments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Member Routes */}
          <Route path="/member/dashboard" element={<MemberDashboard />} />
          <Route path="/member/profile" element={<Profile />} />
          <Route path="/member/sessions" element={<Sessions />} />
          <Route path="/member/membership" element={<Membership />} />
          <Route path="/member/settings" element={<Settings />} />
          <Route path="/member/payments" element={<Payments />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
