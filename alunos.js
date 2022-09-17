// obj
const alunos = [
    {
        nome: 'Carlos' ,
        nota: 5 ,
        turma: '1C'
    },
    {
        nome: 'Maria' ,
        nota: 8  ,
        turma:'1c', 
    },
    {
        nome: 'Pablo' ,
        nota: 2  ,
        turma: '3A' ,
    },
    {
        nome: 'Miguel' ,
        nota: 9 ,
        turma: '1A',
    },
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}


console.log(alunosAprovados(alunos, 5));