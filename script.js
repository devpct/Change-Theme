const btnsTheme = document.querySelectorAll('.bt')

for (let i = 0; i < btnsTheme.length; i++) {    
    btnsTheme[i].addEventListener("click",(event)=>{
       let color = event.target.getAttribute("data-color")
       document.documentElement.style.setProperty('--theme-color',color);
    })
}

