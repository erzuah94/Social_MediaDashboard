
let darkMode = localStorage.getItem('dark'); 
console.log(darkMode);

const darkModeToggle = document.querySelector('#toggleDark');
const body = document.body;
const lightBtn = 'lightBtn.svg'
const darkBtn = 'darkBtn.svg'


// const enableDarkMode = () => {
//     // 1. Add the class to the body
//     document.body.classList.add('dark');
//     // 2. Update darkMode in localStorage
//     localStorage.setItem('darkMode', 'enabled');
// }  

// const disableDarkMode = () => {
//     // 1. Remove the class from the body
//     document.body.classList.remove('dark');
//     // 2. Update darkMode in localStorage 
//     localStorage.setItem('darkMode', null);
// }
   
  // If the user already visited and enabled darkMode
  // start things off with it onn
  if (darkMode === 'dark-mode') {
    image.src = darkBtn;
    body.classList.toggle('dark');
} 
  
  //clicks the button
  darkModeToggle.addEventListener('click', () => {

        if(image.src.endsWith(lightBtn)){
         image.src = darkBtn;
        }else{
             image.src = lightBtn;
     }
     body.classList.toggle('dark');
   

     if(image.src.endsWith(darkBtn)){
      localStorage.setItem('dark', 'dark-mode');
    }else if(image.src.endsWith(lightBtn)){
      localStorage.setItem('dark', 'light-mode');
    }
  
  });







const fetchData = (url, callback) =>{
  const http = new XMLHttpRequest();
  http.open('get', url, true);
  http.onreadystatechange = function(){
    if(this.readyState == 4 && http.status == 200){
       const data = JSON.parse(http.responseText);
       callback(data); 
    }
  }
  http.send();
};

document.addEventListener('DOMContentLoaded', () =>{
 fetchData('socialmedia.json', (data) =>{
   const mediaContainer = data ['socialmedia'];
   const container2 = data ['container2'];

   let sectionHTML = "";
   mediaContainer.forEach((banner) => {
     
     sectionHTML +=` 
 
       <div class = "card" id="${banner.name}">
       <div class="content">
         <div class="ic">
       <img src="${banner.icon}">
         <p class="nam">${banner.username}</p>
         </div>
         <div class="num">${banner.followers}</div>
         <p class="fans">${banner.fans}</p>

          <div class="day">
          <img src="${banner.arrow}">
           <p class="num2" style="color: ${banner.textColor}">${banner.num2}</p>
         </div>
       </div>
       </div>`;

   });
   document.querySelector('.cards').innerHTML = sectionHTML;



   let overviewHTML = "";
    container2.forEach((card) => {
      overviewHTML +=`
   
     <div class="card22">
     <div class="content">
       <div class="Jv">
           <p class="nam22">${card.username}</p>
           <img src="${card.icon}">
        
        </div>
        <div class="Jv2">
          <p class="num22" >${card.count_digit}</p>
                 <div class="Ar">
                    <img src="${card.arrow}">
                
                    <p class="TD1"  style="color: ${card.textColor}">${card.num22}</p>
                 </div>
      
             </div>
            </div>
      </div>`;
  });
    document.querySelector('.cards2').innerHTML = overviewHTML;

  });

});

   




 

  








