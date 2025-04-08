
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import AuthLayout from "@/components/auth/AuthLayout";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Mock login - would connect to backend in real implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user is admin (mock)
      const isAdmin = formData.email === "admin@fitflowkenya.com";
      
      toast.success(`Welcome back, ${isAdmin ? "Admin" : "Member"}!`);
      navigate(isAdmin ? "/admin/dashboard" : "/member/dashboard");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <AuthLayout 
      title="Log in to your account" 
      description="Enter your credentials to access your account"
      type="login"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              disabled={isLoading}
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-sm text-kenya-green hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
              <button 
                type="button" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-kenya-green hover:bg-kenya-green-light" 
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Log in"}
        </Button>
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300"></span>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Demo Accounts</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => {
              setFormData({
                email: "member@example.com",
                password: "password123"
              });
            }}
            disabled={isLoading}
          >
            Member Demo
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => {
              setFormData({
                email: "admin@fitflowkenya.com",
                password: "admin123"
              });
            }}
            disabled={isLoading}
          >
            Admin Demo
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
