
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { 
  Download,
  BarChart3,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Calendar
} from "lucide-react";

// Mock data for reports
const monthlyRevenueData = [
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

const membershipTypeData = [
  { name: "Basic", value: 143 },
  { name: "Standard", value: 257 },
  { name: "Premium", value: 98 },
  { name: "Corporate", value: 45 },
];

const membershipChartColors = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d"];

const attendanceData = [
  { name: "Mon", count: 45 },
  { name: "Tue", count: 52 },
  { name: "Wed", count: 49 },
  { name: "Thu", count: 63 },
  { name: "Fri", count: 58 },
  { name: "Sat", count: 81 },
  { name: "Sun", count: 37 },
];

const memberGrowthData = [
  { name: "Jan", newMembers: 24, cancelledMembers: 5 },
  { name: "Feb", newMembers: 28, cancelledMembers: 7 },
  { name: "Mar", newMembers: 32, cancelledMembers: 6 },
  { name: "Apr", newMembers: 26, cancelledMembers: 9 },
  { name: "May", newMembers: 22, cancelledMembers: 8 },
  { name: "Jun", newMembers: 29, cancelledMembers: 4 },
  { name: "Jul", newMembers: 35, cancelledMembers: 7 },
  { name: "Aug", newMembers: 31, cancelledMembers: 5 },
  { name: "Sep", newMembers: 26, cancelledMembers: 8 },
  { name: "Oct", newMembers: 34, cancelledMembers: 6 },
  { name: "Nov", newMembers: 30, cancelledMembers: 9 },
  { name: "Dec", newMembers: 27, cancelledMembers: 7 },
];

const Reports = () => {
  const [timeRange, setTimeRange] = useState("year");

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Reports & Analytics</h1>
            <p className="text-gray-600">View gym performance metrics and generate reports</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Select defaultValue={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <SelectValue placeholder="Time Range" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Reports
            </Button>
          </div>
        </div>

        <Tabs defaultValue="financial">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="financial" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" /> Financial
            </TabsTrigger>
            <TabsTrigger value="membership" className="flex items-center gap-2">
              <PieChartIcon className="h-4 w-4" /> Membership
            </TabsTrigger>
            <TabsTrigger value="attendance" className="flex items-center gap-2">
              <LineChartIcon className="h-4 w-4" /> Attendance
            </TabsTrigger>
            <TabsTrigger value="growth" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" /> Growth
            </TabsTrigger>
          </TabsList>
          
          {/* Financial Reports */}
          <TabsContent value="financial" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue for {timeRange === "year" ? "the current year" : timeRange === "all" ? "all time" : "the selected period"}</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyRevenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1a8754" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#1a8754" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value / 1000}K`} />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <Tooltip formatter={(value) => [`KSh ${value.toLocaleString()}`, "Revenue"]} />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#1a8754" 
                      fillOpacity={1} 
                      fill="url(#colorRevenue)" 
                      name="Revenue"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total Revenue</CardTitle>
                  <CardDescription>Overall financial performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">Ksh 4,325,500</div>
                  <div className="flex items-center mt-2 text-sm text-green-600">
                    <span className="font-medium">↑ 12.5%</span>
                    <span className="text-gray-500 ml-2">vs previous period</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Avg. Revenue Per Member</CardTitle>
                  <CardDescription>Member value analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">Ksh 8,450</div>
                  <div className="flex items-center mt-2 text-sm text-green-600">
                    <span className="font-medium">↑ 5.2%</span>
                    <span className="text-gray-500 ml-2">vs previous period</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pending Payments</CardTitle>
                  <CardDescription>Upcoming revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">Ksh 163,000</div>
                  <div className="flex items-center mt-2 text-sm text-amber-600">
                    <span className="font-medium">23 members</span>
                    <span className="text-gray-500 ml-2">with pending payments</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Membership Reports */}
          <TabsContent value="membership" className="space-y-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Membership Distribution</CardTitle>
                  <CardDescription>Breakdown by membership type</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={membershipTypeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {membershipTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={membershipChartColors[index % membershipChartColors.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [value, "Members"]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Membership Statistics</CardTitle>
                  <CardDescription>Key membership metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">Total Members</div>
                        <div className="font-bold">543</div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">Active Members</div>
                        <div className="font-bold text-green-600">498</div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">Inactive Members</div>
                        <div className="font-bold text-red-600">45</div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">Membership Retention Rate</div>
                        <div className="font-bold">92%</div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t">
                      <h4 className="font-medium mb-3">Membership Expiry Forecast</h4>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm">Expiring in 7 days</div>
                        <div className="font-medium">12 members</div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm">Expiring in 30 days</div>
                        <div className="font-medium">37 members</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Attendance Reports */}
          <TabsContent value="attendance" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Attendance Pattern</CardTitle>
                <CardDescription>Member visits by day of week</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [value, "Visits"]} />
                    <Legend />
                    <Bar dataKey="count" name="Visits" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Peak Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold">6:00 PM - 8:00 PM</div>
                  <div className="text-sm text-gray-500 mt-1">Highest traffic time</div>
                  <div className="mt-4 text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span>Average visitors:</span>
                      <span className="font-medium">45</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Capacity utilization:</span>
                      <span className="font-medium">87%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Average Daily Visits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold">55</div>
                  <div className="text-sm text-gray-500 mt-1">Members per day</div>
                  <div className="flex items-center mt-4 text-sm text-green-600">
                    <span className="font-medium">↑ 8.2%</span>
                    <span className="text-gray-500 ml-2">vs last month</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Member Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold">3.4</div>
                  <div className="text-sm text-gray-500 mt-1">Avg. visits per week per member</div>
                  <div className="flex items-center mt-4 text-sm text-amber-600">
                    <span className="font-medium">↓ 2.1%</span>
                    <span className="text-gray-500 ml-2">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Growth Reports */}
          <TabsContent value="growth" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Membership Growth</CardTitle>
                <CardDescription>New vs cancelled memberships</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={memberGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="newMembers" 
                      name="New Members" 
                      stroke="#1a8754" 
                      strokeWidth={2} 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="cancelledMembers" 
                      name="Cancelled Members" 
                      stroke="#dc2626" 
                      strokeWidth={2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Annual Growth Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold">+15.3%</div>
                  <div className="text-sm text-gray-500 mt-1">Year-over-year growth</div>
                  <div className="mt-4 text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span>New members:</span>
                      <span className="font-medium">+321</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Lost members:</span>
                      <span className="font-medium">-76</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold">68%</div>
                  <div className="text-sm text-gray-500 mt-1">Trials to paid memberships</div>
                  <div className="flex items-center mt-4 text-sm text-green-600">
                    <span className="font-medium">↑ 4.5%</span>
                    <span className="text-gray-500 ml-2">vs previous period</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Customer Acquisition Cost</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold">Ksh 2,450</div>
                  <div className="text-sm text-gray-500 mt-1">Cost per new member</div>
                  <div className="flex items-center mt-4 text-sm text-green-600">
                    <span className="font-medium">↓ 6.2%</span>
                    <span className="text-gray-500 ml-2">vs previous period</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
