var canvas = new fabric.Canvas('canvas');
plrs = [
    "p1.png", "p2.png", "p3.png", "p4.png", "p5.png", "p6.png", "p7.png", "p8.png", "p9.png", 
]
blocoTamanho = 30;
blockObject = '';
playerX = 10;
playerY = 10;
playerObject = '';
function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerObject = Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140)
        playerObject.set({
            top: playerY,
            left: playerX
        })
        canvas.add(playerObject)
    })
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockObject = Img;

        blockObject.scaleToWidth(blocoTamanho);
        blockObject.scaleToHeight(blocoTamanho);
        blockObject.set({
            top: playerY,
            left: playerX
        })
        canvas.add(blockObject)
    })
}
window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)

    if (e.shiftKey && keyPressed == '65') {
        console.log("as telcas a e shift foram pressionadas juntas");
        blocoTamanho = blocoTamanho + 10;
        document.getElementById("tamanho").innerHTML = blocoTamanho;
    }
    if (e.shiftKey && keyPressed == '68') {
        console.log("as telcas d e shift foram pressionadas juntas");
        blocoTamanho = blocoTamanho - 10;
        document.getElementById("tamanho").innerHTML = blocoTamanho;
    }
    if (keyPressed == "80") {
        personagem()
        console.log("p")
    }
    if (keyPressed == "37") {
        left()
        console.log("esquerda")
    }
    if (keyPressed == "38") {
        up()
        console.log("cima")
    }
    if (keyPressed == "39") {
        right()
        console.log("direita")
    }
    if (keyPressed == "40") {
        down()
        console.log("baixo")
    }
    if (keyPressed == '49') {
        newImage('wall.jpg');
        console.log("1");
    }
    if (keyPressed == '50') {
        newImage('ground.png');
        console.log("2");
    }
    if (keyPressed == '51') {
        newImage('trunk.jpg');
        console.log("3");
    }
    if (keyPressed == '52') {
        newImage('roof.jpg');
        console.log("4");
    }
    if (keyPressed == '53') {
        newImage('cloud.jpg');
        console.log("5");
    }
    if (keyPressed == '54') {
        newImage('unique.png');
        console.log("6");
    }
    if (keyPressed == '55') {
        newImage('yellow_wall.png');
        console.log("7");
    }
    if (keyPressed == '56') {
        newImage('dark_green.png');
        console.log("8");
    }
    if (keyPressed == '57') {
        newImage('light_green.png');
        console.log("9");
    }
}
function up()
{
if(playerY >=0)
 {
 playerY = playerY - blocoTamanho;
 console.log("altura da imagem do bloco = " + blocoTamanho);
 console.log("Quando a tecla direcional Cima for pressionada, X =  " + playerX + " , Y = "+playerY);
 canvas.remove(playerObject);
 playerUpdate();
 }
}
function down()
{
if(playerY <=500)
 {
 playerY = playerY + blocoTamanho;
 console.log("altura da imagem do bloco = " + blocoTamanho);
 console.log("Quando a tecla direcional baixo for pressionada, X =  " + playerX + " , Y = "+playerY);
 canvas.remove(playerObject);
 playerUpdate();
 }
}
function left()
{
if(playerX >=0)
 {
 playerX = playerX - blocoTamanho;
 console.log("altura da imagem do bloco = " + blocoTamanho);
 console.log("Quando a tecla direcional Esquerda for pressionada, X =  " + playerX + " , Y = "+playerY);
 canvas.remove(playerObject);
 playerUpdate();
 }
}
function right()
{
if(playerX <=1000)
 {
 playerX = playerX + blocoTamanho;
 console.log("altura da imagem do bloco = " + blocoTamanho);
 console.log("Quando a tecla direcional Direita for pressionada, X =  " + playerX + " , Y = "+playerY);
 canvas.remove(playerObject);
 playerUpdate();
 }

}
function personagem() {
    sorteio = Math.floor(Math.random()*9)
    console.log(plrs[sorteio])
    fabric.Image.fromURL(plrs[sorteio], function (Img) {
        pObject = Img;

        pObject.scaleToWidth(150);
        pObject.scaleToHeight(140);
        pObject.set({
            top: playerY,
            left: playerX
        })
        canvas.add(pObject);
    });
 }