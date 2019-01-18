// Welcome to my portfolio. 
// Inspecting element 🕵️‍ ? What a detective! 

// If you are trying to find out how I do things
// you can just email me @ ✅ git.fdiaz@gmail.com 

// 🔥 hit me up with your idea/project. I try 
// to say yes to everything....


var $ = function (selector) {
    return document.querySelectorAll(selector);
  };
  
  var tabs = [
    '.tabbed-section__selector-tab-1',
    '.tabbed-section__selector-tab-2',
    '.tabbed-section__selector-tab-3',
    '.tabbed-section__selector-tab-4'
  ];
  
  var toggleTab = function(element) {
    var parent = element.parentNode;
    
    $(element)[0].addEventListener('click', function(){
      this.parentNode.childNodes[1].classList.remove('active');
      this.parentNode.childNodes[3].classList.remove('active');
      this.parentNode.childNodes[5].classList.remove('active');
      this.parentNode.childNodes[7].classList.remove('active');

  
      this.classList.add('active');
      
      if(this.classList.contains('tabbed-section__selector-tab-1')) {
        $('.tabbed-section-1')[0].classList.remove('hidden');
        $('.tabbed-section-1')[0].classList.add('visible');
    
        $('.tabbed-section-2')[0].classList.remove('visible');
        $('.tabbed-section-2')[0].classList.add('hidden');

         $('.tabbed-section-3')[0].classList.remove('visible');
        $('.tabbed-section-3')[0].classList.add('hidden');

        $('.tabbed-section-4')[0].classList.remove('visible');
        $('.tabbed-section-4')[0].classList.add('hidden');
      }
  
      if(this.classList.contains('tabbed-section__selector-tab-2')) {
        $('.tabbed-section-2')[0].classList.remove('hidden');
        $('.tabbed-section-2')[0].classList.add('visible');
        $('.tabbed-section-1')[0].classList.remove('visible');
        $('.tabbed-section-1')[0].classList.add('hidden');
        $('.tabbed-section-3')[0].classList.remove('visible');
        $('.tabbed-section-3')[0].classList.add('hidden');

        $('.tabbed-section-4')[0].classList.remove('visible');
        $('.tabbed-section-4')[0].classList.add('hidden');
      }
      
      if(this.classList.contains('tabbed-section__selector-tab-3')) {
        $('.tabbed-section-3')[0].classList.remove('hidden');
        $('.tabbed-section-3')[0].classList.add('visible');

        $('.tabbed-section-1')[0].classList.remove('visible');
        $('.tabbed-section-1')[0].classList.add('hidden');
        $('.tabbed-section-2')[0].classList.remove('visible');
        $('.tabbed-section-2')[0].classList.add('hidden');

        $('.tabbed-section-4')[0].classList.remove('visible');
        $('.tabbed-section-4')[0].classList.add('hidden');
      }

      if(this.classList.contains('tabbed-section__selector-tab-4')) {
        $('.tabbed-section-4')[0].classList.remove('hidden');
        $('.tabbed-section-4')[0].classList.add('visible');

        $('.tabbed-section-1')[0].classList.remove('visible');
        $('.tabbed-section-1')[0].classList.add('hidden');
        $('.tabbed-section-2')[0].classList.remove('visible');
        $('.tabbed-section-2')[0].classList.add('hidden');

        $('.tabbed-section-3')[0].classList.remove('visible');
        $('.tabbed-section-3')[0].classList.add('hidden');
      }

    });
  };
  
  for (var i = tabs.length - 1; i >= 0; i--) {
    toggleTab(tabs[i])
  };

  var typed = new Typed("#typed", {
    strings: ["^200In Es6 (js) ^3000", "^1000 Some NodeJS modules.^3000", "^1000 React ❤️ ^3000", "^1000 Languages that I Dont know  ^1000 .^500.^500.^500 ^200y^200e^200t^200! ^500😄 ^3000"],
    typeSpeed: 100,
    smartBackspace: true,
    loop: true
  });

  