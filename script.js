let notification_userplus=document.getElementById("notification-userplus")
if(notification_userplus){
  notification_userplus.addEventListener("mouseover",function(){
    notification_userplus.style.cssText="cursor:pointer"
})
}

notification_userplus.addEventListener("click",function(){
    window.location.href="friends.html"
})
let notification_message=document.getElementById("notification-message")
notification_message.addEventListener("click",function(){
    window.location.href="message.html"
})
notification_message.addEventListener("mouseover",function(){
    notification_message.style.cssText="cursor:pointer"
})
let notification_bell=document.getElementById("notification-bell")
notification_bell.addEventListener("click",function(){
    window.location.href="notification.html"
})
let notification_edit=document.getElementById("notification-edit")

notification_edit.addEventListener("click",function(){
    document.body.style.cssText="font-family:font;transition:0.3s"
})
let notification_pelatte=document.getElementById("notification-palette")
let sidebarweb=document.getElementById("sidebari")
let sidebarvid=document.getElementById("sidebarvid")
let sidebargra=document.getElementById("sidebargra")
let sidebarmus=document.getElementById("sidebardj")
let sidebarpls=document.getElementById("sidebarpls")
let sidebarmes=document.getElementById("sidebarmes")
let sidebarset=document.getElementById("sidebarset")
let sidebarmin=document.getElementById("sidebarmin")
notification_pelatte.addEventListener("click",function(){
  sidebargra.style.cssText="color:white"


})
notification_pelatte.addEventListener("click",function(){
  sidebarmes.style.cssText="color:white"


})
notification_pelatte.addEventListener("click",function(){
    sidebarmin.style.cssText="color:white"
  
  
  })
  notification_pelatte.addEventListener("click",function(){
    sidebarset.style.cssText="color:white"
  
  
  })
  notification_pelatte.addEventListener("click",function(){
    sidebarpls.style.cssText="color:white"
  
  
  })
  notification_pelatte.addEventListener("click",function(){
    sidebarmus.style.cssText="color:white"
  
  
  })
  notification_pelatte.addEventListener("click",function(){
    sidebarweb.style.cssText="color:white"
  })
  notification_pelatte.addEventListener("click",function(){
    sidebarvid.style.cssText="color:white"
  
  
  })
  notification_pelatte.addEventListener("click",function(){
    sidebarmus.style.cssText="color:white"
  
  
  })
  notification_pelatte.addEventListener("click",function(){
    sidebarmin.style.cssText="color:white"
  })
  let light=document.getElementById("light")
  let sidebar=document.getElementById("sidebar")
  let header=document.getElementById("header")
  let dark=document.getElementById("dark")
  let webdb=document.getElementById("webdb")
  let viddb=document.getElementById("viddb")
  let gradb=document.getElementById("gradb")
  let djdb=document.getElementById("djdb")
  let table=document.getElementById("table")
  let table1=document.getElementById("table1")
  let table2=document.getElementById("table2")
  light.addEventListener("click",function(){
    document.body.style.cssText="background-color:white;transition:0.7s"
    sidebar.style.cssText="background-color:rgba(17, 19, 168, 0.842)"
    header.style.cssText="background-color:rgba(17, 19, 168, 0.842)"
  })
  dark.addEventListener("click",function(){
    document.body.style.cssText="background-color:black;transition:0.7s"
    header.style.cssText="background-color:rgba(17, 19, 168, 0.842)"
  })
  