Webcam.set({
    height:300,
    width:300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("#camera")

  function capture() {
    Webcam.snap(
        function (img) {
            document.getElementById("snapshot").innerHTML=`<img src=${img} id="captureimage">`
        }
    )
} 

console.log("ml5version= "+ml5.version)

var classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/17muU5KM6/model.json",modelloaded)

function modelloaded() {
    console.log("hello Shivani your model has loaded")
}

function identify() {
    img= document.getElementById("captureimage")
    classifier.classify(img,getresults)
}

function getresults(error,results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("objectresult").innerHTML=results[0].label
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3)*100+" %"
    }
}
