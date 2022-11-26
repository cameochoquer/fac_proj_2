

    var photos = document.querySelectorAll('img');
    var images =[...photos]
   
    var btn = document.querySelectorAll('button');
    var buttons = [...btn]



    for (var i = 0; i < images.length; i++) {
      (function(index) {
           buttons[index].addEventListener("click", function() {
            let x = images[index];
            if (x.style.display === 'none') {
                 x.style.display = 'flex';
              } else {
              x.style.display = 'none';
              }
            })
      })(i);
   }
