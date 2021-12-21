# Ex 2 - Biblioteca 

Estamos trabalhando como engenheiros de software em um projeto Open-Source e os desenvolvedores que utilizam nosso projeto reclamaram da forma que o javascript obtém os elementos HTML. Com um sopro de motivação decidimos criar uma ferramenta auxiliar ao desenvolvimento. uma pequena lib (biblioteca ou simplesmente arquivo) que define funções de apoio ao desenvolvimento. Então pensou nos seguintes requisitos:

- Função de obter documentos html, como “function get(“.modais”)”
- Função para alterar o cssDeUmBotão como “function update(“.modais”,function(modal){...})”
- função para criar comportamento de click e comportamento genérico, como “function addClick(“.modal”,function(){})” e “function addAction(“.modal”,“click”,function(){})”