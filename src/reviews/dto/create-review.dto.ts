import { IsDivisibleBy, IsNumber, Max, Min } from "class-validator";

export class CreateReviewDto {

    @IsNumber({ maxDecimalPlaces: 1 }) // Permite solo un decimal
    @Min(0)
    @Max(5)
    @IsDivisibleBy(0.5) // Múltiplos de 0.5
    rating: number;

    
}
