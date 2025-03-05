import { Component } from '@angular/core';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent {
  lat!: number;
  lon!: number;
  dim: number = 0.10;
  date: string =new Date().toISOString().split('T')[0];
  earthImageUrl: string = '';

  constructor(private nasaService: NasaService) {}

  obtenerImagenTierra(){
    if (this.lat == null || this.lon == null) {
      alert('Por favor ingrese una latitud y longitud válidas.');
      return;
    }
  
    this.nasaService.getEarthImage(this.lat, this.lon, this.date,  this.dim,).subscribe((response: any) => {
      const imageUrl = URL.createObjectURL(response);
      this.earthImageUrl = imageUrl;
      console.log('Earth Image', this.earthImageUrl);
    });
  }

}
