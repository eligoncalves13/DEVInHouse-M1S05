function get(selector){
    const element = document.querySelector(selector);
    if(element) {
        return element;  
    }else{
        throw new Error(`Ops! O seletor ${selector} não foi encontrado!`);
    }    
}

function updateCSS(selector,callback){
    const elementCSS = get(selector);

    if(typeof callback === 'function'){
        callback(elementCSS.style);
    }else if(typeof callback === 'string'){
        elementCSS.style.cssText = callback;
    }else if(typeof callback === 'object'){
        for(let i in callback){
            elementCSS.style[i] = callback[i];
        }
    }else {
        throw new Error(`A função callback não é de um tipo apropriado!`);
    }
}

function addClick(selector, callback){
    const element = get(selector);
    element.addEventListener('click', callback);
}

function addAction(selector, event, callback){
    const element = get(selector);
    element.addEventListener(event, callback);
}
