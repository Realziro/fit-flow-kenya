
import { ReactNode, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  Home, 
  User, 
  CreditCard, 
  BarChart3, 
  Calendar, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: "admin" | "member";
}

interface NavItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  isActive: boolean;
  userType: "admin" | "member";
}

const NavItem = ({ icon, label, href, isActive, userType }: NavItemProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
      isActive 
        ? "bg-kenya-green text-white" 
        : "text-gray-700 hover:bg-gray-100"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    // Mock logout - would connect to backend in real implementation
    toast.success("Logged out successfully");
    navigate("/login");
  };

  // Define navigation items based on user type
  const navItems = userType === "admin" 
    ? [
        { icon: <Home size={20} />, label: "Dashboard", href: "/admin/dashboard" },
        { icon: <User size={20} />, label: "Members", href: "/admin/members" },
        { icon: <CreditCard size={20} />, label: "Payments", href: "/admin/payments" },
        { icon: <BarChart3 size={20} />, label: "Reports", href: "/admin/reports" },
        { icon: <Settings size={20} />, label: "Settings", href: "/admin/settings" },
      ]
    : [
        { icon: <Home size={20} />, label: "Dashboard", href: "/member/dashboard" },
        { icon: <User size={20} />, label: "My Profile", href: "/member/profile" },
        { icon: <CreditCard size={20} />, label: "Payments", href: "/member/payments" },
        { icon: <Calendar size={20} />, label: "Membership", href: "/member/membership" },
        { icon: <Settings size={20} />, label: "Settings", href: "/member/settings" },
      ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-30">
        <div className="px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
                <Menu size={24} />
              </Button>
            )}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-kenya-green">FitFlow</span>
              <span className="text-xs bg-kenya-red text-white px-1 rounded">Kenya</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 bg-kenya-red rounded-full w-2.5 h-2.5"></span>
            </Button>

            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right">
                <div className="text-sm font-medium">
                  {userType === "admin" ? "Admin User" : "John Doe"}
                </div>
                <div className="text-xs text-gray-500">
                  {userType === "admin" ? "Administrator" : "Silver Member"}
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-kenya-green text-white flex items-center justify-center font-medium">
                {userType === "admin" ? "A" : "JD"}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar (Overlay) */}
      {isMobile && (
        <>
          {/* Backdrop */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeSidebar}
            />
          )}

          {/* Sidebar */}
          <aside
            className={cn(
              "fixed top-0 left-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out",
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="p-4 flex justify-between items-center border-b">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-kenya-green">FitFlow</span>
                <span className="text-xs bg-kenya-red text-white px-1 rounded">Kenya</span>
              </div>
              <Button variant="ghost" size="icon" onClick={closeSidebar}>
                <X size={24} />
              </Button>
            </div>

            <div className="p-4">
              <nav className="space-y-1">
                {navItems.map((item, index) => (
                  <NavItem
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                    isActive={location.pathname === item.href}
                    userType={userType}
                  />
                ))}

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </aside>
        </>
      )}

      {/* Main layout */}
      <div className="flex pt-16 min-h-screen">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <aside className="w-64 border-r border-gray-200 bg-white fixed left-0 top-16 bottom-0">
            <div className="p-4">
              <nav className="space-y-1">
                {navItems.map((item, index) => (
                  <NavItem
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                    isActive={location.pathname === item.href}
                    userType={userType}
                  />
                ))}

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <div className={`${!isMobile ? "ml-64" : ""} flex-1`}>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
