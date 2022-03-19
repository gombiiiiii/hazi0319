window.addEventListener("load", init); //betölti az oldalt , majd az init függvényt hozzá rendeli
var kepek = [
    {
        cim: "Téli panoráma kép",
        eleresiut:"./kepek/01.jpg",
        leírás:"2018-as téli panoráma kép",
    },
    {
        cim: "Nyári panoráma kép",
        eleresiut:"./kepek/02.jpg",
        leírás:"2019-es nyári panoráma kép",
    },
    {
        cim: "Jelző kő",
        eleresiut:"./kepek/03.jpg",
        leírás:"Fagyott jelző kő a kékes tetején",
    }
]
function ID(elem){
    return document.getElementById(elem); //rövidítő elem
}
function init(){
    kiirKepek()
    ID("galeria").style.backgroundColor="pink";
    //ID("galeria").style.border="12px solid pink";
    for (let index = 0; index < kepek.length; index++) {
        document.getElementsByClassName("kepek")[index].style.border="5px solid grey";
    }
    

}
function kiirKepek(){
    var txt = " ";
    for (let i = 0; i < kepek.length; i++) {
        txt = txt + "<div>" + "<h3>"+ kepek[i].cim +"</h3>" + "<img src='"+ kepek[i].eleresiut+ "' class='kepek' alt='Panoráma képek'/>"+
        "<p>"+kepek[i].leírás+"</p> </div>"
    }
    ID("galeria").innerHTML = txt;
}