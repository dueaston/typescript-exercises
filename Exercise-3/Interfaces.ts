//typescriptCopy code
interface Vehicle {
    brand: string;
    speed: number;
    
    accelerate(): void;
    brake (): void; //Added the "brake" method
}

const car: Vehicle = {
    brand: "Toyota",
    speed: 120,
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    }
    brake(): void {
      console.log(`The ${this.brand} is braking`);
}

car.accelerate();
car.brake(); 