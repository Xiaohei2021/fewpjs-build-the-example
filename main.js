// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hearts= document.getElementsByClassName("like-glyph");

// Your JavaScript code goes here!

// document.addEventListener("DOMContentLoaded", () => 
// {
//   for (const heart of hearts)
//   {
//     heart.addEventListener("click", likeClicker)
//   }
// }); 

// function likeClicker(e)
// {
//   let like = e.target;
//     if (like.innerHTML == EMPTY_HEART)
//     {
//       mimicServerCall()
//       .then(() => 
//       {
//        like.innerHTML = FULL_HEART;
//        like.setAttribute("class", "liked");
//       })
//       .catch(error => 
//       {
//         const modal = document.getElementById("modal");
//         modal.removeAttribute("class","hidden");
//         modal.innerText = "You are now seeing an error Message =]";
//         setTimeout(() => modal.setAttribute("class","hidden"),6000);
//       })
//     }
//     else 
//     {
//       like.innerHTML = EMPTY_HEART;
//       like.removeAttribute("class","like");
//     }    
// };

modal.className = "hidden"

for (const heart of hearts)
{
  heart.addEventListener("click", likeClicker)
}

function likeClicker()
{
  mimicServerCall()
 .then(() => 
  {
   heart.className = "liked"
  })
  .catch(() => 
  {
    modal.style.visibility = "visible"
  })
};

document.addEventListener("DOMContentLoaded", () => 
{

}); 





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
