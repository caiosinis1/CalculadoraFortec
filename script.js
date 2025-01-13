document.getElementById('btn-submit').addEventListener('click', function () {
    // Pegando os valores dos inputs
    const metragemParede = parseFloat(document.getElementById('input-metragem').value);
    const tamanhoJanela = parseFloat(document.getElementById('input-janela').value) || 0;
    const tamanhoPorta = parseFloat(document.getElementById('input-porta').value) || 0;

    const inputMetragem = document.getElementById('input-metragem');

    // Validação do campo de metragem da parede
    if (!metragemParede || metragemParede <= 0) {
        inputMetragem.style.setProperty('border', '2px solid red');
        inputMetragem.style.setProperty('outline', 'none');  // Remove qualquer estilo padrão de foco
        alert('Preencha o tamanho da parede com um número válido!');
        return;
    } else {
        inputMetragem.style.setProperty('border', '1px solid #ccc');  // Volta ao estado original
    }

    // Verificando tipo de bloco escolhido
    const tipoBloco = document.getElementById('tipo-bloco').value;
    let areaBloco;

    switch (tipoBloco) {
        case 'bloco1': // 100x50x15 cm (1m x 0,5m)
            areaBloco = 1 * 0.5;
            break;
        case 'bloco2': // 100x25x15 cm (1m x 0,25m)
            areaBloco = 1 * 0.25;
            break;
        case 'bloco3': // 50x50x15 cm (0,5m x 0,5m)
            areaBloco = 0.5 * 0.5;
            break;
        case 'bloco4': // 60x30x10 cm (0,6m x 0,3m)
            areaBloco = 0.6 * 0.3;
            break;
        case 'bloco5': // 60x30x12,5 cm (0,6m x 0.3m)
            areaBloco = 0.6 * 0.3;
            break;
        case 'bloco6': // 60x30x15 cm (0,6m x 0.3m)
            areaBloco = 0.6 * 0.3;
            break;
        default:
            alert('Por favor, escolha um bloco válido!');
            return;
    }

    // Calculando a área final
    const areaFinal = metragemParede - (tamanhoJanela + tamanhoPorta);

    if (areaFinal <= 0) {
        alert('A área final deve ser maior que zero! Verifique os valores inseridos.');
        return;
    }

    // Calculando quantidade de blocos
    const quantidadeBlocos = Math.ceil(areaFinal / areaBloco);

    // Exibindo o resultado no display e aplicando borda verde
    const displayResultado = document.getElementById('display');
    displayResultado.value = ` ${quantidadeBlocos} blocos`;
    displayResultado.style.setProperty('border', '3px solid rgb(14, 174, 121)');  // Borda verde
});

// Botão de limpar
document.getElementById('btn-clear').addEventListener('click', function () {
    document.getElementById('input-metragem').value = '';
    document.getElementById('input-janela').value = '';
    document.getElementById('input-porta').value = '';
    const displayResultado = document.getElementById('display');
    displayResultado.value = '';
    displayResultado.style.setProperty('border', '1px solid #ccc');  // Borda padrão ao limpar
});
