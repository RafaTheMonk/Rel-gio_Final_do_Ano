//Seleciona os elementos HTML onde os valores de dias, horas, minutos e segundos serão exibidos
const dias = document.querySelector('#Dias');
const horas = document.querySelector('#Horas');
const minutos = document.querySelector('#Minutos');
const segundos = document.querySelector('#Segundos');

//Calcula a data do próximo ano (1º de janeiro)
const fimDoAno = new Date(new Date().getFullYear() + 1, 0, 1);

//Configura um intervalo que atualiza o relógio a cada segundo
const tempo = setInterval(function() {
    //Obtém a data e hora atual
    const agora = new Date();

    //Calcula a diferença de tempo entre a data atual e o fim do ano
    const diferenca = fimDoAno - agora;

    //Calcula a quantidade de dias, horas, minutos e segundos restantes
    //1000 representa 1 segundo em milissegundos. Há 1000 milissegundos em 1 segundo.
    //60 representa 1 minuto. Há 60 segundos em 1 minuto.
    //60 representa 1 hora. Há 60 minutos em 1 hora.
    //24 representa 1 dia. Há 24 horas em 1 dia.
    const diasRestantes = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    //1000 * 60 * 60 * 24 é a quantidade de milissegundos em um dia (como discutido anteriormente).
    //1000 * 60 * 60 é a quantidade de milissegundos em uma hora (60 minutos * 60 segundos * 1000 milissegundos).
    //Portanto, (1000 * 60 * 60 * 24) / (1000 * 60 * 60) é a relação entre a quantidade de milissegundos em um dia e a quantidade de milissegundos em uma hora, o que resulta no número de horas em um dia (24).
    const horasRestantes = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //1000 * 60 * 60 é a quantidade de milissegundos em uma hora (60 minutos * 60 segundos * 1000 milissegundos).
    //1000 * 60 é a quantidade de milissegundos em um minuto (60 segundos * 1000 milissegundos).
    //(1000 * 60 * 60) / (1000 * 60) é a relação entre a quantidade de milissegundos em uma hora e a quantidade de milissegundos em um minuto, o que resulta no número de minutos em uma hora (60).
    const minutosRestantes = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    //1000 * 60 é a quantidade de milissegundos em um minuto (60 segundos * 1000 milissegundos).
    //1000 é igual a 1 segundo em milissegundos.
    //Portanto, (1000 * 60) / 1000) é a relação entre a quantidade de milissegundos em um minuto e a quantidade de milissegundos em um segundo, o que resulta no número de segundos em um minuto (60).
    const segundosRestantes = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Exibe os valores calculados nos elementos HTML, adicionando um zero à esquerda se necessário
    dias.textContent = diasRestantes < 10 ? "0" + diasRestantes : diasRestantes;
    horas.textContent = horasRestantes < 10 ? "0" + horasRestantes : horasRestantes;
    minutos.textContent = minutosRestantes < 10 ? "0" + minutosRestantes : minutosRestantes;
    segundos.textContent = segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes;

    // Se a diferença for menor ou igual a zero, o intervalo é limpo e os valores são configurados para zero
    if (diferenca <= 0) {
        clearInterval(tempo);
        dias.textContent = "00";
        horas.textContent = "00";
        minutos.textContent = "00";
        segundos.textContent = "00";
    }
}, 1000);

