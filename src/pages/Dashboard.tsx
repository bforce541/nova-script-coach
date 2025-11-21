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
import { Copy, BarChart3, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-4">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI Ad Analyzer</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl mb-4 text-foreground">
            Analyze Your Ad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Paste your ad text and get instant AI-powered feedback on effectiveness, clarity, and engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <Tabs defaultValue="text" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="text">Text Caption</TabsTrigger>
                  <TabsTrigger value="image" disabled>Image Upload</TabsTrigger>
                </TabsList>
                
                <TabsContent value="text" className="space-y-4 mt-0">
                  <div className="space-y-2">
                    <Label htmlFor="caption" className="text-base font-semibold">Ad Caption</Label>
                    <Textarea
                      id="caption"
                      placeholder="Paste your ad caption here..."
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      className="min-h-[200px] bg-background border-input resize-none"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tone" className="text-base font-semibold">Tone</Label>
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
                    disabled={loading || !caption.trim()}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base shadow-lg shadow-primary/20"
                  >
                    {loading ? (
                      <>
                        <BarChart3 className="w-4 h-4 mr-2 animate-pulse" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Analyze Ad
                      </>
                    )}
                  </Button>
                </TabsContent>

                <TabsContent value="image" className="mt-0">
                  <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                    <p className="text-muted-foreground">
                      Image upload coming soon
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {result ? (
              <>
                {/* Score Meter */}
                <Card className="p-6 bg-card border-border">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading text-xl text-foreground">Overall Effectiveness</h3>
                      <div className="flex items-baseline gap-2">
                        <span className={`font-heading text-4xl ${getScoreColor(result.score)}`}>
                          {result.score}
                        </span>
                        <span className="text-muted-foreground">/100</span>
                      </div>
                    </div>
                    <Progress 
                      value={result.score} 
                      className="h-3"
                    />
                    <p className="text-sm text-muted-foreground">
                      {result.score >= 80 
                        ? "Excellent! Your ad is highly effective." 
                        : result.score >= 60 
                        ? "Good, but there's room for improvement."
                        : "Your ad needs significant improvements."}
                    </p>
                  </div>
                </Card>

                {/* Feedback Points */}
                <Card className="p-6 bg-card border-border">
                  <h3 className="font-heading text-xl mb-4 text-foreground">Key Suggestions</h3>
                  <ul className="space-y-4">
                    {result.feedback.slice(0, 3).map((tip: string, index: number) => (
                      <li key={index} className="flex gap-3">
                        <div className={`w-6 h-6 rounded-full ${getScoreBgColor(result.score)}/20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <span className={`text-xs font-semibold ${getScoreColor(result.score)}`}>
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-muted-foreground leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Improved Version */}
                <Card className="p-6 bg-card border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-xl text-foreground">Improved Version</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(result.improved_version)}
                      className="h-8"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                      {result.improved_version}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCaption(result.improved_version);
                      setResult(null);
                    }}
                    className="w-full mt-4 border-border"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Use This Version
                  </Button>
                </Card>
              </>
            ) : (
              <Card className="p-12 bg-card border-border text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground mb-2">
                  Your analysis results will appear here
                </p>
                <p className="text-sm text-muted-foreground">
                  Paste your ad caption and click "Analyze Ad" to get started
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