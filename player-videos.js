/**
 * player-videos.js — shared chip video popup for all pages
 * Click any .chip-vid-wrap on any page to open centered popup.
 */

var EMPTY_CHAIR='https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_213835_09f67193-0851-4ebd-bc57-e5f5c59e9867.mp4';
var PLAYER_VIDEOS={
  'Tod':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260703_162117_4b94b2cb-f9ef-477b-8788-ae755d21f253.mp4',
  'Guy':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260703_162101_4c39a09f-d640-4818-bf64-9cb291e103f4.mp4',
  'Vince':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_010620_592264b0-9b9e-4a11-9482-83a4a956a040.mp4',
  'Karey':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260703_162123_109abb8a-d63f-4f00-b0d7-78e173bef9e1.mp4',
  'JH':     'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_204322_83aba4ed-0fe4-425a-a7f5-80969d9ba5cb.mp4',
  'Chris F':'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_161027_80ffe4b9-fb00-4639-a035-cb960811a212.mp4',
  'Jacob':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_012313_c6b21a9c-acdc-4b49-af6b-f4f9c97e3d04.mp4',
  'Michael':'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_011314_1bc09a3c-79d0-4396-a64b-ad38e8092fdb.mp4',
  'Jay':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_160901_94202ca0-bffc-4b57-aff2-dfa5f48859c4.mp4',
  'Nate':   'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_204043_afb87cc7-dcb3-4da5-aad6-67d1b879cf01.mp4',
  'Chris P':'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_161910_d7d708b5-f0e8-4b4b-8054-6824630f160b.mp4',
  'Philo':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_213435_685160ae-b7ac-4f6b-b1a8-987141b9e61e.mp4',
  'Tom':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_212714_5f1abf3f-a0c2-4dea-9b8c-31df7bd5d2fe.mp4',
  'Charlie':'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_135544_9575e9a0-9da6-44b2-a530-2a90092c6f92.mp4',
  'Eric':   'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_155437_92512fa0-8e3b-4285-8169-0f62922acea9.mp4',
  'Toner':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_154307_09cb66b0-b3fe-4f67-8c00-9d7f7a44e80a.mp4',
  'Brian':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_213850_10e9bca0-11a2-44d6-a308-82267fb21319.mp4',
  'Jake':   'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_213853_11fd850c-570d-498f-9cb1-34df9eda41ba.mp4',
  'Jeremy': 'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_214545_a5687d86-a66b-4eec-a7a9-443ad75ea565.mp4',
  'Sal':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_214547_7927dcc1-f210-421b-b689-9b40ec1c5ead.mp4',
  'Tim':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_214550_ab3814b6-caf2-40be-8a23-eb0a97783ad6.mp4',
  'Justin': 'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260702_214553_3784f7f6-40c3-4eab-86b0-d1120f892d55.mp4'
};

document.addEventListener('DOMContentLoaded',function(){
  // Styles
  var style=document.createElement('style');
  style.textContent=[
    '#chipVidPopup{position:fixed;z-index:9999;width:min(360px,92vw);border-radius:14px;overflow:hidden;',
    'box-shadow:0 12px 48px rgba(0,0,0,0.88),0 0 0 2px rgba(245,200,66,0.38);',
    'opacity:0;pointer-events:none;transition:opacity 0.18s ease;background:#000;',
    'top:50%;left:50%;transform:translate(-50%,-50%)}',
    '#chipVidPopup.show{opacity:1;pointer-events:auto}',
    '#chipVidPopup video{width:100%;display:block}',
    '.cvp-label{position:absolute;bottom:0;left:0;right:0;padding:5px 10px;',
    'background:linear-gradient(transparent,rgba(0,0,0,0.75));color:#fff;',
    'font-size:0.72rem;font-weight:600;font-family:Inter,sans-serif;letter-spacing:0.03em}',
    '.cvp-close{position:absolute;top:6px;right:8px;width:26px;height:26px;',
    'background:rgba(0,0,0,0.65);border-radius:50%;color:#fff;font-size:15px;',
    'line-height:26px;text-align:center;cursor:pointer;z-index:10}',
    '#chipVidOverlay{display:none;position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,0.5)}',
    '#chipVidOverlay.show{display:block}'
  ].join('');
  document.head.appendChild(style);

  // Overlay (click outside to close)
  var overlay=document.createElement('div');
  overlay.id='chipVidOverlay';
  document.body.appendChild(overlay);

  // Popup
  var popup=document.createElement('div');
  popup.id='chipVidPopup';
  var vid=document.createElement('video');
  vid.loop=true;vid.muted=true;
  vid.setAttribute('playsinline','');vid.setAttribute('webkit-playsinline','');
  var lbl=document.createElement('div');lbl.className='cvp-label';lbl.id='cvpLbl';
  var cls=document.createElement('div');cls.className='cvp-close';cls.id='cvpClose';cls.textContent='✕';
  popup.appendChild(vid);popup.appendChild(lbl);popup.appendChild(cls);
  document.body.appendChild(popup);

  var activeWrap=null;

  function hide(){
    popup.classList.remove('show');
    overlay.classList.remove('show');
    vid.pause();vid.src='';
    activeWrap=null;
  }

  function show(wrap){
    var url=wrap.dataset.vid;if(!url)return;
    vid.src=url;vid.play().catch(function(){});
    lbl.textContent=wrap.dataset.name||'';
    popup.classList.add('show');
    overlay.classList.add('show');
    activeWrap=wrap;
  }

  // Click chip to open, click X or overlay to close — works on ALL devices, ALL pages
  document.body.addEventListener('click',function(e){
    if(e.target.closest('#cvpClose')||e.target===overlay){hide();return;}
    if(popup.contains(e.target))return;
    var w=e.target.closest&&e.target.closest('.chip-vid-wrap');
    if(!w){return;}
    if(w===activeWrap){hide();return;}
    show(w);
  });
});
