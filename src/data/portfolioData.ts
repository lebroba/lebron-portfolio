
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
    id: 'ui',
    name: 'UI Design',
    slides: [
      {
        id: 'ui-1',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
        title: 'Military Command Interface',
        description: 'Tactical command interface designed for mission-critical operations with real-time data visualization.',
        software: 'Adobe XD, Figma, After Effects',
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=150&fit=crop'
      },
      {
        id: 'ui-2',
        type: 'youtube',
        src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: 'Dashboard UI Demo',
        description: 'Interactive demonstration of military dashboard interface with real-time monitoring capabilities.',
        software: 'Figma, Principle, After Effects',
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=150&fit=crop'
      }
    ]
  },
  {
    id: 'military-insignia',
    name: 'Military Insignia',
    slides: [
      {
        id: 'insignia-1',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
        title: 'Special Forces Unit Badge',
        description: 'Official military unit insignia design with complete branding system and style guide.',
        software: 'Adobe Illustrator, Brand Guidelines',
        thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=150&fit=crop'
      },
      {
        id: 'insignia-2',
        type: 'video',
        src: '/placeholder-video.mp4',
        title: 'Insignia Design Process',
        description: 'Behind-the-scenes look at the military insignia design process from concept to final approval.',
        software: 'Adobe Illustrator, After Effects',
        thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=150&fit=crop'
      }
    ]
  },
  {
    id: '3d',
    name: '3D Modeling',
    slides: [
      {
        id: '3d-1',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
        title: 'Tactical Equipment Visualization',
        description: '3D rendered tactical equipment and vehicle models for training and presentation materials.',
        software: 'Blender, Cinema 4D, KeyShot',
        thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=150&fit=crop'
      },
      {
        id: '3d-2',
        type: 'vimeo',
        src: 'https://vimeo.com/148751763',
        title: '3D Animation Reel',
        description: 'Collection of 3D animations showcasing tactical scenarios and equipment demonstrations.',
        software: 'Cinema 4D, After Effects, Octane Render',
        thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=150&fit=crop'
      }
    ]
  },
  {
    id: 'print-design',
    name: 'Print Design',
    slides: [
      {
        id: 'print-1',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        title: 'Field Manual Layout',
        description: 'Technical manual design with clear typography and information hierarchy for field operations.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop'
      },
      {
        id: 'print-2',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        title: 'Training Materials',
        description: 'Complete set of training materials including posters, handbooks, and reference cards.',
        software: 'Adobe InDesign, Photoshop, Illustrator',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop'
      }
    ]
  },
  {
    id: 'web-design',
    name: 'Web Design',
    slides: [
      {
        id: 'web-1',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
        title: 'Military Portal Website',
        description: 'Responsive web portal design for military personnel with secure access and mobile optimization.',
        software: 'Figma, HTML/CSS, JavaScript',
        thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=150&fit=crop'
      },
      {
        id: 'web-2',
        type: 'youtube',
        src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: 'Web Design Process',
        description: 'Step-by-step walkthrough of the web design process for military applications.',
        software: 'Figma, Adobe XD, React',
        thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=150&fit=crop'
      }
    ]
  },
  {
    id: 'ai',
    name: 'AI & Digital Art',
    slides: [
      {
        id: 'ai-1',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
        title: 'AI-Generated Concept Art',
        description: 'Futuristic military concept art created using AI tools and enhanced with traditional digital techniques.',
        software: 'Midjourney, Photoshop, Stable Diffusion',
        thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=150&fit=crop'
      },
      {
        id: 'ai-2',
        type: 'video',
        src: '/placeholder-video.mp4',
        title: 'AI Art Creation Process',
        description: 'Behind-the-scenes look at combining AI-generated imagery with traditional digital art techniques.',
        software: 'Midjourney, Adobe Photoshop, DaVinci Resolve',
        thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=150&fit=crop'
      }
    ]
  }
];
