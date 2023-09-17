# Singleton

## Intenção
Singleton é um padrão de design criacional, que garante que apenas um objeto desse tipo exista e forneça um único ponto de acesso a ele para qualquer outro código.

## Problema
O aplicativo precisa de uma e apenas uma instância de um objeto. Além disso, inicialização lenta e acesso global são necessários.

O padrão Singleton resolve dois problemas ao mesmo tempo:

  1. Certifica de que uma classe tenha apenas uma única instância . Por que alguém iria querer controlar quantas instâncias uma classe possui? O motivo mais comum para isso é controlar o acesso a algum recurso compartilhado — por exemplo, um banco de dados ou um arquivo.

  2. Forneçe um ponto de acesso global para essa instância. 

## Solução
Torne a classe do objeto de instância única responsável pela criação, inicialização, acesso e aplicação. Declare a instância como um membro de dados private static. Forneça uma função de membro public static que encapsule todo o código de inicialização e forneça acesso à instância.

O cliente chama o método usando o nome da classe e o método singleton sempre que uma referência à instância única é necessária.

## Implementação

<p align="center">
 <img src="https://miro.medium.com/v2/resize:fit:434/format:webp/1*Wjz_6pCvDHNDa-BI851dCw.png" width="200" />
 </p>

### Singleton
Essa é uma classe responsável por criar e manter sua própria instância exclusiva.

### Prós
 * Você pode ter certeza de que uma classe possui apenas uma única instância.
 * Você ganha um ponto de acesso global para essa instância.
 * O objeto singleton é inicializado somente quando solicitado pela primeira vez.

### Contras
  * Viola o princípio da responsabilidade única pois o padrão resolve dois problemas no momento.
  * O padrão requer tratamento especial em um ambiente multithread para que vários threads não criem um objeto singleton várias vezes.
  * Pode ser difícil testar o código do cliente do Singleton, porque muitas estruturas de teste dependem da herança ao produzir objetos simulados. Como o construtor da classe singleton é privado e a substituição de métodos estáticos é impossível na maioria das linguagens, você precisará pensar em uma maneira criativa de testar o seu singleton. Ou simplesmente não escreva os testes. Ou não use o padrão Singleton.