var tableSelect = document.querySelector('.table');
var paragraphSelect = document.querySelector('p');
var table = new GradeTable(tableSelect, paragraphSelect);
var headerSelect = document.querySelector('header');
var pageHeader = new PageHeader(headerSelect);
var formSelect = document.querySelector('.form-collection');
var form = new Gradeform(formSelect);
var app = new App(table, pageHeader, form);
app.start();
