class Gradeform {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    preventDefault(event);
    console.log('Hi');
    var formData = new FormData(event.target);
    var studentName = formData.get(name);
    var studentCourse = formData.get(course);
    var studentGrade = formData.get(grade);
    this.createGrade(studentName, studentCourse, studentGrade);
    this.reset(event.target);
  }
}
