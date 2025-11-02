import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";

export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  seats: number;
  transmission: string;
  fuel: string;
  category: string;
  description: string;
  features: string[];
  hostName: string;
  hostRating: number;
  available: boolean;
}

export const mockCars: Car[] = [
  {
    id: "1",
    name: "Tesla Model 3",
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    image: car1,
    price: 89,
    rating: 4.9,
    reviews: 127,
    location: "San Francisco, CA",
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    category: "Electric",
    description: "Experience the future of driving with this pristine Tesla Model 3. Perfect for eco-conscious travelers who don't want to compromise on performance or style.",
    features: [
      "Autopilot",
      "Premium Sound System",
      "Glass Roof",
      "Tesla Supercharger Access",
      "Mobile App Control",
      "Over-the-air Updates",
    ],
    hostName: "Sarah Johnson",
    hostRating: 4.95,
    available: true,
  },
  {
    id: "2",
    name: "BMW 5 Series",
    brand: "BMW",
    model: "530i",
    year: 2023,
    image: car2,
    price: 120,
    rating: 4.8,
    reviews: 89,
    location: "Los Angeles, CA",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    category: "Luxury",
    description: "Indulge in German engineering excellence. This BMW 5 Series offers the perfect blend of luxury, performance, and cutting-edge technology.",
    features: [
      "Leather Interior",
      "Navigation System",
      "Parking Assist",
      "Heated Seats",
      "Sunroof",
      "Premium Audio",
    ],
    hostName: "Michael Chen",
    hostRating: 4.92,
    available: true,
  },
  {
    id: "3",
    name: "Mercedes-Benz C-Class",
    brand: "Mercedes-Benz",
    model: "C300",
    year: 2024,
    image: car3,
    price: 110,
    rating: 4.9,
    reviews: 156,
    location: "Miami, FL",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    category: "Luxury",
    description: "Cruise in style with this stunning Mercedes-Benz C-Class. Elegance meets performance in this premium sedan that turns heads wherever you go.",
    features: [
      "AMG Package",
      "Burmester Sound",
      "Ambient Lighting",
      "Panoramic Roof",
      "Advanced Safety Tech",
      "Apple CarPlay",
    ],
    hostName: "Emma Rodriguez",
    hostRating: 4.98,
    available: true,
  },
  {
    id: "4",
    name: "Audi A4",
    brand: "Audi",
    model: "A4 Premium Plus",
    year: 2023,
    image: car4,
    price: 95,
    rating: 4.7,
    reviews: 103,
    location: "Seattle, WA",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    category: "Luxury",
    description: "Sophisticated and sporty, this Audi A4 delivers an exceptional driving experience with its refined interior and responsive handling.",
    features: [
      "Virtual Cockpit",
      "Quattro AWD",
      "Bang & Olufsen Audio",
      "Wireless Charging",
      "Adaptive Cruise Control",
      "LED Matrix Headlights",
    ],
    hostName: "David Park",
    hostRating: 4.88,
    available: true,
  },
];
