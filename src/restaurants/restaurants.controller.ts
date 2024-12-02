import { Controller, Post, Body  } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';



@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post('get-coordinates')
  async getCoordinates(@Body('address') address: string) {
    return this.restaurantsService.getCoordinatesFromAddress(address);
  }

  
}
