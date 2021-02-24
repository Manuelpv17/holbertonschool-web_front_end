// Binding

roomDimensions = {
  width: 50,
  length: 100,
};

function getArea() {
  return this.width * this.length;
}

boundGetArea = getArea.bind(roomDimensions);

console.log(boundGetArea());
