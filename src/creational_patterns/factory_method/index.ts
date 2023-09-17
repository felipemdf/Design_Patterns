interface IFactory {
  drive(miles: number): void;
}

class Bike implements IFactory {
  drive(miles: number): void {
    console.log(`Drive the Bike : ${miles} km`);
  }
}

class Scooter implements IFactory {
  drive(miles: number): void {
    console.log(`Drive the Scooter : ${miles} km`);
  }
}

abstract class VehicleFactory {
  public abstract GetVehicle(vehicle: string): IFactory;
}

class ConcreteVehiculeFactory extends VehicleFactory {
  public override GetVehicle(vehicle: string): IFactory {
    switch (vehicle) {
      case "Scooter":
        return new Scooter();
      case "Bike":
        return new Bike();
      default:
        throw new Error(`Vehicle ${vehicle} cannot be created`);
    }
  }
}

export function main() {
  const factory: VehicleFactory = new ConcreteVehiculeFactory();

  const scooter: IFactory = factory.GetVehicle("Scooter");
  scooter.drive(10);

  const bike: IFactory = factory.GetVehicle("Bike");
  bike.drive(5);
}

main();
