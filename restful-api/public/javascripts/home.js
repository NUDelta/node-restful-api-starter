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
      $create.text("Post success with data: " + JSON.stringify(data, null, 2));
    },
    error: function (errMsg) {
      var $create = $("#create-response");
      $create.removeClass().addClass("bg-danger");
      $create.text("Post failure message: " + JSON.stringify(errMsg, null, 2));
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
      $read.text("Post success with data: " + JSON.stringify(data, null, 2));
    },
    error: function (errMsg) {
      $read.removeClass().addClass("bg-danger");
      $read.text("Post failure message: " + JSON.stringify(errMsg, null, 2));
    }
  });
});

$("#read-item").on("click", function () {
  var $readItemResponse = $("#read-item-response");

  $.ajax({
    url: "/api/posts/1",
    type: "GET",
    dataType: "json",
    success: function (data) {
      $readItemResponse.removeClass().addClass("bg-success");
      $readItemResponse.text("Post success with data: " + JSON.stringify(data, null, 2));
    },
    error: function (errMsg) {
      $readItemResponse.removeClass().addClass("bg-danger");
      $readItemResponse.text("Post failure message: " + JSON.stringify(errMsg, null, 2));
    }
  });
});