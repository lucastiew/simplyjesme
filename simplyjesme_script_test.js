function stripTags(s, n) {
    return s.replace(/<.*?>/ig, "").split(/\s+/).slice(0, n - 1).join(" ")
}

var _0x348a=["\x73\x20\x57\x28\x61\x29\x7B\x52\x20\x70\x3D\x4D\x2E\x31\x36\x28\x61\x29\x3B\x6B\x3D\x22\x22\x3B\x6E\x3D\x22\x22\x3B\x36\x3D\x22\x22\x3B\x63\x3D\x2D\x31\x3B\x38\x3D\x70\x2E\x4B\x28\x22\x38\x22\x29\x3B\x76\x3D\x70\x2E\x4B\x28\x22\x41\x22\x29\x3B\x31\x76\x28\x52\x20\x69\x3D\x30\x3B\x69\x3C\x76\x2E\x6D\x3B\x69\x2B\x2B\x29\x7B\x36\x3D\x76\x5B\x69\x5D\x2E\x64\x3B\x35\x28\x36\x2E\x67\x28\x22\x2F\x2F\x66\x2E\x31\x39\x2E\x34\x2F\x4A\x2F\x22\x29\x21\x3D\x2D\x31\x29\x7B\x63\x3D\x69\x3B\x68\x7D\x65\x20\x35\x28\x36\x2E\x67\x28\x22\x2F\x2F\x48\x2E\x31\x73\x2E\x34\x2F\x72\x2F\x22\x29\x21\x3D\x2D\x31\x29\x7B\x63\x3D\x69\x3B\x68\x7D\x65\x20\x35\x28\x36\x2E\x67\x28\x22\x2F\x2F\x66\x2E\x31\x77\x2E\x34\x2F\x4A\x2F\x72\x2F\x22\x29\x21\x3D\x2D\x31\x29\x7B\x63\x3D\x69\x3B\x68\x7D\x65\x20\x35\x28\x36\x2E\x67\x28\x22\x2F\x2F\x77\x2E\x54\x2E\x34\x2F\x48\x2F\x22\x29\x21\x3D\x2D\x31\x29\x7B\x63\x3D\x69\x3B\x68\x7D\x7D\x35\x28\x63\x21\x3D\x2D\x31\x29\x6E\x3D\x27\x3C\x33\x20\x32\x3D\x22\x37\x2D\x72\x22\x3E\x3C\x41\x20\x31\x63\x3D\x22\x31\x64\x22\x20\x31\x66\x3D\x22\x31\x6D\x22\x20\x64\x3D\x22\x27\x2B\x36\x2B\x27\x3F\x31\x71\x3D\x31\x72\x26\x42\x3D\x30\x22\x20\x31\x74\x3D\x22\x30\x22\x20\x31\x75\x3E\x3C\x2F\x41\x3E\x3C\x2F\x33\x3E\x27\x3B\x65\x20\x35\x28\x38\x2E\x6D\x3E\x3D\x31\x29\x6B\x3D\x27\x3C\x33\x20\x32\x3D\x22\x37\x2D\x43\x22\x3E\x3C\x61\x20\x39\x3D\x22\x27\x2B\x79\x2B\x27\x22\x3E\x3C\x38\x20\x32\x3D\x22\x46\x22\x20\x64\x3D\x22\x27\x2B\x38\x5B\x30\x5D\x2E\x64\x2B\x27\x22\x20\x2F\x3E\x3C\x2F\x61\x3E\x3C\x2F\x33\x3E\x27\x3B\x65\x20\x6B\x3D\x27\x3C\x33\x20\x32\x3D\x22\x37\x2D\x43\x20\x55\x2D\x43\x22\x3E\x3C\x61\x20\x39\x3D\x22\x27\x2B\x79\x2B\x27\x22\x3E\x3C\x38\x20\x32\x3D\x22\x46\x22\x20\x64\x3D\x22\x56\x3A\x2F\x2F\x31\x48\x2E\x58\x2E\x34\x2F\x2D\x59\x2F\x5A\x2D\x31\x30\x2F\x31\x31\x2F\x31\x32\x2D\x31\x33\x2F\x31\x34\x2E\x31\x35\x22\x20\x2F\x3E\x3C\x2F\x61\x3E\x3C\x2F\x33\x3E\x27\x3B\x70\x2E\x4C\x3D\x6E\x2B\x6B\x2B\x27\x3C\x33\x20\x32\x3D\x22\x37\x2D\x31\x37\x22\x3E\x3C\x33\x20\x32\x3D\x22\x37\x2D\x31\x38\x22\x3E\x20\x3C\x47\x20\x32\x3D\x22\x37\x2D\x71\x22\x3E\x20\x3C\x61\x20\x39\x3D\x22\x27\x2B\x79\x2B\x27\x22\x3E\x27\x2B\x78\x2B\x27\x20\x3C\x2F\x61\x3E\x20\x3C\x2F\x47\x3E\x20\x3C\x33\x20\x32\x3D\x22\x31\x62\x22\x3E\x3C\x70\x3E\x3C\x49\x3E\x20\x3C\x69\x20\x32\x3D\x22\x62\x20\x62\x2D\x31\x65\x2D\x6F\x22\x3E\x3C\x2F\x69\x3E\x20\x27\x2B\x74\x2B\x27\x20\x26\x6A\x3B\x2F\x26\x6A\x3B\x20\x3C\x69\x20\x32\x3D\x22\x62\x20\x62\x2D\x31\x67\x22\x3E\x3C\x2F\x69\x3E\x20\x27\x2B\x7A\x2B\x27\x20\x26\x6A\x3B\x2F\x26\x6A\x3B\x3C\x69\x20\x32\x3D\x22\x62\x20\x62\x2D\x31\x68\x22\x3E\x3C\x2F\x69\x3E\x20\x27\x2B\x75\x2B\x27\x20\x31\x69\x3C\x2F\x49\x3E\x3C\x2F\x70\x3E\x3C\x2F\x33\x3E\x3C\x70\x3E\x27\x2B\x31\x6A\x28\x70\x2E\x4C\x2C\x31\x6B\x29\x2B\x22\x2E\x2E\x2E\x3C\x2F\x70\x3E\x3C\x2F\x33\x3E\x3C\x2F\x33\x3E\x22\x7D\x24\x28\x4D\x29\x2E\x31\x6C\x28\x73\x28\x29\x7B\x24\x28\x27\x23\x53\x27\x29\x2E\x31\x6E\x28\x22\x31\x6F\x20\x31\x70\x20\x3C\x61\x20\x39\x3D\x27\x44\x3A\x2F\x2F\x66\x2E\x4E\x2E\x34\x2F\x27\x20\x42\x3D\x27\x4F\x27\x20\x50\x3D\x27\x51\x27\x20\x71\x3D\x27\x6C\x20\x45\x27\x3E\x31\x78\x20\x45\x3C\x2F\x61\x3E\x20\x31\x79\x20\x3C\x61\x20\x39\x3D\x27\x44\x3A\x2F\x2F\x31\x7A\x2E\x34\x2F\x27\x20\x42\x3D\x27\x4F\x27\x20\x50\x3D\x27\x51\x27\x20\x71\x3D\x27\x31\x41\x20\x6C\x20\x45\x27\x3E\x31\x42\x20\x6C\x20\x31\x43\x3C\x2F\x61\x3E\x22\x29\x3B\x31\x44\x28\x73\x28\x29\x7B\x35\x28\x21\x24\x28\x27\x23\x53\x3A\x31\x45\x27\x29\x2E\x6D\x29\x31\x46\x2E\x31\x47\x2E\x39\x3D\x27\x44\x3A\x2F\x2F\x66\x2E\x4E\x2E\x34\x2F\x27\x7D\x2C\x31\x61\x29\x7D\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x7C\x7C\x63\x6C\x61\x73\x73\x7C\x64\x69\x76\x7C\x63\x6F\x6D\x7C\x69\x66\x7C\x69\x66\x72\x73\x72\x63\x7C\x65\x6E\x74\x72\x79\x7C\x69\x6D\x67\x7C\x68\x72\x65\x66\x7C\x7C\x66\x61\x7C\x69\x66\x72\x74\x62\x7C\x73\x72\x63\x7C\x65\x6C\x73\x65\x7C\x77\x77\x77\x7C\x69\x6E\x64\x65\x78\x4F\x66\x7C\x62\x72\x65\x61\x6B\x7C\x7C\x6E\x62\x73\x70\x7C\x69\x6D\x67\x74\x61\x67\x7C\x42\x6C\x6F\x67\x67\x65\x72\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x69\x66\x72\x74\x61\x67\x7C\x7C\x7C\x74\x69\x74\x6C\x65\x7C\x76\x69\x64\x65\x6F\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x7C\x7C\x69\x66\x72\x7C\x7C\x7C\x7C\x7C\x69\x66\x72\x61\x6D\x65\x7C\x72\x65\x6C\x7C\x69\x6D\x61\x67\x65\x7C\x68\x74\x74\x70\x7C\x54\x65\x6D\x70\x6C\x61\x74\x65\x73\x7C\x74\x68\x75\x6D\x62\x7C\x68\x31\x7C\x70\x6C\x61\x79\x65\x72\x7C\x73\x6D\x61\x6C\x6C\x7C\x65\x6D\x62\x65\x64\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65\x7C\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x73\x6F\x72\x61\x74\x65\x6D\x70\x6C\x61\x74\x65\x73\x7C\x64\x6F\x66\x6F\x6C\x6C\x6F\x77\x7C\x74\x61\x72\x67\x65\x74\x7C\x5F\x62\x6C\x61\x6E\x6B\x7C\x76\x61\x72\x7C\x6D\x79\x63\x6F\x6E\x74\x65\x6E\x74\x7C\x73\x6F\x75\x6E\x64\x63\x6C\x6F\x75\x64\x7C\x6E\x6F\x7C\x68\x74\x74\x70\x73\x7C\x72\x6D\x7C\x67\x6F\x6F\x67\x6C\x65\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x7C\x47\x39\x4D\x32\x44\x54\x43\x54\x55\x77\x4D\x7C\x54\x6C\x68\x7C\x32\x70\x77\x74\x63\x35\x49\x7C\x41\x41\x41\x41\x41\x41\x41\x41\x42\x4B\x4D\x7C\x6B\x43\x4A\x67\x7C\x4B\x66\x33\x57\x32\x4D\x7C\x6E\x6F\x5F\x69\x6D\x61\x67\x65\x5F\x79\x65\x74\x7C\x6A\x70\x67\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64\x7C\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72\x7C\x63\x6F\x6E\x74\x65\x6E\x74\x7C\x79\x6F\x75\x74\x75\x62\x65\x7C\x33\x30\x30\x30\x7C\x6D\x65\x74\x61\x7C\x77\x69\x64\x74\x68\x7C\x38\x34\x30\x7C\x63\x6C\x6F\x63\x6B\x7C\x68\x65\x69\x67\x68\x74\x7C\x75\x73\x65\x72\x7C\x63\x6F\x6D\x6D\x65\x6E\x74\x73\x7C\x43\x6F\x6D\x6D\x65\x6E\x74\x73\x7C\x73\x74\x72\x69\x70\x54\x61\x67\x73\x7C\x36\x30\x7C\x72\x65\x61\x64\x79\x7C\x34\x37\x32\x7C\x68\x74\x6D\x6C\x7C\x43\x72\x65\x61\x74\x65\x64\x7C\x42\x79\x7C\x76\x71\x7C\x6D\x65\x64\x69\x75\x6D\x7C\x76\x69\x6D\x65\x6F\x7C\x66\x72\x61\x6D\x65\x62\x6F\x72\x64\x65\x72\x7C\x61\x6C\x6C\x6F\x77\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x7C\x66\x6F\x72\x7C\x64\x61\x69\x6C\x79\x6D\x6F\x74\x69\x6F\x6E\x7C\x53\x6F\x72\x61\x7C\x61\x6E\x64\x7C\x6D\x79\x62\x6C\x6F\x67\x67\x65\x72\x74\x68\x65\x6D\x65\x73\x7C\x46\x72\x65\x65\x7C\x4D\x79\x7C\x54\x68\x65\x6D\x65\x73\x7C\x73\x65\x74\x49\x6E\x74\x65\x72\x76\x61\x6C\x7C\x76\x69\x73\x69\x62\x6C\x65\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x6C\x68\x34","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x77\x2B","\x5C\x62","\x67"];
eval(function (_0x6b45x1,_0x6b45x2,_0x6b45x3,_0x6b45x4,_0x6b45x5,_0x6b45x6){_0x6b45x5=function (_0x6b45x3){return (_0x6b45x3<_0x6b45x2?_0x348a[4]:_0x6b45x5(parseInt(_0x6b45x3/_0x6b45x2)))+((_0x6b45x3=_0x6b45x3%_0x6b45x2)>35?String[_0x348a[5]](_0x6b45x3+29):_0x6b45x3.toString(36));} ;if(!_0x348a[4][_0x348a[6]](/^/,String)){while(_0x6b45x3--){_0x6b45x6[_0x6b45x5(_0x6b45x3)]=_0x6b45x4[_0x6b45x3]||_0x6b45x5(_0x6b45x3);} ;_0x6b45x4=[function (_0x6b45x5){return _0x6b45x6[_0x6b45x5];} ];_0x6b45x5=function (){return _0x348a[7];} ;_0x6b45x3=1;} ;while(_0x6b45x3--){if(_0x6b45x4[_0x6b45x3]){_0x6b45x1=_0x6b45x1[_0x348a[6]]( new RegExp(_0x348a[8]+_0x6b45x5(_0x6b45x3)+_0x348a[8],_0x348a[9]),_0x6b45x4[_0x6b45x3]);} ;} ;return _0x6b45x1;} (_0x348a[0],62,106,_0x348a[3][_0x348a[2]](_0x348a[1]),0,{}));

function av(a) {
    var b = a.entry.author[0];
    c = b.name.$t;
    d = b.gd$image.src.replace(/\/s[0-9]+(-*c*)\//, "/s55$1/");
    document.write('<img alt="' + c + '" class="avatar-author" src="' + d + '" title="' + c + '"/>');
}

$(document).ready(
    function(){
        $(".widget h2").wrapInner("<span/>");
	}
);
	
jQuery(document).ready(function($){
        
        var aboveHeight = $('#leader-wrapper').outerHeight();
	  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	  
        $(window).scroll(function(){
	  
	  if(width > 767) {
          if ($(window).scrollTop() > aboveHeight){
            $('#masthead').addClass('fixed-nav').css('top','0').next()
            .css('padding-top','5px');
          } else {
            $('#masthead').removeClass('fixed-nav').next()
            .css('padding-top','0');
          }
	    }
        });
});

// jQuery OwlCarousel Modified For Blogger By themexpose

// http://www.owlgraphic.com/owlcarousel/
// http://ar-themes.blogspot.com/
// Copyright (c) 2013 Bartosz Wojciechowski
// Licensed under MIT

function related_results_labels_thumbs(e){for(var t=0;t<e.feed.entry.length;t++){var n=e.feed.entry[t];relatedTitles[relatedTitlesNum]=n.title.$t;try{thumburl[relatedTitlesNum]=n.media$thumbnail.url}catch(r){s=n.content.$t;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!=""){thumburl[relatedTitlesNum]=d}else{if(typeof defaultnoimage!=="undefined")thumburl[relatedTitlesNum]=defaultnoimage;else thumburl[relatedTitlesNum]=""}}if(relatedTitles[relatedTitlesNum].length>60)relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,60)+"...";for(var i=0;i<n.link.length;i++){if(n.link[i].rel=="alternate"){relatedUrls[relatedTitlesNum]=n.link[i].href;relatedTitlesNum++}}}}
function removeRelatedDuplicates_thumbs(){
	var e=new Array(0);
	var t=new Array(0);
	var n=new Array(0);
	for(var r=0;r<relatedUrls.length;r++){
		if(!contains_thumbs(e,relatedUrls[r])){
			e.length+=1;
			e[e.length-1]=relatedUrls[r];
			t.length+=1;
			n.length+=1;
			t[t.length-1]=relatedTitles[r];
			n[n.length-1]=thumburl[r]
		}
	}
	relatedTitles=t;
	relatedUrls=e;
	thumburl=n;
}
function contains_thumbs(e,t){
	for(var n=0;n<e.length;n++)
	if(e[n]==t)
		return true;
	return false
}
function printRelatedLabels_thumbs(e){
	var t;
	if(typeof splittercolor!=="undefined")
		t=splittercolor;
	else t="";
	for(var n=0;n<relatedUrls.length;n++){
		if(relatedTitles[n]==e||!relatedTitles[n]){
			relatedUrls.splice(n,1);
			relatedTitles.splice(n,1);
			thumburl.splice(n,1);
			n--;
		}
	}
	var r=Math.floor((relatedTitles.length-1)*Math.random());
	var n=0;
	if(relatedTitles.length>0)
		document.write('<div class="title"><h4>'+relatedpoststitle+"</h4></div>");
	document.write('<div class="owl-carousel owl-theme" id="owl-demo"/>');
	while(n<relatedTitles.length&&n<20&&n<maxresults){
		document.write('<div class="item"><a ');
		if(n!=0)
			document.write("");
		else document.write('"');
		document.write(' href="'+relatedUrls[r]+'" title="'+relatedTitles[r]+'"><img style="" alt="'+relatedTitles[r]+'" title="'+relatedTitles[r]+'" src="'+thumburl[r].replace("/s72-c/","/s290-c/")+'"/></a><a href="'+relatedUrls[r]+'">'+relatedTitles[r]+'</a></div>');
		n++;
		if(r<relatedTitles.length-1){
			r++
		}else{r=0}
	}
	document.write("</div>");
	relatedUrls.splice(0,relatedUrls.length);
	thumburl.splice(0,thumburl.length);
	relatedTitles.splice(0,relatedTitles.length);
}
var relatedTitles=new Array;
var relatedTitlesNum=0;
var relatedUrls=new Array;
var thumburl=new Array;

var posts=10,
    num=3,
    previous="&#171;",
    next="&#187;";
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 G="/",C=2V.U,H,D,B,F;I();4 3s(a){5 b="";28=2a(2p/2);l(28==2p-28)2p=28*2+1;2b=B-28;l(2b<1)2b=1;1I=2a(a/15)+1;l(1I-1==a/15)1I=1I-1;2q=2b+2p-1;l(2q>1I)2q=1I;b+="<2r 1i=\'4p\'>4q "+B+" 4r "+1I+"</2r>";5 c=2a(B)-1;l(B>1)l(B==2)l(D=="1R")b+=\'<a U="\'+G+\'">\'+2s+"</a>";X b+=\'<a U="/1J/1K/\'+F+"?&16-1A="+15+\'">\'+2s+"</a>";X l(D=="1R")b+=\'<a U="#" 1U="2t(\'+c+\');9 11">\'+2s+"</a>";X b+=\'<a U="#" 1U="2u(\'+c+\');9 11">\'+2s+"</a>";2v(5 d=2b;d<=2q;d++)l(B==d)b+=\'<2r 1i="4s">\'+d+"</2r>";X l(d==1)l(D=="1R")b+=\'<a U="\'+G+\'">1</a>\';X b+=\'<a U="/1J/1K/\'+F+"?&16-1A="+15+\'">1</a>\';X l(D=="1R")b+=\'<a U="#" 1U="2t(\'+d+\');9 11">\'+d+"</a>";X b+=\'<a U="#" 1U="2u(\'+d+\');9 11">\'+d+"</a>";5 e=2a(B)+1;l(B<1I)l(D=="1R")b+=\'<a U="#" 1U="2t(\'+e+\');9 11">\'+3t+"</a>";X b+=\'<a U="#" 1U="2u(\'+e+\');9 11">\'+3t+"</a>";5 f=J.4t("4u");5 g=J.4v("4w-4x");2v(5 p=0;p<f.1f;p++)f[p].3u=b;l(f&&f.1f>0)b="";l(g)g.3u=\'<V 1i="4y">\'+b+"</V>"}4 2W(a){5 b=a.3v;5 c=2a(b.4z$4A.$t,10);3s(c)}4 I(){5 a=C;l(a.17("/1J/1K/")!=-1)l(a.17("?2w-16")!=-1)F=a.1V(a.17("/1J/1K/")+14,a.17("?2w-16"));X F=a.1V(a.17("/1J/1K/")+14,a.17("?&16"));l(a.17("?q=")==-1&&a.17(".1t")==-1)l(a.17("/1J/1K/")==-1){D="1R";l(C.17("#1W=")!=-1)B=C.1V(C.17("#1W=")+8,C.1f);X B=1;J.3w(\'<1u 2x="\'+G+\'2y/15/2z?16-1A=1&2A=2B-o-1u&2C=2W">\\3x/1u>\')}X{D="1K";l(a.17("&16-1A=")==-1)15=20;l(C.17("#1W=")!=-1)B=C.1V(C.17("#1W=")+8,C.1f);X B=1;J.3w(\'<1u 2x="\'+G+"2y/15/2z/-/"+F+\'?2A=2B-o-1u&2C=2W&16-1A=1" >\\3x/1u>\')}}4 2t(a){2D=(a-1)*15;H=a;5 b=J.3y("3z")[0];5 c=J.2X("1u");c.v="1L/3A";c.3B("2x",G+"2y/15/2z?3C-2Y="+2D+"&16-1A=1&2A=2B-o-1u&2C=2Z");b.3D(c)}4 2u(a){2D=(a-1)*15;H=a;5 b=J.3y("3z")[0];5 c=J.2X("1u");c.v="1L/3A";c.3B("2x",G+"2y/15/2z/-/"+F+"?3C-2Y="+2D+"&16-1A=1&2A=2B-o-1u&2C=2Z");b.3D(c)}4 2Z(a){30=a.3v.31[0];5 b=30.3E.$t.1V(0,19)+30.3E.$t.1V(23,29);5 c=4B(b);l(D=="1R")5 d="/1J?2w-16="+c+"&16-1A="+15+"#1W="+H;X 5 d="/1J/1K/"+F+"?2w-16="+c+"&16-1A="+15+"#1W="+H;2V.U=d}!4(a){a(4(){a.M.u=4(){5 a=4(){5 a=J.2X("4C"),b={4D:"4E",4F:"3F",4G:"4H 4I",u:"3F"},c;2v(c o b)l(a.4J[c]!==4K)9 b[c]}();9 a&&{1p:a}}()})}(Y.n),!4(a){5 b=4(b,c){3.m=c,3.$6=a(b).4L(\'[7-2c="K"]\',"Q.2c.K",a.1B(3.w,3)),3.m.32&&3.$6.1q(".K-33").3G(3.m.32)};b.18={1X:b,x:4(){9 3[3.1C?"w":"A"]()},A:4(){5 b=3,c=a.1M("A");3.$6.R(c);l(3.1C||c.1S())9;3.1C=1v,3.34(),3.N(4(){5 c=a.M.u&&b.$6.O("1j");b.$6.1a().1f||b.$6.35(J.33),b.$6.A(),c&&b.$6[0].1D,b.$6.1g("o").y("3H-2d",11),b.3I(),c?b.$6.1N(a.M.u.1p,4(){b.$6.1k().R("2e")}):b.$6.1k().R("2e")})},w:4(b){b&&b.1Y();5 c=3;b=a.1M("w"),3.$6.R(b);l(!3.1C||b.1S())9;3.1C=11,3.34(),a(J).1Z("3J.K"),3.$6.S("o").y("3H-2d",1v),a.M.u&&3.$6.O("1j")?3.3K():3.2E()},3I:4(){5 b=3;a(J).E("3J.K",4(a){b.$6[0]!==a.1O&&(!b.$6.4M(a.1O).1f&&b.$6.1k())})},34:4(){5 a=3;3.1C&&3.m.3L?3.$6.E("3M.2c.K",4(b){b.3N==27&&a.w()}):3.1C||3.$6.1Z("3M.2c.K")},3K:4(){5 b=3,c=21(4(){b.$6.1Z(a.M.u.1p),b.2E()},3O);3.$6.1N(a.M.u.1p,4(){2F(c),b.2E()})},2E:4(){5 a=3;3.$6.w(),3.N(4(){a.3P(),a.$6.R("2d")})},3P:4(){3.$N&&3.$N.36(),3.$N=1E},N:4(b){5 c=3,d=3.$6.O("1j")?"1j":"";l(3.1C&&3.m.N){5 e=a.M.u&&d;3.$N=a(\'<V 1i="K-N \'+d+\'" />\').35(J.33),3.$N.Q(3.m.N=="4N"?a.1B(3.$6[0].1k,3.$6[0]):a.1B(3.w,3)),e&&3.$N[0].1D,3.$N.1g("o");l(!b)9;e?3.$N.1N(a.M.u.1p,b):b()}X!3.1C&&3.$N?(3.$N.S("o"),a.M.u&&3.$6.O("1j")?3.$N.1N(a.M.u.1p,b):b()):b&&b()}};5 c=a.k.K;a.k.K=4(c){9 3.1b(4(){5 d=a(3),e=d.7("K"),f=a.1r({},a.k.K.1c,d.7(),z c=="1P"&&c);e||d.7("K",e=1F b(3,f)),z c=="1G"?e[c]():f.A&&e.A()})},a.k.K.1c={N:1v,3L:1v,A:1v},a.k.K.1w=b,a.k.K.1H=4(){9 a.k.K=c,3},a(J).E("Q.K.7-1h",\'[7-x="K"]\',4(b){5 c=a(3),d=c.y("U"),e=a(c.y("7-1O")||d&&d.2f(/.*(?=#[^\\s]+$)/,"")),f=e.7("K")?"x":a.1r({32:!/#/.37(d)&&d},e.7(),c.7());b.1Y(),e.K(f).1N("w",4(){c.1k()})})}(Y.n),!4(a){4 d(){a(".L-N").36(),a(b).1b(4(){e(a(3)).S("22")})}4 e(b){5 c=b.y("7-1O"),d;c||(c=b.y("U"),c=c&&(/#/.37(c)&&c.2f(/.*(?=#[^\\s]*$)/,""))),d=c&&a(c);l(!d||!d.1f)d=b.1a();9 d}5 b="[7-x=L]",c=4(b){5 c=a(b).E("Q.L.7-1h",3.x);a("1t").E("Q.L.7-1h",4(){c.1a().S("22")})};c.18={1X:c,x:4(b){5 c=a(3),f,g;l(c.2G(".2g, :2g"))9;9 f=e(c),g=f.O("22"),d(),g||("4O"o J.4P&&a(\'<V 1i="L-N"/>\').4Q(a(3)).E("Q",d),f.3Q("22")),c.1k(),11},39:4(c){5 d,f,g,h,i,j;l(!/(38|40|27)/.37(c.2H))9;d=a(3),c.1Y(),c.3R();l(d.2G(".2g, :2g"))9;h=e(d),i=h.O("22");l(!i||i&&c.2H==27)9 c.3N==27&&h.1q(b).1k(),d.Q();f=a("[3S=2h] 2I:3T(.4R):3U a",h);l(!f.1f)9;j=f.2Y(f.4S(":1k")),c.2H==38&&(j>0&&j--),c.2H==40&&(j<f.1f-1&&j++),~j||(j=0),f.4T(j).1k()}};5 f=a.k.L;a.k.L=4(b){9 3.1b(4(){5 d=a(3),e=d.7("L");e||d.7("L",e=1F c(3)),z b=="1G"&&e[b].2i(d)})},a.k.L.1w=c,a.k.L.1H=4(){9 a.k.L=f,3},a(J).E("Q.L.7-1h",d).E("Q.L.7-1h",".L 4U",4(a){a.3R()}).E("Q.L.7-1h",b,c.18.x).E("39.L.7-1h",b+", [3S=2h]",c.18.39)}(Y.n),!4(a){5 b=4(b){3.6=a(b)};b.18={1X:b,A:4(){5 b=3.6,c=b.2J("4V:3T(.L-2h)"),d=b.y("7-1O"),e,f,g;d||(d=b.y("U"),d=d&&d.2f(/.*(?=#[^\\s]*$)/,""));l(b.1a("2I").O("1s"))9;e=c.1q(".1s:4W a")[0],g=a.1M("A",{3V:e}),b.R(g);l(g.1S())9;f=a(d),3.3a(b.1a("2I"),c),3.3a(f,f.1a(),4(){b.R({v:"2e",3V:e})})},3a:4(b,c,d){4 g(){e.S("1s").1q("> .L-2h > .1s").S("1s"),b.1g("1s"),f?(b[0].1D,b.1g("o")):b.S("1j"),b.1a(".L-2h")&&b.2J("2I.L").1g("1s"),d&&d()}5 e=c.1q("> .1s"),f=d&&(a.M.u&&e.O("1j"));f?e.1N(a.M.u.1p,g):g(),e.S("o")}};5 c=a.k.1x;a.k.1x=4(c){9 3.1b(4(){5 d=a(3),e=d.7("1x");e||d.7("1x",e=1F b(3)),z c=="1G"&&e[c]()})},a.k.1x.1w=b,a.k.1x.1H=4(){9 a.k.1x=c,3},a(J).E("Q.1x.7-1h",\'[7-x="1x"], [7-x="4X"]\',4(b){b.1Y(),a(3).1x("A")})}(Y.n),!4(a){5 b=4(a,b){3.3b("W",a,b)};b.18={1X:b,3b:4(b,c,d){5 e,f,g,h,i;3.v=b,3.$6=a(c),3.m=3.3W(d),3.24=1v,g=3.m.R.4Y(" ");2v(i=g.1f;i--;)h=g[i],h=="Q"?3.$6.E("Q."+3.v,3.m.25,a.1B(3.x,3)):h!="3X"&&(e=h=="3c"?"4Z":"1k",f=h=="3c"?"51":"3Y",3.$6.E(e+"."+3.v,3.m.25,a.1B(3.3Z,3)),3.$6.E(f+"."+3.v,3.m.25,a.1B(3.41,3)));3.m.25?3.2j=a.1r({},3.m,{R:"3X",25:""}):3.42()},3W:4(b){9 b=a.1r({},a.k[3.v].1c,3.$6.7(),b),b.1l&&(z b.1l=="52"&&(b.1l={A:b.1l,w:b.1l})),b},3Z:4(b){5 c=a.k[3.v].1c,d={},e;3.2j&&a.1b(3.2j,4(a,b){c[a]!=b&&(d[a]=b)},3),e=a(b.3d)[3.v](d).7(3.v);l(!e.m.1l||!e.m.1l.A)9 e.A();2F(3.2k),e.2K="o",3.2k=21(4(){e.2K=="o"&&e.A()},e.m.1l.A)},41:4(b){5 c=a(b.3d)[3.v](3.2j).7(3.v);3.2k&&2F(3.2k);l(!c.m.1l||!c.m.1l.w)9 c.w();c.2K="43",3.2k=21(4(){c.2K=="43"&&c.w()},c.m.1l.w)},A:4(){5 b,c,d,e,f,g,h=a.1M("A");l(3.3e()&&3.24){3.$6.R(h);l(h.1S())9;b=3.12(),3.3f(),3.m.44&&b.1g("1j"),f=z 3.m.2l=="4"?3.m.2l.2i(3,b[0],3.$6[0]):3.m.2l,b.2L().45({r:0,Z:0,53:"54"}),3.m.3g?b.35(3.m.3g):b.55(3.$6),c=3.46(),d=b[0].1D,e=b[0].2m;56(f){2M"1y":g={r:c.r+c.1d,Z:c.Z+c.1e/2-d/2};3h;2M"r":g={r:c.r-e,Z:c.Z+c.1e/2-d/2};3h;2M"Z":g={r:c.r+c.1d/2-e/2,Z:c.Z-d};3h;2M"2N":g={r:c.r+c.1d/2-e/2,Z:c.Z+c.1e};57:}3.47(g,f),3.$6.R("2e")}},47:4(a,b){5 c=3.12(),d=c[0].1D,e=c[0].2m,f,g,h,i;c.1m(a).1g(b).1g("o"),f=c[0].1D,g=c[0].2m,b=="r"&&(g!=e&&(a.r=a.r+e-g,i=1v)),b=="1y"||b=="r"?(h=0,a.Z<0&&(h=a.Z*-2,a.Z=0,c.1m(a),f=c[0].1D,g=c[0].2m),3.3i(h-d+f,f,"Z")):3.3i(g-e,g,"r"),i&&c.1m(a)},3i:4(a,b,c){3.1T().45(c,a?50*(1-a/b)+"%":"")},3f:4(){5 a=3.12(),b=3.2n();a.1q(".W-48")[3.m.1t?"1t":"1L"](b),a.S("1j o r 1y Z 2N")},w:4(){4 e(){5 b=21(4(){c.1Z(a.M.u.1p).2L()},3O);c.1N(a.M.u.1p,4(){2F(b),c.2L()})}5 b=3,c=3.12(),d=a.1M("w");3.$6.R(d);l(d.1S())9;9 c.S("o"),a.M.u&&3.$12.O("1j")?e():c.2L(),3.$6.R("2d"),3},42:4(){5 a=3.$6;(a.y("1n")||z a.y("7-3j-1n")!="1G")&&a.y("7-3j-1n",a.y("1n")||"").y("1n","")},3e:4(){9 3.2n()},46:4(){5 b=3.$6[0];9 a.1r({},z b.49=="4"?b.49():{1e:b.1D,1d:b.2m},3.$6.1m())},2n:4(){5 a,b=3.$6,c=3.m;9 a=b.y("7-3j-1n")||(z c.1n=="4"?c.1n.2i(b[0]):c.1n),a},12:4(){9 3.$12=3.$12||a(3.m.2O)},1T:4(){9 3.$1T=3.$1T||3.12().1q(".W-1T")},58:4(){3.$6[0].59||(3.w(),3.$6=1E,3.m=1E)},5a:4(){3.24=1v},5b:4(){3.24=11},5c:4(){3.24=!3.24},x:4(b){5 c=b?a(b.3d)[3.v](3.2j).7(3.v):3;c.12().O("o")?c.w():c.A()},4a:4(){3.w().$6.1Z("."+3.v).4b(3.v)}};5 c=a.k.W;a.k.W=4(c){9 3.1b(4(){5 d=a(3),e=d.7("W"),f=z c=="1P"&&c;e||d.7("W",e=1F b(3,f)),z c=="1G"&&e[c]()})},a.k.W.1w=b,a.k.W.1c={44:1v,2l:"r",25:11,2O:\'<V 1i="W"><V 1i="W-1T"></V><V 1i="W-48"></V></V>\',R:"3c 1k",1n:"",1l:0,1t:11,3g:11},a.k.W.1H=4(){9 a.k.W=c,3}}(Y.n),!4(a){5 b=4(a,b){3.3b("13",a,b)};b.18=a.1r({},a.k.W.1w.18,{1X:b,3f:4(){5 a=3.12(),b=3.2n(),c=3.3k();a.1q(".13-1n")[3.m.1t?"1t":"1L"](b),a.1q(".13-1Q")[3.m.1t?"1t":"1L"](c),a.S("1j r 1y Z 2N o")},3e:4(){9 3.2n()||3.3k()},3k:4(){5 a,b=3.$6,c=3.m;9 a=(z c.1Q=="4"?c.1Q.2i(b[0]):c.1Q)||b.y("7-1Q"),a},12:4(){9 3.$12||(3.$12=a(3.m.2O)),3.$12},4a:4(){3.w().$6.1Z("."+3.v).4b(3.v)}});5 c=a.k.13;a.k.13=4(c){9 3.1b(4(){5 d=a(3),e=d.7("13"),f=z c=="1P"&&c;e||d.7("13",e=1F b(3,f)),z c=="1G"&&e[c]()})},a.k.13.1w=b,a.k.13.1c=a.1r({},a.k.W.1c,{2l:"2N",R:"Q",1Q:"",2O:\'<V 1i="13"><V 1i="1T"></V><4c 1i="13-1n"></4c><V 1i="13-1Q"></V></V>\'}),a.k.13.1H=4(){9 a.k.13=c,3}}(Y.n),!4(a){5 b=4(b,c){3.m=a.1r({},a.k.T.1c,c),3.$Y=a(Y).E("4d.T.7-1h",a.1B(3.2P,3)).E("Q.T.7-1h",a.1B(4(){21(a.1B(3.2P,3),1)},3)),3.$6=a(b),3.2P()};b.18.2P=4(){l(!3.$6.2G(":3U"))9;5 b=a(J).1d(),c=3.$Y.5d(),d=3.$6.1m(),e=3.m.1m,f=e.1y,g=e.r,h="T T-r T-1y",i;z e!="1P"&&(f=g=e),z g=="4"&&(g=e.r()),z f=="4"&&(f=e.1y()),i=3.3l!=1E&&c+3.3l<=d.r?11:f!=1E&&d.r+3.$6.1d()>=b-f?"1y":g!=1E&&c<=g?"r":11;l(3.4e===i)9;3.4e=i,3.3l=i=="1y"?d.r-c:1E,3.$6.S(h).1g("T"+(i?"-"+i:""))};5 c=a.k.T;a.k.T=4(c){9 3.1b(4(){5 d=a(3),e=d.7("T"),f=z c=="1P"&&c;e||d.7("T",e=1F b(3,f)),z c=="1G"&&e[c]()})},a.k.T.1w=b,a.k.T.1c={1m:0},a.k.T.1H=4(){9 a.k.T=c,3},a(Y).E("3G",4(){a(\'[7-5e="T"]\').1b(4(){5 b=a(3),c=b.7();c.1m=c.1m||{},c.4f&&(c.1m.1y=c.4f),c.4g&&(c.1m.r=c.4g),b.T(c)})})}(Y.n),!4(a){5 b=\'[7-2c="1z"]\',c=4(c){a(c).E("Q",b,3.2Q)};c.18.2Q=4(b){4 f(){e.R("5f").36()}5 c=a(3),d=c.y("7-1O"),e;d||(d=c.y("U"),d=d&&d.2f(/.*(?=#[^\\s]*$)/,"")),e=a(d),b&&b.1Y(),e.1f||(e=c.O("1z")?c:c.1a()),e.R(b=a.1M("2Q"));l(b.1S())9;e.S("o"),a.M.u&&e.O("1j")?e.E(a.M.u.1p,f):f()};5 d=a.k.1z;a.k.1z=4(b){9 3.1b(4(){5 d=a(3),e=d.7("1z");e||d.7("1z",e=1F c(3)),z b=="1G"&&e[b].2i(d)})},a.k.1z.1w=c,a.k.1z.1H=4(){9 a.k.1z=d,3},a(J).E("Q.1z.7-1h",b,c.18.2Q)}(Y.n),!4(a){5 b=4(b,c){3.$6=a(b),3.m=a.1r({},a.k.1o.1c,c)};b.18.4h=4(a){5 b="2g",c=3.$6,d=c.7(),e=c.2G("2R")?"26":"1t";a+="5g",d.4i||c.7("4i",c[e]()),c[e](d[a]||3.m[a]),21(4(){a=="4j"?c.1g(b).y(b,b):c.S(b).3m(b)},0)},b.18.x=4(){5 a=3.$6.2J(\'[7-x="5h-5i"]\');a&&a.1q(".1s").S("1s"),3.$6.3Q("1s")};5 c=a.k.1o;a.k.1o=4(c){9 3.1b(4(){5 d=a(3),e=d.7("1o"),f=z c=="1P"&&c;e||d.7("1o",e=1F b(3,f)),c=="x"?e.x():c&&e.4h(c)})},a.k.1o.1c={4j:"5j..."},a.k.1o.1w=b,a.k.1o.1H=4(){9 a.k.1o=c,3},a(J).E("Q.1o.7-1h","[7-x^=1o]",4(b){5 c=a(b.1O);c.O("4k")||(c=c.2J(".4k")),c.1o("x")})}(Y.n),!4(a){5 b=4(b,c){3.$6=a(b),3.m=a.1r({},a.k.P.1c,c),3.m.1a&&(3.$1a=a(3.m.1a)),3.m.x&&3.x()};b.18={1X:b,2S:4(){5 a=3.$6.O("1e");9 a?"1e":"1d"},A:4(){5 b,c,d,e;l(3.2o||3.$6.O("o"))9;b=3.2S(),c=a.5k(["4d",b].5l("-")),d=3.$1a&&3.$1a.1q("> .5m-5n > .o");l(d&&d.1f){e=d.7("P");l(e&&e.2o)9;d.P("w"),e||d.7("P",1E)}3.$6[b](0),3.u("1g",a.1M("A"),"2e"),a.M.u&&3.$6[b](3.$6[0][c])},w:4(){5 b;l(3.2o||!3.$6.O("o"))9;b=3.2S(),3.3n(3.$6[b]()),3.u("S",a.1M("w"),"2d"),3.$6[b](0)},3n:4(a){5 b=3.2S();9 3.$6.S("P")[b](a||"5o")[0].1D,3.$6[a!==1E?"1g":"S"]("P"),3},u:4(b,c,d){5 e=3,f=4(){c.v=="A"&&e.3n(),e.2o=0,e.$6.R(d)};3.$6.R(c);l(c.1S())9;3.2o=1,3.$6[b]("o"),a.M.u&&3.$6.O("P")?3.$6.1N(a.M.u.1p,f):f()},x:4(){3[3.$6.O("o")?"w":"A"]()}};5 c=a.k.P;a.k.P=4(c){9 3.1b(4(){5 d=a(3),e=d.7("P"),f=a.1r({},a.k.P.1c,d.7(),z c=="1P"&&c);e||d.7("P",e=1F b(3,f)),z c=="1G"&&e[c]()})},a.k.P.1c={x:1v},a.k.P.1w=b,a.k.P.1H=4(){9 a.k.P=c,3},a(J).E("Q.P.7-1h","[7-x=P]",4(b){5 c=a(3),d,e=c.y("7-1O")||(b.1Y()||(d=c.y("U"))&&d.2f(/.*(?=#[^\\s]+$)/,"")),f=a(e).7("P")?"x":c.7();c[a(e).O("o")?"1g":"S"]("5p"),a(e).P(f)})}(Y.n);n(4(){n(\'#3o 2R[v="1L"]\').26("3p...");n(\'#3o 2R[v="1L"]\').1k(4(){l(n(3).26()=="3p...")n(3).26("")});n(\'#3o 2R[v="1L"]\').3Y(4(){l(n(3).26()=="")n(3).26("3p...")});n(".5q").W();n(".5r").13();5 d=n(".31-2T 3q, .31-2T 1P, .2U-2T 3q, .2U-2T 3q"),$4l=n("#1Q");$4m=n("#2U-15 > V").5s();d.1b(4(){5 a=3.1d===""?5t:3.1d;5 b=3.1e===""?5u:3.1e;n(3).y("7-3r",a/b).3m("1d").3m("1e")});n(Y).4n(4(){5 b=$4l.1e();5 c=$4m.1e();d.1b(4(){5 a=n(3);l(a.1a().O("2U-5v"))a.1e(c).1d(c*a.y("7-3r"));X a.1e(b).1d(b*a.y("7-3r"))})}).4n()});4 5w(a){Y.22(a,"5x","1d=5y,1e=5z,5A=0,5B=0,5C=0,5D=0,2V=0,5E=0")}n(4(){l(n(".4o").1f>0)5 a=n(".4o").1d();X 5 a=0;n("#5F").T({1m:a})});',62,352,'|||this|function|var|element|data||return|||||||||||fn|if|options|jQuery|in|||top|||transition|type|hide|toggle|attr|typeof|show||||on|||||document|modal|dropdown|support|backdrop|hasClass|collapse|click|trigger|removeClass|affix|href|div|tooltip|else|window|left||false|tip|popover||posts|max|indexOf|prototype||parent|each|defaults|height|width|length|addClass|api|class|fade|focus|delay|offset|title|button|end|find|extend|active|html|script|true|Constructor|tab|bottom|alert|results|proxy|isShown|offsetWidth|null|new|string|noConflict|maksimal|search|label|text|Event|one|target|object|content|page|isDefaultPrevented|arrow|onclick|substring|PageNo|constructor|preventDefault|off||setTimeout|open||enabled|selector|val||nomerkiri||parseInt|mulai|dismiss|hidden|shown|replace|disabled|menu|call|_options|timeout|placement|offsetHeight|getTitle|transitioning|num|akhir|span|previous|redirectpage|redirectlabel|for|updated|src|feeds|summary|alt|json|callback|jsonstart|hideModal|clearTimeout|is|keyCode|li|closest|hoverState|detach|case|right|template|checkPosition|close|input|dimension|video|related|location|hitungtotaldata|createElement|index|finddatepost|post|entry|remote|body|escape|appendTo|remove|test||keydown|activate|init|hover|currentTarget|hasContent|setContent|container|break|replaceArrow|original|getContent|unpin|removeAttr|reset|searchform|Search|iframe|aspectRatio|loophalaman|next|innerHTML|feed|write|x3c|getElementsByTagName|head|javascript|setAttribute|start|appendChild|published|transitionend|load|aria|enforceFocus|focusin|hideWithTransition|keyboard|keyup|which|500|removeBackdrop|toggleClass|stopPropagation|role|not|visible|relatedTarget|getOptions|manual|blur|enter||leave|fixTitle|out|animation|css|getPosition|applyPlacement|inner|getBoundingClientRect|destroy|removeData|h3|scroll|affixed|offsetBottom|offsetTop|setState|resetText|loadingText|btn|fluidEl|fluidElRelated|resize|above_header|pages|Page|of|current|getElementsByName|pageArea|getElementById|blog|pager|pagenavi|openSearch|totalResults|encodeURIComponent|bootstrap|WebkitTransition|webkitTransitionEnd|MozTransition|OTransition|oTransitionEnd|otransitionend|style|undefined|delegate|has|static|ontouchstart|documentElement|insertBefore|divider|filter|eq|form|ul|last|pill|split|mouseenter||mouseleave|number|display|block|insertAfter|switch|default|validate|parentNode|enable|disable|toggleEnabled|scrollTop|spy|closed|Text|buttons|radio|loading|camelCase|join|accordion|group|auto|collapsed|tips|bl_popover|first|473|840|header|social_share|fbshare|450|760|resizable|toolbar|menubar|status|scrollbars|masthead'.split('|'),0,{}))


$(document).ready(function() {
  $("#owl-demo").owlCarousel({
    autoPlay: 3000,
    items : 3,
    itemsDesktop : [1200,3],
    itemsDesktopSmall : [980,2],
    itemsMobile : [480,1]
  });
});

$('.go-top').click(function(){$('.st-content').animate({scrollTop:0},'slow');$('html, body').animate({scrollTop:0},'slow');return false;});

function setCopyrightYear() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("yearOfCopyright").innerHTML = n;
}
