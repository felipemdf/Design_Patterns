abstract class Component {
  protected _parent!: Component | null;

  get parent(): Component | null {
    return this._parent;
  }
  set parent(value: Component | null) {
    this._parent = value;
  }

  public add(component: Component): void {}
  public remove(component: Component): void {}
  public isComposite(): boolean {
    return false;
  }
  public abstract operation(): string;
}

class Leaf extends Component {
  public operation(): string {
    return "Leaf";
  }
}

class Composite extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
    component.parent = this;
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.parent = null;
  }

  public isComposite(): boolean {
    return true;
  }

  public operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join("+")})`;
  }
}

class Client {
  private _component!: Component;

  set component(value: Component) {
    this._component = value;
  }

  execute(): void {
    console.log(`RESULT: ${this._component.operation()}`);
  }
}

export function main() {
  const client: Client = new Client();

  /**
   * This way the client code can support the simple leaf components...
   */
  client.component = new Leaf();
  console.log("Client: I've got a simple component:");
  client.execute();
  console.log("");

  /**
   * ...as well as the complex composites.
   */
  const branch1 = new Composite();
  branch1.add(new Leaf());
  branch1.add(new Leaf());

  const branch2 = new Composite();
  branch2.add(new Leaf());

  const tree = new Composite();
  tree.add(branch1);
  tree.add(branch2);

  
  client.component = tree;
  console.log("Client: Now I've got a composite tree:");
  client.execute();
  console.log("");
}

main();
