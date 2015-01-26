$("#create").on("click", function () {
  $.ajax({
    url: "/api/posts",
    type: "POST",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({
      post: "New post with timestamp " + (new Date()).getTime()
    }),
    success: function (data) {
      var $create = $("#create-response");
      $create.removeClass().addClass("bg-success");
      $create.text("Success with data: " + JSON.stringify(data, null, 2));
    },
    error: function (errMsg) {
      var $create = $("#create-response");
      $create.removeClass().addClass("bg-danger");
      $create.text("Failure message: " + JSON.stringify(errMsg, null, 2));
    }
  });
});

$("#read").on("click", function () {
  var $read = $("#read-response");

  $.ajax({
    url: "/api/posts",
    type: "GET",
    dataType: "json",
    success: function (data) {
      $read.removeClass().addClass("bg-success");
      $read.text("Success with data: " + JSON.stringify(data, null, 2));
    },
    error: function (errMsg) {
      $read.removeClass().addClass("bg-danger");
      $read.text("Failure message: " + JSON.stringify(errMsg, null, 2));
    }
  });
});

$("#read-item").on("click", function () {
  var $readItemResponse = $("#read-item-response");
  var cid = $("#cid").val();
  var errFn = function (errMsg) {
    $readItemResponse.removeClass().addClass("bg-danger");
    $readItemResponse.text("Failure message: " + JSON.stringify(errMsg, null, 2));
  };

  if (!cid) {
    errFn("Please enter an id. They can be found in the list of get values above.");
  } else {
    $.ajax({
      url: "/api/posts/" + cid,
      type: "GET",
      dataType: "json",
      success: function (data) {
        $readItemResponse.removeClass().addClass("bg-success");
        $readItemResponse.text("Success with data: " + JSON.stringify(data, null, 2));
      },
      error: errFn
    });
  }
});

$("#update-item").on("click", function () {
  var $updateItemResponse = $("#update-item-response");
  var cidUpdate = $("#cidUpdate").val();
  var errFn = function (errMsg) {
    $updateItemResponse.removeClass().addClass("bg-danger");
    $updateItemResponse.text("Fail: " + JSON.stringify(errMsg, null, 2));
  };

  if (!cidUpdate) {
    errFn("Post id not found. They can be found in the list of get values above.");
  } else {
    $.ajax({
      url: "/api/posts/" + cidUpdate,
      type: "GET",
      dataType: "json",
      success: function (data) {
        data.post = "Updated post with timestamp " + (new Date()).getTime();

        $.ajax({
          url: "/api/posts/",
          type: "PUT",
          dataType: "json",
          data: JSON.stringify(data),
          contentType: "application/json; charset=utf-8",
          success: function (data) {
            $updateItemResponse.removeClass().addClass("bg-success");
            $updateItemResponse.text("Success with data: " + JSON.stringify(data, null, 2));
          },
          error: errFn
        });
      },
      error: errFn
    });
  }
});

$("#delete-item").on("click", function () {
  var $delete = $("#delete-response");
  var cidDelete = $("#cidDelete").val();

  $.ajax({
    url: "/api/posts/" + cidDelete,
    type: "DELETE",
    success: function (data) {
      $delete.removeClass().addClass("bg-success");
      $delete.text("Success with data: " + JSON.stringify(data, null, 2));
    },
    error: function (errMsg) {
      $delete.removeClass().addClass("bg-danger");
      $delete.text("Failure message: " + JSON.stringify(errMsg, null, 2));
    }
  });
});