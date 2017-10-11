import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterGrade'
})
export class LetterGradePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    // 90 - 100 A
    // 80 - 89 B
    // 70 - 79 C
    // 60 - 69 D
    // <60 F
    
    if (value >= 0.90 ) return 'A';
    if (value >= 0.80 ) return 'B';
    if (value >= 0.70 ) return 'C';
    if (value >= 0.60 ) return 'D';
    return 'F';  
  }

}
