/* global a2a*/
(function (Drupal) {
  'use strict';

  Drupal.behaviors.addToAny = {
    attach: function (context, settings) {
      // If not the full document (it's probably AJAX), and window.a2a exists
      if (context !== document && window.a2a) {
        a2a.init_all(); // Init all uninitiated AddToAny instances
      }
    }
  };

})(Drupal);
;
!function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, "script", "twitter-wjs");;
!function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "//www.instagram.com/embed.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, "script", "instagram-wjs");;
(function ($) {
  /*
  * Slider Count
  *
  */
 $(document).ready(function(){
 $('.rcb-pts-cnt-dsn .slick-next').after("<div class='cnt-top-sldr'><span class='nq-cnt'>1</span>/"+$('.rcb-pts-cnt-dsn .slick-list .slick__slide').not(".slick-cloned").length+"</div>");
 $('.rcb-pts-cnt-dsn .slick-next, .rcb-pts-cnt-dsn .slick-prev').click(function(event){
 event.preventDefault();
     var cn = parseInt($('.rcb-pts-cnt-dsn .slick-active').attr('data-slick-index'))+1;
     $('.cnt-top-sldr .nq-cnt').text(cn);
 });
 
 var loc = window.location.href;
 var arr=loc.split('/')[3];
 if(arr != '') {
 if(arr == 'rcb-cricket-news') {
   $("nav ul.navbar-nav").children("li:nth-child(2)").addClass("rcb-mnu-ylw"); 
 } else if(arr == 'videos') {
   $("nav ul.navbar-nav").children("li:nth-child(3)").addClass("rcb-mnu-ylw"); 
 } else if(arr == 'photos') {
   $("nav ul.navbar-nav").children("li:nth-child(4)").addClass("rcb-mnu-ylw"); 
 } else if(arr == 'tickets') {
   $("nav ul.navbar-nav").children("li:nth-child(5)").addClass("rcb-mnu-ylw"); 
 } else if(arr == 'rcb-squad') {
   $("nav ul.navbar-nav").children("li:nth-child(6)").addClass("rcb-mnu-ylw"); 
 }
 $('.rcb-mnu-ylw a').css('color','#f8dd81');
 }
 });
 $(".rcb-tv-adtoany").click(function() {
   $("#shr-icn").toggleClass("opened-addtoany");
 });

 /*$(".bnr-ad-clk11").click(function() {
   gtag('event', 'Ads tracking', {    
     'event_category': 'Ads tracking',  
     'event_label': 'Ads tracking', 
     'value': '1'    
     }); 
 });*/
 
 jQuery("input[type='password']").keyup(function (event) {
   //$(this).attr('maxlength','20');
   var curr_val=jQuery(this).val();
   var upperCase= new RegExp('[A-Z]');
   var lowerCase= new RegExp('[a-z]');
   var numbers = new RegExp('[0-9]');
   var pattern1 = new RegExp('[!@#$%^&*(),.?":{}|<>]');  
 
   jQuery('.password-strength__title span.pwd_constrain').remove();
   if(jQuery(this).val().match(upperCase) && jQuery(this).val().match(lowerCase) &&   jQuery(this).val().match(numbers) && (jQuery(this).val().length>=8) && jQuery(this).val().match(pattern1))  
   {
         
   }
   else{
     jQuery('.password-strength__title').append('<span style="color:red;display: block;width: 600px;" class="pwd_constrain">Use Password 8 or more characters with a mix of letters, numbers & symbols</span>');
   }
 
 });
 
 $('.store_permission_content').css('display','none');
    var permission_enable=[];
    var permission_disable=[];
     var enable_admin_submit=0;
   
  $("#user-admin-permissions .js-permissions .form-checkbox").click(function(){
   
   if (this.checked) 
     {      
         permission_enable.push($(this).attr('name'));   
 
         var removeItem = $(this).attr('name');
         permission_disable = jQuery.grep(permission_disable, function(value) {
           return value != removeItem;
         });        
     }
     else{     
       permission_disable.push($(this).attr('name'));   
 
       var removeItem = $(this).attr('name');
       permission_enable = jQuery.grep(permission_enable, function(value) {
         return value != removeItem;
       }); 
     }
   $('#add_enable_permission').val(permission_enable.toString());
   $('#add_disable_permission').val(permission_disable.toString());
    
   });
   
   $('div.cus-dt-frmt span').each( function( i, el ) {   
   var current_date = $(this).text();
   var current_date1 = new Date(current_date).getTime();
   var currentDateTime = new Date().getTime();
    
   var diff = currentDateTime - current_date1;
   var years = Math.floor(diff/31536000000);
   var months = Math.floor((diff % 31536000000)/2628000000);
   var weeks = Math.floor(((diff) % 2628000000)/(86400000 * 7));
   var days = Math.floor(((diff) % 2628000000)/86400000);
   var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
   var secs = Math.floor((diff % (1000 * 60)) / 1000);
   var result="";
    if(years>0){
      result = (years > 1 ) ? years+" years ago": years+" year ago";
    }
    else if(months>0){
      result = (months > 1 ) ? months+" months ago": months+" month ago";
    }
    else if(weeks>0){
      result = (weeks > 1 ) ? weeks+" weeks ago": weeks+" week ago";
    }
    else if(days>0){
      result = (days > 1 ) ? days+" days ago": days+" day ago";
    }
    else if(hours>0){
      result = (hours > 1 ) ? hours+" hours ago": hours+" hour ago";
    }
      else if(mins > 0){
      result = (mins > 1 ) ? mins+" mins ago": mins+" min ago";
    }   
    else{
      var result="Just Now";
    }
    if(result!=""){
      $(this).text(result);
    }     
 });
 
 $('div.hmslid-blk-slks div.slide__content').each( function( i, el ) {   
   var top_slider_title = $(this).find('.top-slider-title a').attr("href");
   $(this).find('.slide__media a').attr("href", top_slider_title);
 });
 
 
 function getmatchdetailsjsonp(){
  if ($('body').hasClass('path-frontpage')){
   
   var compition_id=24;
   if((location.hostname=="rcbdev.betabasket.net") || (location.hostname=="rcb.uat.betabasket.net")){
   var url = 'https://rcb.uat.betabasket.net/score/ipl2020/'+compition_id+'-matchschedule.js';
   }
   else{
     var url = 'https://www.royalchallengers.com/score/'+compition_id+'-matchschedule.js';
   }
  $.ajax({
   //crossDomain: true,
   type: "GET",
   contentType: "application/json; charset=utf-8",
   async: true,
   url: url,
   dataType: "jsonp",
   jsonpCallback: 'MatchSchedule',
   success: function (data) {
     
     var j=0;
     var i=0;
     var count =2;
     var output = "";
     var up_i = 0;
     var uptxt = 0;
     var live_en = 0;
     var postcnt = 0;
     var k = 0;
     var lkcn=0;
 
   $.each(data.Matchsummary, function(i, result){    
   
   var match_date = data['Matchsummary'][i]['MatchDate'];
   var MatchTime= data['Matchsummary'][i]['MatchTime'];
   var MatchStatus= data['Matchsummary'][i]['MatchStatus'];  
   
   var mnth_frmt = new Date(match_date);
   var md = match_date+" "+MatchTime;
   var md_date = new Date(md);
   var match_date_time =	md_date.getTime();
   var mnth_d_frmt =  mnth_frmt.getDate();
   var mnth_m_frmt =  mnth_frmt.getMonth() + 1;
   var mnth_y_frmt =  mnth_frmt.getFullYear();
   var mnth_mstr_frmt  =  new Date(match_date).toLocaleString('default', { month: 'short' });
   
   if (mnth_d_frmt < 10) { 
     mnth_d_frmt = '0' + mnth_d_frmt; 
   } 
   if (mnth_m_frmt < 10) { 
     mnth_m_frmt = '0' + mnth_m_frmt; 
   } 
   var mnth_dateformat  = mnth_y_frmt+"-"+mnth_m_frmt+"-"+mnth_d_frmt;		
   
   var currentdate = new Date();
   var curr_date_time =	currentdate.getTime();
   var curr_d_frmt =  currentdate.getDate();
   var curr_m_frmt =  currentdate.getMonth() + 1;
   var curr_y_frmt =  currentdate.getFullYear();
   
    if (curr_d_frmt < 10) { 
     curr_d_frmt = '0' + curr_d_frmt; 
   } 
   if (curr_m_frmt < 10) { 
     curr_m_frmt = '0' + curr_m_frmt; 
   } 
   var current_dateformat  = curr_y_frmt+"-"+curr_m_frmt+"-"+curr_d_frmt;
   
   if((MatchStatus== 'Live') && (current_dateformat==mnth_dateformat) && (lkcn==0))
   {				
     j=1;
     lkcn = 1;
     count =1;
     live_en = 1;
     postcnt = 1;
 
     var CompetitionID =data['Matchsummary'][i]['CompetitionID'];
     var HomeTeamLogo= data['Matchsummary'][i]['HomeTeamLogo'];
     var AwayTeamLogo= data['Matchsummary'][i]['AwayTeamLogo'];
     var FallWickets1= data['Matchsummary'][i]['1FallWickets'];
     var FallWickets2= data['Matchsummary'][i]['2FallWickets'];
     var FallScore1= data['Matchsummary'][i]['1FallScore'];
     var FallOvers1= data['Matchsummary'][i]['1FallOvers'];
     var FallOvers2= data['Matchsummary'][i]['2FallOvers'];
     var FallScore2= data['Matchsummary'][i]['2FallScore'];
     var FallScore2= data['Matchsummary'][i]['2FallScore'];
     var SecondBattingTeamName= data['Matchsummary'][i]['SecondBattingTeamName'];
     var MatchID= data['Matchsummary'][i]['MatchID'];

     var T20ProMatchID= data['Matchsummary'][i]['T20ProMatchID']; 
     var T20ProMatchID_str = T20ProMatchID.replace(/\d+/g, '');
     var T20ProMatchID_str_arr = T20ProMatchID_str.split("VS");
     var implodedArray = T20ProMatchID_str_arr.join('-vs-'); 
     var T20ProMatchID_val = implodedArray.toLowerCase();
 
     output += '<a href= "/ipl2020-live-cricket-score/'+MatchID+'/'+T20ProMatchID_val+'">'+
     '<div class="upcm-sect"><div class="live-blk-tit">LIVE</div></div>'+
     '<div class="fst-blk-scr">'+				
       '<div><img alt="royal" src="'+HomeTeamLogo+'"></div>'+
       '<div id="clockdiv">'+
         '<div class="lve-blk-dhms">'+
         '<p class="days">'+FallScore1+'/'+FallWickets1+'</p>'+         
         '</div>'+
       '</div>'+
       '<div class="overcol-wraps">'+
         '<div class="smalltext">'+Math.round(FallOvers1)+' Overs</div>'+
       '</div>'+
       '</div>'+
       
     '<div class="snd-blk-scr">'+
         '<div><img alt="royal" src="'+AwayTeamLogo+'"></div>'+
         '<div id="clockdiv">'+
         '<div class="lve-blk-dhms">'+
           '<p class="days">'+FallScore2+'/'+FallWickets2+'</p>'+
         '</div>'+
         '</div>'+
       '<div class="overcol-wraps">'+
       '<div class="smalltext">'+Math.round(FallOvers2)+' Overs</div>'+
       '</div>'+
     '</div></a>'+
 
     '<div class="mtch-dpth-det">'+
       '<span class="mtch-cnt-txt"><a href="/match-center">'+
       'MATCH CENTER</a></span>'+
       '<span class="mtch-scrcrd-txt"><a href="/ipl2020-live-cricket-score/'+MatchID+'/'+T20ProMatchID_val+'#profile">SCORE CARD</a></span>'+
       '<span class="mtch-pnttab-txt"><a href= "/ipl2020-live-cricket-score/'+MatchID+'/'+T20ProMatchID_val+'#pointstable">POINTS TABLE</a></span>'+
     '</div>';
   }					
 });
 
 
 $.each(data.Matchsummary, function(i, result){    
   
   var match_date = data['Matchsummary'][i]['MatchDate'];
   var MatchTime= data['Matchsummary'][i]['MatchTime'];
   var MatchStatus= data['Matchsummary'][i]['MatchStatus'];  
   
   var mnth_frmt = new Date(match_date);
   var md = match_date+" "+MatchTime;
   var md_date = new Date(md);
   var match_date_time =	md_date.getTime();
   var mnth_d_frmt =  mnth_frmt.getDate();
   var mnth_m_frmt =  mnth_frmt.getMonth() + 1;
   var mnth_y_frmt =  mnth_frmt.getFullYear();
   var mnth_mstr_frmt  =  new Date(match_date).toLocaleString('default', { month: 'short' });
   
   if (mnth_d_frmt < 10) { 
     mnth_d_frmt = '0' + mnth_d_frmt; 
   } 
   if (mnth_m_frmt < 10) { 
     mnth_m_frmt = '0' + mnth_m_frmt; 
   } 
   var mnth_dateformat  = mnth_y_frmt+"-"+mnth_m_frmt+"-"+mnth_d_frmt;		
   
   var currentdate = new Date();
   var curr_date_time =	currentdate.getTime();
   var curr_d_frmt =  currentdate.getDate();
   var curr_m_frmt =  currentdate.getMonth() + 1;
   var curr_y_frmt =  currentdate.getFullYear();
   
    if (curr_d_frmt < 10) { 
     curr_d_frmt = '0' + curr_d_frmt; 
   } 
   if (curr_m_frmt < 10) { 
     curr_m_frmt = '0' + curr_m_frmt; 
   } 
   var current_dateformat  = curr_y_frmt+"-"+curr_m_frmt+"-"+curr_d_frmt;
   
 
   
  if((MatchStatus== 'Post') && (postcnt == 0) && (k == 0))
   {				
    k =1;
    count =1;
    live_en = 1;
 
     var CompetitionID =data['Matchsummary'][i]['CompetitionID'];
     var HomeTeamLogo= data['Matchsummary'][i]['HomeTeamLogo'];
     var AwayTeamLogo= data['Matchsummary'][i]['AwayTeamLogo'];
     var FallWickets1= data['Matchsummary'][i]['1FallWickets'];
     var FallWickets2= data['Matchsummary'][i]['2FallWickets'];
     var FallScore1= data['Matchsummary'][i]['1FallScore'];
     var FallOvers1= data['Matchsummary'][i]['1FallOvers'];
     var FallOvers2= data['Matchsummary'][i]['2FallOvers'];
     var FallScore2= data['Matchsummary'][i]['2FallScore'];
     var FallScore2= data['Matchsummary'][i]['2FallScore'];
     var SecondBattingTeamName= data['Matchsummary'][i]['SecondBattingTeamName'];
     var MatchID= data['Matchsummary'][i]['MatchID'];
     var Commentss= data['Matchsummary'][i]['Commentss'];
     if(Commentss=="" || Commentss==undefined)
     {
     var Commentss= data['Matchsummary'][i]['Comments'];
     }

     if(FallOvers1==20.0){
      FallOvers1=20;
    }

    if(FallOvers2==20.0){
      FallOvers2=20;
    }
 
     var T20ProMatchID= data['Matchsummary'][i]['T20ProMatchID']; 
     var T20ProMatchID_str = T20ProMatchID.replace(/\d+/g, '');
     var T20ProMatchID_str_arr = T20ProMatchID_str.split("VS");
     var implodedArray = T20ProMatchID_str_arr.join('-vs-'); 
     var T20ProMatchID_val = implodedArray.toLowerCase();
 
    output += '<a href="/ipl2020-live-cricket-score/'+MatchID+'/'+T20ProMatchID_val+'"><div class="live-mtch-cmtblk">'+
   // '<h4 class="live-mtch-id pst-match-id">MATCH 10</h4>'+
   '<h4 class="live-mtch-dt">'+mnth_mstr_frmt.toUpperCase()+' '+mnth_d_frmt+' - '+mnth_y_frmt+'</h4>'+
   '<h4 class="live-mtch-cmt pst-match-cmt">'+Commentss.toUpperCase()+'</h4>'+
   '</div>';
 
     output += 
     '<div class="pst-blk-score">'+
     '<div class="frst-blk-scr pst-blk-scrdet">'+				
       '<div><img alt="royal" src="'+HomeTeamLogo+'"></div>'+
       '<div id="clockdiv" class="pst-clockdiv">'+
         '<div class="lve-blk-dhms pst-blk-dhms">'+
         '<p class="days">'+FallScore1+'/'+FallWickets1+'</p>'+
         '<div class="smalltext">'+FallOvers1+' Overs</div>'+         
         '</div>'+
       '</div>'+
       // '<div class="overcol-wraps pst-blk-wrp">'+
         
       // '</div>'+ 
       '</div>'+
       '<div class="split"><span class="big">v<span><span class="small">s<span></div>'+
     '<div class="scnd-blk-scr pst-blk-scrdet">'+
         '<div id="clockdiv" class="pst-clockdiv">'+
         '<div class="lve-blk-dhms pst-blk-dhms">'+
           '<p class="days">'+FallScore2+'/'+FallWickets2+'</p>'+
           '<div class="smalltext">'+FallOvers2+' Overs</div>'+
         '</div>'+
         '</div>'+
          '<div><img alt="royal" src="'+AwayTeamLogo+'"></div>'+
       // '<div class="overcol-wraps pst-blk-wrp">'+
       
       // '</div>'+
     '</div>'+
     '</div></a>'+
     '<div class="mtch-dpth-det">'+
       '<span class="mtch-cnt-txt"><a href="/match-center">'+
       'MATCH CENTER</a></span>'+
       '<span class="mtch-scrcrd-txt"><a href="/ipl2020-live-cricket-score/'+MatchID+'/'+T20ProMatchID_val+'#profile">SCORE CARD</a></span>'+
       '<span class="mtch-pnttab-txt"><a href= "/ipl2020-live-cricket-score/'+MatchID+'/'+T20ProMatchID_val+'#pointstable">POINTS TABLE</a></span>'+
     '</div>';
   }					
 });
 
 
 $.each(data.Matchsummary, function(i, result){    
   
   var match_date = data['Matchsummary'][i]['MatchDate'];
   var MatchTime= data['Matchsummary'][i]['MatchTime'];
   var MatchStatus= data['Matchsummary'][i]['MatchStatus'];  
   
   var mnth_frmt = new Date(match_date);
   var md = match_date+" "+MatchTime;
   var md_date = new Date(md);
   var match_date_time =	md_date.getTime();
   var mnth_d_frmt =  mnth_frmt.getDate();
   var mnth_m_frmt =  mnth_frmt.getMonth() + 1;
   var mnth_y_frmt =  mnth_frmt.getFullYear();
   var mnth_mstr_frmt  =  new Date(match_date).toLocaleString('default', { month: 'short' });
   
   if (mnth_d_frmt < 10) { 
     mnth_d_frmt = '0' + mnth_d_frmt; 
   } 
   if (mnth_m_frmt < 10) { 
     mnth_m_frmt = '0' + mnth_m_frmt; 
   } 
   var mnth_dateformat  = mnth_y_frmt+"-"+mnth_m_frmt+"-"+mnth_d_frmt;		
   
   var currentdate = new Date();
   var curr_date_time =	currentdate.getTime();
   var curr_d_frmt =  currentdate.getDate();
   var curr_m_frmt =  currentdate.getMonth() + 1;
   var curr_y_frmt =  currentdate.getFullYear();
   
    if (curr_d_frmt < 10) { 
     curr_d_frmt = '0' + curr_d_frmt; 
   } 
   if (curr_m_frmt < 10) { 
     curr_m_frmt = '0' + curr_m_frmt; 
   } 
   var current_dateformat  = curr_y_frmt+"-"+curr_m_frmt+"-"+curr_d_frmt;
 
   if((MatchStatus== 'UpComing') && (uptxt == 0) && (live_en == 0)){
       output += '<div class="upcm-sect"><div class="live-blk-tit upcm-blk-tit">UPCOMING</div></div>';
       uptxt = 1;
       }
 
  if((MatchStatus== 'UpComing') && (up_i<count))
  //if((MatchStatus== 'UpComing') && (match_date_time > curr_date_time) && (up_i<count))
   {
   var CompetitionID =data['Matchsummary'][i]['CompetitionID'];
   var HomeTeamLogo= data['Matchsummary'][i]['HomeTeamLogo'];
   var AwayTeamLogo= data['Matchsummary'][i]['AwayTeamLogo'];
   var MatchID= data['Matchsummary'][i]['MatchID'];  

   if(HomeTeamLogo==""){
    HomeTeamLogo = "/themes/custom/rcbbase/images/TBD.png";
  }
  if(AwayTeamLogo==""){
    AwayTeamLogo = "/themes/custom/rcbbase/images/TBD.png";
  }
     
     up_i++;
     output += '<div class="upcmg-blk-scr">'+
     '<div class="fst-tm-lg"><img alt="royal" src="'+HomeTeamLogo+'"></div>'+
     '<div class="tm-mtch-dt"><span>'+mnth_d_frmt+' '+mnth_mstr_frmt.toUpperCase()+'</span></div>'+
     '<div class="snd-tm-lg"><img alt="royal" src="'+AwayTeamLogo+'"></div>'+
         '</div>';
   }					
 });
   output +='<div class="pur-tck-blk">'+
   '<span class="buy-tck-spn"><a href="/product-listing">BUY MERCHANDISE</a></span> <span class="allfx-tck-spn"><a href="/fixtures">ALL FIXTURES</a></span>'+
   '</div>';
 
       $('.bas-scr-det').html(output);
   }
 }); 
}
 }
 getmatchdetailsjsonp();
 setInterval(getmatchdetailsjsonp,15000);
 
/*jQuery('a.bnr-ad-clk').click(function (event) {
  gtag('event', 'click', {'event_category': 'Banner Tracking', 'event_action': 'Banner onclick', 'event_label': 'Center Fruit'});
});

jQuery('a.bnr-ad-clk').mouseover(function (event) {
  gtag('event', 'impressions', {'event_category': 'Banner Tracking', 'event_action': 'Banner onmouseover', 'event_label': 'Center Fruit'}); 
});

jQuery('a.sqrbnr-ad-clk').click(function (event) {
  gtag('event', 'click', {'event_category': 'Banner Tracking', 'event_action': 'Banner onclick', 'event_label': 'Center Fruit Square'});
});

jQuery('a.sqrbnr-ad-clk').mouseover(function (event) {
  gtag('event', 'impressions', {'event_category': 'Banner Tracking', 'event_action': 'Banner onmouseover', 'event_label': 'Center Fruit Square'}); 
});*/
 
 })(jQuery);;
/**
 * @file
 * Attaches several event listener to a web page.
 */

(function ($, Drupal, drupalSettings) {

  /* eslint max-nested-callbacks: ["error", 4] */

  'use strict';

  Drupal.google_analytics = {};

  $(document).ready(function () {

    // Attach mousedown, keyup, touchstart events to document only and catch
    // clicks on all elements.
    $(document.body).on('mousedown keyup touchstart', function (event) {

      // Catch the closest surrounding link of a clicked element.
      $(event.target).closest('a,area').each(function () {

        // Is the clicked URL internal?
        if (Drupal.google_analytics.isInternal(this.href)) {
          // Skip 'click' tracking, if custom tracking events are bound.
          if ($(this).is('.colorbox') && (drupalSettings.google_analytics.trackColorbox)) {
            // Do nothing here. The custom event will handle all tracking.
            // console.info('Click on .colorbox item has been detected.');
          }
          // Is download tracking activated and the file extension configured
          // for download tracking?
          else if (drupalSettings.google_analytics.trackDownload && Drupal.google_analytics.isDownload(this.href)) {
            // Download link clicked.
            gtag('event', Drupal.google_analytics.getDownloadExtension(this.href).toUpperCase(), {
              event_category: 'Downloads',
              event_label: Drupal.google_analytics.getPageUrl(this.href),
              transport_type: 'beacon'
            });
          }
          else if (Drupal.google_analytics.isInternalSpecial(this.href)) {
            // Keep the internal URL for Google Analytics website overlay intact.
            // @todo: May require tracking ID
            gtag('config', drupalSettings.google_analytics.account, {
              page_path: Drupal.google_analytics.getPageUrl(this.href),
              transport_type: 'beacon'
            });
          }
        }
        else {
          if (drupalSettings.google_analytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
            // Mailto link clicked.
            gtag('event', 'Click', {
              event_category: 'Mails',
              event_label: this.href.substring(7),
              transport_type: 'beacon'
            });
          }
          else if (drupalSettings.google_analytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
            if (drupalSettings.google_analytics.trackDomainMode !== 2 || (drupalSettings.google_analytics.trackDomainMode === 2 && !Drupal.google_analytics.isCrossDomain(this.hostname, drupalSettings.google_analytics.trackCrossDomains))) {
              // External link clicked / No top-level cross domain clicked.
              gtag('event', 'Click', {
                event_category: 'Outbound links',
                event_label: this.href,
                transport_type: 'beacon'
              });
            }
          }
        }
      });
    });

    // Track hash changes as unique pageviews, if this option has been enabled.
    if (drupalSettings.google_analytics.trackUrlFragments) {
      window.onhashchange = function () {
        gtag('config', drupalSettings.google_analytics.account, {
          page_path: location.pathname + location.search + location.hash
        });
      };
    }

    // Colorbox: This event triggers when the transition has completed and the
    // newly loaded content has been revealed.
    if (drupalSettings.google_analytics.trackColorbox) {
      $(document).on('cbox_complete', function () {
        var href = $.colorbox.element().attr('href');
        if (href) {
          gtag('config', drupalSettings.google_analytics.account, {
            page_path: Drupal.google_analytics.getPageUrl(href)
          });
        }
      });
    }

  });

  /**
   * Check whether the hostname is part of the cross domains or not.
   *
   * @param {string} hostname
   *   The hostname of the clicked URL.
   * @param {array} crossDomains
   *   All cross domain hostnames as JS array.
   *
   * @return {boolean} isCrossDomain
   */
  Drupal.google_analytics.isCrossDomain = function (hostname, crossDomains) {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  };

  /**
   * Check whether this is a download URL or not.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isDownload
   */
  Drupal.google_analytics.isDownload = function (url) {
    var isDownload = new RegExp('\\.(' + drupalSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
    return isDownload.test(url);
  };

  /**
   * Check whether this is an absolute internal URL or not.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isInternal
   */
  Drupal.google_analytics.isInternal = function (url) {
    var isInternal = new RegExp('^(https?):\/\/' + window.location.host, 'i');
    return isInternal.test(url);
  };

  /**
   * Check whether this is a special URL or not.
   *
   * URL types:
   *  - gotwo.module /go/* links.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isInternalSpecial
   */
  Drupal.google_analytics.isInternalSpecial = function (url) {
    var isInternalSpecial = new RegExp('(\/go\/.*)$', 'i');
    return isInternalSpecial.test(url);
  };

  /**
   * Extract the relative internal URL from an absolute internal URL.
   *
   * Examples:
   * - https://mydomain.com/node/1 -> /node/1
   * - https://example.com/foo/bar -> https://example.com/foo/bar
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {string} getPageUrl
   *   Internal website URL.
   */
  Drupal.google_analytics.getPageUrl = function (url) {
    var extractInternalUrl = new RegExp('^(https?):\/\/' + window.location.host, 'i');
    return url.replace(extractInternalUrl, '');
  };

  /**
   * Extract the download file extension from the URL.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {string} getDownloadExtension
   *   The file extension of the passed url. e.g. 'zip', 'txt'
   */
  Drupal.google_analytics.getDownloadExtension = function (url) {
    var extractDownloadextension = new RegExp('\\.(' + drupalSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
    var extension = extractDownloadextension.exec(url);
    return (extension === null) ? '' : extension[1];
  };

})(jQuery, Drupal, drupalSettings);
;
(function ($, Drupal) {
    
  var $match_list = $('select[name=Select1]');
  $match_list.change(function () {
    $(".match_list").hide();
    $("#venue").hide();
    $("#match").show();
    $('select[name=Select2]').prop('selectedIndex',0);
      var selectedmatch = $(this).find('option:selected').text();
      // alert(selectedWorker);
      if(selectedmatch == 'All Matches')
      {
        $(".match_list").show();
        $("#venue").hide();
        $("#match").hide();
      }
        $.ajax({
          url: "/ajax_callback",
          type: "POST",
          data: { value: selectedmatch },
          dataType: "json",
          success: function(data)
          {
            $('#match').empty();
            $("#match").append("<div class='filter_match'>");
            $.each( data, function( key, value ) {
              if(value['status'] == 'Post')
              {
                value['status'] = 'COMPLETED';
              }
              if(value['t1logo']==''){
                value['t1logo']='/themes/custom/rcbbase/images/TBD.png';
              }
              if(value['t2logo']==''){
                value['t2logo']='/themes/custom/rcbbase/images/TBD.png';
              }
              $("#match").append("<div class='sec-2-col'><div class='red-band'><div class='band-inner'><span>"+value['matchdate']+"</span><span>"+value['matchdate1']+"</span><span>"+value['matchtime']+"</span></div><div class='stm-name'><p>"+value['groundname']+", "+value['city']+"</p></div></div><div class='grey-band'><p>"+ value['status'] +"</p></div><div class='book-band'></div></div><div class='grey-bg'><div class='lve-blk-lg'><span class='team1'>"+value['t1name']+"</span><img alt='royal' src='"+value['t1logo']+"'><span> Vs</span><img alt='' src='"+value['t2logo']+"'><span class='team2'>"+value['t2name']+"</span></div></div>");
              // alert( key + ": " + value['t1name'] );
            });
            $("#match").append('</div>');
          },
          error: function (jqXHR, textStatus, errorThrown)
          {
            
          }
      });
  });

  var $venue_list = $('select[name=Select2]');
  $venue_list.change(function () {
    $(".match_list").hide();
    $("#match").hide();
    $("#venue").show();
    $('select[name=Select1]').prop('selectedIndex',0);
      var selectedvenue = $(this).find('option:selected').text();
      // alert(selectedWorker);
      if(selectedvenue == 'All Venues')
      {
        $(".match_list").show();
        $("#venue").hide();
        $("#match").hide();
      }
        $.ajax({
          url: "/ajax_callback",
          type: "POST",
          data: { value: selectedvenue },
          dataType: "json",
          success: function(data)
          {
            $('#venue').empty();
            $("#venue").append("<div class='filter_match'>");
            $.each( data, function( key, value ) {
              if(value['status'] == 'Post')
              {
                value['status'] = 'COMPLETED';
              }
              if(value['t1logo']==''){
                value['t1logo']='/themes/custom/rcbbase/images/TBD.png';
              }
              if(value['t2logo']==''){
                value['t2logo']='/themes/custom/rcbbase/images/TBD.png';
              }
              $("#venue").append("<div class='sec-2-col'><div class='red-band'><div class='band-inner'><span>"+value['matchdate']+"</span><span>"+value['matchdate1']+"</span><span>"+value['matchtime']+"</span></div><div class='stm-name'><p>"+value['groundname']+", "+value['city']+"</p></div></div><div class='grey-band'><p>"+ value['status'] +"</p></div><div class='book-band'></div></div><div class='grey-bg'><div class='lve-blk-lg'><span class='team1'>"+value['t1name']+"</span><img alt='royal' src='"+value['t1logo']+"'><span> Vs</span><img alt='' src='"+value['t2logo']+"'><span class='team2'>"+value['t2name']+"</span></div></div>");
              // alert( key + ": " + value['t1name'] );
            });
            $("#venue").append('</div>');
          },
          error: function (jqXHR, textStatus, errorThrown)
          {
            
          }
      });
  });
  if ($('.stats_active').length > 0) {
      $('.stats_hide').hide();
  }
  // else{
  //   $('.stats_hide').show();
  // }

  var pathname = window.location.pathname;
  if(pathname=="/fixtures"){
  var header_top_off = $('.sec-2-col.lv-fx-cnt').offset().top;
  var header_bot_off = $('.head-innerwarp').innerHeight();
  var off_height = header_top_off - header_bot_off;
  $('html, body').animate({
    scrollTop: off_height
  }, 1000)
}

})(jQuery, Drupal);;
/*!
 * @preserve
 * jquery.scrolldepth.js | v1.0
 * Copyright (c) 2016 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var n,t,r,o,i={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1,trackerName:!1,dataLayer:"dataLayer"},a=e(window),l=[],c=!1,u=0;return e.scrollDepth=function(p){function s(e,i,a,l){var c=p.trackerName?p.trackerName+".send":"send";o?(o({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:e,eventLabel:i,eventValue:1,eventNonInteraction:p.nonInteraction}),p.pixelDepth&&arguments.length>2&&a>u&&(u=a,o({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:"Pixel Depth",eventLabel:d(a),eventValue:1,eventNonInteraction:p.nonInteraction})),p.userTiming&&arguments.length>3&&o({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:e,eventLabel:i,eventTiming:l})):(n&&(window[r](c,"event","Scroll Depth",e,i,1,{nonInteraction:p.nonInteraction}),p.pixelDepth&&arguments.length>2&&a>u&&(u=a,window[r](c,"event","Scroll Depth","Pixel Depth",d(a),1,{nonInteraction:p.nonInteraction})),p.userTiming&&arguments.length>3&&window[r](c,"timing","Scroll Depth",e,l,i)),t&&(_gaq.push(["_trackEvent","Scroll Depth",e,i,1,p.nonInteraction]),p.pixelDepth&&arguments.length>2&&a>u&&(u=a,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",d(a),1,p.nonInteraction])),p.userTiming&&arguments.length>3&&_gaq.push(["_trackTiming","Scroll Depth",e,l,i,100])))}function h(e){return{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}}function g(n,t,r){e.each(n,function(n,o){-1===e.inArray(n,l)&&t>=o&&(s("Percentage",n,t,r),l.push(n))})}function f(n,t,r){e.each(n,function(n,o){-1===e.inArray(o,l)&&e(o).length&&t>=e(o).offset().top&&(s("Elements",o,t,r),l.push(o))})}function d(e){return(250*Math.floor(e/250)).toString()}function m(){y()}function v(e,n){var t,r,o,i=null,a=0,l=function(){a=new Date,i=null,o=e.apply(t,r)};return function(){var c=new Date;a||(a=c);var u=n-(c-a);return t=this,r=arguments,0>=u?(clearTimeout(i),i=null,a=c,o=e.apply(t,r)):i||(i=setTimeout(l,u)),o}}function y(){c=!0,a.on("scroll.scrollDepth",v(function(){var n=e(document).height(),t=window.innerHeight?window.innerHeight:a.height(),r=a.scrollTop()+t,o=h(n),i=+new Date-D;return l.length>=p.elements.length+(p.percentage?4:0)?(a.off("scroll.scrollDepth"),void(c=!1)):(p.elements&&f(p.elements,r,i),void(p.percentage&&g(o,r,i)))},500))}var D=+new Date;p=e.extend({},i,p),e(document).height()<p.minHeight||(p.gaGlobal?(n=!0,r=p.gaGlobal):"function"==typeof ga?(n=!0,r="ga"):"function"==typeof __gaTracker&&(n=!0,r="__gaTracker"),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(t=!0),"function"==typeof p.eventHandler?o=p.eventHandler:"undefined"==typeof window[p.dataLayer]||"function"!=typeof window[p.dataLayer].push||p.gtmOverride||(o=function(e){window[p.dataLayer].push(e)}),e.scrollDepth.reset=function(){l=[],u=0,a.off("scroll.scrollDepth"),y()},e.scrollDepth.addElements=function(n){"undefined"!=typeof n&&e.isArray(n)&&(e.merge(p.elements,n),c||y())},e.scrollDepth.removeElements=function(n){"undefined"!=typeof n&&e.isArray(n)&&e.each(n,function(n,t){var r=e.inArray(t,p.elements),o=e.inArray(t,l);-1!=r&&p.elements.splice(r,1),-1!=o&&l.splice(o,1)})},m())},e.scrollDepth});;
/**
 * @file
 * Provides Scroll Depth Analytics.
 *
 * Analytics tracking on page scrolling.
 */

(function ($) {
  'use strict';
  Drupal.behaviors.scroll_depth_analytics = {
    attach: function (context, drupalSettings) { 
      if ($.scrollDepth) {
        var elements_to_track = [];
		//console.log(drupalSettings.scroll_depth_analytics.scroll_elements);
		var lines = drupalSettings.scroll_depth_analytics.scroll_elements.split(/\n/);
        for (var i=0; i < lines.length; i++) {
        // only push this line if it contains a non whitespace character.
        if (/\S/.test(lines[i])) {
          elements_to_track.push($.trim(lines[i]));
        }
      }
		jQuery.scrollDepth({
		  minHeight: 200,
          elements: elements_to_track,
          percentage: true,
          eventHandler: function(data) {
			//console.log(data);
            ga('send', 'event', data.eventCategory, data.eventAction, data.eventLabel, data.eventValue);
          }
        });

       
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
;
