

var canvas=new fabric.Canvas('canvas_minecraft');

var blockimgwidth=30;
var blockimgheight=30;

var playerx=10;
var playery=10;

var playerobject="";
var blockimgobject="";

function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
    playerobject=Img;
    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(140);
    playerobject.set({
        top:playery,left:playerx
    });
    canvas.add(playerobject);
});
}


function blockimgupdate(get_image){
    fabric.Image.fromURL(get_image,function(Img){
blockimgobject=Img;
blockimgobject.scaleToWidth(blockimgwidth);
blockimgobject.scaleToHeight(blockimgheight);
blockimgobject.set({
    top:playery,left:playerx
});
canvas.add(blockimgobject);
    });
}

window.addEventListener("keydown", mykeydown);



function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true&&keypressed=='80'){
        console.log("p and shift pressed together");
        blockimgheight=blockimgheight+10;
        blockimgwidth=blockimgwidth+10;
        document.getElementById("currentwidth").innerHTML=blockimgwidth;
        document.getElementById("currentheight").innerHTML=blockimgheight;
    }

    if(e.shiftKey==true&&keypressed=='77'){
        console.log("m and shift pressed together");
        blockimgheight=blockimgheight-10;
        blockimgwidth=blockimgwidth-10;
        document.getElementById("currentwidth").innerHTML=blockimgwidth;
        document.getElementById("currentheight").innerHTML=blockimgheight;
    }

    if(keypressed=='37'){
        left();
        console.log("left");
    }

    if(keypressed=='38'){
        up();
        console.log("up");
    }

    if(keypressed=='39'){
        right();
        console.log("right");
    }

    if(keypressed=='40'){
        down();
        console.log("down");
    }

    if(keypressed=='87'){
        blockimgupdate('wall.jpg');
        console.log("w");
    }

    if(keypressed=='71'){
        blockimgupdate('ground.png');
        console.log("g");
    }

    if(keypressed=='76'){
        blockimgupdate('light_green.png');
        console.log("l");
    }

    if(keypressed=='84'){
        blockimgupdate('trunk.jpg');
        console.log("t");
    }

    if(keypressed=='82'){
        blockimgupdate('root.jpg');
        console.log("r");
    }

    if(keypressed=='89'){
        blockimgupdate('yellow_wall.png');
        console.log("y");
    }

    if(keypressed=='68'){
        blockimgupdate('dark_green.png');
        console.log("d");
    }
    if(keypressed=='85'){
        blockimgupdate('unique.png');
        console.log("u");
    }

    if(keypressed=='67'){
        blockimgupdate('cloud.jpg');
        console.log("c");
    }

}


function up(){
    if(playery>=0){
        playery=playery-blockimgheight;
        console.log("blockimgheight:"+ blockimgheight);
        console.log("When up arrow is pressed x="+ playerx+", y="+playery);
        canvas.remove(playerobject);
        playerupdate();
    }
}

function down(){
    if(playery<=500){
        playery=playery+blockimgheight;
        console.log("blockimgheight:"+ blockimgheight);
        console.log("When up arrow is pressed x="+ playerx+", y="+playery);
        canvas.remove(playerobject);
        playerupdate();
    }
}

function left(){
    if(playerx>=0){
        playerx=playerx-blockimgwidth;
        console.log("blockimgwidth:"+ blockimgwidth);
        console.log("When up arrow is pressed x="+ playerx+", y="+playery);
        canvas.remove(playerobject);
        playerupdate();
    }
}

function right(){
    if(playerx<=850){
        playerx=playerx+blockimgwidth;
        console.log("blockimgwidth:"+ blockimgwidth);
        console.log("When up arrow is pressed x="+ playerx+", y="+playery);
        canvas.remove(playerobject);
        playerupdate();
    }
}


