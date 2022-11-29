'use strict';

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
  }
  
  function select(selector, parent = document) {
    return parent.querySelector(selector);
  }
  
  function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
  }
  
  function create(element, parent = document) {
    return parent.createElement(element);
  }
  
  function print(element) {
    console.log(element);
  }
  
//   export { onEvent, select, selectAll, create, print };

/*
classes
*/

class User {
    #id;
    #name;
    #userName;
    #email;
    
    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;

    }

    set id(id) {
        return this.#id = id;
    }

    set name(name) {
        return this.#name = name;
    }

    set userName(userName) {
        return this.#userName = userName;
    }

    set email(email) {
        return this.#email = email;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get userName() {
        return this.#userName;
    }

    get email() {
        return this.#email;
    }
    getinfo() {
        return this.#id, this.#name, this.#userName, this.#email;
    }
}

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email) 
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() {
        return this.#pages;
    }

    
    get groups() {
        return this.#groups;
    }

    
    get canMonetize() {
        return this.#canMonetize;
    }

    getinfo() {
        return super.getinfo(), this.pages, this.groups, this.canMonetize;
    }

}


const comment = select('.comment');
const fa = select('.fa-solid');
const btn = select('.btn');
const output = select('.output');
const para = select('.box');
const objects = [];
// box.innerText = `comment: ${objects.length}`


onEvent('click', btn, function(e){
    e.preventDefault();
    para.innerText = `${comment.value}`;
})


