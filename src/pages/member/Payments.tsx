
import React, { useEffect, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Payment = {
  id: string;
  amount: number;
  payment_date: string;
  payment_method: string;
  status: string;
  transaction_id: string | null;
}

const Payments = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUserAndPayments = async () => {
      setLoading(true);
      
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      if (user) {
        // Fetch payments for current user
        const { data, error } = await supabase
          .from('payments')
          .select('*')
          .eq('user_id', user.id)
          .order('payment_date', { ascending: false });
          
        if (error) {
          console.error("Error fetching payments:", error);
          toast.error("Failed to load payment history");
        } else {
          setPayments(data || []);
        }
      }
      
      setLoading(false);
    };
    
    fetchUserAndPayments();
  }, []);

  const handleMakePayment = async () => {
    // Here you would implement payment integration (e.g., M-Pesa, Stripe, etc.)
    // For now, we'll just show a success toast
    toast.success("Payment feature coming soon!");
  };

  // Mock data for upcoming payment (would come from the backend in a real app)
  const upcomingPayment = {
    amount: 7999,
    due_date: "2025-04-15",
    days_left: 5
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <DashboardLayout userType="member">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        </div>

        {/* Upcoming Payment Card */}
        <Card className="border-t-4 border-t-amber-500">
          <CardHeader>
            <CardTitle>Upcoming Payment</CardTitle>
            <CardDescription>Your next membership payment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-2">
                <div className="text-sm text-gray-500">Amount Due</div>
                <div className="text-2xl font-bold">Ksh {upcomingPayment.amount.toLocaleString()}</div>
                <div className="text-sm text-gray-500">Due on {upcomingPayment.due_date}</div>
                <div className="text-sm font-medium text-amber-600">{upcomingPayment.days_left} days left to pay</div>
              </div>
              
              <Button 
                onClick={handleMakePayment} 
                className="bg-kenya-green hover:bg-kenya-green-light"
              >
                <CreditCard className="mr-2 h-4 w-4" /> Pay Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payment History */}
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>Your recent payments</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-4">Loading payment history...</div>
            ) : payments.length > 0 ? (
              <div className="space-y-4">
                {payments.map((payment) => (
                  <div 
                    key={payment.id} 
                    className="flex flex-col md:flex-row md:items-center md:justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${payment.status === 'successful' ? 'bg-green-100' : 'bg-amber-100'}`}>
                        {payment.status === 'successful' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-amber-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">Ksh {payment.amount.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">
                          {formatDate(payment.payment_date)} • {payment.payment_method}
                        </div>
                        {payment.transaction_id && (
                          <div className="text-xs text-gray-400">
                            Transaction ID: {payment.transaction_id}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`mt-2 md:mt-0 px-2 py-1 text-xs font-medium rounded-full ${
                      payment.status === 'successful' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {payment.status === 'successful' ? 'Successful' : 'Pending'}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <h3 className="text-lg font-medium mb-1">No payment history found</h3>
                <p className="text-sm">Your payment history will appear here once you make your first payment.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Payments;
