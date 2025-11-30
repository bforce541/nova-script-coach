import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Sparkles, Wand2, BarChart3, Copy, CheckCircle2, TrendingUp, Zap, ArrowRight, Heart, Share2, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const exampleAds = [
  {
    // Coffee
    beforeHeadline: "Check out our new coffee. It's really good.",
    beforeSubtext: "We sell coffee beans.",
    beforeBody: "Fresh coffee. Different flavors. Buy some today.",
    beforeCTA: "Learn more",
    beforeScore: 10,
    beforeLikes: 8,
    afterHeadlinePill: "Your morning just got an upgrade.",
    afterSubHeadline: "Premium Coffee Blend",
    afterBody: "Our single-origin beans are roasted to perfection, delivering the rich, bold flavor you crave.",
    afterCTA: "Order Now →",
    afterScore: 85,
    afterLikes: '1.1K',
    afterDelta: '+1,082',
    tone: "Professional",
    beforeImageSrc: '/ads/coffee-before.svg',
    afterImageSrc: '/ads/coffee-after.svg',
    color: "from-amber-500/20 to-orange-500/20",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    accentColor: "text-amber-600",
    brandName: "Artisan Roasters",
    productName: "Premium Coffee Blend",
    cta: "Order Now",
    mood: "Warm & Inviting"
  },
  {
    // Fitness
    beforeHeadline: "Buy our fitness app. It has workouts.",
    beforeSubtext: "We have some exercises you can do.",
    beforeBody: "Download the app and start doing workouts when you want.",
    beforeCTA: "Try it maybe",
    beforeScore: 12,
    beforeLikes: 20,
    afterHeadlinePill: "STOP making excuses. START making progress.",
    afterSubHeadline: "AI Fitness Coach",
    afterBody: "Our AI-powered fitness app adapts with personalized plans and real-time feedback.",
    afterCTA: "Start Free Trial →",
    afterScore: 92,
    afterLikes: '1.5K',
    afterDelta: '+1,480',
    tone: "Playful",
    beforeImageSrc: '/ads/fitness-before.jpg',
    afterImageSrc: '/ads/fitness-after.svg',
    color: "from-blue-500/20 to-purple-500/20",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    accentColor: "text-blue-600",
    brandName: "FitFlow",
    productName: "AI Fitness Coach",
    cta: "Start Free Trial",
    mood: "Energetic & Motivational"
  },
  {
    // Watch
    beforeHeadline: "Luxury watch sale. Limited time.",
    beforeSubtext: "We have watches you can buy.",
    beforeBody: "Different colors and straps available. Buy now before it's gone.",
    beforeCTA: "Shop watches",
    beforeScore: 12,
    beforeLikes: 12,
    afterHeadlinePill: "Crafted for timeless elegance.",
    afterSubHeadline: "Heritage Collection",
    afterBody: "Each timepiece is hand-assembled with sapphire crystal and Swiss movement. Reserve yours today.",
    afterCTA: "Reserve Now →",
    afterScore: 92,
    afterLikes: 980,
    afterDelta: '+968',
    tone: "Luxury",
    beforeImageSrc: '/ads/watch-before.svg',
    afterImageSrc: '/ads/watch-after.svg',
    color: "from-rose-500/20 to-pink-500/20",
    bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
    accentColor: "text-rose-600",
    brandName: "Élégance Timepieces",
    productName: "Heritage Collection",
    cta: "Reserve Now",
    mood: "Sophisticated & Exclusive"
  }
];

const Landing = () => {
  const navigate = useNavigate();
  const [activeExample, setActiveExample] = useState(0);

  // Auto-rotate examples
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExample((prev) => (prev + 1) % exampleAds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-24 sm:px-6 lg:px-8 sm:pt-32 overflow-hidden">
        {/* Enhanced background with better contrast */}
        <div className="absolute inset-0 bg-[image:radial-gradient(circle_at_50%_120%,hsl(var(--primary)),transparent_50%),linear-gradient(135deg,hsl(var(--background)),hsl(var(--secondary)),hsl(var(--primary)))] animate-fade-in" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
    beforeImageSrc: '/ads/before-fitness.jpg',
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 mb-8 shadow-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">AI-Powered Ad Creation & Analysis</span>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl mb-6 text-foreground leading-tight animate-slide-up">
              Create ads that
              <span className="block text-primary bg-gradient-to-r from-primary via-soft-peach to-warm-beige bg-clip-text text-transparent">actually convert</span>
          </h1>
            
            <p className="text-xl sm:text-2xl mb-4 text-foreground font-light max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              NovaScript helps you craft compelling ad copy and analyze performance with AI-powered insights.
            </p>
            
            <p className="text-base sm:text-lg mb-8 text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              Whether you're creating new ads or optimizing existing ones, get actionable feedback to improve your messaging.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <Button 
                onClick={() => navigate('/dashboard')} 
                className="bg-gradient-to-r from-primary to-soft-peach text-primary-foreground hover:opacity-90 px-8 py-6 text-lg h-auto shadow-lg shadow-primary/30 transition-all duration-300"
              >
                Try NovaScript
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/create')} 
                className="border-border bg-card/50 backdrop-blur-sm px-8 py-6 text-lg h-auto hover:bg-card transition-all duration-300"
              >
                Create Ad
              </Button>
            </div>
          </div>

          {/* Interactive Visual Ad Examples */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl mb-4 text-foreground font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
                See AI in Action
              </h2>
              <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
                Watch how NovaScript transforms weak ads into compelling, conversion-focused copy
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Before - Social Media Ad Mockup */}
              <div key={`before-${activeExample}`} className="transition-all duration-700 animate-fade-in">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-sm font-bold text-foreground uppercase tracking-wide">Before Analysis</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-red-500/50 to-transparent" />
                </div>
                <Card className="p-0 bg-white border-2 border-red-500/20 shadow-2xl overflow-hidden max-w-sm mx-auto hover:shadow-red-500/20 hover:scale-[1.02] transition-all duration-300">
                  {/* Instagram Header */}
                  <div className="p-3 bg-white border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400" />
                      <div>
                        <div className="h-3 w-24 bg-gray-300 rounded mb-1" />
                        <div className="h-2 w-16 bg-gray-200 rounded" />
                      </div>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                  </div>
                  
                  {/* Product Image Area (Before) */}
                  <div className={`relative h-64 ${exampleAds[activeExample].bgColor} flex items-center justify-center overflow-hidden`}> 
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50" />
                    <div className="relative z-10 w-full h-full">
                      <img src={exampleAds[activeExample].beforeImageSrc} alt={`${exampleAds[activeExample].productName} before`} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  {/* Caption Area */}
                  <div className="p-4 bg-white">
                    <div className="flex items-center gap-4 mb-3">
                      <Heart className="w-5 h-5 text-gray-400" />
                      <MessageCircle className="w-5 h-5 text-gray-400" />
                      <Share2 className="w-5 h-5 text-gray-400" />
                      <div className="flex-1" />
                      <div className="flex items-baseline gap-1">
                        <span className="font-heading text-lg font-bold text-red-600">{exampleAds[activeExample].beforeScore}</span>
                        <span className="text-xs text-gray-400">/100</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-2">
                      <div className="text-sm font-bold text-foreground">{exampleAds[activeExample].beforeHeadline}</div>
                      <div className="text-xs text-muted-foreground">{exampleAds[activeExample].beforeSubtext}</div>
                      <p className="text-sm text-gray-500 italic leading-relaxed">
                        "{exampleAds[activeExample].beforeBody}"
                      </p>
                    </div>
                    <div className="text-xs text-gray-400 mt-3">{exampleAds[activeExample].beforeCTA}</div>
                  </div>
                  
                  {/* Low Engagement Badge */}
                  <div className="px-4 py-2 bg-red-50 border-t border-red-100">
                    <div className="flex items-center gap-2 text-xs">
                      <TrendingUp className="w-3 h-3 text-red-500" />
                      <span className="text-red-600 font-semibold">Low Engagement • {exampleAds[activeExample].beforeLikes} likes • {exampleAds[activeExample].beforeScore}/100</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* After - Enhanced Social Media Ad Mockup */}
              <div key={`after-${activeExample}`} className="transition-all duration-700 animate-fade-in">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                  <span className="text-sm font-bold text-foreground uppercase tracking-wide">After NovaScript</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent" />
                  <Zap className="w-4 h-4 text-primary animate-pulse" />
                </div>
                <Card className="p-0 bg-white border-2 border-primary/30 shadow-2xl overflow-hidden relative max-w-sm mx-auto hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exampleAds[activeExample].color} opacity-20 blur-3xl -z-10 transition-opacity duration-700`} />
                  
                  {/* Instagram Header */}
                  <div className="p-3 bg-white border-b border-primary/20 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full overflow-hidden ${exampleAds[activeExample].bgColor} ring-2 ring-primary/30 flex items-center justify-center shadow-md`}>
                        <img src={exampleAds[activeExample].afterImageSrc} alt={`${exampleAds[activeExample].brandName} logo`} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className={`text-xs ${exampleAds[activeExample].accentColor} font-bold mb-0.5`}>
                          {exampleAds[activeExample].brandName}
                        </div>
                        <div className="text-[10px] text-gray-400">Sponsored</div>
                      </div>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-primary/40" />
                  </div>
                  
                  {/* Enhanced Product Image Area */}
                  <div className={`relative h-64 ${exampleAds[activeExample].bgColor} overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${exampleAds[activeExample].color} opacity-30`} />
                    <div className="absolute top-3 right-3 z-20">
                      <span className={`text-xs px-2.5 py-1 rounded-full ${exampleAds[activeExample].accentColor} bg-white/90 font-bold shadow-md`}>
                        {exampleAds[activeExample].tone}
                      </span>
                    </div>
                    {/* After image (full-width high-quality) */}
                    <div className="relative z-10 h-full w-full">
                      <img src={exampleAds[activeExample].afterImageSrc} alt={`${exampleAds[activeExample].productName} after`} className="w-full h-full object-cover" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                          <div className={`text-sm ${exampleAds[activeExample].accentColor} font-bold mb-1`}>
                            {activeExample === 0 ? 'Your morning just got an upgrade.' : activeExample === 1 ? 'STOP making excuses. START making progress.' : 'Crafted for timeless elegance.'}
                          </div>
                          <div className="text-xs text-gray-600">
                            {exampleAds[activeExample].productName}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Caption Area */}
                  <div className="p-4 bg-white relative z-10">
                    <div className="flex items-center gap-4 mb-3">
                      <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                      <MessageCircle className="w-5 h-5 fill-primary text-primary" />
                      <Share2 className="w-5 h-5 text-primary" />
                      <div className="flex-1" />
                      <div className="flex items-baseline gap-1">
                        <span className={`font-heading text-lg font-bold ${exampleAds[activeExample].accentColor}`}>
                          {exampleAds[activeExample].afterScore}
                        </span>
                        <span className="text-xs text-gray-400">/100</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className={`text-xs ${exampleAds[activeExample].accentColor} font-bold uppercase tracking-wide`}>
                        {exampleAds[activeExample].brandName}
                      </div>
                      <>
                        <p className="text-sm text-gray-800 leading-relaxed font-semibold mb-1">
                          {exampleAds[activeExample].afterHeadlinePill}
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {exampleAds[activeExample].afterBody}
                        </p>
                      </>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <span className="text-[10px] text-gray-400">#{exampleAds[activeExample].tone.toLowerCase()}</span>
                        <span className="text-[10px] text-gray-400">#{exampleAds[activeExample].mood.toLowerCase().replace(' & ', '').replace(' ', '')}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <button className={`flex-1 h-9 px-4 rounded-lg ${exampleAds[activeExample].bgColor} border-2 border-white shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform`}>
                        <span className={`text-xs font-bold ${exampleAds[activeExample].accentColor}`}>{exampleAds[activeExample].cta}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${exampleAds[activeExample].accentColor}`} />
                      </button>
                    </div>
                    <div className="text-xs text-gray-500 mt-3 font-semibold">View all 89 comments</div>
                  </div>
                  
                  {/* High Engagement Badge */}
                  <div className="px-4 py-2 bg-green-50 border-t border-green-100 relative z-10">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-700 font-bold">High Engagement • {exampleAds[activeExample].afterLikes} likes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600 font-semibold">{exampleAds[activeExample].afterDelta}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Example Selector with Labels */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {exampleAds.map((ad, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setActiveExample(index)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeExample === index 
                        ? 'bg-primary/20 border-2 border-primary shadow-lg' 
                        : 'bg-card/50 border border-border hover:bg-card/80'
                    }`}
                    aria-label={`View ${ad.tone} example`}
                  >
                    <img src={ad.afterImageSrc} className={`w-4 h-4 rounded object-cover ${activeExample === index ? '' : 'opacity-70'}`} alt={`${ad.tone} thumbnail`} />
                    <span className={`text-sm font-medium ${activeExample === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {ad.tone}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                onClick={() => navigate('/create')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg h-auto shadow-xl shadow-primary/30"
              >
                Create Your Own Ad
                <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-card/30 via-card/50 to-card/30 border-y border-border/50">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <div className="font-heading text-3xl sm:text-4xl mb-2 text-primary bg-gradient-to-br from-primary to-soft-peach bg-clip-text text-transparent">10K+</div>
              <div className="text-sm text-muted-foreground">Ads Analyzed</div>
              </div>
            <div className="animate-fade-in hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="font-heading text-3xl sm:text-4xl mb-2 text-primary bg-gradient-to-br from-primary to-soft-peach bg-clip-text text-transparent">95%</div>
              <div className="text-sm text-muted-foreground">Improvement Rate</div>
            </div>
            <div className="animate-fade-in hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <div className="font-heading text-3xl sm:text-4xl mb-2 text-primary bg-gradient-to-br from-primary to-soft-peach bg-clip-text text-transparent">2.5s</div>
              <div className="text-sm text-muted-foreground">Avg. Analysis Time</div>
            </div>
            <div className="animate-fade-in hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <div className="font-heading text-3xl sm:text-4xl mb-2 text-primary bg-gradient-to-br from-primary to-soft-peach bg-clip-text text-transparent">4.9/5</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-card/40 to-background backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-4 text-foreground font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text animate-fade-in">
            Two powerful tools in one
          </h2>
          <p className="text-center text-foreground/90 mb-12 max-w-2xl mx-auto text-lg animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Create new ad copy or analyze existing ads to improve performance
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Create Ad Feature */}
            <Card className="p-8 bg-gradient-to-br from-card to-card/80 border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-soft-peach/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wand2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl mb-3 text-card-foreground font-bold">Create Ad</h3>
              <p className="text-card-foreground/90 mb-6 leading-relaxed">
                Generate compelling ad copy from your product description. Choose your tone—professional, playful, or luxury—and let AI craft the perfect message.
              </p>
              <Button
                onClick={() => navigate('/create')}
                className="w-full bg-gradient-to-r from-primary to-soft-peach text-primary-foreground hover:opacity-90"
              >
                Start Creating
              </Button>
            </Card>

            {/* Analyze Ad Feature */}
            <Card className="p-8 bg-gradient-to-br from-card to-card/80 border-border hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 group hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-warm-beige/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 text-secondary" />
            </div>
              <h3 className="font-heading text-2xl mb-3 text-card-foreground font-bold">Analyze Ad</h3>
              <p className="text-card-foreground/90 mb-6 leading-relaxed">
                Paste your ad copy and get instant AI-powered feedback. See your effectiveness score, receive actionable suggestions, and get an improved version.
              </p>
              <Button
                onClick={() => navigate('/dashboard')}
                className="w-full bg-gradient-to-r from-primary to-soft-peach text-primary-foreground hover:opacity-90"
              >
                Analyze Now
              </Button>
            </Card>
          </div>

          {/* Preview Card */}
          <Card className="p-8 border-2 border-primary/30 shadow-2xl relative overflow-hidden bg-gradient-to-br from-card to-card/80 backdrop-blur-sm hover:shadow-primary/20 transition-all duration-500 animate-scale-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-soft-peach/10 rounded-full -mr-20 -mt-20 blur-3xl animate-pulse" />
            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 ring-2 ring-primary/30">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl mb-2 text-card-foreground font-bold">Sample Analysis Result</h3>
                  <p className="text-sm text-card-foreground/90 mb-4">
                    Here's what you'll get when you analyze an ad
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background/80 rounded-lg border border-primary/20 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-foreground">Overall Effectiveness</span>
                  <span className="font-heading text-3xl text-primary font-bold">85</span>
                </div>
                
                <div className="p-4 bg-background/80 rounded-lg border border-primary/20 backdrop-blur-sm">
                  <h4 className="text-sm font-bold text-foreground mb-3">Key Suggestions</h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>Add a clear call-to-action to increase engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>Include specific benefits rather than generic features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>Use more emotional language to connect with your audience</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-background/80 rounded-lg border border-primary/20 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-foreground">Improved Version</h4>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-primary/10">
                      <Copy className="w-4 h-4 text-primary" />
                    </Button>
            </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    "Transform your mornings with our premium coffee blend. Experience rich, bold flavors that awaken your senses. Start your day right—order now and taste the difference."
              </p>
            </div>
          </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 px-4 py-8 sm:px-6 lg:px-8 bg-background/50">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 NovaScript • Built by Team Nova •{" "}
            <a href="mailto:contact@novascript.ai" className="hover:text-primary transition-colors">
              Contact
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;