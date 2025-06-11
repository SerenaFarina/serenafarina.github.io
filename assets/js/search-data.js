// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Knowledge only real when shared. A selection of my  favourite research publications as journal papers or conference proceedings.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-work-on-mcp-detectors-for-uv-astronomy-will-be-presented-at-spie-optics-optoelectronics-2025-in-prague-check-it-out-here",
          title: 'Our work on MCP detectors for UV astronomy will be presented at SPIE...',
          description: "",
          section: "News",},{id: "news-cv-and-publications-pages-are-now-available-on-the-website",
          title: 'CV and Publications pages are now available on the website!',
          description: "",
          section: "News",},{id: "news-at-spie-optics-photonics-2025-in-san-diego-i-will-be-talking-about-low-jitter-systems-for-photon-timing-from-my-ph-d-research-and-about-uv-detector-anomalies-for-metis-instrument-from-my-postdoc-research-stay-tuned",
          title: 'At SPIE Optics+Photonics 2025 in San Diego I will be talking about low-jitter...',
          description: "",
          section: "News",},{id: "news-new-article-out-our-work-on-pile-up-free-fluorescence-lifetime-imaging-with-a-spad-based-single-pixel-camera-is-now-available-on-optics-express-a-big-thank-to-all-collaborators",
          title: 'New article out! Our work on Pile-up free fluorescence lifetime imaging with a...',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-engage-students-in-an-electronic-lab-in-the-educating-future-citizen-school-at-iuss-find-the-program-here",
          title: 'I’m happy to engage students in an Electronic lab in the Educating Future...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%65%72%65%6E%61.%66%61%72%69%6E%61@%69%6E%61%66.%69%74", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/serena-farina", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=sfIhZ7gAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
