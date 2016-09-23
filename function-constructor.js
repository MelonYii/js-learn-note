(function() {
    'use strict';
    //JavaScript的实例化与继承 原文 http://www.infoq.com/cn/articles/javascript-instantiation-and-inheritance
    var Class = function(name) {
        this.name = name || 'jack';
    };
    Class.prototype.hello = function() {
        console.log(this.name);
    };

    var SubClass = function(name, age) {
        Class.call(this, name);
        this.age = age;
    };

    SubClass.prototype = Object.create(Class.prototype);
    SubClass.prototype.constructor = SubClass;

    var tony = new SubClass('tony', '32');
    tony.hello();

    // var jobs = new Class('jobs');
    // jobs.hello();
}());
