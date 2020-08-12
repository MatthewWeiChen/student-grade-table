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
}
