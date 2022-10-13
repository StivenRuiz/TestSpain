import { Component } from '@angular/core';
import {
  circleMarker,
  geoJSON,
  GeoJSONOptions,
  LatLng,
  LatLngBounds,
  Layer,
  Map,
  MapOptions,
  tileLayer,
  TileLayer,
} from 'leaflet';
import { Luminaria } from './models/luminaria.model';
import { LuminariesService } from './services/luminaries.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public map!: Map;

  public mapOptions: MapOptions = {
    zoom: 17,
    zoomControl: false,
    center: [40.395347, -3.694041],
    preferCanvas: true,
  };

  public baseLayer: TileLayer;

  public mapFitBounds: LatLngBounds = new LatLngBounds([
    [37.50547228, -4.22810257],
    [37.70590845000001, -3.98959274],
  ]);

  public constructor(public luminariesService: LuminariesService) {
    this.baseLayer = tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        crossOrigin: 'anonymous',
        className: 'OSM',
        maxNativeZoom: 19,
        maxZoom: 22,
        minZoom: 5,
      }
    );
  }

  public onMapReady(map: Map): void {
    this.map = map;
    this.addLuminairesLayer();
  }

  private async addLuminairesLayer(): Promise<void> {
    const luminaires = await (
      await fetch('assets/data/luminarias.geojson')
    ).json();

    const options: GeoJSONOptions = {
      pointToLayer: (feature: GeoJSON.Feature, latLng: LatLng) =>
        circleMarker(latLng),
      style: (feature) => ({
        radius: 8,
        color: '#333',
        fillColor: '#FFFA4D',
        weight: 1,
        opacity: 1,
        fillOpacity: 1,
      }),
    };

    let l = geoJSON(luminaires, options)
      .bindPopup('Hi There!')
      .on('click', (event) => this.valida(event))
      .addTo(this.map);
  }

  valida(event: any): void {
    console.log(event);
    event.layer.options.fillColor = '#78FF00';
    event.layer.options.color = '#FF2D00';
    const {
      layer: {
        feature: { properties: data },
      },
    } = event;
    if (data.id_luminaria) {
      let luminaria = new Luminaria();
      luminaria = data;
      this.luminariesService.setLuminaries(luminaria);
      this.luminariesService.setValidLuminaries(true);
    }

    this.map.setView(event.latlng, 18, {
      animate: false,
      duration: 0.5,
      easeLinearity: 0.6,
      noMoveStart: true,
    });
  }

  mapClicked($event: any) {
    // this.map.fitBounds($event.layer.getBounds());
    console.log($event);
  }
}
