var distanceKm = +prompt ('Введите расстояние в километрах ');
var distanceFt = +prompt ('Введите расстояние в футах');

if (distanceKm>distanceFt/3281) {
  alert (distanceKm + ' километров больше чем ' + distanceFt + ' футов потому что в ' + distanceFt + ' футах ' + distanceFt/3281 + " километров");
}
else if (distanceKm<distanceFt/3281) {
  alert (distanceKm + ' километров меньше чем ' + distanceFt + ' футов, потому что в ' + distanceFt + ' футах ' + distanceFt/3281 + " километров");
}
else if (distanceKm==distanceFt/3281) {
  alert (distanceKm + ' километров столько же, сколько' + distanceFt + ' футов, потому что в ' + distanceFt + ' футах ' + distanceFt/3281 + " километров");
}
else {
  alert ('Попробуйте еще раз');
}
