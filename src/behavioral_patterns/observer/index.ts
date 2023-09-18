interface ISubject {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
}

interface IObserver {
  update(subject: ISubject): void;
}

// Publisher
class Subject implements ISubject {
  private _state: number = -0;
  private _observers: Array<IObserver> = new Array<IObserver>();

  get state(): number {
    return this._state;
  }

  set state(value: number) {
    this._state = value;
  }

  attach(observer: IObserver): void {
    console.log(`Subject: Attached an observer.`);
    this._observers.push(observer);
  }

  detach(observer: IObserver): void {
    console.log(`Subject: Detached an observer.`);
    this._observers = this._observers.filter((obj) => obj !== observer);
  }
  notify(): void {
    console.log(`Subject: Notifying observers...`);
    this._observers.forEach((observer) => {
      observer.update(this);
    });
  }

  someBusinessLogic() {
    console.log(`\nSubject: I'm doing something important.`);
    this.state = Math.floor(Math.random() * 10) + 1;
    console.log(`Subject: My state has just changed to: ${this.state}"`);

    this.notify();
  }
}

//Subscriver
class ConcreteObserverA implements IObserver {
  update(subject: ISubject): void {
    if((subject as Subject).state < 3)
      console.log(`ConcreteObserverA: Reacted to the event.`); 
  }
}

//Subscriver
class ConcreteObserverB implements IObserver {
  update(subject: ISubject): void {
    if((subject as Subject).state == 0 || (subject as Subject).state > 2)
      console.log(`ConcreteObserverB: Reacted to the event.`); 
  }
}

export function main () {
  const subject = new Subject();
  
  const observerA = new ConcreteObserverA();
  subject.attach(observerA);
  
  const observerB = new ConcreteObserverB();
  subject.attach(observerB);

  subject.someBusinessLogic();
  
  subject.detach(observerB)
  subject.someBusinessLogic();


}

main();