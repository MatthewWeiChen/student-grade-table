var tableSelect = document.querySelector('.table');
var table = new GradeTable(tableSelect);
var headerSelect = document.querySelector('header');
var pageHeader = new PageHeader(headerSelect);
var app = new App(table, pageHeader);
app.start();
