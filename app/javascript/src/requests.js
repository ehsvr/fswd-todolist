import $ from 'jquery';
$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

export var indexTasks = function (successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: successCB,
    error: errorCB
  }
  $.ajax(request);
};

export var postTask = function (content, successCB, errorCB) {
  var request = {
    type: 'POST',
    url: 'api/tasks?api_key=1',
    data: {
      task: {
        content: content
      }
    },
    success: successCB,
    error: errorCB
  }
  $.ajax(request);
};

export function request() {
  this.type = '';
  this.url = '';
  this.data = {};
  this.dataType = 'json';
  this.success = function (response) {};
  this.error = function (response) {};
}

//---------------- Delete a Task by ID ----------------

export function deleteOneTask(id, successCB, errorCB) {
  var request = {
  type: 'DELETE',
  url: 'api/tasks/' + id + '?api_key=1',
  success: successCB,
  error: errorCB
  }
  $.ajax(request);
};

//--------------- Mark a Task as Completed by ID --------------

export function markTaskAsComplete(id, successCB, errorCB) {
  var request = {
  type: 'PUT',
  url: 'api/tasks/' + id + '?api_key=1' + '/mark_complete',
  data: {
    task: {
      content: content
    }
  },
  success: successCB,
  error: errorCB
  }
  $.ajax(request);
};

//--------------- Mark a Task as Active by ID --------------

export function markTaskAsActive(id, successCB, errorCB) {
  var request = {
  type: 'PUT',
  url: 'api/tasks/' + id + '?api_key=1' + '/mark_active',
  data: {
    task: {
      content: content
    }
  },
  success: successCB,
  error: errorCB
  }
  $.ajax(request);
};