(window.webpackJsonp=window.webpackJsonp||[]).push([["gHjC"],{gHjC:function(t,i,a){"use strict";var s=document.getElementById("appBackDrop"),h=s.getContext("2d"),o=s.width=window.innerWidth,e=s.height=window.innerHeight,r=217,d=[],n=0,l=document.createElement("canvas"),p=l.getContext("2d");l.width=100,l.height=100;var u=l.width/2,w=p.createRadialGradient(u,u,0,u,u,u);function c(t,i){if(arguments.length<2&&(i=t,t=0),i<t){var a=i;i=t,t=a}return Math.floor(Math.random()*(i-t+1))+t}w.addColorStop(.025,"#fff"),w.addColorStop(.1,"hsl("+r+", 61%, 33%)"),w.addColorStop(.25,"hsl("+r+", 64%, 6%)"),w.addColorStop(1,"transparent"),p.fillStyle=w,p.beginPath(),p.arc(u,u,u,0,2*Math.PI),p.fill();var g=function(){var t,i,a;this.orbitRadius=c((t=o,i=e,a=Math.max(t,i),Math.round(Math.sqrt(a*a+a*a))/2)),this.radius=c(60,this.orbitRadius)/12,this.orbitX=o/2,this.orbitY=e/2,this.timePassed=c(0,1200),this.speed=c(this.orbitRadius)/9e5,this.alpha=c(2,10)/10,d[++n]=this};g.prototype.draw=function(){var t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,i=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,a=c(10);1===a&&0<this.alpha?this.alpha-=.05:2===a&&this.alpha<1&&(this.alpha+=.05),h.globalAlpha=this.alpha,h.drawImage(l,t-this.radius/2,i-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var b=0;b<1200;b++)new g;!function t(){h.globalCompositeOperation="source-over",h.globalAlpha=.8,h.fillStyle="hsla("+r+", 64%, 6%, 1)",h.fillRect(0,0,o,e),h.globalCompositeOperation="lighter";for(var i=1,a=d.length;i<a;i++)d[i].draw();window.requestAnimationFrame(t)}()}}]);