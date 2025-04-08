
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  CreditCard,
  TrendingUp,
  TrendingDown,
  Calendar,
  User,
  Activity,
  AlertCircle
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Mock data for the chart
const revenueData = [
  { name: "Jan", revenue: 250000 },
  { name: "Feb", revenue: 320000 },
  { name: "Mar", revenue: 280000 },
  { name: "Apr", revenue: 360000 },
  { name: "May", revenue: 400000 },
  { name: "Jun", revenue: 380000 },
  { name: "Jul", revenue: 420000 },
  { name: "Aug", revenue: 450000 },
  { name: "Sep", revenue: 480000 },
  { name: "Oct", revenue: 520000 },
  { name: "Nov", revenue: 550000 },
  { name: "Dec", revenue: 600000 },
];

// Mock data for admin dashboard
const dashboardStats = {
  totalMembers: 543,
  activeMembers: 498,
  newMembersThisMonth: 32,
  inactiveMembers: 45,
  totalRevenue: "4,325,500",
  revenueThisMonth: "587,500",
  pendingPayments: "163,000",
  overduePayments: "78,000"
};

const RevenueChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#1a8754" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#1a8754" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
      <YAxis 
        tickFormatter={(value) => `${value / 1000}K`} 
        tick={{ fontSize: 12 }} 
      />
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <Tooltip 
        formatter={(value) => [`KSh ${value.toLocaleString()}`, "Revenue"]} 
        labelFormatter={(label) => `Month: ${label}`}
      />
      <Area 
        type="monotone" 
        dataKey="revenue" 
        stroke="#1a8754" 
        fillOpacity={1} 
        fill="url(#colorRevenue)" 
      />
    </AreaChart>
  </ResponsiveContainer>
);

const AdminDashboard = () => {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, Admin. Here's an overview of FitFlow Kenya.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Members</p>
                  <h3 className="text-2xl font-bold">{dashboardStats.totalMembers}</h3>
                  <div className="flex items-center text-sm text-green-600 mt-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+{dashboardStats.newMembersThisMonth} this month</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Active Members</p>
                  <h3 className="text-2xl font-bold">{dashboardStats.activeMembers}</h3>
                  <div className="flex items-center text-sm text-red-600 mt-1">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    <span>{dashboardStats.inactiveMembers} inactive</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                  <h3 className="text-2xl font-bold">Ksh {dashboardStats.totalRevenue}</h3>
                  <div className="flex items-center text-sm text-green-600 mt-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>Ksh {dashboardStats.revenueThisMonth} this month</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-violet-100 rounded-full flex items-center justify-center">
                  <Activity className="h-6 w-6 text-violet-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Pending Payments</p>
                  <h3 className="text-2xl font-bold">Ksh {dashboardStats.pendingPayments}</h3>
                  <div className="flex items-center text-sm text-amber-600 mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>Ksh {dashboardStats.overduePayments} overdue</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium mb-2">Manage Members</h3>
                  <p className="text-sm text-gray-500 mb-4">View, edit, add or remove gym members</p>
                  <Link to="/admin/members">
                    <Button className="w-full bg-kenya-green hover:bg-kenya-green-light">
                      Manage Members
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-medium mb-2">Payment Management</h3>
                  <p className="text-sm text-gray-500 mb-4">Process and track member payments</p>
                  <Link to="/admin/payments">
                    <Button variant="outline" className="w-full">
                      View Payments
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-medium mb-2">Generate Reports</h3>
                  <p className="text-sm text-gray-500 mb-4">Create revenue and attendance reports</p>
                  <Link to="/admin/reports">
                    <Button variant="outline" className="w-full">
                      Generate Reports
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest actions and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <User className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">New Member Registration</h4>
                  <p className="text-sm text-gray-600">
                    Alice Wangari has registered as a new member
                  </p>
                  <span className="text-xs text-gray-400">10 minutes ago</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <CreditCard className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Payment Received</h4>
                  <p className="text-sm text-gray-600">
                    James Mutua paid Ksh 7,999 for Premium Membership
                  </p>
                  <span className="text-xs text-gray-400">1 hour ago</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Calendar className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium">Membership Expiry</h4>
                  <p className="text-sm text-gray-600">
                    Sarah Njeri's membership will expire in 3 days
                  </p>
                  <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
