/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Vector.ts":
/*!***********************!*\
  !*** ./src/Vector.ts ***!
  \***********************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
    var Vector = (function () {
        function Vector(i, j) {
            this.i = i;
            this.j = j;
        }
        Vector.prototype.copy = function () {
            return new Vector(this.i, this.j);
        };
        Vector.prototype.magnitude = function () {
            return Math.sqrt(Math.pow(this.i, 2) + Math.pow(this.j, 2));
        };
        Vector.prototype.normalized = function () {
            return this.divide(this.magnitude());
        };
        Vector.prototype.add = function (vector) {
            var result = this.copy();
            result.i += vector.i;
            result.j += vector.j;
            return result;
        };
        Vector.prototype.subtract = function (vector) {
            var result = this.copy();
            result.i -= vector.i;
            result.j -= vector.j;
            return result;
        };
        Vector.prototype.divide = function (scalar) {
            var result = this.copy();
            result.i /= scalar;
            result.j /= scalar;
            return result;
        };
        Vector.prototype.multiply = function (scalar) {
            var result = this.copy();
            result.i *= scalar;
            result.j *= scalar;
            return result;
        };
        Vector.prototype.perpendicular = function () {
            return new Vector(-this.j, this.i);
        };
        Vector.prototype.transform = function (matrix) {
            var i = (matrix.data[0][0] * this.i) + (matrix.data[0][1] * this.j);
            var j = (matrix.data[1][0] * this.i) + (matrix.data[1][1] * this.j);
            return new Vector(i, j);
        };
        Vector.prototype.toString = function () {
            return "(" + this.i + ", " + this.j + ")";
        };
        return Vector;
    }());
    
    
    
    /***/ }),
    
    /***/ "./src/index.ts":
    /*!**********************!*\
      !*** ./src/index.ts ***!
      \**********************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Vector.ts");
    
    window.onload = function () {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var width = canvas.width = window.innerWidth;
        var height = canvas.height = window.innerHeight;
        var scale = 50;
        var pixelOffset = {
            x: 0,
            y: 0
        };
        var darkGray = "#222";
        var offwhite = "#EBEBEB";
        var lightGreen = "#90DCB5";
        var darkGreen = "#6BBCAC";
        ctx.font = "14px Roboto";
        var bgColor = darkGray;
        var fontColor = offwhite;
        var axisColor = lightGreen;
        var gridColor = darkGreen;
        function drawScreen() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = bgColor;
            ctx.strokeStyle = bgColor;
            ctx.fillRect(0, 0, width, height);
            var pixelOrigin = {
                x: width / 2 - pixelOffset.x,
                y: height / 2 - pixelOffset.y
            };
            function drawHorizontalAxis() {
                ctx.beginPath();
                ctx.moveTo(0, pixelOrigin.y);
                ctx.lineTo(width, pixelOrigin.y);
                ctx.strokeStyle = axisColor;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
            function drawVerticalAxis() {
                ctx.beginPath();
                ctx.moveTo(pixelOrigin.x, 0);
                ctx.lineTo(pixelOrigin.x, height);
                ctx.strokeStyle = axisColor;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
            function drawGrid() {
                ctx.strokeStyle = gridColor;
                ctx.fillStyle = fontColor;
                var leftEdge = Math.floor(-(width / 2 - pixelOffset.x) / scale);
                var rightEdge = Math.ceil((width / 2 + pixelOffset.x) / scale);
                for (var x = leftEdge; x <= rightEdge; x++) {
                    var px = pixelOrigin.x + scale * x;
                    ctx.beginPath();
                    ctx.moveTo(px, 0);
                    ctx.lineTo(px, height);
                    ctx.lineWidth = 0.25;
                    ctx.stroke();
                    if (x !== 0 && x % 5 === 0) {
                        ctx.fillText(x.toString(), px, pixelOrigin.y);
                    }
                }
                var topEdge = Math.floor(-(height / 2 - pixelOffset.y) / scale);
                var bottomEdge = Math.ceil((height / 2 + pixelOffset.y) / scale);
                for (var y = topEdge; y <= bottomEdge; y++) {
                    var py = pixelOrigin.y + scale * y;
                    ctx.beginPath();
                    ctx.moveTo(0, py);
                    ctx.lineTo(width, py);
                    ctx.lineWidth = 0.25;
                    ctx.stroke();
                    if (y !== 0 && y % 5 === 0) {
                        ctx.fillText((-y).toString(), pixelOrigin.x, py);
                    }
                }
            }
            function drawFunction(mathFunction, color, doSubPixel) {
                if (doSubPixel === void 0) { doSubPixel = false; }
                var previousX = undefined;
                var previousY = undefined;
                ctx.beginPath();
                if (doSubPixel) {
                    for (var px = 0; px < width; px += (1 / scale)) {
                        for (var subX = 0; subX < 1 / scale; subX += (1 / scale) / 10) {
                            var x = (((px + subX) + pixelOffset.x) / scale) - ((width / scale) / 2);
                            var y = -mathFunction(x);
                            var py = pixelOrigin.y + scale * y;
                            if (previousY !== undefined) {
                                if (py < 0 || py >= height) {
                                    if (previousY >= 0 && previousY < height) {
                                        ctx.lineTo(px + subX, py);
                                    }
                                }
                                else {
                                    if (previousY < 0 || previousY >= height) {
                                        ctx.moveTo(previousX, previousY);
                                    }
                                    if (subX === 0) {
                                        if (py >= 0 && py < height) {
                                            if (Math.abs(previousY - py) > (height)) {
                                                ctx.moveTo(px, py);
                                            }
                                            else {
                                                ctx.lineTo(px, py);
                                            }
                                        }
                                    }
                                }
                            }
                            else {
                                if (subX === 0) {
                                    ctx.moveTo(px, py);
                                }
                            }
                            previousY = py;
                            previousX = px + subX;
                        }
                    }
                }
                else {
                    for (var px = 0; px < width; px++) {
                        var x = (((px) + pixelOffset.x) / scale) - ((width / scale) / 2);
                        var y = -mathFunction(x);
                        var py = pixelOrigin.y + scale * y;
                        if (previousY !== undefined) {
                            if (py < 0 || py >= height) {
                                if (previousY >= 0 && previousY < height) {
                                    ctx.lineTo(px, py);
                                }
                            }
                            else {
                                if (previousY < 0 || previousY >= height) {
                                    ctx.moveTo(previousX, previousY);
                                }
                                if (py >= 0 && py < height) {
                                    if (Math.abs(previousY - py) > (height)) {
                                        ctx.moveTo(px, py);
                                    }
                                    else {
                                        ctx.lineTo(px, py);
                                    }
                                }
                            }
                        }
                        else {
                            ctx.moveTo(px, py);
                        }
                        previousY = py;
                        previousX = px;
                    }
                }
                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
            }
            function drawParametric(Xfunct, Yfunct, ti, tf, color, fill) {
                if (fill === void 0) { fill = false; }
                var previousX = undefined;
                var previousY = undefined;
                ctx.beginPath();
                for (var t = ti; t <= tf; t += (1 / scale)) {
                    var x = Xfunct(t);
                    var y = -Yfunct(t);
                    var px = pixelOrigin.x + scale * x;
                    var py = pixelOrigin.y + scale * y;
                    if (previousY !== undefined) {
                        if (py < 0 || py >= height) {
                            if (previousY >= 0 && previousY < height) {
                                ctx.lineTo(px, py);
                            }
                        }
                        else {
                            if (previousY < 0 || previousY >= height) {
                                ctx.moveTo(previousX, previousY);
                            }
                            if (py >= 0 && py < height) {
                                if (Math.abs(previousY - py) > (height)) {
                                    ctx.moveTo(px, py);
                                }
                                else {
                                    ctx.lineTo(px, py);
                                }
                            }
                        }
                    }
                    else {
                        ctx.moveTo(px, py);
                    }
                    previousY = py;
                    previousX = px;
                }
                ctx.strokeStyle = color;
                ctx.fillStyle = color;
                ctx.lineWidth = 2;
                if (fill) {
                    ctx.fill();
                }
                else {
                    ctx.stroke();
                }
                ctx.strokeStyle = "#000";
                ctx.fillStyle = "#000";
                ctx.lineWidth = 1;
            }
            function drawVector(vector, color, originX, originY, arrow) {
                if (originX === void 0) { originX = 0; }
                if (originY === void 0) { originY = 0; }
                if (arrow === void 0) { arrow = true; }
                var pixelVector = new _Vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](scale * vector.i, scale * -vector.j);
                var a = pixelVector.normalized().multiply(20);
                var c = pixelVector.subtract(a);
                var b = pixelVector.perpendicular().normalized().multiply(10);
                var d = c.add(b);
                var e = c.subtract(b);
                ctx.strokeStyle = color;
                ctx.fillStyle = color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo((originX * scale) + pixelOrigin.x, (-originY * scale) + pixelOrigin.y);
                if (arrow) {
                    ctx.lineTo((originX * scale) + pixelOrigin.x + c.i, (-originY * scale) + pixelOrigin.y + c.j);
                }
                else {
                    ctx.lineTo((originX * scale) + pixelOrigin.x + pixelVector.i, (-originY * scale) + pixelOrigin.y + pixelVector.j);
                }
                ctx.stroke();
                if (arrow) {
                    ctx.beginPath();
                    ctx.moveTo((originX * scale) + pixelOrigin.x + pixelVector.i, (-originY * scale) + pixelOrigin.y + pixelVector.j);
                    ctx.lineTo((originX * scale) + pixelOrigin.x + d.i, (-originY * scale) + pixelOrigin.y + d.j);
                    ctx.lineTo((originX * scale) + pixelOrigin.x + e.i, (-originY * scale) + pixelOrigin.y + e.j);
                    ctx.fill();
                }
                ctx.strokeStyle = "#000";
                ctx.fillStyle = "#000";
                ctx.lineWidth = 1;
            }
            drawHorizontalAxis();
            drawVerticalAxis();
            drawGrid();
            {
                var white = "#ffffff";
                var yellow = "#DDCA6F";
                var blue = "#3197FF";
                var red = "#EA5356";
                var orange = "#FFA500";
                var a = Math.sin(Date.now() / 10000) * 10;
                var V1 = new _Vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](5, 5);
                drawVector(V1, red, 0, 0, true);
                var V2 = new _Vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](3, -1);
                drawVector(V2, yellow, V1.i, V1.j, true);
                var V3 = V1.add(V2);
                drawVector(V3, blue, 0, 0, true);
            }
            requestAnimationFrame(drawScreen);
        }
        ;
        window.onresize = function () {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        canvas.onwheel = function (event) {
            var beforeOffsetX = pixelOffset.x;
            var beforeOffsetY = pixelOffset.y;
            var beforeOffsetXCart = pixelOffset.x / scale;
            var beforeOffsetYCart = pixelOffset.y / scale;
            scale -= event.deltaY * scale / 2500;
            pixelOffset.x = beforeOffsetXCart * scale;
            pixelOffset.y = beforeOffsetYCart * scale;
            if (scale < 8) {
                scale = 8;
                pixelOffset.x = beforeOffsetX;
                pixelOffset.y = beforeOffsetY;
            }
        };
        {
            var drag_1 = false;
            var mouseX_1 = 0;
            var mouseY_1 = 0;
            canvas.onmousedown = function (event) {
                drag_1 = true;
                mouseX_1 = event.clientX + pixelOffset.x;
                mouseY_1 = event.clientY + pixelOffset.y;
            };
            canvas.onmousemove = function (event) {
                var currentMouseX = event.clientX;
                var currentMouseY = event.clientY;
                if (drag_1) {
                    pixelOffset.x = mouseX_1 - currentMouseX;
                    pixelOffset.y = mouseY_1 - currentMouseY;
                }
            };
            canvas.onmouseup = function (event) {
                drag_1 = false;
            };
        }
        drawScreen();
    };
    
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7SUFJSSxnQkFBWSxDQUFTLEVBQUUsQ0FBUztRQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUtELHFCQUFJLEdBQUo7UUFDSSxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFLRCwwQkFBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FB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RyxLQUFLLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdkMsUUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRUQsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLEtBQUs7WUFDaEMsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNsQyxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRWxDLElBQUksTUFBSSxFQUFFO2dCQUNOLFdBQVcsQ0FBQyxDQUFDLEdBQUcsUUFBTSxHQUFHLGFBQWEsQ0FBQztnQkFDdkMsV0FBVyxDQUFDLENBQUMsR0FBRyxRQUFNLEdBQUcsYUFBYSxDQUFDO2FBQzFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxLQUFLO1lBQzlCLE1BQUksR0FBRyxLQUFLLENBQUM7UUFDakIsQ0FBQztLQUNKO0lBQ0QsVUFBVSxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnLi9NYXRyaXgnO1xyXG5cclxuLyoqXHJcbiAqIEEgMi1kaW1lbnNpb25hbCB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmVjdG9yIHtcclxuICAgIGk6IG51bWJlcjtcclxuICAgIGo6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpOiBudW1iZXIsIGo6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaSA9IGk7XHJcbiAgICAgICAgdGhpcy5qID0gajtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIER1cGxpY2F0ZXMgdGhpcyB2ZWN0b3IuXHJcbiAgICAgKi9cclxuICAgIGNvcHkoKTogVmVjdG9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLmksIHRoaXMuaik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIG1hZ25pdHVkZSBzY2FsYXIgKGxlbmd0aCkgZm9yIHRoaXMgdmVjdG9yLlxyXG4gICAgICovXHJcbiAgICBtYWduaXR1ZGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuaSwgMikgKyBNYXRoLnBvdyh0aGlzLmosIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHVuaXQgdmVjdG9yIGZvciB0aGlzIHZlY3Rvci5cclxuICAgICAqL1xyXG4gICAgbm9ybWFsaXplZCgpOiBWZWN0b3Ige1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZSh0aGlzLm1hZ25pdHVkZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbmdsZSgpOiBudW1iZXIge1xyXG4gICAgLy8gICAgIHJldHVybiBhcmN0YW4odGhpcy5qIC8gdGhpcy5pKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZGVzIGFub3RoZXIgdmVjdG9yIHRvIHRoaXMgdmVjdG9yLlxyXG4gICAgICogQHBhcmFtIHZlY3RvciB0aGUgb3RoZXIgdmVjdG9yXHJcbiAgICAgKi9cclxuICAgIGFkZCh2ZWN0b3I6IFZlY3Rvcik6IFZlY3RvciB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jb3B5KCk7XHJcbiAgICAgICAgcmVzdWx0LmkgKz0gdmVjdG9yLmk7XHJcbiAgICAgICAgcmVzdWx0LmogKz0gdmVjdG9yLmo7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1YnRyYWN0cyBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgICogQHBhcmFtIHZlY3RvciB0aGUgb3RoZXIgdmVjdG9yXHJcbiAgICAgKi9cclxuICAgIHN1YnRyYWN0KHZlY3RvcjogVmVjdG9yKTogVmVjdG9yIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNvcHkoKTtcclxuICAgICAgICByZXN1bHQuaSAtPSB2ZWN0b3IuaTtcclxuICAgICAgICByZXN1bHQuaiAtPSB2ZWN0b3IuajtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGl2aWRlcyB0aGlzIHZlY3RvciBieSBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgZGl2aWRlKHNjYWxhcjogbnVtYmVyKTogVmVjdG9yIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNvcHkoKTtcclxuICAgICAgICByZXN1bHQuaSAvPSBzY2FsYXI7XHJcbiAgICAgICAgcmVzdWx0LmogLz0gc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgbXVsdGlwbHkoc2NhbGFyOiBudW1iZXIpOiBWZWN0b3Ige1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY29weSgpO1xyXG4gICAgICAgIHJlc3VsdC5pICo9IHNjYWxhcjtcclxuICAgICAgICByZXN1bHQuaiAqPSBzY2FsYXI7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSB2ZWN0b3IgcGVycGluZGljdWxhdCB0byB0aGlzIHZlY3Rvci5cclxuICAgICAqL1xyXG4gICAgcGVycGVuZGljdWxhcigpOiBWZWN0b3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC10aGlzLmosIHRoaXMuaSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgbWF0cml4IHRyYW5zZm9ybWF0aW9uIG9uIHRoaXMgdmVjdG9yLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0obWF0cml4OiBNYXRyaXgpOiBWZWN0b3Ige1xyXG4gICAgICAgIGNvbnN0IGkgPSAobWF0cml4LmRhdGFbMF1bMF0gKiB0aGlzLmkpICsgKG1hdHJpeC5kYXRhWzBdWzFdICogdGhpcy5qKTtcclxuICAgICAgICBjb25zdCBqID0gKG1hdHJpeC5kYXRhWzFdWzBdICogdGhpcy5pKSArIChtYXRyaXguZGF0YVsxXVsxXSAqIHRoaXMuaik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoaSwgaik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gZm9yIHRoaXMgdmVjdG9yLiBVc2VmdWwgZm9yIGNvbnNvbGUubG9nKHRoaXNWZWN0b3IpLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgKCR7dGhpcy5pfSwgJHt0aGlzLmp9KWA7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuVG8gRG9cclxuLSBhc3ltcHRvdGVzXHJcbi0gem9vbSBtYXRoIGZ1bmN0aW9uXHJcbi0tLSB6b29tIGdyaWQgbnVtYmVyaW5nIGNoYW5nZSAmIGFmZmVjdGluZyBncmlkIHNpemVcclxuLS0tLS0tIGV2ZXJ5IDV0aCBsaW5lIGRhcmtlbnMgb24gdW5pdCA9IDIwXHJcbi0tLS0tLSBldmVyeSAxMHRoIGxpbmUgZGFya2VucyBvbiB1bmlyID0gMTJcclxuKi9cclxuXHJcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gJy4vTWF0cml4JztcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgbGV0IHdpZHRoID0gY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBsZXQgaGVpZ2h0ID0gY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcHJlc2VudHMgcG9pbnRzIGJldHdlZW4gYXhlcyBpbiB0aGUgY2FydGVzaWFuIHBsYW5lLiBJdCBpbmNyZWFzZXMgd2l0aCB6b29taW5nIGluOyBkZWNyZWFzZXMgd2hlbiB6b29taW5nIG91dC5cclxuICAgICAqL1xyXG4gICAgbGV0IHNjYWxlID0gNTA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQaXhlbCBzcGFjZS4gVmFsdWVzIHJlcHJlc2VudCB0aGUgZGlzdGFuY2UgcGFubmVkIGJ5IHRoZSB1c2VyIGFuZCB1cGRhdGVzIGJhc2VkIG9uIHVzZXIgaW5wdXQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHBpeGVsT2Zmc2V0ID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkYXJrR3JheSA9IFwiIzIyMlwiO1xyXG4gICAgY29uc3Qgb2Zmd2hpdGUgPSBcIiNFQkVCRUJcIjtcclxuICAgIGNvbnN0IGxpZ2h0R3JlZW4gPSBcIiM5MERDQjVcIjtcclxuICAgIGNvbnN0IGRhcmtHcmVlbiA9IFwiIzZCQkNBQ1wiO1xyXG5cclxuICAgIC8vIFN0eWxlcyBcclxuICAgIGN0eC5mb250ID0gXCIxNHB4IFJvYm90b1wiO1xyXG4gICAgY29uc3QgYmdDb2xvciA9IGRhcmtHcmF5O1xyXG4gICAgY29uc3QgZm9udENvbG9yID0gb2Zmd2hpdGU7XHJcbiAgICBjb25zdCBheGlzQ29sb3IgPSBsaWdodEdyZWVuO1xyXG4gICAgY29uc3QgZ3JpZENvbG9yID0gZGFya0dyZWVuO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3U2NyZWVuKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENsZWFyaW5nIHNjcmVlbiwgcmVzZXR0aW5nIGNvbG9ycy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBiZ0NvbG9yO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJnQ29sb3I7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQaXhlbCBzcGFjZS4gTG9jYXRpb24gb2YgY2FydGVzaWFuIG9yaWdpbiBpbiBwaXhlbHMuIE1vdmVzIGFzIHVzZXIgcGFucy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBwaXhlbE9yaWdpbiA9IHtcclxuICAgICAgICAgICAgeDogd2lkdGggLyAyIC0gcGl4ZWxPZmZzZXQueCxcclxuICAgICAgICAgICAgeTogaGVpZ2h0IC8gMiAtIHBpeGVsT2Zmc2V0LnlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBkcmF3SG9yaXpvbnRhbEF4aXMoKSB7XHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCBwaXhlbE9yaWdpbi55KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCwgcGl4ZWxPcmlnaW4ueSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGF4aXNDb2xvcjtcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdWZXJ0aWNhbEF4aXMoKSB7XHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwaXhlbE9yaWdpbi54LCAwKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhwaXhlbE9yaWdpbi54LCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBheGlzQ29sb3I7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkcmF3R3JpZCgpIHtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZ3JpZENvbG9yO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZm9udENvbG9yO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERyYXdpbmcgeC1heGlzIGxpbmVzIGFuZCBsYWJlbHMuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0RWRnZSA9IE1hdGguZmxvb3IoLSh3aWR0aCAvIDIgLSBwaXhlbE9mZnNldC54KSAvIHNjYWxlKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHRFZGdlID0gTWF0aC5jZWlsKCh3aWR0aCAvIDIgKyBwaXhlbE9mZnNldC54KSAvIHNjYWxlKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IGxlZnRFZGdlOyB4IDw9IHJpZ2h0RWRnZTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBweCA9IHBpeGVsT3JpZ2luLnggKyBzY2FsZSAqIHg7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhweCwgMCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHB4LCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuMjU7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogc2NhbGUgYmFzZWQgb24gdW5pdFxyXG4gICAgICAgICAgICAgICAgaWYgKHggIT09IDAgJiYgeCAlIDUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoeC50b1N0cmluZygpLCBweCwgcGl4ZWxPcmlnaW4ueSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEcmF3aW5nIHktYXhpcyBsaW5lcyBhbmQgbGFiZWxzLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY29uc3QgdG9wRWRnZSA9IE1hdGguZmxvb3IoLShoZWlnaHQgLyAyIC0gcGl4ZWxPZmZzZXQueSkgLyBzY2FsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbUVkZ2UgPSBNYXRoLmNlaWwoKGhlaWdodCAvIDIgKyBwaXhlbE9mZnNldC55KSAvIHNjYWxlKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IHRvcEVkZ2U7IHkgPD0gYm90dG9tRWRnZTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBweSA9IHBpeGVsT3JpZ2luLnkgKyBzY2FsZSAqIHk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCBweSk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoLCBweSk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC4yNTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBzY2FsZSBiYXNlZCBvbiB1bml0XHJcbiAgICAgICAgICAgICAgICBpZiAoeSAhPT0gMCAmJiB5ICUgNSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCgoLXkpLnRvU3RyaW5nKCksIHBpeGVsT3JpZ2luLngsIHB5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRm9yIGRyYXdpbmcgbWF0aG1hdGljYWwgZnVuY3Rpb25zLiBGb3IgZWFjaCBpbnB1dCAoY2FydGVzaWFuIHgpIHRoZXJlIGNhbiBvbmx5IGJlIG9uZSBvdXRwdXQgKGNhcnRlc2lhbiB5KS5cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gbWF0aEZ1bmN0aW9uIEZ1bmN0aW9uIHRoYXQgY2FsY3VsYXRlcyB5LXZhbHVlcy4gXHJcbiAgICAgICAgICogQHBhcmFtIGNvbG9yIENvbG9yIG9mIGZ1bmN0aW9uIHN0cm9rZS5cclxuICAgICAgICAgKiBAcGFyYW0gZG9TdWJQaXhlbCBEb2VzIHRoZSBmdW5jdGlvbiBoYXZlIGFzeW1wdG90ZXM/IElmIHllcywgc2V0IGl0IHRvIHRydWUsIE90aGVyd2lzZSwgbGVhdmUgaXQgYXMgZmFsc2UuXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdGdW5jdGlvbihtYXRoRnVuY3Rpb246ICh4OiBudW1iZXIpID0+IG51bWJlciwgY29sb3I6IHN0cmluZywgZG9TdWJQaXhlbCA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1g6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzWTogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBpZiAoZG9TdWJQaXhlbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHggPSAwOyBweCA8IHdpZHRoOyBweCArPSAoMSAvIHNjYWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHN1YlggPSAwOyBzdWJYIDwgMSAvIHNjYWxlOyBzdWJYICs9ICgxIC8gc2NhbGUpIC8gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9ICgoKHB4ICsgc3ViWCkgKyBwaXhlbE9mZnNldC54KSAvIHNjYWxlKSAtICgod2lkdGggLyBzY2FsZSkgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IC1tYXRoRnVuY3Rpb24oeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHB5ID0gcGl4ZWxPcmlnaW4ueSArIHNjYWxlICogeTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1kgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB5IDwgMCB8fCBweSA+PSBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNZID49IDAgJiYgcHJldmlvdXNZIDwgaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8ocHggKyBzdWJYLCBweSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNZIDwgMCB8fCBwcmV2aW91c1kgPj0gaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocHJldmlvdXNYLCBwcmV2aW91c1kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViWCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHkgPj0gMCAmJiBweSA8IGhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHByZXZpb3VzWSAtIHB5KSA+IChoZWlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhweCwgcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHB4LCBweSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViWCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocHgsIHB5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1kgPSBweTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNYID0gcHggKyBzdWJYO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBldmVyeSB4LXBpeGVsIHZhbHVlIG9uIHRoZSBzY3JlZW4uXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBweCA9IDA7IHB4IDwgd2lkdGg7IHB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IGVhY2ggeC1waXhlbCB2YWx1ZSBpbnRvIGNhcnRlc2lhbi5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gKCgocHgpICsgcGl4ZWxPZmZzZXQueCkgLyBzY2FsZSkgLSAoKHdpZHRoIC8gc2NhbGUpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB5IHZhbHVlIGluIGNhcnRlc2lhbi5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gLW1hdGhGdW5jdGlvbih4KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHktY2FydGVzaWFuIHRvIHktcGl4ZWwgdmFsdWUuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHkgPSBwaXhlbE9yaWdpbi55ICsgc2NhbGUgKiB5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIE5PVCB0aGUgZmlyc3QgcG9pbnQgYmVpbmcgZHJhd24uIE5lZWQgdG8gY29ubmVjdCBwcmV2aW91cyBwb2ludCB0byBjdXJyZW50IHBvaW50LlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1kgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBjdXJyZW50IHBpeGVsLXkgaXMgT0ZGIHRoZSBzY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB5IDwgMCB8fCBweSA+PSBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHByZXZpb3VzIHBpeGVsLXkgaXMgT04gdGhlIHNjcmVlbiwgdGhlbiBkcmF3IGEgbGluZSBmcm9tIGluc2lkZSB0byBvdXRzaWRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzWSA+PSAwICYmIHByZXZpb3VzWSA8IGhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8ocHgsIHB5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHByZXZpb3VzIHBpeGVsLXkgaXMgT0ZGIHRoZSBzY3JlZW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNZIDwgMCB8fCBwcmV2aW91c1kgPj0gaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhwcmV2aW91c1gsIHByZXZpb3VzWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBjdXJyZW50IHBpeGVsLXkgaXMgT04gdGhlIHNjcmVlbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChweSA+PSAwICYmIHB5IDwgaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgZGlzdGFuY2UgYmV0d2VlbiBwcmV2aW91cyBwaXhlbC15IGFuZCBjdXJyZW50IHBpeGVsLXkgaXMgZ3JlYXRlciB0aGFuIHNjcmVlbiBoZWlnaHQsIGp1c3QgbW92ZSB0byBjdXJyZW50IHBvaW50IGJ1dCBkb24ndCBkcmF3LiBPdGhlcndpc2UsIGRyYXcuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHByZXZpb3VzWSAtIHB5KSA+IChoZWlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocHgsIHB5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHB4LCBweSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBJUyB0aGUgZmlyc3QgcG9pbnQgYmVpbmcgZHJhd24uIE5vIG5lZWQgdG8gY29ubmVjdCB0byBwcmV2aW91cyBwb2ludC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhweCwgcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBSZWRlZmluZSBwcmV2aW91cyBwaXhlbCBwb2ludHMuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNZID0gcHk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNYID0gcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQWRkIHN0cm9rZSB0byBtYXBwZWQgZnVuY3Rpb24uXHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAvLyBSZXNldCBzdHJva2VcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMDAwXCI7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRm9yIHBsb3R0aW5nIG1hdGhlbWF0aWNhbCBlcXVhdGlvbnMgdGhhdCBhcmVuJ3QgZnVuY3Rpb25zLiBUaGVyZSBhcmUgbXVsdGlwbGUgb3V0cHV0cyBmb3IgYSBzaW5nbGUgaW5wdXQuIGllOiBhIGNpcmNsZS5cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gWGZ1bmN0IE1hdGggZnVuY3Rpb24gd2l0aCB0IGFzIHBhcmFtZXRlciwgY2FsY3VsYXRlZCB1c2luZyBhIHJhbmdlIG9mIHQtdmFsdWVzIGluIGNhcnRlc2lhbiB2YWx1ZXMuXHJcbiAgICAgICAgICogQHBhcmFtIFlmdW5jdCBNYXRoIGZ1bmN0aW9uIHdpdGggdCBhcyBwYXJhbWV0ZXIsIGNhbGN1bGF0ZWQgdXNpbmcgYSByYW5nZSBvZiB0LXZhbHVlcyBpbiBjYXJ0ZXNpYW4gdmFsdWVzLlxyXG4gICAgICAgICAqIEBwYXJhbSB0aSBpbml0aWFsLXQgdmFsdWUgaW4gcmFuZ2U7IGNhcnRlc2lhblxyXG4gICAgICAgICAqIEBwYXJhbSB0ZiBmaW5hbCB0LXZhbHVlIGluIHJhbmdlOyBjYXJ0ZXNpYW5cclxuICAgICAgICAgKiBAcGFyYW0gY29sb3IgY29sb3Igb2YgbGluZSBvciBzaGFwZSBkcmF3blxyXG4gICAgICAgICAqIEBwYXJhbSBmaWxsIFRydWU6IGZpbGxzIGluIHNoYXBlLiBGYWxzZTogd2lsbCByZW1haW4gYW4gdW5maWxsZWQgc3Ryb2tlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdQYXJhbWV0cmljKFhmdW5jdDogKHQ6IG51bWJlcikgPT4gbnVtYmVyLCBZZnVuY3Q6ICh0OiBudW1iZXIpID0+IG51bWJlciwgdGk6IG51bWJlciwgdGY6IG51bWJlciwgY29sb3I6IHN0cmluZywgZmlsbCA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1g6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzWTogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAvLyBMb29wcyB0aHJvdWdoIHJhbmdlIG9mIHQtdmFsdWVzLiAxIGRpdmlkZWQgYnkgc2NhbGUgaW5jcmVhc2VzIHJlc29sdXRpb24uXHJcbiAgICAgICAgICAgIGZvciAobGV0IHQgPSB0aTsgdCA8PSB0ZjsgdCArPSAoMSAvIHNjYWxlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IFhmdW5jdCh0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSAtWWZ1bmN0KHQpOyAvLyBOZWdhdGl2ZSBiZWNhdXNlIGJyb3dzZXIgeS1vcmlnaW4gaXMgYXQgdG9wIG9mIHNjcmVlbi5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBweCA9IHBpeGVsT3JpZ2luLnggKyBzY2FsZSAqIHg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBweSA9IHBpeGVsT3JpZ2luLnkgKyBzY2FsZSAqIHk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzWSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB5IDwgMCB8fCBweSA+PSBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzWSA+PSAwICYmIHByZXZpb3VzWSA8IGhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhweCwgcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzWSA8IDAgfHwgcHJldmlvdXNZID49IGhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhwcmV2aW91c1gsIHByZXZpb3VzWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB5ID49IDAgJiYgcHkgPCBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhwcmV2aW91c1kgLSBweSkgPiAoaGVpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocHgsIHB5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhweCwgcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHB4LCBweSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1kgPSBweTtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzWCA9IHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgICAgICBpZiAoZmlsbCkge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMwMDBcIjtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMFwiO1xyXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEZvciBwbG90dGluZyB2ZWN0b3JzLlxyXG4gICAgICAgICAqIEBwYXJhbSB2ZWN0b3IgXHJcbiAgICAgICAgICogQHBhcmFtIGNvbG9yIGNvbG9yIG9mIGRyYXduIHZlY3RvclxyXG4gICAgICAgICAqIEBwYXJhbSBvcmlnaW5YIGNhcnRlc2lhbjsgaWYgeW91IHdhbnQgdmVjdG9yIHRvIHN0YXJ0IGF0IGFuIG9yaWdpbiBvdGhlciB0aGFuIGRlZmF1bHQgMCwwLlxyXG4gICAgICAgICAqIEBwYXJhbSBvcmlnaW5ZIGNhcnRlc2lhbjsgaWYgeW91IHdhbnQgdmVjdG9yIHRvIHN0YXJ0IGF0IGFuIG9yaWdpbiBvdGhlciB0aGFuIGRlZmF1bHQgMCwwLlxyXG4gICAgICAgICAqIEBwYXJhbSBhcnJvdyBUcnVlOiB2ZWN0b3Igd2lsbCBoYXZlIGFycm93aGVhZDsgRmFsc2U6IHZlY3RvciB3aWxsIGp1c3QgYmUgYSBsaW5lLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdWZWN0b3IodmVjdG9yOiBWZWN0b3IsIGNvbG9yOiBzdHJpbmcsIG9yaWdpblg6IG51bWJlciA9IDAsIG9yaWdpblk6IG51bWJlciA9IDAsIGFycm93OiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyBDb252ZXJ0cyBjYXJ0ZXNpYW4gdG8gcGl4ZWwgY29vcmRpbmF0ZXNcclxuICAgICAgICAgICAgY29uc3QgcGl4ZWxWZWN0b3IgPSBuZXcgVmVjdG9yKHNjYWxlICogdmVjdG9yLmksIHNjYWxlICogLXZlY3Rvci5qKTtcclxuICAgICAgICAgICAgLy8gVmFyaWFibGVzIGZvciB2ZWN0b3IgYXJyb3doZWFkICh0cmlhbmdsZSlcclxuICAgICAgICAgICAgY29uc3QgYSA9IHBpeGVsVmVjdG9yLm5vcm1hbGl6ZWQoKS5tdWx0aXBseSgyMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSBwaXhlbFZlY3Rvci5zdWJ0cmFjdChhKTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHBpeGVsVmVjdG9yLnBlcnBlbmRpY3VsYXIoKS5ub3JtYWxpemVkKCkubXVsdGlwbHkoMTApO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gYy5hZGQoYik7XHJcbiAgICAgICAgICAgIGNvbnN0IGUgPSBjLnN1YnRyYWN0KGIpO1xyXG4gICAgICAgICAgICAvLyBlbmQgYXJyb3doZWFkIHZhcmlhYmxlc1xyXG5cclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcblxyXG4gICAgICAgICAgICAvLyBsaW5lXHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyhcclxuICAgICAgICAgICAgICAgIChvcmlnaW5YICogc2NhbGUpICsgcGl4ZWxPcmlnaW4ueCxcclxuICAgICAgICAgICAgICAgICgtb3JpZ2luWSAqIHNjYWxlKSArIHBpeGVsT3JpZ2luLnkpO1xyXG4gICAgICAgICAgICAvLyBJZiBhcnJvd2hlYWQ6IFRydWUsIGhhdmUgdG8gbWFrZSB0aGUgdmVjdG9yIGxpbmUgc2hvcnRlci5cclxuICAgICAgICAgICAgaWYgKGFycm93KSB7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgIChvcmlnaW5YICogc2NhbGUpICsgcGl4ZWxPcmlnaW4ueCArIGMuaSxcclxuICAgICAgICAgICAgICAgICAgICAoLW9yaWdpblkgKiBzY2FsZSkgKyBwaXhlbE9yaWdpbi55ICsgYy5qKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgIChvcmlnaW5YICogc2NhbGUpICsgcGl4ZWxPcmlnaW4ueCArIHBpeGVsVmVjdG9yLmksXHJcbiAgICAgICAgICAgICAgICAgICAgKC1vcmlnaW5ZICogc2NhbGUpICsgcGl4ZWxPcmlnaW4ueSArIHBpeGVsVmVjdG9yLmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERyYXdpbmcgYSB0cmlhbmdsZSBmb3IgdGhlIGFycm93aGVhZC5cclxuICAgICAgICAgICAgaWYgKGFycm93KSB7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgIChvcmlnaW5YICogc2NhbGUpICsgcGl4ZWxPcmlnaW4ueCArIHBpeGVsVmVjdG9yLmksXHJcbiAgICAgICAgICAgICAgICAgICAgKC1vcmlnaW5ZICogc2NhbGUpICsgcGl4ZWxPcmlnaW4ueSArIHBpeGVsVmVjdG9yLmopO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhcclxuICAgICAgICAgICAgICAgICAgICAob3JpZ2luWCAqIHNjYWxlKSArIHBpeGVsT3JpZ2luLnggKyBkLmksXHJcbiAgICAgICAgICAgICAgICAgICAgKC1vcmlnaW5ZICogc2NhbGUpICsgcGl4ZWxPcmlnaW4ueSArIGQuaik7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgIChvcmlnaW5YICogc2NhbGUpICsgcGl4ZWxPcmlnaW4ueCArIGUuaSxcclxuICAgICAgICAgICAgICAgICAgICAoLW9yaWdpblkgKiBzY2FsZSkgKyBwaXhlbE9yaWdpbi55ICsgZS5qKTtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzAwMFwiO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwXCI7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZHJhd0hvcml6b250YWxBeGlzKCk7XHJcbiAgICAgICAgZHJhd1ZlcnRpY2FsQXhpcygpO1xyXG4gICAgICAgIGRyYXdHcmlkKCk7XHJcblxyXG4gICAgICAgIC8vIEV4YW1wbGVzIGFuZCB0ZXN0aW5nXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgLy8gQ29sb3JzIGZvciBQbG90dGluZ1xyXG4gICAgICAgICAgICBjb25zdCB3aGl0ZSA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgICAgICAgICBjb25zdCB5ZWxsb3cgPSBcIiNERENBNkZcIjtcclxuICAgICAgICAgICAgY29uc3QgYmx1ZSA9IFwiIzMxOTdGRlwiO1xyXG4gICAgICAgICAgICBjb25zdCByZWQgPSBcIiNFQTUzNTZcIjtcclxuICAgICAgICAgICAgY29uc3Qgb3JhbmdlID0gXCIjRkZBNTAwXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBBbmltYXRpb24gY29lZmZpY2llbnQgYmFzZWQgb24gY3VycmVudCB0aW1lLlxyXG4gICAgICAgICAgICBjb25zdCBhID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAvIDEwMDAwKSAqIDEwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgVjEgPSBuZXcgVmVjdG9yKDUsIDUpO1xyXG4gICAgICAgICAgICBkcmF3VmVjdG9yKFYxLCByZWQsIDAsIDAsIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBWMiA9IG5ldyBWZWN0b3IoMywgLTEpO1xyXG4gICAgICAgICAgICBkcmF3VmVjdG9yKFYyLCB5ZWxsb3csIFYxLmksIFYxLmosIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBWMyA9IFYxLmFkZChWMik7XHJcbiAgICAgICAgICAgIGRyYXdWZWN0b3IoVjMsIGJsdWUsIDAsIDAsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc3QgdGhldGEgPSAoTWF0aC5QSSAvIDIpICsgYTtcclxuICAgICAgICAgICAgLy8gY29uc3QgbWF0cml4ID0gbmV3IE1hdHJpeChcclxuICAgICAgICAgICAgLy8gICAgIE1hdGguY29zKHRoZXRhKSwgLU1hdGguc2luKHRoZXRhKSxcclxuICAgICAgICAgICAgLy8gICAgIE1hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IFYxVHJhbnNmb3JtID0gVjEudHJhbnNmb3JtKG1hdHJpeCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IFYyVHJhbnNmb3JtID0gVjIudHJhbnNmb3JtKG1hdHJpeCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IFYzVHJhbnNmb3JtID0gVjMudHJhbnNmb3JtKG1hdHJpeCk7XHJcbiAgICAgICAgICAgIC8vIGRyYXdWZWN0b3IoVjFUcmFuc2Zvcm0sIHJlZCwgMCwgMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIGRyYXdWZWN0b3IoVjJUcmFuc2Zvcm0sIHllbGxvdywgVjFUcmFuc2Zvcm0uaSwgVjFUcmFuc2Zvcm0uaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIGRyYXdWZWN0b3IoVjNUcmFuc2Zvcm0sIGJsdWUsIDAsIDAsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc3QgVjQgPSBWMS5tdWx0aXBseSgwLjUpLmFkZChWMyk7XHJcbiAgICAgICAgICAgIC8vIGRyYXdWZWN0b3IoVjQsIGJsdWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gZHJhd0Z1bmN0aW9uKHggPT4gMiAqIHgsICcjZmZmZmZmJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBUTyBETzogV29yayBvbiBhc3ltcHRvdGVzXHJcbiAgICAgICAgICAgIC8vIGRyYXdGdW5jdGlvbihmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIE1hdGgudGFuKHgpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIC8vIHJldHVybiB4ICoqIDM7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgLy8gaWYgKHggPCAyKSByZXR1cm4geCAqKiAyO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gaWYgKHggPT09IDIpIHJldHVybiA2O1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gaWYgKHggPiAyKSByZXR1cm4gMTAgLSB4O1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIC8vIHJldHVybiAxIC8geDtcclxuICAgICAgICAgICAgLy8gfSwgXCIjMzE5N0ZGXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gZHJhd0Z1bmN0aW9uKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gTWF0aC5zaW4oeCArIGEpO1xyXG4gICAgICAgICAgICAvLyB9LCB5ZWxsb3cpO1xyXG5cclxuICAgICAgICAgICAgLy8gZHJhd0Z1bmN0aW9uKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gTWF0aC5jb3MoeCkgKiBhO1xyXG4gICAgICAgICAgICAvLyB9LCByZWQpO1xyXG5cclxuICAgICAgICAgICAgLy8gLy8gbGluZVxyXG4gICAgICAgICAgICAvLyBkcmF3UGFyYW1ldHJpYyhcclxuICAgICAgICAgICAgLy8gICAgIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIChhICogdCkgLSBNYXRoLnNpbihhICogdCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gMSAtIE1hdGguY29zKGEgKiB0KTtcclxuICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAwLCAxLCB3aGl0ZVxyXG4gICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICAvLyAvLyBjaXJjbGVcclxuICAgICAgICAgICAgLy8gZHJhd1BhcmFtZXRyaWMoXHJcbiAgICAgICAgICAgIC8vICAgICBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBNYXRoLmNvcyh0KSArIGE7XHJcbiAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gTWF0aC5zaW4odCkgKyAxO1xyXG4gICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgIDAsIE1hdGguUEkgKiAyLFxyXG4gICAgICAgICAgICAvLyAgICAgYmx1ZVxyXG4gICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICAvLyAvLyBwb2ludFxyXG4gICAgICAgICAgICAvLyBkcmF3UGFyYW1ldHJpYyhcclxuICAgICAgICAgICAgLy8gICAgIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIE1hdGguY29zKHQpIC8gMjAgKyAoYSAtIE1hdGguc2luKGEpKTtcclxuICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBNYXRoLnNpbih0KSAvIDIwICsgKDEgLSBNYXRoLmNvcyhhKSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgMCwgTWF0aC5QSSAqIDIsXHJcbiAgICAgICAgICAgIC8vICAgICBvcmFuZ2UsXHJcbiAgICAgICAgICAgIC8vICAgICB0cnVlXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWRyYXcgdGhlIHNjcmVlbiBldmVyeSBmcmFtZS5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd1NjcmVlbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aWR0aCA9IGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGhlaWdodCA9IGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFpvb21pbmdcclxuICAgIGNhbnZhcy5vbndoZWVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgYmVmb3JlT2Zmc2V0WCA9IHBpeGVsT2Zmc2V0Lng7XHJcbiAgICAgICAgY29uc3QgYmVmb3JlT2Zmc2V0WSA9IHBpeGVsT2Zmc2V0Lnk7XHJcbiAgICAgICAgY29uc3QgYmVmb3JlT2Zmc2V0WENhcnQgPSBwaXhlbE9mZnNldC54IC8gc2NhbGU7XHJcbiAgICAgICAgY29uc3QgYmVmb3JlT2Zmc2V0WUNhcnQgPSBwaXhlbE9mZnNldC55IC8gc2NhbGU7XHJcbiAgICAgICAgLy8gQ2hhbmdlIHNjYWxlIGJhc2VkIG9uIG1vdXNld2hlZWwgaW5wdXQuXHJcbiAgICAgICAgc2NhbGUgLT0gZXZlbnQuZGVsdGFZICogc2NhbGUgLyAyNTAwO1xyXG4gICAgICAgIC8vIFdoZW4gem9vbWluZywga2VlcHMgdGhlIGNlbnRlciBvZiB0aGUgc2NyZWVuIGNvbnNpc3RlbnQuXHJcbiAgICAgICAgcGl4ZWxPZmZzZXQueCA9IGJlZm9yZU9mZnNldFhDYXJ0ICogc2NhbGU7XHJcbiAgICAgICAgcGl4ZWxPZmZzZXQueSA9IGJlZm9yZU9mZnNldFlDYXJ0ICogc2NhbGU7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnRzIHVzZXIgZnJvbSB6b29taW5nIG91dCB0b28gZmFyLlxyXG4gICAgICAgIGlmIChzY2FsZSA8IDgpIHtcclxuICAgICAgICAgICAgc2NhbGUgPSA4O1xyXG4gICAgICAgICAgICBwaXhlbE9mZnNldC54ID0gYmVmb3JlT2Zmc2V0WDtcclxuICAgICAgICAgICAgcGl4ZWxPZmZzZXQueSA9IGJlZm9yZU9mZnNldFk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBQYW5uaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRyYWcgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbW91c2VYID0gMDtcclxuICAgICAgICBsZXQgbW91c2VZID0gMDtcclxuXHJcbiAgICAgICAgY2FudmFzLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGRyYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICBtb3VzZVggPSBldmVudC5jbGllbnRYICsgcGl4ZWxPZmZzZXQueDtcclxuICAgICAgICAgICAgbW91c2VZID0gZXZlbnQuY2xpZW50WSArIHBpeGVsT2Zmc2V0Lnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYW52YXMub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRNb3VzZVggPSBldmVudC5jbGllbnRYO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudE1vdXNlWSA9IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZHJhZykge1xyXG4gICAgICAgICAgICAgICAgcGl4ZWxPZmZzZXQueCA9IG1vdXNlWCAtIGN1cnJlbnRNb3VzZVg7XHJcbiAgICAgICAgICAgICAgICBwaXhlbE9mZnNldC55ID0gbW91c2VZIC0gY3VycmVudE1vdXNlWTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBkcmFnID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd1NjcmVlbigpO1xyXG59O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==