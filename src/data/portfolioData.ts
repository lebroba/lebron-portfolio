
export interface SlideData {
  id: string;
  type: 'image' | 'video' | 'youtube' | 'vimeo';
  src: string;
  title: string;
  description: string;
  software: string;
  thumbnail?: string;
}

export interface CategoryData {
  id: string;
  name: string;
  slides: SlideData[];
}

export const portfolioData: CategoryData[] = [
  {
    id: 'tactical',
    name: 'Tactical Graphics',
    slides: [
      {
        id: 'tactical-1',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
        title: 'Command Interface Design',
        description: 'Tactical command interface designed for mission-critical operations with real-time data visualization.',
        software: 'Adobe XD, Figma, After Effects',
        thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=150&fit=crop'
      },
      {
        id: 'tactical-2',
        type: 'youtube',
        src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: 'Tactical Animation Demo',
        description: 'Animated tactical graphics showing movement patterns and strategic positioning.',
        software: 'After Effects, Cinema 4D',
        thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=150&fit=crop'
      },
      {
        id: 'tactical-3',
        type: 'video',
        src: '/placeholder-video.mp4',
        title: 'Field Manual Graphics',
        description: 'Technical illustrations and infographics for military field manuals.',
        software: 'Adobe Illustrator, InDesign',
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=150&fit=crop'
      }
    ]
  },
  {
    id: 'digital',
    name: 'Digital Art',
    slides: [
      {
        id: 'digital-1',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
        title: 'Digital Warfare Concept',
        description: 'Concept art exploring digital warfare themes with cyberpunk aesthetics.',
        software: 'Photoshop, Procreate',
        thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=150&fit=crop'
      },
      {
        id: 'digital-2',
        type: 'vimeo',
        src: 'https://vimeo.com/148751763',
        title: 'Digital Art Process',
        description: 'Time-lapse showing the digital art creation process from sketch to final render.',
        software: 'Photoshop, Fresco',
        thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=150&fit=crop'
      }
    ]
  },
  {
    id: 'branding',
    name: 'Military Branding',
    slides: [
      {
        id: 'branding-1',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
        title: 'Unit Insignia Design',
        description: 'Official military unit insignia and branding system with brand guidelines.',
        software: 'Adobe Illustrator, Brand Guidelines',
        thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=150&fit=crop'
      }
    ]
  },
  {
    id: 'ui',
    name: 'Interface Design',
    slides: [
      {
        id: 'ui-1',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
        title: 'Military Dashboard UI',
        description: 'Comprehensive dashboard interface for military operations monitoring.',
        software: 'Figma, Adobe XD, Principle',
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=150&fit=crop'
      }
    ]
  }
];
