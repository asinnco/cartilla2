//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360;timeIni=360; timeBon=10;
var successes=0; successesMax=8; attempts=0; attemptsMax=15;
var score=0;scoreMax=10;scoreInc=10; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#DAE6B7"; colorButton="#F2F3DA"; colorText="#000000"; colorSele="#FFD8B0";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICITACIONES SIGUE ADELANTE"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts="SUPERASTE LOS INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="UEFSRUpBQzI"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["JUSTICIA","EDUCACION","DERECHOS HUMANOS","LIBERTAD","DEMOCRACIA","MALTRATO","POBREZA","IGUALDAD"];im1=["","","","","","","",""];mp31=["","","","","","","",""];
var wo2=["DERECHOS HUMANOS","LIBERTAD","MALTRATO","POBREZA","IGUALDAD","DEMOCRACIA","JUSTICIA","EDUCACION"];im2=["","","","","","","",""];mp32=["","","","","","","",""];
var cols=4; rows=4; items=8; itp=["MTA","MTE","MTI","MTM","MTQ","MTU","MTY","MTc"]; pos=["MjY","Mjc","MjA","MjE","MjU","MjI","MjM","MjQ"];
var boardGame=[["","","",""],["","","",""],["","","",""],["","","",""]]; dirMedia="PAREJAC2_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
colorText="#000000";colorButton="#99CC33";colorBack="#FFFFFF";colorSele="#DCFAC0";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
