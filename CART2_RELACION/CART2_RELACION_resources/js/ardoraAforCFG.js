//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=8;
var score=0; scoreMax=50; scoreInc=10; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones sigue adelante"; messageTime=""; messageError="Intenta nuevamente sigue intentando"; messageErrorG="Intenta nuevamente sigue intentando"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q0FSVDJfUkVMQUNJT04"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Q09ORkxJQ1RPIEFSTUFETw","QU5USVBFUlNPTkFMRVM","VklPTEVOQ0lBIERFIEdFTkVSTw","UE9CUkVaQQ","QUNPU08gRVNDT0xBUg","","","","",""];imaW=["","","","","","","","","",""];queW=["A lo largo de la Historia numerosos Ciudadanos del Mundo han sufrido, e incluso han muerto, como consecuencia de éstas. También conocido como Guerra","Aparatos que entierran bajo Tierra y que, al pisarlos, etallan. Cada año mutilan y matan a cientos de personas.","Acto violento de una persona hacia otra porque ésta última es de otro Sexo. La mayoía de las veces es el hombre el que insulta, pega e incluso mata a la mujer.","Situación en la que se encuentra una persona que no tiene suficiente dinero para cubrir sus necesidades alimentarias, educativas, sanitaria, etc.","Suele darse en el colegio o instituto, cuando un compañero insulta, pega, o ignora a otro compañero habitualmente. tambien es conocido como Bullying.","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="CART2_RELACION_resources/media/"; textBNext="Siguiente Palabra";
colorText="#000000";colorButton="#99CC33";colorBack="#FFFFFF";colorSele="#DCFAC0";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
