// let welcomeText = document.getElementById("welcome");
// window.addEventListener('scroll', e => {
//     let value = window.scrollY;
//     if (value < window.innerHeight * .4){
//     	welcomeText.style.animation = "slide .8s ease-out forwards";
        
//     }else{
//     	welcomeText.style.animation = "disappear .8s ease-out forwards";
        
//     }
// });

let curPage = "start-page";

function movePage(){
    if (curPage == "start-page"){
        console.log("to right");
        curPage = "user-grid";
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector("#show-user-grid-btn img").src = "/Img/test/btn_arrow_left.svg";
        // document.getElementById("user-grid").style.opacity = 1;
        // document.querySelector("#start-page").style.opacity = 0;
        document.querySelector("#user-grid").style.display = "grid";
        document.querySelector("#start-page").style.display = "none";
        document.querySelector("#show-user-grid-btn").style.left = "6vw";
    }
    else if (curPage == "user-grid"){
        console.log("to left");
        curPage = "start-page";
        document.querySelector("body").style.overflowY = "auto";
        document.querySelector("#show-user-grid-btn img").src = "/Img/test/btn_arrow_right.svg";
        // document.getElementById("user-grid").style.opacity = 0;
        // document.querySelector("#start-page").style.opacity = 1;
        document.querySelector("#user-grid").style.display = "none";
        document.querySelector("#start-page").style.display = "block";
        document.querySelector("#show-user-grid-btn").style.left = "calc(100vw - 6vw)";
    }
}

let allowedKey = {'1': '1-key', '2': '2-key', '3': '3-key', '4': '4-key', '5': '5-key', '6': '6-key', '7': '7-key', '8': '8-key', '9': '9-key', '0': '0-key', '-': 'hyphen-key', '=': 'equal-key', 
                 'q': 'q-key', 'w': 'w-key', 'e': 'e-key', 'r': 'r-key', 't': 't-key', 'y': 'y-key', 'y': 'y-key', 'u': 'u-key', 'i': 'i-key', 'o': 'o-key', 'p': 'p-key', '[': 'lsqrbr-key', ']': 'rsqrbr-key', '\\': 'backslash-key',
                 'a': 'a-key', 's': 's-key', 'd': 'd-key', 'f': 'f-key', 'g': 'g-key', 'h': 'h-key', 'j': 'j-key', 'k': 'k-key', 'l': 'l-key', ';': 'semicolon-key', "'": 'apostrophe-key',
                'z': 'z-key', 'x': 'x-key', 'c': 'c-key', 'v': 'v-key', 'b': 'b-key', 'n': 'n-key', 'm': 'm-key', ',': 'comma-key', '.': 'period-key', '/': 'slash-key', ' ': 'space-key', '`': 'backtick-key'};

let titleChar = {'c': 'title-c', 'o': 'title-o', 'm': 'title-m', 'u': 'title-u', 'n': 'title-n', 'i' : 'title-i', 't': 'title-t', 'y' : 'title-y', '3' : 'title-3', '0': 'title-0', '9' : 'title-9'};
let loginWindow = document.querySelector("#login-window");
 
window.addEventListener("keydown", e => {
    if (window.getComputedStyle(loginWindow).display != "none") return;
    
    if (e.key in allowedKey){
        document.getElementById(allowedKey[e.key]).style.color = "#777777";
        
        if (e.key in titleChar){
			document.querySelectorAll(`.${ titleChar[e.key] }`).forEach(elem => {
               elem.style.color = "transparent";
            });
        }
    }    
});

 
window.addEventListener("keyup", e => {
    if (window.getComputedStyle(loginWindow).display != "none") return;
    
    if (e.key in allowedKey){
        document.getElementById(allowedKey[e.key]).style.color = "#151515";
		// document.getElementById(allowedKey[e.key]).style.background = "none";
        
        if (e.key in titleChar){
			document.querySelectorAll(`.${ titleChar[e.key] }`).forEach(elem => {
               elem.style.color = "white";
            });
        }
    }    
});

function sleep(t){
   return new Promise(resolve=>setTimeout(resolve,t));
}

let community_char = ['3', '0', '9', 'c', 'o', 'm', 'm', 'u', 'n', 'i', 't', 'y'];
showTitle();
async function showTitle() {
    await sleep(300);
    
    for (let i = 0; i < community_char.length; i++){
        document.getElementById(allowedKey[community_char[i]]).style.color = "#777777";
        document.querySelectorAll(`.${ titleChar[community_char[i]] }`).forEach(elem => {
           elem.style.color = "transparent";
		  console.log(i);
        });
            
        await sleep(110);
        
        document.getElementById(allowedKey[community_char[i]]).style.color = "#151515";
        document.querySelectorAll(`.${ titleChar[community_char[i]] }`).forEach(elem => {
           elem.style.color = "white";
        });
        
        await sleep(30);
    }
}

function login(user, elem){
    let formData = new FormData();

    if (user == "User"){
        user = document.querySelector(".login-id").value;
        
        // ????????? ????????????
        if (isNaN(user) || parseInt(user) <= 0 || parseInt(user) > 27){
            alert("????????? ??????????????????.");
            return;
        }
    }
    formData.append("code", "login");
    formData.append("user", user);
    formData.append("pw", elem.parentNode.querySelector(".login-password").value);
    $.ajax({
        url         : "/src/php/Login.php",
        type        : "POST",
        dataType    : 'html',
        enctype     : "multipart/form-data",
        processData : false,
        contentType : false,
        data        : formData,
        async       : false,
        success     : function(res){
            console.log(res);
            if (res == "valid"){
                console.log("logged in: ", user);
				if (user == 'Admin'){
					alert("9??? ???????????? ???????????? ?????????????????????.");
				} else {
					alert("9??? ???????????? ???????????? ?????????????????????.");
				}
                loginWindow.style.display = "none";
			} else {
				alert("??????????????? ???????????? ????????????. ?????? ??????????????????.");
            }
        }
    });
}

// document.querySelector('#input').addEventListener('keyup', (e)=>{
//     if (e.keyCode === 13) {
        
//   }  
// });



