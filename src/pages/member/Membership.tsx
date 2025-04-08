
import React, { useEffect, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Calendar, CheckCircle, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format, addDays, differenceInDays } from "date-fns";

type MembershipPlan = {
  id: string;
  name: string;
  price: number;
  duration_days: number;
  description: string | null;
};

type Membership = {
  id: string;
  plan_id: string;
  start_date: string;
  end_date: string;
  status: string;
  plan: MembershipPlan | null;
};

const Membership = () => {
  const [currentMembership, setCurrentMembership] = useState<Membership | null>(null);
  const [availablePlans, setAvailablePlans] = useState<MembershipPlan[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Get current user
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          // Fetch current membership
          const { data: membershipData, error: membershipError } = await supabase
            .from('memberships')
            .select(`
              id,
              plan_id,
              start_date,
              end_date,
              status
            `)
            .eq('user_id', user.id)
            .eq('status', 'active')
            .order('end_date', { ascending: false })
            .limit(1)
            .single();
            
          if (membershipError && membershipError.code !== 'PGRST116') {
            console.error("Error fetching membership:", membershipError);
          }
          
          // Fetch all available plans
          const { data: plansData, error: plansError } = await supabase
            .from('membership_plans')
            .select('*')
            .eq('is_active', true)
            .order('price', { ascending: true });
            
          if (plansError) {
            console.error("Error fetching plans:", plansError);
          } else {
            setAvailablePlans(plansData || []);
          }
          
          // If we have a membership and plans, find the plan details for the membership
          if (membershipData && plansData) {
            const plan = plansData.find(p => p.id === membershipData.plan_id);
            setCurrentMembership({
              ...membershipData,
              plan
            });
          }
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const getMembershipProgress = () => {
    if (!currentMembership) return 0;
    
    const startDate = new Date(currentMembership.start_date);
    const endDate = new Date(currentMembership.end_date);
    const today = new Date();
    
    const totalDays = differenceInDays(endDate, startDate);
    const daysElapsed = differenceInDays(today, startDate);
    
    const progress = Math.floor((daysElapsed / totalDays) * 100);
    return Math.max(0, Math.min(100, progress));
  };
  
  const daysRemaining = () => {
    if (!currentMembership) return 0;
    
    const endDate = new Date(currentMembership.end_date);
    const today = new Date();
    
    return Math.max(0, differenceInDays(endDate, today));
  };
  
  return (
    <DashboardLayout userType="member">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">My Membership</h1>
        
        {loading ? (
          <div className="py-12 text-center">Loading membership details...</div>
        ) : (
          <>
            {currentMembership ? (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-kenya-green">
                    {currentMembership.plan?.name || "Active"} Membership
                  </CardTitle>
                  <CardDescription>
                    Your membership is currently active
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Membership Progress</span>
                      <span>{getMembershipProgress()}%</span>
                    </div>
                    <Progress value={getMembershipProgress()} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Membership Details</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>
                            Plan: <strong>{currentMembership.plan?.name || "Standard"}</strong>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-blue-500" />
                          <span>
                            Start Date: <strong>{format(new Date(currentMembership.start_date), 'PPP')}</strong>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-amber-500" />
                          <span>
                            End Date: <strong>{format(new Date(currentMembership.end_date), 'PPP')}</strong>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-purple-500" />
                          <span>
                            Status: <strong className="text-green-600">Active</strong>
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-3">Membership Summary</h3>
                      <div className="space-y-2">
                        <p className="text-sm">
                          Your membership is valid for <span className="font-bold text-lg">{daysRemaining()}</span> more days.
                        </p>
                        {daysRemaining() < 7 && (
                          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-md text-sm">
                            <strong>Your membership is expiring soon!</strong> Renew now to maintain access to all gym facilities.
                          </div>
                        )}
                        <div className="mt-4">
                          <Button className="bg-kenya-green hover:bg-kenya-green-light">
                            Renew Membership
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="mb-8 border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle>No Active Membership</CardTitle>
                  <CardDescription>
                    You don't have an active membership. Choose a plan below to get started.
                  </CardDescription>
                </CardHeader>
              </Card>
            )}
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Available Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availablePlans.map((plan) => (
                  <Card key={plan.id} className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">KSh {plan.price.toLocaleString()}</span>
                        <span className="ml-2 text-muted-foreground text-sm">/ {plan.duration_days} days</span>
                      </div>
                      <Separator className="my-4" />
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Full gym access</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Group fitness classes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Access to pool and sauna</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-kenya-green hover:bg-kenya-green-light">
                        Select Plan <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Membership;
