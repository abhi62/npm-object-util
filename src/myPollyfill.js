Array.prototype.myForEach = function (callback) {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
