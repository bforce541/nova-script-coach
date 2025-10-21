import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-24 sm:px-6 lg:px-8 sm:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl mb-6 text-foreground">
            NovaScript
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-muted-foreground font-light">
            Refine your message. Perfect your ads.
          </p>
          <p className="text-base sm:text-lg mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            NovaScript analyzes your social media captions and ads using AI — giving you clear, 
            actionable feedback to make your words more effective.
          </p>
          <Button 
            onClick={() => navigate('/dashboard')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg transition-all duration-200"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-card/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-16 text-foreground">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center">
                <span className="font-heading text-2xl text-primary">1</span>
              </div>
              <h3 className="font-heading text-xl mb-3 text-foreground">Paste</h3>
              <p className="text-muted-foreground">
                Add your ad caption or upload an image of your ad
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center">
                <span className="font-heading text-2xl text-primary">2</span>
              </div>
              <h3 className="font-heading text-xl mb-3 text-foreground">Analyze</h3>
              <p className="text-muted-foreground">
                Our AI evaluates tone, clarity, and engagement potential
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center">
                <span className="font-heading text-2xl text-primary">3</span>
              </div>
              <h3 className="font-heading text-xl mb-3 text-foreground">Improve</h3>
              <p className="text-muted-foreground">
                Get actionable tips and a refined version of your caption
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why NovaScript */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-16 text-foreground">
            Why NovaScript?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-heading text-xl mb-3 text-foreground">Clarity</h3>
              <p className="text-muted-foreground">
                Get instant feedback on message clarity and impact
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-heading text-xl mb-3 text-foreground">Confidence</h3>
              <p className="text-muted-foreground">
                Launch campaigns knowing your copy is optimized
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-heading text-xl mb-3 text-foreground">Results</h3>
              <p className="text-muted-foreground">
                Write ads that actually work and drive conversions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          © NovaScript 2025 • Built by Team Nova • Privacy • Terms
        </div>
      </footer>
    </div>
  );
};

export default Landing;