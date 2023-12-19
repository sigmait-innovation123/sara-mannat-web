

setTimeout(function() {
  document.getElementById("co-main").style.display = "block";

},2000)

document.addEventListener("DOMContentLoaded", function () {



  setTimeout(function() {
   
   setTimeout(function () {
      
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("sara-main").style.display = "block";
      


      

  }, 2000);
},2000)

  
 
});



        // function sendEmail() {
        //   console.log("hii")

        //       (function(){emailjs.init("3sJfA_4kKZEYfux4h"); })();

        //       var param ={
        //         from_name:document.getElementById("name").value,
        //         message : document.getElementById('message').value,
        //         email : document.getElementById('email').value,
        //         number : document.getElementById('phone_number').value
                
              
        //       };
        //              console.log(param)

        //     emailjs.sendForm("service_n08z84t", "template_rcrfsba", param)
        //         .then(
        //             function(response) {
        //                 console.log("Email sent successfully:", response);
        //                 // Handle success (e.g., show a success message to the user)
        //             },
        //             function(error) {
        //                 console.log("Failed to send email:", error);
        //                 // Handle error (e.g., show an error message to the user)
        //             }
        //         );
        // }



  const slider = document.querySelector('.slider');
  function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length-1]);
  }
  
  document.addEventListener('click',activate,false);
  

  

  




