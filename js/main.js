$(document).ready(function() {



$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(__) _____-____   '
}) 
$('#cpf').mask('000.000.000-00', {
    placeholder: '___.___.___-__'
})
$('#cep').mask('00000-000', {
    placeholder: '_____-___'
})

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            },
            senha: {
                required: true
            }
        }, 
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira um email válido',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu CPF',
            cep: 'Por favor, insira seu CEP',
            endereco: 'Por favor, insira seu endereço completo',
            senha: 'Por favor, insira sua senha'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            console.log(camposIncorretos)
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})

    $(document).ready(function() {
        $("#cadastrar").click(function() {
        location.reload();
        });
    });
