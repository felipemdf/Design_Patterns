# Strategy

## Intenção
É um padrão de design comportamental que permite definir uma família de algoritmos, colocar cada um deles em uma classe separada e tornar seus objetos intercambiáveis.

## Problema
O problema principal que o strategy tenta resolver, é diminuir o acoplamento entre classes bases de classes derivadas, com isso ele acaba indo de encontro a um dos princípios do solid “principle open-closed”.

## Solução
Encapsule detalhes da interface em uma classe base e oculte detalhes da implementação em classes derivadas. Os clientss podem, então, se acoplar a uma interface e não precisam se modificados: com isso, nosso client não sofreria nenhum impacto quando o número de classes derivadas é alterado e nenhum impacto quando a implementação de uma classe derivada é alterada.

## Aplicabilidade
  * Existem várias estratégias para um determinado problema e os critérios de seleção de uma estratégia são definidos como um tempo de execução.
  * Muitas classes relacionadas diferem apenas em seus comportamentos.
  * As estratégias usam os dados aos quais o cliente não tem acesso.

## Implementação

<p align="center">
 <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*Zs9Al6Uw6yNYrK6E3u6ICg.png" width="200" />
 </p>

#### Context
Esta é uma classe que contém uma propriedade para manter a referência de um objeto de Estratégia. Esta propriedade será configurada em tempo de execução de acordo com o algoritmo necessário.

#### Strategy
Essa é uma interface usada pelo objeto Context para chamar o algoritmo definido por uma ConcreteStrategy.

#### ConcreteStrategy
Essas são classes que implementam a interface da strategy.

### Prós
 * Você pode trocar algoritmos usados ​​dentro de um objeto em tempo de execução.
 * Você pode isolar os detalhes de implementação de um algoritmo do código que o utiliza.
 * Você pode substituir herança por composição.
 * Princípio Aberto / Fechado . Você pode introduzir novas estratégias sem precisar alterar o contexto.

### Contras
 * Se você possui apenas alguns algoritmos e eles raramente mudam, não há motivo real para complicar demais o programa com novas classes e interfaces que acompanham o padrão.
 * Os clientes devem estar cientes das diferenças entre as estratégias para poder selecionar uma adequada.
 * Muitas linguagens de programação modernas têm suporte ao tipo funcional que permite implementar versões diferentes de um algoritmo dentro de um conjunto de funções anônimas. Então você poderia usar essas funções exatamente como usaria os objetos de estratégia, mas sem inchar seu código com classes e interfaces extras.