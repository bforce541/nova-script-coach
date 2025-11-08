import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Copy, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";

const Create = () => {
  const [productInfo, setProductInfo] = useState("");
  const [tone, setTone] = useState("professional");
  const [loading, setLoading] = useState(false);
  const [generatedAd, setGeneratedAd] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!productInfo.trim()) {
      toast({
        title: "Product info required",
        description: "Please enter product information to generate an ad",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setGeneratedAd(null);

    // Simulate API call - replace with actual API endpoint when available
    try {
      // For now, we'll use a placeholder. Replace this with actual API call:
      // const { data, error } = await supabase.functions.invoke('create-ad', {
      //   body: { productInfo, tone }
      // });
      
      // Simulated delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Placeholder generated ad
      const placeholderAd = `Discover ${productInfo.split(' ').slice(0, 3).join(' ')} - the perfect solution for your needs. Experience quality, style, and innovation all in one. Order now and transform your experience today!`;
      
      setGeneratedAd(placeholderAd);
      
      toast({
        title: "Ad generated!",
        description: "Your AI-generated ad is ready",
      });
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "Failed to generate ad. Please try again.",
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
      description: "Ad text copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI Ad Creator</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl mb-4 text-foreground">
            Create Your Ad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Describe your product or service, choose a tone, and let AI craft compelling ad copy for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="product-info" className="text-base font-semibold">
                    Product or Service Description
                  </Label>
                  <Textarea
                    id="product-info"
                    placeholder="E.g., A premium coffee blend with notes of chocolate and caramel, perfect for morning routines..."
                    value={productInfo}
                    onChange={(e) => setProductInfo(e.target.value)}
                    className="min-h-[200px] bg-background border-input resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    The more details you provide, the better the ad will be.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone" className="text-base font-semibold">
                    Tone & Style
                  </Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger className="bg-background border-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="playful">Playful</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                      <SelectItem value="funny">Funny</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={loading || !productInfo.trim()}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base shadow-lg shadow-primary/20"
                >
                  {loading ? (
                    <>
                      <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Ad
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {generatedAd ? (
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-xl text-foreground">Generated Ad</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(generatedAd)}
                    className="h-8"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                    {generatedAd}
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => navigate('/dashboard')}
                    className="flex-1 border-border"
                  >
                    Analyze This Ad
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setGeneratedAd(null);
                      setProductInfo("");
                    }}
                    className="flex-1 border-border"
                  >
                    Create Another
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="p-12 bg-card border-border text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground mb-2">
                  Your generated ad will appear here
                </p>
                <p className="text-sm text-muted-foreground">
                  Fill in the form and click "Generate Ad" to get started
                </p>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Create;
