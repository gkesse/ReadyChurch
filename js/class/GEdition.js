//===============================================
var GEdition = (function() {
    //===============================================
    var m_instance;
    var m_curDir;
    var m_rootDir;
    var m_viewType;
    var m_selectFile;
    //===============================================
    var Container = function() {
        return {
            //===============================================
            init: function(obj) {
                m_curDir = "";
                m_rootDir = "data/img";
                m_viewType = "icon";
                m_selectFile = "";
            },
            //===============================================
            // BackgroundMod1
            //===============================================
            openBackgroundMod1: function(obj) {
				var lModalBackgroundMod1 = document.getElementById("ModalBackgroundMod1");
				var lBackgroundMod1Img = document.getElementById("BackgroundMod1Img");
				var lBackgroundMod1Msg = document.getElementById("BackgroundMod1Msg");
				lModalBackgroundMod1.style.display = "block";	
				lBackgroundMod1Msg.style.display = "none";	
                var lXmlhttp = new XMLHttpRequest();
                lXmlhttp.onreadystatechange = function() {
                    if(this.readyState == 4 && this.status == 200) {
                        var lData = this.responseText;
                        var lDataMap = JSON.parse(lData);
                        var lNameMap = lDataMap['img'].split("/");
                        var lName = lNameMap[lNameMap.length - 1];
                        var lHtml = "";
                        lHtml += "<div class='Block Overflow'>";
                        lHtml += "<div class='Icon'>";
                        lHtml += "<img class='ImgView' id='BackgroundMod1ImgSrc' src='"+lDataMap['img']+"'/>";
                        lHtml += "</div>";
                        lHtml += "<div class='Name'>";
                        lHtml += lName;
                        lHtml += "</div>";
                        lHtml += "</div>";
                        lBackgroundMod1Img.innerHTML = lHtml;
                        m_selectFile = lDataMap['img'];
                    }
                }
                lXmlhttp.open("POST", "/php/req/edition.php", true);
                lXmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                lXmlhttp.send(
					"req="+"OPEN_BACKGROUND_MOD"+
					"&item="+"item1"
                    );    
            },
            //===============================================
            closeBackgroundMod1: function(obj) {
				var lModalBackgroundMod1 = document.getElementById("ModalBackgroundMod1");
				lModalBackgroundMod1.style.display = "none";	
            },
            //===============================================
            saveBackgroundMod1: function(obj) {
				var lBackgroundMod1Msg = document.getElementById("BackgroundMod1Msg");
                var lXmlhttp = new XMLHttpRequest();
                lXmlhttp.onreadystatechange = function() {
                    if(this.readyState == 4 && this.status == 200) {
                        var lData = this.responseText;
                        var lDataMap = JSON.parse(lData);
                        var lHtml = "<i class='fa fa-check-circle'></i> "; 
                        lHtml += lDataMap["msg"]; 
                        lBackgroundMod1Msg.innerHTML = lHtml;
                        lBackgroundMod1Msg.style.display = "block";
                        lBackgroundMod1Msg.style.color = "#339933";
                        location.reload();
                    }
                }
                lXmlhttp.open("POST", "/php/req/edition.php", true);
                lXmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                lXmlhttp.send(
					"req="+"SAVE_BACKGROUND_MOD"+
					"&item="+"item1"+
					"&img="+m_selectFile                   
                    );        
            },
            //===============================================
            // BackgroundMod1Modify
            //===============================================
            openBackgroundMod1Modify: function(obj) {
                var lBackgroundMod1ModifyFile = document.getElementById("BackgroundMod1ModifyFile");
				var lBackgroundMod1ImgSrc = document.getElementById("BackgroundMod1ImgSrc");
				var lModalBackgroundMod1Modify = document.getElementById("ModalBackgroundMod1Modify");
				var lBackgroundMod1ModifyData = document.getElementById("BackgroundMod1ModifyData");
				var lBackgroundMod1ModifyMsg = document.getElementById("BackgroundMod1ModifyMsg");
				var lBackgroundMod1ModifyLabel = document.getElementById("BackgroundMod1ModifyLabel");
				lModalBackgroundMod1Modify.style.display = "block";	
				lBackgroundMod1ModifyMsg.style.display = "none";
                lBackgroundMod1ModifyFile.innerHTML = m_selectFile;
                var lXmlhttp = new XMLHttpRequest();
                lXmlhttp.onreadystatechange = function() {
                    if(this.readyState == 4 && this.status == 200) {
                        var lData = this.responseText;
                        var lDataMap = JSON.parse(lData);
                        lBackgroundMod1ModifyData.innerHTML = lDataMap["file"];
                        lBackgroundMod1ModifyLabel.innerHTML = lDataMap["menu"];
                        m_curDir = lDataMap["dir"];
                    }
                }
                lXmlhttp.open("POST", "/php/req/edition.php", true);
                lXmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                lXmlhttp.send(
					"req="+"OPEN_BACKGROUND_MODIFY"+
					"&root="+m_rootDir+
					"&dir="+m_curDir+
					"&view="+m_viewType
                    );    
            },
            //===============================================
            closeBackgroundMod1Modify: function(obj) {
				var lModalBackgroundMod1Modify = document.getElementById("ModalBackgroundMod1Modify");
				lModalBackgroundMod1Modify.style.display = "none";	
            },
            //===============================================
            saveBackgroundMod1Modify: function(obj) {
				var lModalBackgroundMod1Modify = document.getElementById("ModalBackgroundMod1Modify");
				var lBackgroundMod1Img = document.getElementById("BackgroundMod1Img");
                if(m_selectFile == "") return;
                var lHtml = this.getHtml(m_selectFile);
                lBackgroundMod1Img.innerHTML = lHtml;
                lModalBackgroundMod1Modify.style.display = "none";
            },
            //===============================================
            getHtml: function(filePath) {
                var lNameMap = filePath.split("/");
                var lName = lNameMap[lNameMap.length - 1];
                var lHtml = "";
                lHtml += "<div class='Block Overflow'>";
                lHtml += "<div class='Icon'>";
                lHtml += "<img class='ImgView' src='"+filePath+"'/>";
                lHtml += "</div>";
                lHtml += "<div class='Name'>";
                lHtml += lName;
                lHtml += "</div>";
                lHtml += "</div>";
                return lHtml;
            },
            //===============================================
            openFile: function(obj, type, name, filename) {
				var lDataViewBlock = document.getElementsByClassName("DataViewBlock");
				var lBackgroundMod1ModifyFile = document.getElementById("BackgroundMod1ModifyFile");
				for(var i = 0; i < lDataViewBlock.length; i++) {
					var lBlock = lDataViewBlock[i];
					lBlock.className = lBlock.className.replace(" Active", "");
				}
				if(!type) {
                    obj.className += " Active";
                    m_selectFile = filename;
                    BackgroundMod1ModifyFile.innerHTML = m_selectFile;
					return;
				}
                m_curDir += "/" + name;
				this.openBackgroundMod1Modify(obj);
            },
            //===============================================
            openLink: function(obj, index) {
				var lDataViewLinkItem = document.getElementsByClassName("DataViewLinkItem");
				var lDirPath = "";
				for(var i = 0; i < lDataViewLinkItem.length; i ++) {
					var lLinkItem = lDataViewLinkItem[i];
					var lLinkName = lLinkItem.innerText;
					lDirPath += "/" + lLinkName;
					if(i == index) break;
				}
                m_curDir = lDirPath;
				this.openBackgroundMod1Modify(obj);
            },
            //===============================================
            // BackgroundMod2
            //===============================================
            openBackgroundMod2: function(obj) {
				var lModalBackgroundMod2 = document.getElementById("ModalBackgroundMod2");
				var lBackgroundMod2Img = document.getElementsByName("BackgroundMod2Img")[0];
				var lBackgroundMod2Msg = document.getElementById("BackgroundMod2Msg");
				lModalBackgroundMod2.style.display = "block";	
				lBackgroundMod2Msg.style.display = "none";	
                var lXmlhttp = new XMLHttpRequest();
                lXmlhttp.onreadystatechange = function() {
                    if(this.readyState == 4 && this.status == 200) {
                        var lData = this.responseText;
                        var lDataMap = JSON.parse(lData);
                        lBackgroundMod2Img.value = lDataMap["img"];
                    }
                }
                lXmlhttp.open("POST", "/php/req/edition.php", true);
                lXmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                lXmlhttp.send(
					"req="+"OPEN_BACKGROUND_MOD"+
					"&item="+"item2"
                    );       
            },
            //===============================================
            closeBackgroundMod2: function(obj) {
				var lModalBackgroundMod2 = document.getElementById("ModalBackgroundMod2");
				lModalBackgroundMod2.style.display = "none";	
            },
            //===============================================
            saveBackgroundMod2: function(obj) {
				var lBackgroundMod2Img = document.getElementsByName("BackgroundMod2Img")[0];
				var lBackgroundMod2Msg = document.getElementById("BackgroundMod2Msg");
                var lImg = lBackgroundMod2Img.value;
                var lXmlhttp = new XMLHttpRequest();
                lXmlhttp.onreadystatechange = function() {
                    if(this.readyState == 4 && this.status == 200) {
                        var lData = this.responseText;
                        var lDataMap = JSON.parse(lData);
                        var lHtml = "<i class='fa fa-check-circle'></i> "; 
                        lHtml += lDataMap["msg"]; 
                        lBackgroundMod2Msg.innerHTML = lHtml;
                        lBackgroundMod2Msg.style.display = "block";
                        lBackgroundMod2Msg.style.color = "#339933";
                        location.reload();
                    }
                }
                lXmlhttp.open("POST", "/php/req/edition.php", true);
                lXmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                lXmlhttp.send(
					"req="+"SAVE_BACKGROUNDMOD"+
					"&item="+"item2"+
					"&img="+lImg                    
                    );         
            },
            //===============================================
            // BackgroundMod3
            //===============================================
            openBackgroundMod3: function(obj) {
				var lModalBackgroundMod3 = document.getElementById("ModalBackgroundMod3");
				var lBackgroundMod3Img = document.getElementsByName("BackgroundMod3Img")[0];
				var lBackgroundMod3Msg = document.getElementById("BackgroundMod3Msg");
				lModalBackgroundMod3.style.display = "block";	
				lBackgroundMod3Msg.style.display = "none";	
                var lXmlhttp = new XMLHttpRequest();
                lXmlhttp.onreadystatechange = function() {
                    if(this.readyState == 4 && this.status == 200) {
                        var lData = this.responseText;
                        var lDataMap = JSON.parse(lData);
                        lBackgroundMod3Img.value = lDataMap["img"];
                    }
                }
                lXmlhttp.open("POST", "/php/req/edition.php", true);
                lXmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                lXmlhttp.send(
					"req="+"OPEN_BACKGROUND_MOD"+
					"&item="+"item3"
                    );       
            },
            //===============================================
            closeBackgroundMod3: function(obj) {
				var lModalBackgroundMod3 = document.getElementById("ModalBackgroundMod3");
				lModalBackgroundMod3.style.display = "none";	
            },
            //===============================================
            saveBackgroundMod3: function(obj) {
				var lBackgroundMod3Img = document.getElementsByName("BackgroundMod3Img")[0];
				var lBackgroundMod3Msg = document.getElementById("BackgroundMod3Msg");
                var lImg = lBackgroundMod3Img.value;
                var lXmlhttp = new XMLHttpRequest();
                lXmlhttp.onreadystatechange = function() {
                    if(this.readyState == 4 && this.status == 200) {
                        var lData = this.responseText;
                        var lDataMap = JSON.parse(lData);
                        var lHtml = "<i class='fa fa-check-circle'></i> "; 
                        lHtml += lDataMap["msg"]; 
                        lBackgroundMod3Msg.innerHTML = lHtml;
                        lBackgroundMod3Msg.style.display = "block";
                        lBackgroundMod3Msg.style.color = "#339933";
                        location.reload();
                    }
                }
                lXmlhttp.open("POST", "/php/req/edition.php", true);
                lXmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                lXmlhttp.send(
					"req="+"SAVE_BACKGROUNDMOD"+
					"&item="+"item3"+
					"&img="+lImg                    
                    );         
            },
            //===============================================
            // HomeText
            //===============================================
            openHomeText: function(obj) {
				var lModalHomeText = document.getElementById("ModalHomeText");
				var lHomeTextData = document.getElementById("HomeTextData");
				var lHomeTextCtn = document.getElementById("HomeTextCtn");
				var lHomeTextMsg = document.getElementById("HomeTextMsg");
                lHomeTextData.innerHTML = lHomeTextCtn.innerHTML;
				lModalHomeText.style.display = "block";	
				lHomeTextMsg.style.display = "none";	
            },
            //===============================================
            closeHomeText: function(obj) {
				var lModalHomeText = document.getElementById("ModalHomeText");
				lModalHomeText.style.display = "none";	
            },
            //===============================================
            saveHomeText: function(obj) {
				var lHomeTextData = document.getElementById("HomeTextData");
				var lHomeTextMsg = document.getElementById("HomeTextMsg");
                var lText = lHomeTextData.innerHTML;
                var lXmlhttp = new XMLHttpRequest();
                lXmlhttp.onreadystatechange = function() {
                    if(this.readyState == 4 && this.status == 200) {
                        var lData = this.responseText;
                        var lDataMap = JSON.parse(lData);
                        var lHtml = "<i class='fa fa-check-circle'></i> "; 
                        lHtml += lDataMap["msg"]; 
                        lHomeTextMsg.innerHTML = lHtml;
                        lHomeTextMsg.style.display = "block";
                        lHomeTextMsg.style.color = "#339933";
                        location.reload();
                    }
                }
                lXmlhttp.open("POST", "/php/req/edition.php", true);
                lXmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                lXmlhttp.send(
					"req="+"SAVE_HOMETEXT"+
					"&text="+lText
                    );         
            }
            //===============================================
        };
    }
    //===============================================
    return {
        Instance: function() {
            if (!m_instance) {
                m_instance = Container();
            }
            return m_instance;
        }   
    };
    //===============================================
})();
//===============================================
GEdition.Instance().init();
//===============================================
