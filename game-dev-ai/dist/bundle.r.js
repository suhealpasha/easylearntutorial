!function(t){function i(s){if(n[s])return n[s].exports;var e=n[s]={exports:{},id:s,loaded:!1};return t[s].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}var n={};return i.m=t,i.c=n,i.p="",i(0)}([/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
function(t,i,n){"use strict";var s=n(/*! phaser */1),e=new s.Game(800,450,s.AUTO,"gdc221Container",null,!1,!1);e.state.add("Placeholder",n(/*! ./scenes/Placeholder */8)),e.state.add("Intro",n(/*! ./scenes/Copyright */4)),e.state.add("Falling",n(/*! ./scenes/Falling */5)),e.state.add("Main",n(/*! ./scenes/Main */6)),e.state.add("Map",n(/*! ./scenes/Map */7)),window.kickStart=function(){window.didKickStart||(window.didKickStart=!0,e.state.start("Intro"))}},/*!*************************!*\
  !*** external "Phaser" ***!
  \*************************/
function(t,i){t.exports=Phaser},/*!***************************!*\
  !*** ./src/sprites/mm.js ***!
  \***************************/
function(t,i,n){"use strict";function s(t,i,n,s,a){this.sprite=t.add.sprite(i,n,s),this.states=e.states,this.anim=e.anim,this.facingRight=!0,this.jumping=!1,this.init(a)}var e=(n(/*! phaser */1),n(/*! ../anim/mm */3));s.prototype.init=function(t){var i=this.sprite,n=this.states,s=this.anim;t=t||{},i.animations.add(n.standingRight,s.standingRight.frames,s.standingRight.rate,s.standingRight.loop,!1),i.animations.add(n.runningRight,s.runningRight.frames,s.runningRight.rate,s.runningRight.loop,!1),i.animations.add(n.jumpingRight,s.jumpingRight.frames,s.jumpingRight.rate,s.jumpingRight.loop,!1),i.animations.add(n.standingLeft,s.standingLeft.frames,s.standingLeft.rate,s.standingLeft.loop,!1),i.animations.add(n.runningLeft,s.runningLeft.frames,s.runningLeft.rate,s.runningLeft.loop,!1),i.animations.add(n.jumpingLeft,s.jumpingLeft.frames,s.jumpingLeft.rate,s.jumpingLeft.loop,!1),t.scale&&(i.scale.x=t.scale.x||1,i.scale.y=t.scale.y||1),i.anchor.set(.5,.5),i.animations.play(n.standingRight)},s.prototype.update=function(t,i){var n=this.sprite,s=this.states;i=i||{jump:{},right:{},left:{}},i.jump.isDown||this.jumping?n.animations.play(this.facingRight?s.jumpingRight:s.jumpingLeft):i.right.isDown&&!this.jumping?n.animations.play(s.runningRight):i.left.isDown&&!this.jumping?n.animations.play(s.runningLeft):n.animations.play(this.facingRight?s.standingRight:s.standingLeft),i.right.isDown&&!this.facingRight&&(this.facingRight=!0),i.left.isDown&&this.facingRight&&(this.facingRight=!1)},t.exports=s},/*!************************!*\
  !*** ./src/anim/mm.js ***!
  \************************/
function(t,i){"use strict";var n={runningRight0:"runningRight0",runningRight1:"runningRight1",runningRight2:"runningRight2",standingRightBlink:"standingRightBlink",standingRight:"standingRight",jumpingRight:"jumpingRight",runningLeft0:"runningLeft0",runningLeft1:"runningLeft1",runningLeft2:"runningLeft2",standingLeftBlink:"standingLeftBlink",standingLeft:"standingLeft",jumpingLeft:"jumpingLeft"};t.exports={states:{standingRight:"standingRight",runningRight:"runningRight",jumpingRight:"jumpingRight",standingLeft:"standingLeft",jumpingLeft:"jumpingLeft"},anim:{standingRight:{frames:[n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRight,n.standingRightBlink],rate:16,loop:!0},runningRight:{frames:[n.runningRight0,n.runningRight1,n.runningRight2],rate:10,loop:!0},jumpingRight:{frames:[n.jumpingRight],rate:1,loop:!0},standingLeft:{frames:[n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeft,n.standingLeftBlink],rate:16,loop:!0},runningLeft:{frames:[n.runningLeft0,n.runningLeft1,n.runningLeft2],rate:10,loop:!0},jumpingLeft:{frames:[n.jumpingLeft],rate:100,loop:!1}}}},/*!*********************************!*\
  !*** ./src/scenes/Copyright.js ***!
  \*********************************/
function(t,i){"use strict";function n(){this.style={font:'2em "Press Start 2P"',fill:"#fff",align:"center"},this.styleSub={font:'1.25em "Press Start 2P"',fill:"#555",align:"center"},this.text=[],this.delayBeforeFadeout_ms=1e3,this.fullyLoaded=!1,this.startFadingOut=!1,this.fadeRate=.008,this.done=!1}n.prototype.preload=function(){this.load.audio("mm3Wily02",["asset/audio/mm3-wily-02-yt.cJ3hNF3EyGA.mp3"])},n.prototype.create=function(){this.text.push(this.add.text(this.world.centerX,80,"GAME DEVELOPMENT COURSE: GDC 221",this.style)),this.text.push(this.add.text(this.world.centerX,120,"FREE GAME DEVELOPMENT LESSONS",this.style)),this.text.push(this.add.text(this.world.centerX,240,"(C) EASY LEARN TUTORIAL  2015.",this.style)),this.text.push(this.add.text(this.world.centerX,280,"ALL RIGHTS RESERVED.",this.style)),this.text.push(this.add.text(this.world.centerX,320,"WWW.EASYLEARNTUTORIAL.COM.",this.style)),this.text.push(this.add.text(this.world.centerX,400,"MEGA MAN AND ALL RELATED ITEMS ARE COPYRIGHT OF CAPCOM.",this.styleSub)),this.text.forEach(function(t){t.anchor.set(.5),t.alpha=0})},n.prototype.update=function(){var t=this;this.done&&this.state.start("Main"),this.text.forEach(function(i){!t.startFadingOut&&i.alpha<1?i.alpha+=t.fadeRate:t.fullyLoaded||(t.fullyLoaded=!0,setTimeout(function(i){t.startFadingOut=!0},t.delayBeforeFadeout_ms)),t.startFadingOut&&i.alpha>0&&(i.alpha-=t.fadeRate),t.startFadingOut&&i.alpha<=0&&(t.done=!0)})},t.exports=n},/*!*******************************!*\
  !*** ./src/scenes/Falling.js ***!
  \*******************************/
function(t,i,n){"use strict";function s(){this.keys={},this.done=!1,this.player=null,this.npcs=[],this.filters=null}var e=n(/*! phaser */1),a=n(/*! ../sprites/mm */2);s.prototype.preload=function(){this.load.atlasJSONHash("mm","asset/img/megaman.gif","/asset/sprites/megaman.json")},s.prototype.create=function(){this.world.setBounds(0,0,1e3,1e3);for(var t=0;10>t;t++)this.npcs.push(new a(this,this.rnd.between(-200,1e3),this.rnd.between(-500,500),"mm",{scale:{x:1.1,y:1.1}}));for(var t=0;10>t;t++)this.npcs.push(new a(this,this.rnd.between(-200,1e3),this.rnd.between(-500,500),"mm",{scale:{x:1.75,y:1.75}}));this.player=new a(this,this.world.centerX/2,this.world.centerY/2,"mm",{scale:{x:2,y:2}});for(var t=0;10>t;t++){var i=new a(this,this.rnd.between(-200,1e3),this.rnd.between(-500,500),"mm",{scale:{x:2.25,y:2.25}});i.speed=5*Math.random()+3|0,this.npcs.push(i)}this.keys.jump=this.input.keyboard.addKey(e.Keyboard.A),this.keys.up=this.input.keyboard.addKey(e.Keyboard.UP),this.keys.down=this.input.keyboard.addKey(e.Keyboard.DOWN),this.keys.left=this.input.keyboard.addKey(e.Keyboard.LEFT),this.keys.right=this.input.keyboard.addKey(e.Keyboard.RIGHT)},s.prototype.update=function(){var t=this;this.done,this.player.update(this,this.keys),this.keys.right.isDown?(this.player.sprite.x+=3.5,this.world.camera.x+=3.5):this.keys.left.isDown&&(this.player.sprite.x-=3.5,this.world.camera.x-=3.5),this.npcs.forEach(function(i,n){10>n?i.sprite.y+=3:20>n?i.sprite.y+=4.5:i.sprite.y+=i.speed,i.sprite.y>1e3&&(i.sprite.y=-100),i.update(t,{jump:{isDown:!0},right:{},left:{}})})},t.exports=s},/*!****************************!*\
  !*** ./src/scenes/Main.js ***!
  \****************************/
function(t,i,n){"use strict";function s(){this.sprites=[],this.keys={},this.options={},this.optionArrow={},this.selectedOption=0,this.bgMusic={},this.delayBeforeFadeout_ms=1e3,this.fullyLoaded=!1,this.startFadingOut=!1,this.fadeRate=.008,this.done=!1}var e=n(/*! phaser */1);s.prototype.preload=function(){this.load.audio("bgMusic",["asset/audio/mm3-intro-yt.HeVva6ddNAc.danielsymphonies.mp3"]),this.load.atlasJSONHash("atlas","asset/img/main-screen-0.0.3.png","asset/sprites/main-screen.json")},s.prototype.create=function(){this.bgMusic=this.add.audio("bgMusic").play(),this.keys.up=this.input.keyboard.addKey(e.Keyboard.UP),this.keys.down=this.input.keyboard.addKey(e.Keyboard.DOWN),this.keys.enter=this.input.keyboard.addKey(e.Keyboard.ENTER),this.keys.spacebar=this.input.keyboard.addKey(e.Keyboard.SPACEBAR),this.optionArrow=this.add.sprite(185,285,"atlas","arrow"),this.options.startLearning=this.add.sprite(210,284,"atlas","startLearning"),this.options.aboutElt=this.add.sprite(210,320,"atlas","aboutElt"),this.sprites.push(this.add.sprite(this.world.centerX,125,"atlas","logo")),this.sprites.push(this.add.sprite(556,300,"atlas","mascot")),this.sprites.push(this.optionArrow),this.sprites.push(this.options.startLearning),this.sprites.push(this.options.aboutElt),this.sprites.forEach(function(t){t.anchor.set(.5,.5),t.alpha=0}),this.options.startLearning.anchor.set(0,.5),this.options.aboutElt.anchor.set(0,.5)},s.prototype.update=function(){var t=this;this.done,(this.keys.enter.isDown||this.keys.spacebar.isDown)&&(0===this.selectedOption?(this.state.start("Map",!0),this.bgMusic.stop()):window.location.href="http://easylearntutorial.com/about",this.done=!0),this.startFadingOut||this.sprites.forEach(function(i){i.alpha<1&&(i.alpha+=t.fadeRate)}),this.keys.up.isDown?this.selectedOption=0:this.keys.down.isDown&&(this.selectedOption=1),this.optionArrow.y=0===this.selectedOption?285:321},t.exports=s},/*!***************************!*\
  !*** ./src/scenes/Map.js ***!
  \***************************/
function(t,i,n){"use strict";function s(){this.done=!1,this.map=null,this.keys={},this.worldSize={width:25,height:100},this.stage=[],this.player=null,this.init()}var e=n(/*! phaser */1),a=n(/*! ../sprites/mm */2),h={spike:0,bgHorHighlight:1,bgSolid:2,bgHorLowlight:3,bgRand_1:4,bgRand_2:6,bgRand_3:7,solid_1:5,solid_2:8,solid_3:9,solid_4:10,bgSolidTop:12},d=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1],[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1],[1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1],[1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1],[1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,1],[1,1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,1],[1,1,1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,1],[1,1,1,1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,9,1,1,1,1,1,1],[1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,1,1,1],[1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,1],[1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,1,1],[1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1],[1,1,1,1,1,1,1,9,0,0,0,0,0,0,0,0,9,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,9,0,0,0,0,0,0,9,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1],[1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,1,1],[1,1,1,1,9,0,0,0,0,0,0,0,0,9,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,9,0,0,0,9,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,9,0,0,0,0,0,0,9,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,1],[1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,1,1],[1,1,1,1,9,0,0,0,0,0,0,0,0,9,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,9,0,0,0,9,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1]],g={width:25,height:25},r={1:[h.solid_1,h.solid_2,h.solid_3,h.solid_4],0:[h.bgSolid,h.bgRand_1,h.bgRand_1,h.bgRand_2,h.bgRand_2,h.bgRand_2,h.bgRand_3,h.bgRand_3],9:[h.spike]};s.prototype.init=function(){this.stage=[];for(var t=0;t<this.worldSize.height;t++){var i=t>15?t>20?parseInt(Math.random()*g.height-2,10)+1:1:0;t===this.worldSize.height-1&&(i=g.height-1);var n=d[i].map(function(t){return r[t][parseInt(Math.random()*r[t].length,10)]});this.stage.push(n)}},s.prototype.preload=function(){this.load.spritesheet("mm3-wily-02","asset/img/mm3-wily-02.png",32,32),this.load.atlasJSONHash("mm","asset/img/megaman.gif","/asset/sprites/megaman.json")},s.prototype.create=function(){this.add.audio("mm3Wily02").play();var t=this.add.tilemap();t.addTilesetImage("mm3-wily-02");var i=t.create("background",this.worldSize.width,this.worldSize.height,32,32),n=t.createBlankLayer("foreground",this.worldSize.width,this.worldSize.height,32,32);n.resizeWorld(),i.scrollFactorY=.5,n.scrollFactorY=1,this.stage.forEach(function(s,e){s.forEach(function(s,a){s!==h.spike&&s!==h.solid_1&&s!==h.solid_2&&s!==h.solid_3&&s!==h.solid_4?t.putTile(s,a,e,i):t.putTile(s,a,e,n)})}),this.keys.jump=this.input.keyboard.addKey(e.Keyboard.A),this.keys.up=this.input.keyboard.addKey(e.Keyboard.UP),this.keys.down=this.input.keyboard.addKey(e.Keyboard.DOWN),this.keys.left=this.input.keyboard.addKey(e.Keyboard.LEFT),this.keys.right=this.input.keyboard.addKey(e.Keyboard.RIGHT),this.player=new a(this,this.world.centerX,-550,"mm",{scale:{x:2,y:2}}),this.player.jumping=!0,this.camera.follow(this.player.sprite)},s.prototype.update=function(){this.done,this.player.update(this,this.keys),this.keys.left.isDown?this.player.sprite.x-=3:this.keys.right.isDown&&(this.player.sprite.x+=3),this.player.sprite.y+=5},t.exports=s},/*!***********************************!*\
  !*** ./src/scenes/Placeholder.js ***!
  \***********************************/
function(t,i){"use strict";function n(){this.style={font:'2em "Press Start 2P"',fill:"#fff",align:"center"},this.text={},this.textSize=1,this.dir=1}n.prototype.create=function(){this.text=this.add.text(this.world.centerX,this.world.centerY,"PLACEHOLDER SCENE",this.style),this.text.anchor.set(.5)},n.prototype.update=function(){this.text.scale.set(this.textSize,this.textSize),this.textSize+=.03*this.dir,(this.textSize>1.75||this.textSize<.5)&&(this.dir*=-1)},t.exports=n}]);
//# sourceMappingURL=bundle.r.js.map