"use strict";var body=document.body,header=document.querySelector(".header"),burger=document.querySelector(".burger"),burgerLine=document.querySelectorAll(".burger__line"),navList=document.querySelector(".nav__list");function manageStateBurger(e){body.classList[e]("body_active"),burger.classList[e]("burger_active"),burgerLine.forEach((function(t){return t.classList[e]("burger__line_active")})),navList.classList[e]("nav__list_active")}header.addEventListener("click",(function(e){(e.target.classList.contains("burger")||e.target.classList.contains("burger__line"))&&manageStateBurger("toggle"),"LI"!==e.target.tagName&&"A"!==e.target.tagName||manageStateBurger("remove")}));