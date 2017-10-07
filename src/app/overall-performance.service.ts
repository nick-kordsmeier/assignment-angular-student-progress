import { Injectable } from '@angular/core';

import { PerformanceRow } from './performance-row';

@Injectable()
export class OverallPerformanceService {

  constructor() { }

  overallPerformanceTable (points: number, pointsPossible: number): PerformanceRow {
    let overallDecimal = points / pointsPossible;

    let performanceRow = {
      points: points,
      pointsPossible: pointsPossible,
      overallDecimal: overallDecimal
    }

    return performanceRow;
  }

}
