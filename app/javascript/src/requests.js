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
export function Request() {
  this.type = '';
  this.url = '';
  this.data = {};
  this.dataType = 'json';
  this.success = function (response) {};
  this.error = function (response) {};
}

//------------------- Get all Tasks ------------------

export function getAllTasks(successCB, errorCB) {
  var newRequest = new Request();
  newRequest['type'] = 'GET';
  newRequest['url'] = 'api/tasks?api_key=1';
  newRequest['success'] = function (response) {
    return successCB(response);
  };
  newRequest['error'] = function (request, errorMsg) {
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
}

//---------------- Delete a Task by ID ----------------

export function deleteOneTask(id, successCB, errorCB) {
  var newRequest = new Request();
  newRequest['type'] = 'DELETE';
  newRequest['url'] = 'api/tasks/' + id + 'api_key=1'
  newRequest['xhrFields'] = { withCredentials: true };
  newRequest['success'] = function (response) {
    console.log(response);

    return successCB(response);
  };
  newRequest['error'] = function (request, errorMsg) {
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
}

//--------------- Mark a Task as Completed by ID --------------

export function markTaskAsComplete(id, successCB, errorCB) {
  var newRequest = new Request();
  newRequest['type'] = 'PUT';
  newRequest['url'] = 'api/tasks/' + id + 'api_key=1' + '/mark_complete';
  newRequest['xhrFields'] = { withCredentials: true };
  newRequest['success'] = function (response) {
    return successCB(response);
  };
  newRequest['error'] = function (request, errorMsg) {
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
}

//--------------- Mark a Task as Active by ID --------------

export function markTaskAsActive(id, successCB, errorCB) {
  var newRequest = new Request();
  newRequest['type'] = 'PUT';
  newRequest['url'] = 'api/tasks/' + id + 'api_key=1' + '/mark_active';
  newRequest['xhrFields'] = { withCredentials: true };
  newRequest['success'] = function (response) {
    return successCB(response);
  };
  newRequest['error'] = function (request, errorMsg) {
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
}