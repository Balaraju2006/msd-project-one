import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, User, LayoutDashboard, PlusCircle } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const [userMode, setUserMode] = useState<"user" | "host">("user");

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Car className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DriveShare
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {userMode === "user" ? (
              <>
                <Link
                  to="/browse"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/browse") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Browse Cars
                </Link>
                <Link
                  to="/dashboard"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/dashboard") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  My Bookings
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/host/dashboard"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/host/dashboard") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/host/add-car"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/host/add-car") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Add Car
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant={userMode === "user" ? "default" : "outline"}
              size="sm"
              onClick={() => setUserMode("user")}
              className="gap-2"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">User</span>
            </Button>
            <Button
              variant={userMode === "host" ? "default" : "outline"}
              size="sm"
              onClick={() => setUserMode("host")}
              className="gap-2"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden sm:inline">Host</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
