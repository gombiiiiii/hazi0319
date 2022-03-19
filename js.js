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
    },
    {
        cim: "Jelző kő",
        eleresiut:"./kepek/04.jpg",
        leírás:"Fagyott jelző kő a kékes tetején",
    },
    {
        cim: "Jelző kő",
        eleresiut:"./kepek/05.jpg",
        leírás:"Fagyott jelző kő a kékes tetején",
    },
    {
        cim: "Jelző kő",
        eleresiut:"./kepek/06.jpg",
        leírás:"Fagyott jelző kő a kékes tetején",
    }

]
function ID(elem){
    return document.getElementById(elem); //rövidítő elem
}
function CLASS(elem)
{
    return document.getElementsByClassName(elem)
}
function $(elem)
{
 return document.querySelectorAll(elem)
}
function init(){
    kiirKepek()
    ID("galeria").style.backgroundColor="pink";
    //ID("galeria").style.border="12px solid pink";
    for (let index = 0; index < kepek.length; index++) {
       /* CLASS("kepek")[index].style.border="12px solid grey";
        CLASS("kepek")[index].style.padding="10px"; // ez még lefut
        $('#galeria div img')[index].style.backgroundColor='purple'; // itt szétesik
        */
       $("#galeria div")[index].className="divekFormazasa" //osztályt hozunk létre
       $("#galeria div")[index].addEventListener("click",kattintás)

    }
    // az addEventListener egy esemény kezelő
    //$("#galeria div")[0].addEventListener("click",kattintás)

}
function kattintás(){
    //console.log("kattintottam")
    //console.log(event.target.id.Source);
    //var kepindx =id;
    var txt="<img src='"+kepek[event.target.id].eleresiut+"' alt='nagykep'/>"
    ID("nagykep").innerHTML=txt;
}
function kiirKepek(){
    var txt = " ";
    for (let i = 0; i < kepek.length; i++) {
        txt = txt + "<div>" + "<h3>"+ kepek[i].cim +"</h3>" + "<img id='"+i+"' src='"+ kepek[i].eleresiut+ "' class='kepek' alt='Panoráma képek'/>"+
        "<p>"+kepek[i].leírás+"</p> </div>"
    }
    ID("galeria").innerHTML = txt;
}