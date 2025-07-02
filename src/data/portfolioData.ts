
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
        id: 'military-anchor',
        type: 'image',
        src: '/images/portfolio/Military/Anchor_bp_sc_small.png',
        title: 'Anchor Blueprint',
        description: 'Military anchor insignia design with blueprint styling.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: '/images/portfolio/Military/Anchor_bp_sc_small.png'
      },
      {
        id: 'military-back',
        type: 'image',
        src: '/images/portfolio/Military/back_2013c.png',
        title: 'Back Design 2013',
        description: 'Military insignia back design with detailed embellishments.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: '/images/portfolio/Military/back_2013c.png'
      },
      {
        id: 'military-capstone',
        type: 'image',
        src: '/images/portfolio/Military/capstone.png',
        title: 'Capstone Design',
        description: 'Capstone military insignia with official styling.',
        software: 'Adobe Illustrator',
        thumbnail: '/images/portfolio/Military/capstone.png'
      },
      {
        id: 'military-cgbl-rc-3',
        type: 'image',
        src: '/images/portfolio/Military/CGBL_RC_3_zps56866326.png',
        title: 'CGBL RC 3',
        description: 'Coast Guard insignia design with official styling.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: '/images/portfolio/Military/CGBL_RC_3_zps56866326.png'
      },
      {
        id: 'military-cgbl-rc-7',
        type: 'image',
        src: '/images/portfolio/Military/CGBL_RC_7_zps5a59e045.png',
        title: 'CGBL RC 7',
        description: 'Coast Guard insignia variation with detailed elements.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: '/images/portfolio/Military/CGBL_RC_7_zps5a59e045.png'
      },
      {
        id: 'military-classroom',
        type: 'image',
        src: '/images/portfolio/Military/classroom2.png',
        title: 'Classroom Design',
        description: 'Military classroom insignia design for educational units.',
        software: 'Adobe Illustrator',
        thumbnail: '/images/portfolio/Military/classroom2.png'
      },
      {
        id: 'military-cpr-11-crest',
        type: 'image',
        src: '/images/portfolio/Military/CPR_11_Crest.png',
        title: 'CPR 11 Crest',
        description: 'Official CPR 11 crest design with military styling.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: '/images/portfolio/Military/CPR_11_Crest.png'
      },
      {
        id: 'military-cpr11-fb',
        type: 'image',
        src: '/images/portfolio/Military/CPR11_FB_thumbnail.png',
        title: 'CPR11 FB Thumbnail',
        description: 'Social media thumbnail for CPR11 military unit.',
        software: 'Adobe Photoshop',
        thumbnail: '/images/portfolio/Military/CPR11_FB_thumbnail.png'
      },
      {
        id: 'military-cscs-draft',
        type: 'image',
        src: '/images/portfolio/Military/CSCS_draft_001.png',
        title: 'CSCS Draft Design',
        description: 'Draft design for CSCS military insignia.',
        software: 'Adobe Illustrator',
        thumbnail: '/images/portfolio/Military/CSCS_draft_001.png'
      },
      {
        id: 'military-hi-res',
        type: 'image',
        src: '/images/portfolio/Military/Hi_RES1.jpg',
        title: 'High Resolution Design',
        description: 'High resolution military insignia for official use.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: '/images/portfolio/Military/Hi_RES1.jpg'
      },
      {
        id: 'military-mahan-warrior',
        type: 'image',
        src: '/images/portfolio/Military/mahan_warrior.png',
        title: 'Mahan Warrior',
        description: 'Mahan Warrior military insignia with detailed elements.',
        software: 'Adobe Illustrator',
        thumbnail: '/images/portfolio/Military/mahan_warrior.png'
      },
      {
        id: 'military-maria-boot',
        type: 'image',
        src: '/images/portfolio/Military/maria_boot_heel_t.png',
        title: 'Maria Boot Heel',
        description: 'Maria Boot Heel military design element.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: '/images/portfolio/Military/maria_boot_heel_t.png'
      },
      {
        id: 'military-mcpo',
        type: 'image',
        src: '/images/portfolio/Military/MCPO.png',
        title: 'MCPO Insignia',
        description: 'Master Chief Petty Officer insignia design.',
        software: 'Adobe Illustrator',
        thumbnail: '/images/portfolio/Military/MCPO.png'
      },
      {
        id: 'military-safety-poster',
        type: 'image',
        src: '/images/portfolio/Military/safety_poster.png',
        title: 'Safety Poster',
        description: 'Military safety poster design with instructional elements.',
        software: 'Adobe Illustrator, InDesign',
        thumbnail: '/images/portfolio/Military/safety_poster.png'
      },
      {
        id: 'military-scpo',
        type: 'image',
        src: '/images/portfolio/Military/SCPO.png',
        title: 'SCPO Insignia',
        description: 'Senior Chief Petty Officer insignia design.',
        software: 'Adobe Illustrator',
        thumbnail: '/images/portfolio/Military/SCPO.png'
      }
    ]
  },
  {
    id: '3d',
    name: '3D Modeling',
    slides: [
      {
        id: '3d-alpha',
        type: 'image',
        src: '/images/portfolio/3D/alpha_zps78db5836.png',
        title: 'Alpha Model',
        description: '3D rendered alpha model with detailed texturing.',
        software: 'Blender, Cinema 4D',
        thumbnail: '/images/portfolio/3D/alpha_zps78db5836.png'
      },
      {
        id: '3d-ao-1',
        type: 'image',
        src: '/images/portfolio/3D/AO_zps0d4e89d2.png',
        title: 'Ambient Occlusion 1',
        description: '3D model with ambient occlusion rendering technique.',
        software: 'Blender, Cinema 4D',
        thumbnail: '/images/portfolio/3D/AO_zps0d4e89d2.png'
      },
      {
        id: '3d-ao-2',
        type: 'image',
        src: '/images/portfolio/3D/AO_zps5641146b.png',
        title: 'Ambient Occlusion 2',
        description: 'Another 3D model with ambient occlusion rendering.',
        software: 'Blender, Cinema 4D',
        thumbnail: '/images/portfolio/3D/AO_zps5641146b.png'
      },
      {
        id: '3d-ausffg',
        type: 'image',
        src: '/images/portfolio/3D/AUSFFG_zps20054261.png',
        title: 'AUSFFG Model',
        description: '3D model of Australian FFG naval vessel.',
        software: 'Blender, KeyShot',
        thumbnail: '/images/portfolio/3D/AUSFFG_zps20054261.png'
      },
      {
        id: '3d-cpo',
        type: 'image',
        src: '/images/portfolio/3D/CPO.png',
        title: 'CPO 3D Model',
        description: '3D model of Chief Petty Officer insignia.',
        software: 'Blender, Cinema 4D',
        thumbnail: '/images/portfolio/3D/CPO.png'
      },
      {
        id: '3d-fxg-detailed',
        type: 'image',
        src: '/images/portfolio/3D/FXG_detailed2_zpsfa5d00d9.png',
        title: 'FXG Detailed Model',
        description: 'Highly detailed FXG 3D model with complex texturing.',
        software: 'Blender, Cinema 4D, KeyShot',
        thumbnail: '/images/portfolio/3D/FXG_detailed2_zpsfa5d00d9.png'
      },
      {
        id: '3d-jpeg',
        type: 'image',
        src: '/images/portfolio/3D/JPEG_1470188031168_942971192_zpsjlmew2al.png',
        title: '3D Render',
        description: 'Detailed 3D render with advanced lighting techniques.',
        software: 'Blender, Cinema 4D',
        thumbnail: '/images/portfolio/3D/JPEG_1470188031168_942971192_zpsjlmew2al.png'
      },
      {
        id: '3d-large-scale',
        type: 'image',
        src: '/images/portfolio/3D/large_scale_combatant.png (1).png',
        title: 'Large Scale Combatant',
        description: '3D model of large scale naval combatant vessel.',
        software: 'Blender, KeyShot',
        thumbnail: '/images/portfolio/3D/large_scale_combatant.png (1).png'
      },
      {
        id: '3d-piranah2',
        type: 'image',
        src: '/images/portfolio/3D/piranah2.png',
        title: 'Piranha 2 Model',
        description: '3D model of Piranha vessel with detailed texturing.',
        software: 'Blender, Cinema 4D',
        thumbnail: '/images/portfolio/3D/piranah2.png'
      },
      {
        id: '3d-piranha3',
        type: 'image',
        src: '/images/portfolio/3D/piranha3_.png',
        title: 'Piranha 3 Model',
        description: 'Updated 3D model of Piranha vessel with enhanced details.',
        software: 'Blender, Cinema 4D, KeyShot',
        thumbnail: '/images/portfolio/3D/piranha3_.png'
      },
      {
        id: '3d-tri-lcs',
        type: 'image',
        src: '/images/portfolio/3D/tri_LCS_zpstg5lborw.png',
        title: 'Tri LCS Model',
        description: '3D model of Littoral Combat Ship with tri-hull design.',
        software: 'Blender, KeyShot',
        thumbnail: '/images/portfolio/3D/tri_LCS_zpstg5lborw.png'
      }
    ]
  },
  {
    id: 'print-design',
    name: 'Print Design',
    slides: [
      {
        id: 'print-2022-07-24-1',
        type: 'image',
        src: '/images/portfolio/Print/2022-07-24 (1).png',
        title: 'Print Design 2022-1',
        description: 'Print design layout with modern styling and typography.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: '/images/portfolio/Print/2022-07-24 (1).png'
      },
      {
        id: 'print-2022-07-24',
        type: 'image',
        src: '/images/portfolio/Print/2022-07-24.png',
        title: 'Print Design 2022',
        description: 'Print design layout with clean composition.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: '/images/portfolio/Print/2022-07-24.png'
      },
      {
        id: 'print-coin-beauty',
        type: 'image',
        src: '/images/portfolio/Print/coin_beauty_composite.png',
        title: 'Coin Beauty Composite',
        description: 'Composite design for commemorative coin with detailed elements.',
        software: 'Adobe Photoshop, Illustrator',
        thumbnail: '/images/portfolio/Print/coin_beauty_composite.png'
      },
      {
        id: 'print-cpr-11-holiday',
        type: 'image',
        src: '/images/portfolio/Print/CPR_11_Holiday_Flier.png',
        title: 'CPR 11 Holiday Flier',
        description: 'Holiday flier design for CPR 11 with festive elements.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: '/images/portfolio/Print/CPR_11_Holiday_Flier.png'
      },
      {
        id: 'print-fb-img',
        type: 'image',
        src: '/images/portfolio/Print/FB_IMG_1487183123161_zps5wm5zplm.jpg',
        title: 'Facebook Image Design',
        description: 'Social media image design with professional layout.',
        software: 'Adobe Photoshop',
        thumbnail: '/images/portfolio/Print/FB_IMG_1487183123161_zps5wm5zplm.jpg'
      },
      {
        id: 'print-front-2013',
        type: 'image',
        src: '/images/portfolio/Print/front_2013.png',
        title: 'Front Design 2013',
        description: 'Front cover design from 2013 with modern styling.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: '/images/portfolio/Print/front_2013.png'
      },
      {
        id: 'print-front-back',
        type: 'image',
        src: '/images/portfolio/Print/front_back.png',
        title: 'Front and Back Design',
        description: 'Complete front and back design layout for print materials.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: '/images/portfolio/Print/front_back.png'
      },
      {
        id: 'print-fti-01',
        type: 'image',
        src: '/images/portfolio/Print/FTI_01_A (2).png',
        title: 'FTI Design',
        description: 'FTI design layout with professional styling.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: '/images/portfolio/Print/FTI_01_A (2).png'
      },
      {
        id: 'print-halloween',
        type: 'image',
        src: '/images/portfolio/Print/halloween.png',
        title: 'Halloween Design',
        description: 'Halloween themed print design with festive elements.',
        software: 'Adobe Photoshop, Illustrator',
        thumbnail: '/images/portfolio/Print/halloween.png'
      },
      {
        id: 'print-logo-all',
        type: 'image',
        src: '/images/portfolio/Print/logo2_all_large.png',
        title: 'Logo Collection',
        description: 'Collection of logo designs with various styles.',
        software: 'Adobe Illustrator',
        thumbnail: '/images/portfolio/Print/logo2_all_large.png'
      },
      {
        id: 'print-tungsten-rain',
        type: 'image',
        src: '/images/portfolio/Print/tungsten_rain_zpsha1nze7g.png',
        title: 'Tungsten Rain',
        description: 'Tungsten Rain print design with atmospheric elements.',
        software: 'Adobe Photoshop, Illustrator',
        thumbnail: '/images/portfolio/Print/tungsten_rain_zpsha1nze7g.png'
      }
    ]
  },
  {
    id: 'web-design',
    name: 'Web Design',
    slides: [
      {
        id: 'web-ic-launcher',
        type: 'image',
        src: '/images/portfolio/Web/ic_launcher.png',
        title: 'App Icon Launcher',
        description: 'Mobile app launcher icon design with modern styling.',
        software: 'Figma, Adobe Illustrator',
        thumbnail: '/images/portfolio/Web/ic_launcher.png'
      },
      {
        id: 'web-launcher-icon',
        type: 'image',
        src: '/images/portfolio/Web/launcher_icon4_sm.png',
        title: 'Launcher Icon Small',
        description: 'Small launcher icon design for web applications.',
        software: 'Figma, Adobe Illustrator',
        thumbnail: '/images/portfolio/Web/launcher_icon4_sm.png'
      }
    ]
  },
  {
    id: 'ai',
    name: 'AI & Digital Art',
    slides: [
      {
        id: 'ai-freepik-comic',
        type: 'image',
        src: '/images/portfolio/AI/freepik__comic-art-graphic-novel-art-comic-illustration-hig__62087.png',
        title: 'Comic Art Illustration',
        description: 'AI-generated comic art illustration with graphic novel styling.',
        software: 'Midjourney, Photoshop, Stable Diffusion',
        thumbnail: '/images/portfolio/AI/freepik__comic-art-graphic-novel-art-comic-illustration-hig__62087.png'
      },
      {
        id: 'ai-portrait',
        type: 'image',
        src: '/images/portfolio/AI/portrait-of-zoeroberts.png',
        title: 'AI Portrait',
        description: 'AI-generated portrait with photorealistic styling.',
        software: 'Midjourney, Photoshop, Stable Diffusion',
        thumbnail: '/images/portfolio/AI/portrait-of-zoeroberts.png'
      }
    ]
  }
];
