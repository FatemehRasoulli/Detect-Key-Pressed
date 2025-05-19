const result = document.querySelector("#result");
window.addEventListener("keydown",(e)=>{
    result.innerHTML=`
    The key is pressed <span> ${e.key} </span> <span> key code :${e.keyCode} </span>
    `;
});
