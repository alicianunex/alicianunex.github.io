(function () {
  var Util,
     function Util (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    };

  Util = (function () {
    function Util() {}

    Util.prototype.extend = function (custom, defaults) {
      var key, value;
      for (key in custom) {
        value = custom[key];
        if (value != null) {
          defaults[key] = value;
        }
      }
      return defaults;
    };

    Util.prototype.isMobile = function (agent) {
      return /Android|webOS|iPhone|iPad|iPod|/i.test(
        agent,
      );
    };

    return Util;
  })();

  this.WOW = (function () {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
    }


    WOW.prototype.scrollHandler = function () {
      return (this.scrolled = true);
    };

    WOW.prototype.scrollCallback = function () {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = function () {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!box) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }.call(this);
        if (!this.boxes.length) {
          return this.stop();
        }
      }
    };
  
    return WOW;
  })();
}.call(this));
