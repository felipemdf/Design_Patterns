# Observer

## Intenção
É um padrão de design comportamental que permite definir um mecanismo de assinatura para notificar vários objetos sobre quaisquer eventos que ocorram no objeto que estão observando.

## Problema
Um grande projeto monolítico não se adapta bem à medida que novos requisitos de gráficos ou monitoramento são cobrados.

## Solução
Defina um objeto que seja o “guardião” do modelo de dados e / ou lógica de negócios (Subject). Delegue todas as funcionalidades de “ view” a objetos Observer dissociados e distintos. Os observers se registram no Subject à medida que são criados. Sempre que o Subject muda, transmite a todos os Observers registrados que ele mudou, e cada Observer consulta o Subject pelo subconjunto do estado do Subject que é responsável pelo monitoramento.

Isso permite que o número e o “type” de objetos “view” sejam configurados dinamicamente, em vez de serem especificados estaticamente em tempo de compilação.

## Aplicabilidade
  * Utilize o padrão Observer quando mudanças no estado de um objeto podem precisar mudar outros objetos, e o atual conjunto de objetos é desconhecido de antemão ou muda dinamicamente.

  * Utilize o padrão quando alguns objetos em sua aplicação devem observar outros, mas apenas por um tempo limitado ou em casos específicos.

## Implementação

<p align="center">
 <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*e_vw8hK3zNgLE2QB96DTFQ.png" width="200" />
 </p>

#### Subject
Esta é uma classe que contém uma coleção particular de observadores inscritos em um assunto para notificação usando a operação Notify.

#### ConcreteSubject
Esta é uma classe que mantém seu próprio estado. Quando uma alteração é feita em seu estado, o objeto chama a operação Notify da classe base para indicar isso a todos os seus observadores.

#### Observer
Essa é uma interface que define uma operação Update, que deve ser chamada quando o estado do sujeito mudar.

#### ConcreteObserver
Esta é uma classe que implementa a interface do Observador e examina o assunto para determinar quais informações foram alteradas.

### Prós
 * Princípio Aberto / Fechado . Você pode introduzir novas classes de assinantes sem precisar alterar o código do editor (e vice-versa, se houver uma interface do editor).
 * Você pode estabelecer relações entre objetos em tempo de execução.

### Contras
  * Os assinantes são notificados em ordem aleatória.