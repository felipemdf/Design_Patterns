interface Bike {
  getName(): string;
}
interface Scooter {
  getName(): string;
}

class RegularBike implements Bike {
  constructor(private brand: string) {}
  getName(): string {
    return `${this.brand} Regular Bike- Name`;
  }
}

class SportBike implements Bike {
  constructor(private brand: string) {}
  getName(): string {
    return `${this.brand} Sport Bike- Name`;
  }
}

class RegularScooter implements Scooter {
  constructor(private brand: string) {}
  getName(): string {
    return `${this.brand} Regular Scooter- Name`;
  }
}

class Scooty implements Scooter {
  constructor(private brand: string) {}
  getName(): string {
    return `${this.brand} Scooty- Name`;
  }
}

interface VehicleFactory {
  getBike(bike: string): Bike;
  getScooter(scooter: string): Scooter;
}

class HondaFactory implements VehicleFactory {
  getBike(bike: string): Bike {
    switch (bike) {
      case "Sport":
        return new SportBike("Honda");
      case "Regular":
        return new RegularBike("Honda");
      default:
        throw new Error(`Vehicle ${bike} cannot be created`);
    }
  }
  getScooter(scooter: string): Scooter {
    switch (scooter) {
      case "Sport":
        return new Scooty("Honda");
      case "Regular":
        return new RegularScooter("Honda");
      default:
        throw new Error(`Vehicle ${scooter} cannot be created`);
    }
  }
}
class SuzukiFactory implements VehicleFactory {
  getBike(bike: string): Bike {
    switch (bike) {
      case "Sport":
        return new SportBike("Suzuki");
      case "Regular":
        return new RegularBike("Suzuki");
      default:
        throw new Error(`Vehicle ${bike} cannot be created`);
    }
  }
  getScooter(scooter: string): Scooter {
    switch (scooter) {
      case "Sport":
        return new Scooty("Suzuki");
      case "Regular":
        return new RegularScooter("Suzuki");
      default:
        throw new Error(`Vehicle ${scooter} cannot be created`);
    }
  }
}

class VehicleClient {
  bike: Bike;
  scooter: Scooter;

  constructor(factory: VehicleFactory, type: string) {
    this.bike = factory.getBike(type);
    this.scooter = factory.getScooter(type);
  }

  getBikeName() {
    return this.bike.getName();
  }

  getScooterName() {
    return this.scooter.getName();
  }
}

export function main() {
  const hondaFactory: HondaFactory = new HondaFactory();
  let client: VehicleClient = new VehicleClient(hondaFactory, "Regular");

  console.log("========= HONDA ==============");
  console.log(client.getBikeName());
  console.log(client.getScooterName());

  client = new VehicleClient(hondaFactory, "Sport");

  console.log(client.getBikeName());
  console.log(client.getScooterName());

  const suzukiFactory: SuzukiFactory = new SuzukiFactory();
  client = new VehicleClient(suzukiFactory, "Sport");

  console.log("========= SUZUKI ==============");
  console.log(client.getBikeName());
  console.log(client.getScooterName());

  client = new VehicleClient(suzukiFactory, "Sport");

  console.log(client.getBikeName());
  console.log(client.getScooterName());
}

main();
