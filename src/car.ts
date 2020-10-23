import faker from 'faker';
import { Mapable } from './customap';
export class Car implements Mapable{
    name: string;
    images: string;
    manuf: string;
    type: string;
    vin: string;
    vehicle: string;
    fuel: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.vehicle.model();
        this.images= faker.image.imageUrl();
        this.manuf = faker.vehicle.manufacturer();
        this.type = faker.vehicle.type();
        this.vin = faker.vehicle.vin();
        this.vehicle = faker.vehicle.vehicle();
        this.fuel = faker.vehicle.fuel();


        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }

        
    
}
  content():string{
    return`
      <h4> user name : ${this.name}</h4>
      <img src="${this.images}" style="width:70px;height: 70px;" alt="" srcset="">
      <h5>${this.manuf}</h5>
        <h5>${this.type}</h5>
     <h5>${this.vin}</h5>
<h5>${this.vehicle}</h5>
<h5>${this.fuel}</h5>
        `
    }   
}