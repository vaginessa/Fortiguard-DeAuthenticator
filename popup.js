window.onload = function() {


    function logout() {
        window.RTCPeerConnection = window.RTCPeerConnection;
        var pc = new RTCPeerConnection({
                iceServers: []
            }),
            noop = function() {};
        pc.createDataChannel("");
        pc.createOffer(pc.setLocalDescription.bind(pc), noop);
        pc.onicecandidate = function(ice) {
            if (!ice || !ice.candidate || !ice.candidate.candidate) return;
            var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
            console.log('my IP: ', myIP);
            console.log(myIP.substring(myIP.length - 1, myIP.length));

            while (myIP.substring(myIP.length - 1, myIP.length) != '.')
                myIP = myIP.substring(0, myIP.length - 1);
            myIP = 'http://' + myIP + '1:1000/logout?09020d030c119265';
            console.log(myIP);
            chrome.tabs.create({
                url: myIP
            });

            pc.onicecandidate = noop;
        };
    }



    /*var xhr = new XMLHttpRequest();
    var file = "https://www.kirupa.com/blank.png";
    var randomNum = Math.round(Math.random() * 10000);

    xhr.open('HEAD', file + "?rand=" + randomNum, true);
    xhr.send();

    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 304) {
                logout();
            } else {
                alert("connection doesn't exist!");
            }
        }
    }*/

	logout();
}
