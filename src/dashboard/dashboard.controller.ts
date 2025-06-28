import { Controller, Get } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";

// dashboard.controller.ts
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('stats')
  getStats() {
    return this.dashboardService.getStats();
  }

  @Get('wateringCoverage')
  getWateringCoverage() {
    return this.dashboardService.getWateringCoverage();
  }
}