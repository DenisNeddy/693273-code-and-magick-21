'use strict';
const CLOUD_WIDTH = 500;
const CLOUD_HEIGHT = 280;

const CLOUD_X = 100;
const GAP = 10;
const FONT_GAP = 20;
const FONT_Y = 270;
const BAR_X = 160;
const BAR_Y = 250;
const BAR_WIDTH = 40;
const BAR_HEIGHT = -150;
const BAR_GAP = 50;
const TIMES_Y = 90;


const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, FONT_GAP, 'rgba(0,0,0,0.3)');
  renderCloud(ctx, CLOUD_X, GAP, '#fff');

  const maxTime = getMaxElement(times);

  const getRestColor = function (min, max) {
    var randomColor = Math.random() * (max - min) + min;
    ctx.fillStyle = 'rgba(4,73, 130, ' + randomColor + ')';
  };

  for (var j = 0; j < names.length; j++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[j], BAR_X + (BAR_GAP + BAR_WIDTH) * j, FONT_Y);
    ctx.fillText(Math.round(times[j]), BAR_X + (BAR_GAP + BAR_WIDTH) * j, TIMES_Y);
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP + FONT_GAP, BAR_WIDTH);
    ctx.fillText('Список результатов: ', CLOUD_X + GAP + FONT_GAP, BAR_WIDTH + FONT_GAP);
  }

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      getRestColor(0.1, 0.9);
    }
    ctx.fillRect(BAR_X + (BAR_GAP + BAR_WIDTH) * i, BAR_Y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};

