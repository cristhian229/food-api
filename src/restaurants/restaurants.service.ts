import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class RestaurantsService {
  private readonly googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}
  async getCoordinatesFromAddress(address: string): Promise<{ latitude: number, longitude: number }> {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${this.googleMapsApiKey}`;

    try {
        const response = await axios.get(url);
        if(response.data.status === 'ZERO_RESULTS')
            throw new NotFoundException(`No se encontró la latitud y longitud para la dirección: ${address}`);

        const {lat, lng} = response.data.results[0].geometry.location;
        return { 
          latitude: lat,
          longitude: lng 
        };


    } catch (error: any) {
      if (error.response.statusCode === 404) 
        throw new NotFoundException(error.message);
      
      throw new InternalServerErrorException(`No se pudo obtener la latitud y longitud para la dirección: ${address}`, error.message)
    
      }

}
  
}
