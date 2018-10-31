$(document).ready(function(){

	//GLOBAL: constants
	var IMG   = new Image();
	var sTMP  = '';
	var FIX   = 49;
	var COUNT = 37;
	var MODE  = 'http';
	if(window.location.href.indexOf('file')!=-1) {
		FIX  = 46;
		MODE = 'file';	
	}
	
/* **************** START **************** */

	//start: do random at init
	if($('#gallery_start_img').length) {
		//console.log("start");
		
		//start: get a random image number
		gRIN = function(amount) {
			var rnd = Math.floor(Math.random() * amount)+1;
			if(rnd<10) amount = '0'+rnd.toString();
			else amount = rnd.toString();
			//return amount; 
			return 11;			
		};
		$('#gallery_start_img').css('background-image', "url('img/img"+gRIN(COUNT)+".jpg')" ); //keine grafiken
		sTMP = $('#gallery_start_img').css('background-image');
		if(sTMP.length>=FIX) {
			IMG.src = sTMP.substr(sTMP.indexOf(MODE),sTMP.indexOf('.jpg')-1);
		} else {
			IMG.src = sTMP.substr(sTMP.indexOf(MODE),sTMP.indexOf('.jpg'));
		}
		IMG.onload = function() {
			$('#gallery_start_img').css({'width':IMG.width+'px', 'height':IMG.height+'px'});
			$('#cr_img').css({'width':(IMG.width-0)+'px', 'height':(IMG.height-0)+'px'});
		};
	}
	
/* **************** GALLERY **************** */
	
	//gallery: init & buttons
	if($('#gallery_img_titel').length) {
		//console.log("gallery");
		
		//gallery: constants
		var END    = '.jpg';
		var TITLES = new Array(
			//"Lebendiger Boden I | 2012 | Aquarell | 36 x 36 cm", //01 
			/*01*/ "Abgebaggert | 2015 | Tusche, Aquarell auf Plakat | 84x80cm",
			
			//"Lebendiger Boden II | 2012 | Aquarell | 36 x 36 cm", //02
			/*02*/ "Erosion | 2015 | Tusche auf Zeitschriftenpapier | 20x27cm",
			
			//"Lebendiger Boden III | 2012 | Aquarell | 36 x 36 cm", //03
			/*03*/ "Mutter Erde | 2015 | Tusche auf Zeitschriftenpapier | 20x27cm",
			
			//"Lebendiger Boden IV | 2012 | Aquarell | 36 x 36 cm ", //04
			/*04*/ "Einwegland II | 2015 | Tusche auf Zeitschriftenpapier | 20x27cm",
			
			//"Lebendiger Boden V | 2012 | Aquarell | 36 x 36 cm", //05
			/*05*/ "Stromland | 2015 | Tusche auf Zeitschriftenpapier | 20x27cm",
			
			//"o.T. | 2012 | Aquarell, Tusche | 39 x 39 cm", //06
			/*06*/ "Ödland | 2015 | Tusche auf Zeitschriftenpapier | 20x27cm",
			
			//"o.T. | 2012 | Aquarell | 38 x 38 cm", //07
			/*07*/ "Sagaland | 2015 | Tusche auf Zeitschriftenpapier | 20x27cm",
			
			//"Im Wandel I | 2012 | Aquarell | 40 x 40 cm", //08
			/*08*/ "Seltene Erden | 2015 <br>Aquarell, Tusche auf Papiertüte | 55x40cm",
			
			//"Im Wandel II | 2012 | Aquarell | 40 x 40 cm", //09
			/*09*/ "Bruchstein | 2015 <br>Aquarell, Tusche auf Packpapier | 59,5x42cm",
			
			//"o.T | 2013 | Aquarell, Bleistift | 48,5 x 63 cm", //10
			/*10*/ "Alles essbar | 2015 <br>Buntstift auf Papiertüte | 100x100cm",
			
			//"o.T. | 2013 | Aquarell, Bleistift | 47,5 x 62,5 cm", //11
			/*11*/ "Mango in Schaumhülse pink | 2016 | Buntstift auf Karton | 23x28cm",
			
			//"o.T. | 2013 | Tusche | 46 x 66 cm", //12
			/*12*/ "Biozitrone | 2014 | Buntstift auf Papier | 20x20cm",
			
			//"Noch unberührt | 2013 | Tusche Papier | 70 x 100 cm", //13
			/*13*/ "eingeschweißt | 2015 | Buntstift auf Karton | 33x45cm",
			
			//"Permafrost | 2012 | Aquarell | 60 x 85 cm", //14
			/*14*/ "Fundstück | 2016 | Buntstift auf Karteikarte | 10,4x14,8cm",
			
			//"Land im Werden I | 2013 | Aquarell, Lavapigment | 70 x 100 cm", //15
			/*15*/ "Fundstück Keramiksicherung | 2016 | Buntstift auf Karteikarte | 10,4x14,8cm",
			
			//"Poesie einer Landschaft I, 2012, Aquarell, Bleistift | 50 x 65 cm", //16
			/*16*/ "Fundstück Knochen | 2016 | Buntstift auf Karteikarte | 10,4x14,8cm",
			
			//"Poesie einer Landschaft II, 2012, Aquarell, Bleistift | 50 x 65 cm", //17
			/*17*/ "Fundstück Ovula castellata | 2016 | Buntstift auf Karteikarte | 10,4x14,8cm",
			
			//"o.T. | 2013 | Pastellkreide | 50 x 70 cm", //18
			/*18*/ "Fundstück Schaumhülse | 2016 | Buntstift auf Karteikarte | 10,4x14,8cm",
			
			//"o.T. | 2013 | Pastellkreide | 50 x 70 cm", //19
			/*19*/ "Geheimnisvoller Boden II | 2014 <br> Aquarell, Tusche, Fineliner auf Papier | 19,5x19,5cm",
			
			//"o.T. | 2013 | Pastellkreide | 50 x 70 cm", //20
			/*20*/ "Lava | 2014 | Aquarell auf Papier | 29,5x29,5cm",
			
			//"o.T. | 2013 | Pastellkreide | 50 x 70 cm" //21
			/*21*/ "Geheimnisvoller Boden V | 2014 <br> Aquarell, Tusche auf Papier | 19,5x9,5cm",
			
			/*22*/ "Lebendiges Wasser | 2013 <br> Aquarell, Tusche auf Papier | 37,5x37,5cm",
			
			/*23*/ "Hochland | 2014 | Aquarell auf Papier | 33x45cm",
			
			/*24*/ "Noch unberührt II | 2013 | Tusche auf Papier | 66x96cm",
			
			/*25*/ "o.T. | 2013 | Tusche auf Papier | 37,5x37,5cm",
			
			/*26*/ "Grönland I | 2013 | Aquarell auf Papier | 37,5x75cm",
			
			/*27*/ "vernutzt | 2013 | Aquarell, Tusche auf Papier | 47,5x62,5cm",
			
			/*28*/ "Süßwasserreservoir | 2012 | Aquarell, Bleistift | 48,5x63cm",
			
			/*29*/ "Bodenkontakt | 2013 | Aquarell, Bleistift | 47,5x62,5cm",
			
			/*30*/ "Permafrost | 2012 | Aquarell | 60x85cm",
			
			/*31*/ "Land im Werden I | 2013 | Aquarell, Lavapigment | 70x100cm",
			
			/*32*/ "Hochland I | 2012 | Aquarell auf Papier | 54x74cm",
			
			/*33*/ "Poesie einer Landschaft I | 2012 | Aquarell, Bleistift | 50x65cm",
			
			/*34*/ "Lebendiger Boden I | 2012 | Aquarell | 36x36cm",
			
			/*35*/ "Lebendiger Boden III | 2012 | Aquarell | 36x36cm",
			
			/*36*/ "Lebendiger Boden V | 2012 | Aquarell | 36x36cm",
			
			/*37*/ "o.T. | 2012 | Aquarell, Tusche | 39x39cm"
						
		);
		
		//gallery: get title id
		getTitleId = function($id) { 
			if($id<1) $id = COUNT;
			else if($id>COUNT) $id = 0;
			return $id-1;  
		},
		//gallery: get image id
		getImgId = function($s) { 
			var index = $s.lastIndexOf(END),
			char1 = $s.charAt(index-2),
			char2 = $s.charAt(index-1),
			number = $s.charAt(index-2)!='0' ? parseInt(char1+char2) : parseInt(char2);
			return number;  
		},
		//gallery: change next/previous image
		replaceImgId = function($path, number) { 
			var split = $path.split(END),
			newUrl = split[0].substring(0,split[0].length-2),
			id = '';
			if(number<1) id = COUNT.toString();
			else if(number>COUNT) id = '01';
			else {
				if(number<10) id = '0'+number.toString();
				else id = number.toString();
			}
			return newUrl+id+END+split[1];  
		};
		
		//gallery: do init
		$('#js_not_active').css('display', 'none' );
		$('#gallery_img').css('background-image', "url('img/img01.jpg')" );
		sTMP = $('#gallery_img').css('background-image');
		if(sTMP.length==FIX) {
			IMG.src = sTMP.substr(sTMP.indexOf(MODE),sTMP.indexOf('.jpg')-1);
		} else {
			IMG.src = sTMP.substr(sTMP.indexOf(MODE),sTMP.indexOf('.jpg'));
		}
		IMG.onload = function() {
			$('#gallery_img').css({'width':IMG.width+'px', 'height':IMG.height+'px'});
			$('#cr_img').css({'width':(IMG.width-0)+'px', 'height':(IMG.height-0)+'px'});
			var cNUM = getTitleId(getImgId($('#gallery_img').css('background-image')));
			$('#gallery_img_titel').html( ((cNUM+1).toString()+'|'+COUNT.toString()).bold()+' &#160; '+TITLES[cNUM] );
		};
		var sNUM = getTitleId(getImgId($('#gallery_img').css('background-image')));
		$('#gallery_img_titel').html( ((sNUM+1).toString()+'|'+COUNT.toString()).bold()+' &#160; '+TITLES[sNUM] );
		
		//gallery: handle button
		$( "#gallery_button_back" ).on( "click", function( event ) {
			$( "#gallery_img" ).fadeTo('fast', 0.0, function() {
				$('#gallery_img').css('background-image', replaceImgId($('#gallery_img').css('background-image'), getImgId($('#gallery_img').css('background-image'))-1) );
				sTMP = $('#gallery_img').css('background-image');
				IMG.src = sTMP.substr(sTMP.indexOf(MODE),sTMP.indexOf('.jpg')-1);
				IMG.onload = function() {
					$('#gallery_img').css({'width':IMG.width+'px', 'height':IMG.height+'px'});
					$('#cr_img').css({'width':(IMG.width-0)+'px', 'height':(IMG.height-0)+'px'});
					var cNUM = getTitleId(getImgId($('#gallery_img').css('background-image')));
					$('#gallery_img_titel').html( ((cNUM+1).toString()+'|'+COUNT.toString()).bold()+' &#160; '+TITLES[cNUM] );
					$( "#gallery_img" ).fadeTo('slow', 1.0, function() {
						//adjustELs();
					});
				};
			}); 
		}); 
		$( "#gallery_button_next" ).on( "click", function( event ) {
			$( "#gallery_img" ).fadeTo('fast', 0.0, function() {
				$('#gallery_img').css('background-image', replaceImgId($('#gallery_img').css('background-image'), getImgId($('#gallery_img').css('background-image'))+1) );
				sTMP = $('#gallery_img').css('background-image');
				IMG.src = sTMP.substr(sTMP.indexOf(MODE),sTMP.indexOf('.jpg')-1);
				IMG.onload = function() {
					$('#gallery_img').css({'width':IMG.width+'px', 'height':IMG.height+'px'});
					$('#cr_img').css({'width':(IMG.width-0)+'px', 'height':(IMG.height-0)+'px'});
					var cNUM = getTitleId(getImgId($('#gallery_img').css('background-image')));
					$('#gallery_img_titel').html( ((cNUM+1).toString()+'|'+COUNT.toString()).bold()+' &#160; '+TITLES[cNUM] );
					$( "#gallery_img" ).fadeTo('slow', 1.0, function() {
						//adjustELs();
					});
				};
			}); 
		});
	};
				
//		$( "#gallery_img" ).mousedown(function(e) {
//		    if (e.which === 3) {
//		        alert('&#64; Marita Czepa 2013');
//		    }
//		});
	
});