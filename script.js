function somaMaior() {
    let A = Number(prompt('Digite o valor de A:'));
    let B = Number(prompt('Digite o valor de B:'));
    let C = Number(prompt('Digite o valor de C:'));
    let soma = A + B;

    if (soma < C) {
        alert(`
            =============================
            A soma de A + B é: ${soma}
            =============================
            A: ${A}
            B: ${B}
            C: ${C}
            =============================
            `)
    } else {
        alert(`
            =============================
            Sem Resultado!
            =============================
            `)

    }
}

function tempoCasamento() {
    let nome = prompt('Digite seu Nome: ');
    let sexo = prompt('Digite seu Sexo: ');
    let estadoCivil = prompt('Digite seu Estado Civil: ');
    let tempo = prompt('Quantos tempo de Casada você tem em anos:  ');

    if (sexo == 'F' && estadoCivil == 'CASADA') {
        alert(`
           let tempo = prompt('Quanto tempo de Casada você tem em anos:  ');
            `)
    }
}

function imparPar() {
    let num = Number(prompt('Digite um número: '));

    if (num % 2 === 0) {
        alert(`
            O número ${num} é Par.
            `);
    } else {
        alert(`
            O número ${num} é Ímpar.
            `);
    }
}

function valoresIguais() {
    let A = parseInt(prompt('Digite o valor de A:'));
    let B = parseInt(prompt('Digite o valor de B:'));
    
    let mult = A * B;

    if (A === B) {
        let C = A + B;
        alert(`
            A soma de A + B é: ${C}
            `);
    } else {
        let C = A * B;
        alert(`
            A multiplicação de A * B é: ${C}
            `);
}
}

function valorPositivoNegativo() {
    let num = Number(prompt('Digite um número: '));
    let numdobro = num * 2;
    let numtriplo = num * 3;

    if (num >= 0) {
        alert(`
            O dobro de ${num} é: ${numdobro}
            `);
    }else {
        alert(`
            O triplo de ${num} é: ${numtriplo}
            `);
    }
}

function valorBooleano() {
    let bool1 = Boolean(Number(prompt("Digite '1' para true ou '0' para false")));
    let bool2 = Boolean(Number(prompt("Digite '1' para true ou '0' para false")));

    if (bool1 === false && bool2 === false) {
        alert('Ambos são falsos.')
    } else {
        alert('Ambos são verdadeiros.')
    }
}

function lerVariaveis() {
    let num = Number(prompt('Digite um número: '))
    if (num % 2 === 0) {
        let mais5 = num + 5;
        alert(`Resultado é: ${mais5}`);
    }else {
        let mais8 = num + 8;
        alert(`Resultado é: ${mais8}`);
    }
}

function ordenarDecrescente() {
    let num1 = parseInt(prompt('Digite o 1º Número: '));
    let num2 = parseInt(prompt('Digite o 2º Número: '));
    let num3 = parseInt(prompt('Digite o 3º Número: '));

    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            alert(num1, num2, num3);
        } else {
            alert(num1, num3, num2);
        }
    } else if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            alert(num2, num1, num3) ;
        }else {
            alert(num2, num3, num1);
        }
    } else {
        if (num3 > num1 && num3 > num2) {
            alert(num3, num1, num2);
        } else {
            alert(num3, num2, num1);
        }
    } 
}

function pesoIdeal() {
    let sexo = prompt('Qual o seu Sexo "M" para masculino e "F" para feminino: ').toUpperCase();
    let altura = Number(prompt('Qual a sua Altura (Ex.: 1.75)?'));
    

    if (sexo === 'M') {
        let pesoIdeialH = (77.7 * altura) - 58;
        alert(`O seu peso ideal é: ${pesoIdeialH} kg.`);
    } else {
        let pesoIdeialM = (62.1 * altura) - 44.7;
        alert(`O seu peso ideal é: ${pesoIdeialM} kg.`);
    }

}

function descobrirImc () {
    let peso = Number(prompt('Digite seu Peso (Ex.: 84.9): '));
    let altura = Number(prompt('Digite sua Altura (Ex.: 1.75): '))

    let imc = peso / (altura ** 2);

    if (imc < 18.5) {
        alert(`O seu IMC é: ${imc}, você está abaixo do peso.`);
    } else if (imc >= 18.5 && peso < 25) {
        alert(`O seu IMC é: ${imc}, você está com o peso normal.`);
    } else if (imc >= 25 && imc < 30) {
        alert(`O seu IMC é: ${imc}, você está acima do peso.`);
    } else {
        alert(`O seu IMC é: ${imc}, você está obeso.`);
    }
}

function verDesconto () {
    let valor = Number(prompt('Digite o valor da sua compra em R$: '));
    let formapagamento = prompt('Qual a forma de pagamento entre as Opcções: à vista, à vista no cartão, uma vez ou duas vezes:  ').toLocaleLowerCase();

    let avista = valor * 0.9;
    let avistacartao = valor * 0.85;
    let parcela = valor * 1.1;

    if (formapagamento === 'à vista') {
        alert(`Você ganhou 10% de desconto, o valor ficará R$ ${avista}.`)
    } else if (formapagamento === 'à vista no cartão') {
        alert(`Você ganhou 15% de desconto, o valor ficará R$ ${avistacartao}.`)
    } else if (formapagamento === 'uma vez') {
        alert(`Você não ganhou desconto, o valor ficará R$ ${valor}.`)
    } else if (formapagamento === 'duas vezes') {
        alert(`A compra terá um acréscimo de 10%, o valor ficará R$ ${parcela}.`)
    } else {
        alert(`Opção Inválida.`)
    }
}

function verificarMedia() {
    let nota1 = Number(prompt('Digite a Nota 1: '));
    let nota2 = Number(prompt('Digite a Nota 2: '));
    let nota3 = Number(prompt('Digite a Nota 3: '));
    let mediaexercicios = Number(prompt('Digite a Média dos Exercícios : '));

    let mediaaproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaexercicios) / 7;

    if (mediaaproveitamento >= 9.0) {
        alert(`Sua Média de Aproveitamento foi: ${mediaaproveitamento}, seu conceito é A`);
    } else if (mediaaproveitamento >= 7.5 && mediaaproveitamento < 9.0) {
        alert(`Sua Média de Aproveitamento foi: ${mediaaproveitamento}, seu conceito é B`);
    } else if (mediaaproveitamento >= 6.0 && mediaaproveitamento < 7.5) {
        alert(`Sua Média de Aproveitamento foi: ${mediaaproveitamento}, seu conceito é C`);
    } else if (mediaaproveitamento >= 4.0 && mediaaproveitamento < 6.0) {
        alert(`Sua Média de Aproveitamento foi: ${mediaaproveitamento}, seu conceito é D`);
    } else  {
        alert(`Sua Média de Aproveitamento foi: ${mediaaproveitamento}, seu conceito é E`);
    } 
}