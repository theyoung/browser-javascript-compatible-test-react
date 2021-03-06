let tests = [
    {
    name: 'Object/array literal extensions',
    significance: 'large',
    subtests: [
      {
        name: 'Getter accessors1',
        exec: function () {
        return ({ get x(){ return 1; } }).x === 1;
        }
      },
      {
        name: 'Setter accessors',
        exec: function () {/*
          var value = 0;
          ({ set x(v){ value = v; } }).x = 1;
          return value === 1;
        */},
      }, 
      {
        name: 'Trailing commas in object literals',
        exec: function () {/*
          return { a: true, }.a === true;
        */},
      },
      {
        name: 'Trailing commas in array literals',
        exec: function () {/*
          return [1,].length === 1;
        */},
      },
      {
        name: 'Reserved words as property names',
        exec: function () {/*
          return ({ if: 1 }).if === 1;
        */},
      },
      ]
    },
    {
      name: 'Object static methods',
      significance: 'large',
      subtests: [{
        name: 'Object.create',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create',
        exec: function () {
          return typeof Object.create === 'function';
        },
      },
      {
        name: 'Object.defineProperty',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty',
        exec: function () {
          return typeof Object.defineProperty === 'function';
        },
      },
      {
        name: 'Object.defineProperties',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties',
        exec: function () {
          return typeof Object.defineProperties === 'function';
        },
      },
      {
        name: 'Object.getPrototypeOf',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf',
        exec: function () {
          return typeof Object.getPrototypeOf === 'function';
        },
      },
      {
        name: 'Object.keys',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys',
        exec: function () {
          return typeof Object.keys === 'function';
        },
      },
      {
        name: 'Object.seal',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal',
        exec: function () {
          return typeof Object.seal === 'function';
        },
      },
      {
        name: 'Object.freeze',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze',
        exec: function () {
          return typeof Object.freeze === 'function';
        },
      },
      {
        name: 'Object.preventExtensions',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions',
        exec: function () {
          return typeof Object.preventExtensions === 'function';
        },
      },
      {
        name: 'Object.isSealed',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed',
        exec: function () {
          return typeof Object.isSealed === 'function';
        },
      },
      {
        name: 'Object.isFrozen',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen',
        exec: function () {
          return typeof Object.isFrozen === 'function';
        },
      },
      {
        name: 'Object.isExtensible',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible',
        exec: function () {
          return typeof Object.isExtensible === 'function';
        },
      },
      {
        name: 'Object.getOwnPropertyDescriptor',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor',
        exec: function () {
          return typeof Object.getOwnPropertyDescriptor === 'function';
        },
      },
      {
        name: 'Object.getOwnPropertyNames',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames',
        exec: function () {
          return typeof Object.getOwnPropertyNames === 'function';
        },
      },
    ],
    },
    {
      name: 'Array methods',
      significance: 'large',
      subtests: [
        {
          name: 'Array.isArray',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray',
          exec: function () {
            return typeof Array.isArray === 'function';
          },
        },
        {
          name: 'Array.prototype.indexOf',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
          exec: function () {
            return typeof Array.prototype.indexOf === 'function';
          },
          
        },
        {
          name: 'Array.prototype.lastIndexOf',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf',
          exec: function () {
            return typeof Array.prototype.lastIndexOf === 'function';
          },
          
        },
        {
          name: 'Array.prototype.every',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
          exec: function () {
            return typeof Array.prototype.every === 'function';
          },
          
        },
        {
          name: 'Array.prototype.some',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
          exec: function () {
            return typeof Array.prototype.some === 'function';
          },
          
        },
        {
          name: 'Array.prototype.forEach',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
          exec: function () {
            return typeof Array.prototype.forEach === 'function';
          },
          
        },
        {
          name: 'Array.prototype.map',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
          exec: function () {
            return typeof Array.prototype.map === 'function';
          },
          
        },
        {
          name: 'Array.prototype.filter',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
          exec: function () {
            return typeof Array.prototype.filter === 'function';
          },
          
        },
        {
          name: 'Array.prototype.reduce',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
          exec: function () {
            return typeof Array.prototype.reduce === 'function';
          },
          
        },
        {
          name: 'Array.prototype.reduceRight',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight',
          exec: function () {
            return typeof Array.prototype.reduceRight === 'function';
          },
          
        },
        {
          name: 'Array.prototype.sort: compareFn must be function or undefined',
          exec: function () {
            try {
              [1,2].sort(null);
              return false;
            } catch (enull) {}
            try {
              [1,2].sort(true);
              return false;
            } catch (etrue) {}
            try {
              [1,2].sort({});
              return false;
            } catch (eobj) {}
            try {
              [1,2].sort([]);
              return false;
            } catch (earr) {}
            try {
              [1,2].sort(/a/g);
              return false;
            } catch (eregex) {}
            return true;
          },
          
        },
        {
          name: 'Array.prototype.sort: compareFn may be explicit undefined',
          exec: function () {
            try {
              var arr = [2, 1];
              return arr.sort(undefined) === arr && arr[0] === 1 && arr[1] === 2;
            } catch (e) {
              return false;
            }
          },
        },
        {
          name: 'Array.prototype.unshift: [].unshift(0) returns the unshifted count',
          exec: function () {
            return [].unshift(0) === 1;
          },
          
        }
      ],
    },
    {
      name: 'String properties and methods',
      significance: 'small',
      subtests: [{
        name: 'Property access on strings',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Character_access',
        exec: function () {
          return "foobar"[3] === "b";
        },
        
      },
      {
        name: 'String.prototype.split',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
        exec: function () {
          return typeof String.prototype.split === 'function'
            && ''.split().length === 1 && ''.split()[0] === ''
            && ''.split(undefined).length === 1 && ''.split(undefined)[0] === ''
            && 'ab'.split().length === 1 && 'ab'.split()[0] === 'ab'
            && 'ab'.split(undefined).length === 1 && 'ab'.split(undefined)[0] === 'ab'
            && '0'.split(undefined, 0).length === 0
            && 'ab'.split(/(?:ab)*/).length === 2
            && '.'.split(/(.?)(.?)/).length === 4
            && 'tesst'.split(/(s)*/)[1] !== 't'
            && 'test'.split(/(?:)/, -1).length === 4
            && ''.split(/.?/).length === 0
            && '.'.split(/()()/).length === 1;
        },
        
      },
      {
        name: 'String.prototype.substr',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr',
        exec: function () {
          return '0b'.substr(-1) === 'b';
        },
        
      },
      {
        name: 'String.prototype.trim',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim',
        exec: function () {
          return typeof String.prototype.trim === 'function';
        },
        
        separator: 'after'
      }
      ]
    },
    {
      name: 'Date methods',
      significance: 'small',
      subtests: [{
        name: 'Date.prototype.toISOString',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString',
        exec: function () {
          return typeof Date.prototype.toISOString === 'function';
        },
      },
      {
        name: 'Date.now',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now',
        exec: function () {
          return typeof Date.now === 'function';
        },
      },
      {
        name: 'Date.prototype.toJSON',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON',
        exec: function () {
          try {
            return Date.prototype.toJSON.call(new Date(NaN)) === null;
          } catch (e) {
            return false;
          }
        },
        
      }]
    },
    {
      name: 'JSON',
      significance: 'medium',
      subtests: [{
        name: 'JSON',
        mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
        exec: function () {
          return typeof JSON === 'object';
        },
        }
      ]
    },
    {
      name: 'Immutable globals',
      significance: 'small',
      subtests: [
      {
        name: 'undefined',
        exec: function () {/*
          undefined = 12345;
          var result = typeof undefined === 'undefined';
          undefined = void 0;
          return result;
        */},
      },
      {
        name: 'NaN',
        exec: function () {/*
          NaN = false;
          var result = typeof NaN === 'number';
          NaN = Math.sqrt(-1);
          return result;
        */},
      },
      {
        name: 'Infinity',
        exec: function () {/*
          Infinity = false;
          var result = typeof Infinity === 'number';
          Infinity = 1/0;
          return result;
        */},
      }]
    },
    {
      name: 'Miscellaneous',
      significance: 'medium',
      subtests: [{
        name: 'Function.prototype.apply permits array-likes',
        exec: function () {
          try {
            return (function(a,b) { return a === 1 && b === 2; }).apply({}, {0:1, 1:2, length:2});
          } catch (e) {
            return false;
          }
        },
      },
      {
        name: 'parseInt ignores leading zeros',
        exec: function () {
          return parseInt('010') === 10;
        },
      },
      {
        name: 'Function "prototype" property is non-enumerable',
        exec: function () {/*
          return !Function().propertyIsEnumerable('prototype');
        */},
      },
      {
        name: 'Arguments toStringTag is "Arguments"',
        exec: function () {/*
          return (function(){ return Object.prototype.toString.call(arguments) === '[object Arguments]'; }());
        */},
      },
      {
        name: 'Zero-width chars in identifiers',
        exec: function () {/*
          var _\u200c\u200d = true;
          return _\u200c\u200d;
        */},
      },
      {
        name: 'Unreserved words',
        exec: function () {/*
          var abstract, boolean, byte, char, double, final, float, goto, int, long,
            native, short, synchronized, transient, volatile;
          return true;
        */},
      },
      {
        name: 'Enumerable properties can be shadowed by non-enumerables',
        exec: function () {/*
          var result = true;
          Object.prototype.length = 42;
          for (var i in Function) {
              if (i === 'length') {
                  result = false;
              }
          }
          delete Object.prototype.length;
          return result;
        */},
      },
      {
        name: 'Thrown functions have proper "this" values',
        exec: function () {/*
          try {
            throw function() { return !('a' in this); };
          }
          catch(e) {
            var a = true;
            return e();
          }
        */},
      }]
    },
    {
      name: 'Strict mode',
      significance: 'large',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode',
      subtests: [
      {
        name: 'reserved words',
        exec: function() {/*
          'use strict';
          var words = 'implements,interface,let,package,private,protected,public,static,yield'.split(',');
          for (var i = 0; i < 9; i+=1) {
            try { eval('var ' + words[i]); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          }
          return true;
        */},
      },
      {
        name: '"this" is undefined in functions',
        exec: function() {/*
          'use strict';
          return this === void undefined && (function(){ return this === void undefined; }).call();
        */},
      },
      {
        name: '"this" is not coerced to object in primitive methods',
        exec: function() {/*
          'use strict';
          return (function(){ return typeof this === 'string' }).call('')
            && (function(){ return typeof this === 'number' }).call(1)
            && (function(){ return typeof this === 'boolean' }).call(true);
        */},
      },
      {
        name: '"this" is not coerced to object in primitive accessors',
        exec: function() {/*
          'use strict';
    
          function test(Class, instance) {
            Object.defineProperty(Class.prototype, 'test', {
              get: function () { passed = passed && this === instance; },
              set: function () { passed = passed && this === instance; },
              configurable: true
            });
    
            var passed = true;
            instance.test;
            instance.test = 42;
            return passed;
          }
    
          return test(String, '')
            && test(Number, 1)
            && test(Boolean, true);
        */},
      },
      {
        name: 'legacy octal is a SyntaxError',
        exec: function() {/*
          'use strict';
          try { eval('010');     return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          try { eval('"\\010"'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          return true;
        */},
      },
      {
        name: 'assignment to unresolvable identifiers is a ReferenceError',
        exec: function() {/*
          'use strict';
          try { eval('__i_dont_exist = 1'); } catch (err) { return err instanceof ReferenceError; }
        */},
      },
      {
        name: 'assignment to eval or arguments is a SyntaxError',
        exec: function() {/*
          'use strict';
          try { eval('eval = 1');      return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          try { eval('arguments = 1'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          try { eval('eval++');        return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          try { eval('arguments++');   return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          return true;
        */},
      },
      {
        name: 'assignment to non-writable properties is a TypeError',
        exec: function() {/*
          'use strict';
          try { Object.defineProperty({},"x",{ writable: false }).x = 1; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
          try { Object.preventExtensions({}).x = 1;                      return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
          try { ({ get x(){ } }).x = 1;                                  return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
          try { (function f() { f = 123; })();                           return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
          return true;
        */},
      },
      {
        name: 'eval or arguments bindings is a SyntaxError',
        exec: function() {/*
          'use strict';
          try { eval('var eval');                return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          try { eval('var arguments');           return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          try { eval('(function(eval){})');      return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          try { eval('(function(arguments){})'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          try { eval('try{}catch(eval){}');      return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          try { eval('try{}catch(arguments){}'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
          return true;
        */},
      },
      {
        name: 'arguments.caller removed or is a TypeError',
        exec: function() {/*
          'use strict';
          if ('caller' in arguments) {
            try { arguments.caller; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
          }
          return true;
        */},
      },
      {
        name: 'arguments.callee is a TypeError',
        exec: function() {/*
          'use strict';
          try { arguments.callee; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
          return true;
        */},
      },
      {
        name: '(function(){}).caller and (function(){}).arguments is a TypeError',
        exec: function() {/*
          'use strict';
          try { (function(){}).caller;    return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
          try { (function(){}).arguments; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
          return true;
        */},
      },
      {
        name: 'arguments is unmapped',
        exec: function() {/*
          'use strict';
          return (function(x){
            x = 2;
            return arguments[0] === 1;
          })(1) && (function(x){
            arguments[0] = 2;
            return x === 1;
          })(1);
        */},
      },
      {
        name: 'eval() can\'t create bindings',
        exec: function() {/*
          'use strict';
          try { eval('var __some_unique_variable;'); __some_unique_variable; } catch (err) { return err instanceof ReferenceError; }
        */},
      },
      {
        name: 'deleting bindings is a SyntaxError',
        exec: function() {/*
          'use strict';
          try { eval('var x; delete x;'); } catch (err) { return err instanceof SyntaxError; }
        */},
      },
      {
        name: 'deleting non-configurable properties is a TypeError',
        exec: function() {/*
          'use strict';
          try { delete Object.prototype; } catch (err) { return err instanceof TypeError; }
        */},
      },
      {
        name: '"with" is a SyntaxError',
        exec: function() {/*
          'use strict';
          try { eval('with({}){}'); } catch (err) { return err instanceof SyntaxError; }
        */},
      },
      {
        name: 'repeated parameter names is a SyntaxError',
        exec: function() {/*
          'use strict';
          try { eval('function f(x, x) { }'); } catch (err) { return err instanceof SyntaxError; }
        */},
      },
      {
        name: 'function expressions with matching name and argument are valid',
        exec: function() {/*
          var foo = function bar(bar) {'use strict'};
          return typeof foo === 'function';
        */},
      }]
    },
    {
      name: 'proper tail calls (tail call optimisation)',
      category: 'optimisation',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-tail-position-calls',
      note_id: 'proper-tail-calls',
      note_html: '<a href="https://www.stefanjudis.com/today-i-learned/proper-tail-calls-in-javascript/">'
        + 'The feature can be enabled with <code>use strict</code> and JavaScript flag <code>"--harmony-tailcalls"</code></a> '
        + 'in certain versions of Node.js. Since Node.js 8.2.1, the V8 flags '
        + '<code>--harmony-tailcalls</code> and <code>--harmony-explicit-tailcalls</code> '
        + 'have been removed. See: '
        + '<a href="https://www.chromestatus.com/feature/5516876633341952">Chrome Platform Status</a>, '
        + '<a href="https://javascript.plainenglish.io/tail-calls-in-javascript-will-there-be-a-comeback-63ac3a0523a5">'
        + 'blog in JavaScript in Plain English</a>, '
        + 'and <a href="https://v8.dev/blog/modern-javascript#proper-tail-calls">V8 Dev Blog</a> for details.',
      subtests: [
        {
          name: 'direct recursion',
          exec: function() {/*
            "use strict";
            return (function f(n){
              if (n <= 0) {
                return  "foo";
              }
              return f(n - 1);
            }(1e6)) === "foo";
          */},
          
        },
        {
          name: 'mutual recursion',
          exec: function() {/*
            "use strict";
            function f(n){
              if (n <= 0) {
                return  "foo";
              }
              return g(n - 1);
            }
            function g(n){
              if (n <= 0) {
                return  "bar";
              }
              return f(n - 1);
            }
            return f(1e6) === "foo" && f(1e6+1) === "bar";
          */},
          
        }
      ]
    },
    {
      name: 'arrow functions',
      category: 'functions',
      significance: 'large',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
      subtests: [
        {
          name: '0 parameters',
          exec: function(){/*
            return (() => 5)() === 5;
          */},
        },
        {
          name: '1 parameter, no brackets',
          exec: function(){/*
            var b = x => x + "foo";
            return (b("fee fie foe ") === "fee fie foe foo");
          */},
          
        },
        {
          name: 'multiple parameters',
          exec: function(){/*
            var c = (v, w, x, y, z) => '' + v + w + x + y + z;
            return (c(6, 5, 4, 3, 2) === '65432');
          */},
          
        },
        {
          name: 'lexical "this" binding',
          exec: function(){/*
            var d = { x : "bar", y : function() { return z => this.x + z; }}.y();
            var e = { x : "baz", y : d };
            return d("ley") === "barley" && e.y("ley") === "barley";
          */},
          
        },
        {
          name: '"this" unchanged by call or apply',
          exec: function(){/*
            var d = { x : "foo", y : function() { return () => this.x; }};
            var e = { x : "bar" };
            return d.y().call(e) === "foo" && d.y().apply(e) === "foo";
          */},
          
        },
        {
          name: 'can\'t be bound, can be curried',
          exec: function(){/*
            var d = { x : "bar", y : function() { return z => this.x + z; }};
            var e = { x : "baz" };
            return d.y().bind(e, "ley")() === "barley";
          */},
          
        },
        {
          name: 'lexical "arguments" binding',
          exec: function(){/*
            var f = (function() { return z => arguments[0]; }(5));
            return f(6) === 5;
          */},
          
        },
        {
          name: 'no line break between params and <code>=></code>',
          exec: function(){/*
            return (() => {
              try { Function("x\n => 2")(); } catch(e) { return true; }
            })();
          */},
          
        },
        {
          name: 'correct precedence',
          exec: function(){/*
            return (() => {
              try { Function("0 || () => 2")(); } catch(e) { return true; }
            })();
          */},
          
        },
        {
          name: 'no "prototype" property',
          exec: function(){/*
            var a = () => 5;
            return !a.hasOwnProperty("prototype");
          */},
          
        },
        {
          name: 'lexical "super" binding in constructors',
          exec: function(){/*
            var received;
    
            class B {
              constructor (arg) {
                received = arg;
              }
            }
            class C extends B {
              constructor () {
                var callSuper = () => super('foo');
                callSuper();
              }
            }
            return new C instanceof C && received === 'foo'
          */},
          
        },
        {
          name: 'lexical "super" binding in methods',
          exec: function(){/*
            class B {
              qux() {
                return "quux";
              }
            }
            class C extends B {
              baz() {
                return x => super.qux();
              }
            }
            var arrow = new C().baz();
            return arrow() === "quux";
          */},
          
        },
        {
          name: 'lexical "new.target" binding',
          exec: function(){/*
            function C() {
              return x => new.target;
            }
            return new C()() === C && C()() === void undefined;
          */},
          
        }
      ],
    },
    {
      name: 'const',
      category: 'bindings',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const',
      subtests: [
        {
          name: 'basic support',
          exec: function() {/*
            const foo = 123;
            return (foo === 123);
          */},
          
        },
        {
          name: 'is block-scoped',
          exec: function() {/*
            const bar = 123;
            { const bar = 456; }
            return bar === 123;
          */},
          
        },
        {
          name: 'scope shadow resolution',
          exec: function(){/*
            try {
                { const bar = 456; }
                const bar = 123;
                return bar === 123;
            } catch(e) {
              return false;
            }
          */},
          
        },
        {
          name: 'cannot be in statements',
          exec: function() {/*
            const bar = 1;
            try {
              Function("if(true) const baz = 1;")();
            } catch(e) {
              return true;
            }
          */},
          
        },
        {
          name: 'redefining a const is an error',
          exec: function() {/*
            const baz = 1;
            try {
              Function("const foo = 1; foo = 2;")();
            } catch(e) {
              return true;
            }
          */},
          
        },
        {
          name: 'for loop statement scope',
          exec: function(){/*
           const baz = 1;
           for(const baz = 0; false;) {}
           return baz === 1;
           */},
          
        },
        {
          name: 'for-in loop iteration scope',
          exec: function(){/*
            var scopes = [];
            for(const i in { a:1, b:1 }) {
              scopes.push(function(){ return i; });
            }
            return (scopes[0]() === "a" && scopes[1]() === "b");
          */},
          
        },
        {
          name: 'for-of loop iteration scope',
          exec: function(){/*
            var scopes = [];
            for(const i of ['a','b']) {
              scopes.push(function(){ return i; });
            }
            return (scopes[0]() === "a" && scopes[1]() === "b");
          */},
          
        },
        {
          name: 'temporal dead zone',
          exec: function(){/*
            var passed = (function(){ try { qux; } catch(e) { return true; }}());
            function fn() { passed &= qux === 456; }
            const qux = 456;
            fn();
            return passed;
          */},
          
        },
        {
          name: 'basic support (strict mode)',
          exec: function() {/*
            "use strict";
            const foo = 123;
            return (foo === 123);
          */},
          
        },
        {
          name: 'is block-scoped (strict mode)',
          exec: function() {/*
            'use strict';
            const bar = 123;
            { const bar = 456; }
            return bar === 123;
          */},
          
        },
        {
          name: 'scope shadow resolution (strict mode)',
          exec: function(){/*
            'use strict';
            try {
                { const bar = 456; }
                const bar = 123;
                return bar === 123;
            } catch(e) {
              return false;
            }
          */},
          
        },
        {
          name: 'cannot be in statements (strict mode)',
          exec: function() {/*
            'use strict';
            const bar = 1;
            try {
              Function("'use strict'; if(true) const baz = 1;")();
            } catch(e) {
              return true;
            }
          */},
          
        },
        {
          name: 'redefining a const (strict mode)',
          exec: function() {/*
            'use strict';
            const baz = 1;
            try {
              Function("'use strict'; const foo = 1; foo = 2;")();
            } catch(e) {
              return true;
            }
          */},
          
        },
        {
          name: 'for loop statement scope (strict mode)',
          exec: function(){/*
            'use strict';
            const baz = 1;
            for(const baz = 0; false;) {}
            return baz === 1;
          */},
          
        },
        {
          name: 'for-in loop iteration scope (strict mode)',
          exec: function(){/*
            'use strict';
            var scopes = [];
            for(const i in { a:1, b:1 }) {
              scopes.push(function(){ return i; });
            }
            return (scopes[0]() === "a" && scopes[1]() === "b");
          */},
          
        },
        {
          name: 'for-of loop iteration scope (strict mode)',
          exec: function(){/*
            'use strict';
            var scopes = [];
            for(const i of ['a','b']) {
              scopes.push(function(){ return i; });
            }
            return (scopes[0]() === "a" && scopes[1]() === "b");
          */},
          
        },
        {
          name: 'temporal dead zone (strict mode)',
          exec: function(){/*
            'use strict';
            var passed = (function(){ try { qux; } catch(e) { return true; }}());
            function fn() { passed &= qux === 456; }
            const qux = 456;
            fn();
            return passed;
          */},
          
        }
      ]
    },
    {
      name: 'basic support (strict mode)',
      subtests: [
        {
          name: 'basic support',
          exec: function() {/*
            "use strict";
            const foo = 123;
            return (foo === 123);
          */},
        },
      ]
      ,
    },
    {
      name: 'is block-scoped (strict mode)',
      exec: function() {/*
        'use strict';
        const bar = 123;
        { const bar = 456; }
        return bar === 123;
      */},
      subtests:[{
        name: 'is block-scoped (strict mode)',
        exec: function() {/*
          'use strict';
          const bar = 123;
          { const bar = 456; }
          return bar === 123;
        */},
      }
      ]
    },
    {
      name: 'scope shadow resolution (strict mode)',
      exec: function(){/*
        'use strict';
        try {
            { const bar = 456; }
            const bar = 123;
            return bar === 123;
        } catch(e) {
          return false;
        }
      */},
      subtests: [{
        name: 'scope shadow resolution (strict mode)',
        exec: function(){/*
          'use strict';
          try {
              { const bar = 456; }
              const bar = 123;
              return bar === 123;
          } catch(e) {
            return false;
          }
        */},
      }]
    },
    {
      name: 'cannot be in statements (strict mode)',
      exec: function() {/*
        'use strict';
        const bar = 1;
        try {
          Function("'use strict'; if(true) const baz = 1;")();
        } catch(e) {
          return true;
        }
      */},
      subtests: [{
        name: 'cannot be in statements (strict mode)',
        exec: function() {/*
          'use strict';
          const bar = 1;
          try {
            Function("'use strict'; if(true) const baz = 1;")();
          } catch(e) {
            return true;
          }
        */},
      }]

    },
    {
      name: 'redefining a const (strict mode)',
      exec: function() {/*
        'use strict';
        const baz = 1;
        try {
          Function("'use strict'; const foo = 1; foo = 2;")();
        } catch(e) {
          return true;
        }
      */},
      subtests: [{
        name: 'redefining a const (strict mode)',
        exec: function() {/*
          'use strict';
          const baz = 1;
          try {
            Function("'use strict'; const foo = 1; foo = 2;")();
          } catch(e) {
            return true;
          }
        */},
      }]
    },
    {
      name: 'for-in loop iteration scope (strict mode)',
      exec: function(){/*
        'use strict';
        var scopes = [];
        for(const i in { a:1, b:1 }) {
          scopes.push(function(){ return i; });
        }
        return (scopes[0]() === "a" && scopes[1]() === "b");
      */},
      subtests: [{
        name: 'for-in loop iteration scope (strict mode)',
        exec: function(){/*
          'use strict';
          var scopes = [];
          for(const i in { a:1, b:1 }) {
            scopes.push(function(){ return i; });
          }
          return (scopes[0]() === "a" && scopes[1]() === "b");
        */},
      }]
    },
    {
      name: 'temporal dead zone (strict mode)',
      exec: function(){/*
        'use strict';
        var passed = (function(){ try { qux; } catch(e) { return true; }}());
        function fn() { passed &= qux === 456; }
        const qux = 456;
        fn();
        return passed;
      */},
      subtests: [{
        name: 'temporal dead zone (strict mode)',
        exec: function(){/*
          'use strict';
          var passed = (function(){ try { qux; } catch(e) { return true; }}());
          function fn() { passed &= qux === 456; }
          const qux = 456;
          fn();
          return passed;
        */},
      }]
    },
    {
      name: 'let',
      category: 'bindings',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let',
      subtests: [
        {
          name: 'basic support',
          exec: function(){/*
            let foo = 123;
            return (foo === 123);
          */},
        },
        {
          name: 'is block-scoped',
          exec: function(){/*
            let bar = 123;
            { let bar = 456; }
            return bar === 123;
          */},
        },
        {
          name: 'scope shadow resolution',
          exec: function(){/*
            try {
                { let bar = 456; }
                let bar = 123;
                return bar === 123;
            } catch(e) {
              return false;
            }
          */},
        },
        {
          name: 'cannot be in statements',
          exec: function(){/*
            let bar = 1;
            try {
              Function("if(true) let baz = 1;")();
            } catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'for loop statement scope',
          exec: function(){/*
            let baz = 1;
            for(let baz = 0; false;) {}
            return baz === 1;
          */},
        },
        {
          name: 'temporal dead zone',
          exec: function(){/*
            var passed = (function(){ try {  qux; } catch(e) { return true; }}());
            function fn() { passed &= qux === 456; }
            let qux = 456;
            fn();
            return passed;
          */},
        },
        {
          name: 'for/for-in loop iteration scope',
          exec: function(){/*
            let scopes = [];
            for(let i = 0; i < 2; i++) {
              scopes.push(function(){ return i; });
            }
            let passed = (scopes[0]() === 0 && scopes[1]() === 1);
    
            scopes = [];
            for(let i in { a:1, b:1 }) {
              scopes.push(function(){ return i; });
            }
            passed &= (scopes[0]() === "a" && scopes[1]() === "b");
            return passed;
          */},
          subtests: [{
            name: 'for/for-in loop iteration scope',
            exec: function(){/*
              let scopes = [];
              for(let i = 0; i < 2; i++) {
                scopes.push(function(){ return i; });
              }
              let passed = (scopes[0]() === 0 && scopes[1]() === 1);
      
              scopes = [];
              for(let i in { a:1, b:1 }) {
                scopes.push(function(){ return i; });
              }
              passed &= (scopes[0]() === "a" && scopes[1]() === "b");
              return passed;
            */},
          }]
        },
        {
          name: 'for-in loop binding shadowing parameter',
          exec: function(){/*
            try {
              Function("function f(e) { for (let e in {}) e }");
              return true;
            } catch(e) {
              return false;
            }
          */},
        },
        {
          name: 'basic support (strict mode)',
          exec: function(){/*
            'use strict';
            let foo = 123;
            return (foo === 123);
          */},
        },
        {
          name: 'is block-scoped (strict mode)',
          exec: function(){/*
            'use strict';
            let bar = 123;
            { let bar = 456; }
            return bar === 123;
          */},
        },
        {
          name: 'scope shadow resolution (strict mode)',
          exec: function(){/*
            'use strict';
            try {
                { let bar = 456; }
                let bar = 123;
                return bar === 123;
            } catch(e) {
              return false;
            }
          */},
        },
        {
          name: 'cannot be in statements (strict mode)',
          exec: function(){/*
            'use strict';
            let bar = 1;
            try {
              Function("'use strict'; if(true) let baz = 1;")();
            } catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'for loop statement scope (strict mode)',
          exec: function(){/*
            'use strict';
            let baz = 1;
            for(let baz = 0; false;) {}
            return baz === 1;
          */},
        },
        {
          name: 'temporal dead zone (strict mode)',
          exec: function(){/*
            'use strict';
            var passed = (function(){ try {  qux; } catch(e) { return true; }}());
            function fn() { passed &= qux === 456; }
            let qux = 456;
            fn();
            return passed;
          */},
        },
        {
          name: 'for/for-in loop iteration scope (strict mode)',
          exec: function(){/*
            'use strict';
            let scopes = [];
            for(let i = 0; i < 2; i++) {
              scopes.push(function(){ return i; });
            }
            let passed = (scopes[0]() === 0 && scopes[1]() === 1);
    
            scopes = [];
            for(let i in { a:1, b:1 }) {
              scopes.push(function(){ return i; });
            }
            passed &= (scopes[0]() === "a" && scopes[1]() === "b");
            return passed;
          */},
        },
        {
          name: 'for-in loop binding shadowing parameter (strict mode)',
          exec: function(){/*
            try {
              Function("'use strict'; function f(e) { for (let e in {}) e }");
              return true;
            } catch(e) {
              return false;
            }
          */},
        }
      ],
    },
    {
      name: 'default function parameters',
      category: 'syntax',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters',
      subtests: [
        {
          name: 'basic functionality',
          exec: function(){/*
            return (function (a = 1, b = 2) { return a === 3 && b === 2; }(3));
          */},
        },
        {
          name: 'explicit undefined defers to the default',
          exec: function(){/*
            return (function (a = 1, b = 2) { return a === 1 && b === 3; }(undefined, 3));
          */},
        },
        {
          name: 'defaults can refer to previous params',
          exec: function(){/*
            return (function (a, b = a) { return b === 5; }(5));
          */},
        },
        {
          name: 'arguments object interaction',
          exec: function(){/*
            return (function (a = "baz", b = "qux", c = "quux") {
              a = "corge";
              return arguments.length === 2
                && arguments[0] === "foo"
                && arguments[1] === "bar";
            }("foo", "bar"));
          */},
        },
        {
          name: 'temporal dead zone',
          exec: function(){/*
            return (function(x = 1) {
              try {
                eval("(function(a=a){}())");
                return false;
              } catch(e) {}
              try {
                eval("(function(a=b,b){}())");
                return false;
              } catch(e) {}
              return true;
            }());
          */},
        },
        {
          name: 'separate scope',
          exec: function(){/*
            return (function(a=function(){
              return typeof b === 'undefined';
            }){
              var b = 1;
              return a();
            }());
          */},
        },
        {
          name: 'new Function() support',
          exec: function() {/*
            return new Function("a = 1", "b = 2",
              "return a === 3 && b === 2;"
            )(3);
          */},
        }
      ]
    },
    {
      name: 'rest parameters',
      category: 'syntax',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters',
      subtests: [
        {
          name: 'basic functionality',
          exec: function() {/*
            return (function (foo, ...args) {
              return args instanceof Array && args + "" === "bar,baz";
            }("foo", "bar", "baz"));
          */},
        },
        {
          name: 'function \'length\' property',
          exec: function() {/*
            return function(a, ...b){}.length === 1 && function(...c){}.length === 0;
          */},
        },
        {
          name: 'arguments object interaction',
          exec: function() {/*
            return (function (foo, ...args) {
              foo = "qux";
              return arguments.length === 3
                && arguments[0] === "foo"
                && arguments[1] === "bar"
                && arguments[2] === "baz";
            }("foo", "bar", "baz"));
          */},
        },
        {
          name: 'can\'t be used in setters',
          exec: function() {/*
            return (function (...args) {
              try {
                eval("({set e(...args){}})");
              } catch(e) {
                return true;
              }
            }());
          */},
        },
        {
          name: 'new Function() support',
          exec: function() {/*
            return new Function("a", "...b",
              "return b instanceof Array && a+b === 'foobar,baz';"
            )('foo','bar','baz');
          */},
        }
      ],
    },
    {
      name: 'spread syntax for iterable objects',
      category: 'syntax',
      significance: 'large',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists-runtime-semantics-argumentlistevaluation',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator',
      subtests: [
        {
          name: 'with arrays, in function calls',
          exec: function () {/*
            return Math.max(...[1, 2, 3]) === 3
          */},
        },
        {
          name: 'with arrays, in array literals',
          exec: function() {/*
           return [...[1, 2, 3]][2] === 3;
          */},
        },
        {
          name: 'with sparse arrays, in function calls',
          exec: function () {/*
            var a = Array(...[,,]);
            return "0" in a && "1" in a && '' + a[0] + a[1] === "undefinedundefined";
          */},
        },
        {
          name: 'with sparse arrays, in array literals',
          exec: function() {/*
            var a = [...[,,]];
            return "0" in a && "1" in a && '' + a[0] + a[1] === "undefinedundefined";
          */},
        },
        {
          name: 'with strings, in function calls',
          exec: function() {/*
           return Math.max(..."1234") === 4;
          */},
        },
        {
          name: 'with strings, in array literals',
          exec: function() {/*
           return ["a", ..."bcd", "e"][3] === "d";
          */},
        },
        {
          name: 'with astral plane strings, in function calls',
          exec: function() {/*
           return Array(..."????????")[0] === "????";
          */},
        },
        {
          name: 'with astral plane strings, in array literals',
          exec: function() {/*
           return [..."????????"][0] === "????";
          */},
        },
        {
          name: 'with generator instances, in calls',
          exec: function () {/*
            var iterable = (function*(){ yield 1; yield 2; yield 3; }());
            return Math.max(...iterable) === 3;
          */},
        },
        {
          name: 'with generator instances, in arrays',
          exec: function () {/*
            var iterable = (function*(){ yield "b"; yield "c"; yield "d"; }());
            return ["a", ...iterable, "e"][3] === "d";
          */},
        },
        {
          name: 'with generic iterables, in calls',
          exec: function () {/*
            var iterable = global.__createIterableObject([1, 2, 3]);
            return Math.max(...iterable) === 3;
          */},
        },
        {
          name: 'with generic iterables, in arrays',
          exec: function () {/*
            var iterable = global.__createIterableObject(["b", "c", "d"]);
            return ["a", ...iterable, "e"][3] === "d";
          */},
        },
        {
          name: 'with instances of iterables, in calls',
          exec: function () {/*
            var iterable = global.__createIterableObject([1, 2, 3]);
            return Math.max(...Object.create(iterable)) === 3;
          */},
        },
        {
          name: 'with instances of iterables, in arrays',
          exec: function () {/*
            var iterable = global.__createIterableObject(["b", "c", "d"]);
            return ["a", ...Object.create(iterable), "e"][3] === "d";
          */},
        },
        {
          name: 'spreading non-iterables is a runtime error',
          exec: function () {/*
            try {
              Math.max(...2);
            } catch(e) {
              return Math.max(...[1, 2, 3]) === 3;
            }
          */},
        }
      ]
    },
    {
      name: 'class',
      category: 'functions',
      significance: 'large',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes',
      subtests: [
        {
          name: 'class statement',
          exec: function () {/*
            class C {}
            return typeof C === 'function';
          */},
        },
        {
          name: 'is block-scoped',
          exec: function () {/*
            class C {}
            var c1 = C;
            {
              class C {}
              var c2 = C;
            }
            return C === c1;
          */},
        },
        {
          name: 'class expression',
          exec: function () {/*
            return typeof class C {} === 'function';
          */},
        },
        {
          name: 'anonymous class',
          exec: function () {/*
            return typeof class {} === 'function';
          */},
        },
        {
          name: 'constructor',
          exec: function () {/*
            class C {
              constructor() { this.x = 1; }
            }
            return C.prototype.constructor === C
              && new C().x === 1;
          */},
        },
        {
          name: 'prototype methods',
          exec: function () {/*
            class C {
              method() { return 2; }
            }
            return typeof C.prototype.method === 'function'
              && new C().method() === 2;
          */},
        },
        {
          name: 'string-keyed methods',
          exec: function () {/*
            class C {
              "foo bar"() { return 2; }
            }
            return typeof C.prototype["foo bar"] === 'function'
              && new C()["foo bar"]() === 2;
          */},
        },
        {
          name: 'computed prototype methods',
          exec: function () {/*
            var foo = "method";
            class C {
              [foo]() { return 2; }
            }
            return typeof C.prototype.method === 'function'
              && new C().method() === 2;
          */},
        },
        {
          name: 'optional semicolons',
          exec: function () {/*
            class C {
              ;
              method() { return 2; };
              method2() { return 2; }
              method3() { return 2; };
            }
            return typeof C.prototype.method === 'function'
              && typeof C.prototype.method2 === 'function'
              && typeof C.prototype.method3 === 'function';
          */},
        },
        {
          name: 'static methods',
          exec: function () {/*
            class C {
              static method() { return 3; }
            }
            return typeof C.method === 'function'
              && C.method() === 3;
          */},
        },
        {
          name: 'computed static methods',
          exec: function () {/*
            var foo = "method";
            class C {
              static [foo]() { return 3; }
            }
            return typeof C.method === 'function'
              && C.method() === 3;
          */},
        },
        {
          name: 'accessor properties',
          exec: function () {/*
            var baz = false;
            class C {
              get foo() { return "foo"; }
              set bar(x) { baz = x; }
            }
            new C().bar = true;
            return new C().foo === "foo" && baz;
          */},
        },
        {
          name: 'computed accessor properties',
          exec: function () {/*
            var garply = "foo", grault = "bar", baz = false;
            class C {
              get [garply]() { return "foo"; }
              set [grault](x) { baz = x; }
            }
            new C().bar = true;
            return new C().foo === "foo" && baz;
          */},
        },
        {
          name: 'static accessor properties',
          exec: function () {/*
            var baz = false;
            class C {
              static get foo() { return "foo"; }
              static set bar(x) { baz = x; }
            }
            C.bar = true;
            return C.foo === "foo" && baz;
          */},
        },
        {
          name: 'computed static accessor properties',
          exec: function () {/*
            var garply = "foo", grault = "bar", baz = false;
            class C {
              static get [garply]() { return "foo"; }
              static set [grault](x) { baz = x; }
            }
            C.bar = true;
            return C.foo === "foo" && baz;
          */},
        },
        {
          name: 'class name is lexically scoped',
          exec: function () {/*
            class C {
              method() { return typeof C === 'function'; }
            }
            var M = C.prototype.method;
            C = void undefined;
            return C === void undefined && M();
          */},
        },
        {
          name: 'computed names, temporal dead zone',
          exec: function () {/*
            try {
              var B = class C {
                [C](){}
              }
            } catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'methods aren\'t enumerable',
          exec: function () {/*
            class C {
              foo() {}
              static bar() {}
            }
            return !C.prototype.propertyIsEnumerable("foo") && !C.propertyIsEnumerable("bar");
          */},
        },
        {
          name: 'implicit strict mode',
          exec: function () {/*
            class C {
              static method() { return this === void undefined; }
            }
            return (0,C.method)();
          */},
        },
        {
          name: 'constructor requires new',
          exec: function () {/*
            class C {}
            try {
              C();
            }
            catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'extends',
          exec: function () {/*
            class B {}
            class C extends B {}
            return new C() instanceof B
              && B.isPrototypeOf(C);
          */},
        },
        {
          name: 'extends expressions',
          exec: function () {/*
            var B;
            class C extends (B = class {}) {}
            return new C() instanceof B
              && B.isPrototypeOf(C);
          */},
        },
        {
          name: 'extends null',
          exec: function () {/*
            class C extends null {
              constructor() { return Object.create(null); }
            }
            return Function.prototype.isPrototypeOf(C)
              && Object.getPrototypeOf(C.prototype) === null;
          */},
        },
        {
          name: 'new.target',
          exec: function () {/*
            var passed = false;
            new function f() {
              passed = new.target === f;
            }();
    
            class A {
              constructor() {
                passed &= new.target === B;
              }
            }
            class B extends A {}
            new B();
            return passed;
          */},
        }
      ],
    },


    {
      name: 'super',
      category: 'functions',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-super-keyword',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super',
      subtests: [
        {
          name: 'statement in constructors',
          exec: function() {/*
            var passed = false;
            class B {
              constructor(a) { passed = (a === "barbaz"); }
            }
            class C extends B {
              constructor(a) { super("bar" + a); }
            }
            new C("baz");
            return passed;
          */},
        },
        {
          name: 'expression in constructors',
          exec: function() {/*
            class B {
              constructor(a) { return ["foo" + a]; }
            }
            class C extends B {
              constructor(a) { return super("bar" + a); }
            }
            return new C("baz")[0] === "foobarbaz";
          */},
        },
        {
          name: 'in methods, property access',
          exec: function() {/*
            class B {}
            B.prototype.qux = "foo";
            B.prototype.corge = "baz";
            class C extends B {
              quux(a) { return super.qux + a + super["corge"]; }
            }
            C.prototype.qux = "garply";
            return new C().quux("bar") === "foobarbaz";
          */},
        },
        {
          name: 'in methods, method calls',
          exec: function() {/*
            class B {
              qux(a) { return "foo" + a; }
            }
            class C extends B {
              qux(a) { return super.qux("bar" + a); }
            }
            return new C().qux("baz") === "foobarbaz";
          */},
        },
        {
          name: 'method calls use correct "this" binding',
          exec: function() {/*
            class B {
              qux(a) { return this.foo + a; }
            }
            class C extends B {
              qux(a) { return super.qux("bar" + a); }
            }
            var obj = new C();
            obj.foo = "foo";
            return obj.qux("baz") === "foobarbaz";
          */},
        },
        {
          name: 'constructor calls use correct "new.target" binding',
          exec: function() {/*
            var passed;
            class B {
              constructor() { passed = (new.target === C); }
            }
            class C extends B {
              constructor() { super(); }
            }
            new C();
            return passed;
          */},
        },
        {
          name: 'is statically bound',
          exec: function() {/*
            class B {
              qux() { return "bar"; }
            }
            class C extends B {
              qux() { return super.qux() + this.corge; }
            }
            var obj = {
              qux: C.prototype.qux,
              corge: "ley"
            };
            return obj.qux() === "barley";
          */},
        },
        {
          name: 'super() invokes the correct constructor',
          exec: function() {/*
            var passed;
            class B {
                constructor() {
                    passed = true;
                }
            };
            B.prototype.constructor = function () {
                passed = false;
            };
            class C extends B { };
            new C;
            return passed;
          */},
        }
      ],
    },
    {
      name: 'object literal extensions',
      category: 'syntax',
      significance: 'large',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-object-initialiser',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015',
      subtests: [
        {
          name: 'computed properties',
          exec: function() {/*
            var x = 'y';
            return ({ [x]: 1 }).y === 1;
          */},
        },
        {
          name: 'shorthand properties',
          exec: function () {/*
            var a = 7, b = 8, c = {a,b};
            return c.a === 7 && c.b === 8;
          */},
        },
        {
          name: 'shorthand methods',
          exec: function() {/*
            return ({ y() { return 2; } }).y() === 2;
          */},
        },
        {
          name: 'string-keyed shorthand methods',
          exec: function() {/*
            return ({ "foo bar"() { return 4; } })["foo bar"]() === 4;
          */},
        },
        {
          name: 'computed shorthand methods',
          exec: function() {/*
            var x = 'y';
            return ({ [x](){ return 1 } }).y() === 1;
          */},
        },
        {
          name: 'computed accessors',
          exec: function() {/*
            var x = 'y',
                valueSet,
                obj = {
                  get [x] () { return 1 },
                  set [x] (value) { valueSet = value }
                };
            obj.y = 'foo';
            return obj.y === 1 && valueSet === 'foo';
          */},
        }
      ]
    },
    {
      name: 'non-strict function semantics',
      note_id: 'hoisted-block-functions',
      note_html: 'The 2015 version of the specification contains <a href="https://esdiscuss.org/topic/block-level-function-declarations-web-legacy-compatibility-bug">multiple bugs</a> for hoisted block-level function declaration semantics, which these tests disregard.',
      category: 'annex b',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-labelled-function-declarations',
      subtests: [
        {
          name: 'hoisted block-level function declaration',
          exec: function () {/*
            if (!this) return false;
            var passed = f() === 1;
            function f() { return 1; }
    
            passed &= typeof g === 'undefined';
            { function g() { return 1; } }
            passed &= g() === 1;
    
            passed &= h() === 2;
            { function h() { return 1; } }
            function h() { return 2; }
            passed &= h() === 1;
    
            return passed;
          */},
        },
        {
          name: 'labeled function statements',
          exec: function() {/*
          
            if (!this) return false;
    
            label: function foo() { return 2; }
            return foo() === 2;
          */},
        },
        {
          name: 'function statements in if-statement clauses',
          exec: function() {/*
            if (!this) return false;
    
            if(true) function foo() { return 2; }
            if(false) {} else function bar() { return 3; }
            if(true) function baz() { return 4; } else {}
            if(false) function qux() { return 5; } else function qux() { return 6; }
            return foo() === 2 && bar() === 3 && baz() === 4 && qux() === 6;
          */},
        }
      ],
    },
    {
      name: '__proto__ in object literals',
      category: 'annex b',
      significance: 'tiny',
      note_id: 'proto-in-object-literals',
      note_html: 'Note that this is distinct from the existence or functionality of <code>Object.prototype.__proto__</code>.',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-__proto__-property-names-in-object-initializers',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto#Specifications',
      subtests: [
        {
          name: 'basic support',
          exec: function() {/*
            return { __proto__ : [] } instanceof Array
              && !({ __proto__ : null } instanceof Object);
          */},
        },
        {
          name: 'multiple __proto__ is an error',
          exec: function() {/*
            try {
              eval("({ __proto__ : [], __proto__: {} })");
            }
            catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'not a computed property',
          exec: function() {/*
            if (!({ __proto__ : [] } instanceof Array)) {
              return false;
            }
            var a = "__proto__";
            return !({ [a] : [] } instanceof Array);
          */},
        },
        {
          name: 'not a shorthand property',
          exec: function() {/*
            if (!({ __proto__ : [] } instanceof Array)) {
              return false;
            }
            var __proto__ = [];
            return !({ __proto__ } instanceof Array);
          */},
        },
        {
          name: 'not a shorthand method',
          exec: function() {/*
            if (!({ __proto__ : [] } instanceof Array)) {
              return false;
            }
            return !({ __proto__(){} } instanceof Function);
          */},
        }
      ],
    },
    {
      name: 'for..of loops',
      category: 'syntax',
      significance: 'large',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-for-in-and-for-of-statements',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of',
      subtests: [
        {
          name: 'with arrays',
          exec: function () {/*
            var arr = [5];
            for (var item of arr)
              return item === 5;
          */},
        },
        {
          name: 'with sparse arrays',
          exec: function () {/*
            var arr = [,,];
            var count = 0;
            for (var item of arr)
              count += (item === void undefined);
            return count === 2;
          */},
        },
        {
          name: 'with strings',
          exec: function () {/*
            var str = "";
            for (var item of "foo")
              str += item;
            return str === "foo";
          */},
        },
        {
          name: 'with astral plane strings',
          exec: function () {/*
            var str = "";
            for (var item of "????????")
              str += item + " ";
            return str === "???? ???? ";
          */},
        },
        {
          name: 'with generator instances',
          exec: function () {/*
            var result = "";
            var iterable = (function*(){ yield 1; yield 2; yield 3; }());
            for (var item of iterable) {
              result += item;
            }
            return result === "123";
          */},
        },
        {
          name: 'with generic iterables',
          exec: function () {/*
            var result = "";
            var iterable = global.__createIterableObject([1, 2, 3]);
            for (var item of iterable) {
              result += item;
            }
            return result === "123";
          */},
        },
        {
          name: 'with instances of generic iterables',
          exec: function () {/*
            var result = "";
            var iterable = global.__createIterableObject([1, 2, 3]);
            for (var item of Object.create(iterable)) {
              result += item;
            }
            return result === "123";
          */},
        },
        {
          name: 'iterator closing, break',
          exec: function () {/*
            var closed = false;
            var iter = __createIterableObject([1, 2, 3], {
              'return': function(){ closed = true; return {}; }
            });
            for (var it of iter) break;
            return closed;
          */},
        },
        {
          name: 'iterator closing, throw',
          exec: function () {/*
            var closed = false;
            var iter = __createIterableObject([1, 2, 3], {
              'return': function(){ closed = true; return {}; }
            });
            try {
              for (var it of iter) throw 0;
            } catch(e){}
            return closed;
          */},
        }
      ],
    },
    {
      name: 'generators',
      category: 'functions',
      significance: 'large',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-generator-function-definitions',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*',
      subtests: [
        {
          name: 'basic functionality',
          exec: function() {/*
            function * generator(){
              yield 5; yield 6;
            };
            var iterator = generator();
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'generator function expressions',
          exec: function() {/*
            var generator = function * (){
              yield 5; yield 6;
            };
            var iterator = generator();
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'correct "this" binding',
          exec: function() {/*
            function * generator(){
              yield this.x; yield this.y;
            };
            var iterator = { g: generator, x: 5, y: 6 }.g();
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'can\'t use "this" with new',
          exec: function() {/*
            function * generator(){
              yield this.x; yield this.y;
            };
            try {
              (new generator()).next();
            }
            catch (e) {
              return true;
            }
          */},
        },
        {
          name: 'sending',
          exec: function() {/*
            var sent;
            function * generator(){
              sent = [yield 5, yield 6];
            };
            var iterator = generator();
            iterator.next();
            iterator.next("foo");
            iterator.next("bar");
            return sent[0] === "foo" && sent[1] === "bar";
          */},
        },
        {
          name: '%GeneratorPrototype%',
          exec: function() {/*
            function * generatorFn(){}
            var ownProto = Object.getPrototypeOf(generatorFn());
            var passed = ownProto === generatorFn.prototype;
    
            var sharedProto = Object.getPrototypeOf(ownProto);
            passed &= sharedProto !== Object.prototype &&
              sharedProto === Object.getPrototypeOf(function*(){}.prototype) &&
              sharedProto.hasOwnProperty('next');
    
            return passed;
          */},
        },
        {
          name: '%GeneratorPrototype% prototype chain',
          exec: function () {/*
            function * generatorFn(){}
            var g = generatorFn();
            var ownProto = Object.getPrototypeOf(g);
            var passed = ownProto === generatorFn.prototype;
    
            var sharedProto = Object.getPrototypeOf(ownProto);
            var iterProto = Object.getPrototypeOf(sharedProto);
    
            passed &= iterProto.hasOwnProperty(Symbol.iterator) &&
              !sharedProto     .hasOwnProperty(Symbol.iterator) &&
              !ownProto        .hasOwnProperty(Symbol.iterator) &&
              g[Symbol.iterator]() === g;
    
            return passed;
          */},
        },
        {
          name: '%GeneratorPrototype%.constructor',
          exec: function () {/*
            function * g (){}
            var iterator = new g.constructor("a","b","c","yield a; yield b; yield c;")(5,6,7);
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === 7 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
    
            passed &= g.constructor === (function*(){}).constructor;
            return passed;
          */},
        },
        {
          name: '%GeneratorPrototype%.throw',
          exec: function() {/*
            var passed = false;
            function * generator(){
              try {
                yield 5; yield 6;
              } catch(e) {
                passed = (e === "foo");
              }
            };
            var iterator = generator();
            iterator.next();
            iterator.throw("foo");
            return passed;
          */},
        },
        {
          name: '%GeneratorPrototype%.return',
          exec: function() {/*
            function * generator(){
              yield 5; yield 6;
            };
            var iterator = generator();
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.return("quxquux");
            passed &= item.value === "quxquux" && item.done === true;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'yield operator precedence',
          exec: function() {/*
            var passed;
            function * generator(){
              passed = yield 0 ? true : false;
            };
            var iterator = generator();
            iterator.next();
            iterator.next(true);
            return passed;
          */},
        },
        {
          name: 'yield *, arrays',
          exec: function () {/*
            var iterator = (function * generator() {
              yield * [5, 6];
            }());
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'yield *, sparse arrays',
          exec: function () {/*
            var iterator = (function * generator() {
              yield * [,,];
            }());
            var item = iterator.next();
            var passed = item.value === void undefined && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'yield *, strings',
          exec: function () {/*
            var iterator = (function * generator() {
              yield * "56";
            }());
            var item = iterator.next();
            var passed = item.value === "5" && item.done === false;
            item = iterator.next();
            passed &= item.value === "6" && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'yield *, astral plane strings',
          exec: function () {/*
            var iterator = (function * generator() {
              yield * "????????";
            }());
            var item = iterator.next();
            var passed = item.value === "????" && item.done === false;
            item = iterator.next();
            passed &= item.value === "????" && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'yield *, generator instances',
          exec: function () {/*
            var iterator = (function * generator() {
              yield * (function*(){ yield 5; yield 6; yield 7; }());
            }());
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === 7 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'yield *, generic iterables',
          exec: function () {/*
            var iterator = (function * generator() {
              yield * global.__createIterableObject([5, 6, 7]);
            }());
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === 7 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'yield *, instances of iterables',
          exec: function () {/*
            var iterator = (function * generator() {
              yield * Object.create(__createIterableObject([5, 6, 7]));
            }());
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === 7 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'yield * on non-iterables is a runtime error',
          exec: function () {/*
            var iterator = (function * generator() {
              yield * [5];
            }());
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            iterator = (function * generator() {
              yield * 5;
            }());
            try {
              iterator.next();
            } catch (e) {
              return passed;
            }
          */},
        },
        {
          name: 'yield *, iterator closing',
          exec: function () {/*
            var closed = '';
            var iter = __createIterableObject([1, 2, 3], {
              'return': function(){
                closed += 'a';
                return {done: true};
              }
            });
            var gen = (function* generator(){
              try {
                yield *iter;
              } finally {
                closed += 'b';
              }
            })();
            gen.next();
            gen['return']();
            return closed === 'ab';
          */},
        },
        {
          name: 'yield *, iterator closing via throw()',
          exec: function () {/*
            var closed = false;
            var iter = global.__createIterableObject([1, 2, 3], {
              'throw': undefined,
              'return': function() {
                closed = true;
                return {done: true};
              }
            });
            var gen = (function*(){
              try {
                yield *iter;
              } catch(e){}
            })();
            gen.next();
            gen['throw']();
            return closed;
          */},
        },
        {
          name: 'shorthand generator methods',
          exec: function() {/*
            var o = {
              * generator() {
                yield 5; yield 6;
              }
            };
            var iterator = o.generator();
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'string-keyed shorthand generator methods',
          exec: function() {/*
            var o = {
              * "foo bar"() {
                yield 5; yield 6;
              }
            };
            var iterator = o["foo bar"]();
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'computed shorthand generators',
          exec: function() {/*
            var garply = "generator";
            var o = {
              * [garply] () {
                yield 5; yield 6;
              }
            };
            var iterator = o.generator();
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'shorthand generator methods, classes',
          exec: function() {/*
            class C {
              * generator() {
                yield 5; yield 6;
              }
            };
            var iterator = new C().generator();
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'computed shorthand generators, classes',
          exec: function() {/*
            var garply = "generator";
            class C {
              * [garply] () {
                yield 5; yield 6;
              }
            }
            var iterator = new C().generator();
            var item = iterator.next();
            var passed = item.value === 5 && item.done === false;
            item = iterator.next();
            passed &= item.value === 6 && item.done === false;
            item = iterator.next();
            passed &= item.value === void undefined && item.done === true;
            return passed;
          */},
        },
        {
          name: 'shorthand generators can\'t be constructors',
          exec: function() {/*
            class C {
              * generator() {
                yield 5; yield 6;
              }
            };
            try {
              Function("class D { * constructor() { return {}; } }");
            } catch(e) {
              return true;
            }
          */},
        }
      ],
    },
    {
      name: 'prototype of bound functions',
      category: 'misc',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-boundfunctioncreate',
      subtests: [
        {
          name: 'basic functions',
          exec: function () {/*
              function correctProtoBound(proto) {
                var f = function(){};
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(f, proto);
                } else {
                  f.__proto__ = proto;
                }
                var boundF = Function.prototype.bind.call(f, null);
                return Object.getPrototypeOf(boundF) === proto;
              }
              return correctProtoBound(Function.prototype)
                && correctProtoBound({})
                && correctProtoBound(null);
          */},
        },
        {
          name: 'generator functions',
          exec: function() {/*
              function correctProtoBound(proto) {
                var f = function*(){};
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(f, proto);
                } else {
                  f.__proto__ = proto;
                }
                var boundF = Function.prototype.bind.call(f, null);
                return Object.getPrototypeOf(boundF) === proto;
              }
              return correctProtoBound(Function.prototype)
                && correctProtoBound({})
                && correctProtoBound(null);
          */},
        },
        {
          name: 'arrow functions',
          exec: function() {/*
              function correctProtoBound(proto) {
                var f = ()=>5;
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(f, proto);
                } else {
                  f.__proto__ = proto;
                }
                var boundF = Function.prototype.bind.call(f, null);
                return Object.getPrototypeOf(boundF) === proto;
              }
              return correctProtoBound(Function.prototype)
                && correctProtoBound({})
                && correctProtoBound(null);
          */},
        },
        {
          name: 'classes',
          exec: function() {/*
              function correctProtoBound(proto) {
                class C {}
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(C, proto);
                } else {
                  C.__proto__ = proto;
                }
                var boundF = Function.prototype.bind.call(C, null);
                return Object.getPrototypeOf(boundF) === proto;
              }
              return correctProtoBound(Function.prototype)
                && correctProtoBound({})
                && correctProtoBound(null);
          */},
        },
        {
          name: 'subclasses',
          exec: function() {/*
              function correctProtoBound(superclass) {
                class C extends superclass {
                  constructor() {
                    return Object.create(null);
                  }
                }
                var boundF = Function.prototype.bind.call(C, null);
                return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
              }
              return correctProtoBound(function(){})
                && correctProtoBound(Array)
                && correctProtoBound(null);
          */},
        }
      ],
    },
    {
      name: 'octal and binary literals',
      category: 'syntax',
      significance: 'small',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-literals-numeric-literals',
      subtests: [
        {
          name: 'octal literals',
          exec: function () {/*
            return 0o10 === 8 && 0O10 === 8;
          */},
        },
        {
          name: 'binary literals',
          exec: function () {/*
            return 0b10 === 2 && 0B10 === 2;
          */},
        },
        {
          name: 'octal supported by Number()',
          exec: function () {/*
            return Number('0o1') === 1;
          */},
        },
        {
          name: 'binary supported by Number()',
          exec: function () {/*
            return Number('0b1') === 1;
          */},
        }
      ],
    },
    {
      name: 'template literals',
      category: 'syntax',
      significance: 'large',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-template-literals',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals',
      subtests: [
        {
          name: 'basic functionality',
          exec: function () {/*
            var a = "ba", b = "QUX";
            return `foo bar
            ${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux";
          */},
        },
        {
          name: 'toString conversion',
          exec: function () {/*
            var a = {
              toString: function() { return "foo"; },
              valueOf: function() { return "bar"; }
            };
            return `${a}` === "foo";
          */},
        },
        {
          name: 'tagged template literals',
          exec: function () {/*
            var called = false;
            function fn(parts, a, b) {
              called = true;
              return parts instanceof Array &&
                parts[0]     === "foo"      &&
                parts[1]     === "bar\n"    &&
                parts.raw[0] === "foo"      &&
                parts.raw[1] === "bar\\n"   &&
                a === 123                   &&
                b === 456;
            }
            return fn `foo${123}bar\n${456}` && called;
          */},
        },
        {
          name: 'passed array is frozen',
          exec: function () {/*
            return (function(parts) {
              return Object.isFrozen(parts) && Object.isFrozen(parts.raw);
            }) `foo${0}bar${0}baz`;
          */},
        },
        {
          name: 'line break normalisation',
          /* For some reason, this .fromCharCode stuff is necessary instead of \r\n. */
          exec: function () {/*
            var cr   = eval("`x" + String.fromCharCode(13)    + "y`");
            var lf   = eval("`x" + String.fromCharCode(10)    + "y`");
            var crlf = eval("`x" + String.fromCharCode(13,10) + "y`");
    
            return cr.length === 3 && lf.length === 3 && crlf.length === 3
              && cr[1] === lf[1] && lf[1] === crlf[1] && crlf[1] === '\n';
          */},
        },
        {
          name: 'TemplateStrings call site caching',
          exec: function () {/*
          
            function strings(array) {
              return array;
            }
            function getStrings() {
              return strings`foo`;
            }
            var original = getStrings();
            var other = strings`foo`;
            return original === getStrings() && original !== other;
          */},
        },
        {
          name: 'TemplateStrings permanent caching',
          exec: function () {/*
            function strings(array) {
              return array;
            }
            function getStrings() {
              return strings`foo`;
            }
            var original = getStrings();
            var newed = new getStrings();
            return original === getStrings() && original === newed;
          */},
        }
      ],
    },
    {
      name: 'RegExp "y" and "u" flags',
      category: 'syntax',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.sticky',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Parameters',
      subtests: [
        {
          name: '"y" flag',
          exec: function () {/*
            var re = new RegExp('\\w', 'y');
            re.exec('xy');
            return (re.exec('xy')[0] === 'y');
          */},
        },
        {
          name: '"y" flag, lastIndex',
          exec: function () {/*
            var re = new RegExp('yy', 'y');
            re.lastIndex = 3;
            var result = re.exec('xxxyyxx')[0];
            return result === 'yy' && re.lastIndex === 5;
          */},
        },
        {
          name: '"u" flag',
          exec: function() {/*
            return "????".match(/^.$/u)[0].length === 2;
          */},
        },
        {
          name: '"u" flag, non-BMP Unicode characters',
          exec: function() {/*
            return "????x".match(/^.x$/u)[0].length === 3;
          */},
        },
        {
          name: '"u" flag, Unicode code point escapes',
          exec: function() {/*
            return "????".match(/\u{1d306}/u)[0].length === 2;
          */},
        },
        {
          name: '"u" flag, case folding',
          exec: function() {/*
            return "??".match(/S/iu) && "S".match(/??/iu);
          */},
        }
      ],
    },
    {
      name: 'typed arrays',
      category: 'built-ins',
      significance: 'large',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-typedarray-objects',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray',
      subtests: [
        {
          name: 'Int8Array',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new Int8Array(buffer);         view[0] = 0x80;
            return view[0] === -0x80;
          */},
        },
        {
          name: 'Uint8Array',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new Uint8Array(buffer);        view[0] = 0x100;
            return view[0] === 0;
          */},
        },
        {
          name: 'Uint8ClampedArray',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
            return view[0] === 0xFF;
          */},
        },
        {
          name: 'Int16Array',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new Int16Array(buffer);        view[0] = 0x8000;
            return view[0] === -0x8000;
          */},
        },
        {
          name: 'Uint16Array',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new Uint16Array(buffer);       view[0] = 0x10000;
            return view[0] === 0;
          */},
        },
        {
          name: 'Int32Array',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new Int32Array(buffer);        view[0] = 0x80000000;
            return view[0] === -0x80000000;
          */},
        },
        {
          name: 'Uint32Array',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new Uint32Array(buffer);       view[0] = 0x100000000;
            return view[0] === 0;
          */},
        },
        {
          name: 'Float32Array',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new Float32Array(buffer);       view[0] = 0.1;
            return view[0] === 0.10000000149011612;
          */},
        },
        {
          name: 'Float64Array',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new Float64Array(buffer);       view[0] = 0.1;
            return view[0] === 0.1;
          */},
        },
        {
          name: 'DataView (Int8)',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new DataView(buffer);
            view.setInt8 (0, 0x80);
            return view.getInt8(0) === -0x80;
          */},
          
        },
        {
          name: 'DataView (Uint8)',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new DataView(buffer);
            view.setUint8(0, 0x100);
            return view.getUint8(0) === 0;
          */},
        },
        {
          name: 'DataView (Int16)',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new DataView(buffer);
            view.setInt16(0, 0x8000);
            return view.getInt16(0) === -0x8000;
          */},
        },
        {
          name: 'DataView (Uint16)',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new DataView(buffer);
            view.setUint16(0, 0x10000);
            return view.getUint16(0) === 0;
          */},
        },
        {
          name: 'DataView (Int32)',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new DataView(buffer);
            view.setInt32(0, 0x80000000);
            return view.getInt32(0) === -0x80000000;
          */},
        },
        {
          name: 'DataView (Uint32)',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new DataView(buffer);
            view.setUint32(0, 0x100000000);
            return view.getUint32(0) === 0;
          */},
        },
        {
          name: 'DataView (Float32)',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new DataView(buffer);
            view.setFloat32(0, 0.1);
            return view.getFloat32(0) === 0.10000000149011612;
          */},
        },
        {
          name: 'DataView (Float64)',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var view = new DataView(buffer);
            view.setFloat64(0, 0.1);
            return view.getFloat64(0) === 0.1;
          */},
        },
        {
          name: 'ArrayBuffer[Symbol.species]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species',
          exec: function(){/*
            return typeof ArrayBuffer[Symbol.species] === 'function';
          */},
        },
        {
          name: 'constructors require new',
          exec: function(){/*
            var buffer = new ArrayBuffer(64);
            var constructors = [
              'ArrayBuffer',
              'DataView',
              'Int8Array',
              'Uint8Array',
              'Uint8ClampedArray',
              'Int16Array',
              'Uint16Array',
              'Int32Array',
              'Uint32Array',
              'Float32Array',
              'Float64Array'
            ];
            return constructors.every(function (constructor) {
              try {
                if (constructor in global) {
                  global[constructor](constructor === "ArrayBuffer" ? 64 : buffer);
                }
                return false;
              } catch(e) {
                return true;
              }
            });
          */},
        },
        {
          name: 'constructors accept generic iterables',
          exec: function(){/*
            var constructors = [
              'Int8Array',
              'Uint8Array',
              'Uint8ClampedArray',
              'Int16Array',
              'Uint16Array',
              'Int32Array',
              'Uint32Array',
              'Float32Array',
              'Float64Array'
            ];
            for(var i = 0; i < constructors.length; i++){
              var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
              if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
            }
            return true;
          */},
        },
        {
          name: 'correct prototype chains',
          exec: function(){/*
            var constructors = [
              'Int8Array',
              'Uint8Array',
              'Uint8ClampedArray',
              'Int16Array',
              'Uint16Array',
              'Int32Array',
              'Uint32Array',
              'Float32Array',
              'Float64Array'
            ];
            var constructor = Object.getPrototypeOf(Int8Array);
            var prototype = Object.getPrototypeOf(Int8Array.prototype);
            if(constructor === Function.prototype || prototype === Object.prototype)return false;
            for(var i = 0; i < constructors.length; i+=1) {
              if (!(constructors[i] in global
                  && Object.getPrototypeOf(global[constructors[i]]) === constructor
                  && Object.getPrototypeOf(global[constructors[i]].prototype) === prototype
                  && Object.getOwnPropertyNames(global[constructors[i]].prototype).sort() + ''
                    === "BYTES_PER_ELEMENT,constructor")) {
                return false;
              }
            }
            return true;
          */},
        }
      ]
    },
    {
      name: 'Map',
      category: 'built-ins',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
      subtests: [
        {
          name: 'basic functionality',
          exec: function () {/*
            var key = {};
            var map = new Map();
    
            map.set(key, 123);
    
            return map.has(key) && map.get(key) === 123;
          */},
        },
        {
          name: 'constructor arguments',
          exec: function () {/*
            var key1 = {};
            var key2 = {};
            var map = new Map([[key1, 123], [key2, 456]]);
    
            return map.has(key1) && map.get(key1) === 123 &&
                   map.has(key2) && map.get(key2) === 456;
          */},
        },
        {
          name: 'constructor requires new',
          exec: function () {/*
            new Map();
            try {
              Map();
              return false;
            } catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'constructor accepts null',
          exec: function () {/*
            new Map(null);
            return true;
          */},
        },
        {
          name: 'constructor invokes set',
          exec: function () {/*
            var passed = false;
            var _set = Map.prototype.set;
    
            Map.prototype.set = function(k, v) {
              passed = true;
            };
    
            new Map([ [1, 2] ]);
            Map.prototype.set = _set;
    
            return passed;
          */},
        },
        {
          name: 'iterator closing',
          exec: function () {/*
            var closed = false;
            var iter = global.__createIterableObject([1, 2, 3], {
              'return': function(){ closed = true; return {}; }
            });
            try {
              new Map(iter);
            } catch(e){}
            return closed;
          */},
        },
        {
          name: 'Map.prototype.set returns this',
          exec: function () {/*
            var map = new Map();
            return map.set(0, 0) === map;
          */},
        },
        {
          name: '-0 key converts to +0',
          exec: function () {/*
            var map = new Map();
            map.set(-0, "foo");
            var k;
            map.forEach(function (value, key) {
              k = 1 / key;
            });
            return k === Infinity && map.get(+0) === "foo";
          */},
        },
        {
          name: 'Map.prototype.size',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size',
          exec: function () {/*
            var key = {};
            var map = new Map();
    
            map.set(key, 123);
    
            return map.size === 1;
          */},
        },
        {
          name: 'Map.prototype.delete',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete',
          exec: function () {/*
            return typeof Map.prototype.delete === 'function';
          */},
        },
        {
          name: 'Map.prototype.clear',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear',
          exec: function () {/*
            return typeof Map.prototype.clear === 'function';
          */},
        },
        {
          name: 'Map.prototype.forEach',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach',
          exec: function () {/*
            return typeof Map.prototype.forEach === 'function';
          */},
        },
        {
          name: 'Map.prototype.keys',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys',
          exec: function () {/*
            return typeof Map.prototype.keys === 'function';
          */},
        },
        {
          name: 'Map.prototype.values',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values',
          exec: function () {/*
            return typeof Map.prototype.values === 'function';
          */},
        },
        {
          name: 'Map.prototype.entries',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries',
          exec: function () {/*
            return typeof Map.prototype.entries === 'function';
          */},
        },
        {
          name: 'Map.prototype[Symbol.iterator]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator',
          exec: function () {/*
            return typeof Map.prototype[Symbol.iterator] === 'function';
          */},
        },
        {
          name: 'Map.prototype isn\'t an instance',
          exec: function () {/*
            new Map();
            var obj = {};
            try {
              Map.prototype.has(obj);
            }
            catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'Map iterator prototype chain',
          exec: function () {/*
            var iterator = new Map()[Symbol.iterator]();
            var proto1 = Object.getPrototypeOf(iterator);
            var proto2 = Object.getPrototypeOf(proto1);
    
            return proto2.hasOwnProperty(Symbol.iterator) &&
              !proto1    .hasOwnProperty(Symbol.iterator) &&
              !iterator  .hasOwnProperty(Symbol.iterator) &&
              iterator[Symbol.iterator]() === iterator;
          */},
        },
        {
          name: 'Map[Symbol.species]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@species',
          exec: function () {/*
            var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
            return 'get' in prop && Map[Symbol.species] === Map;
          */},
        }
      ],
    },
    {
      name: 'Set',
      category: 'built-ins',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-set-objects',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set',
      subtests: [
        {
          name: 'basic functionality',
          exec: function () {/*
            var obj = {};
            var set = new Set();
    
            set.add(123);
            set.add(123);
    
            return set.has(123);
          */},
        },
        {
          name: 'constructor arguments',
          exec: function () {/*
            var obj1 = {};
            var obj2 = {};
            var set = new Set([obj1, obj2]);
    
            return set.has(obj1) && set.has(obj2);
          */},
        },
        {
          name: 'constructor requires new',
          exec: function () {/*
            new Set();
            try {
              Set();
              return false;
            } catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'constructor accepts null',
          exec: function () {/*
            new Set(null);
            return true;
          */},
        },
        {
          name: 'constructor invokes add',
          exec: function () {/*
            var passed = false;
            var _add = Set.prototype.add;
    
            Set.prototype.add = function(v) {
              passed = true;
            };
    
            new Set([1]);
            Set.prototype.add = _add;
    
            return passed;
          */},
        },
        {
          name: 'iterator closing',
          exec: function () {/*
            var closed = false;
            var iter = global.__createIterableObject([1, 2, 3], {
              'return': function(){ closed = true; return {}; }
            });
            var add = Set.prototype.add;
            Set.prototype.add = function(){ throw 0 };
            try {
              new Set(iter);
            } catch(e){}
            Set.prototype.add = add;
            return closed;
          */},
        },
        {
          name: 'Set.prototype.add returns this',
          exec: function () {/*
            var set = new Set();
            return set.add(0) === set;
          */},
        },
        {
          name: '-0 key converts to +0',
          exec: function () {/*
            var set = new Set();
            set.add(-0);
            var k;
            set.forEach(function (value) {
              k = 1 / value;
            });
            return k === Infinity && set.has(+0);
          */},
        },
        {
          name: 'Set.prototype.size',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size',
          exec: function () {/*
            var obj = {};
            var set = new Set();
    
            set.add(123);
            set.add(123);
            set.add(456);
    
            return set.size === 2;
          */},
        },
        {
          name: 'Set.prototype.delete',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete',
          exec: function () {/*
            return typeof Set.prototype.delete === 'function';
          */},
        },
        {
          name: 'Set.prototype.clear',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear',
          exec: function () {/*
            return typeof Set.prototype.clear === 'function';
          */},
        },
        {
          name: 'Set.prototype.forEach',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach',
          exec: function () {/*
            return typeof Set.prototype.forEach === 'function';
          */},
        },
        {
          name: 'Set.prototype.keys',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/keys',
          exec: function () {/*
            return typeof Set.prototype.keys === 'function';
          */},
        },
        {
          name: 'Set.prototype.values',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values',
          exec: function () {/*
            return typeof Set.prototype.values === 'function';
          */},
        },
        {
          name: 'Set.prototype.entries',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries',
          exec: function () {/*
            return typeof Set.prototype.entries === 'function';
          */},
        },
        {
          name: 'Set.prototype[Symbol.iterator]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator',
          exec: function () {/*
            return typeof Set.prototype[Symbol.iterator] === 'function';
          */},
        },
        {
          name: 'Set.prototype isn\'t an instance',
          exec: function () {/*
            new Set();
            var obj = {};
            try {
              Set.prototype.has(obj);
            }
            catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'Set iterator prototype chain',
          exec: function () {/*
            var iterator = new Set()[Symbol.iterator]();
            var proto1 = Object.getPrototypeOf(iterator);
            var proto2 = Object.getPrototypeOf(proto1);
    
            return proto2.hasOwnProperty(Symbol.iterator) &&
              !proto1    .hasOwnProperty(Symbol.iterator) &&
              !iterator  .hasOwnProperty(Symbol.iterator) &&
              iterator[Symbol.iterator]() === iterator;
          */},
        },
        {
          name: 'Set[Symbol.species]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@species',
          exec: function () {/*
            var prop = Object.getOwnPropertyDescriptor(Set, Symbol.species);
            return 'get' in prop && Set[Symbol.species] === Set;
          */},
          
        }
      ],
    },
    {
      name: 'WeakMap',
      category: 'built-ins',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-objects',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap',
      subtests: [
        {
          name: 'basic functionality',
          exec: function () {/*
            var key = {};
            var weakmap = new WeakMap();
    
            weakmap.set(key, 123);
    
            return weakmap.has(key) && weakmap.get(key) === 123;
          */},
        },
        {
          name: 'constructor arguments',
          exec: function () {/*
            var key1 = {};
            var key2 = {};
            var weakmap = new WeakMap([[key1, 123], [key2, 456]]);
    
            return weakmap.has(key1) && weakmap.get(key1) === 123 &&
                   weakmap.has(key2) && weakmap.get(key2) === 456;
          */},
        },
        {
          name: 'constructor requires new',
          exec: function () {/*
            new WeakMap();
            try {
              WeakMap();
              return false;
            } catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'constructor accepts null',
          exec: function () {/*
            new WeakMap(null);
            return true;
          */},
        },
        {
          name: 'constructor invokes set',
          exec: function () {/*
            var passed = false;
            var _set = WeakMap.prototype.set;
    
            WeakMap.prototype.set = function(k, v) {
              passed = true;
            };
    
            new WeakMap([ [{ }, 42] ]);
            WeakMap.prototype.set = _set;
    
            return passed;
          */},
        },
        {
          name: 'frozen objects as keys',
          exec: function () {/*
            var f = Object.freeze({});
            var m = new WeakMap;
            m.set(f, 42);
            return m.get(f) === 42;
          */},
        },
        {
          name: 'iterator closing',
          exec: function () {/*
            var closed = false;
            var iter = global.__createIterableObject([1, 2, 3], {
              'return': function(){ closed = true; return {}; }
            });
            try {
              new WeakMap(iter);
            } catch(e){}
            return closed;
          */},
        },
        {
          name: 'WeakMap.prototype.set returns this',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set#Return_value',
          exec: function () {/*
            var weakmap = new WeakMap();
            var key = {};
            return weakmap.set(key, 0) === weakmap;
          */},
        },
        {
          name: 'WeakMap.prototype.delete',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/delete',
          exec: function () {/*
            return typeof WeakMap.prototype.delete === 'function';
          */},
        },
        {
          name: 'no WeakMap.prototype.clear method',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/clear',
          exec: function () {/*
            if (!("clear" in WeakMap.prototype)) {
              return true;
            }
            var m = new WeakMap();
            var key = {};
            m.set(key, 2);
            m.clear();
            return m.has(key);
          */},
        },
        {
          name: '.has, .get and .delete methods accept primitives',
          exec: function () {/*
            var m = new WeakMap;
            return m.has(1) === false
              && m.get(1) === void undefined
              && m.delete(1) === false;
          */},
        },
        {
          name: 'WeakMap.prototype isn\'t an instance',
          exec: function () {/*
            new WeakMap();
            var obj = {};
            try {
              WeakMap.prototype.has(obj);
            }
            catch(e) {
              return true;
            }
          */},
        }
      ],
    },
    {
      name: 'WeakSet',
      category: 'built-ins',
      significance: 'small',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-weakset-objects',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet',
      subtests: [
        {
          name: 'basic functionality',
          exec: function () {/*
            var obj1 = {};
            var weakset = new WeakSet();
    
            weakset.add(obj1);
            weakset.add(obj1);
    
            return weakset.has(obj1);
          */},
        },
        {
          name: 'constructor arguments',
          exec: function () {/*
            var obj1 = {}, obj2 = {};
            var weakset = new WeakSet([obj1, obj2]);
    
            return weakset.has(obj1) && weakset.has(obj2);
          */},
        },
        {
          name: 'constructor requires new',
          exec: function () {/*
            new WeakSet();
            try {
              WeakSet();
              return false;
            } catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'constructor accepts null',
          exec: function () {/*
            new WeakSet(null);
            return true;
          */},
        },
        {
          name: 'constructor invokes add',
          exec: function () {/*
            var passed = false;
            var _add = WeakSet.prototype.add;
    
            WeakSet.prototype.add = function(v) {
              passed = true;
            };
    
            new WeakSet([ { } ]);
            WeakSet.prototype.add = _add;
    
            return passed;
          */},
          
        },
        {
          name: 'iterator closing',
          exec: function () {/*
            var closed = false;
            var iter = global.__createIterableObject([1, 2, 3], {
              'return': function(){ closed = true; return {}; }
            });
            try {
              new WeakSet(iter);
            } catch(e){}
            return closed;
          */},
        },
        {
          name: 'WeakSet.prototype.add returns this',
          exec: function () {/*
            var weakset = new WeakSet();
            var obj = {};
            return weakset.add(obj) === weakset;
          */},
        },
        {
          name: 'WeakSet.prototype.delete',
          exec: function () {/*
            return typeof WeakSet.prototype.delete === 'function';
          */},
        },
        {
          name: 'no WeakSet.prototype.clear method',
          exec: function () {/*
            if (!("clear" in WeakSet.prototype)) {
              return true;
            }
            var s = new WeakSet();
            var key = {};
            s.add(key);
            s.clear();
            return s.has(key);
          */},
        },
        {
          name: '.has and .delete methods accept primitives',
          exec: function () {/*
            var s = new WeakSet;
            return s.has(1) === false
              && s.delete(1) === false;
          */},
        },
        {
          name: 'WeakSet.prototype isn\'t an instance',
          exec: function () {/*
            new WeakSet();
            var obj = {};
            try {
              WeakSet.prototype.has(obj);
            }
            catch(e) {
              return true;
            }
          */},
        }
      ],
    },
    {
      name: 'Proxy',
      category: 'built-ins',
      significance: 'large',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy',
      note_id: 'proxy-enumerate',
      note_html: 'The 2015 version of the specification also specifies an <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-enumerate">"enumerate" handler</a>, which was removed in the 2016 version.',
      subtests: [
        {
          name: 'constructor requires new',
          exec: function () {/*
            new Proxy({}, {});
            try {
              Proxy({}, {});
              return false;
            } catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'no "prototype" property',
          exec: function () {/*
            new Proxy({}, {});
            return !Proxy.hasOwnProperty('prototype');
          */},
        },
        {
          name: '"get" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get',
          exec: function () {/*
            var proxied = { };
            var proxy = new Proxy(proxied, {
              get: function (t, k, r) {
                return t === proxied && k === "foo" && r === proxy && 5;
              }
            });
            return proxy.foo === 5;
          */},
        },
        {
          name: '"get" handler, instances of proxies',
          exec: function () {/*
            var proxied = { };
            var proxy = Object.create(new Proxy(proxied, {
              get: function (t, k, r) {
                return t === proxied && k === "foo" && r === proxy && 5;
              }
            }));
            return proxy.foo === 5;
          */},
        },
        {
          name: '"get" handler invariants',
          exec: function () {/*
            var passed = false;
            var proxied = { };
            var proxy = new Proxy(proxied, {
              get: function () {
                passed = true;
                return 4;
              }
            });
            
            Object.defineProperty(proxied, "foo", { value: 5, enumerable: true });
            try {
              proxy.foo;
              return false;
            }
            catch(e) {}
            Object.defineProperty(proxied, "bar",
              { set: function(){}, enumerable: true });
            try {
              proxy.bar;
              return false;
            }
            catch(e) {}
            return passed;
          */},
        },
        {
          name: '"set" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set',
          exec: function () {/*
            var proxied = { };
            var passed = false;
            var proxy = new Proxy(proxied, {
              set: function (t, k, v, r) {
                passed = t === proxied && k + v === "foobar" && r === proxy;
              }
            });
            proxy.foo = "bar";
            return passed;
          */},
        },
        {
          name: '"set" handler, instances of proxies',
          exec: function () {/*
            var proxied = { };
            var passed = false;
            var proxy = Object.create(new Proxy(proxied, {
              set: function (t, k, v, r) {
                passed = t === proxied && k + v === "foobar" && r === proxy;
              }
            }));
            proxy.foo = "bar";
            return passed;
          */},
        },
        {
          name: '"set" handler invariants',
          exec: function () {/*
            var passed = false;
            new Proxy({},{});
            var proxied = {};
            var proxy = new Proxy(proxied, {
              set: function () {
                passed = true;
                return true;
              }
            });
            Object.defineProperty(proxied, "foo", { value: 2, enumerable: true });
            proxy.foo = 2;
            try {
              proxy.foo = 4;
              return false;
            } catch(e) {}
            Object.defineProperty(proxied, "bar",
              { get: function(){}, enumerable: true });
            try {
              proxy.bar = 2;
              return false;
            } catch(e) {}
            return passed;
          */},
        },
        {
          name: '"has" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/has',
          exec: function () {/*
            var proxied = {};
            var passed = false;
            "foo" in new Proxy(proxied, {
              has: function (t, k) {
                passed = t === proxied && k === "foo";
              }
            });
            return passed;
          */},
        },
        {
          name: '"has" handler, instances of proxies',
          exec: function () {/*
            var proxied = {};
            var passed = false;
            "foo" in Object.create(new Proxy(proxied, {
              has: function (t, k) {
                passed = t === proxied && k === "foo";
              }
            }));
            return passed;
          */},
        },
        {
          name: '"has" handler invariants',
          exec: function () {/*
            var passed = false;
            new Proxy({},{});
            var proxied = {};
            var proxy = new Proxy(proxied, {
              has: function () {
                passed = true;
                return false;
              }
            });
            Object.defineProperty(proxied, "foo", { value: 2, writable: true, enumerable: true });
            try {
              'foo' in proxy;
              return false;
            } catch(e) {}
            proxied.bar = 2;
            Object.preventExtensions(proxied);
            try {
              'bar' in proxy;
              return false;
            } catch(e) {}
            return passed;
          */},
        },
        {
          name: '"deleteProperty" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/deleteProperty',
          exec: function () {/*
            var proxied = {};
            var passed = false;
            delete new Proxy(proxied, {
              deleteProperty: function (t, k) {
                passed = t === proxied && k === "foo";
              }
            }).foo;
            return passed;
          */},
        },
        {
          name: '"deleteProperty" handler invariant',
          exec: function () {/*
            var passed = false;
            new Proxy({},{});
            var proxied = {};
            Object.defineProperty(proxied, "foo", { value: 2, writable: true, enumerable: true });
            try {
              delete new Proxy(proxied, {
                deleteProperty: function () {
                  passed = true;
                  return true;
                }
              }).foo;
              return false;
            } catch(e) {}
            return passed;
          */},
        },
        {
          name: '"getOwnPropertyDescriptor" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor',
          exec: function () {/*
            var proxied = {};
            var fakeDesc = { value: "foo", configurable: true };
            var returnedDesc = Object.getOwnPropertyDescriptor(
              new Proxy(proxied, {
                getOwnPropertyDescriptor: function (t, k) {
                  return t === proxied && k === "foo" && fakeDesc;
                }
              }),
              "foo"
            );
            return (returnedDesc.value     === fakeDesc.value
              && returnedDesc.configurable === fakeDesc.configurable
              && returnedDesc.writable     === false
              && returnedDesc.enumerable   === false);
          */},
        },
        {
          name: '"getOwnPropertyDescriptor" handler invariants',
          exec: function () {/*
            var passed = false;
            new Proxy({},{});
            var proxied = {};
            var proxy = new Proxy(proxied, {
              getOwnPropertyDescriptor: function () {
                passed = true;
                return undefined;
              }
            });
            Object.defineProperty(proxied, "foo", { value: 2, writable: true, enumerable: true });
            try {
              Object.getOwnPropertyDescriptor(proxy, "foo");
              return false;
            } catch(e) {}
            proxied.bar = 3;
            Object.preventExtensions(proxied);
            try {
              Object.getOwnPropertyDescriptor(proxy, "bar");
              return false;
            } catch(e) {}
            try {
              Object.getOwnPropertyDescriptor(new Proxy(proxied, {
                getOwnPropertyDescriptor: function() {
                  return { value: 2, configurable: true, writable: true, enumerable: true };
                }}), "baz");
              return false;
            } catch(e) {}
            try {
              Object.getOwnPropertyDescriptor(new Proxy({}, {
                getOwnPropertyDescriptor: function() {
                  return { value: 2, configurable: false, writable: true, enumerable: true };
                }}), "baz");
              return false;
            } catch(e) {}
            try {
              Object.getOwnPropertyDescriptor(new Proxy({baz:1}, {
                getOwnPropertyDescriptor: function() {
                  return { value: 1, configurable: false, writable: true, enumerable: true };
                }}), "baz");
              return false;
            } catch(e) {}
            return passed;
          */},
        },
        {
          name: '"defineProperty" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/defineProperty',
          exec: function () {/*
            var proxied = {};
            var passed = false;
            Object.defineProperty(
              new Proxy(proxied, {
                defineProperty: function (t, k, d) {
                  passed = t === proxied && k === "foo" && d.value === 5;
                  return true;
                }
              }),
              "foo",
              { value: 5, configurable: true }
            );
            return passed;
          */},
        },
        {
          name: '"defineProperty" handler invariants',
          exec: function () {/*
            var passed = false;
            new Proxy({},{});
            var proxied = Object.preventExtensions({});
            var proxy = new Proxy(proxied, {
              defineProperty: function() {
                passed = true;
                return true;
              }
            });
            try {
              Object.defineProperty(proxy, "foo", { value: 2 });
              return false;
            } catch(e) {}
            try {
              Object.defineProperty(
                new Proxy({ bar: true }, {
                  defineProperty: function () {
                    return true;
                  }
                }),
                "bar",
                { value: 5, configurable: false, writable: true, enumerable: true }
              );
              return false;
            } catch(e) {}
            return passed;
          */},
        },
        {
          name: '"getPrototypeOf" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getPrototypeOf',
          exec: function () {/*
            var proxied = {};
            var fakeProto = {};
            var proxy = new Proxy(proxied, {
              getPrototypeOf: function (t) {
                return t === proxied && fakeProto;
              }
            });
            return Object.getPrototypeOf(proxy) === fakeProto;
          */},
        },
        {
          name: '"getPrototypeOf" handler invariant',
          exec: function () {/*
            var passed = false;
            new Proxy({},{});
            try {
              Object.getPrototypeOf(new Proxy(Object.preventExtensions({}), {
                getPrototypeOf: function () {
                  passed = true;
                  return {};
                }
              }));
              return false;
            } catch(e) {}
            return passed;
          */},
        },
        {
          name: '"setPrototypeOf" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/setPrototypeOf',
          exec: function () {/*
            var proxied = {};
            var newProto = {};
            var passed = false;
            Object.setPrototypeOf(
              new Proxy(proxied, {
                setPrototypeOf: function (t, p) {
                  passed = t === proxied && p === newProto;
                  return true;
                }
              }),
              newProto
            );
            return passed;
          */},
        },
        {
          name: '"setPrototypeOf" handler invariant',
          exec: function () {/*
            var passed = false;
            new Proxy({},{});
            Object.setPrototypeOf({},{});
            try {
              Object.setPrototypeOf(
                new Proxy(Object.preventExtensions({}), {
                  setPrototypeOf: function () {
                    passed = true;
                    return true;
                  }
                }),{});
              return false;
            } catch(e) {}
            return passed;
          */},
        },
        {
          name: '"isExtensible" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/isExtensible',
          exec: function () {/*
            var proxied = {};
            var passed = false;
            Object.isExtensible(
              new Proxy(proxied, {
                isExtensible: function (t) {
                  passed = t === proxied; return true;
                }
              })
            );
            return passed;
          */},
        },
        {
          name: '"isExtensible" handler invariant',
          exec: function () {/*
            var passed = false;
            new Proxy({},{});
            try {
              Object.isExtensible(new Proxy({}, {
                isExtensible: function (t) {
                  passed = true;
                  return false;
                }
              }));
              return false;
            } catch(e) {}
            try {
              Object.isExtensible(new Proxy(Object.preventExtensions({}), {
                isExtensible: function (t) {
                  return true;
                }
              }));
              return false;
            } catch(e) {}
            return true;
          */},
        },
        {
          name: '"preventExtensions" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/preventExtensions',
          exec: function () {/*
            var proxied = {};
            var passed = false;
            Object.preventExtensions(
              new Proxy(proxied, {
                preventExtensions: function (t) {
                  passed = t === proxied;
                  return Object.preventExtensions(proxied);
                }
              })
            );
            return passed;
          */},
        },
        {
          name: '"preventExtensions" handler invariant',
          exec: function () {/*
            var passed = false;
            new Proxy({},{});
            try {
              Object.preventExtensions(new Proxy({}, {
                preventExtensions: function () {
                  passed = true;
                  return true;
                }
              }));
              return false;
            } catch(e) {}
            return passed;
          */},
        },
        {
          name: '"ownKeys" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/ownKeys',
          exec: function () {/*
            var proxied = {};
            var passed = false;
            Object.keys(
              new Proxy(proxied, {
                ownKeys: function (t) {
                  passed = t === proxied; return [];
                }
              })
            );
            return passed;
          */},
        },
        {
          name: '"ownKeys" handler invariant',
          exec: function () {/*
            var passed = false;
            new Proxy({},{});
            try {
              Object.keys(new Proxy({}, {
                ownKeys: function () {
                  passed = true;
                  return [2];
                }}));
              return false;
            } catch(e) {}
            var proxied = {};
            Object.defineProperty(proxied, "foo", { value: 2, writable: true, enumerable: true });
            try {
              Object.keys(new Proxy(proxied, {
                ownKeys: function () {
                  return [];
                }}));
              return false;
            } catch(e) {}
            try {
              Object.keys(new Proxy(Object.preventExtensions({b:1}), {
                ownKeys: function () {
                  return ['a'];
                }}));
              return false;
            } catch(e) {}
            return passed;
          */},
        },
        {
          name: '"apply" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply',
          exec: function () {/*
            var proxied = function(){};
            var passed = false;
            var host = {
              method: new Proxy(proxied, {
                apply: function (t, thisArg, args) {
                  passed = t === proxied && thisArg === host && args + "" === "foo,bar";
                }
              })
            };
            host.method("foo", "bar");
            return passed;
          */},
        },
        {
          name: '"apply" handler invariant',
          exec: function () {/*
            var passed = false;
            new Proxy(function(){}, {
                apply: function () { passed = true; }
            })();
            try {
              new Proxy({}, {
                apply: function () {}
              })();
              return false;
            } catch(e) {}
            return passed;
          */},
        },
        {
          name: '"construct" handler',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct',
          exec: function () {/*
            var proxied = function(){};
            var passed = false;
            new new Proxy(proxied, {
              construct: function (t, args) {
                passed = t === proxied && args + "" === "foo,bar";
                return {};
              }
            })("foo","bar");
            return passed;
          */},
        },
        {
          name: '"construct" handler invariants',
          exec: function () {/*
            var passed = false;
            new Proxy({},{});
            try {
              new new Proxy({}, {
                construct: function (t, args) {
                  return {};
                }
              })();
              return false;
            } catch(e) {}
            try {
              new new Proxy(function(){}, {
                construct: function (t, args) {
                  passed = true;
                  return 5;
                }
              })();
              return false;
            } catch(e) {}
            return passed;
          */},
        },
        {
          name: 'Proxy.revocable',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable',
          exec: function () {/*
            var obj = Proxy.revocable({}, { get: function() { return 5; } });
            var passed = (obj.proxy.foo === 5);
            obj.revoke();
            try {
              obj.proxy.foo;
            } catch(e) {
              passed &= e instanceof TypeError;
            }
            return passed;
          */},
        },
        {
          name: 'Array.isArray support',
          exec: function () {/*
            return Array.isArray(new Proxy([], {}));
          */},
        },
        {
          name: 'JSON.stringify support',
          exec: function () {/*
            return JSON.stringify(new Proxy(['foo'], {})) === '["foo"]';
          */},
        }
      ],
    },
    {
      name: 'Proxy, internal \'get\' calls',
      category: 'misc',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get',
      subtests: [
        {
          name: 'ToPrimitive',
          exec: function() {/*
            var get = [];
            var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
            p + 3;
            return get[0] === Symbol.toPrimitive && get.slice(1) + '' === "valueOf,toString";
          */},
        },
        {
          name: 'CreateListFromArrayLike',
          exec: function() {/*
            var get = [];
            var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
            Function.prototype.apply({}, p);
            return get + '' === "length,0,1";
          */},
        },
        {
          name: 'instanceof operator',
          exec: function() {/*
            var get = [];
            var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
            ({}) instanceof p;
            return get[0] === Symbol.hasInstance && get.slice(1) + '' === "prototype";
          */},
        },
        {
          name: 'HasBinding',
          exec: function() {/*
            var get = [];
            var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
            p[Symbol.unscopables] = p;
            with(p) {
              typeof foo;
            }
            return get[0] === Symbol.unscopables && get.slice(1) + '' === "foo";
          */},
        },
        {
          name: 'CreateDynamicFunction',
          exec: function() {/*
            var get = [];
            var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
            new p;
            return get + '' === "prototype";
          */},
        },
        {
          name: 'ClassDefinitionEvaluation',
          exec: function() {/*
            var get = [];
            var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
            class C extends p {}
            return get + '' === "prototype";
          */},
        },
        {
          name: 'IteratorComplete, IteratorValue',
          exec: function() {/*
            var get = [];
            var iterable = {};
            iterable[Symbol.iterator] = function() {
              return {
                next: function() {
                  return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
                }
              };
            }
            var i = 0;
            for(var e of iterable) {
              if (++i >= 2) break;
            }
            return get + '' === "done,value,done,value";
          */},
        },
        {
          name: 'ToPropertyDescriptor',
          exec: function() {/*
            var get = [];
            var p = new Proxy({
                enumerable: true, configurable: true, value: true,
                writable: true, get: Function(), set: Function()
              }, { get: function(o, k) { get.push(k); return o[k]; }});
            try {
              Object.defineProperty({}, "foo", p);
            } catch(e) {
              return get + '' === "enumerable,configurable,value,writable,get,set";
            }
          */},
        },
        {
          name: 'Object.assign',
          exec: function() {/*
            var get = [];
            var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
            Object.assign({}, p);
            return get + '' === "foo,bar";
          */},
        },
        {
          name: 'Object.defineProperties',
          exec: function() {/*
            var get = [];
            var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
            Object.defineProperties({}, p);
            return get + '' === "foo,bar";
          */},
        },
        {
          name: 'Function.prototype.bind',
          exec: function() {/*
            var get = [];
            var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
            Function.prototype.bind.call(p);
            return get + '' === "length,name";
          */},
        },
        {
          name: 'Error.prototype.toString',
          exec: function() {/*
            var get = [];
            var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
            Error.prototype.toString.call(p);
            return get + '' === "name,message";
          */},
        },
        {
          name: 'String.raw',
          exec: function() {/*
            var get = [];
            var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
            var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
            String.raw(p);
            return get + '' === "raw,length,0,1";
          */},
        },
        {
          name: 'RegExp constructor',
          exec: function() {/*
            var get = [];
            var re = { constructor: null };
            re[Symbol.match] = true;
            var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
            RegExp(p);
            return get[0] === Symbol.match && get.slice(1) + '' === "constructor,source,flags";
          */},
        },
        {
          name: 'RegExp.prototype.flags',
          exec: function() {/*
            var expected = [];
            if ('global' in RegExp.prototype) expected.push('global');
            if ('ignoreCase' in RegExp.prototype) expected.push('ignoreCase');
            if ('multiline' in RegExp.prototype) expected.push('multiline');
            if ('dotAll' in RegExp.prototype) expected.push('dotAll');
            if ('unicode' in RegExp.prototype) expected.push('unicode');
            if ('sticky' in RegExp.prototype) expected.push('sticky');
            var actual = [];
            var p = new Proxy({}, { get: function(o, k) { actual.push(k); return o[k]; }});
            Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
            if (expected.length !== actual.length) return false;
            for (var i = 0; i < expected.length; i++) {
              if (expected[i] !== actual[i]) return false;
            }
            return true;
          */},
        },
        {
          name: 'RegExp.prototype.test',
          exec: function() {/*
            var get = [];
            var p = new Proxy({ exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
            RegExp.prototype.test.call(p);
            return get + '' === "exec";
          */},
        },
        {
          name: 'RegExp.prototype.toString',
          exec: function() {/*
            var get = [];
            var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
            RegExp.prototype.toString.call(p);
            return get + '' === "source,flags";
          */},
        },
        {
          name: 'RegExp.prototype[Symbol.match]',
          exec: function() {/*
            var get = [];
            var p = new Proxy({ exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
            RegExp.prototype[Symbol.match].call(p);
            p.global = true;
            RegExp.prototype[Symbol.match].call(p);
            return get + '' === "global,exec,global,unicode,exec";
          */},
        },
        {
          name: 'RegExp.prototype[Symbol.replace]',
          exec: function() {/*
            var get = [];
            var p = new Proxy({ exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
            RegExp.prototype[Symbol.replace].call(p);
            p.global = true;
            RegExp.prototype[Symbol.replace].call(p);
            return get + '' === "global,exec,global,unicode,exec";
          */},
        },
        {
          name: 'RegExp.prototype[Symbol.search]',
          exec: function() {/*
            var get = [];
            var p = new Proxy({ exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
            RegExp.prototype[Symbol.search].call(p);
            return get + '' === "lastIndex,exec,lastIndex";
          */},
          note_id: "regexp-prototype-symbolsearch",
          note_html: "The specification for this feature was <a href='https://github.com/tc39/ecma262/pull/627'>updated</a> after ES6 was published.  This test reflects the updated spec, which is implemented by the latest browsers.",
        
        },
        {
          name: 'RegExp.prototype[Symbol.split]',
          exec: function() {/*
            var get = [];
            var constructor = Function();
            constructor[Symbol.species] = Object;
            var p = new Proxy({ constructor: constructor, flags: '', exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
            RegExp.prototype[Symbol.split].call(p, "");
            return get + '' === "constructor,flags,exec";
          */},
        },
        {
          name: 'Array.from',
          exec: function() {/*
            var get = [];
            var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
            Array.from(p);
            return get[0] === Symbol.iterator && get.slice(1) + '' === "length,0,1";
          */},
        },
        {
          name: 'Array.prototype.concat',
          exec: function() {/*
            var get = [];
            var arr = [1];
            arr.constructor = void undefined;
            var p = new Proxy(arr, { get: function(o, k) { get.push(k); return o[k]; }});
            Array.prototype.concat.call(p,p);
            return get[0] === "constructor"
              && get[1] === Symbol.isConcatSpreadable
              && get[2] === "length"
              && get[3] === "0"
              && get[4] === get[1] && get[5] === get[2] && get[6] === get[3]
              && get.length === 7;
          */},
        },
        {
          name: 'Array.prototype iteration methods',
          exec: function() {/*
            var methods = ['copyWithin', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach',
              'indexOf', 'join', 'lastIndexOf', 'map', 'reduce', 'reduceRight', 'some'];
            var get;
            var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
            for(var i = 0; i < methods.length; i+=1) {
              get = [];
              Array.prototype[methods[i]].call(p, Function());
              if (get + '' !== (
                methods[i] === 'fill' ? "length" :
                methods[i] === 'every' ? "length,0" :
                methods[i] === 'lastIndexOf' || methods[i] === 'reduceRight' ? "length,1,0" :
                "length,0,1"
              )) {
                return false;
              }
            }
            return true;
          */},
        },
        {
          name: 'Array.prototype.pop',
          exec: function() {/*
            var get = [];
            var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
            Array.prototype.pop.call(p);
            return get + '' === "length,3";
          */},
        },
        {
          name: 'Array.prototype.reverse',
          exec: function() {/*
            var get = [];
            var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
            Array.prototype.reverse.call(p);
            return get + '' === "length,0,4,2";
          */},
        },
        {
          name: 'Array.prototype.shift',
          exec: function() {/*
            var get = [];
            var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
            Array.prototype.shift.call(p);
            return get + '' === "length,0,1,2,3";
          */},
        },
        {
          name: 'Array.prototype.splice',
          exec: function() {/*
            var get = [];
            var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
            Array.prototype.splice.call(p,1,1);
            Array.prototype.splice.call(p,1,0,1);
            return get + '' === "length,constructor,1,2,3,length,constructor,2,1";
          */},
        },
        {
          name: 'Array.prototype.toString',
          exec: function() {/*
            var get = [];
            var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
            Array.prototype.toString.call(p);
            return get + '' === "join";
          */},
        },
        {
          name: 'JSON.stringify',
          exec: function() {/*
            var get = [];
            var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
            JSON.stringify(p);
            return get + '' === "toJSON";
          */},
        },
        {
          name: 'Promise resolve functions',
          exec: function() {/*
            var get = [];
            var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
            new Promise(function(resolve){ resolve(p); });
            return get + '' === "then";
          */},
        },
        {
          name: 'String.prototype.match',
          exec: function() {/*
            var get = [];
            var proxied = {};
            proxied[Symbol.toPrimitive] = Function();
            var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
            "".match(p);
            return get[0] === Symbol.match && get[1] === Symbol.toPrimitive && get.length === 2;
          */},
        },
        {
          name: 'String.prototype.replace',
          exec: function() {/*
            var get = [];
            var proxied = {};
            proxied[Symbol.toPrimitive] = Function();
            var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
            "".replace(p);
            return get[0] === Symbol.replace && get[1] === Symbol.toPrimitive && get.length === 2;
          */},
        },
        {
          name: 'String.prototype.search',
          exec: function() {/*
            var get = [];
            var proxied = {};
            proxied[Symbol.toPrimitive] = Function();
            var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
            "".search(p);
            return get[0] === Symbol.search && get[1] === Symbol.toPrimitive && get.length === 2;
          */},
        },
        {
          name: 'String.prototype.split',
          exec: function() {/*
            var get = [];
            var proxied = {};
            proxied[Symbol.toPrimitive] = Function();
            var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
            "".split(p);
            return get[0] === Symbol.split && get[1] === Symbol.toPrimitive && get.length === 2;
          */},
        },
        {
          name: 'Date.prototype.toJSON',
          exec: function() {/*
            var get = [];
            var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
            Date.prototype.toJSON.call(p);
            return get[0] === Symbol.toPrimitive && get.slice(1) + '' === "valueOf,toString,toISOString";
          */},
        }
      ],
    },
    {
      name: 'Proxy, internal \'set\' calls',
      category: 'misc',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set',
      subtests: [
        {
          name: 'Object.assign',
          exec: function() {/*
            var set = [];
            var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
            Object.assign(p, { foo: 1, bar: 2 });
            return set + '' === "foo,bar";
          */},
          res: {
            ejs: true,
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox34: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.from',
          exec: function() {/*
            var set = [];
            var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
            Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
            return set + '' === "length";
          */},
          res: {
            ie11: false,
            edge12: true,
            ejs: true,
            firefox2: false,
            firefox32: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.of',
          exec: function() {/*
            var set = [];
            var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
            Array.of.call(function(){ return p; }, 1, 2, 3);
            return set + '' === "length";
          */},
          res: {
            ie11: false,
            edge12: true,
            ejs: true,
            firefox2: false,
            firefox25: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.copyWithin',
          exec: function() {/*
            var set = [];
            var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
            p.copyWithin(0, 3);
            return set + '' === "0,1,2";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox40: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.fill',
          exec: function() {/*
            var set = [];
            var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
            p.fill(0, 3);
            return set + '' === "3,4,5";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox40: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.pop',
          exec: function() {/*
            var set = [];
            var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
            p.pop();
            return set + '' === "length";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox18: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.push',
          exec: function() {/*
            var set = [];
            var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
            p.push(0,0,0);
            return set + '' === "0,1,2,length";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox18: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.reverse',
          exec: function() {/*
            var set = [];
            var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
            p.reverse();
            return set + '' === "3,1,2";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox40: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.shift',
          exec: function() {/*
            var set = [];
            var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
            p.shift();
            return set + '' === "0,2,length";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox18: true,
            firefox21: false,
            firefox40: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.splice',
          exec: function() {/*
            var set = [];
            var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
            p.splice(1,0,0);
            return set + '' === "3,2,1,length";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox18: true,
            firefox21: false,
            firefox40: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.unshift',
          exec: function() {/*
            var set = [];
            var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
            p.unshift(0,1);
            return set + '' === "5,3,2,0,1,length";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox18: true,
            firefox21: false,
            firefox40: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        }
      ],
    },
    {
      name: 'Proxy, internal \'defineProperty\' calls',
      category: 'misc',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/defineProperty',
      subtests: [
        {
          name: '[[Set]]',
          exec: function() {/*
            var def = [];
            var p = new Proxy({foo:1, bar:2}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
            p.foo = 2; p.bar = 4;
            return def + '' === "foo,bar";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox37: true,
            opera10_50: false,
            chrome49: true,
            xs6: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'SetIntegrityLevel',
          exec: function() {/*
            var def = [];
            var p = new Proxy({foo:1, bar:2}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
            Object.freeze(p);
            return def + '' === "foo,bar";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox18: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: false,
            rhino1_7_13: false
          }
        }
      ],
    },
    {
      name: 'Proxy, internal \'deleteProperty\' calls',
      category: 'misc',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/deleteProperty',
      subtests: [
        {
          name: 'Array.prototype.copyWithin',
          exec: function() {/*
            var del = [];
            var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
            p.copyWithin(0,3);
            return del + '' === "0,1,2";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox40: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.pop',
          exec: function() {/*
            var del = [];
            var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
            p.pop();
            return del + '' === "2";
          */},
          res: {
            ejs: true,
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox18: true,
            firefox21: false,
            firefox40: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.reverse',
          exec: function() {/*
            var del = [];
            var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
            p.reverse();
            return del + '' === "0,4,2";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox18: true,
            firefox21: false,
            firefox40: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.shift',
          exec: function() {/*
            var del = [];
            var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
            p.shift();
            return del + '' === "0,2,5";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox18: true,
            firefox21: false,
            firefox40: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.splice',
          exec: function() {/*
            var del = [];
            var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
            p.splice(2,2,0);
            return del + '' === "3,5";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox18: true,
            firefox21: false,
            firefox40: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Array.prototype.unshift',
          exec: function() {/*
          
            var del = [];
            var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
            p.unshift(0);
            return del + '' === "5,3";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox18: true,
            firefox21: false,
            firefox40: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        }
      ],
    },
    {
      name: 'Proxy, internal \'getOwnPropertyDescriptor\' calls',
      category: 'misc',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor',
      subtests: [
        {
          name: '[[Set]]',
          exec: function() {/*
            var gopd = [];
            var p = new Proxy({},
              { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
            p.foo = 1; p.bar = 1;
            return gopd + '' === "foo,bar";
          */},
          res: {
            ejs: true,
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox37: true,
            opera10_50: false,
            chrome49: true,
            xs6: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Object.assign',
          exec: function() {/*
            var gopd = [];
            var p = new Proxy({foo:1, bar:2},
              { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
            Object.assign({}, p);
            return gopd + '' === "foo,bar";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox34: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Object.prototype.hasOwnProperty',
          exec: function() {/*
            var gopd = [];
            var p = new Proxy({foo:1, bar:2},
              { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
            p.hasOwnProperty('garply');
            return gopd + '' === "garply";
          */},
          res: {
            ejs: true,
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox33: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'Function.prototype.bind',
          exec: function() {/*
            var gopd = [];
            var p = new Proxy(Function(),
              { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
            p.bind();
            return gopd + '' === "length";
          */},
          res: {
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox38: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        }
      ],
    },
    {
      name: 'Proxy, internal \'ownKeys\' calls',
      category: 'misc',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/ownKeys',
      subtests: [
        {
          name: 'SetIntegrityLevel',
          exec: function() {/*
            var ownKeysCalled = 0;
            var p = new Proxy({}, { ownKeys: function(o) { ownKeysCalled++; return Object.keys(o); }});
            Object.freeze(p);
            return ownKeysCalled === 1;
          */},
          res: {
            ejs: true,
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox33: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: false,
            rhino1_7_13: false
          }
        },
        {
          name: 'TestIntegrityLevel',
          exec: function() {/*
            var ownKeysCalled = 0;
            var p = new Proxy(Object.preventExtensions({}), { ownKeys: function(o) { ownKeysCalled++; return Object.keys(o); }});
            Object.isFrozen(p);
            return ownKeysCalled === 1;
          */},
          res: {
            ejs: true,
            ie11: false,
            edge12: true,
            firefox2: false,
            firefox33: true,
            opera10_50: false,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: false,
            rhino1_7_13: false
          }
        },
        {
          name: 'SerializeJSONObject',
          exec: function() {/*
          
            var ownKeysCalled = 0;
            var p = new Proxy({}, { ownKeys: function(o) { ownKeysCalled++; return Object.keys(o); }});
            JSON.stringify({a:p,b:p});
            return ownKeysCalled === 2;
          */},
          res: {
            ejs: true,
            firefox2: false,
            firefox33: true,
            opera10_50: false,
            ie11: false,
            edge13: true,
            xs6: true,
            chrome49: true,
            safari10: true,
            duktape2_0: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        }
      ],
    },
    {
      name: 'Reflect',
      category: 'built-ins',
      significance: 'small',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-reflection',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect',
      note_id: 'reflect-enumerate',
      note_html: 'The 2015 version of the specification also specifies <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.enumerate">Reflect.enumerate</a>, which was removed in the 2016 version.',
      subtests: [
        {
          name: 'Reflect.get',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get',
          exec: function() {/*
            return Reflect.get({ qux: 987 }, "qux") === 987;
          */},
        },
        {
          name: 'Reflect.set',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set',
          exec: function() {/*
            var obj = {};
            Reflect.set(obj, "quux", 654);
            return obj.quux === 654;
          */},
        },
        {
          name: 'Reflect.has',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has',
          exec: function() {/*
            return Reflect.has({ qux: 987 }, "qux");
          */},
        },
        {
          name: 'Reflect.deleteProperty',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty',
          exec: function() {/*
            var obj = { bar: 456 };
            Reflect.deleteProperty(obj, "bar");
            return !("bar" in obj);
          */},
        },
        {
          name: 'Reflect.getOwnPropertyDescriptor',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor',
          exec: function() {/*
            var obj = { baz: 789 };
            var desc = Reflect.getOwnPropertyDescriptor(obj, "baz");
            return desc.value === 789 &&
              desc.configurable && desc.writable && desc.enumerable;
          */},
        },
        {
          name: 'Reflect.defineProperty',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty',
          exec: function() {/*
            var obj = {};
            Reflect.defineProperty(obj, "foo", { value: 123 });
            return obj.foo === 123 &&
              Reflect.defineProperty(Object.freeze({}), "foo", { value: 123 }) === false;
          */},
        },
        {
          name: 'Reflect.getPrototypeOf',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf',
          exec: function() {/*
            return Reflect.getPrototypeOf([]) === Array.prototype;
          */},
        },
        {
          name: 'Reflect.setPrototypeOf',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf',
          exec: function() {/*
            var obj = {};
            Reflect.setPrototypeOf(obj, Array.prototype);
            return obj instanceof Array;
          */},
        },
        {
          name: 'Reflect.isExtensible',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible',
          exec: function() {/*
            return Reflect.isExtensible({}) &&
              !Reflect.isExtensible(Object.preventExtensions({}));
          */},
        },
        {
          name: 'Reflect.preventExtensions',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions',
          exec: function() {/*
            var obj = {};
            Reflect.preventExtensions(obj);
            return !Object.isExtensible(obj);
          */},
        },
        {
          name: 'Reflect.ownKeys, string keys',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys',
          exec: function() {/*
            var obj = Object.create({ C: true });
            obj.A = true;
            Object.defineProperty(obj, 'B', { value: true, enumerable: false });
    
            return Reflect.ownKeys(obj).sort() + '' === "A,B";
          */},
        },
        {
          name: 'Reflect.ownKeys, symbol keys',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys',
          exec: function() {/*
            var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
            var proto = {};
            proto[s1] = true;
            var obj = Object.create(proto);
            obj[s2] = true;
            Object.defineProperty(obj, s3, { value: true, enumerable: false });
    
            var keys = Reflect.ownKeys(obj);
            return keys.indexOf(s2) >-1 && keys.indexOf(s3) >-1 && keys.length === 2;
          */},
        },
        {
          name: 'Reflect.apply',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply',
          exec: function() {/*
            return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;
          */},
        },
        {
          name: 'Reflect.construct',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct',
          exec: function() {/*
            return Reflect.construct(function(a, b, c) {
              this.qux = a + b + c;
            }, ["foo", "bar", "baz"]).qux === "foobarbaz";
          */},
        },
        {
          name: 'Reflect.construct sets new.target meta-property',
          exec: function() {/*
            return Reflect.construct(function(a, b, c) {
              if (new.target === Object) {
                this.qux = a + b + c;
              }
            }, ["foo", "bar", "baz"], Object).qux === "foobarbaz";
          */},
        },
        {
          name: 'Reflect.construct creates instances from third argument',
          exec: function() {/*
            function F(){}
            var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
            return obj.y === 1 && obj instanceof F;
          */},
        },
        {
          name: 'Reflect.construct, Array subclassing',
          exec: function() {/*
            function F(){}
            var obj = Reflect.construct(Array, [], F);
            obj[2] = 'foo';
            return obj.length === 3 && obj instanceof F;
          */},
        },
        {
          name: 'Reflect.construct, RegExp subclassing',
          exec: function() {/*
            function F(){}
            var obj = Reflect.construct(RegExp, ["baz","g"], F);
            return RegExp.prototype.exec.call(obj, "foobarbaz")[0] === "baz"
              && obj.lastIndex === 9 && obj instanceof F;
          */},
        },
        {
          name: 'Reflect.construct, Function subclassing',
          exec: function() {/*
            function F(){}
            var obj = Reflect.construct(Function, ["return 2"], F);
            return obj() === 2 && obj instanceof F;
          */},
        },
        {
          name: 'Reflect.construct, Promise subclassing',
          exec: function() {/*
            function F(){}
            var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve("foo"); }], F);
            var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject("quux"); }], F);
            var score = +(p1 instanceof F && p2 instanceof F);
    
            function thenFn(result)  { score += (result === "foo");  check(); }
            function catchFn(result) { score += (result === "quux"); check(); }
            function shouldNotRun(result)  { score = -Infinity;   }
    
            p1.then = p2.then = Promise.prototype.then;
            p1.catch = p2.catch = Promise.prototype.catch;
    
            p1.then(thenFn, shouldNotRun);
            p2.then(shouldNotRun, catchFn);
            p1.catch(shouldNotRun);
            p2.catch(catchFn);
    
            function check() {
              if (score === 4) asyncTestPassed();
            }
          */},
        }
      ],
    },
    {
      name: 'block-level function declaration',
      category: 'bindings',
      significance: 'small',
      note_id: 'block-level-function',
      note_html: 'Note that prior to ES6, it was <a href="http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls">recommended</a> that ES5 implementations forbid block-level declarations in strict mode.',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation',
      exec: function () {/*
        'use strict';
        if (f() !== 1) return false;
        function f() { return 1; }
        {
          if (f() !== 2) return false;
          function f() { return 2; }
          if (f() !== 2) return false;
        }
        if (f() !== 1) return false;
        return true;
      */},
      subtests: [{
        name: 'block-level function declaration',
        category: 'bindings',
        significance: 'small',
        note_id: 'block-level-function',
        note_html: 'Note that prior to ES6, it was <a href="http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls">recommended</a> that ES5 implementations forbid block-level declarations in strict mode.',
        spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation',
        exec: function () {/*
          'use strict';
          if (f() !== 1) return false;
          function f() { return 1; }
          {
            if (f() !== 2) return false;
            function f() { return 2; }
            if (f() !== 2) return false;
          }
          if (f() !== 1) return false;
          return true;
        */},
      }]
    },
    {
      name: 'destructuring, declarations',
      category: 'syntax',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-destructuring-assignment',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
      subtests: [
        {
          name: 'with arrays',
          exec: function(){/*
            var [a, , [b], c] = [5, null, [6]];
            return a === 5 && b === 6 && c === void undefined;
          */},
        },
        {
          name: 'with sparse arrays',
          exec: function(){/*
            var [a, , b] = [,,,];
            return a === void undefined && b === void undefined;
          */},
        },
        {
          name: 'with strings',
          exec: function(){/*
            var [a, b, c] = "ab";
            return a === "a" && b === "b" && c === void undefined;
          */},
        },
        {
          name: 'with astral plane strings',
          exec: function(){/*
            var [c] = "????????";
            return c === "????";
          */},
        },
        {
          name: 'with generator instances',
          exec: function(){/*
            var [a, b, c] = (function*(){ yield 1; yield 2; }());
            return a === 1 && b === 2 && c === void undefined;
          */},
        },
        {
          name: 'with generic iterables',
          exec: function(){/*
            var [a, b, c] = global.__createIterableObject([1, 2]);
            return a === 1 && b === 2 && c === void undefined;
          */},
        },
        {
          name: 'with instances of generic iterables',
          exec: function(){/*
            var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
            return a === 1 && b === 2 && c === void undefined;
          */},
        },
        {
          name: 'iterator closing',
          exec: function () {/*
            var closed = false;
            var iter = global.__createIterableObject([1, 2, 3], {
              'return': function(){ closed = true; return {}; }
            });
            var [a, b] = iter;
            return closed;
          */},
        },
        {
          name: 'trailing commas in iterable patterns',
          exec: function(){/*
            var [a,] = [1];
            return a === 1;
          */},
        },
        {
          name: 'with objects',
          exec: function(){/*
            var {c, x:d, e} = {c:7, x:8};
            return c === 7 && d === 8 && e === void undefined;
          */},
        },
        {
          name: 'object destructuring with primitives',
          exec: function(){/*
            var {toFixed} = 2;
            var {slice} = '';
            return toFixed === Number.prototype.toFixed
              && slice === String.prototype.slice;
          */},
        },
        {
          name: 'trailing commas in object patterns',
          exec: function(){/*
            var {a,} = {a:1};
            return a === 1;
          */},
        },
        {
          name: 'throws on null and undefined',
          exec: function(){/*
            try {
              var {a} = null;
              return false;
            } catch(e) {
              if (!(e instanceof TypeError))
                return false;
            }
            try {
              var {b} = void undefined;
              return false;
            } catch(e) {
              if (!(e instanceof TypeError))
                return false;
            }
            return true;
          */},
        },
        {
          name: 'computed properties',
          exec: function(){/*
            var qux = "corge";
            var { [qux]: grault } = { corge: "garply" };
            return grault === "garply";
          */},
        },
        {
          name: 'multiples in a single var statement',
          exec: function() {/*
            var [a,b] = [5,6], {c,d} = {c:7,d:8};
            return a === 5 && b === 6 && c === 7 && d === 8;
          */},
        },
        {
          name: 'nested',
          exec: function(){/*
            var [e, {x:f, g}] = [9, {x:10}];
            var {h, x:[i]} = {h:11, x:[12]};
            return e === 9 && f === 10 && g === void undefined
              && h === 11 && i === 12;
          */},
        },
        {
          name: 'in for-in loop heads',
          exec: function(){/*
            for(var [i, j, k] in { qux: 1 }) {
              return i === "q" && j === "u" && k === "x";
            }
          */},
        },
        {
          name: 'in for-of loop heads',
          exec: function(){/*
            for(var [i, j, k] of [[1,2,3]]) {
              return i === 1 && j === 2 && k === 3;
            }
          */},
        },
        {
          name: 'in catch heads',
          exec: function(){/*
            try {
              throw [1,2];
            } catch([i,j]) {
              try {
                throw { k: 3, l: 4 };
              } catch({k, l}) {
                return i === 1 && j === 2 && k === 3 && l === 4;
              }
            }
          */},
        },
        {
          name: 'rest',
          exec: function(){/*
            var [a, ...b] = [3, 4, 5];
            var [c, ...d] = [6];
            return a === 3 && b instanceof Array && (b + "") === "4,5" &&
               c === 6 && d instanceof Array && d.length === 0;
          */},
        },
        {
          name: 'defaults',
          exec: function(){/*
            var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
            var [d = 0, e = 5, f = 6] = [4,,undefined];
            return a === 1 && b === 2 && c === 3
              && d === 4 && e === 5 && f === 6;
          */},
        },
        {
          name: 'defaults, let temporal dead zone',
          exec: function(){/*
            var {a, b = 2} = {a:1};
            try {
              eval("let {c = c} = {};");
              return false;
            } catch(e){}
            try {
              eval("let {c = d, d} = {d:1};");
              return false;
            } catch(e){}
            return a === 1 && b === 2;
          */},
        }
      ],
    },
    {
      name: 'destructuring, assignment',
      category: 'syntax',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-destructuring-assignment',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
      subtests: [
        {
          name: 'with arrays',
          exec: function(){/*
            var a,b,c;
            [a, , [b], c] = [5, null, [6]];
            return a === 5 && b === 6 && c === void undefined;
          */},
        },
        {
          name: 'with sparse arrays',
          exec: function(){/*
            var a, b;
            [a, , b] = [,,,];
            return a === void undefined && b === void undefined;
          */},
        },
        {
          name: 'with strings',
          exec: function(){/*
            var a,b,c;
            [a, b, c] = "ab";
            return a === "a" && b === "b" && c === void undefined;
          */},
        },
        {
          name: 'with astral plane strings',
          exec: function(){/*
            var c;
            [c] = "????????";
            return c === "????";
          */},
        },
        {
          name: 'with generator instances',
          exec: function(){/*
            var a,b,c;
            [a, b, c] = (function*(){ yield 1; yield 2; }());
            return a === 1 && b === 2 && c === void undefined;
          */},
        },
        {
          name: 'with generic iterables',
          exec: function(){/*
            var a,b,c;
            [a, b, c] = global.__createIterableObject([1, 2]);
            return a === 1 && b === 2 && c === void undefined;
          */},
        },
        {
          name: 'with instances of generic iterables',
          exec: function(){/*
            var a,b,c;
            [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
            return a === 1 && b === 2 && c === void undefined;
          */},
        },
        {
          name: 'iterator closing',
          exec: function () {/*
            var closed = false;
            var iter = global.__createIterableObject([1, 2, 3], {
              'return': function(){ closed = true; return {}; }
            });
            var a,b;
            [a, b] = iter;
            return closed;
          */},
        },
        {
          name: 'iterable destructuring expression',
          exec: function() {/*
            var a, b, iterable = [1,2];
            return ([a, b] = iterable) === iterable;
          */},
        },
        {
          name: 'chained iterable destructuring',
          exec: function() {/*
            var a,b,c,d;
            [a,b] = [c,d] = [1,2];
            return a === 1 && b === 2 && c === 1 && d === 2;
          */},
        },
        {
          name: 'trailing commas in iterable patterns',
          exec: function(){/*
            var a;
            [a,] = [1];
            return a === 1;
          */},
        },
        {
          name: 'with objects',
          exec: function(){/*
            var c,d,e;
            ({c, x:d, e} = {c:7, x:8});
            return c === 7 && d === 8 && e === void undefined;
          */},
        },
        {
          name: 'object destructuring with primitives',
          exec: function(){/*
            var toFixed, slice;
            ({toFixed} = 2);
            ({slice} = '');
            return toFixed === Number.prototype.toFixed
              && slice === String.prototype.slice;
          */},
        },
        {
          name: 'trailing commas in object patterns',
          exec: function(){/*
            var a;
            ({a,} = {a:1});
            return a === 1;
          */},
        },
        {
          name: 'object destructuring expression',
          exec: function() {/*
            var a, b, obj = { a:1, b:2 };
            return ({a,b} = obj) === obj;
          */},
        },
        {
          name: 'parenthesised left-hand-side is a syntax error',
          exec: function() {/*
            var a, b;
            ({a,b} = {a:1,b:2});
            try {
              eval("({a,b}) = {a:3,b:4};");
            }
            catch(e) {
              return a === 1 && b === 2;
            }
          */},
        },
        {
          name: 'chained object destructuring',
          exec: function() {/*
            var a,b,c,d;
            ({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
            return a === 1 && b === 2 && c === 3 && d === 4;
          */},
        },
        {
          name: 'throws on null and undefined',
          exec: function(){/*
            var a,b;
            try {
              ({a} = null);
              return false;
            } catch(e) {
              if (!(e instanceof TypeError))
                return false;
            }
            try {
              ({b} = void undefined);
              return false;
            } catch(e) {
              if (!(e instanceof TypeError))
                return false;
            }
            return true;
          */},
        },
        {
          name: 'computed properties',
          exec: function(){/*
            var grault, qux = "corge";
            ({ [qux]: grault } = { corge: "garply" });
            return grault === "garply";
          */},
        },
        {
          name: 'nested',
          exec: function(){/*
            var e,f,g,h,i;
            [e, {x:f, g}] = [9, {x:10}];
            ({h, x:[i]} = {h:11, x:[12]});
            return e === 9 && f === 10 && g === void undefined
              && h === 11 && i === 12;
          */},
        },
        {
          name: 'rest',
          exec: function(){/*
            var a,b,c,d;
            [a, ...b] = [3, 4, 5];
            [c, ...d] = [6];
            return a === 3 && b instanceof Array && (b + "") === "4,5" &&
               c === 6 && d instanceof Array && d.length === 0;
          */},
        },
        {
          name: 'nested rest',
          exec: function(){/*
            var a = [1, 2, 3], first, last;
            [first, ...[a[2], last]] = a;
            return first === 1 && last === 3 && (a + "") === "1,2,2";
          */},
        },
        {
          name: 'empty patterns',
          exec: function(){/*
            [] = [1,2];
            ({} = {a:1,b:2});
            return true;
          */},
        },
        {
          name: 'defaults',
          exec: function(){/*
            var a,b,c,d,e,f;
            ({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
            [d = 0, e = 5, f = 6] = [4,,undefined];
            return a === 1 && b === 2 && c === 3
              && d === 4 && e === 5 && f === 6;
          */},
        }
      ],
    },
    {
      name: 'destructuring, parameters',
      category: 'syntax',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-destructuring-assignment',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
      subtests: [
        {
          name: 'with arrays',
          exec: function(){/*
            return function([a, , [b], c]) {
              return a === 5 && b === 6 && c === void undefined;
            }([5, null, [6]]);
          */},
        },
        {
          name: 'with sparse arrays',
          exec: function(){/*
            return function([a, , b]) {
              return a === void undefined && b === void undefined;
            }([,,,]);
          */},
        },
        {
          name: 'with strings',
          exec: function(){/*
            return function([a, b, c]) {
              return a === "a" && b === "b" && c === void undefined;
            }("ab");
          */},
        },
        {
          name: 'with astral plane strings',
          exec: function(){/*
            return function([c]) {
              return c === "????";
            }("????????");
          */},
        },
        {
          name: 'with generator instances',
          exec: function(){/*
            return function([a, b, c]) {
              return a === 1 && b === 2 && c === void undefined;
            }(function*(){ yield 1; yield 2; }());
          */},
        },
        {
          name: 'with generic iterables',
          exec: function(){/*
            return function([a, b, c]) {
              return a === 1 && b === 2 && c === void undefined;
            }(global.__createIterableObject([1, 2]));
          */},
        },
        {
          name: 'with instances of generic iterables',
          exec: function(){/*
            return function([a, b, c]) {
              return a === 1 && b === 2 && c === void undefined;
            }(Object.create(global.__createIterableObject([1, 2])));
          */},
        },
        {
          name: 'iterator closing',
          exec: function () {/*
            var closed = false;
            var iter = global.__createIterableObject([1, 2, 3], {
              'return': function(){ closed = true; return {}; }
            });
            (function([a,b]) {}(iter));
            return closed;
          */},
        },
        {
          name: 'trailing commas in iterable patterns',
          exec: function(){/*
            return function([a,]) {
              return a === 1;
            }([1]);
          */},
        },
        {
          name: 'with objects',
          exec: function(){/*
            return function({c, x:d, e}) {
              return c === 7 && d === 8 && e === void undefined;
            }({c:7, x:8});
          */},
        },
        {
          name: 'object destructuring with primitives',
          exec: function(){/*
            return function({toFixed}, {slice}) {
              return toFixed === Number.prototype.toFixed
                && slice === String.prototype.slice;
            }(2,'');
          */},
        },
        {
          name: 'trailing commas in object patterns',
          exec: function(){/*
            return function({a,}) {
              return a === 1;
            }({a:1});
          */},
        },
        {
          name: 'throws on null and undefined',
          exec: function(){/*
            try {
              (function({a}){}(null));
              return false;
            } catch(e) {}
            try {
              (function({b}){}(undefined));
              return false;
            } catch(e) {}
            return true;
          */},
        },
        {
          name: 'computed properties',
          exec: function(){/*
            var qux = "corge";
            return function({ [qux]: grault }) {
              return grault === "garply";
            }({ corge: "garply" });
          */},
        },
        {
          name: 'nested',
          exec: function(){/*
            return function([e, {x:f, g}], {h, x:[i]}) {
              return e === 9 && f === 10 && g === void undefined
                && h === 11 && i === 12;
            }([9, {x:10}],{h:11, x:[12]});
          */},
        },
        {
          name: '\'arguments\' interaction',
          exec: function(){/*
            return (function({a, x:b, y:e}, [c, d]) {
              return arguments[0].a === 1 && arguments[0].x === 2
                && !("y" in arguments[0]) && arguments[1] + '' === "3,4";
            }({a:1, x:2}, [3, 4]));
          */},
        },
        {
          name: 'new Function() support',
          exec: function(){/*
            return new Function("{a, x:b, y:e}","[c, d]",
              "return a === 1 && b === 2 && c === 3 && "
              + "d === 4 && e === void undefined;"
            )({a:1, x:2}, [3, 4]);
          */},
        },{
          name: 'in parameters, function \'length\' property',
          exec: function(){/*
            return function({a, b}, [c, d]){}.length === 2;
          */},
        },
        {
          name: 'rest',
          exec: function(){/*
            return function([a, ...b], [c, ...d]) {
              return a === 3 && b instanceof Array && (b + "") === "4,5" &&
                 c === 6 && d instanceof Array && d.length === 0;
            }([3, 4, 5], [6]);
          */},
        },
        {
          name: 'empty patterns',
          exec: function(){/*
            return function ([],{}){
              return arguments[0] + '' === "3,4" && arguments[1].x === "foo";
            }([3,4],{x:"foo"});
          */},
        },
        {
          name: 'defaults',
          exec: function(){/*
            return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
                [f = 6, g = 0, h = 8]) {
              return a === 1 && b === 2 && c === 3 && d === 4 &&
                e === 5 && f === 6 && g === 7 && h === 8;
            }({b:2, c:undefined, x:4},[, 7, undefined]));
          */},
        },
        {
          name: 'defaults, separate scope',
          exec: function(){/*
            return (function({a=function(){
              return typeof b === 'undefined';
            }}){
              var b = 1;
              return a();
            }({}));
          */},
        },
        {
          name: 'defaults, new Function() support',
          exec: function(){/*
            return new Function("{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}",
              "return a === 1 && b === 2 && c === 3 && d === 4 && e === 5;"
            )({b:2, c:undefined, x:4});
          */},
        },
        {
          name: 'aliased defaults, arrow function',
          exec: function(){/*
            return ((a, {b: x = 0, c: y = 3}) => {
              return a === 1 && x === 2 && y === 3;
            })(1, {b: 2});
          */},
        },
        {
          name: 'shorthand defaults, arrow function',
          exec: function(){/*
            return ((a, {b = 0, c = 3}) => {
              return a === 1 && b === 2 && c === 3;
            })(1, {b: 2});
          */},
        },
        {
          name: 'duplicate identifier',
          exec: function(){/*
            var d = function d([d]) { return d };
            if (d([true]) !== true) return false;
    
            try {
              eval('var f = function f([id, id]) { return id }');
              return false;
            } catch (e) {
              return e instanceof SyntaxError;
            }
          */},
        }
      ],
    },
    {
      name: 'Promise',
      category: 'built-ins',
      significance: 'large',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
      subtests: [
        {
          name: 'basic functionality',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
          exec: function () {/*
            var p1 = new Promise(function(resolve, reject) { resolve("foo"); });
            var p2 = new Promise(function(resolve, reject) { reject("quux"); });
            var score = 0;
    
            function thenFn(result)  { score += (result === "foo");  check(); }
            function catchFn(result) { score += (result === "quux"); check(); }
            function shouldNotRun(result)  { score = -Infinity;   }
    
            p1.then(thenFn, shouldNotRun);
            p2.then(shouldNotRun, catchFn);
            p1.catch(shouldNotRun);
            p2.catch(catchFn);
    
            p1.then(function() {
              score += p1.then() !== p1;
              check();
            });
    
            function check() {
              if (score === 4) asyncTestPassed();
            }
          */},
        },
        {
          name: 'constructor requires new',
          exec: function () {/*
            new Promise(function(){});
            try {
              Promise(function(){});
              return false;
            } catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'Promise.prototype isn\'t an instance',
          exec: function () {/*
            new Promise(function(){});
            try {
              Promise.prototype.then(function(){});
            } catch (e) {
              return true;
            }
          */},
        },
        {
          name: 'Promise.all',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all',
          exec: function () {/*
            var fulfills = Promise.all([
              new Promise(function(resolve)   { setTimeout(resolve,2000,"foo"); }),
              new Promise(function(resolve)   { setTimeout(resolve,1000,"bar"); })
            ]);
            var rejects = Promise.all([
              new Promise(function(_, reject) { setTimeout(reject, 2000,"baz"); }),
              new Promise(function(_, reject) { setTimeout(reject, 1000,"qux"); })
            ]);
            var score = 0;
            fulfills.then(function(result) { score += (result + "" === "foo,bar"); check(); });
            rejects.catch(function(result) { score += (result === "qux"); check(); });
    
            function check() {
              if (score === 2) asyncTestPassed();
            }
          */},
        },
        {
          name: 'Promise.all, generic iterables',
          exec: function () {/*
            var fulfills = Promise.all(global.__createIterableObject([
              new Promise(function(resolve)   { setTimeout(resolve,2000,"foo"); }),
              new Promise(function(resolve)   { setTimeout(resolve,1000,"bar"); })
            ]));
            var rejects = Promise.all(global.__createIterableObject([
              new Promise(function(_, reject) { setTimeout(reject, 2000,"baz"); }),
              new Promise(function(_, reject) { setTimeout(reject, 1000,"qux"); })
            ]));
            var score = 0;
            fulfills.then(function(result) { score += (result + "" === "foo,bar"); check(); });
            rejects.catch(function(result) { score += (result === "qux"); check(); });
    
            function check() {
              if (score === 2) asyncTestPassed();
            }
          */},
        },
        {
          name: 'Promise.race',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race',
          exec: function () {/*
            var fulfills = Promise.race([
              new Promise(function(resolve)   { setTimeout(resolve,1000,"foo"); }),
              new Promise(function(_, reject) { setTimeout(reject, 2000,"bar"); })
            ]);
            var rejects = Promise.race([
              new Promise(function(_, reject) { setTimeout(reject, 1000,"baz"); }),
              new Promise(function(resolve)   { setTimeout(resolve,2000,"qux"); })
            ]);
            var score = 0;
            fulfills.then(function(result) { score += (result === "foo"); check(); });
            rejects.catch(function(result) { score += (result === "baz"); check(); });
    
            function check() {
              if (score === 2) asyncTestPassed();
            }
          */},
        },
        {
          name: 'Promise.race, generic iterables',
          exec: function () {/*
            var fulfills = Promise.race(global.__createIterableObject([
              new Promise(function(resolve)   { setTimeout(resolve,1000,"foo"); }),
              new Promise(function(_, reject) { setTimeout(reject, 2000,"bar"); })
            ]));
            var rejects = Promise.race(global.__createIterableObject([
              new Promise(function(_, reject) { setTimeout(reject, 1000,"baz"); }),
              new Promise(function(resolve)   { setTimeout(resolve,2000,"qux"); })
            ]));
            var score = 0;
            fulfills.then(function(result) { score += (result === "foo"); check(); });
            rejects.catch(function(result) { score += (result === "baz"); check(); });
    
            function check() {
              if (score === 2) asyncTestPassed();
            }
          */},
        },
        {
          name: 'Promise[Symbol.species]',
          exec: function () {/*
            var prop = Object.getOwnPropertyDescriptor(Promise, Symbol.species);
            return 'get' in prop && Promise[Symbol.species] === Promise;
          */},
        }
      ],
    },
    {
      name: 'Object static methods',
      category: 'built-in extensions',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-object-constructor',
      subtests: [
        {
          name: 'Object.assign',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign',
          exec: function () {/*
            var o = Object.assign({a:true}, {b:true}, {c:true});
            return "a" in o && "b" in o && "c" in o;
          */},
        },
        {
          name: 'Object.is',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is',
          exec: function () {/*
            return typeof Object.is === 'function' &&
              Object.is(NaN, NaN) &&
             !Object.is(-0, 0);
          */},
        },
        {
          name: 'Object.getOwnPropertySymbols',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols',
          exec: function () {/*
            var o = {};
            var sym = Symbol(), sym2 = Symbol(), sym3 = Symbol();
            o[sym]  = true;
            o[sym2] = true;
            o[sym3] = true;
            var result = Object.getOwnPropertySymbols(o);
            return result[0] === sym
              && result[1] === sym2
              && result[2] === sym3;
          */},
        },
        {
          name: 'Object.setPrototypeOf',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf',
          exec: function () {/*
            return Object.setPrototypeOf({}, Array.prototype) instanceof Array;
          */},
        }
      ],
    },
    {
      name: 'Object static methods accept primitives',
      category: 'misc',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-object-constructor',
      subtests: [
        {
          name: 'Object.getPrototypeOf',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf',
          exec: function () {/*
            return Object.getPrototypeOf('a').constructor === String;
          */},
        },
        {
          name: 'Object.getOwnPropertyDescriptor',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor',
          exec: function () {/*
            return Object.getOwnPropertyDescriptor('a', 'foo') === void undefined;
          */},
        },
        {
          name: 'Object.getOwnPropertyNames',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames',
          exec: function () {/*
            var s = Object.getOwnPropertyNames('a');
            return s.length === 2 &&
              ((s[0] === 'length' && s[1] === '0') || (s[0] === '0' && s[1] === 'length'));
          */},
        },
        {
          name: 'Object.seal',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal',
          exec: function () {/*
            return Object.seal('a') === 'a';
          */},
        },
        {
          name: 'Object.freeze',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze',
          exec: function () {/*
            return Object.freeze('a') === 'a';
          */},
        },
        {
          name: 'Object.preventExtensions',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions',
          exec: function () {/*
            return Object.preventExtensions('a') === 'a';
          */},
        },
        {
          name: 'Object.isSealed',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed',
          exec: function () {/*
            return Object.isSealed('a') === true;
          */},
        },
        {
          name: 'Object.isFrozen',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen',
          exec: function () {/*
            return Object.isFrozen('a') === true;
          */},
        },
        {
          name: 'Object.isExtensible',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible',
          exec: function () {/*
            return Object.isExtensible('a') === false;
          */},
        },
        {
          name: 'Object.keys',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys',
          exec: function () {/*
            var s = Object.keys('a');
            return s.length === 1 && s[0] === '0';
          */},
        }
      ],
    },
    {
      name: 'Object.prototype.__proto__',
      category: 'annex b',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.__proto__',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto',
      subtests: [
        {
          name: 'get prototype',
          exec: function() {/*
            var A = function(){};
            return (new A()).__proto__ === A.prototype;
          */},
        },
        {
          name: 'set prototype',
          exec: function() {/*
            var o = {};
            o.__proto__ = Array.prototype;
            return o instanceof Array;
          */},
        },
        {
          name: 'absent from Object.create(null)',
          exec: function () {/*
            var o = Object.create(null), p = {};
            o.__proto__ = p;
            return Object.getPrototypeOf(o) !== p;
          */},
          res: {
            ie11: true,
            firefox2: false,
            firefox4: true,
            chrome30: true,
            safari6: true,
            opera10_50: false,
            opera12_10: true,
            node0_12: true,
            xs6: true,
            ejs: true,
            jxa: true,
            duktape2_0: true,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript1_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'present in hasOwnProperty()',
          exec: function () {/*
            return Object.prototype.hasOwnProperty('__proto__');
          */},
          res: {
            konq4_14: true,
            ie11: true,
            firefox2: true,
            chrome30: true,
            safari3_1: true,
            opera10_50: false,
            opera12_10: true,
            node0_12: true,
            xs6: true,
            jxa: true,
            android4_0: true,
            android4_1: false,
            duktape2_0: true,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'correct property descriptor',
          exec: function () {/*
            var desc = Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");
            var A = function(){};
    
            return (desc
              && "get" in desc
              && "set" in desc
              && desc.configurable
              && !desc.enumerable);
          */},
          res: {
            ie11: true,
            firefox2: false,
            firefox17: true,
            chrome30: true,
            safari6: true,
            opera10_50: false,
            opera12_10: true,
            node0_12: true,
            xs6: true,
            jxa: true,
            duktape2_0: true,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        },
        {
          name: 'present in Object.getOwnPropertyNames()',
          exec: function () {/*
            return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') > -1;
          */},
          res: {
            ie11: true,
            firefox2: false,
            firefox7: true,
            firefox10: false,
            firefox39: true,
            chrome30: true,
            safari6: true,
            opera10_50: false,
            opera12_10: true,
            node0_12: true,
            xs6: true,
            jxa: true,
            duktape2_0: true,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true,
            rhino1_7_13: false
          }
        }
      ],
    },
    {
      name: 'function "name" property',
      category: 'built-in extensions',
      significance: 'small',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-setfunctionname',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name',
      subtests: [
        {
          name: 'function statements',
          exec: function () {/*
            function foo(){};
            return foo.name === 'foo' &&
              (function(){}).name === '';
          */},
        },
        {
          name: 'function expressions',
          exec: function () {/*
            return (function foo(){}).name === 'foo' &&
              (function(){}).name === '';
          */},
        },
        {
          name: 'new Function',
          exec: function () {/*
            return (new Function).name === "anonymous";
          */},
        },
        {
          name: 'bound functions',
          exec: function() {/*
            function foo() {};
            return foo.bind({}).name === "bound foo" &&
              (function(){}).bind({}).name === "bound ";
          */},
        },
        {
          name: 'variables (function)',
          exec: function() {/*
            var foo = function() {};
            var bar = function baz() {};
            return foo.name === "foo" && bar.name === "baz";
          */},
        },
        {
          name: 'object methods (function)',
          exec: function() {/*
            var o = { foo: function(){}, bar: function baz(){}};
            o.qux = function(){};
            return o.foo.name === "foo" &&
                   o.bar.name === "baz" &&
                   o.qux.name === "";
          */},
        },
        {
          name: 'accessor properties',
          exec: function() {/*
            var o = { get foo(){}, set foo(x){} };
            var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
            return descriptor.get.name === "get foo" &&
                   descriptor.set.name === "set foo";
          */},
        },
        {
          name: 'shorthand methods',
          exec: function() {/*
            var o = { foo(){} };
            return o.foo.name === "foo";
          */},
        },
        {
          name: 'shorthand methods (no lexical binding)',
          exec: function() {/*
            var f = "foo";
            return ({f() { return f; }}).f() === "foo";
          */},
        },
        {
          name: 'symbol-keyed methods',
          exec: function() {/*
            var sym1 = Symbol("foo");
            var sym2 = Symbol();
            var o = {
              [sym1]: function(){},
              [sym2]: function(){}
            };
    
            return o[sym1].name === "[foo]" &&
                   o[sym2].name === "";
          */},
        },
        {
          name: 'class statements',
          exec: function() {/*
            class foo {};
            class bar { static name() {} };
            return foo.name === "foo" &&
              typeof bar.name === 'function';
          */},
        },
        {
          name: 'class expressions',
          exec: function() {/*
            return class foo {}.name === "foo" &&
              typeof class bar { static name() {} }.name === 'function';
          */},
        },
        {
          name: 'variables (class)',
          exec: function() {/*
            var foo = class {};
            var bar = class baz {};
            var qux = class { static name() {} };
            return foo.name === "foo" &&
                   bar.name === "baz" &&
                   typeof qux.name === 'function';
          */},
        },
        {
          name: 'object methods (class)',
          exec: function() {/*
            var o = { foo: class {}, bar: class baz {}};
            o.qux = class {};
            return o.foo.name === "foo" &&
                   o.bar.name === "baz" &&
                   o.qux.name === "";
          */},
        },
        {
          name: 'class prototype methods',
          exec: function() {/*
            class C { foo(){} };
            return (new C).foo.name === "foo";
          */},
        },
        {
          name: 'class static methods',
          exec: function() {/*
            class C { static foo(){} };
            return C.foo.name === "foo";
          */},
        },
        {
          name: 'isn\'t writable, is configurable',
          exec: function () {/*
            var descriptor = Object.getOwnPropertyDescriptor(function f(){},"name");
            return descriptor.enumerable   === false &&
                   descriptor.writable     === false &&
                   descriptor.configurable === true;
          */},
        }
      ],
    },
    {
      name: 'String static methods',
      category: 'built-in extensions',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-constructor',
      subtests: [
        {
          name: 'String.raw',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw',
          exec: function() {/*
            return typeof String.raw === 'function';
          */},
        },
        {
          name: 'String.fromCodePoint',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint',
          exec: function() {/*
            return typeof String.fromCodePoint === 'function';
          */},
        }
      ],
    },
    {
      name: 'String.prototype methods',
      category: 'built-in extensions',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-prototype-object',
      subtests: [
        {
          name: 'String.prototype.codePointAt',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt',
          exec: function () {/*
            return typeof String.prototype.codePointAt === 'function';
          */},
        },
        {
          name: 'String.prototype.normalize',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize',
          exec: function () {/*
            return typeof String.prototype.normalize === 'function'
              && "c\u0327\u0301".normalize("NFC") === "\u1e09"
              && "\u1e09".normalize("NFD") === "c\u0327\u0301";
          */},
        },
        {
          name: 'String.prototype.repeat',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat',
          exec: function () {/*
            return typeof String.prototype.repeat === 'function'
              && "foo".repeat(3) === "foofoofoo";
          */},
        },
        {
          name: 'String.prototype.startsWith',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith',
          exec: function () {/*
            return typeof String.prototype.startsWith === 'function'
              && "foobar".startsWith("foo");
          */},
        },
        {
          name: 'String.prototype.startsWith throws on RegExp',
          exec: function () {/*
            try {
              "a".startsWith(/./);
            } catch(e) {
              return typeof String.prototype.startsWith === 'function';
            }
          */},
        },
        {
          name: 'String.prototype.endsWith',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith',
          exec: function () {/*
            return typeof String.prototype.endsWith === 'function'
              && "foobar".endsWith("bar");
          */},
        },
        {
          name: 'String.prototype.endsWith throws on RegExp',
          exec: function () {/*
            try {
              "a".endsWith(/./);
            } catch(e) {
              return typeof String.prototype.endsWith === 'function';
            }
          */},
        },
        {
          name: 'String.prototype.includes',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes',
          exec: function () {/*
            return typeof String.prototype.includes === 'function'
              && "foobar".includes("oba");
          */},
        },
        {
          name: 'String.prototype[Symbol.iterator]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator',
          exec: function () {/*
            return typeof String.prototype[Symbol.iterator] === 'function';
          */},
        },
        {
          name: 'String iterator prototype chain',
          exec: function () {/*
            var iterator = ''[Symbol.iterator]();
            var proto1 = Object.getPrototypeOf(iterator);
            var proto2 = Object.getPrototypeOf(proto1);
    
            return proto2.hasOwnProperty(Symbol.iterator) &&
              !proto1    .hasOwnProperty(Symbol.iterator) &&
              !iterator  .hasOwnProperty(Symbol.iterator) &&
              iterator[Symbol.iterator]() === iterator;
          */},
        }
      ],
    },
    {
      name: 'String.prototype HTML methods',
      category: 'annex b',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.anchor',
      subtests: [
        {
          name: 'existence',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype#HTML_wrapper_methods',
          exec: function () {/*
            var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
              "italics", "link", "small", "strike", "sub", "sup"];
            for (i = 0; i < names.length; i++) {
              if (typeof String.prototype[names[i]] !== 'function') {
                return false;
              }
            }
            return true;
          */},
        },
        {
          name: 'tags\' names are lowercase',
          exec: function () {/*
            var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
              "italics", "link", "small", "strike", "sub", "sup"];
            for (i = 0; i < names.length; i++) {
              if (""[names[i]]().toLowerCase() !== ""[names[i]]()) {
                return false;
              }
            }
            return true;
          */},
        },
        {
          name: 'quotes in arguments are escaped',
          exec: function () {/*
            var i, names = ["anchor", "fontcolor", "fontsize", "link"];
            for (i = 0; i < names.length; i++) {
              if (""[names[i]]('"') !== ""[names[i]]('&' + 'quot;')) {
                return false;
              }
            }
            return true;
          */},
        }
      ],
    },
    {
      name: 'Unicode code point escapes',
      category: 'syntax',
      significance: 'small',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-literals-string-literals',
      subtests: [
        {
          name: 'in strings',
          exec: function () {/*
            return '\u{1d306}' === '\ud834\udf06';
          */},
        },
        {
          name: 'in identifiers',
          exec: function(){/*
            var \u{102C0} = 2;
            return \u{102C0} === 2;
          */},
        },
        {
          name: 'in property key definitions',
          exec: function(){/*
            var o = { \u{102C0} : 2 };
            return o['\ud800\udec0'] === 2;
          */},
        },
        {
          name: 'in property key accesses',
          exec: function(){/*
            var o = { '\ud800\udec0' : 2 };
            return o.\u{102C0} === 2;
          */},
        }
      ]
    },
    {
      name: 'new.target',
      category: 'syntax',
      significance: 'small',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-built-in-function-objects',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target',
      subtests: [
        {
          name: 'in constructors',
          exec: function () {/*
            var passed = false;
            new function f() {
              passed = (new.target === f);
            }();
            (function() {
              passed &= (new.target === void undefined);
            }());
            return passed;
          */},
        },
        {
          name: 'assignment is an early error',
          exec: function(){/*
            var passed = false;
            new function f() {
              passed = (new.target === f);
            }();
    
            try {
              Function("new.target = function(){};");
            } catch(e) {
              return passed;
            }
          */},
        }
      ]
    },
    {
      name: 'Symbol',
      category: 'built-ins',
      significance: 'large',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-symbol-constructor',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol',
      subtests: [
        {
          name: 'basic functionality',
          exec: function(){/*
            var object = {};
            var symbol = Symbol();
            var value = {};
            object[symbol] = value;
            return object[symbol] === value;
          */},
        },
        {
          name: 'typeof support',
          exec: function(){/*
            return typeof Symbol() === "symbol";
          */},
        },
        {
          name: 'symbol keys are hidden to pre-ES6 code',
          exec: function(){/*
            var object = {};
            var symbol = Symbol();
            object[symbol] = 1;
    
            for (var x in object){}
            var passed = !x;
    
            if (Object.keys && Object.getOwnPropertyNames) {
              passed &= Object.keys(object).length === 0
                && Object.getOwnPropertyNames(object).length === 0;
            }
    
            return passed;
          */},
        },
        {
          name: 'Object.defineProperty support',
          exec: function(){/*
            var object = {};
            var symbol = Symbol();
            var value = {};
    
            if (Object.defineProperty) {
              Object.defineProperty(object, symbol, { value: value });
              return object[symbol] === value;
            }
    
            return passed;
          */},
        },
        {
          name: 'symbols inherit from Symbol.prototype',
          exec: function(){/*
            var symbol = Symbol();
            var passed = symbol.foo === void undefined;
            Symbol.prototype.foo = 2;
            passed &= symbol.foo === 2;
            delete Symbol.prototype.foo;
            return passed;
          */},
        },
        {
          name: 'cannot coerce to string or number',
          exec: function(){/*
            var symbol = Symbol();
    
            try {
              symbol + "";
              return false;
            }
            catch(e) {}
    
            try {
              symbol + 0;
              return false;
            } catch(e) {}
    
            return true;
          */},
        },
        {
          name: 'can convert with String()',
          exec: function(){/*
            return String(Symbol("foo")) === "Symbol(foo)";
          */},
        },
        {
          name: 'new Symbol() throws',
          exec: function(){/*
            var symbol = Symbol();
            try {
              new Symbol();
            } catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'Object(symbol)',
          exec: function(){/*
            var symbol = Symbol();
            var symbolObject = Object(symbol);
    
            return typeof symbolObject === "object" &&
              symbolObject instanceof Symbol &&
              symbolObject == symbol && 
              symbolObject !== symbol &&
              symbolObject.valueOf() === symbol;
          */},
        },
        {
          name: 'JSON.stringify ignores symbol primitives',
          exec: function() {/*
            var object = { foo: Symbol() };
            object[Symbol()] = 1;
            var array = [Symbol()];
            return JSON.stringify(object) === '{}' && JSON.stringify(array) === '[null]' && JSON.stringify(Symbol()) === void undefined;
          */},
        },
        {
          name: 'JSON.stringify ignores symbol objects',
          exec: function() {/*
            var testSymbolObject = function (sym) {
              var object = { foo: sym };
              try {
                
                object[sym] = 1;
              } catch (e) {} 
              var array = [sym];
              return JSON.stringify(object) === '{"foo":{}}' && JSON.stringify(array) === '[{}]' && JSON.stringify(sym) === '{}';
            };
            var objSym = Object(Symbol());
            var symNoToJSON = Object(Symbol());
            Object.defineProperty(symNoToJSON, 'toJSON', { enumerable: false, value: null }); 
            return testSymbolObject(objSym) && testSymbolObject(symNoToJSON);
          */},
        },
        {
          name: 'global symbol registry',
          exec: function() {/*
            var symbol = Symbol.for('foo');
            return Symbol.for('foo') === symbol &&
               Symbol.keyFor(symbol) === 'foo';
          */},
        }
      ],
    },
    {
      name: 'well-known symbols',
      category: 'built-ins',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-well-known-symbols',
      note_id: 'symbol-iterator-functionality',
      note_html: 'Functionality for <code>Symbol.iterator</code> is tested by the "generic iterators" subtests for '
        + 'the <a href="#test-spread_(...)_operator">spread (...) operator</a>, <a href="#test-for..of_loops">for..of loops</a>, '
        + '<a href="#test-destructuring">destructuring</a>, <a href="#test-generators">yield *</a>, '
        + 'and <a href="#test-Array_static_methods">Array.from</a>.',
      subtests: [
        {
          name: 'Symbol.hasInstance',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance',
          exec: function() {/*
            var passed = false;
            var obj = { foo: true };
            var C = function(){};
            Object.defineProperty(C, Symbol.hasInstance, {
              value: function(inst) { passed = inst.foo; return false; }
            });
            obj instanceof C;
            return passed;
          */},
        },
        {
          name: 'Symbol.isConcatSpreadable, non-spreadable array',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable',
          exec: function() {/*
            var a = [], b = [];
            b[Symbol.isConcatSpreadable] = false;
            a = a.concat(b);
            return a[0] === b;
          */},
        },
        {
          name: 'Symbol.isConcatSpreadable, spreadable object with poisoned getter',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable',
          exec: function() {/*
            if (typeof Symbol !== 'function' || !Symbol.isConcatSpreadable) {
              return null;
            }
            var spreadableHasPoisonedIndex = { length: Math.pow(2, 53) - 1 };
            spreadableHasPoisonedIndex[Symbol.isConcatSpreadable] = true;
            Object.defineProperty(spreadableHasPoisonedIndex, 0, {
              get: function () { throw new SyntaxError(); }
            });
            try {
              [].concat(spreadableHasPoisonedIndex);
              return false;
            } catch (e) {
              return !!e && e.name === 'SyntaxError';
            }
          */},
        },
        {
          name: 'Symbol.iterator, existence',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator',
          exec: function() {/*
            return "iterator" in Symbol;
          */},
        },
        {
          name: 'Symbol.iterator, arguments object',
          exec: function() {/*
            return (function() {
              return typeof arguments[Symbol.iterator] === 'function'
                && Object.hasOwnProperty.call(arguments, Symbol.iterator);
            }());
          */},
        },
        {
          name: 'Symbol.species, existence',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species',
          exec: function() {/*
            return "species" in Symbol;
          */},
        },
        {
          name: 'Symbol.species, Array.prototype.concat',
          exec: function () {/*
            var obj = [];
            obj.constructor = {};
            obj.constructor[Symbol.species] = function() {
                return { foo: 1 };
            };
            return Array.prototype.concat.call(obj, []).foo === 1;
          */},
        },
        {
          name: 'Symbol.species, Array.prototype.filter',
          exec: function () {/*
            var obj = [];
            obj.constructor = {};
            obj.constructor[Symbol.species] = function() {
                return { foo: 1 };
            };
            return Array.prototype.filter.call(obj, Boolean).foo === 1;
          */},
        },
        {
          name: 'Symbol.species, Array.prototype.map',
          exec: function () {/*
            var obj = [];
            obj.constructor = {};
            obj.constructor[Symbol.species] = function() {
                return { foo: 1 };
            };
            return Array.prototype.map.call(obj, Boolean).foo === 1;
          */},
        },
        {
          name: 'Symbol.species, Array.prototype.slice',
          exec: function () {/*
            var obj = [];
            obj.constructor = {};
            obj.constructor[Symbol.species] = function() {
                return { foo: 1 };
            };
            return Array.prototype.slice.call(obj, 0).foo === 1;
          */},
        },
        {
          name: 'Symbol.species, Array.prototype.splice',
          exec: function () {/*
            var obj = [];
            obj.constructor = {};
            obj.constructor[Symbol.species] = function() {
                return { foo: 1 };
            };
            return Array.prototype.splice.call(obj, 0).foo === 1;
          */},
        },
        {
          name: 'Symbol.species, RegExp.prototype[Symbol.split]',
          exec: function () {/*
            var passed = false;
            var obj = { constructor: {} };
            obj[Symbol.split] = RegExp.prototype[Symbol.split];
            obj.constructor[Symbol.species] = function() {
              passed = true;
              return /./;
            };
            "".split(obj);
            return passed;
          */},
        },
        {
          name: 'Symbol.species, Promise.prototype.then',
          exec: function () {/*
            var promise      = new Promise(function(resolve){ resolve(42); });
            var FakePromise1 = promise.constructor = function(exec){ exec(function(){}, function(){}); };
            var FakePromise2 = function(exec){ exec(function(){}, function(){}); };
            Object.defineProperty(FakePromise1, Symbol.species, {value: FakePromise2});
            return promise.then(function(){}) instanceof FakePromise2;
          */},
        },
        {
          name: 'Symbol.replace',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace',
          exec: function () {/*
            var O = {};
            O[Symbol.replace] = function(){
              return 42;
            };
            return ''.replace(O) === 42;
          */},
        },
        {
          name: 'Symbol.search',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search',
          exec: function () {/*
            var O = {};
            O[Symbol.search] = function(){
              return 42;
            };
            return ''.search(O) === 42;
          */},
        },
        {
          name: 'Symbol.split',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split',
          exec: function () {/*
            var O = {};
            O[Symbol.split] = function(){
              return 42;
            };
            return ''.split(O) === 42;
          */},
        },
        {
          name: 'Symbol.match',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match',
          exec: function () {/*
            var O = {};
            O[Symbol.match] = function(){
              return 42;
            };
            return ''.match(O) === 42;
          */},
        },
        {
          name: 'Symbol.match, RegExp constructor',
          exec: function () {/*
            var re = /./;
            re[Symbol.match] = false;
            var foo = {constructor: RegExp};
            foo[Symbol.match] = true;
            return RegExp(re) !== re && RegExp(foo) === foo;
          */},
        },
        {
          name: 'Symbol.match, String.prototype.startsWith',
          exec: function () {/*
            var re = /./;
            try {
              '/./'.startsWith(re);
            } catch(e){
              re[Symbol.match] = false;
              return '/./'.startsWith(re);
            }
          */},
        },
        {
          name: 'Symbol.match, String.prototype.endsWith',
          exec: function () {/*
            var re = /./;
            try {
              '/./'.endsWith(re);
            } catch(e){
              re[Symbol.match] = false;
              return '/./'.endsWith(re);
            }
          */},
        },
        {
          name: 'Symbol.match, String.prototype.includes',
          exec: function () {/*
            var re = /./;
            try {
              '/./'.includes(re);
            } catch(e){
              re[Symbol.match] = false;
              return '/./'.includes(re);
            }
          */},
        },
        {
          name: 'Symbol.toPrimitive',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive',
          exec: function() {/*
            var a = {}, b = {}, c = {};
            var passed = 0;
            a[Symbol.toPrimitive] = function(hint) { passed += hint === "number";  return 0; };
            b[Symbol.toPrimitive] = function(hint) { passed += hint === "string";  return 0; };
            c[Symbol.toPrimitive] = function(hint) { passed += hint === "default"; return 0; };
    
            a >= 0;
            b in {};
            c == 0; 
            return passed === 3;
          */},
        },
        {
          name: 'Symbol.toStringTag',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag',
          exec: function() {/*
            var a = {};
            a[Symbol.toStringTag] = "foo";
            return (a + "") === "[object foo]";
          */},
        },
        {
          name: 'Symbol.toStringTag affects existing built-ins',
          exec: function() {/*
            var s = Symbol.toStringTag;
            var passed = true;
            [
              [Array.prototype, []],
              [String.prototype, ''],
              [arguments, arguments],
              [Function.prototype, function(){}],
              [Error.prototype, new Error()],
              [Boolean.prototype, true],
              [Number.prototype, 2],
              [Date.prototype, new Date()],
              [RegExp.prototype, /./]
            ].forEach(function(pair){
              pair[0][s] = "foo";
              passed &= (Object.prototype.toString.call(pair[1]) === "[object foo]");
              delete pair[0][s];
            });
            return passed;
          */},
        },
        {
          name: 'Symbol.toStringTag, new built-ins',
          exec: function() {/*
            var passed = true;
            var s = Symbol.toStringTag;
            [
              [String, "String Iterator"],
              [Array, "Array Iterator"],
              [Map, "Map Iterator"],
              [Set, "Set Iterator"]
            ].forEach(function(pair){
              var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
              passed = passed
                && iterProto.hasOwnProperty(s)
                && iterProto[s] === pair[1];
            });
            passed = passed
              && Object.getPrototypeOf(function*(){})[s] === "GeneratorFunction"
              && Object.getPrototypeOf(function*(){}())[s] === "Generator"
              && Map.prototype[s] === "Map"
              && Set.prototype[s] === "Set"
              && ArrayBuffer.prototype[s] === "ArrayBuffer"
              && DataView.prototype[s] === "DataView"
              && Promise.prototype[s] === "Promise"
              && Symbol.prototype[s] === "Symbol"
              && typeof Object.getOwnPropertyDescriptor(
                Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === 'function';
              return passed;
          */},
        },
        {
          name: 'Symbol.toStringTag, misc. built-ins',
          exec: function() {/*
            var s = Symbol.toStringTag;
            return Math[s] === "Math"
              && JSON[s] === "JSON";
          */},
        },
        {
          name: 'Symbol.unscopables',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables',
          exec: function() {/*
            var a = { foo: 1, bar: 2 };
            a[Symbol.unscopables] = { bar: true };
            with (a) {
              return foo === 1 && typeof bar === "undefined";
            }
          */},
        }
      ],
    },
    {
      name: 'RegExp.prototype properties',
      category: 'built-in extensions',
      significance: 'small',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype',
      subtests: [
        {
          name: 'RegExp.prototype.flags',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags',
          exec: function () {/*
            return /./igm.flags === "gim" && /./.flags === "";
          */},
        },
        {
          name: 'RegExp.prototype[Symbol.match]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match',
          exec: function () {/*
            return typeof RegExp.prototype[Symbol.match] === 'function';
          */},
        },
        {
          name: 'RegExp.prototype[Symbol.replace]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace',
          exec: function () {/*
            return typeof RegExp.prototype[Symbol.replace] === 'function';
          */},
        },
        {
          name: 'RegExp.prototype[Symbol.split]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split',
          exec: function () {/*
            return typeof RegExp.prototype[Symbol.split] === 'function';
          */},
        },
        {
          name: 'RegExp.prototype[Symbol.search]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search',
          exec: function () {/*
            return typeof RegExp.prototype[Symbol.search] === 'function';
          */},
        },
        {
          name: 'RegExp[Symbol.species]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@species',
          exec: function () {/*
            var prop = Object.getOwnPropertyDescriptor(RegExp, Symbol.species);
            return 'get' in prop && RegExp[Symbol.species] === RegExp;
          */},
        }
      ]
    },
    // As this one is Annex B, it is separate from the above.
    {
      name: 'RegExp.prototype.compile',
      category: 'annex b',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.compile',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/compile',
      subtests: [
        {
          name: "basic functionality",
          exec: function () {/*
            if (typeof RegExp.prototype.compile !== 'function'){
              return false;
            }
            var rx = /a/;
            rx.compile('b');
            return rx.test('b');
          */},
          res: {
            ie10: true,
            firefox2: true,
            chrome5: true,
            safari3_1: true,
            opera10_50: true,
            konq4_14: true,
            rhino1_7_13: true,
            node0_12: true,
            android4_0: true,
            xs6: true,
            duktape2_0: false,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript1_0: true,
            hermes0_7_0: false
          }
        },
        {
          name: "returns this",
          exec: function () {/*
            var rx = /a/;
            return rx.compile('b') === rx;
          */},
          res: {
            ie10: true,
            firefox2: true,
            opera10_50: false,
            chrome5: false,
            chrome57: true,
            safari5_1: false,
            safari10: true,
            konq4_14: null,
            rhino1_7_13: true,
            node0_12: false,
            node8: true,
            android4_0: false,
            xs6: null,
            duktape2_0: false,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: true,
            hermes0_7_0: false
          }
        }
      ]
    },
    {
      name: 'RegExp syntax extensions',
      category: 'annex b',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-regular-expressions-patterns',
      subtests: [
        {
          name: 'hyphens in character sets',
          exec: function() {/*
            return /[\w-_]/.exec("-")[0] === "-";
          */},
          res: {
            ejs: true,
            ie10: true,
            firefox2: true,
            chrome5: true,
            safari3_1: true,
            opera10_50: true,
            opera12: true,
            konq4_14: true,
            rhino1_7_13: true,
            node0_12: true,
            android4_0: true,
            xs6: true,
            jxa: true,
            duktape2_0: true,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript1_0: true,
            hermes0_7_0: true
          }
        },
        {
          name: 'invalid character escapes',
          exec: function() {/*
            return /\z/.exec("\\z")[0] === "z"
              && /[\z]/.exec("[\\z]")[0] === "z";
          */},
          res: {
            ie10: true,
            firefox2: true,
            chrome5: true,
            safari3_1: true,
            opera10_50: true,
            opera12: true,
            konq4_14: true,
            rhino1_7_13: true,
            node0_12: true,
            android4_0: true,
            jxa: true,
            duktape2_0: true,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript1_0: true,
            hermes0_7_0: true
          }
        },
        {
          name: 'invalid control-character escapes',
          exec: function() {/*
            return /\c2/.exec("\\c2")[0] === "\\c2";
          */},
          res: {
            ie10: true,
            firefox2: true,
            chrome5: true,
            safari4: true,
            opera10_50: true,
            opera12: true,
            konq4_14: true,
            rhino1_7_13: true,
            node0_12: true,
            android4_0: true,
            jxa: true,
            duktape2_0: false,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript1_0: true,
            hermes0_7_0: false
          }
        },
        {
          name: 'invalid Unicode escapes',
          exec: function() {/*
            return /\u1/.exec("u1")[0] === "u1"
              && /[\u1]/.exec("u")[0] === "u";
          */},
          res: {
            ie10: true,
            firefox2: false,
            firefox4: true,
            opera10_50: false,
            chrome5: true,
            safari3_1: true,
            konq4_14: true,
            rhino1_7_13: false,
            node0_12: true,
            android4_0: true,
            xs6: true,
            jxa: true,
            duktape2_0: false,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: true,
            hermes0_7_0: true
          }
        },
        {
          name: 'invalid hexadecimal escapes',
          exec: function() {/*
            return /\x1/.exec("x1")[0] === "x1"
              && /[\x1]/.exec("x")[0] === "x";
          */},
          res: {
            ie10: true,
            firefox2: false,
            firefox4: true,
            opera10_50: false,
            chrome5: true,
            safari3_1: true,
            konq4_14: true,
            rhino1_7_13: false,
            node0_12: true,
            android4_0: true,
            jxa: true,
            duktape2_0: false,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: true,
            hermes0_7_0: true
          }
        },
        {
          name: 'incomplete patterns and quantifiers',
          exec: function() {/*
            return /x{1/.exec("x{1")[0] === "x{1"
              && /x]1/.exec("x]1")[0] === "x]1";
          */},
          res: {
            ejs: true,
            ie10: true,
            firefox2: true,
            chrome5: true,
            safari3_1: true,
            opera10_50: true,
            opera12: true,
            konq4_14: true,
            rhino1_7_13: true,
            node0_12: true,
            android4_0: true,
            xs6: true,
            jxa: true,
            duktape2_0: true,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_2_0: true,
            hermes0_7_0: true
          }
        },
        {
          name: 'octal escape sequences',
          exec: function() {/*
            return /\041/.exec("!")[0] === "!"
              && /[\041]/.exec("!")[0] === "!";
          */},
          res: {
            ejs: true,
            ie10: true,
            firefox2: true,
            chrome5: true,
            safari3_1: true,
            opera10_50: true,
            opera12: true,
            konq4_14: true,
            rhino1_7_13: true,
            node0_12: true,
            android4_0: true,
            xs6: true,
            jxa: true,
            duktape2_0: false,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript2_0: false,
            jerryscript2_3_0: true,
            hermes0_7_0: true
          }
        },
        {
          name: 'invalid backreferences become octal escapes',
          exec: function() {/*
            return /\41/.exec("!")[0] === "!"
              && /[\41]/.exec("!")[0] === "!";
          */},
          res: {
            ejs: true,
            ie10: true,
            firefox2: true,
            chrome5: true,
            safari3_1: true,
            opera10_50: true,
            opera12: true,
            konq4_14: true,
            rhino1_7_13: true,
            node0_12: true,
            android4_0: true,
            xs6: true,
            jxa: true,
            duktape2_0: false,
            nashorn1_8: true,
            nashorn9: true,
            nashorn10: true,
            graalvm19: true,
            graalvm20: true,
            graalvm20_1: true,
            jerryscript1_0: true,
            hermes0_7_0: true
          }
        }
      ],
    },
    {
      name: 'Array static methods',
      category: 'built-in extensions',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-array-constructor',
      subtests: [
        {
          name: 'Array.from, array-like objects',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Array_from_an_Array-like_object_(arguments)',
          exec: function () {/*
            return Array.from({ 0: "foo", 1: "bar", length: 2 }) + '' === "foo,bar";
          */},
        },
        {
          name: 'Array.from, generator instances',
          exec: function () {/*
            var iterable = (function*(){ yield 1; yield 2; yield 3; }());
            return Array.from(iterable) + '' === "1,2,3";
          */},
        },
        {
          name: 'Array.from, generic iterables',
          exec: function () {/*
            var iterable = global.__createIterableObject([1, 2, 3]);
            return Array.from(iterable) + '' === "1,2,3";
          */},
        },
        {
          name: 'Array.from, instances of generic iterables',
          exec: function () {/*
            var iterable = global.__createIterableObject([1, 2, 3]);
            return Array.from(Object.create(iterable)) + '' === "1,2,3";
          */},
        },
        {
          name: 'Array.from map function, array-like objects',
          exec: function () {/*
            return Array.from({ 0: "foo", 1: "bar", length: 2 }, function(e, i) {
              return e + this.baz + i;
            }, { baz: "d" }) + '' === "food0,bard1";
          */},
        },
        {
          name: 'Array.from map function, generator instances',
          exec: function () {/*
            var iterable = (function*(){ yield "foo"; yield "bar"; yield "bal"; }());
            return Array.from(iterable, function(e, i) {
              return e + this.baz + i;
            }, { baz: "d" }) + '' === "food0,bard1,bald2";
          */},
        },
        {
          name: 'Array.from map function, generic iterables',
          exec: function () {/*
            var iterable = global.__createIterableObject(["foo", "bar", "bal"]);
            return Array.from(iterable, function(e, i) {
              return e + this.baz + i;
            }, { baz: "d" }) + '' === "food0,bard1,bald2";
          */},
        },
        {
          name: 'Array.from map function, instances of iterables',
          exec: function () {/*
            var iterable = global.__createIterableObject(["foo", "bar", "bal"]);
            return Array.from(Object.create(iterable), function(e, i) {
              return e + this.baz + i;
            }, { baz: "d" }) + '' === "food0,bard1,bald2";
          */},
        },
        {
          name: 'Array.from, iterator closing',
          exec: function () {/*
            var closed = false;
            var iter = global.__createIterableObject([1, 2, 3], {
              'return': function(){ closed = true; return {}; }
            });
            try {
              Array.from(iter, function() { throw 42 });
            } catch(e){}
            return closed;
          */},
        },
        {
          name: 'Array.of',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of',
          exec: function () {/*
            return typeof Array.of === 'function' &&
              Array.of(2)[0] === 2;
          */},
        },
        {
          name: 'Array[Symbol.species]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species',
          exec: function () {/*
            var prop = Object.getOwnPropertyDescriptor(Array, Symbol.species);
            return 'get' in prop && Array[Symbol.species] === Array;
          */},
        }
      ],
    },
    {
      name: 'Array.prototype methods',
      category: 'built-in extensions',
      significance: 'medium',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-array-prototype-object',
      subtests: [
        {
          name: 'Array.prototype.copyWithin',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin',
          exec: function () {/*
            return typeof Array.prototype.copyWithin === 'function';
          */},
        },
        {
          name: 'Array.prototype.find',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
          exec: function () {/*
            return typeof Array.prototype.find === 'function';
          */},
        },
        {
          name: 'Array.prototype.findIndex',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex',
          exec: function () {/*
            return typeof Array.prototype.findIndex === 'function';
          */},
        },
        {
          name: 'Array.prototype.fill',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill',
          exec: function () {/*
            return typeof Array.prototype.fill === 'function';
          */},
        },
        {
          name: 'Array.prototype.keys',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys',
          exec: function () {/*
            return typeof Array.prototype.keys === 'function';
          */},
        },
        {
          name: 'Array.prototype.values',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values',
          exec: function () {/*
            return typeof Array.prototype.values === 'function';
          */},
        },
        {
          name: 'Array.prototype.entries',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries',
          exec: function () {/*
            return typeof Array.prototype.entries === 'function';
          */},
        },
        {
          name: 'Array.prototype.splice',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
          exec: function () {/*
            if ([0, 1, 2].splice(0).length !== 3) {
              return false;
            }
    
            var a = [1, 2];
            var result = a.splice();
            if (a.length !== 2 || result.length !== 0) {
              return false;
            }
    
            var obj = {};
            Array.prototype.splice.call(obj, 0, 0, 1);
            if (obj.length !== 1) {
              return false;
            }
    
            var spliceWorksWithLargeSparseArrays = (function () {
              var arr = new Array(1e5);
              arr[8] = 'x';
              arr.splice(1, 1);
              for (var i = 0; i < arr.length; i += 1) {
                if (arr[i] === 'x') {
                  return i === 7;
                }
              }
              return false;
            }());
            var spliceWorksWithSmallSparseArrays = (function () {
              var n = 256;
              var arr = [];
              arr[n] = 'a';
              arr.splice(n + 1, 0, 'b');
              return arr[n] === 'a';
            }());
    
            return spliceWorksWithLargeSparseArrays && spliceWorksWithSmallSparseArrays;
          */},
        },
        {
          name: 'Array.prototype[Symbol.iterator]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator',
          exec: function () {/*
            return typeof Array.prototype[Symbol.iterator] === 'function';
          */},
        },
        {
          name: 'Array iterator prototype chain',
          exec: function () {/*
            var iterator = [][Symbol.iterator]();
            
            var proto1 = Object.getPrototypeOf(iterator);
            var proto2 = Object.getPrototypeOf(proto1);
    
            return proto2.hasOwnProperty(Symbol.iterator) &&
              !proto1    .hasOwnProperty(Symbol.iterator) &&
              !iterator  .hasOwnProperty(Symbol.iterator) &&
              iterator[Symbol.iterator]() === iterator;
          */},
        },
        {
          name: 'Array.prototype[Symbol.unscopables]',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables',
          exec: function () {/*
            var unscopables = Array.prototype[Symbol.unscopables];
            if (!unscopables) {
              return false;
            }
            var ns = "find,findIndex,fill,copyWithin,entries,keys,values".split(",");
            for (var i = 0; i < ns.length; i++) {
              if (Array.prototype[ns[i]] && !unscopables[ns[i]]) return false;
            }
            return true;
          */},
        }
      ],
    },
    {
      name: 'Number properties',
      category: 'built-in extensions',
      significance: 'small',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-isfinite-number',
      subtests: [
        {
          name: 'Number.isFinite',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite',
          exec: function () {/*
            return typeof Number.isFinite === 'function';
          */},
        },
        {
          name: 'Number.isInteger',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger',
          exec: function () {/*
            return typeof Number.isInteger === 'function';
          */},
        },
        {
          name: 'Number.isSafeInteger',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger',
          exec: function () {/*
            return typeof Number.isSafeInteger === 'function';
          */},
        },
        {
          name: 'Number.isNaN',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN',
          exec: function () {/*
            return typeof Number.isNaN === 'function';
          */},
        },
        {
          name: 'Number.parseFloat',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat',
          exec: function () {/*
            var actualGlobal = Function('return this')();
            return typeof Number.parseFloat === 'function'
              && Number.parseFloat === actualGlobal.parseFloat;
          */},
        },
        {
          name: 'Number.parseInt',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt',
          exec: function () {/*
            var actualGlobal = Function('return this')();
            return typeof Number.parseInt === 'function'
              && Number.parseInt === actualGlobal.parseInt;
          */},
        },
        {
          name: 'Number.EPSILON',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON',
          exec: function () {/*
            return typeof Number.EPSILON === 'number';
          */},
        },
        {
          name: 'Number.MIN_SAFE_INTEGER',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER',
          exec: function () {/*
            return typeof Number.MIN_SAFE_INTEGER === 'number';
          */},
        },
        {
          name: 'Number.MAX_SAFE_INTEGER',
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER',
          exec: function () {/*
            return typeof Number.MAX_SAFE_INTEGER === 'number';
          */},
        }
      ],
    },
    {
      name: 'Date.prototype[Symbol.toPrimitive]',
      category: 'built-in extensions',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype-@@toprimitive',
      mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive',
      exec: function () {/*
        var tp = Date.prototype[Symbol.toPrimitive];
        return tp.call(Object(2), "number") === 2
          && tp.call(Object(2), "string") === "2"
          && tp.call(Object(2), "default") === "2";
      */},
    },
    {
      name: 'Array is subclassable',
      category: 'subclassing',
      significance: 'small',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-array-constructor',
      subtests: [
        {
          name: 'length property (accessing)',
          exec: function () {/*
            class C extends Array {}
            var c = new C();
            var len1 = c.length;
            c[2] = 'foo';
            var len2 = c.length;
            return len1 === 0 && len2 === 3;
          */},
        },
        {
          name: 'length property (setting)',
          exec: function () {/*
            class C extends Array {}
            var c = new C();
            c[2] = 'foo';
            c.length = 1;
            return c.length === 1 && !(2 in c);
          */},
        },
        {
          name: 'correct prototype chain',
          exec: function () {/*
            class C extends Array {}
            var c = new C();
            return c instanceof C && c instanceof Array && Object.getPrototypeOf(C) === Array;
          */},
        },
        {
          name: 'Array.isArray support',
          exec: function () {/*
            class C extends Array {}
            return Array.isArray(new C());
          */},
        },
        {
          name: 'Array.prototype.concat',
          exec: function () {/*
            class C extends Array {}
            var c = new C();
            return c.concat(1) instanceof C;
          */},
        },
        {
          name: 'Array.prototype.filter',
          exec: function () {/*
            class C extends Array {}
            var c = new C();
            return c.filter(Boolean) instanceof C;
          */},
        },
        {
          name: 'Array.prototype.map',
          exec: function () {/*
            class C extends Array {}
            var c = new C();
            return c.map(Boolean) instanceof C;
          */},
        },
        {
          name: 'Array.prototype.slice',
          exec: function () {/*
            class C extends Array {}
            var c = new C();
            c.push(2,4,6);
            return c.slice(1,2) instanceof C;
          */},
        },
        {
          name: 'Array.prototype.splice',
          exec: function () {/*
            class C extends Array {}
            var c = new C();
            c.push(2,4,6);
            return c.splice(1,2) instanceof C;
          */},
        },
        {
          name: 'Array.from',
          exec: function () {/*
            class C extends Array {}
            return C.from({ length: 0 }) instanceof C;
          */},
        },
        {
          name: 'Array.of',
          exec: function () {/*
            class C extends Array {}
            return C.of(0) instanceof C;
          */},
        }
      ],
    },
    {
      name: 'RegExp is subclassable',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-regexp-constructor',
      category: 'subclassing',
      significance: 'tiny',
      subtests: [
        {
          name: 'basic functionality',
          exec: function () {/*
            class R extends RegExp {}
            var r = new R("baz","g");
            return r.global && r.source === "baz";
          */},
        },
        {
          name: 'correct prototype chain',
          exec: function () {/*
            class R extends RegExp {}
            var r = new R("baz","g");
            return r instanceof R && r instanceof RegExp && Object.getPrototypeOf(R) === RegExp;
          */},
        },
        {
          name: 'RegExp.prototype.exec',
          exec: function () {/*
            class R extends RegExp {}
            var r = new R("baz","g");
            return r.exec("foobarbaz")[0] === "baz" && r.lastIndex === 9;
          */},
        },
        {
          name: 'RegExp.prototype.test',
          exec: function () {/*
            class R extends RegExp {}
            var r = new R("baz");
            return r.test("foobarbaz");
          */},
        }
      ],
    },
    {
      name: 'Function is subclassable',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-function-constructor',
      category: 'subclassing',
      significance: 'tiny',
      subtests: [
        {
          name: 'can be called',
          exec: function () {/*
            class C extends Function {}
            var c = new C("return 'foo';");
            return c() === 'foo';
          */},
        },
        {
          name: 'correct prototype chain',
          exec: function () {/*
            class C extends Function {}
            var c = new C("return 'foo';");
            return c instanceof C && c instanceof Function && Object.getPrototypeOf(C) === Function;
          */},
        },
        {
          name: 'can be used with "new"',
          exec: function () {/*
            class C extends Function {}
            var c = new C("this.bar = 2;");
            c.prototype.baz = 3;
            return new c().bar === 2 && new c().baz === 3;
          */},
        },
        {
          name: 'Function.prototype.call',
          exec: function () {/*
            class C extends Function {}
            var c = new C("x", "return this.bar + x;");
            return c.call({bar:1}, 2) === 3;
          */},
        },
        {
          name: 'Function.prototype.apply',
          exec: function () {/*
            class C extends Function {}
            var c = new C("x", "return this.bar + x;");
            return c.apply({bar:1}, [2]) === 3;
          */},
        },
        {
          name: 'Function.prototype.bind',
          exec: function () {/*
            class C extends Function {}
            var c = new C("x", "y", "return this.bar + x + y;").bind({bar:1}, 2);
            return c(6) === 9 && c instanceof C;
          */},
        }
      ],
    },
    {
      name: 'Promise is subclassable',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-function-constructor',
      category: 'subclassing',
      significance: 'small',
      subtests: [
        {
          name: 'basic functionality',
          exec: function () {/*
            class P extends Promise {}
            var p1 = new P(function(resolve, reject) { resolve("foo"); });
            var p2 = new P(function(resolve, reject) { reject("quux"); });
            var score = +(p1 instanceof P);
    
            function thenFn(result)  { score += (result === "foo");  check(); }
            function catchFn(result) { score += (result === "quux"); check(); }
            function shouldNotRun(result)  { score = -Infinity;   }
    
            p1.then(thenFn, shouldNotRun);
            p2.then(shouldNotRun, catchFn);
            p1.catch(shouldNotRun);
            p2.catch(catchFn);
    
            p1.then(function() {
              score += p1.then() instanceof P && p1.then() !== p1;
              check();
            });
    
            function check() {
              if (score === 5) asyncTestPassed();
            }
          */},
        },
        {
          name: 'correct prototype chain',
          exec: function () {/*
            class C extends Promise {}
            var c = new C(function(resolve, reject) { resolve("foo"); });
            return c instanceof C && c instanceof Promise && Object.getPrototypeOf(C) === Promise;
          */},
        },
        {
          name: 'Promise.all',
          exec: function () {/*
            class P extends Promise {}
            var fulfills = P.all([
              new Promise(function(resolve)   { setTimeout(resolve,2000,"foo"); }),
              new Promise(function(resolve)   { setTimeout(resolve,1000,"bar"); })
            ]);
            var rejects = P.all([
              new Promise(function(_, reject) { setTimeout(reject, 2000,"baz"); }),
              new Promise(function(_, reject) { setTimeout(reject, 1000,"qux"); })
            ]);
            var score = +(fulfills instanceof P);
            fulfills.then(function(result) { score += (result + "" === "foo,bar"); check(); });
            rejects.catch(function(result) { score += (result === "qux"); check(); });
    
            function check() {
              if (score === 3) asyncTestPassed();
            }
          */},
        },
        {
          name: 'Promise.race',
          exec: function () {/*
            class P extends Promise {}
            var fulfills = P.race([
              new Promise(function(resolve)   { setTimeout(resolve,1000,"foo"); }),
              new Promise(function(_, reject) { setTimeout(reject, 2000,"bar"); })
            ]);
            var rejects = P.race([
              new Promise(function(_, reject) { setTimeout(reject, 1000,"baz"); }),
              new Promise(function(resolve)   { setTimeout(resolve,2000,"qux"); })
            ]);
            var score = +(fulfills instanceof P);
            fulfills.then(function(result) { score += (result === "foo"); check(); });
            rejects.catch(function(result) { score += (result === "baz"); check(); });
    
            function check() {
              if (score === 3) asyncTestPassed();
            }
          */},
        }
      ],
    },
    {
      name: 'miscellaneous subclassables',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-boolean-constructor',
      category: 'subclassing',
      significance: 'tiny',
      subtests: [
        {
          name: 'Boolean is subclassable',
          exec: function () {/*
            class C extends Boolean {}
            var c = new C(true);
            return c instanceof Boolean
              && c instanceof C
              && c == true; 
          */},
        },
        {
          name: 'Number is subclassable',
          exec: function () {/*
            class C extends Number {}
            var c = new C(6);
            return c instanceof Number
              && c instanceof C
              && +c === 6;
          */},
        },
        {
          name: 'String is subclassable',
          exec: function () {/*
            class C extends String {}
            var c = new C("golly");
            return c instanceof String
              && c instanceof C
              && c + '' === "golly"
              && c[0] === "g"
              && c.length === 5;
          */},
        },
        {
          name: 'Error is subclassable',
          exec: function () {/*
            class C extends Error {}
            var c = new C();
            return c instanceof Error
              && c instanceof C
              && Object.prototype.toString.call(c) === "[object Error]";
          */},
        },
        {
          name: 'Map is subclassable',
          exec: function () {/*
            var key = {};
            class M extends Map {}
            var map = new M();
    
            map.set(key, 123);
    
            return map instanceof M && map.has(key) && map.get(key) === 123;
          */},
        },
        {
          name: 'Set is subclassable',
          exec: function () {/*
            var obj = {};
            class S extends Set {}
            var set = new S();
    
            set.add(123);
            set.add(123);
    
            return set instanceof S && set.has(123);
          */},
        }
      ],
    },
    {
      name: 'own property order',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys',
      category: 'misc',
      significance: 'tiny',
      subtests: [
        {
          name: 'Object.keys',
          exec: function () {/*
            var obj = {
              2: true,
              0: true,
              1: true,
              ' ': true,
              9: true,
              D: true,
              B: true,
              '-1': true
            };
            obj.A = true;
            obj[3] = true;
            "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function(key){
              obj[key] = true;
            });
            Object.defineProperty(obj, 'C', { value: true, enumerable: true });
            Object.defineProperty(obj, '4', { value: true, enumerable: true });
            delete obj[2];
            obj[2] = true;
    
            var forInOrder = '';
            for(var key in obj)forInOrder += key;
    
            return Object.keys(obj).join('') === forInOrder;
          */},
        },
        {
          name: 'Object.getOwnPropertyNames',
          exec: function () {/*
            var obj = {
              2: true,
              0: true,
              1: true,
              ' ': true,
              9: true,
              D: true,
              B: true,
              '-1': true
            };
            obj.A = true;
            obj[3] = true;
            "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function(key){
              obj[key] = true;
            });
            Object.defineProperty(obj, 'C', { value: true, enumerable: true });
            Object.defineProperty(obj, '4', { value: true, enumerable: true });
            delete obj[2];
            obj[2] = true;
    
            return Object.getOwnPropertyNames(obj).join('') === "012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC";
          */},
        },
        {
          name: 'Object.assign',
          exec: function () {/*
            var result = '';
            var target = {};
    
            "012349 DBACEFGHIJKLMNOPQRST".split('').concat(-1).forEach(function(key){
              Object.defineProperty(target, key, {
                set: function(){
                  result += key;
                }
              })
            });
    
            var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
            Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
            Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
            Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
            Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
            delete obj[2];
            obj[2] = true;
    
            "EFGHIJKLMNOPQRST".split('').forEach(function(key){
              obj[key] = key;
            });
    
            Object.assign(target, obj);
    
            return result === "012349 DB-1ACEFGHIJKLMNOPQRST";
          */},
        },
        {
          name: 'JSON.stringify',
          exec: function () {/*
            var obj = {
              2: true,
              0: true,
              1: true,
              ' ': true,
              9: true,
              D: true,
              B: true,
              '-1': true
            };
            obj.A = true;
            obj[3] = true;
            "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function(key){
              obj[key] = true;
            });
            Object.defineProperty(obj, 'C', { value: true, enumerable: true });
            Object.defineProperty(obj, '4', { value: true, enumerable: true });
            delete obj[2];
            obj[2] = true;
    
            return JSON.stringify(obj) ===
              '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"A":true,"E":true,"F":true,"G":true,"H":true,"I":true,"J":true,"K":true,"L":true,"M":true,"N":true,"O":true,"P":true,"Q":true,"R":true,"S":true,"T":true,"U":true,"V":true,"W":true,"X":true,"Y":true,"Z":true,"C":true}';
          */},
        },
        {
          name: 'JSON.parse',
          exec: function () {/*
            var result = '';
            JSON.parse(
              '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"E":true,"F":true,"G":true,"H":true,"I":true,"J":true,"K":true,"L":true,"A":true,"C":true}',
              function reviver(k,v) {
                result += k;
                return v;
              }
            );
            return result === "012349 DB-1EFGHIJKLAC";
          */},
        },
        {
          name: 'Reflect.ownKeys, string key order',
          exec: function() {/*
            var obj = {
              2: true,
              0: true,
              1: true,
              ' ': true,
              9: true,
              D: true,
              B: true,
              '-1': true
            };
            obj.A = true;
            obj[3] = true;
            "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function(key){
              obj[key] = true;
            });
            Object.defineProperty(obj, 'C', { value: true, enumerable: true });
            Object.defineProperty(obj, '4', { value: true, enumerable: true });
            delete obj[2];
            obj[2] = true;
    
            return Reflect.ownKeys(obj).join('') === "012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC";
          */},
        },
        {
          name: 'Reflect.ownKeys, symbol key order',
          exec: function() {/*
            var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
            var obj = {
              1: true,
              A: true
            };
            obj.B = true;
            obj[sym1] = true;
            obj[2] = true;
            obj[sym2] = true;
            Object.defineProperty(obj, 'C', { value: true, enumerable: true });
            Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
            Object.defineProperty(obj, 'D', { value: true, enumerable: true });
    
            var result = Reflect.ownKeys(obj);
            var l = result.length;
            return result[l-3] === sym1 && result[l-2] === sym2 && result[l-1] === sym3;
          */},
        }
      ],
    },
    {
      name: 'Updated identifier syntax',
      category: 'misc',
      significance: 'small',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-names-and-keywords',
      subtests: [
        {
          name: 'var ???;',
          exec: function() {/*
            try {
              eval('var ???');
            } catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'var ????;',
          exec: function() {/*
            var ????;
            return true;
          */},
        },
        {
          name: 'no escaped reserved words as identifiers',
          exec: function() {/*
            var \u0061;
            try {
              eval('var v\\u0061r');
            } catch(e) {
              return true;
            }
          */},
        }
      ],
    },
    {
      name: 'miscellaneous',
      category: 'misc',
      significance: 'small',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-additions-and-changes-that-introduce-incompatibilities-with-prior-editions',
      subtests: [
        {
          name: 'duplicate property names in strict mode',
          exec: function(){/*
            'use strict';
            return this === void undefined && ({ a:1, a:1 }).a === 1;
          */},
        },
        {
          name: 'no semicolon needed after do-while',
          exec: function(){/*
            do {} while (false) return true;
          */},
        },
        {
          name: 'no assignments allowed in for-in head in strict mode',
          exec: function(){/*
           'use strict';
           try {
             eval('for (var i = 0 in {}) {}');
           }
           catch(e) {
             return true;
           }
          */},
        },
        {
          name: 'accessors aren\'t constructors',
          exec: function(){/*
            var f = (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
            try {
              new f;
            } catch(e) {
              return true;
            }
          */},
        },
        {
          name: 'Invalid Date',
          exec: function(){/*
            return new Date(NaN) + "" === "Invalid Date";
          */},
        },
        {
          name: 'RegExp constructor can alter flags',
          exec: function(){/*
            return new RegExp(/./im, "g").global === true;
          */},
        },
        {
          name: 'RegExp.prototype.toString generic and uses "flags" property',
          exec: function(){/*
            return RegExp.prototype.toString.call({source: 'foo', flags: 'bar'}) === '/foo/bar';
          */},
        },
        {
          name: 'built-in prototypes are not instances',
          exec: function(){/*
            try {
              RegExp.prototype.exec(); return false;
            } catch(e) {}
            try {
              Date.prototype.valueOf(); return false;
            } catch(e) {}
    
            if (![Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError].every(function (E) {
                return Object.prototype.toString.call(E.prototype) === '[object Object]';
            })) {
              return false;
            }
    
            return true;
          */},
        },
        {
          name: 'function \'length\' is configurable',
          exec: function(){/*
            var fn = function(a, b) {};
    
            var desc = Object.getOwnPropertyDescriptor(fn, "length");
            if (desc.configurable) {
              Object.defineProperty(fn, "length", { value: 1 });
              return fn.length === 1;
            }
    
            return false;
          */},
        }
      ],
    },
    {
      name: 'HTML-style comments',
      category: 'annex b',
      significance: 'tiny',
      spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-html-like-comments',
      exec: function () {/*
        --> A comment
        <!-- Another comment
        var a = 3; <!-- Another comment
        return a === 3;
      */},
      subtests: [{
        name: 'HTML-style comments',
        category: 'annex b',
        significance: 'tiny',
        spec: 'http://www.ecma-international.org/ecma-262/6.0/#sec-html-like-comments',
        exec: function () {/*
          --> A comment
          <!-- Another comment
          var a = 3; <!-- Another comment
          return a === 3;
        */},
      }]
    },
];


export default tests;