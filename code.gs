function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Import CSV')
    .addItem('Open File Upload Form', 'showFileUploadForm')
    .addToUi();
}

function showFileUploadForm() {
  var html = HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('File Upload to Google Drive')
    .setWidth(300);
  SpreadsheetApp.getUi().showModalDialog(html, 'File Upload Form');
}

function importCSV(data, selectedColumns) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var csvData = Utilities.parseCsv(data);

  if (!selectedColumns || selectedColumns.length === 0) {
    // If no columns are selected, import all columns
    sheet.getRange(sheet.getLastRow() + 1, 1, csvData.length, csvData[0].length).setValues(csvData);
  } 
  else {
    // Import selected columns
    var selectedData = csvData.map(function(row) {
      return row.filter(function(_, index) {
        return selectedColumns.indexOf(index) !== -1;
      });
    });

    sheet.getRange(sheet.getLastRow() + 1, 1, selectedData.length, selectedData[0].length).setValues(selectedData);
  }
}
