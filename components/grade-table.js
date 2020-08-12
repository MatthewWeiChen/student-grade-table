class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = null;
    for (var i = 0; i < grades.length; i++) {
      var row = document.createElement('tr');
      var col1 = document.createElement('td');
      col1.textContent = grades[i].name;
      var col2 = document.createElement('td');
      col2.textContent = grades[i].course;
      var col3 = document.createElement('td');
      col3.textContent = grades[i].grade;
      row.append(col1);
      row.append(col2);
      row.append(col3);
      tbody.append(row);
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var tbody = this.tableElement.querySelector('tbody');
    for (var i = 0; i < data.length; i++) {
      var dataRow = document.createElement('tr');
      var nameCol = document.createElement('td');
      nameCol.textContent = data[i].name;
      var courseCol = document.createElement('td');
      courseCol.textContent = data[i].course;
      var gradeCol = document.createElement('td');
      gradeCol.textContent = data[i].grade;
      var deleteHolder = document.createElement('td');
      var deleteBtn = document.createElement('button');
      deleteBtn.addEventListener('click', function () {
        deleteGrade(data.id);
      })
      deleteHolder.append(deleteBtn);
      dataRow.append(nameCol);
      dataRow.append(courseCol);
      dataRow.append(gradeCol);
      dataRow.append(deleteHolder);
      tbody.append(dataRow);
    }
  }
}
