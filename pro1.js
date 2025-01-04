// start hedaer 

let header = document.createElement("div");
let nav  =document.createElement("ul");
let logo= document.createElement("h1");
let home = document.createElement("li");
let adout = document.createElement("li");
let service = document.createElement("li");
let contact = document.createElement("li");
// conten
 let logoText=document.createTextNode("MAHMOUD");
 let homeText=document.createTextNode("home");
 let adoutText=document.createTextNode("Adout");
 let serviceText=document.createTextNode("service");
 let contactText=document.createTextNode("contact");
 
// add text nav header
logo.append(logoText);
home.append(homeText);
adout.append(adoutText);
service.append(serviceText);
contact.append(contactText);

nav.append(home,adout,service,contact);
header.append(logo,nav);
document.body.append(header);
 header.style.cssText="background:#2e2e2e2e; display: flex; justify-content: space-between;align-items: center;padding:20px 20px;"
nav.style.cssText=" display: flex; justifey-content: space-between;align-items: center; gap:30px;"
logo.style.cssText="color:rgb(0, 190, 248) ; "

// end heaer 

let content =document.createElement("div")
content.className="mo"
document.body.append(content)
for(let i=1 ; i <=16 ;i++) {
    let sechen=document.createElement("div")
    let heding =document.createElement("h1")
    let pargraf =document.createElement("p")
    let pargrafText=document.createTextNode("prodact")  
    heding=i
    pargraf.append(pargrafText)
     sechen.append(pargraf) 
     sechen.prepend(heding) 
    content.append(sechen)
     sechen.style.cssText=" border:solid 1px rgb(0, 190, 248);padding:20px;text-align:center; width:270px; "

}


content.style.cssText="display: flex;  flex-wrap:wrap; gap:20px; padding:20px 20px ; background:#e2e2e2e2"


let footer =document.createElement("div")
let contantFooter=document.createElement("p")
let footerText=document.createTextNode("copyrigth 2025")
contantFooter.append(footerText)
footer.append(contantFooter)
document.body.append(footer)


footer.style.cssText="background:rgb(0, 190, 248); text-align:center; padding:20px;"




