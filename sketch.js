var vid;

function setup() {
createCanvas(100, 100);
  

  vid = createVideo(
    ['manimulaion.mp4', 'manimulaion.ogv', 'manimulaion'],
    vidLoad
  );

  vid.size(400, 400);
}

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}
