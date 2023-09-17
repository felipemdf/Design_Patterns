# Factory Method

## Intenção
Abstract Factory é um padrão de design criacional que permite produzir famílias de objetos relacionados sem especificar suas classes concretas.A ideia principal é:

  * Fornecer uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
  * Uma hierarquia que encapsula: muitas “plataformas” possíveis e a construção de um conjunto de “produtos”.

## Problema
Imagine que você está criando um simulador de loja de móveis. Seu código consiste em classes que representam:

Uma família de produtos relacionados, digamos: `Chair`+ `Sofa`+ `CoffeeTable`.
Várias variantes desta família. Por exemplo, produtos `Chair` + `Sofa` + `CoffeeTable` estão disponíveis nestas variantes: `Modern`, `Victorian`, `ArtDeco`.  

<p align="center">
 <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*6WQTIJboauMubCpq.png" width="200" />
 </p>

Você precisa de uma maneira de criar objetos de móveis individuais para que eles correspondam a outros objetos da mesma família. Além disso, você não deseja alterar o código existente ao adicionar novos produtos ou famílias de produtos ao programa.

## Solução
Forneça um nível de indireção que abstraia a criação de famílias de objetos relacionados ou dependentes sem especificar diretamente suas classes concretas. O objeto “factory” tem a responsabilidade de fornecer serviços de criação para toda a família. Os clientes nunca criam objetos diretamente, eles pedem à fábrica que faça isso por eles.

Esse mecanismo facilita a troca de produtos entre famílias, porque a classe específica do objeto factory aparece apenas uma vez no aplicativo — onde é instanciada. O aplicativo pode substituir de uma vez toda a família de produtos simplesmente instanciando uma instância concreta diferente da AbstractFactory.

Como o serviço fornecido pela factory é muito difundido, ele é implementado normalmente utilizando Singleton.

## Implementação

<p align="center">
 <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*2-CGHaGyFZ2i0gWVVV_D_Q.png" width="200" />
 </p>

#### AbstractFactory
Esta é uma interface usada para criar produtos abstratos

#### ConcreteFactory
Esta é uma classe que implementa a interface AbstractFactory para criar produtos concretos.

#### AbstractProduct
Esta é uma interface que declara um tipo de produto.

#### ConcreteProduct
Esta é uma classe que implementa a interface AbstractProduct para criar um produto

#### Client
Esta é uma classe que usa as interfaces AbstractFactory e AbstractProduct para criar uma família de objetos relacionados.

### Prós
 * Você pode ter certeza de que os produtos que você obtém de uma Factory são compatíveis entre si.
 * Você evita acoplamentos rígidos entre produtos e o código client.
 * Princípio de responsabilidade única. Você pode extrair o código de criação do produto em um único local, facilitando o suporte ao código.
 * Princípio Open/Closed . Você pode introduzir novas variantes de produtos sem quebrar o código client existente.

### Contras
  * O código pode se tornar mais complicado do que deveria ser, pois muitas novas interfaces e classes são introduzidas junto com o padrão.
 * Ao adicionar ou remover produtos é necessária a modificação da AbstractFactory, gerando um grande trabalho, pois deve-se modificar todas as implementações da Factory e o client que usa a AbstractFactory.