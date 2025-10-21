/**
 * Reveal.js Configuration for Mekong Technology Presentation
 */

// Initialize Reveal.js
function initReveal() {
  Reveal.initialize({
    // Display
    width: 1920,
    height: 1080,
    margin: 0.04,
    minScale: 0.2,
    maxScale: 2.0,

    // Controls & Navigation
    controls: true,
    controlsLayout: 'bottom-right',
    controlsBackArrows: 'faded',
    progress: true,
    slideNumber: 'c/t',
    showSlideNumber: 'all',
    hash: true,
    history: true,
    keyboard: true,
    overview: true,
    center: false,
    touch: true,
    loop: false,
    rtl: false,
    fragments: true,
    fragmentInURL: true,
    embedded: false,
    help: true,
    pause: true,
    showNotes: false,
    autoPlayMedia: null,
    preloadIframes: null,
    autoAnimate: true,
    autoAnimateMatcher: null,
    autoAnimateEasing: 'ease',
    autoAnimateDuration: 1.0,
    autoAnimateUnmatched: true,

    // Parallax Background
    parallaxBackgroundImage: '',
    parallaxBackgroundSize: '',
    parallaxBackgroundHorizontal: null,
    parallaxBackgroundVertical: null,

    // Transition
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    transitionSpeed: 'default', // default/fast/slow
    backgroundTransition: 'fade',

    // Navigation Mode
    navigationMode: 'default',

    // Plugins
    plugins: [
      RevealMarkdown,
      RevealHighlight,
      RevealNotes,
      RevealSearch,
      RevealZoom,
      RevealMath
    ],

    // Dependencies
    dependencies: [
      {
        src: 'https://cdn.jsdelivr.net/npm/reveal.js-menu@2.1.0/menu.js',
        async: true
      }
    ],

    // Menu configuration (for menu plugin)
    menu: {
      side: 'left',
      width: 'normal',
      numbers: false,
      titleSelector: 'h1, h2, h3, h4, h5, h6',
      useTextContentForMissingTitles: false,
      hideMissingTitles: false,
      markers: true,
      custom: false,
      themes: false,
      themesPath: 'dist/theme/',
      transitions: false,
      openButton: true,
      openSlideNumber: false,
      keyboard: true,
      sticky: false,
      autoOpen: true,
      delayInit: false,
      openOnInit: false,
      loadIcons: true
    },

    // Keyboard shortcuts
    keyboard: {
      13: 'next', // go to the next slide when the ENTER key is pressed
      27: function() {
        Reveal.toggleOverview();
      }, // ESC for overview
      83: function() {
        window.open(window.location.href + '?print-pdf', '_blank');
      } // S for speaker notes / PDF
    }
  });

  // Add custom event listeners
  Reveal.on('ready', event => {
    console.log('Mekong Technology Presentation Ready');
    
    // Initialize Mermaid if available - DISABLED
    // if (typeof mermaid !== 'undefined') {
    //   mermaid.initialize({
    //     startOnLoad: true,
    //     theme: 'dark',
    //     themeVariables: {
    //       primaryColor: '#2a5298',
    //       primaryTextColor: '#fff',
    //       primaryBorderColor: '#FFD700',
    //       lineColor: '#64FFDA',
    //       secondaryColor: '#1e3c72',
    //       tertiaryColor: '#FFD700',
    //       background: '#1e3c72',
    //       mainBkg: '#2a5298',
    //       secondBkg: '#1e3c72',
    //       textColor: '#ffffff',
    //       fontSize: '16px'
    //     }
    //   });
    // }
  });

  // Reveal.on('slidechanged', event => {
  //   // Re-render Mermaid diagrams on slide change - DISABLED
  //   if (typeof mermaid !== 'undefined') {
  //     const currentSlide = event.currentSlide;
  //     const mermaidElements = currentSlide.querySelectorAll('.mermaid');
  //     if (mermaidElements.length > 0) {
  //       mermaid.init(undefined, mermaidElements);
  //     }
  //   }
  // });
}

// Helper functions for charts
function createBarChart(canvasId, labels, data, title) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: title,
        data: data,
        backgroundColor: 'rgba(100, 255, 218, 0.6)',
        borderColor: 'rgba(100, 255, 218, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: '#ffffff'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        x: {
          ticks: {
            color: '#ffffff'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#ffffff'
          }
        }
      }
    }
  });
}

function createLineChart(canvasId, labels, datasets, title) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: '#ffffff'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        x: {
          ticks: {
            color: '#ffffff'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#ffffff'
          }
        }
      }
    }
  });
}

function createPieChart(canvasId, labels, data, title) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: title,
        data: data,
        backgroundColor: [
          'rgba(255, 215, 0, 0.8)',
          'rgba(100, 255, 218, 0.8)',
          'rgba(130, 177, 255, 0.8)',
          'rgba(165, 214, 167, 0.8)',
          'rgba(255, 152, 0, 0.8)'
        ],
        borderColor: [
          'rgba(255, 215, 0, 1)',
          'rgba(100, 255, 218, 1)',
          'rgba(130, 177, 255, 1)',
          'rgba(165, 214, 167, 1)',
          'rgba(255, 152, 0, 1)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#ffffff',
            padding: 15,
            font: {
              size: 14
            }
          }
        }
      }
    }
  });
}

// Export functions
window.createBarChart = createBarChart;
window.createLineChart = createLineChart;
window.createPieChart = createPieChart;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  // DOM already loaded
  initReveal();
}
