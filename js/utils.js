function getAllElements(){

	return document.body.getElementsByTagName("*");

}

function getElement(_query, _parent){

	if(_parent){

		return _parent.querySelector(_query);

	} else {

		return document.querySelector(_query);

	}

}

function getElements(_query, _parent){

	if(_parent){

		return _parent.querySelectorAll(_query);

	} else {

		return document.querySelectorAll(_query);

	}

}

function forEachElement(_elements, _callback){

	if (Array.isArray(_elements) || _elements.constructor === HTMLCollection || _elements.constructor === NodeList){

		for(var i = 0; i < _elements.length; i ++){

			_callback(_elements[i]);

		}

	} else {

		console.error("ERREUR: les elements donnés ne sont pas une liste (tableau). Utilisez la fonction getElements. (Ex: getElements('.image'))");

	}

}

function replaceClass(_element, _oldClass, _newClass){

	if (isElement(_element)){

		if(hasClass(_element, _oldClass)) {

			removeClass(_element, _class);

		}

		addClass(_element, _newClass);

	} else {

		console.error("ERREUR: l'elements donné n'est pas de type HTML. Utilisez la fonction getElement. (Ex: getElement('.titre'))");

	}

}

function addClass(_element, _class){

	if (isElement(_element)){

		_element.className += " " + _class;

	} else {

		console.error("ERREUR: l'elements donné n'est pas de type HTML. Utilisez la fonction getElement. (Ex: getElement('.titre'))");

	}

}

function removeClass(_element, _class){

	if (isElement(_element)){

		_element.className = _element.className.replace( /(?:^|\s)_class(?!\S)/g , '' );

	} else {

		console.error("ERREUR: l'elements donné n'est pas de type HTML. Utilisez la fonction getElement. (Ex: getElement('.titre'))");

	}

}

function hasClass(_element, _class){

	if (isElement(_element)){

		return _element.className.match(/(?:^|\s)_class(?!\S)/);
		
	} else {

		console.error("ERREUR: l'elements donné n'est pas de type HTML. Utilisez la fonction getElement. (Ex: getElement('.titre'))");

	}

}

function isElement(_obj) {
	
	try {

    	//Using W3 DOM2 (works for FF, Opera and Chrom)
    	return _obj instanceof HTMLElement;

 	}
  	catch(e){

    	//Browsers not supporting W3 DOM2 don't have HTMLElement and
    	//an exception is thrown and we end up here. Testing some
    	//properties that all elements have. (works on IE7)
    	return (typeof _obj==="object") && (_obj.nodeType===1) && (typeof _obj.style === "object") && (typeof _obj.ownerDocument ==="object");

  	}

}

function addEvent(elem, event, fn) {

    if (elem.addEventListener) {

        elem.addEventListener(event, fn, false);

    } else {

        elem.attachEvent("on" + event, function() {

            // set the this pointer same as addEventListener when fn is called
            return(fn.call(elem, window.event));   

        });

    }

}

HTMLElement.prototype.on = function (_event, _callback) { 
    
	addEvent(this, _event, _callback);

}

Array.prototype.forEach = function (_callback){

	for (var i = 0; i < this.length; i ++){

		_callback(this[i]);

	}

} 
