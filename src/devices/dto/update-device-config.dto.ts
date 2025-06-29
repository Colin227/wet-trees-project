import { IsBoolean, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class UpdateDeviceConfigDto {
  @IsOptional()
  @IsNumber()
  @Min(10)
  reportIntervalSeconds?: number;

//   @IsOptional()
//   @IsNumber()
//   @Min(0)
//   @Max(100)
//   moistureThreshold?: number;

  @IsOptional()
  @IsBoolean()
  debugMode?: boolean;

//   @IsOptional()
//   @IsNumber()
//   moistureCalibration?: number;

//   @IsOptional()
//   @IsNumber()
//   @Min(2.5)
//   lowBatteryThreshold?: number;
}
