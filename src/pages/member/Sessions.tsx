
import React, { useEffect, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

// Mock data for now - would be replaced with actual data from Supabase
const mockSessions = [
  {
    id: 1,
    title: "Morning Cardio",
    date: "2025-04-10",
    time: "07:00 AM",
    trainer: "Jane Smith",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Weight Training",
    date: "2025-04-12",
    time: "10:00 AM",
    trainer: "John Doe",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Yoga Class",
    date: "2025-04-05",
    time: "06:00 PM",
    trainer: "Mary Johnson",
    status: "completed"
  }
];

const Sessions = () => {
  const [sessions, setSessions] = useState(mockSessions);
  const [loading, setLoading] = useState(false);

  // Here we would fetch actual sessions from Supabase
  // useEffect(() => {
  //   const fetchSessions = async () => {
  //     setLoading(true);
  //     const { data, error } = await supabase
  //       .from('sessions')
  //       .select('*')
  //       .eq('user_id', user.id)
  //       .order('date', { ascending: true });
  //     
  //     if (error) console.error("Error fetching sessions:", error);
  //     else setSessions(data || []);
  //     setLoading(false);
  //   };
  //   
  //   fetchSessions();
  // }, []);

  return (
    <DashboardLayout userType="member">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">My Sessions</h1>
          <Button className="bg-kenya-green hover:bg-kenya-green-light">
            Book New Session
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map(session => (
            <Card key={session.id} className={`overflow-hidden ${
              session.status === "completed" ? "opacity-70" : ""
            }`}>
              <CardHeader className="bg-gray-50 pb-4">
                <CardTitle>{session.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center mt-2 text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" /> {session.date}
                  </div>
                  <div className="flex items-center mt-1 text-gray-600">
                    <Clock className="w-4 h-4 mr-1" /> {session.time}
                  </div>
                  <div className="flex items-center mt-1 text-gray-600">
                    <User className="w-4 h-4 mr-1" /> {session.trainer}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex justify-between items-center">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    session.status === "upcoming" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {session.status === "upcoming" ? "Upcoming" : "Completed"}
                  </span>
                  {session.status === "upcoming" && (
                    <Button variant="outline" size="sm">
                      Cancel
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Sessions;
