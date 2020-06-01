blobs = [];
maxBlobs = 50;
radiusMax = 30;
radiusMin = 10;
w = document.getElementById('blob_wrap').offsetWidth;
h = document.getElementById('blob_wrap').offsetHeight ;
window.onresize = function(){
  w = document.getElementById('blob_wrap').offsetWidth;
  h = document.getElementById('blob_wrap').offsetHeight ;
}

for(var i=0; i<maxBlobs; i++){
  blobs.push({
    x: Math.random()*((w-radiusMax)-(radiusMax))+radiusMax,
    y: Math.random()*((h-radiusMax)-(radiusMax))+radiusMax,
    xv: Math.random()*2-1,
    yv: Math.random()*2-1,
    r: Math.random()*(radiusMax-radiusMin)+radiusMin
  });
  var newBlob = document.createElement('div');
  newBlob.setAttribute('class', 'blob');
  newBlob.style.height = (blobs[i].r*2)+"px";
  newBlob.style.width = (blobs[i].r*2)+"px";
  document.getElementById("blob_wrap").appendChild(newBlob);
}

blobClasses = document.getElementsByClassName("blob");
function animate(){
  for(var i=0; i<blobs.length; i++){
    if (blobs[i].x < 0 + blobs[i].r || blobs[i].x + blobs[i].r > w)
      blobs[i].xv = -blobs[i].xv;
    if (blobs[i].y - blobs[i].r < 0 || blobs[i].y + blobs[i].r > h)
      blobs[i].yv = -blobs[i].yv;
    blobs[i].x += blobs[i].xv;
    blobs[i].y += blobs[i].yv;
    blobClasses[i].style.left = blobs[i].x+"px";
    blobClasses[i].style.top = blobs[i].y+"px";
  }
}
setInterval(animate, 17);
