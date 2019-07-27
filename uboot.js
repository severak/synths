// base javascript library

// protects programmer from javascript insanity, browser inconsitences and typing long strings

// (c) Severák 2019
// WTFPL licensed

// kudos to lua team for inspiration
// and http://bonsaiden.github.io/JavaScript-Garden/ for wonderful docs on insanities of JS

// guess type of x
function type(v) {
	return Object.prototype.toString.call(v).slice(8, -1);
}

// issues error when v is false-y
function assert(v, message) {
	if (!message) message = 'assertion failed';
	if (!v) {
		throw message;
	}
}

// shorthand to throwing exceptions
function error(message) {
	throw message;
}

// iterates over array calling fun(i, v)
function ipairs(arr, fun) {
	for (var i = 0; i < arr.length; i++) {
		fun(i, arr[v]);
	} 
}

// iterates over object calling fun(k, v)
function pairs(obj, fun) {
	for(var k in obj) {
		if (obj.hasOwnProperty(k)) {
			fun(k,v);
		}
	}
}

function tostring(v) {
	// TODO
}

function tonumber(v, base) {
	if (!base) base = 10;
	return parseFloat(v, base);
}


// and now some DOM stuff

// kudos to https://plainjs.com/

function gebi(id) {
		return document.getElementById(id);
}

function makeElem(tag, attr, text) {
		// TODO
}


var addEvent = function(el, type, handler) {
	if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
};

// matches polyfill
	this.Element && function(ElementPrototype) {
	    ElementPrototype.matches = ElementPrototype.matches ||
	    ElementPrototype.matchesSelector ||
	    ElementPrototype.webkitMatchesSelector ||
	    ElementPrototype.msMatchesSelector ||
	    function(selector) {
	        var node = this, nodes = (node.parentNode || node.document).querySelectorAll(selector), i = -1;
	        while (nodes[++i] && nodes[i] != node);
	        return !!nodes[i];
	    }
}(Element.prototype);


function on(elem, eventName, fun, fun2) {
	assert(arguments.length>2, 'Wrong number of arguments to function on.');
	if (type(elem)=='String') elem = gebi(elem);
	if (arguments.length==4) {
		var selector = fun;
		var context = elem;
		addEvent(context || document, eventName, function(e) {
			var found, el = e.target || e.srcElement;
	        while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
	        if (found) fun2.call(el, e);
	    });
	} else {
		addEvent(elem, eventName, fun);
	}
}
// sub variant with on(elem, eventName, subselector, fun)

function hasClass(elem, className) {
	if (type(elem)=='String') elem = gebi(elem);
	return elem.classList ? elem.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(elem.className);
}

function addClass(elem, className) {
	if (type(elem)=='String') elem = gebi(elem);
	if (elem.classList) elem.classList.add(className);
	else if (!hasClass(elem, className)) elem.className += ' ' + className;
}

function delClass(elem, className) {
	if (type(elem)=='String') elem = gebi(elem);
	if (elem.classList) elem.classList.remove(className);
	else elem.className = elem.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}

// jQuery-like DOM ready
function whenReady(fun) {
		// in case the document is already rendered
	if (document.readyState!='loading') fun();
	// modern browsers
	else if (document.addEventListener) document.addEventListener('DOMContentLoaded', fun);
	// IE <= 8
	else document.attachEvent('onreadystatechange', function(){
	    if (document.readyState=='complete') fun();
	});
}