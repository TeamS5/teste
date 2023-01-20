function showPage(url,methode){
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState === 4) {
            document.getElementById("response").innerHTML = http.response;
        }
    };
    http.open(methode, url, true);
    http.send();
}
function edit(text,id){
    document.getElementById("n-c1").value =text;
    document.getElementById("n-c2").innerHTML ="UPDATE";
    document.getElementById("n-c3").value=id;
}
function send(url){
    const form=document.getElementById("n-c4");
    const xhr = new XMLHttpRequest()
    let data = new FormData(form)
    xhr.onreadystatechange=function (){
        if (xhr.readyState===4){
            showPage(url+'/Categories.jsp','get')
            //document.getElementById("n-c5").innerHTML =xhr.responseText;
        }
    }
    xhr.open('POST', url+"/categorieInsert?categorie="+data.get("categorie")+"&&isinsert="+data.get("isinsert"),true)
    xhr.send();
}
function deleteH(url,id) {
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState === 4) {
            showPage(url+'/Categories.jsp','get')
        }
    };
    http.open("Get", url+"/categorieInsert?id="+id, true);
    http.send();
}
function validerRechargement(url,id){
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState === 4) {
            showPage(url+'/Rechargement.jsp','get')
        }
    };
    http.open("Get", url+"/Login?id="+id, true);
    http.send();
}
function showTable(url,etat){
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState === 4) {
            //showPage(url+'/VenteEnchere.jsp','get')
            document.getElementById("n-e1").innerHTML=http.responseText
        }
    };
    http.open("Get", url+"/EnchereServelet?id="+etat, true);
    http.send();
}
function display(durre){
    document.getElementById("n-e2").value=durre
}

function update(url){
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState === 4) {
            showPage(url+'/VenteEnchere.jsp','get')
            //document.getElementById("n-e1").innerHTML=http.responseText
        }
    };
    http.open("post", url+"/EnchereServelet?durre="+document.getElementById("n-e2").value, true);
    http.send();
}

function updateCommission(url){
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState === 4) {
            showPage(url+'/Statistique.jsp','get')
            //document.getElementById("n-e1").innerHTML=http.responseText
        }
    };
    http.open("post", url+"/Statistique?value="+document.getElementById("n-s2").value, true);
    http.send();
}
