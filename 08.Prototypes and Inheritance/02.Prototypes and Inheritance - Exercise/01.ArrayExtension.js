(function solve() {
    Array.prototype.last = function () {
        if (this.length > 0) return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        if (n >= 0 && n < this.length) {
            return this.slice(n);
        }
    };

    Array.prototype.take = function (n) {
        if (n >= 0 && n < this.length) {
            return this.slice(0, n);
        }
    };

    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    };

    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})();