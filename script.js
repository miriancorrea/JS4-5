function mostraSaudacao(){
    const nome = document.getElementById('nome').value;
    const hora = parseInt(document.getElementById('hora').value,10);
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = saudacaoPersolaizada(nome, hora);
    
}

function saudacaoPersolaizada(nome, hora)
{
    if(hora < 12)
       {
        return "Bom Dia," + nome + "!";
       }    
    else if(hora > 12 && hora < 18)
    {
        return "Boa Tarde," + nome + "!";
    }
    else if (hora > 18)
    {
        return "Boa Noite," + nome + "!";
    }
    else
    {
        return "";
    }
}

    function setBackgroundColor(color)
    {
        document.body.style.backgroundColor = color;
    }

    document.getElementById('redbutton').addEventListener('click', function(){setBackgroundColor('red');});
    document.getElementById('greenbutton').addEventListener('click', function(){setBackgroundColor('green');});
    document.getElementById('bluebutton').addEventListener('click', function(){setBackgroundColor('blue');});

    document.getElementById('inputbox').addEventListener('keypress', function(event){
        alert("Tecla pressionada: " + event.key)
    });