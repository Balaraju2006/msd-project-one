import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { mockCars } from "@/data/mockCars";
import {
  MapPin,
  Star,
  Users,
  Fuel,
  Calendar as CalendarIcon,
  Check,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CarDetails = () => {
  const { id } = useParams();
  const car = mockCars.find((c) => c.id === id);
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Car not found</h1>
          <Link to="/browse">
            <Button>Back to Browse</Button>
          </Link>
        </div>
      </div>
    );
  }

  const calculateTotal = () => {
    if (!pickupDate || !returnDate) return 0;
    const days = Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24));
    return days * car.price;
  };

  const handleBooking = () => {
    if (!pickupDate || !returnDate) {
      toast.error("Please select pickup and return dates");
      return;
    }
    toast.success("Booking request sent! The host will respond shortly.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/browse" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Browse
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
              <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur">
                {car.category}
              </Badge>
            </div>

            {/* Car Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2">{car.name}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{car.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-semibold text-lg">{car.rating}</span>
                    <span className="text-sm text-muted-foreground">({car.reviews})</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                  <div className="text-center">
                    <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{car.seats} Seats</div>
                  </div>
                  <div className="text-center">
                    <Fuel className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{car.fuel}</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{car.transmission}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-xl">About this car</h3>
                  <p className="text-muted-foreground">{car.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3">Features</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {car.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-success" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Host Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                      {car.hostName.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Hosted by {car.hostName}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span>{car.hostRating} rating</span>
                    </div>
                  </div>
                  <Button variant="outline">Contact Host</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary">${car.price}</div>
                  <div className="text-sm text-muted-foreground">per day</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <Label className="mb-2 flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      Pick-up Date
                    </Label>
                    <Calendar
                      mode="single"
                      selected={pickupDate}
                      onSelect={setPickupDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border"
                    />
                  </div>

                  <div>
                    <Label className="mb-2 flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      Return Date
                    </Label>
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      disabled={(date) => date < (pickupDate || new Date())}
                      className="rounded-md border"
                    />
                  </div>
                </div>

                {pickupDate && returnDate && (
                  <div className="mb-6 p-4 bg-secondary rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">
                        ${car.price} x{" "}
                        {Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24))} days
                      </span>
                      <span className="font-semibold">${calculateTotal()}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Service fee</span>
                      <span className="font-semibold">${(calculateTotal() * 0.1).toFixed(0)}</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-lg text-primary">
                        ${(calculateTotal() * 1.1).toFixed(0)}
                      </span>
                    </div>
                  </div>
                )}

                <Button className="w-full" size="lg" onClick={handleBooking}>
                  Request to Book
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  You won't be charged yet
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const Label = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <label className={`text-sm font-medium ${className}`}>{children}</label>
);

export default CarDetails;
