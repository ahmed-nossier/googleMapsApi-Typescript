import { Company } from './Company';
import { User } from './User';

 export interface Mapable{
     name: string;
     location: {
         lat: number;
         lng: number;
     };

     content(): string;

}



export class CustoMap{
   private googleMap: google.maps.Map;
    constructor(divId:string) {
     this.googleMap=new google.maps.Map(document.getElementById(divId), {
    zoom: 2,
    center: {
        lat: 0,
        lng:0
    }
     });
        



    }
    addMarker(mapable: Mapable): void {
       const marker= new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mapable.location.lat,
                lng: mapable.location.lng
           },icon: 'https://cdn2.iconfinder.com/data/icons/iconslandtransport/PNG/64x64/CabrioletRed.png'
       });
         const infowindow = new google.maps.InfoWindow({
             content: mapable.content();
  });
        marker.addListener('click', () => {
            infowindow.open(this.googleMap, marker);

        })

}
   /* addCompanyMarker(company: Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: company.location.lat,
                lng: company.location.lng
            }
        });
    

}
*/

}