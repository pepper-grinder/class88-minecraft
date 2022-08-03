var canvas = new fabric.Canvas("myCanvas");
var player_x = 10;
var player_y = 10;
var block_width = 30;
var block_height = 30;
var player_object = "";
var block_object = "";
var wLabel = document.getElementById("current_width");
var hLabel = document.getElementById("current_height");

 function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y , 
            left:player_x
        });
        canvas.add(player_object);

    });

 }

 function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y , 
            left:player_x
        });
        canvas.add( block_object);
        
    });

 }

 window.addEventListener("keydown", my_keydown);

 function my_keydown(e){
    let kd = e.keyCode;
    if( e.shiftKey == true && kd == "80"){
        block_height = block_height+10;
        block_width = block_width+10;
        wLabel.innerHTML = block_width;
        hLabel.innerHTML = block_height;
    }

    if( e.shiftKey == true && kd == "77"){
        block_height = block_height-10;
        block_width = block_width-10;
        wLabel.innerHTML = block_width;
        hLabel.innerHTML = block_height;
    }

    if(kd == "37"){
        left();
    }

    if(kd == "38"){
        up();
    }

    if(kd == "39"){
        right();
    }

    if(kd == "40"){
        down();
    }

    if( kd == "87"){
        new_image("wall.jpg");
    }

    if( kd == "71"){
        new_image("ground.png");
    }

    if( kd == "76"){
        new_image("light_green.png");
    }

    if( kd == "84"){
        new_image("trunk.jpg");
    }

    if( kd == "82"){
        new_image("roof.jpg");
    }

    if( kd == "89"){
        new_image("yellow_wall.png");
    }

    if( kd == "68"){
        new_image("dark_green.png");
    }

    if( kd == "85"){
        new_image("unique.png");
    }

    if( kd == "67"){
        new_image("cloud.jpg");
    }
 }

 function up(){
    if(player_y >= 0){
    player_y= player_y - block_height;
    canvas.remove(player_object);
    player_update();
    }
 }

 function down(){
    if(player_y <= 500 ){
    player_y = player_y + block_height;
    canvas.remove(player_object);
    player_update();
    }
 }

 function left(){
    if(player_x >= 0 ){
    player_x = player_x - block_width;
    canvas.remove(player_object);
    player_update();
    }
 }

 function right(){
    if(player_x <= 850 ){
    player_x = player_x + block_height;
    canvas.remove(player_object);
    player_update();
    }
 }
