window.addEventListener("load", init);
kepek = [
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
    return document.getElementById(elem);
}
function init(){
    kiirKepek()
}
function kiirKepek(){
    var txt = " ";
    for (let i = 0; i < kepek.length; i++) {
        txt = txt + "<div>" + "<h3>"+ kepek[i].cim +"</h3>" + "<img src='"+ kepek[i].eleresiut+ "' class='kepek' alt='cicás képek'/>"+
        "<p>"+kepek[i].leírás+"</p> </div>"
    }
    ID("galeria").innerHTML = txt;
}