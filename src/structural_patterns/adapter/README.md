# Adapter

## Intenção
 * Converta a interface de uma classe em outra interface que os clientes esperam. O adapter permite que as classes trabalhem juntas que não poderiam de outra forma por causa de interfaces incompatíveis.
 * Agrupe uma classe existente com uma nova interface.
 * A impedância corresponde a um componente antigo a um novo sistema

## Problema
Imagine que você está criando um aplicativo de monitoramento do mercado de ações. O aplicativo baixa os dados de estoque de várias fontes no formato XML e exibe gráficos e diagramas de boa aparência para o usuário.

Em algum momento, você decide melhorar o aplicativo integrando uma biblioteca de análise inteligente de terceiros. Mas há um problema: a biblioteca de análise funciona apenas com dados no formato JSON.
Você não pode usar a biblioteca de análise “como está”, pois espera os dados em um formato incompatível com seu aplicativo.

Você pode alterar a biblioteca para trabalhar com XML. No entanto, isso pode quebrar algum código existente que depende da biblioteca. E pior, você pode não ter acesso ao código-fonte da biblioteca em primeiro lugar, tornando essa abordagem impossível.

## Solução
Você pode criar um adaptador. Ele é um objeto especial que converte a interface de um objeto para que outro objeto possa entendê-lo.
 * O adaptador obtém uma interface, compatível com um dos objetos existentes.
 * Usando essa interface, o objeto existente pode chamar os métodos do adaptador com segurança.
 * Ao receber a chamada, o adaptador passa o pedido para o segundo objeto, mas em um formato e ordem que o segundo objeto espera.

## Aplicabilidade
  * Utilize a classe Adaptador quando você quer usar uma classe existente, mas sua interface não for compatível com o resto do seu código.
  * Utilize o padrão quando você quer reutilizar diversas subclasses existentes que não possuam alguma funcionalidade comum que não pode ser adicionada a superclasse.
## Implementação

<p align="center">
 <img src="https://miro.medium.com/v2/resize:fit:750/format:webp/1*Vuh4YCFAJpOmT1v2nZrcHw.png" width="200" />
 </p>

#### ITarget
Essa é uma interface usada pelo cliente para atingir sua funcionalidade / solicitação.

#### Adapter
Esta é uma classe que implementa a interface ITarget e herda a classe Adaptee. É responsável pela comunicação entre o Client e o Adaptee.

#### Adaptee
Esta é uma classe que possui a funcionalidade exigida pelo Client. No entanto, sua interface não é compatível com o Client.

#### Client
Esta é uma classe que interage com um tipo que implementa a interface ITarget. No entanto, a classe de comunicação denominada Adaptee não é compatível com o Client.

### Prós
 * Princípio de responsabilidade única . Você pode separar a interface ou o código de conversão de dados da lógica de negócios principal do programa.
 * Princípio Aberto / Fechado . Você pode introduzir novos tipos de adaptadores no programa sem quebrar o código do cliente existente, desde que eles funcionem com os adaptadores por meio da interface do cliente.

### Contras
  * A complexidade geral do código aumenta porque você precisa introduzir um conjunto de novas interfaces e classes. Às vezes, é mais simples alterar a classe de serviço para que corresponda ao restante do seu código.