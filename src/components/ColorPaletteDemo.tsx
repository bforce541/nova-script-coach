import React from 'react';

const ColorPaletteDemo = () => {
  const colorSwatches = [
    { name: 'Rich Black', class: 'bg-rich-black', hex: '#050517', usage: 'Primary backgrounds, major surfaces' },
    { name: 'Feldgrau', class: 'bg-feldgrau', hex: '#4E6766', usage: 'Secondary elements, borders, neutrals' },
    { name: 'Amaranth Purple', class: 'bg-amaranth-purple', hex: '#AF1B3F', usage: 'Accent hints, small highlights' },
    { name: 'Light Orange', class: 'bg-light-orange', hex: '#F2D0A9', usage: 'Neutral elements, warm accents' },
    { name: 'Platinum', class: 'bg-platinum', hex: '#D3D5D7', usage: 'Light neutrals, secondary text' },
  ];

  return (
    <div className="p-8 bg-background text-foreground">
      <h2 className="text-2xl font-bold mb-6 text-text-premium">NovaScript Color Palette</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {colorSwatches.map((color) => (
          <div key={color.name} className="bg-card border border-border rounded-lg p-4">
            <div className={`w-full h-16 rounded-md mb-3 ${color.class}`}></div>
            <h3 className="font-semibold text-foreground">{color.name}</h3>
            <p className="text-sm text-muted-foreground">{color.hex}</p>
            <p className="text-xs text-muted-foreground mt-2">{color.usage}</p>
          </div>
        ))}
      </div>

      {/* Usage Examples */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-text-premium">Usage Examples</h3>
        
        {/* Primary Button with Amaranth Purple accent */}
        <div className="bg-card border border-border rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-2">Primary Button (Amaranth Purple accent)</h4>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
            Click Me
          </button>
        </div>

        {/* Secondary elements with Feldgrau */}
        <div className="bg-card border border-border rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-2">Secondary Elements (Feldgrau)</h4>
          <div className="space-y-2">
            <div className="bg-secondary text-secondary-foreground px-3 py-2 rounded">Secondary Button</div>
            <div className="border border-border px-3 py-2 rounded">Input Field</div>
          </div>
        </div>

        {/* Neutral elements with Light Orange and Platinum */}
        <div className="bg-card border border-border rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-2">Neutral Elements</h4>
          <div className="space-y-2">
            <div className="bg-light-orange text-rich-black px-3 py-2 rounded">Light Orange Background</div>
            <div className="bg-platinum text-rich-black px-3 py-2 rounded">Platinum Background</div>
          </div>
        </div>

        {/* Text hierarchy */}
        <div className="bg-card border border-border rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-2">Text Hierarchy</h4>
          <div className="space-y-2">
            <h5 className="text-text-premium text-lg">Premium Text (Rich Black background)</h5>
            <p className="text-foreground">Primary Text</p>
            <p className="text-muted-foreground">Muted Text</p>
            <p className="text-feldgrau">Feldgrau Text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteDemo;
