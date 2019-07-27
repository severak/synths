// base javascript library

// protects programmer from javascript insanity, browser inconsitences and typing long strings

// not implemented yet

// ___.   .__           __             .___      
// \_ |__ |__| ____   _/  |_  ____   __| _/____  
// | __ \|  |/ ___\  \   __\/  _ \ / __ |/  _ \ 
// | \_\ \  / /_/  >  |  | (  <_> ) /_/ (  <_> )
// |___  /__\___  /   |__|  \____/\____ |\____/ 
//     \/  /_____/                     \/       

// guess type of x
function type(x) {}

// isses error when v is false-y
function assert(v, message) {}

// shorthand to throwing exceptions
function error(message) {}

// iterates over array calling fun(i, v)
function ipairs(arr, fun) {}

// iterates over object calling fun(k, v)
function pairs(obj, fun) {}


function tostring() {}

function tonumber() {}


// and now some DOM stuff

function gebi(id) {
		return document.getElementById(id);
}

function makeElem(tag, attr, text) {}

function on(elem, eventName, fun) {}
// sub variant with on(elem, eventName, subselector, fun)

function addClass(elem, className) {}
function delClass(elem, className) {}

// jQuery-like DOM ready
function whenReady(fun) {}