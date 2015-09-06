joiColorPicker = function (callback, $dropblock) {
  var colors = "#000000,#444444,#666666,#999999,#b6b6b6,#cccccc,#d8d8d8,#efefef,#f4f4f4,#ffffff,-,#ff0000,#980000,#ff7700,#ffff00,#00ff00,#00ffff,#1e84cc,#0000ff,#9900ff,#ff00ff,-,#f4cccc,#dbb0a7,#fce5cd,#fff2cc,#d9ead3,#d0e0e3,#c9daf8,#cfe2f3,#d9d2e9,#ead1dc,#ea9999,#dd7e6b,#f9cb9c,#ffe599,#b6d7a8,#a2c4c9,#a4c2f4,#9fc5e8,#b4a7d6,#d5a6bd,#e06666,#cc4125,#f6b26b,#ffd966,#93c47d,#76a5af,#6d9eeb,#6fa8dc,#8e7cc3,#c27ba0,#cc0000,#a61c00,#e69138,#f1c232,#6aa84f,#45818e,#3c78d8,#3d85c6,#674ea7,#a64d79,#900000,#85200C,#B45F06,#BF9000,#38761D,#134F5C,#1155Cc,#0B5394,#351C75,#741B47,#660000,#5B0F00,#783F04,#7F6000,#274E13,#0C343D,#1C4587,#073763,#20124D,#4C1130";
  var colorlist = colors.split(",");
  if (!$dropblock)
    $dropblock = $('<div class="add-wrap add-cp">');
  else
    $dropblock.addClass("add-wrap add-cp");

  $dropblock.append('<div class="nc" title="auto">自动</div>');
  for (var j = 0; j < colorlist.length; j++) {
    colorlist[j] = $.trim(colorlist[j]);
    if (colorlist[j] == "-") {
      //insert padding
      $dropblock.append('<span class="pl"></span>');
    } else {
      $dropblock.append('<div class="sc" style="background:'+colorlist[j]+'" title="'+colorlist[j]+'"></div>');
    }
  }
  $dropblock.find(".sc, .nc").mousedown(function (e) {
    e.preventDefault();
    callback($(e.currentTarget).attr("title"));
  });
  $dropblock.mousedown(function (e) {
    e.preventDefault();
  });
  return $dropblock;
};
