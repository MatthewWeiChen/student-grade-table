class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var i = 0, sum = 0, length = grades.length;
    while (i < length) {
      sum = sum + grades[i++].grade;
    }
    this.pageHeader.updateAverage(sum / length);
    console.log(grades);
  }
  getGrades() {
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "h0QMbjBH" },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })

  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);

  }



  createGrade(studentName, studentCourse, studentGrade) {
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": studentName,
        "course": studentCourse,
        "grade": studentGrade
      },
      headers: { "X-Access-Token": "h0QMbjBH" },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
    })
    console.log(studentName, studentCourse, studentGrade);
  }
  handleCreateGradeError(error) {
    console.error(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }
}
