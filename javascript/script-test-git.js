const ages = [12, 13, 14, 15, 16, 59, 34]

document.getElementById("demo").innerHTML = ages.filter(howOld)

function howOld(age) {
  return age > 20;

}