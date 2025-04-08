
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CreditCard, AlertCircle, Calendar, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const MemberDashboard = () => {
  // Mock data for member dashboard
  const membershipData = {
    plan: "Premium Membership",
    status: "Active",
    expiryDate: "2025-05-15",
    daysLeft: 30,
    paymentStatus: "Due in 5 days",
    paymentAmount: "7,999",
    lastPayment: {
      amount: "7,999",
      date: "2025-03-15",
      method: "M-Pesa"
    },
    nextPayment: {
      amount: "7,999",
      date: "2025-04-15"
    }
  };

  const progressPercentage = (membershipData.daysLeft / 30) * 100;

  return (
    <DashboardLayout userType="member">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Member Dashboard</h1>
          <p className="text-gray-600">Welcome back! Manage your fitness journey.</p>
        </div>

        {/* Membership Status Card */}
        <Card className="border-t-4 border-t-kenya-green">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">Membership Status</CardTitle>
                <CardDescription>Plan details and information</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="text-kenya-green border-kenya-green hover:bg-kenya-green hover:text-white">
                View Details
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Current Plan</h3>
                  <p className="text-lg font-semibold">{membershipData.plan}</p>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 mt-2">
                    {membershipData.status}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Next Payment</h3>
                  <p className="text-lg font-semibold">Ksh {membershipData.nextPayment.amount}</p>
                  <span className="text-gray-500 text-sm">Due on {membershipData.nextPayment.date}</span>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Last Payment</h3>
                  <p className="text-lg font-semibold">Ksh {membershipData.lastPayment.amount}</p>
                  <span className="text-gray-500 text-sm">Paid on {membershipData.lastPayment.date} via {membershipData.lastPayment.method}</span>
                </div>
              </div>
              
              <div className="pt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Membership Period</span>
                  <span className="text-sm font-medium">{membershipData.daysLeft} days left</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-kenya-green/10 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-kenya-green" />
                  </div>
                  <h3 className="font-medium mb-2">Make a Payment</h3>
                  <p className="text-sm text-gray-500 mb-4">Pay your membership fee via M-Pesa</p>
                  <Link to="/member/payments">
                    <Button className="w-full bg-kenya-green hover:bg-kenya-green-light">
                      Pay Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-kenya-green/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-kenya-green" />
                  </div>
                  <h3 className="font-medium mb-2">View Membership</h3>
                  <p className="text-sm text-gray-500 mb-4">Check your membership details and history</p>
                  <Link to="/member/membership">
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-kenya-green/10 flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-kenya-green" />
                  </div>
                  <h3 className="font-medium mb-2">Payment History</h3>
                  <p className="text-sm text-gray-500 mb-4">View your past payment transactions</p>
                  <Link to="/member/payments">
                    <Button variant="outline" className="w-full">
                      View History
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 border border-amber-100">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                <div>
                  <h4 className="font-medium text-amber-800">Payment Reminder</h4>
                  <p className="text-sm text-amber-700">
                    Your next payment of Ksh 7,999 is due in 5 days. Please ensure you have sufficient funds in your M-Pesa account.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-100">
                <Calendar className="h-5 w-5 text-green-500" />
                <div>
                  <h4 className="font-medium text-green-800">New Classes Added</h4>
                  <p className="text-sm text-green-700">
                    We've added new Yoga and HIIT classes to our schedule. Check them out and book your spot!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MemberDashboard;
