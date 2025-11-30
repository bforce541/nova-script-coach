import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";

const Navigation = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-gradient-to-r from-background/95 via-background/98 to-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="font-heading text-2xl font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            NovaScript
          </button>
          
          <nav className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-sm font-medium transition-all duration-300"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/create")}
              className="text-sm font-medium transition-all duration-300"
            >
              Create
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="text-sm font-medium transition-all duration-300"
            >
              Analyze
            </Button>
            {user && (
              <Button
                variant="ghost"
                onClick={() => navigate("/history")}
                className="text-sm font-medium transition-all duration-300"
              >
                History
              </Button>
            )}
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="text-sm font-medium transition-all duration-300"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/auth")}
                className="text-sm font-medium transition-all duration-300"
              >
                Sign In
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
