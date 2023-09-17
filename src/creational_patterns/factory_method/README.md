# Factory Method

## Intenção
Factory Method é um padrão de design criacional que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objeto que será criado.

## Problema
Imagine que você está criando um aplicativo de gerenciamento de logística. A primeira versão do seu aplicativo o único transporte utilizado é o de caminhões, portanto a maior parte do seu código fica dentro da classe Truck. Depois de um tempo, sua empresa cresce muito e se torna bastante popular. Então agora você precisa adicionar o transporte marítimo no aplicativo.

A adição Ship ao aplicativo exigiria alterações em toda a base de código, além disso, se mais tarde você decidir adicionar outro tipo de transporte ao aplicativo, provavelmente precisará fazer todas essas alterações novamente. Como resultado, você terá um código bastante acoplado, repleto de condicionais que alteram o comportamento do aplicativo, dependendo da classe de objetos de transporte.  

## Solução
O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos (usando o operador new) por chamadas para sua Factory Method. Objetos retornados por um Factory Method geralmente são chamados de "products".

À primeira vista, essa mudança pode parecer inútil: acabamos de mover a chamada do construtor de uma parte do programa para outra. No entanto, considere o seguinte: agora você pode substituir o Factory Method em uma subclasse e alterar a classe de produtos que estão sendo criados pelo método.

Porém, há uma pequena limitação: as subclasses podem retornar tipos diferentes de produtos somente se esses produtos tiverem uma classe ou interface básica comum. Além disso, o Factory Method na classe base deve ter seu tipo de retorno declarado como essa interface.

## Implementação

<p align="center">
 <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*nmqgqoebsWe9pNk82789dg.png" width="200" />
 </p>

#### Product
Esta é uma interface para criar os objetos.

#### ConcreteProduct
Esta é uma classe que implementa a interface do produto.

#### Creator
Esta é uma classe abstrata e declara o método factory, que retorna um objeto do tipo Product.

#### ConcreteCreator
Esta é uma classe que implementa a classe Creator e substitui o método factory para retornar uma instância de um ConcreteProduct.

### Prós
 * Você evita um acoplamento rígido entre o criador e os produtos de concreto.
 * Princípio de responsabilidade única (single responsability) . Você pode mover o código de criação do produto para um local do programa, facilitando o suporte ao código.
 * Princípio Open/Closed . Você pode introduzir novos tipos de produtos no programa sem quebrar o código do cliente existente.

### Contras
  * O código pode se tornar mais complicado, pois você precisa introduzir muitas subclasses novas para implementar o padrão.