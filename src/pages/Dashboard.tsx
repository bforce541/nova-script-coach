import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Copy, LogOut } from "lucide-react";
import type { User } from "@supabase/supabase-js";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [caption, setCaption] = useState("");
  const [tone, setTone] = useState("professional");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
  }, []);

  const handleAnalyze = async () => {
    if (!caption.trim()) {
      toast({
        title: "Caption required",
        description: "Please enter a caption to analyze",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('analyze-caption', {
        body: { caption, tone }
      });

      if (error) {
        if (error.message.includes('429')) {
          toast({
            title: "Rate limit exceeded",
            description: "Please wait a moment before trying again",
            variant: "destructive",
          });
        } else if (error.message.includes('402')) {
          toast({
            title: "Credits depleted",
            description: "Please add credits to continue using AI features",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Analysis failed",
            description: error.message,
            variant: "destructive",
          });
        }
        return;
      }

      setResult(data);

      // Save to history if user is logged in
      if (user) {
        await supabase.from('analyses').insert({
          user_id: user.id,
          caption,
          tone,
          score: data.score,
          feedback: data.feedback,
          improved_version: data.improved_version,
        });
      }

    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate("/")}
              className="font-heading text-2xl text-foreground hover:text-primary transition-colors"
            >
              NovaScript
            </button>
            <nav className="flex items-center gap-6">
              <Button variant="ghost" onClick={() => navigate("/dashboard")}>
                Analyze
              </Button>
              {user && (
                <Button variant="ghost" onClick={() => navigate("/history")}>
                  History
                </Button>
              )}
              {user ? (
                <Button variant="ghost" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              ) : (
                <Button variant="ghost" onClick={() => navigate("/auth")}>
                  Sign In
                </Button>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="font-heading text-3xl mb-2 text-foreground">
            Your AI Ad Coach is ready.
          </h2>
          <p className="text-muted-foreground">
            Analyze your ad captions for effectiveness and get actionable feedback.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="text">Text Caption</TabsTrigger>
                <TabsTrigger value="image" disabled>Image Upload</TabsTrigger>
              </TabsList>
              
              <TabsContent value="text" className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="caption">Ad Caption</Label>
                  <Textarea
                    id="caption"
                    placeholder="Paste your ad caption here..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="min-h-[200px] bg-background border-input resize-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tone">Tone</Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger className="bg-background border-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="playful">Playful</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {loading ? "Analyzing..." : "Analyze"}
                </Button>
              </TabsContent>

              <TabsContent value="image" className="mt-6">
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                  <p className="text-muted-foreground">
                    Image upload coming soon
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {result ? (
              <>
                <Card className="p-6 bg-card border-border">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-heading text-lg text-foreground">Overall Effectiveness</h3>
                        <span className="font-heading text-3xl text-primary">{result.score}</span>
                      </div>
                      <Progress value={result.score} className="h-2" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h3 className="font-heading text-lg mb-4 text-foreground">Your Suggestions</h3>
                  <ul className="space-y-3">
                    {result.feedback.map((tip: string, index: number) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-lg text-foreground">Improved Version</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(result.improved_version)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {result.improved_version}
                  </p>
                </Card>
              </>
            ) : (
              <Card className="p-12 bg-card border-border text-center">
                <p className="text-muted-foreground">
                  Paste a caption or drop an image to start.
                </p>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;