import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { User } from "@supabase/supabase-js";

interface Analysis {
  id: string;
  caption: string;
  score: number;
  created_at: string;
  tone: string;
}

const History = () => {
  const [user, setUser] = useState<User | null>(null);
  const [analyses, setAnalyses] = useState<Analysis[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
        loadHistory(session.user.id);
      }
    });
  }, [navigate]);

  const loadHistory = async (userId: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('analyses')
        .select('id, caption, score, created_at, tone')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAnalyses(data || []);
    } catch (error) {
      toast({
        title: "Error loading history",
        description: "Failed to load your analysis history",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-heading text-2xl text-foreground">NovaScript</h1>
            <nav className="flex items-center gap-6">
              <Button variant="ghost" onClick={() => navigate("/dashboard")}>
                Analyze
              </Button>
              <Button variant="ghost" onClick={() => navigate("/history")}>
                History
              </Button>
              {user && (
                <Button variant="ghost" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="font-heading text-3xl mb-2 text-foreground">Analysis History</h2>
          <p className="text-muted-foreground">
            View your past ad caption analyses
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading history...</p>
          </div>
        ) : analyses.length === 0 ? (
          <Card className="p-12 bg-card border-border text-center">
            <p className="text-muted-foreground mb-4">
              No analyses yet. Start analyzing your ad captions!
            </p>
            <Button 
              onClick={() => navigate("/dashboard")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Analyze Caption
            </Button>
          </Card>
        ) : (
          <div className="space-y-4">
            {analyses.map((analysis) => (
              <Card key={analysis.id} className="p-6 bg-card border-border hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground mb-2 line-clamp-2">
                      {analysis.caption}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="capitalize">{analysis.tone}</span>
                      <span>•</span>
                      <span>{formatDate(analysis.created_at)}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-heading text-3xl text-primary">
                      {analysis.score}
                    </div>
                    <div className="text-xs text-muted-foreground">Score</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default History;