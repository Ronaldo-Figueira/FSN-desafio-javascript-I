// Base a ser utilizada
const alunosDaEscola = [{ nome: "Henrique", notas: [], cursos: [], faltas: 5 }, { nome: "Edson", notas: [], cursos: [], faltas: 2 }, { nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0 }, { nome: "Guilherme", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date }], faltas: 0 }, { nome: "Carlos", notas: [], cursos: [], faltas: 0 }, { nome: "Lucca", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date }], faltas: 0 }];


// implementação

// 1- Adicionar Aluno

function adicionarAluno(NomeAluno) {
    alunosDaEscola.push({ nome: NomeAluno, notas: [], cursos: [], faltas: [] });
    console.log("Aluno cadastrado com sucesso!");
    console.log(" ")
    return alunosDaEscola;

}
adicionarAluno('Ronaldo')



// 2- Listar Aluno

function listarAlunos() {
    alunosDaEscola.forEach(aluno => {
        console.log("Aluno: " + aluno.nome);

        let notaAluno = "Notas: ";
        for (let i = 0; i < aluno.notas.length; i++) {
            notaAluno += aluno.notas[i] + ", ";
        }
        notaAluno = notaAluno.substr(0, notaAluno.length - 2);
        console.log(notaAluno);

        let cursos = "Cursos: ";
        for (const i of aluno.cursos) {
            cursos += i.nomeDoCurso;
            cursos += " (" + i.dataMatricula + ")";
            cursos += ", ";
        }
        cursos = cursos.substr(0, cursos.length - 2);
        console.log(cursos);

        console.log("Faltas: " + aluno.faltas);
        console.log(" ")

    });

}
listarAlunos()



// 3 - Buscar Aluno

function buscarAluno(nomeAluno) {
    let busca = false;
    for (const i of alunosDaEscola) {
        if (i.nome == nomeAluno) {
            console.log("Aluno " + nomeAluno + " encontrado com sucesso!");
            console.log(i);
            console.log(" ")
            busca = true;
        }
    }
    if (!busca) {
        console.log("Aluno" + nomeAluno + "não foi encontrado!");
        console.log(" ");
        return null;
    }
}
buscarAluno('Guilherme')



// 4- Matricular Aluno

function matricularAluno(nomeAluno, curso) {
    for (let i = 0; i < alunosDaEscola.length; i++) {
        if (alunosDaEscola[i].nome == nomeAluno) {
            console.log("Aluno " + nomeAluno + " encontrado!");
            console.log("Aluno " + nomeAluno + " matriculado no curso de " + curso);
            let data = new Date;
            alunosDaEscola[i].cursos.push({
                nomeDoCurso: curso,
                dataMatricula: data
            });
            console.log("Aluno matriculado em " + data);
            console.log(" ")
            return true;
        }
    }
    console.log("Aluno " + nomeAluno + " não encontrado!");
    console.log(" ");
    return false;
}
matricularAluno('Ronaldo', 'Data Science')



// 5- Aplicar faltas

function aplicarFalta(nomeAluno) {
    for (let i = 0; i < alunosDaEscola.length; i++) {
        if (alunosDaEscola[i].nome == nomeAluno) {
            console.log("Aluno " + nomeAluno + " encontrado!");
            if (alunosDaEscola[i].cursos.length > 0) {
                alunosDaEscola[i].faltas++;
                console.log(alunosDaEscola[i].faltas + " faltas.");
                console.log(" ")
                return true;
            }
            else {
                console.log("Aluno não está matriculado");
                console.log(" ");
                return false;
            }
        }
    }
    console.log("Aluno não encontrado!");
    console.log(" ");
    return false;
}
aplicarFalta('Guilherme')


// 6- Aplicar Nota

function aplicarNota(nomeAluno, nota) {
    for (let i = 0; i < alunosDaEscola.length; i++) {
        if (alunosDaEscola[i].nome == nomeAluno) {
            console.log("Aluno " + nomeAluno + " encontrado!");
            if (alunosDaEscola[i].cursos.length > 0) {
                alunosDaEscola[i].notas.push(nota);
                console.log("Nota " + nota + " adicionada com sucesso!");
                console.log(" ")
                return true;
            }
            else {
                console.log("Aluno não está matriculado!");
                console.log(" ");
                return false;
            }
        }
    }
    console.log("Aluno não encontrado!");
    console.log(" ");
    return false;
}
aplicarNota('Ronaldo', 9.0)



// 7- Aprovar Aluno

function aprovarAluno(nomeAluno) {
    for (let i = 0; i < alunosDaEscola.length; i++) {
        if (alunosDaEscola[i].nome == nomeAluno) {
            console.log("Aluno " + nomeAluno + " encontrado!");
            if (alunosDaEscola[i].cursos.length > 0) {
                console.log("Aluno está matriculado");
            }
            else {
                console.log("Aluno não esta matriculado!");
                return false;
            }
            if (alunosDaEscola[i].faltas <= 3) {
                console.log("Aluno possui " + alunosDaEscola[i].faltas + " faltas");
            }
            else {
                console.log("Aluno não pode ser aprovado. Possui " + alunosDaEscola[i].faltas + " faltas");
                return false;
            }
            let media = 0;
            for (let j = 0; j < alunosDaEscola[i].notas.length; j++) {
                media += alunosDaEscola[i].notas[j];
            }
            media = media / alunosDaEscola[i].notas.length;
            if (media >= 7) {
                console.log("Aluno com média " + media);
            }
            else {
                console.log("Aluno não pode ser aprovado com média " + media);
                return false;
            }
            console.log("Aluno aprovado com sucesso!");
            return true;
        }
    }

    console.log("Aluno não encontrado!");
    return false;
}
aprovarAluno('Ronaldo')