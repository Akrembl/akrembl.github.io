/* Shared project data for all design concepts. Source: Akrem's Behance + CV. */
(function(){
  var ROOT = new URL('..', document.currentScript.src).href; // site root, ends with "/"
  var CDN = "https://mir-s3-cdn-cf.behance.net/projects/max_808/";
  var CATS = {brands:"Brands", music:"Music & live", travel:"Travel & lifestyle", weddings:"Weddings", motion:"Motion & AI"};
  var P = [
    {id:"SL",t:"Sri Lanka Surf Trip",file:"SRI_LANKA_SURF.mov",cat:"travel",img:"assets/still-LANKA2.jpg",local:true,url:"258567637/Sri-Lanka-surf-trip",place:"South coast, Sri Lanka",code:"CMB",
     d:"Surf and travel film from the south coast of Sri Lanka: surfers, fishermen up before the sun, harbour boats and street life between sessions. Shot handheld, finished with a soft filmic grade.",
     role:"Director, camera, edit, color",client:"Personal · travel",
     takes:[["Film 01","assets/film-LANKA2.mp4","assets/still-LANKA2.jpg"],["Film 02","assets/film-LANKA1.mp4","assets/still-LANKA1.jpg"],["Postcard 1","assets/loop-postcard1.mp4","assets/still-postcard1.jpg"],["Postcard 4","assets/loop-postcard4.mp4","assets/still-postcard4.jpg"],["Postcard 5","assets/loop-postcard5.mp4","assets/still-postcard5.jpg"],["Postcard 6","assets/loop-postcard6.mp4","assets/still-postcard6.jpg"]]},
    {id:"SUM",t:"Summer Lifestyle Reels",file:"SUMMER_REELS.mov",cat:"travel",img:"assets/still-summer-vol.jpg",local:true,takes:[["Summer film","assets/film-summer-vol.mp4","assets/still-summer-vol.jpg"]],url:"254310487/Summer-Lifestyle-Reels",place:"Tunisia",code:"TUN",d:"Spontaneous summer moments filmed with friends, shot casually and finished with a film-inspired grade for a nostalgic, timeless feel.",role:"Camera, edit, color",client:"Short form · Instagram",v:["B9ogRXffDw2","3icnXhg_8Jt","IijB-CCvQoL","A7jxXa-DUIT","Hc3aYrXPHBe"]},
    {id:"MIA",t:"MIA Qatar",file:"MIA_DOHA.mov",cat:"travel",img:"19be7f258568073.Y3JvcCwxMDM1LDgxMCwxNzksMA.png",url:"258568073/MIA-Qatar",place:"Doha, Qatar",code:"DOH",d:"A location film at the Museum of Islamic Art in Doha.",role:"Camera, edit, color",client:"Location film · Doha",v:["8b5LIk2Kzzf"]},
    {id:"FC",t:"Final Choice Campaign",file:"FINAL_CHOICE.mov",cat:"brands",img:"1e0b93254309917.Y3JvcCwxNDk1LDExNzAsNTE4LDA.png",url:"254309917/Clothing-Brand-Campaign",place:"Studio",code:"FCH",d:"A campaign for Final Choice across two T-shirt drops: bold visual storytelling, dynamic product shots and a contemporary fashion look.",role:"Camera, edit, color",client:"Final Choice · clothing",v:["IVgEcwRFqwy","F_xPCIfjwsC","UuTL_8BgXxM","Rb2wS3KR5A7","448uCPXmmZI","8BFnvpkDKPg"]},
    {id:"AY",t:"Ayla Brand",file:"AYLA_CAMPAIGN.mov",cat:"brands",img:"cdbdbd240004523.Y3JvcCwxNjQ2LDEyODcsNTEzLDE2Nw.png",url:"240004523/Ayla-Clothing-Brand",place:"Tunisia",code:"AYL",d:"Three videos for Ayla's new collection and in-store experience: clothing details, styling and a clean, modern fashion feel.",role:"Camera, edit, color",client:"Ayla · clothing",v:["3rrYanBjgHR","JpiARRW9Goo","T2dbyXHY-z5"]},
    {id:"NS",t:"Najla Skander",file:"NAJLA_SKANDER_MV.mov",cat:"music",img:"b8ef7d254309763.Y3JvcCwxNDk1LDExNzAsNTE4LDA.png",url:"254309763/Music-Video",place:"Tunisia",code:"NJL",d:"A last-minute music video: shot in two hours with no planning, then edited and graded in two days.",role:"Camera, edit, color",client:"Music video",v:["LQACFg_UDV3"]},
    {id:"WED",t:"Wedding Teaser",file:"WEDDING_TEASER.mov",cat:"weddings",img:"69ed82254309289.Y3JvcCwxNDk0LDExNjksMjg4LDA.jpg",url:"254309289/Wedding-Cinematic-Teaser",place:"Tunisia",code:"WED",d:"A cinematic wedding teaser, cut for emotion and pace.",role:"Camera, edit, color",client:"Wedding film",v:["72Sn7Au9rDz"]},
    {id:"INT",t:"Intro: Text & 3D",file:"INTRO_3D_MOTION.mov",cat:"motion",img:"b4cce2240021981.Y3JvcCw1MTUsNDAyLDIxMSwxNjg.png",url:"240021981/Intro-Text-Animation-3D-Motion",place:"Edit bay",code:"3DM",d:"A title intro built with text animation and 3D motion.",role:"Motion design",client:"Motion graphics",v:["TAP4BVa_tom"]},
    {id:"AI",t:"AI Realism",file:"AI_CONSISTENCY.mov",cat:"motion",img:"f9ad81254310143.Y3JvcCwxMDE1LDc5NCwyMCwxODY.jpg",url:"254310143/AI-Generated-Videos",place:"Edit bay",code:"AIR",d:"AI-generated videos exploring photorealism, facial consistency and continuity, using my own face and friends' as references across scenes and styles.",role:"Concept, generation, edit",client:"AI video",v:["HvxHo5hm8iD","U9DKjbtRhib","FNNeBmhQrUi","B8xF3Qu7aId","S2vHVcro7Xd","QWv5PoC4Av3"]}
  ];
  P.forEach(function(p){ p.n = (p.takes||[]).length + (p.v||[]).length; p.src = p.local ? ROOT + p.img : CDN + p.img; });
  window.AKREM = {
    P:P, CATS:CATS, CDN:CDN, ROOT:ROOT,
    PLAYER:"https://www-ccv.adobe.io/v1/player/ccv/", BH:"https://www.behance.net/gallery/",
    canEmbed: !/claude|anthropic/i.test(location.hostname),
    embed: function(id){ return "https://www-ccv.adobe.io/v1/player/ccv/" + id + "/embed?api_key=behance1&bgcolor=%23000000"; },
    esc: function(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  };
})();
