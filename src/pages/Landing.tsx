import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Sparkles, Wand2, BarChart3, Copy, CheckCircle2, TrendingUp, Zap, ArrowRight, Coffee, Dumbbell, Watch, Heart, Share2, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const exampleAds = [
  {
    original: "Check out our new coffee. It's really good.",
    improved: "☕ Your morning just got an upgrade. Our single-origin beans are roasted to perfection, delivering that rich, bold flavor you crave. Limited stock—order now and transform your daily routine.",
    score: 85,
    tone: "Professional",
    icon: Coffee,
    color: "from-amber-500/20 to-orange-500/20",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    accentColor: "text-amber-600",
    brandName: "Artisan Roasters",
    productName: "Premium Coffee Blend",
    cta: "Order Now",
    mood: "Warm & Inviting"
  },
  {
    original: "Buy our fitness app. It has workouts.",
    improved: "🔥 STOP making excuses. START making progress. Our AI-powered fitness app adapts to YOU. 50K+ users are already crushing their goals. Your transformation starts with one tap. Let's go! 💪",
    score: 92,
    tone: "Playful",
    icon: Dumbbell,
    color: "from-blue-500/20 to-purple-500/20",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    accentColor: "text-blue-600",
    brandName: "FitFlow",
    productName: "AI Fitness Coach",
    cta: "Start Free Trial",
    mood: "Energetic & Motivational"
  },
  {
    original: "Luxury watch sale. Limited time.",
    improved: "✨ Crafted for those who appreciate timeless elegance. Each timepiece is a masterpiece of precision and sophistication. Join an exclusive circle of connoisseurs. Reserve yours today.",
    score: 88,
    tone: "Luxury",
    icon: Watch,
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">AI-Powered Ad Creation & Analysis</span>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl mb-6 text-foreground leading-tight">
              Create ads that
              <span className="block text-primary">actually convert</span>
          </h1>
            
            <p className="text-xl sm:text-2xl mb-4 text-foreground font-light max-w-2xl mx-auto">
              NovaScript helps you craft compelling ad copy and analyze performance with AI-powered insights.
            </p>
            
            <p className="text-base sm:text-lg mb-8 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Whether you're creating new ads or optimizing existing ones, get actionable feedback to improve your messaging.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                onClick={() => navigate('/dashboard')} 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg h-auto shadow-lg shadow-primary/20 transition-all duration-200"
              >
                Try NovaScript
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/create')} 
                className="border-border bg-card/50 backdrop-blur-sm px-8 py-6 text-lg h-auto hover:bg-card"
              >
                Create Ad
              </Button>
            </div>
          </div>

          {/* Interactive Visual Ad Examples */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl mb-4 text-foreground font-bold">
                See AI in Action
              </h2>
              <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
                Watch how NovaScript transforms weak ads into compelling, conversion-focused copy
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Before - Social Media Ad Mockup */}
              <div key={`before-${activeExample}`} className="transition-all duration-700">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-sm font-bold text-foreground uppercase tracking-wide">Before Analysis</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-red-500/50 to-transparent" />
                </div>
                <Card className="p-0 bg-white border-2 border-red-500/20 shadow-2xl overflow-hidden max-w-sm mx-auto">
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
                  
                  {/* Product Image Area */}
                  <div className={`relative h-64 ${exampleAds[activeExample].bgColor} flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50" />
                    {(() => {
                      const Icon = exampleAds[activeExample].icon;
                      return (
                        <div className="relative z-10 flex flex-col items-center gap-3">
                          <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            <Icon className={`w-10 h-10 ${exampleAds[activeExample].accentColor}`} />
                          </div>
                          <div className="h-3 w-24 bg-gray-300 rounded" />
                        </div>
                      );
                    })()}
                  </div>
                  
                  {/* Caption Area */}
                  <div className="p-4 bg-white">
                    <div className="flex items-center gap-4 mb-3">
                      <Heart className="w-5 h-5 text-gray-400" />
                      <MessageCircle className="w-5 h-5 text-gray-400" />
                      <Share2 className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="space-y-2 mb-2">
                      <div className="h-3 w-20 bg-gray-300 rounded mb-1" />
                      <p className="text-sm text-gray-500 italic leading-relaxed">
                        "{exampleAds[activeExample].original}"
                      </p>
                    </div>
                    <div className="text-xs text-gray-400 mt-3">View all 12 comments</div>
                  </div>
                  
                  {/* Low Engagement Badge */}
                  <div className="px-4 py-2 bg-red-50 border-t border-red-100">
                    <div className="flex items-center gap-2 text-xs">
                      <TrendingUp className="w-3 h-3 text-red-500" />
                      <span className="text-red-600 font-semibold">Low Engagement • 12 likes</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* After - Enhanced Social Media Ad Mockup */}
              <div key={`after-${activeExample}`} className="transition-all duration-700">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-bold text-foreground uppercase tracking-wide">After NovaScript</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent" />
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <Card className="p-0 bg-white border-2 border-primary/30 shadow-2xl overflow-hidden relative max-w-sm mx-auto">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exampleAds[activeExample].color} opacity-20 blur-3xl -z-10`} />
                  
                  {/* Instagram Header */}
                  <div className="p-3 bg-white border-b border-primary/20 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${exampleAds[activeExample].bgColor} ring-2 ring-primary/30 flex items-center justify-center shadow-md`}>
                        {(() => {
                          const Icon = exampleAds[activeExample].icon;
                          return <Icon className={`w-4 h-4 ${exampleAds[activeExample].accentColor}`} />;
                        })()}
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
                    {activeExample === 0 ? (
                      // Coffee Ad - Visual Design
                      <div className="relative z-10 h-full flex items-center justify-center p-6">
                        {/* Coffee Cup Visual */}
                        <div className="relative">
                          {/* Coffee Cup */}
                          <div className="w-32 h-32 relative">
                            {/* Cup Body */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-20 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-900 rounded-b-2xl shadow-2xl">
                              {/* Coffee Surface */}
                              <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-amber-950 to-amber-800 rounded-t-2xl" />
                              {/* Steam */}
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2">
                                <div className="w-1 h-8 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                                <div className="w-1 h-10 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                                <div className="w-1 h-8 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                              </div>
                            </div>
                            {/* Cup Handle */}
                            <div className="absolute bottom-8 right-0 w-8 h-12 border-4 border-amber-800 rounded-r-full" />
                          </div>
                          {/* Coffee Beans Decoration */}
                          <div className="absolute -top-4 -left-4 w-6 h-8 bg-amber-900 rounded-full rotate-12 opacity-60" />
                          <div className="absolute -bottom-2 -right-6 w-5 h-7 bg-amber-800 rounded-full -rotate-12 opacity-60" />
                          <div className="absolute top-8 -right-8 w-4 h-6 bg-amber-900 rounded-full rotate-45 opacity-50" />
                        </div>
                        {/* Headline Overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                            <div className={`text-sm ${exampleAds[activeExample].accentColor} font-bold mb-1`}>
                              Your morning just got an upgrade.
                            </div>
                            <div className="text-xs text-gray-600">
                              {exampleAds[activeExample].productName}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeExample === 1 ? (
                      // Fitness App - Visual Design
                      <div className="relative z-10 h-full flex items-center justify-center p-6">
                        <div className="relative">
                          <div className={`w-28 h-28 rounded-3xl ${exampleAds[activeExample].bgColor} flex items-center justify-center border-4 border-white shadow-2xl`}>
                            <Dumbbell className={`w-14 h-14 ${exampleAds[activeExample].accentColor}`} />
                          </div>
                          {/* Energy Lines */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute w-32 h-32 border-2 border-blue-400/30 rounded-full animate-ping" />
                            <div className="absolute w-36 h-36 border border-purple-400/20 rounded-full animate-pulse" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                            <div className={`text-sm ${exampleAds[activeExample].accentColor} font-bold mb-1`}>
                              STOP making excuses. START making progress.
                            </div>
                            <div className="text-xs text-gray-600">
                              {exampleAds[activeExample].productName}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Luxury Watch - Visual Design
                      <div className="relative z-10 h-full flex items-center justify-center p-6">
                        <div className="relative">
                          <div className={`w-28 h-28 rounded-full ${exampleAds[activeExample].bgColor} flex items-center justify-center border-4 border-white shadow-2xl`}>
                            <Watch className={`w-14 h-14 ${exampleAds[activeExample].accentColor}`} />
                          </div>
                          {/* Elegant Lines */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute w-32 h-32 border border-rose-300/30 rounded-full" />
                            <div className="absolute w-36 h-36 border border-pink-300/20 rounded-full" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                            <div className={`text-sm ${exampleAds[activeExample].accentColor} font-bold mb-1`}>
                              Crafted for timeless elegance.
                            </div>
                            <div className="text-xs text-gray-600">
                              {exampleAds[activeExample].productName}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
                          {exampleAds[activeExample].score}
                        </span>
                        <span className="text-xs text-gray-400">/100</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className={`text-xs ${exampleAds[activeExample].accentColor} font-bold uppercase tracking-wide`}>
                        {exampleAds[activeExample].brandName}
                      </div>
                      {activeExample === 0 ? (
                        <>
                          <p className="text-sm text-gray-800 leading-relaxed font-semibold mb-1">
                            Your morning just got an upgrade.
                          </p>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Our single-origin beans are roasted to perfection, delivering that rich, bold flavor you crave. Limited stock—order now and transform your daily routine.
                          </p>
                        </>
                      ) : (
                        <p className="text-sm text-gray-800 leading-relaxed font-medium">
                          {exampleAds[activeExample].improved}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        {activeExample === 0 ? (
                          <>
                            <span className="text-[10px] text-gray-500 font-medium">#professional</span>
                            <span className="text-[10px] text-gray-500 font-medium">#warminviting</span>
                            <span className="text-[10px] text-gray-500 font-medium">#coffee</span>
                            <span className="text-[10px] text-gray-500 font-medium">#artisanroasters</span>
                          </>
                        ) : (
                          <>
                            <span className="text-[10px] text-gray-400">#{exampleAds[activeExample].tone.toLowerCase()}</span>
                            <span className="text-[10px] text-gray-400">#{exampleAds[activeExample].mood.toLowerCase().replace(' & ', '').replace(' ', '')}</span>
                          </>
                        )}
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
                        <span className="text-green-700 font-bold">High Engagement • 1.2K likes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600 font-semibold">+1,188</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Example Selector with Labels */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {exampleAds.map((ad, index) => {
                const Icon = ad.icon;
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
                    <Icon className={`w-4 h-4 ${activeExample === index ? ad.accentColor : 'text-muted-foreground'}`} />
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
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-card/50 border-y border-border/50">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-3xl sm:text-4xl mb-2 text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Ads Analyzed</div>
              </div>
            <div>
              <div className="font-heading text-3xl sm:text-4xl mb-2 text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Improvement Rate</div>
            </div>
            <div>
              <div className="font-heading text-3xl sm:text-4xl mb-2 text-primary">2.5s</div>
              <div className="text-sm text-muted-foreground">Avg. Analysis Time</div>
            </div>
            <div>
              <div className="font-heading text-3xl sm:text-4xl mb-2 text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-4 text-foreground font-bold">
            Two powerful tools in one
          </h2>
          <p className="text-center text-foreground/90 mb-12 max-w-2xl mx-auto text-lg">
            Create new ad copy or analyze existing ads to improve performance
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Create Ad Feature */}
            <Card className="p-8 bg-card border-border hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Wand2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl mb-3 text-card-foreground font-bold">Create Ad</h3>
              <p className="text-card-foreground/90 mb-6 leading-relaxed">
                Generate compelling ad copy from your product description. Choose your tone—professional, playful, or luxury—and let AI craft the perfect message.
              </p>
              <Button
                onClick={() => navigate('/create')}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Start Creating
              </Button>
            </Card>

            {/* Analyze Ad Feature */}
            <Card className="p-8 bg-card border-border hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <BarChart3 className="w-7 h-7 text-secondary" />
            </div>
              <h3 className="font-heading text-2xl mb-3 text-card-foreground font-bold">Analyze Ad</h3>
              <p className="text-card-foreground/90 mb-6 leading-relaxed">
                Paste your ad copy and get instant AI-powered feedback. See your effectiveness score, receive actionable suggestions, and get an improved version.
              </p>
              <Button
                onClick={() => navigate('/dashboard')}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Analyze Now
              </Button>
            </Card>
          </div>

          {/* Preview Card */}
          <Card className="p-8 border-2 border-primary/30 shadow-2xl relative overflow-hidden bg-card backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl" />
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