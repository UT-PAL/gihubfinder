let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let showrepos = document.querySelector('#showrepos');

let ui = new UI();
setTimeout(() => {
searchBtn.addEventListener('click',(e) =>{
    let userText = searchUser.value;
    if(userText != ''){
      //fetch api 
     
      fetch(`https://api.github.com/users/${userText}`)
      .then(result =>result.json())
      .then(data =>{
          if(data.message == 'Not Found'){
            
        // Show Alert
        ui.showAlert("User not Found!", "alert alert-danger");
     
          }
          else{
//show profile

       
           ui.showProfile(data);
           }
      })
    }
    else{
          ui.clearAlert(); 
          ui.clearProfile();

    }
});
},300);

showrepos.addEventListener('click',(e)=>{
    fetch(`https://api.github.com/users/${searchUser.value}/repos`)
    .then(result =>result.json())
    .then(data  => {
         ui.showRepos(data);
         
    })

});