console.log("I'm working");

const plan = [
  "############################",
  "#      #    #      o      ##",
  "#                          #",
  "#          #####           #",
  "##         #   #    ##     #",
  "###           ##     #     #",
  "#           ###      #     #",
  "#   ####                   #",
  "#   ##       o             #",
  "# o  #         o       ### #",
  "#    #                     #",
  "############################",
];

function Vector(x: any, y: any) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function (that: any) {
  // @ts-ignore
  return new Vector(this.x + that.x, this.y + that.y);
};
