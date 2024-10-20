import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js'; // Correct imports
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-progress-tracker',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './progress-tracker.component.html',
  styleUrl: './progress-tracker.component.css',
})
export class ProgressTrackerComponent {
  // Labels for the line chart
  lineChartLabels: string[] = [];

  // Existing sustainability progress goal and current progress
  // goal: number = 100;
  // progress: number = 40; // Current progress (in number of actions completed)
  // progressHistory: number[] = [10, 20, 30, 40]; // History of progress over time

  // // Number of trees planted and water reduction over time
  // treesPlanted: number[] = [5, 10, 15, 20];
  // waterReduction: number[] = [50, 100, 150, 200];

  // // New topics (electric usage, recycle waste, water usage, and CO2 emission)
  // electricUsage: number[] = [30, 60, 90, 120]; // Electric usage in kWh
  // recycleWaste: number[] = [5, 15, 25, 35]; // Recycled waste in kg
  // co2Emissions: number[] = [100, 200, 300, 400]; // CO2 emissions in kg

  // // Chart data for Progress Over Time
  // public progressData = [
  //   {
  //     name: 'Progress Over Time',
  //     series: [
  //       { name: 'Day 1', value: 10 },
  //       { name: 'Day 2', value: 20 },
  //       { name: 'Day 3', value: 30 },
  //       { name: 'Day 4', value: 40 },
  //     ],
  //   },
  // ];

  // // Chart data for Trees Planted Over Time
  // public treeData = [
  //   {
  //     name: 'Trees Planted',
  //     series: [
  //       { name: 'Day 1', value: 5 },
  //       { name: 'Day 2', value: 10 },
  //       { name: 'Day 3', value: 15 },
  //       { name: 'Day 4', value: 20 },
  //     ],
  //   },
  // ];

  // // Chart data for Water Usage Reduction Over Time
  // public waterData = [
  //   {
  //     name: 'Water Usage Reduction',
  //     series: [
  //       { name: 'Day 1', value: 50 },
  //       { name: 'Day 2', value: 100 },
  //       { name: 'Day 3', value: 150 },
  //       { name: 'Day 4', value: 200 },
  //     ],
  //   },
  // ];

  // // New chart data for electric usage
  // public electricUsageData = [
  //   {
  //     name: 'Electric Usage (kWh)',
  //     series: [
  //       { name: 'Day 1', value: 30 },
  //       { name: 'Day 2', value: 60 },
  //       { name: 'Day 3', value: 90 },
  //       { name: 'Day 4', value: 120 },
  //     ],
  //   },
  // ];

  // // New chart data for recycled waste
  // public recycleWasteData = [
  //   {
  //     name: 'Recycled Waste (kg)',
  //     series: [
  //       { name: 'Day 1', value: 5 },
  //       { name: 'Day 2', value: 15 },
  //       { name: 'Day 3', value: 25 },
  //       { name: 'Day 4', value: 35 },
  //     ],
  //   },
  // ];

  // // New chart data for CO2 emissions
  // public co2EmissionsData = [
  //   {
  //     name: 'CO2 Emissions (kg)',
  //     series: [
  //       { name: 'Day 1', value: 100 },
  //       { name: 'Day 2', value: 200 },
  //       { name: 'Day 3', value: 300 },
  //       { name: 'Day 4', value: 400 },
  //     ],
  //   },
  // ];

  // // Method to calculate the progress percentage
  // getProgressPercentage() {
  //   return (this.progress / this.goal) * 100;
  // }

  // // Increment sustainability progress
  // incrementProgress(amount: number) {
  //   if (this.progress + amount <= this.goal) {
  //     this.progress += amount;
  //     this.progressHistory.push(this.progress);
  //     this.lineChartLabels.push(`Day ${this.progressHistory.length}`);
  //   }
  // }

  // // Increment trees planted
  // incrementTreesPlanted(amount: number) {
  //   const lastValue = this.treesPlanted[this.treesPlanted.length - 1];
  //   this.treesPlanted.push(lastValue + amount);
  //   this.lineChartLabels.push(`Day ${this.treesPlanted.length}`);
  // }

  // // Increment water reduction
  // incrementWaterReduction(amount: number) {
  //   const lastValue = this.waterReduction[this.waterReduction.length - 1];
  //   this.waterReduction.push(lastValue + amount);
  //   this.lineChartLabels.push(`Day ${this.waterReduction.length}`);
  // }

  // // Increment electric usage
  // incrementElectricUsage(amount: number) {
  //   const lastValue = this.electricUsage[this.electricUsage.length - 1];
  //   this.electricUsage.push(lastValue + amount);
  //   this.lineChartLabels.push(`Day ${this.electricUsage.length}`);
  // }

  // // Increment recycled waste
  // incrementRecycleWaste(amount: number) {
  //   const lastValue = this.recycleWaste[this.recycleWaste.length - 1];
  //   this.recycleWaste.push(lastValue + amount);
  //   this.lineChartLabels.push(`Day ${this.recycleWaste.length}`);
  // }

  // // Increment CO2 emissions
  // incrementCO2Emissions(amount: number) {
  //   const lastValue = this.co2Emissions[this.co2Emissions.length - 1];
  //   this.co2Emissions.push(lastValue + amount);
  //   this.lineChartLabels.push(`Day ${this.co2Emissions.length}`);
  // }

  goal: number = 100;
  progress: number = 40;
  progressHistory: number[] = [10, 20, 30, 40];

  // Existing sustainability progress topics
  treesPlanted: number[] = [5, 10, 15, 20]; // Number of trees planted over time
  waterReduction: number[] = [50, 100, 150, 200]; // Water usage reduction in liters
  electricUsage: number[] = [30, 60, 90, 120]; // Electric usage in kWh
  recycleWaste: number[] = [5, 15, 25, 35]; // Recycled waste in kg
  co2Emissions: number[] = [100, 200, 300, 400]; // CO2 emissions in kg

  // Chart data for Trees Planted Over Time
  public treeData = [
    {
      name: 'Trees Planted',
      series: [
        { name: 'Day 1', value: 5 },
        { name: 'Day 2', value: 10 },
        { name: 'Day 3', value: 15 },
        { name: 'Day 4', value: 20 },
      ],
    },
  ];

  // Chart data for Water Usage Reduction Over Time
  public waterData = [
    {
      name: 'Water Usage Reduction',
      series: [
        { name: 'Day 1', value: 50 },
        { name: 'Day 2', value: 100 },
        { name: 'Day 3', value: 150 },
        { name: 'Day 4', value: 200 },
      ],
    },
  ];

  // New chart data for electric usage
  public electricUsageData = [
    {
      name: 'Electric Usage (kWh)',
      series: [
        { name: 'Day 1', value: 30 },
        { name: 'Day 2', value: 60 },
        { name: 'Day 3', value: 90 },
        { name: 'Day 4', value: 120 },
      ],
    },
  ];

  // New chart data for recycled waste
  public recycleWasteData = [
    {
      name: 'Recycled Waste (kg)',
      series: [
        { name: 'Day 1', value: 5 },
        { name: 'Day 2', value: 15 },
        { name: 'Day 3', value: 25 },
        { name: 'Day 4', value: 35 },
      ],
    },
  ];

  // New chart data for CO2 emissions
  public co2EmissionsData = [
    {
      name: 'CO2 Emissions (kg)',
      series: [
        { name: 'Day 1', value: 100 },
        { name: 'Day 2', value: 200 },
        { name: 'Day 3', value: 300 },
        { name: 'Day 4', value: 400 },
      ],
    },
  ];

  // Method to calculate the progress percentage
  getProgressPercentage() {
    return (this.progress / this.goal) * 100;
  }

  // Increment sustainability progress
  incrementProgress(amount: number) {
    if (this.progress + amount <= this.goal) {
      this.progress += amount;
      this.progressHistory.push(this.progress);
    }
  }

  // Increment trees planted
  incrementTreesPlanted(amount: number) {
    const lastValue = this.treesPlanted[this.treesPlanted.length - 1];
    this.treesPlanted.push(lastValue + amount);
    this.treeData[0].series.push({
      name: `Day ${this.treesPlanted.length}`,
      value: lastValue + amount,
    });
  }

  // Increment water reduction
  incrementWaterReduction(amount: number) {
    const lastValue = this.waterReduction[this.waterReduction.length - 1];
    this.waterReduction.push(lastValue + amount);
    this.waterData[0].series.push({
      name: `Day ${this.waterReduction.length}`,
      value: lastValue + amount,
    });
  }

  // Increment electric usage
  incrementElectricUsage(amount: number) {
    const lastValue = this.electricUsage[this.electricUsage.length - 1];
    this.electricUsage.push(lastValue + amount);
    this.electricUsageData[0].series.push({
      name: `Day ${this.electricUsage.length}`,
      value: lastValue + amount,
    });
  }

  // Increment recycled waste
  incrementRecycleWaste(amount: number) {
    const lastValue = this.recycleWaste[this.recycleWaste.length - 1];
    this.recycleWaste.push(lastValue + amount);
    this.recycleWasteData[0].series.push({
      name: `Day ${this.recycleWaste.length}`,
      value: lastValue + amount,
    });
  }

  // Increment CO2 emissions
  incrementCO2Emissions(amount: number) {
    const lastValue = this.co2Emissions[this.co2Emissions.length - 1];
    this.co2Emissions.push(lastValue + amount);
    this.co2EmissionsData[0].series.push({
      name: `Day ${this.co2Emissions.length}`,
      value: lastValue + amount,
    });
  }
}