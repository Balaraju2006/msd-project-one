import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, Fuel } from "lucide-react";

interface CarCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  seats: number;
  transmission: string;
  fuel: string;
  category?: string;
}

export const CarCard = ({
  id,
  name,
  image,
  price,
  rating,
  reviews,
  location,
  seats,
  transmission,
  fuel,
  category,
}: CarCardProps) => {
  return (
    <Link to={`/car/${id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform group-hover:scale-110"
          />
          {category && (
            <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur">
              {category}
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{location}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-md">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <span className="font-medium text-sm">{rating}</span>
              <span className="text-xs text-muted-foreground">({reviews})</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{seats}</span>
            </div>
            <div className="flex items-center gap-1">
              <Fuel className="h-4 w-4" />
              <span>{fuel}</span>
            </div>
            <span>{transmission}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-primary">${price}</div>
            <div className="text-xs text-muted-foreground">per day</div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
