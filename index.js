
  var spans = document.getElementsByTagName("span");
  for (i = 0; i < spans.length; i++) spans[i].onclick = changeColor;




  function changeColor(elem) {     
      color = (elem.target.style.backgroundColor)

       console.log(color)

      let divColor = document.querySelector('.upload')
      divColor.style.backgroundColor = color

      if(color === "rgb(216, 50, 139)"){
        document.querySelector('body').style.backgroundColor = "#FFC0CB"
        let umbrella = document.querySelector('.umbrella')
        umbrella.src = "assets/Pink umbrella.png"
    

      }
      else if(color === "rgb(254, 209, 68)"    ){
        document.querySelector('body').style.backgroundColor = "#f0e3c8"
        let umbrella = document.querySelector('.umbrella')
        umbrella.src = "assets/Yello umbrella.png"
        document.querySelector('body').style.backgroundColor = "#f0e3c8"
       
      }
      else if(color === "rgb(42, 177, 228)"){
        document.querySelector('body').style.backgroundColor = "#e5f5fe"
        let umbrella = document.querySelector('.umbrella')
        umbrella.src = "assets/Blue umbrella.png"
       
      }
 
  
  }



  function uploadFile(event){


      let fileName = document.querySelector("#myFile").files[0].name
      let file = document.querySelector("#myFile").files[0]
      let logo = document.querySelector('.logo')
      logo.style.display = "block"
      logo.src =  `${URL.createObjectURL(event.target.files[0])}`


      document.querySelector('#uploadText').textContent =  fileName.toUpperCase()

  }


  function removeLogo(){

    let logo = document.querySelector('.logo')
    logo.style.display = "none"

    document.querySelector('#uploadText').textContent =  "UPLOAD LOGO"


  }