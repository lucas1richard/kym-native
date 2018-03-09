export default class Pen {
  constructor(strokes) {
    this.strokes = strokes || [];
    this.offsetX = 0;
    this.offsetY = 0;
  }

  addStroke(points) {
    if (points.length > 0) {
      this.strokes.push(points);
    }
  }

  rewindStroke() {
    if (this.strokes.length < 1) return;
    this.strokes.pop();
  }

  setOffset(options) {
    if (!options) return;
    this.offsetX = options.x;
    this.offsetY = options.y;
  }

  pointsToSvg(points) {
    if (points.length) {
      let path = `M ${points[0].x},${points[0].y}`;
      points.forEach((point) => {
        path += ` L ${point.x},${point.y}`;
      });
      return path;
    }
    return '';
  }

  clear = () => {
    this.strokes = [];
  }

  copy() {
    return new Reaction(this.strokes.slice()); // eslint-disable-line
  }
}
