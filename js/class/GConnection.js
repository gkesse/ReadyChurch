//===============================================
var GConnection = (function() {
    //===============================================
    var m_instance;
    //===============================================
    var Container = function() {
        return {
            //===============================================
            init: function(obj) {

            },
            //===============================================
            openConnection: function(obj) {
				var lModalConnection = document.getElementById("ModalConnection");
				var lEmail = document.getElementsByName("Email")[0];
				lModalConnection.style.display = "block";	
                lEmail.focus();
            },
            //===============================================
            connect: function(obj) {
				var lEmail = document.getElementsByName("Email")[0];
				var lPassword = document.getElementsByName("Password")[0];
				var lConnectionMsg = document.getElementById("ConnectionMsg");
                var lRegExp = /\S+@\S+\.\S+/;
                var lMessage = "";

                if(!lEmail.value.length) {
                    lMessage = "Email est obligatoire";
                }
                else if(!lRegExp.test(lEmail.value)) {
                    lMessage = "Email est incorrect";
                }
                else if(!lPassword.value.length) {
                    lMessage = "Mot de passe est obligatoire";
                }
                
                if(lMessage.length) {
                    var lHtml = "<i class='fa fa-exclamation-triangle'></i> "; 
                    lHtml += lMessage; 
                    lConnectionMsg.innerHTML = lHtml;
                    lConnectionMsg.style.display = "block";
                    lConnectionMsg.style.color = "#ff9933";
                }
                else {
                    this.sendConnection(lEmail.value, lPassword.value);
                }
            },
            //===============================================
            closeConnection: function(obj) {
				var lModalConnection = document.getElementById("ModalConnection");
				var lConnectionMsg = document.getElementById("ConnectionMsg");
                lConnectionMsg.style.display = "none";
				lModalConnection.style.display = "none";	
            },
            //===============================================
            keyConnection: function(obj, e) {
                if(e.keyCode == 13) {
                    connect(obj);
                }
            },
            //===============================================
            openDisconnection: function(obj) {
				var lModalDisconnection = document.getElementById("ModalDisconnection");
				lModalDisconnection.style.display = "block";	
            },
            //===============================================
            disconnect: function(obj) {
				var lDisconnectionMsg = document.getElementById("DisconnectionMsg");
                var lXmlhttp = new XMLHttpRequest();
                lXmlhttp.onreadystatechange = function() {
                    if(this.readyState == 4 && this.status == 200) {
                        var lData = this.responseText;
                        var lHtml = "<i class='fa fa-power-off'></i> "; 
                        lHtml += lData; 
                        lDisconnectionMsg.innerHTML = lHtml;
                        lDisconnectionMsg.style.color = "#339933";
                        lDisconnectionMsg.style.display = "block";
                        location.reload();
                    }
                }
                lXmlhttp.open("POST", "/php/connection.php", true);
                lXmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                lXmlhttp.send(
					"req="+"DISCONNECT"
                    );            
            },
            //===============================================
            closeDisconnection: function(obj) {
				var lModalDisconnection = document.getElementById("ModalDisconnection");
				var lDisconnectionMsg = document.getElementById("DisconnectionMsg");
                lDisconnectionMsg.style.display = "none";
				lModalDisconnection.style.display = "none";	
            },
            //===============================================
            sendConnection: function(email, pass) {
				var lConnectionMsg = document.getElementById("ConnectionMsg");
				var lConnectionForm = document.getElementById("ConnectionForm");
                lConnectionMsg.style.display = "none";
                var lXmlhttp = new XMLHttpRequest();
                lXmlhttp.onreadystatechange = function() {
                    if(this.readyState == 4 && this.status == 200) {
                        var lData = this.responseText;
                        var lDataMap = JSON.parse(lData);
                        if(!lDataMap["status"]) {
                            var lHtml = "<i class='fa fa-exclamation-triangle'></i> "; 
                            lHtml += lDataMap["msg"]; 
                            lConnectionMsg.innerHTML = lHtml;
                            lConnectionMsg.style.color = "#ff9933";
                            lConnectionMsg.style.display = "block";
                        }
                        else {
                            var lHtml = "<i class='fa fa-check-circle'></i> "; 
                            lHtml += lDataMap["msg"]; 
                            lConnectionMsg.innerHTML = lHtml;
                            lConnectionMsg.style.display = "block";
                            lConnectionMsg.style.color = "#339933";
                            lConnectionForm.submit();
                        }
                    }
                }
                lXmlhttp.open("POST", "/php/connection.php", true);
                lXmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                lXmlhttp.send(
					"req="+"CONNECT"+
					"&email="+email+
					"&password="+pass
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
GConnection.Instance().init();
//===============================================
