class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) Singleton.instance = new Singleton();

    return Singleton.instance;
  }
}

function main() {
  const instance_1 = Singleton.getInstance();
  const instance_2 = Singleton.getInstance();

  if (instance_1 === instance_2)
    console.log("Singleton works, both variables contain the same instance.");
  else console.log("Singleton failed, variables contain different instances.");
}

main();
