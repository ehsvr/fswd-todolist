import $ from 'jquery';
import {
  indexTasks,
  postTask,
  getAllTasks,
  deleteOneTask,
  markTasksAsCompleted,
  markTaskAsActive
} from "./requests.js";
$(document).ready(function() {
    console.log("Document Ready");
indexTasks(function (response) {
    console.log("All tasks: ", response);
    
  var htmlString = response.tasks.map(function(task) {
    return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
      " + task.content + "\
      </div>";
  });
  $("#tasks").html(htmlString);
});
});