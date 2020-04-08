// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
})

function makeGrid(x, y) {
  $('tr').remove();

  // Your code goes here!
  for (var c = 1; c <= x; c++) {
    $('#pixelCanvas').append('<tr id=table' + c + '></tr>');
    for (var t = 1; t <=y; t++) {
      $('#table' + c).append('<td></td>');
      }
  }

  // add color to cell
  $('td').click(function addColor() {
    color = $('#colorPicker').val();

    if ($(this).attr('style')) {
        $(this).removeAttr('style')
    } else {
        $(this).attr('style', 'background-color:' + color);
    }
  })
}
