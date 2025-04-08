
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  type: "login" | "register";
}

const AuthLayout = ({ children, title, description, type }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link to="/" className="flex items-center space-x-2 mb-10">
              <span className="text-2xl font-bold text-kenya-green">FitFlow</span>
              <span className="text-sm bg-kenya-red text-white px-1 rounded">Kenya</span>
            </Link>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
          
          {children}
          
          <div className="mt-8 text-center">
            {type === "login" ? (
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-kenya-green font-semibold hover:underline">
                  Register
                </Link>
              </p>
            ) : (
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-kenya-green font-semibold hover:underline">
                  Log in
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden md:block relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src={type === "login" 
            ? "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
            : "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
          }
          alt="Fitness"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-8">
          <h2 className="text-4xl font-bold mb-4">
            {type === "login" ? "Welcome Back!" : "Join Our Fitness Community"}
          </h2>
          <p className="text-xl text-center max-w-lg">
            {type === "login" 
              ? "Access your membership, track your progress, and manage your payments."
              : "Start your fitness journey with us and transform your life with professional guidance and support."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
