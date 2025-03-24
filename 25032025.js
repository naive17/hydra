// initialize webcam as external source 's0'
// default
s0.initCam()
src(s0)
  	.invert()
  	.rotate(4, 0.4)
	.modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5)
  	.modulateScale(osc(4,-0.5,0).kaleid(50).scale(0.5),15,0)
	
	

	.layer(
  		noise(1,0.1).diff(s0,0.1).modulate(o0, 0.05).modulate(noise(2),0.005).modulateScrollX(osc(3),1.5,0)
	    .colorama(0.1,0.1,0.1)
	)
		.out(o0)