console.log("script running...")
document.querySelector('.cross').style.display ='none';
document.querySelector('.humburg').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.containts('sidebarGo')) {
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else {
        document.querySelector('.cross').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.ham').style.display = 'inline'
        },350);
    }

})

  