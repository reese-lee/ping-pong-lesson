import pingPong from './ping-pong';
import './styles.css';

$(document).ready(function() {
  console.log(pingPong);
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
