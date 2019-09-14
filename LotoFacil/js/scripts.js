function gerarLinha(){
    numeros=new Array()
    var linha="";
    y=0    
    for(x=0;x<15;x++){
        numero=parseInt(Math.random()*25+1);
        if(x==0){
            numeros[x]=numero;
        } else {
            y=0;
            while (y<x){
                if (numero==numeros[y]){
                    numero=parseInt(Math.random()*25+1);
                    y=0;
                } else {
                    y++
                }
            }
            numeros[x]=numero;
        }
        if (x!=14)
            linha=linha+numero+" - ";
        else
            linha=linha+numero;
    }
    return linha;
}
$(document).ready(function(){
    $('#gerar').click(function(){
        var apt=$('#apostas').val();
        $('#lista').empty();
        var ol=document.getElementById('lista');              
        for (k = 0; k < apt; k++) {
            var li= document.createElement("li");
            var a = document.createElement('a')
            var linha="";
            linha=gerarLinha();
            var texto=document.createTextNode(linha);
            a.appendChild(texto)

            li.appendChild(a)
            ol.appendChild(li);
        }
        $('#apostar').show();
        $('#lista').listview('refresh');
    });

});