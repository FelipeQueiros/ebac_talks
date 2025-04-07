AOS.init();

/* Criando a data do evento */
const dataDoEvento = new Date("Dec 12, 2025 19:00:00"); /* Criamos uma varável do tipo data, apontando para uma data futura */
const timeStampDoEvento = dataDoEvento.getTime(); /* Aqui pegaremos a timeStamp, o registro único deste momento em dados */

const contaAsHoras = setInterval (function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60; 
    const minutosEmMs = 1000 * 60 ;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);
    

    document.getElementById('contador').innerHTML = `${diasAteOEvento}D ${horasAteOEvento}H ${minutosAteOEvento}M ${segundosAteOEvento}S `

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `00:00:00`
    }
}, 1000)