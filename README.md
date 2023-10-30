Trabalho para a N2 de Server Side 

Conceitos

Promise: Uma Promise é um objeto JavaScript que representa um valor que pode não estar disponível imediatamente, mas será no futuro. Ela é usada para lidar com operações assíncronas, como solicitações de rede, leitura de arquivos ou consultas de banco de dados.

Async Function: Uma função assíncrona é uma função que pode pausar sua execução para aguardar a resolução de uma Promise, permitindo que o código seja escrito de forma mais síncrona, o que é mais legível e fácil de entender. Elas são definidas com a palavra-chave async.

End-points

http://localhost:3000/bicicletas/ -> Listar todas as bicicletas

http://localhost:3000/bicicleta/inserir -> Inserir uma bicicleta

-> Objeto de exemplo
{
    "codigo_bicicleta": 13,
    "marca_bicicleta": "Tribe 4",
    "cor_bicicleta": "Amarela e rosa"
}

http://localhost:3000/bicicleta/alterar/1 -> Editar uma bicicleta

{
    "codigo_bicicleta": 13,
    "marca_bicicleta": "Tribe 4",
    "cor_bicicleta": "Amarela e rosa"
} -> editar esses valores

http://localhost:3000/bicicleta/deletar/1 -> Deletar alguma bicicleta pelo codigo dela

http://localhost:3000/bicicletas/buscar-bicicletas?marca=mormaii&cor=roxo -> Consultar bicicletas pela cor ou marca e vice versa.