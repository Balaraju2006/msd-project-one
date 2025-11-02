import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Car,
  DollarSign,
  TrendingUp,
  Calendar,
  Check,
  X,
  MapPin,
  PlusCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const HostDashboard = () => {
  // Mock data
  const stats = [
    { label: "Total Revenue", value: "$12,450", icon: DollarSign, change: "+12.5%" },
    { label: "Active Cars", value: "3", icon: Car, change: "+1" },
    { label: "Bookings This Month", value: "18", icon: Calendar, change: "+8" },
    { label: "Avg. Rating", value: "4.9", icon: TrendingUp, change: "+0.2" },
  ];

  const pendingBookings = [
    {
      id: "1",
      carName: "Tesla Model 3",
      guestName: "John Doe",
      pickupDate: "2024-02-20",
      returnDate: "2024-02-23",
      price: 267,
    },
    {
      id: "2",
      carName: "BMW 5 Series",
      guestName: "Jane Smith",
      pickupDate: "2024-02-25",
      returnDate: "2024-02-27",
      price: 240,
    },
  ];

  const myCars = [
    {
      id: "1",
      name: "Tesla Model 3",
      location: "San Francisco, CA",
      price: 89,
      bookings: 12,
      revenue: 4280,
      status: "active",
    },
    {
      id: "2",
      name: "BMW 5 Series",
      location: "Los Angeles, CA",
      price: 120,
      bookings: 8,
      revenue: 3840,
      status: "active",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Host Dashboard</h1>
            <p className="text-muted-foreground">Manage your fleet and bookings</p>
          </div>
          <Link to="/host/add-car">
            <Button size="lg" className="gap-2">
              <PlusCircle className="h-5 w-5" />
              Add New Car
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                  <Badge variant="outline" className="text-success">
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">Pending Requests</TabsTrigger>
            <TabsTrigger value="cars">My Cars</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingBookings.map((booking) => (
              <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{booking.carName}</h3>
                          <p className="text-muted-foreground">
                            Guest: {booking.guestName}
                          </p>
                        </div>
                        <Badge>Pending</Badge>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-muted-foreground">Pick-up</div>
                            <div className="font-medium">{booking.pickupDate}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-muted-foreground">Return</div>
                            <div className="font-medium">{booking.returnDate}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">${booking.price}</div>
                        <div className="text-sm text-muted-foreground">earnings</div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="gap-2">
                          <Check className="h-4 w-4" />
                          Accept
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                          <X className="h-4 w-4" />
                          Decline
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {pendingBookings.length === 0 && (
              <Card className="p-12 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No pending requests</h3>
                <p className="text-muted-foreground">New booking requests will appear here</p>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="cars" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {myCars.map((car) => (
                <Card key={car.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{car.name}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{car.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-success">Active</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">${car.price}</div>
                        <div className="text-xs text-muted-foreground">per day</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{car.bookings}</div>
                        <div className="text-xs text-muted-foreground">bookings</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">${car.revenue}</div>
                        <div className="text-xs text-muted-foreground">earned</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Pause
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-dashed">
              <CardContent className="p-12 text-center">
                <PlusCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Add Another Car</h3>
                <p className="text-muted-foreground mb-6">
                  Expand your fleet and increase your earnings
                </p>
                <Link to="/host/add-car">
                  <Button>Add New Car</Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar">
            <Card className="p-12 text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Calendar View</h3>
              <p className="text-muted-foreground">
                Manage your car availability and bookings
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HostDashboard;
