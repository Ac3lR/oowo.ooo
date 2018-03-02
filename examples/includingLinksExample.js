function loadjscssfile(filename, filetype){
    if (filetype=="js"){
        var fileref=document.createElement('script') // 1
        fileref.setAttribute("type","text/javascript") // 2 
        fileref.setAttribute("src", filename) // 3
    }
    if (filetype=="css"){
        var cssfileref=document.createElement("link") // 4
        cssfileref.setAttribute("rel", "stylesheet") // 5
        cssfileref.setAttribute("type", "text/css") 
        cssfileref.setAttribute("href", filename) // 6
    }
    else{
     print("you made a typo") // :)
    }
}
loadjscssfile("includingLinksExample.css", "css")