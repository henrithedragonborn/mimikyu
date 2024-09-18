const sales = [
    {
        action: "Mimikyu quer um cachorro",
        opt1: {
            text: "Pergunte a ele qual raça ele quer",
            nextpoint: 1,
        },
        opt2: {
            text: "Negue o pedido",
            nextpoint: 3,
        },
        opt3: {
            text: "talvez",
            nextpoint: 0,
        },
        opt4: {
            text: "nunca",
            nextpoint: 0,
        }
    },
    {
        action: '"#@!@#%!(#!@#@!" que significa: "Gosto de Border Collies"',
        opt1: {
            text: "Esta raça é muito ruim para meu orçamento",
            nextpoint: 0,
        },
        opt2: {
            text: "Também gosto, vamos comprá-lo",
            nextpoint: 2,
        },
        opt3: {
            text: "talvez",
            nextpoint: 0,
        },
        opt4: {
            text: "nunca",
            nextpoint: 0,
        }
    },
    {
        action: '"#!@#!$!@#!#!#$@!@#@%@?" que significa: "Onde podemos comprar um cachorro?"',
        opt1: {
            text: "Em um Pet Shop!",
            nextpoint: 2,
        },
        opt2: {
            text: "Na internet!",
            nextpoint: 0,
        },
        opt3: {
            text: "talvez",
            nextpoint: 0,
        },
        opt4: {
            text: "nunca",
            nextpoint: 0,
        }
    },
    {
        action: '"##@@!#%$!%(&@#&#&@!@#!" que significa: "Então podemos comprar um gato?"',
        opt1: {
            text: "Sim",
            nextpoint: 0,
        },
        opt2: {
            text: "Não",
            nextpoint: 0,
        },
        opt3: {
            text: "talvez",
            nextpoint: 0,
        },
        opt4: {
            text: "nunca",
            nextpoint: 0,
        }
    }
];

function applyPoint(next) {
    const point = sales[next];
    $('#action-text').text(point.action);
    $('#option-1').text(point.opt1.text);
    $('#option-2').text(point.opt2.text);
    $('#option-3').text(point.opt3.text);
    $('#option-4').text(point.opt4.text);
    $('#option-1').attr('data-nextpoint', point.opt1.nextpoint);
    $('#option-2').attr('data-nextpoint', point.opt2.nextpoint);
    $('#option-3').attr('data-nextpoint', point.opt3.nextpoint);
    $('#option-4').attr('data-nextpoint', point.opt4.nextpoint);
}

$('#option-1').click(function (e) {
    applyPoint($(this).attr('data-nextpoint'));
});

$('#option-2').click(function (e) {
    applyPoint($(this).attr('data-nextpoint'));
});

$('#option-3').click(function (e) {
    applyPoint($(this).attr('data-nextpoint'));
});

$('#option-4').click(function (e) {
    applyPoint($(this).attr('data-nextpoint'));
});

applyPoint(0);