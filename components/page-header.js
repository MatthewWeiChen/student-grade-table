class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    var headerBadge = this.headerElement.querySelector('.badge-secondary');
    headerBadge.textContent = newAverage;
    console.log(newAverage);
  }
}
