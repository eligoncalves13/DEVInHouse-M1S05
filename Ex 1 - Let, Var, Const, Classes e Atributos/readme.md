# Ex 1 - Let, Var, Const, Classes e Atributos

Faaaala Dev!
Sei que você gosta mais de codificar, mas preciso de sua ajuda!

Estamos aumentando a equipe para desenvolver um Banco Digital (fintech) e alguns estagiários irão começar na semana que vem. Sendo assim, preciso que você escreva um documento '[readme.md](http://readme.md/)' explicando o seguinte:

- Diferenças entra let, var e const;
- O que são classes, atributos e métodos, e o porque devemos utilizar.

Tente deixar tudo o mais resumido possível, assim podemos enviar para os novos integrantes. Vamos compartilhar nosso conhecimento. :D



_________

### Var, Let e Const

São operadores de declaração de variáveis:

- **`var`**: permite declarar variáveis no escopo global, ou no escopo de uma função,  independente do escopo de bloco. 

  - Pode ser alterada e declarada novamente. 

  - Sua declaração não precisa ser inicializada.

  - Pelas características informadas, o `var` pode trazer diversos problemas de lógica. Por esse motivo, com o ES6+, surgiu o `let` e `const` para garantir a conformidade do código. 

    

- **`let`**: permite declarar variáveis limitando seu escopo no bloco, instrução ou expressão, preservando assim o escopo onde a varável foi criada. 
  
  - Pode ser alterada, mas não declarada novamente.

  - Sua declaração não precisa ser inicializada.
  
    
  
- **`const`**: permite declarar variáveis limitando seu escopo no bloco, instrução ou expressão, preservando assim o escopo onde a varável foi criada. 

  - Diferente do `let`, não pode ser alterada. E não pode ser declarada novamente.

  - Sua declaração precisa inicializada obrigatoriamente.

  - Possui peculiaridade com relação a objetos, pois podemos alterar as propriedades do objeto.

Como sugestão, sempre que possível utilizar `const` para declarar as varáveis, pois possui um comportamento mais previsível. 

____

### Classes, Atributos e Métodos

- **Classes**: definem uma forma para organizarmos uma série de informações repetidas no nosso código e por isso devemos usar elas quando temos um código que se repete e que faz parte de um contexto coeso.

  Podemos dizer que uma classe é um molde, uma estrutura que permite a criação de um modelo para objetos semelhantes, com as mesmas propriedades. 

  - Declaração de uma classe (exemplo):

    ```
    class Retangulo {
      constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
      }
    }
    ```
  
    - O método `constructor` cria e inicializa os atributos de um objeto.
    
      - O `this` acessa os atributos da classe.
    
      
  
  As classes são implementadas com **atributos** e **métodos** que definem o estado e comportamento de um objeto. 



- **Atributos**: possui o mesmo conceito de varáveis. São declaradas no método `constructor`.

  Para proteger os atributos, utilizamos o encapsulamento para tornar os atributos privados. É necessário utilizar o # antes do atributo.

  

- **Métodos**: sinônimo de *função* mas são criadas dentro da classe. Definem o **comportamento** ou a maneira de fazer algo. 

  Um método pode ter nenhum, um ou mais parâmetros. Para acessar atributos do objeto criado utilizando a classe usamos a palavra-chave `this`.

  Existe os métodos *setter* e *getter*, que possuem o objetivo de acessar os atributos privados:

  - `setter`: método que define um novo valor para um atributo.
  - `getter`: método que retorna o atributo.
  
  Existe também o método estático:
  
  - `static`: utilizado para definir uma função que pertence à classe mas não aos objetos criados. 
  
  
  
  