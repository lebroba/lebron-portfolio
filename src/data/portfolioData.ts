
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
        src: '/placeholder-image.svg',
        title: 'Military Command Interface',
        description: 'Tactical command interface designed for mission-critical operations with real-time data visualization.',
        software: 'Adobe XD, Figma, After Effects',
        thumbnail: '/placeholder-image.svg'
      },
      {
        id: 'ui-2',
        type: 'image',
        src: '/placeholder-image.svg',
        title: 'Dashboard UI Demo',
        description: 'Interactive demonstration of military dashboard interface with real-time monitoring capabilities.',
        software: 'Figma, Principle, After Effects',
        thumbnail: '/placeholder-image.svg'
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
        src: '/placeholder-image.svg',
        title: 'Special Forces Unit Badge',
        description: 'Official military unit insignia design with complete branding system and style guide.',
        software: 'Adobe Illustrator, Brand Guidelines',
        thumbnail: '/placeholder-image.svg'
      },
      {
        id: 'insignia-2',
        type: 'image',
        src: '/placeholder-image.svg',
        title: 'Insignia Design Process',
        description: 'Behind-the-scenes look at the military insignia design process from concept to final approval.',
        software: 'Adobe Illustrator, After Effects',
        thumbnail: '/placeholder-image.svg'
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
        src: '/placeholder-image.svg',
        title: 'Tactical Equipment Visualization',
        description: '3D rendered tactical equipment and vehicle models for training and presentation materials.',
        software: 'Blender, Cinema 4D, KeyShot',
        thumbnail: '/placeholder-image.svg'
      },
      {
        id: '3d-2',
        type: 'image',
        src: '/placeholder-image.svg',
        title: '3D Animation Reel',
        description: 'Collection of 3D animations showcasing tactical scenarios and equipment demonstrations.',
        software: 'Cinema 4D, After Effects, Octane Render',
        thumbnail: '/placeholder-image.svg'
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
        src: '/placeholder-image.svg',
        title: 'Field Manual Layout',
        description: 'Technical manual design with clear typography and information hierarchy for field operations.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: '/placeholder-image.svg'
      },
      {
        id: 'print-2',
        type: 'image',
        src: '/placeholder-image.svg',
        title: 'Training Materials',
        description: 'Complete set of training materials including posters, handbooks, and reference cards.',
        software: 'Adobe InDesign, Photoshop, Illustrator',
        thumbnail: '/placeholder-image.svg'
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
        src: '/placeholder-image.svg',
        title: 'Military Portal Website',
        description: 'Responsive web portal design for military personnel with secure access and mobile optimization.',
        software: 'Figma, HTML/CSS, JavaScript',
        thumbnail: '/placeholder-image.svg'
      },
      {
        id: 'web-2',
        type: 'image',
        src: '/placeholder-image.svg',
        title: 'Web Design Process',
        description: 'Step-by-step walkthrough of the web design process for military applications.',
        software: 'Figma, Adobe XD, React',
        thumbnail: '/placeholder-image.svg'
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
        src: '/placeholder-image.svg',
        title: 'AI-Generated Concept Art',
        description: 'Futuristic military concept art created using AI tools and enhanced with traditional digital techniques.',
        software: 'Midjourney, Photoshop, Stable Diffusion',
        thumbnail: '/placeholder-image.svg'
      },
      {
        id: 'ai-2',
        type: 'image',
        src: '/placeholder-image.svg',
        title: 'AI Art Creation Process',
        description: 'Behind-the-scenes look at combining AI-generated imagery with traditional digital art techniques.',
        software: 'Midjourney, Adobe Photoshop, DaVinci Resolve',
        thumbnail: '/placeholder-image.svg'
      }
    ]
  }
];
