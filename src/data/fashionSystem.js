// src/data/fashionSystem.js
export const fashionEditorialSystem = {
  themes: [
    {
      id: 'romantic-escapism',
      name: 'Romantic Escapism',
      concept: 'Pre-Raphaelite inspired editorial exploring natural beauty and feminine mystique',
      mood: ['Ethereal', 'dreamy', 'soft', 'nostalgic', 'timeless'],
      environment: ['Forest settings', 'natural landscapes', 'garden environments', 'historic locations'],
      garmentStyle: ['Flowing fabrics', 'soft silhouettes', 'natural materials', 'romantic details'],
      modelCharacter: ['Ethereal presence', 'soft expressions', 'contemplative', 'connection with nature'],
      lighting: ['Golden hour glow', 'Dappled forest light', 'Soft natural diffusion'],
      colorPalette: ['Soft pastels', 'Cream and ivory', 'Blush tones', 'Sage green']
    },
    {
      id: 'urban-rebellion',
      name: 'Urban Rebellion',
      concept: 'Dystopian fashion narrative examining conformity vs. individual expression',
      mood: ['Stark', 'dramatic', 'confrontational', 'intense', 'gritty'],
      environment: ['Brutalist architecture', 'industrial spaces', 'urban decay', 'concrete environments'],
      garmentStyle: ['Deconstructed garments', 'architectural pieces', 'bold silhouettes'],
      modelCharacter: ['Fierce', 'confident', 'defiant', 'strong presence'],
      lighting: ['Hard dramatic shadows', 'Stark contrast', 'Urban neon'],
      colorPalette: ['Black dominant', 'Concrete gray', 'Industrial metal', 'Blood red accents']
    },
    {
      id: 'nostalgic-future',
      name: 'Nostalgic Future',
      concept: 'Retro-futuristic blending 1970s optimism with contemporary sustainability',
      mood: ['Warm yet modern', 'optimistic', 'progressive', 'hopeful'],
      environment: ['Modern architecture', 'sustainable spaces', 'eco-conscious locations'],
      garmentStyle: ['Earth tones', 'organic materials', 'sustainable fabrics', 'retro silhouettes'],
      modelCharacter: ['Natural beauty', 'confident ease', 'forward-thinking'],
      lighting: ['Warm natural light', 'Golden afternoon', 'Soft window illumination'],
      colorPalette: ['Burnt orange', 'Mustard yellow', 'Olive green', 'Rust brown']
    },
    {
      id: 'minimalist-luxury',
      name: 'Minimalist Luxury',
      concept: 'Less is more philosophy with premium materials and quiet confidence',
      mood: ['Sophisticated', 'refined', 'calm', 'elevated', 'restrained'],
      environment: ['Clean architectural spaces', 'minimal environments', 'modern luxury settings'],
      garmentStyle: ['Quality over quantity', 'perfect construction', 'premium materials'],
      modelCharacter: ['Confident restraint', 'quiet power', 'sophisticated presence'],
      lighting: ['Clean even illumination', 'Soft sophisticated light', 'Precise control'],
      colorPalette: ['Cream', 'Camel', 'Gray spectrum', 'Navy', 'Black', 'White']
    },
  ],
  
  niches: [
    { id: 'streetwear', name: 'Streetwear Editorial', baseTheme: 'urban-rebellion' },
    { id: 'sustainable', name: 'Sustainable Fashion', baseTheme: 'nostalgic-future' },
    { id: 'luxury-minimal', name: 'Luxury Minimalist', baseTheme: 'minimalist-luxury' },
    { id: 'couture', name: 'Haute Couture', baseTheme: 'romantic-escapism' },
    { id: 'avant-garde', name: 'Avant-Garde', baseTheme: 'urban-rebellion' },
  ]
};

export const characterOptions = {
  age: ['Early 20s', 'Mid-30s', 'Late 40s', 'Teenager', 'Young adult'],
  bodyType: ['Athletic', 'Slim', 'Curvy', 'Muscular', 'Petite', 'Plus-size', 'Lean', 'Toned'],
  height: ['Tall', 'Average height', 'Petite', 'Statuesque', 'Compact'],
  faceShape: ['Oval', 'Round', 'Square', 'Heart-shaped', 'Diamond', 'Angular'],
  eyeCharacteristics: ['Deep brown eyes', 'Bright blue eyes', 'Green eyes', 'Hazel eyes', 'Intense gaze'],
  hairDescription: ['Long flowing hair', 'Short cropped', 'Shoulder-length', 'Curly hair', 'Straight hair'],
  expression: ['Confident smile', 'Subtle smirk', 'Serious look', 'Intense stare', 'Soft expression'],
  skinCharacteristics: ['Fair skin', 'Medium skin', 'Olive skin', 'Brown skin', 'Dark skin'],
  pose: ['Standing confident', 'Power pose', 'Leaning casual', 'Dynamic movement']
};