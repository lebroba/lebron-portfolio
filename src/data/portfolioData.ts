// Helper function to prepend base URL to paths
const getAssetPath = (path: string): string => {
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
};

export interface SlideData {
    id: string;
    type: 'image' | 'video' | 'youtube' | 'vimeo' | 'model';
    src: string;
    title: string;
    description: string;
    software: string;
    thumbnail?: string;
    format?: 'gltf' | 'fbx' | 'obj';
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
        src: getAssetPath('placeholder-image.svg'),
        title: 'Military Command Interface',
        description: 'Tactical command interface designed for mission-critical operations with real-time data visualization.',
        software: 'Adobe XD, Figma, After Effects',
        thumbnail: getAssetPath('placeholder-image.svg')
      },
      {
        id: 'ui-2',
        type: 'image',
        src: getAssetPath('placeholder-image.svg'),
        title: 'Dashboard UI Demo',
        description: 'Interactive demonstration of military dashboard interface with real-time monitoring capabilities.',
        software: 'Figma, Principle, After Effects',
        thumbnail: getAssetPath('placeholder-image.svg')
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
        src: getAssetPath('images/portfolio/Military/Anchor_bp_sc_small.png'),
        title: 'Anchor Blueprint',
        description: 'Military anchor insignia design with blueprint styling.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Military/Anchor_bp_sc_small.png')
      },
      {
        id: 'military-back',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/back_2013c.png'),
        title: 'Back Design 2013',
        description: 'Military insignia back design with detailed embellishments.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Military/back_2013c.png')
      },
      {
        id: 'military-capstone',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/capstone.png'),
        title: 'Capstone Design',
        description: 'Capstone military insignia with official styling.',
        software: 'Adobe Illustrator',
        thumbnail: getAssetPath('images/portfolio/Military/capstone.png')
      },
      {
        id: 'military-cgbl-rc-3',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/CGBL_RC_3_zps56866326.png'),
        title: 'CGBL RC 3',
        description: 'Coast Guard insignia design with official styling.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: getAssetPath('images/portfolio/3D/CGBL_RC_3_zps56866326.png')
      },
      {
        id: 'military-cgbl-rc-7',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/CGBL_RC_7_zps5a59e045.png'),
        title: 'CGBL RC 7',
        description: 'Coast Guard insignia variation with detailed elements.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: getAssetPath('images/portfolio/3D/CGBL_RC_7_zps5a59e045.png')
      },
      {
        id: 'military-classroom',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/classroom2.png'),
        title: 'Classroom Design',
        description: 'Military classroom insignia design for educational units.',
        software: 'Adobe Illustrator',
        thumbnail: getAssetPath('images/portfolio/Military/classroom2.png')
      },
      {
        id: 'military-cpr-11-crest',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/CPR_11_Crest.png'),
        title: 'CPR 11 Crest',
        description: 'Official CPR 11 crest design with military styling.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Military/CPR_11_Crest.png')
      },
      {
        id: 'military-cpr11-fb',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/CPR11_FB_thumbnail.png'),
        title: 'CPR11 FB Thumbnail',
        description: 'Social media thumbnail for CPR11 military unit.',
        software: 'Adobe Photoshop',
        thumbnail: getAssetPath('images/portfolio/Military/CPR11_FB_thumbnail.png')
      },
      {
        id: 'military-cscs-draft',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/CSCS_draft_001.png'),
        title: 'CSCS Draft Design',
        description: 'Draft design for CSCS military insignia.',
        software: 'Adobe Illustrator',
        thumbnail: getAssetPath('images/portfolio/Military/CSCS_draft_001.png')
      },
      {
        id: 'military-hi-res',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/Hi_RES1.jpg'),
        title: 'High Resolution Design',
        description: 'High resolution military insignia for official use.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Military/Hi_RES1.jpg')
      },
      {
        id: 'military-mahan-warrior',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/mahan_warrior.png'),
        title: 'Mahan Warrior',
        description: 'Mahan Warrior military insignia with detailed elements.',
        software: 'Adobe Illustrator',
        thumbnail: getAssetPath('images/portfolio/Military/mahan_warrior.png')
      },
      {
        id: 'military-maria-boot',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/maria_boot_heel_t.png'),
        title: 'Maria Boot Heel',
        description: 'Maria Boot Heel military design element.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Military/maria_boot_heel_t.png')
      },
      {
        id: 'military-mcpo',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/MCPO.png'),
        title: 'MCPO Insignia',
        description: 'Master Chief Petty Officer insignia design.',
        software: 'Adobe Illustrator',
        thumbnail: getAssetPath('images/portfolio/3D/MCPO.png')
      },
      {
        id: 'military-safety-poster',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/safety_poster.png'),
        title: 'Safety Poster',
        description: 'Military safety poster design with instructional elements.',
        software: 'Adobe Illustrator, InDesign',
        thumbnail: getAssetPath('images/portfolio/Military/safety_poster.png')
      },
      {
        id: 'military-scpo',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/SCPO.png'),
        title: 'SCPO Insignia',
        description: 'Senior Chief Petty Officer insignia design.',
        software: 'Adobe Illustrator',
        thumbnail: getAssetPath('images/portfolio/3D/SCPO.png')
      },
      {
        id: 'military-fb-1',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/148731613_10157609881856361_7885770432082546542_n.jpg'),
        title: 'Military Social Media Post 1',
        description: 'Military-themed social media content design.',
        software: 'Adobe Photoshop',
        thumbnail: getAssetPath('images/portfolio/Military/148731613_10157609881856361_7885770432082546542_n.jpg')
      },
      {
        id: 'military-fb-2',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/471752678_10160464203271361_3781393327001349550_n.jpg'),
        title: 'Military Social Media Post 2',
        description: 'Military-themed social media content design.',
        software: 'Adobe Photoshop',
        thumbnail: getAssetPath('images/portfolio/Military/471752678_10160464203271361_3781393327001349550_n.jpg')
      },
      {
        id: 'military-fb-3',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/491463639_18498999940003477_1804989250546500869_n.jpg'),
        title: 'Military Social Media Post 3',
        description: 'Military-themed social media content design.',
        software: 'Adobe Photoshop',
        thumbnail: getAssetPath('images/portfolio/Military/491463639_18498999940003477_1804989250546500869_n.jpg')
      },
      {
        id: 'military-fb-4',
        type: 'image',
        src: getAssetPath('images/portfolio/Military/504293820_10160939022291361_7937091232991324863_n.jpg'),
        title: 'Military Social Media Post 4',
        description: 'Military-themed social media content design.',
        software: 'Adobe Photoshop',
        thumbnail: getAssetPath('images/portfolio/Military/504293820_10160939022291361_7937091232991324863_n.jpg')
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
        src: getAssetPath('images/portfolio/3D/alpha_zps78db5836.png'),
        title: 'Alpha Model',
        description: '3D rendered alpha model with detailed texturing.',
        software: 'Blender, Cinema 4D',
        thumbnail: getAssetPath('images/portfolio/3D/alpha_zps78db5836.png')
      },
      {
        id: '3d-ao-1',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/AO_zps0d4e89d2.png'),
        title: 'Ambient Occlusion 1',
        description: '3D model with ambient occlusion rendering technique.',
        software: 'Blender, Cinema 4D',
        thumbnail: getAssetPath('images/portfolio/3D/AO_zps0d4e89d2.png')
      },
      {
        id: '3d-ao-2',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/AO_zps5641146b.png'),
        title: 'Ambient Occlusion 2',
        description: 'Another 3D model with ambient occlusion rendering.',
        software: 'Blender, Cinema 4D',
        thumbnail: getAssetPath('images/portfolio/3D/AO_zps5641146b.png')
      },
      {
        id: '3d-ausffg',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/AUSFFG_zps20054261.png'),
        title: 'AUSFFG Model',
        description: '3D model of Australian FFG naval vessel.',
        software: 'Blender, KeyShot',
        thumbnail: getAssetPath('images/portfolio/3D/AUSFFG_zps20054261.png')
      },
      {
        id: '3d-cpo',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/CPO.png'),
        title: 'CPO 3D Model',
        description: '3D model of Chief Petty Officer insignia.',
        software: 'Blender, Cinema 4D',
        thumbnail: getAssetPath('images/portfolio/3D/CPO.png')
      },
      {
        id: '3d-fxg-detailed',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/FXG_detailed2_zpsfa5d00d9.png'),
        title: 'FXG Detailed Model',
        description: 'Highly detailed FXG 3D model with complex texturing.',
        software: 'Blender, Cinema 4D, KeyShot',
        thumbnail: getAssetPath('images/portfolio/3D/FXG_detailed2_zpsfa5d00d9.png')
      },
      {
        id: '3d-jpeg',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/JPEG_1470188031168_942971192_zpsjlmew2al.png'),
        title: '3D Render',
        description: 'Detailed 3D render with advanced lighting techniques.',
        software: 'Blender, Cinema 4D',
        thumbnail: getAssetPath('images/portfolio/3D/JPEG_1470188031168_942971192_zpsjlmew2al.png')
      },
      {
        id: '3d-large-scale',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/large_scale_combatant.png (1).png'),
        title: 'Large Scale Combatant',
        description: '3D model of large scale naval combatant vessel.',
        software: 'Blender, KeyShot',
        thumbnail: getAssetPath('images/portfolio/3D/large_scale_combatant.png (1).png')
      },
      {
        id: '3d-piranah2',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/piranah2.png'),
        title: 'Piranha 2 Model',
        description: '3D model of Piranha vessel with detailed texturing.',
        software: 'Blender, Cinema 4D',
        thumbnail: getAssetPath('images/portfolio/3D/piranah2.png')
      },
      {
        id: '3d-piranha3',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/piranha3_.png'),
        title: 'Piranha 3 Model',
        description: 'Updated 3D model of Piranha vessel with enhanced details.',
        software: 'Blender, Cinema 4D, KeyShot',
        thumbnail: getAssetPath('images/portfolio/3D/piranha3_.png')
      },
      {
        id: '3d-tri-lcs',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/tri_LCS_zpstg5lborw.png'),
        title: 'Tri LCS Model',
        description: '3D model of Littoral Combat Ship with tri-hull design.',
        software: 'Blender, KeyShot',
        thumbnail: getAssetPath('images/portfolio/3D/tri_LCS_zpstg5lborw.png')
      },
      {
        id: '3d-chatgpt-aug',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/ChatGPT Image Aug 11, 2025, 12_00_17 PM.png'),
        title: 'AI-Enhanced 3D Concept',
        description: 'AI-generated 3D design concept created with ChatGPT.',
        software: 'ChatGPT, Blender',
        thumbnail: getAssetPath('images/portfolio/3D/ChatGPT Image Aug 11, 2025, 12_00_17 PM.png')
      },
      {
        id: '3d-micah-meerkat',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/micah_meerkat.png'),
        title: 'Micah Meerkat Character',
        description: '3D character model of Micah the Meerkat with detailed texturing.',
        software: 'Blender, Substance Painter',
        thumbnail: getAssetPath('images/portfolio/3D/micah_meerkat.png')
      },
      {
        id: '3d-facebook-photo',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/421245559_10159509971681361_6915820595021571663_n.jpg'),
        title: '3D Modeling Work',
        description: '3D modeling project showcasing technical skills.',
        software: 'Blender, Cinema 4D',
        thumbnail: getAssetPath('images/portfolio/3D/421245559_10159509971681361_6915820595021571663_n.jpg')
      },
      {
        id: '3d-ship-coin',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/CPO.png'),
        title: 'Ship Coin Design',
        description: '3D coin design featuring naval vessel with detailed modeling and texturing.',
        software: 'Blender, Cinema 4D',
        thumbnail: getAssetPath('images/portfolio/3D/CPO.png')
      },
      {
        id: '3d-thailly-model',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/micah_meerkat.png'),
        title: 'Thailly Character Model',
        description: '3D character model with detailed rigging and texturing for animation.',
        software: 'Blender, Mixamo',
        thumbnail: getAssetPath('images/portfolio/3D/micah_meerkat.png')
      },
      {
        id: '3d-complex-model',
        type: 'image',
        src: getAssetPath('images/portfolio/3D/FXG_detailed2_zpsfa5d00d9.png'),
        title: 'Complex 3D Assembly',
        description: 'Detailed 3D model with multiple components and advanced texturing.',
        software: 'Blender, Cinema 4D',
        thumbnail: getAssetPath('images/portfolio/3D/FXG_detailed2_zpsfa5d00d9.png')
      },
      {
        id: '3d-ship-coin-interactive',
        type: 'model',
        src: `${import.meta.env.BASE_URL}models/ship_coin_face.fbx`,
        title: 'Interactive Ship Coin 3D Model',
        description: 'Interactive 3D model of a ship coin design featuring detailed naval vessel with full 360-degree viewing capabilities.',
        software: 'Blender, Cinema 4D, FBX',
        format: 'fbx',
        thumbnail: getAssetPath('images/portfolio/3D/CPO.png')
      },
      {
        id: '3d-naval-vessel-interactive',
        type: 'model',
        src: `${import.meta.env.BASE_URL}models/5d4cff366de611dadd0dbdfdf34ddc92.fbx`,
        title: 'Interactive Naval Vessel 3D Model',
        description: 'Detailed 3D model of a naval vessel with interactive controls allowing users to explore the ship from all angles.',
        software: 'Blender, Cinema 4D, FBX',
        format: 'fbx',
        thumbnail: getAssetPath('images/portfolio/3D/large_scale_combatant.png (1).png')
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
        src: getAssetPath('images/portfolio/Print/2022-07-24 (1).png'),
        title: 'Print Design 2022-1',
        description: 'Print design layout with modern styling and typography.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/2022-07-24 (1).png')
      },
      {
        id: 'print-2022-07-24',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/2022-07-24.png'),
        title: 'Print Design 2022',
        description: 'Print design layout with clean composition.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/2022-07-24.png')
      },
      {
        id: 'print-coin-beauty',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/coin_beauty_composite.png'),
        title: 'Coin Beauty Composite',
        description: 'Composite design for commemorative coin with detailed elements.',
        software: 'Adobe Photoshop, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/coin_beauty_composite.png')
      },
      {
        id: 'print-cpr-11-holiday',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/CPR_11_Holiday_Flier.png'),
        title: 'CPR 11 Holiday Flier',
        description: 'Holiday flier design for CPR 11 with festive elements.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/CPR_11_Holiday_Flier.png')
      },
      {
        id: 'print-fb-img',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/FB_IMG_1487183123161_zps5wm5zplm.jpg'),
        title: 'Facebook Image Design',
        description: 'Social media image design with professional layout.',
        software: 'Adobe Photoshop',
        thumbnail: getAssetPath('images/portfolio/Print/FB_IMG_1487183123161_zps5wm5zplm.jpg')
      },
      {
        id: 'print-front-2013',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/front_2013.png'),
        title: 'Front Design 2013',
        description: 'Front cover design from 2013 with modern styling.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/front_2013.png')
      },
      {
        id: 'print-front-back',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/front_back.png'),
        title: 'Front and Back Design',
        description: 'Complete front and back design layout for print materials.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/front_back.png')
      },
      {
        id: 'print-fti-01',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/FTI_01_A (2).png'),
        title: 'FTI Design',
        description: 'FTI design layout with professional styling.',
        software: 'Adobe InDesign, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/FTI_01_A (2).png')
      },
      {
        id: 'print-halloween',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/halloween.png'),
        title: 'Halloween Design',
        description: 'Halloween themed print design with festive elements.',
        software: 'Adobe Photoshop, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/halloween.png')
      },
      {
        id: 'print-logo-all',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/logo2_all_large.png'),
        title: 'Logo Collection',
        description: 'Collection of logo designs with various styles.',
        software: 'Adobe Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/logo2_all_large.png')
      },
      {
        id: 'print-tungsten-rain',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/tungsten_rain_zpsha1nze7g.png'),
        title: 'Tungsten Rain',
        description: 'Tungsten Rain print design with atmospheric elements.',
        software: 'Adobe Photoshop, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/tungsten_rain_zpsha1nze7g.png')
      },
      {
        id: 'print-aaw-poster',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/AAW_Poster.png'),
        title: 'American Arm Wrestling Poster',
        description: 'Promotional poster design for American Arm Wrestling events.',
        software: 'Adobe Photoshop, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/AAW_Poster.png')
      },
      {
        id: 'print-seal-approval',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/Seal of approval.png'),
        title: 'Seal of Approval',
        description: 'Official seal of approval design for branding and certification.',
        software: 'Adobe Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/Seal of approval.png')
      },
      {
        id: 'print-bike-shorts-girl',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/bike-shorts-mockup-of-a-happy-girl-wearing-a-t-shirt-against-a-colored-backdrop-42367 (1).png'),
        title: 'T-Shirt Design - Girl Mockup',
        description: 'T-shirt design mockup featuring active lifestyle apparel.',
        software: 'Adobe Photoshop, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/bike-shorts-mockup-of-a-happy-girl-wearing-a-t-shirt-against-a-colored-backdrop-42367 (1).png')
      },
      {
        id: 'print-boy-park-ducks',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/boy-wearing-a-t-shirt-mockup-while-at-a-park-with-ducks-a17942 (1).png'),
        title: 'T-Shirt Design - Boy at Park',
        description: 'T-shirt design mockup featuring youth casual wear.',
        software: 'Adobe Photoshop, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/boy-wearing-a-t-shirt-mockup-while-at-a-park-with-ducks-a17942 (1).png')
      },
      {
        id: 'print-cool-penguin',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/cool_penguin.png'),
        title: 'Cool Penguin Character',
        description: 'Character design featuring a stylish penguin for print merchandise.',
        software: 'Adobe Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/cool_penguin.png')
      },
      {
        id: 'print-fanz-ad',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/fanz_advertisment_001.png'),
        title: 'Fanz Advertisement',
        description: 'Print advertisement design for Fanz platform marketing.',
        software: 'Adobe InDesign, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Print/fanz_advertisment_001.png')
      },
      {
        id: 'print-heathered-boy',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/heathered-long-sleeve-t-shirt-mockup-of-a-boy-playing-at-the-park-28114 (1).png'),
        title: 'Long Sleeve T-Shirt - Boy Playing',
        description: 'Long sleeve t-shirt mockup design for youth apparel line.',
        software: 'Adobe Photoshop',
        thumbnail: getAssetPath('images/portfolio/Print/heathered-long-sleeve-t-shirt-mockup-of-a-boy-playing-at-the-park-28114 (1).png')
      },
      {
        id: 'print-evoc-logo-1',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/lebroba_A_modern_sleek_and_dramatic_gaming_logo_for_EVOC_an_E_529d24f8-938d-4758-93fa-2bafa429c75b_3.png'),
        title: 'EVOC Gaming Logo Version 1',
        description: 'Modern gaming logo design for EVOC esports brand.',
        software: 'Adobe Illustrator, Midjourney',
        thumbnail: getAssetPath('images/portfolio/Print/lebroba_A_modern_sleek_and_dramatic_gaming_logo_for_EVOC_an_E_529d24f8-938d-4758-93fa-2bafa429c75b_3.png')
      },
      {
        id: 'print-evoc-logo-2',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/lebroba_A_modern_sleek_and_dramatic_gaming_logo_for_EVOC_an_E_c1e19f2b-a5b6-494d-9bf5-3e04d19c87ea_3.png'),
        title: 'EVOC Gaming Logo Version 2',
        description: 'Alternative gaming logo design for EVOC esports brand.',
        software: 'Adobe Illustrator, Midjourney',
        thumbnail: getAssetPath('images/portfolio/Print/lebroba_A_modern_sleek_and_dramatic_gaming_logo_for_EVOC_an_E_c1e19f2b-a5b6-494d-9bf5-3e04d19c87ea_3.png')
      },
      {
        id: 'print-tickled-pink',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/tickled_pink.png'),
        title: 'Tickled Pink Design',
        description: 'Whimsical character design for print merchandise.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Print/tickled_pink.png')
      },
      {
        id: 'print-toucan-game',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/toucan game.png'),
        title: 'Toucan Game Design',
        description: 'Game-themed toucan character design for print materials.',
        software: 'Adobe Illustrator',
        thumbnail: getAssetPath('images/portfolio/Print/toucan game.png')
      },
      {
        id: 'print-transparent-tee-runner',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/transparent-tee-mockup-of-a-man-running-7215a (1).png'),
        title: 'Performance T-Shirt - Runner',
        description: 'Athletic t-shirt design mockup for active wear collection.',
        software: 'Adobe Photoshop',
        thumbnail: getAssetPath('images/portfolio/Print/transparent-tee-mockup-of-a-man-running-7215a (1).png')
      },
      {
        id: 'print-child-popsicle',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/t-shirt-mockup-of-a-child-eating-a-popsicle-at-a-park-a20955 (2).png'),
        title: 'Kids T-Shirt - Summer Fun',
        description: 'Youth t-shirt design mockup for summer apparel line.',
        software: 'Adobe Photoshop',
        thumbnail: getAssetPath('images/portfolio/Print/t-shirt-mockup-of-a-child-eating-a-popsicle-at-a-park-a20955 (2).png')
      },
      {
        id: 'print-zoo-hair',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/zoo_hair_002.png'),
        title: 'Zoo Hair Design',
        description: 'Creative animal-themed hair salon branding design.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Print/zoo_hair_002.png')
      },
      {
        id: 'print-fb-photo',
        type: 'image',
        src: getAssetPath('images/portfolio/Print/471630804_10160480515146361_143017445260092885_n.jpg'),
        title: 'Print Design Showcase',
        description: 'Print design work featured on social media.',
        software: 'Adobe Photoshop, InDesign',
        thumbnail: getAssetPath('images/portfolio/Print/471630804_10160480515146361_143017445260092885_n.jpg')
      }
    ]
  },
  {
    id: 'web-design',
    name: 'Web Design',
    slides: [
      {
        id: 'web-american-arm-wrestling',
        type: 'image',
        src: getAssetPath('images/portfolio/Web/american_arm_wrestling.png'),
        title: 'American Arm Wrestling',
        description: 'Web design for American Arm Wrestling brand identity.',
        software: 'Figma, Adobe Illustrator',
        thumbnail: getAssetPath('images/portfolio/Web/american_arm_wrestling.png')
      },
      {
        id: 'web-fanz-promo-1',
        type: 'image',
        src: getAssetPath('images/portfolio/Web/fanz_promo_test_001.png'),
        title: 'Fanz Promotional Design 1',
        description: 'First promotional design test for Fanz platform.',
        software: 'Figma, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Web/fanz_promo_test_001.png')
      },
      {
        id: 'web-fanz-promo-2',
        type: 'image',
        src: getAssetPath('images/portfolio/Web/fanz_promo_test_002.png'),
        title: 'Fanz Promotional Design 2',
        description: 'Second promotional design test for Fanz platform.',
        software: 'Figma, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Web/fanz_promo_test_002.png')
      },
      {
        id: 'web-fanz-promo-3',
        type: 'image',
        src: getAssetPath('images/portfolio/Web/fanz_promo_test_003.png'),
        title: 'Fanz Promotional Design 3',
        description: 'Third promotional design test for Fanz platform.',
        software: 'Figma, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Web/fanz_promo_test_003.png')
      },
      {
        id: 'web-gemini-image',
        type: 'image',
        src: getAssetPath('images/portfolio/Web/Gemini_Generated_Image_t7j4dyt7j4dyt7j4 (1).png'),
        title: 'AI Generated Web Design',
        description: 'AI-assisted web design concept using Gemini.',
        software: 'Gemini AI, Figma',
        thumbnail: getAssetPath('images/portfolio/Web/Gemini_Generated_Image_t7j4dyt7j4dyt7j4 (1).png')
      },
      {
        id: 'web-gwt-logo',
        type: 'image',
        src: getAssetPath('images/portfolio/Web/gwt_logo_type.png'),
        title: 'GWT Logo Type',
        description: 'Logo type design for GWT brand.',
        software: 'Adobe Illustrator',
        thumbnail: getAssetPath('images/portfolio/Web/gwt_logo_type.png')
      },
      {
        id: 'web-z-ad-mockup',
        type: 'image',
        src: getAssetPath('images/portfolio/Web/Z_ad_mockup_002.png'),
        title: 'Z Advertisement Mockup',
        description: 'Advertisement mockup design for Z brand.',
        software: 'Photoshop, Illustrator',
        thumbnail: getAssetPath('images/portfolio/Web/Z_ad_mockup_002.png')
      },
      {
        id: 'web-z-logo-v4',
        type: 'image',
        src: getAssetPath('images/portfolio/Web/Z_Logo_V_004_mockup.png'),
        title: 'Z Logo Version 4',
        description: 'Fourth iteration of Z logo design with mockup presentation.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Web/Z_Logo_V_004_mockup.png')
      },
      {
        id: 'web-z-logo-v4a',
        type: 'image',
        src: getAssetPath('images/portfolio/Web/Z_Logo_V_004a_mockup.png'),
        title: 'Z Logo Version 4A',
        description: 'Alternative version of Z logo design with mockup presentation.',
        software: 'Adobe Illustrator, Photoshop',
        thumbnail: getAssetPath('images/portfolio/Web/Z_Logo_V_004a_mockup.png')
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
        src: getAssetPath('images/portfolio/AI/freepik__comic-art-graphic-novel-art-comic-illustration-hig__62087.png'),
        title: 'Comic Art Illustration',
        description: 'AI-generated comic art illustration with graphic novel styling.',
        software: 'Midjourney, Photoshop, Stable Diffusion',
        thumbnail: getAssetPath('images/portfolio/AI/freepik__comic-art-graphic-novel-art-comic-illustration-hig__62087.png')
      },
      {
        id: 'ai-portrait',
        type: 'image',
        src: getAssetPath('images/portfolio/AI/portrait-of-zoeroberts.png'),
        title: 'AI Portrait',
        description: 'AI-generated portrait with photorealistic styling.',
        software: 'Midjourney, Photoshop, Stable Diffusion',
        thumbnail: getAssetPath('images/portfolio/AI/portrait-of-zoeroberts.png')
      },
      {
        id: 'ai-arm-wrestling-3d',
        type: 'image',
        src: getAssetPath('images/portfolio/AI/american_arm_wrestling_3D (1).png'),
        title: 'American Arm Wrestling 3D',
        description: 'AI-generated 3D artwork for American Arm Wrestling branding.',
        software: 'Midjourney, Stable Diffusion',
        thumbnail: getAssetPath('images/portfolio/AI/american_arm_wrestling_3D (1).png')
      },
      {
        id: 'ai-gqt-002',
        type: 'image',
        src: getAssetPath('images/portfolio/AI/gqt_002.png'),
        title: 'GQT Character Design',
        description: 'AI-assisted character design with unique styling.',
        software: 'Midjourney, Photoshop',
        thumbnail: getAssetPath('images/portfolio/AI/gqt_002.png')
      },
      {
        id: 'ai-sucker-punch-tattoo',
        type: 'image',
        src: getAssetPath('images/portfolio/AI/lebroba_Girls_with_Tattoos_in_suckerpunch_style_type_letterin_4aca3291-ac44-41ed-a61b-84469a447370_2 - Copy (1).png'),
        title: 'Sucker Punch Style Tattoo Art',
        description: 'AI-generated artwork inspired by Sucker Punch film aesthetic with tattoo lettering.',
        software: 'Midjourney, Photoshop',
        thumbnail: getAssetPath('images/portfolio/AI/lebroba_Girls_with_Tattoos_in_suckerpunch_style_type_letterin_4aca3291-ac44-41ed-a61b-84469a447370_2 - Copy (1).png')
      },
      {
        id: 'ai-comic-page-001',
        type: 'image',
        src: getAssetPath('images/portfolio/AI/page_001.png'),
        title: 'Comic Page 1',
        description: 'AI-generated comic book page with sequential art storytelling.',
        software: 'Stable Diffusion, Photoshop',
        thumbnail: getAssetPath('images/portfolio/AI/page_001.png')
      },
      {
        id: 'ai-comic-page-002',
        type: 'image',
        src: getAssetPath('images/portfolio/AI/page_002.png'),
        title: 'Comic Page 2',
        description: 'AI-generated comic book page with dynamic panel layouts.',
        software: 'Stable Diffusion, Photoshop',
        thumbnail: getAssetPath('images/portfolio/AI/page_002.png')
      },
      {
        id: 'ai-comic-page-003',
        type: 'image',
        src: getAssetPath('images/portfolio/AI/page_003.png'),
        title: 'Comic Page 3',
        description: 'AI-generated comic book page with cinematic composition.',
        software: 'Stable Diffusion, Photoshop',
        thumbnail: getAssetPath('images/portfolio/AI/page_003.png')
      }
    ]
  }
];
