function getImmersiveReaderTokenAsync() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "https://canaxess-immersive-reader.herokuapp.com/GetToken",
            type: "GET",
            success: function (token) {
                resolve(token);
            },
            error: function (err) {
                console.log("Error in getting token!", err);
                reject(err);
            }
        });
    });
}

function getSubdomainAsync() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "https://canaxess-immersive-reader.herokuapp.com/GetSubDomain",
            type: "GET",
            success: function (subdomain) { resolve(subdomain); },
            error: function (err) { reject(err); }
        });
    });
}

function launchImmersiveReader(data, options) {
    getImmersiveReaderTokenAsync().then(function (token) {
        getSubdomainAsync().then(function (subdomain) {
            ImmersiveReader.launchAsync(token, subdomain, data, options).catch(function (error) {
                console.log("there was an error", error);
            });
        });
    });
}

function handleLaunchImmersiveReader() {
    const data = {
        title: "Immersive Reader",
        chunks: [{
            content: $("#content").text(),
            mimeType: "text/html",
            lang: "en"
        }]
    };

    launchImmersiveReader(data);
}