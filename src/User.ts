import { Mapable } from './customap';
import faker from 'faker';


export class User implements Mapable{
    name: string;
    images: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.name.firstName();
        this.images = faker.image.imageUrl()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }

        
    
}
  content():string{
    
    return `
      <h4> user name : ${this.name}</h4>
      <img src="${this.images}" style="width:70px;height: 70px;" alt="" srcset="">
        `
    }   
}