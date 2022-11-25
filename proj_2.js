	// function toggle1() {
	//     var x = document.getElementById('proj1');
	//     if (x.style.display === 'none') {
	//       x.style.display = 'flex';
	//     } else {
	//       x.style.display = 'none';
	//     }
	//   };

    var photos = document.querySelectorAll('img');
    var images =[...photos]
   
    var btn = document.querySelectorAll('button');
    var buttons = [...btn]
    //console.log(photos)


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
  //   for(var photo = 0; photo < photos.length; photo++) {
    
  //     btn[0].addEventListener("click", function(e){ 
  //     for(var i=0;i<btn.length;i++{
  //       btn[i.addEventListener('click',)]
  //     });
  //     var x = document.getElementsByClassName('projImg');
  //     if (x.style.display === 'none') {
  //     x.style.display = 'flex';
  //   } else {
  //     x.style.display = 'none';
  //   };
  // });
  //   };