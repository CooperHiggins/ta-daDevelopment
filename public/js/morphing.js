var btn = document.getElementById('click-to-reveal');
    var btn2 = document.getElementById('click-to-hide');

    btn.onclick = function() {
      var morphing = anime({
      targets: '.polymorph',
        points: [
          { value: '215.1 102.93 0 102.93 0 0 31.98 0 77.72 62.74 215.1 102.93' },
          { value: '215.1 102.93 0 102.93 0 0 0 0 55.86 69.62 215.1 102.93' }
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        loop: false
      });

      anime({
        targets: '#pop-up',
        opacity: 1,
        duration: 8500,
        translateY: 50
      });

    

      var promise = morphing.finished.then(() => {

        btn2.onclick = function() {
          var morphing = anime({
          targets: '.polymorph',
            points: [
              { value: '215.1 102.93 0 102.93 0 0 31.98 0 77.72 62.74 215.1 102.93' },
              { value: '215.1 102.93 0 102.93 0 0 31.98 0 215.1 0 215.1 102.93' }
            ],
            easing: 'easeOutQuad',
            duration: 2000,
            loop: false
          });

          anime({
            targets: '#pop-up',
            opacity: 0,
            duration: 8500,
            translateY: 50
          })

        };
      })
    } 