/**
 * player-videos.js — shared chip video popup for all pages
 * Include after data.js on any page. Wraps any .chip-vid-wrap element.
 */

var EMPTY_CHAIR='https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_213835_09f67193-0851-4ebd-bc57-e5f5c59e9867.mp4';
var PLAYER_VIDEOS={
  'Tod':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_214131_76168f74-3ec9-4a95-b136-7b1de80ef117.mp4',
  'Guy':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_212235_e578a1a3-abc9-4e18-babc-94a10e6efa37.mp4',
  'Vince':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_212238_aa049926-b836-4322-8fe2-707968e04c1b.mp4',
  'Karey':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_212242_6e62b2f0-d880-4a36-a455-9b1da111fdf2.mp4',
  'JH':     'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_212246_886335fe-1bd6-48bf-972a-a14a3667ed2f.mp4',
  'Chris F':'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_214136_75d9e811-bc73-465f-ac85-ba74f6694363.mp4',
  'Jacob':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_212257_d1f64cfe-f0d3-4a68-8f0f-e437f07fc15b.mp4',
  'Michael':'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_212659_fa9a9cd3-3edc-4786-b8fc-797261ccf325.mp4',
  'Jay':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_212702_70786573-b9d0-4ff8-98ac-87dcbf60d3c9.mp4',
  'Nate':   'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_212705_37b57be9-1aa1-4506-bb4d-fc05631da8f2.mp4',
  'Chris P':'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_212708_195e6319-645b-42b5-98c6-d5c741f4155c.mp4',
  'Philo':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_213435_685160ae-b7ac-4f6b-b1a8-987141b9e61e.mp4',
  'Tom':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_212714_5f1abf3f-a0c2-4dea-9b8c-31df7bd5d2fe.mp4',
  'Charlie':'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_213839_7a2e0087-39f0-414f-b421-8523693bb9b5.mp4',
  'Eric':   'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_213844_c4bc9712-ba93-414e-b241-c50b62ebc874.mp4',
  'Toner':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_213847_1bdb68c3-0a79-4f10-8644-f378bcc637a8.mp4',
  'Brian':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_213850_10e9bca0-11a2-44d6-a308-82267fb21319.mp4',
  'Jake':   'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_213853_11fd850c-570d-498f-9cb1-34df9eda41ba.mp4',
  'Jeremy': 'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_214545_a5687d86-a66b-4eec-a7a9-443ad75ea565.mp4',
  'Sal':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_214547_7927dcc1-f210-421b-b689-9b40ec1c5ead.mp4',
  'Tim':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_214550_ab3814b6-caf2-40be-8a23-eb0a97783ad6.mp4',
  'Justin': 'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_214553_3784f7f6-40c3-4eab-86b0-d1120f892d55.mp4'
};

(function(){
  // Inject popup styles once
  var style=document.createElement('style');
  style.textContent=[
    '#chipVidPopup{position:fixed;z-index:9999;width:280px;border-radius:14px;overflow:hidden;',
    'box-shadow:0 12px 48px rgba(0,0,0,0.88),0 0 0 2px rgba(245,200,66,0.38);',
    'opacity:0;pointer-events:none;transition:opacity 0.18s ease;background:#000}',
    '#chipVidPopup.show{opacity:1;pointer-events:auto}',
    '#chipVidPopup video{width:100%;display:block}',
    '.cvp-label{position:absolute;bottom:0;left:0;right:0;padding:5px 10px;',
    'background:linear-gradient(transparent,rgba(0,0,0,0.75));color:#fff;',
    'font-size:0.72rem;font-weight:600;font-family:Inter,sans-serif;letter-spacing:0.03em}',
    '.cvp-close{position:absolute;top:6px;right:8px;width:24px;height:24px;',
    'background:rgba(0,0,0,0.6);border-radius:50%;color:#fff;font-size:14px;',
    'line-height:24px;text-align:center;cursor:pointer;display:none;z-index:10}',
    '@media(max-width:768px){#chipVidPopup.show .cvp-close{display:block}}'
  ].join('');
  document.head.appendChild(style);

  // Build popup element
  var popup=document.createElement('div');
  popup.id='chipVidPopup';
  var vid=document.createElement('video');
  vid.loop=true;vid.muted=true;
  vid.setAttribute('playsinline','');vid.setAttribute('webkit-playsinline','');
  var lbl=document.createElement('div');lbl.className='cvp-label';lbl.id='cvpLbl';
  var cls=document.createElement('div');cls.className='cvp-close';cls.id='cvpClose';cls.textContent='✕';
  popup.appendChild(vid);popup.appendChild(lbl);popup.appendChild(cls);
  document.body.appendChild(popup);

  var PW=280,activeWrap=null;
  var isMob=('ontouchstart' in window)||(navigator.maxTouchPoints>0);

  function hide(){popup.classList.remove('show');vid.pause();vid.src='';activeWrap=null;}

  function posDesktop(x,y){
    popup.style.transform='';
    popup.style.width=PW+'px';
    var vw=window.innerWidth,vh=window.innerHeight;
    var ph=popup.offsetHeight||157;
    var left=x+22,top=y-ph/2;
    if(left+PW>vw-8)left=x-PW-22;
    if(top<8)top=8;if(top+ph>vh-8)top=vh-ph-8;
    popup.style.left=left+'px';popup.style.top=top+'px';
  }

  function posMobile(){
    var mw=Math.min(320,window.innerWidth-20);
    popup.style.width=mw+'px';
    popup.style.left='50%';
    popup.style.top='50%';
    popup.style.transform='translate(-50%,-50%)';
  }

  function show(wrap,x,y){
    var url=wrap.dataset.vid;if(!url)return;
    vid.src=url;vid.play().catch(function(){});
    lbl.textContent=wrap.dataset.name||'';
    popup.classList.add('show');
    if(isMob)posMobile();else posDesktop(x,y);
    activeWrap=wrap;
  }

  // Desktop: hover
  if(!isMob){
    document.body.addEventListener('mouseover',function(e){
      var w=e.target.closest&&e.target.closest('.chip-vid-wrap');
      if(!w||w===activeWrap)return;
      show(w,e.clientX,e.clientY);
    });
    document.body.addEventListener('mousemove',function(e){
      if(activeWrap)posDesktop(e.clientX,e.clientY);
    });
    document.body.addEventListener('mouseout',function(e){
      var from=e.target.closest&&e.target.closest('.chip-vid-wrap');
      var to=e.relatedTarget;
      if(from&&(!to||!(to.closest&&to.closest('.chip-vid-wrap'))))hide();
    });
  } else {
    // Mobile: tap chip to open, tap X or outside to close
    document.body.addEventListener('click',function(e){
      if(e.target.closest('#cvpClose')){hide();return;}
      var w=e.target.closest&&e.target.closest('.chip-vid-wrap');
      if(!w){hide();return;}
      if(w===activeWrap){hide();return;}
      show(w,0,0);
    });
  }
})();
