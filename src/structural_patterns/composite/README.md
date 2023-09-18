# Composite

## Intenção
 Composite é um padrão de design estrutural que permite compor objetos em estruturas de árvores e trabalhar com essas estruturas como se fossem objetos individuais. Com ele você pode:

 * Compor objetos em estruturas de árvore para representar hierarquias de peças inteiras. Composite permite que os clientes tratem objetos individuais e composições de objetos de maneira uniforme.
 * Composição recursiva
 * “Diretórios contêm entradas, cada uma das quais poderia ser um diretório.”
 * 1-para-muitos “tem uma hierarquia” acima da “é uma”

## Problema
O aplicativo precisa manipular uma coleção hierárquica de objetos “primitivos” e “compostos”. O processamento de um objeto primitivo é tratado de uma maneira, e o processamento de um objeto composto é tratado de maneira diferente. Ter que consultar o “tipo” de cada objeto antes de tentar processá-lo não é desejável.

## Solução
O padrão composite compõe objetos em termos de uma estrutura em árvore para representar partes e hierarquias inteiras.
A chave para o padrão composite é uma classe abstrata que representa tanto o objeto primitivo como os seus recipientes.

## Aplicabilidade
  * Utilize o padrão Composite quando você tem que implementar uma estrutura de objetos tipo árvore.
  * Utilize o padrão quando você quer que o código cliente trate tanto os objetos simples como os compostos de forma uniforme.
  
## Implementação

<p align="center">
 <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*moNxfcnPzJ99LrtUmpGWog.png" width="200" />
 </p>

#### Component
Esta é uma classe abstrata que contém membros que serão implementados por todos os objetos na hierarquia. Ele atua como a classe base para todos os objetos dentro da hierarquia

#### Leaf
Esta é uma classe usada para definir componentes de folhas na estrutura da árvore, pois estes não podem ter filhos.

#### Composite
Esta é uma classe que inclui os métodos Adicionar, Remover, Localizar e Obter para executar operações em componentes filhos.

### Prós
 * Você pode trabalhar com estruturas de árvores complexas de maneira mais conveniente: use polimorfismo e recursão a seu favor.
 * Princípio Aberto/Fechado . Você pode introduzir novos tipos de elementos no aplicativo sem quebrar o código existente, que agora funciona com a árvore de objetos.

### Contras
  * Pode ser difícil fornecer uma interface comum para classes cuja funcionalidade difere demais. Em certos cenários, você precisaria generalizar demais a interface do componente, dificultando a compreensão.