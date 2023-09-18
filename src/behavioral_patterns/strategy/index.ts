interface IStrategy {
  doAlgorithm(data: string[]): string[];
}

class Context {
  private _strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this._strategy = strategy;
  }

  set strategy(strategy: IStrategy) {
    this._strategy = strategy;
  }

  doSomeBusinessLogic() {
    console.log(
      "Context: Sorting data using the strategy (not sure how it'll do it)"
    );
    const result = this._strategy.doAlgorithm(["a", "b", "c", "d", "e"]);
    console.log(result.join(","));
  }
}

class ConcreteStrategyA implements IStrategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class ConcreteStrategyB implements IStrategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

function main() {
  const context = new Context(new ConcreteStrategyA());

  console.log("Client: Strategy is set to normal sorting.");
  context.doSomeBusinessLogic();

  console.log("");

  console.log("Client: Strategy is set to reverse sorting.");
  context.strategy = new ConcreteStrategyB();
  context.doSomeBusinessLogic();
}

main();
