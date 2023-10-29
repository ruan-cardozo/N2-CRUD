Trabalho para a N2 de Server Side 

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