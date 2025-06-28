
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Design Arsenal",
      icon: "🎯",
      skills: [
        { name: "Adobe Creative Suite", level: 95 },
        { name: "Figma & Sketch", level: 90 },
        { name: "3D Modeling", level: 85 },
        { name: "Typography", level: 92 }
      ]
    },
    {
      title: "Technical Operations",
      icon: "⚙️",
      skills: [
        { name: "UI/UX Design", level: 88 },
        { name: "Web Development", level: 80 },
        { name: "Motion Graphics", level: 85 },
        { name: "Print Production", level: 90 }
      ]
    },
    {
      title: "Strategic Command",
      icon: "🎖️",
      skills: [
        { name: "Project Management", level: 92 },
        { name: "Creative Direction", level: 88 },
        { name: "Brand Strategy", level: 85 },
        { name: "Team Leadership", level: 90 }
      ]
    }
  ];

  const certifications = [
    "Adobe Certified Expert",
    "Military Graphics Specialist",
    "UI/UX Professional Certificate",
    "Project Management Professional"
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-b from-tactical-dark to-background relative"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 
            id="skills-heading"
            className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-4 tracking-wider"
          >
            Combat Readiness
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Tactical proficiencies and operational capabilities for mission success
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-3" aria-hidden="true">{category.icon}</div>
                <h3 className="text-xl font-orbitron font-bold text-foreground tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-rajdhani font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-orbitron text-primary font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                          aria-label={`${skill.name} proficiency: ${skill.level}%`}
                        ></div>
                      </div>
                      
                      {/* Tactical markers on progress bar */}
                      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-px h-3 bg-background/50"
                            aria-hidden="true"
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-8 animate-fade-in">
          <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6 text-center tracking-wide">
            Tactical Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={cert}
                className="flex items-center space-x-3 p-4 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-tactical-pulse" aria-hidden="true"></div>
                <span className="font-rajdhani font-medium text-foreground">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Software Proficiency Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-orbitron font-bold text-foreground mb-8 tracking-wide">
            Software Arsenal
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Photoshop", "Illustrator", "InDesign", "After Effects",
              "Figma", "Adobe XD", "Cinema 4D", "Blender"
            ].map((software, index) => (
              <div 
                key={software}
                className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-lg flex items-center justify-center hover:border-primary/60 transition-colors duration-300 group"
                style={{ animationDelay: `${index * 0.05}s` }}
                title={software}
              >
                <span className="text-xs font-orbitron font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  {software.substring(0, 2).toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 military-grid opacity-5" aria-hidden="true"></div>
    </section>
  );
};

export default SkillsSection;
