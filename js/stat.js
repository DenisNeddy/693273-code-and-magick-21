'use strict'
const CLOUD_WIDTH = 500;
const CLOUD_HEIGHT = 280;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function(ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0,0,0,0.3)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов: ', 130, 65);

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 160, 270);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(160, 100, 40, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', 250, 270);
  ctx.fillStyle = 'hsl(233, 72%, 15%)';
  ctx.fillRect(250, 100, 40, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Егор', 340, 270);
  ctx.fillStyle = 'hsl(233, 72%, 50%)';
  ctx.fillRect(340, 100, 40, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Миша', 430, 270);
  ctx.fillStyle = 'hsl(233, 72%, 80%)';
  ctx.fillRect(430, 100, 40, 150);
}
