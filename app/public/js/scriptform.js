function validar(){
    let id = $('#id').val();
    let nome = $('#nome').val();
    let email = $('#email').val();
    let curso = $('#cursos').val();
    // let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

    $('#id').removeClass('erro');
    $('#nome').removeClass('erro');
    $('#email').removeClass('erro');
    $('#cursos').removeClass('erro');

    if (id <= 0){
        $('#id').addClass('erro');
        return;
    }

    if (nome.trim() == "" || nome.length > 10){
        $('#nome').addClass('erro');
        return;
    }

    // if (email == "" || !regex.test(email)){
    //     $('#email').addClass('erro');
    // }

    if (curso == ""){
        $('#cursos').addClass('erro');
        return;
    }
    
    addTable(id, nome, curso);
    
    limpar();
}

function addTable(id, nome, curso){
    $('tbody').append(`<tr id='${id}#${nome}#${curso}'>
                        <td>${id}</td>
                        <td>${nome}</td>
                        <td onclick="removeTabela(this)">X</td>
                        <td onclick="alt(this)">A</td>
                       </tr>`);
}

function removeTabela(td){
    $(td.closest('tr')).remove();
}

function alt(td){
    let data = td.closest('tr').id.split('#');
    $('#id').val(data[0]);
    $('#nome').val(data[1]);
    $('#cursos').val(data[2]);
}

function limpar(){
    $('#id').val(0);
    $('#nome').val("");
    $('#email').val("");
    $('#cursos').val("");
    $('#msg').val("");
}