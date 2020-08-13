class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody');
    var paragraphElement = document.querySelector('p');
    tbody.textContent = null;

    if (grades.length === 0) {
      paragraphElement.classList.remove('d-none')
    } else {
      paragraphElement.classList.add('d-none')
    }

    for (var i = 0; i < grades.length; i++) {
      var tableRow = this.renderGradeRow(grades[i], this.deleteGrade);
      tbody.append(tableRow);
    }

  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var dataRow = document.createElement('tr');
    var nameCol = document.createElement('td');
    var courseCol = document.createElement('td');
    var gradeCol = document.createElement('td');
    var deleteHolder = document.createElement('td');
    var deleteBtn = document.createElement('button');

    nameCol.textContent = data.name;
    courseCol.textContent = data.course;
    gradeCol.textContent = data.grade;
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
      deleteGrade(data.id);
    })
    deleteBtn.setAttribute('class', 'btn btn-outline-danger')
    deleteHolder.append(deleteBtn);
    dataRow.append(nameCol, courseCol, gradeCol, deleteHolder)
    return dataRow;

  }
}
