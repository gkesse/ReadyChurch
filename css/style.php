<?php
    header('content-type: text/css');
    require $_SERVER["DOCUMENT_ROOT"]."/php/class/GAutoloadRegister.php";
    $lCssData = GJson::Instance()->getData("data/json/css.json");
?>
/* ============================================== */
/* Html Body */
/* ============================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:focus { 
    border: none;
    outline: none;
}

html {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
}

body {
    color: black;
    background: #051039;
    font-family: arial;
    font-size: 16px;
}
/* ============================================== */
/* Header */
/* ============================================== */
.Header {
	overflow: hidden;
	background-color: #333;
}
/* ============================================== */
.Header .Menu {
    position: relative;
    font-size: 0px;
}

.Header .Menu .Link {
    display: inline-block;
    text-align: center;
    font-size: 17px;
    font-family: Aclonica;
}

.Header .Menu .Link .Item,
.Header .Menu .Link.Icon {
    display: inline-block;
    padding: 0px 16px;
    line-height: 50px;
    color: #f2f2f2;
    text-decoration: none;
    cursor: pointer;
}

.Header .Menu .Link .Item:hover,
.Header .Menu .Link.Icon:hover {
    background-color: #555;
    color: white;
}

.Header .Menu .Link .Item.Active {
    background-color: #ff0000;
    background-image: url("/img/active2.jpg");
}

.Header .Menu .Link.Icon {
    display: none;
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 25px;
}
/* ============================================== */
.Header .Connection {
    display: none;
    position: fixed;
    z-index: 1;
    padding: 10px;
    padding-top: 50vh;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100vh;
    background-image: url("<?php echo $lCssData["Connection"]["Img"]; ?>");
    background-color: rgba(255,255,255,0.2);
}

.Header .Connection .Body {
    background-color: #fefefe;
    margin: auto;
    max-width: 500px;
    margin-top: -100px;
    border: 1px solid #888;
    position: relative;
}

.Header .Connection .Body .Close {
    background-color: rgba(0,0,0,0.2);
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    font-size: 20px;
    text-align: center;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
}

.Header .Connection .Body .Close:hover {
    background-color: rgba(0,0,0,0.4);
}

.Header .Connection .Body .Title {
    background-color: rgba(0,0,0,0.2);
    padding: 0px 10px;
    font-family: Anton;
    font-size: 25px;
    line-height: 50px;
}

.Header .Connection .Body .Text {
    background-color: rgba(0,0,0,0.2);
    border-top: 1px solid rgba(0,0,0,0.2);
    padding: 10px;
}

.Header .Connection .Body .Text .Desc {
    margin-bottom: 10px;    
}

.Header .Connection .Body .Text .Row {
    background-color: rgba(0,0,0,0.0);
    margin: 4px 0px;
    position: relative;
}

.Header .Connection .Body .Text .Row .Label {
    background-color: rgba(0,0,0,0.2);
    min-width: 150px; 
    line-height: 30px;   
    padding: 0px 10px;
    position: absolute;
    top: 0px;
    left: 0px;
}

.Header .Connection .Body .Text .Row .Field {
    background-color: rgba(0,0,0,0.0);
    border: 1px solid rgba(0,0,0,0.2);
    height: 30px;   
    padding: 5px 10px;
    margin-left: 154px;
}

.Header .Connection .Body .Text .Button {
    text-align: right;
    font-size: 0px;
    padding-top: 10px;
}

.Header .Connection .Body .Text .Button .Item {
    display: inline-block;
    background-color: rgba(0,0,0,0.2);
    padding: 0px 10px;
    line-height: 30px; 
    font-size: 16px;
    cursor: pointer;
}

.Header .Connection .Body .Text .Button .Item:hover {
    background-color: rgba(0,0,0,0.4);
}
/* ============================================== */
/* Banner */
/* ============================================== */
.Banner {
    min-height: 300px;
    background-color: #5CAF50;
    background-image: url("<?php echo $lCssData["Banner"]["Item1"]["Img"]; ?>");
    background-position: center;
    position: absolute;
}

.Banner.Item1 {
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
}

.Banner.Item2 {
    top: 300px;
    bottom: 300px;
    left: 0px;
    right: 0px;
    z-index: -1;
    background-image: url("<?php echo $lCssData["Banner"]["Item2"]["Img"]; ?>");
}

.Banner.Item3 {
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
    background-image: url("<?php echo $lCssData["Banner"]["Item3"]["Img"]; ?>");
}
/* ============================================== */
/* Html Page */
/* ============================================== */
.HtmlPage {
    position: relative;
}
/* ============================================== */
/* Body Page */
/* ============================================== */
.BodyPage {
    position: relative;
}
/* ============================================== */
.BodyPage.Mrg {
    max-width: 1000px;
    margin: auto;
}

.BodyPage.Pdd {
    padding-top: 250px;
    padding-bottom: 250px;
}
/* ============================================== */
.BodyPage .Logo {
    position: absolute;
    top: 30px;
    left: 0px;
    padding: 10px;
}

.BodyPage .Logo .Img {
    height: 150px;
    background-color: rgba(1,1,1,0.0);
    background-image: url("/img/logo.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.BodyPage .Logo .Txt {
    background-color: rgba(1,1,1,0.0);
    font-family: Archivo Narrow;
    font-size: 16px;
    color: white;
    padding: 5px;
    text-align: center;
}
/* ============================================== */
/* Main Page */
/* ============================================== */
.MainPage.Mrg {
    max-width: 700px;
    margin: auto;
}

.MainPage.Pdd {
    padding-top: 250px;
    padding-bottom: 250px;
}
/* ============================================== */
/* Parallax */
/* ============================================== */
.Parallax .Img {
    background-image: url("/img/img_parallax.jpg");
    min-height: 500px;
    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover; 
    -moz-background-size: cover; 
    -o-background-size: cover; 
}

.Parallax .Img .Caption {
    background-color: #051039;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    opacity: 0.8;
}

.Parallax .Img .Caption .Text {
    background-color: #111;
    color: #fff;
    padding: 18px;
    font-size: 25px;
    display: inline;
    font-family: Anton;
    letter-spacing: 5px;
}

.Parallax .Body {
    min-height: 500px;
    background-color: #803300;
    font-size: 20px;
    color: white;
    padding: 10px;
    font-family: Archivo Narrow;
}

.Parallax.Item1 .Img {
    min-height: 500px;
}

.Parallax.Item2 .Img {
    background-image: url("/img/img_parallax2.jpg");
}

.Parallax.Item3 .Img {
    background-image: url("/img/img_parallax3.jpg");
}

.Parallax.Item4 .Img {
    background-image: url("/img/img_parallax4.jpg");
}

.Parallax.Item5 .Img {
    background-image: url("/img/erreur.jpg");
}

.Parallax.Item2 .Body {
    background-color: #006666;
}

.Parallax.Item3 .Body {
    background-color: #2d2d86;
}

.Parallax.Item4 .Body {
    background-color: #00004d;
}

.Parallax.Item5 .Body {
    min-height: 50px;
    text-align: center;
    font-size: 25px;
    font-family: Allan;
}

.Parallax.Scroll .Img {
    background-attachment: scroll;
}
/* ============================================== */
/* Responsive Web Design */
/* ============================================== */
@media screen and (max-width: 750px) {
    /* ============================================== */
    /* Header */
    /* ============================================== */
    .Header .Menu .Link:not(:first-child){
        display: none;
    }

    .Header .Menu .Link.Icon {
        display: inline-block;
    }
    
    .Header .Menu.RWD .Link {
        display: block;
        text-align: left;
    }
    /* ============================================== */
}
/* ============================================== */
