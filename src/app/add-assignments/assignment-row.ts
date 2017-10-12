export class AssignmentRow {
    constructor(public assignmentName: string,
    public scoredPoints: number,
    public pointsPossible: number) {}

    public assignmentDecimal: number = this.scoredPoints / this.pointsPossible;
}
