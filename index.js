var _0x4ffdd1=_0x3b4e;(function(_0x563d0d,_0x4ca5b0){var _0x3010b7=_0x3b4e,_0x4f3ab9=_0x563d0d();while(!![]){try{var _0x3ace7d=parseInt(_0x3010b7(0x1dc))/0x1*(-parseInt(_0x3010b7(0x1d4))/0x2)+parseInt(_0x3010b7(0x1f0))/0x3*(parseInt(_0x3010b7(0x1cd))/0x4)+-parseInt(_0x3010b7(0x1d8))/0x5*(parseInt(_0x3010b7(0x1c0))/0x6)+parseInt(_0x3010b7(0x1e1))/0x7*(parseInt(_0x3010b7(0x1d0))/0x8)+-parseInt(_0x3010b7(0x1cc))/0x9+-parseInt(_0x3010b7(0x1be))/0xa*(-parseInt(_0x3010b7(0x1de))/0xb)+-parseInt(_0x3010b7(0x1e3))/0xc*(parseInt(_0x3010b7(0x1ef))/0xd);if(_0x3ace7d===_0x4ca5b0)break;else _0x4f3ab9['push'](_0x4f3ab9['shift']());}catch(_0xaa3235){_0x4f3ab9['push'](_0x4f3ab9['shift']());}}}(_0xbdea,0xed5c1));var wwd=new WorldWind[(_0x4ffdd1(0x1c1))](_0x4ffdd1(0x1e9));wwd[_0x4ffdd1(0x1ed)](new WorldWind[(_0x4ffdd1(0x1f3))]()),wwd[_0x4ffdd1(0x1ed)](new WorldWind[(_0x4ffdd1(0x1eb))]()),wwd[_0x4ffdd1(0x1ed)](new WorldWind['CompassLayer']()),wwd['addLayer'](new WorldWind['CoordinatesDisplayLayer'](wwd)),wwd[_0x4ffdd1(0x1ed)](new WorldWind[(_0x4ffdd1(0x1c7))](wwd));var placemarkLayer=new WorldWind[(_0x4ffdd1(0x1b7))]();wwd['addLayer'](placemarkLayer);var placemarkAttributes=new WorldWind[(_0x4ffdd1(0x1e5))](null);placemarkAttributes['imageOffset']=new WorldWind[(_0x4ffdd1(0x1dd))](WorldWind[_0x4ffdd1(0x1e6)],0.3,WorldWind['OFFSET_FRACTION'],0x0),placemarkAttributes[_0x4ffdd1(0x1c9)][_0x4ffdd1(0x1d3)]=new WorldWind[(_0x4ffdd1(0x1dd))](WorldWind['OFFSET_FRACTION'],0.5,WorldWind[_0x4ffdd1(0x1e6)],0x1);var position=new WorldWind['Position'](0x0,0x0,0x64),placemark=new WorldWind['Placemark'](position,![],placemarkAttributes);function _0xbdea(){var _0x261910=['1542508tyBqMG','highlightAttributes','Position','315pcvfXp','ColladaLoader','1641936TCmAOv','scale','PlacemarkAttributes','OFFSET_FRACTION','MOD_LSTD_CLIM_M','getJSON','canvasOne','StarFieldLayer','BMNGLandsatLayer','addRenderable','addLayer','setInterval','39OEyLbf','4581411EnjdeL','ShapeAttributes','WmsCapabilities','BMNGOneImageLayer','SurfaceEllipse','Estoy\x20fuera\x20del\x20loop','https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0','get','ModelLayer','RenderableLayer','done','position','label','WmsLayer','_xRotation','AtmosphereLayer','130RRtWFY','center','134604RyIICw','WorldWindow','time','BLUE','redraw','Lon\x20','There\x20was\x20a\x20failure\x20retrieving\x20the\x20capabilities\x20document:\x20','ViewControlsLayer','fail','labelAttributes','now','init','2377359wIVynd','4UkJFYS','latitude','load','148016Lmobzl','getNamedLayer','./3DModel/','offset','6QbyyjW','interiorColor','formLayerConfiguration','Lat\x20','215ixUsMo','Location','Color','0.00','523723mivBah','Offset'];_0xbdea=function(){return _0x261910;};return _0xbdea();}placemark['alwaysOnTop']=![],placemarkLayer['addRenderable'](placemark);var starFieldLayer=new WorldWind[(_0x4ffdd1(0x1ea))](),atmosphereLayer=new WorldWind[(_0x4ffdd1(0x1bd))]();wwd['addLayer'](starFieldLayer),wwd[_0x4ffdd1(0x1ed)](atmosphereLayer);var now=new Date();starFieldLayer[_0x4ffdd1(0x1c2)]=now,atmosphereLayer[_0x4ffdd1(0x1c2)]=now;var simulatedMillisPerDay=0x7a1200,startTimeMillis=Date['now']();function runSimulation(){var _0x10bd6d=_0x4ffdd1,_0x345257=Date[_0x10bd6d(0x1ca)]()-startTimeMillis,_0x89fff8=_0x345257/simulatedMillisPerDay,_0x28c887=0x18*0xe10*0x3e8,_0xf1d3d4=_0x89fff8*_0x28c887,_0x470bd8=new Date(startTimeMillis+_0xf1d3d4);starFieldLayer[_0x10bd6d(0x1c2)]=_0x470bd8,atmosphereLayer[_0x10bd6d(0x1c2)]=_0x470bd8,wwd['redraw'](),requestAnimationFrame(runSimulation);}requestAnimationFrame(runSimulation);var lat=_0x4ffdd1(0x1db),long=_0x4ffdd1(0x1db),modelLayer=new WorldWind[(_0x4ffdd1(0x1b7))]();wwd['addLayer'](modelLayer);var shapesLayer=new WorldWind['RenderableLayer']();wwd[_0x4ffdd1(0x1ed)](shapesLayer);var attributes=new WorldWind[(_0x4ffdd1(0x1f1))](null);function _0x3b4e(_0x1e46a4,_0x28bdd1){var _0xbdea0f=_0xbdea();return _0x3b4e=function(_0x3b4e6d,_0x2953e0){_0x3b4e6d=_0x3b4e6d-0x1b2;var _0x5e6e2e=_0xbdea0f[_0x3b4e6d];return _0x5e6e2e;},_0x3b4e(_0x1e46a4,_0x28bdd1);}attributes['outlineColor']=WorldWind['Color'][_0x4ffdd1(0x1c3)],attributes[_0x4ffdd1(0x1d5)]=new WorldWind[(_0x4ffdd1(0x1da))](0x0,0x1,0x1,0.5);var highlightAttributes=new WorldWind[(_0x4ffdd1(0x1f1))](attributes);highlightAttributes[_0x4ffdd1(0x1d5)]=new WorldWind[(_0x4ffdd1(0x1da))](0x1,0x1,0x1,0x1);var ellipse=new WorldWind[(_0x4ffdd1(0x1b2))](new WorldWind[(_0x4ffdd1(0x1d9))](lat,long),0x493e0,0x30d40,0x2d,attributes);ellipse[_0x4ffdd1(0x1df)]=highlightAttributes,shapesLayer['addRenderable'](ellipse);var issLayer=new WorldWind[(_0x4ffdd1(0x1b7))](_0x4ffdd1(0x1b6));wwd[_0x4ffdd1(0x1ed)](issLayer);var position=new WorldWind[(_0x4ffdd1(0x1e0))](0x0,0x0,-0xc3500),issCollada=new WorldWind[(_0x4ffdd1(0x1e2))](position);issCollada[_0x4ffdd1(0x1cb)]({'dirPath':_0x4ffdd1(0x1d2)}),wwd[_0x4ffdd1(0x1c4)]();function animateIss(_0x4d952c){var _0x42bdba=_0x4ffdd1;_0x4d952c[_0x42bdba(0x1e4)]=0x109a0,_0x4d952c[_0x42bdba(0x1bc)]=0x5a,issLayer[_0x42bdba(0x1ec)](_0x4d952c);var _0x2054ed=0xc3500;window[_0x42bdba(0x1ee)](function(){var _0x19d3f7=_0x42bdba;wwd[_0x19d3f7(0x1c4)](),_0x4d952c[_0x19d3f7(0x1b9)]=new WorldWind[(_0x19d3f7(0x1e0))](lat,long,_0x2054ed);},0x3e8);}window['setInterval'](function(){var _0x30ff93=_0x4ffdd1,_0x1667c1=$[_0x30ff93(0x1e8)]('https://api.wheretheiss.at/v1/satellites/25544',function(_0x1140c7){var _0x54b0b2=_0x30ff93;console['log'](_0x1140c7),lat=_0x1140c7[_0x54b0b2(0x1ce)],long=_0x1140c7['longitude'],position=new WorldWind[(_0x54b0b2(0x1e0))](lat,long,0x64),placemark[_0x54b0b2(0x1b9)]=position,placemark[_0x54b0b2(0x1ba)]='\x0a'+_0x54b0b2(0x1d7)+lat+'\x0a'+_0x54b0b2(0x1c5)+long,issCollada[_0x54b0b2(0x1cf)]('iss.dae',animateIss),ellipse[_0x54b0b2(0x1bf)]=new WorldWind['Location'](lat,long);var _0x25efea=_0x54b0b2(0x1b4),_0x1a067d=_0x54b0b2(0x1e7),_0x579eda=function(_0x4caddb){var _0x3b2aa2=_0x54b0b2,_0x159aa0=new WorldWind[(_0x3b2aa2(0x1f2))](_0x4caddb),_0x54ff0e=_0x159aa0[_0x3b2aa2(0x1d1)](_0x1a067d),_0x24d5bc=WorldWind[_0x3b2aa2(0x1bb)][_0x3b2aa2(0x1d6)](_0x54ff0e),_0x61543f=new WorldWind['WmsLayer'](_0x24d5bc);wwd[_0x3b2aa2(0x1ed)](_0x61543f);},_0x3aabc7=function(_0x1d5030,_0x5531c4,_0x1075e6){var _0x38cd7d=_0x54b0b2;console['log'](_0x38cd7d(0x1c6)+_0x5531c4+'\x20exception:\x20'+_0x1075e6);};$[_0x54b0b2(0x1b5)](_0x25efea)[_0x54b0b2(0x1b8)](_0x579eda)[_0x54b0b2(0x1c8)](_0x3aabc7);});},0x3e8),console['log'](_0x4ffdd1(0x1b3));