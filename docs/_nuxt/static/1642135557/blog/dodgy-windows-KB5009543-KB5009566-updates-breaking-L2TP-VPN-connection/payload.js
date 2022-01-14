__NUXT_JSONP__("/blog/dodgy-windows-KB5009543-KB5009566-updates-breaking-L2TP-VPN-connection", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:[{article:{slug:"dodgy-windows-KB5009543-KB5009566-updates-breaking-L2TP-VPN-connection",description:"L2TP VPN connections broken by KB5009543 and KB5009566 updates",title:q,img:"\u002Fblog\u002Fimages\u002FDodgy-Windows-KB5009543-KB5009566-updates\u002Fbroken-windows-post-icon.jpg",alt:q,author:{name:"Namt",bio:"All about Nam Truong",image:"\u002Fblog\u002Fimages\u002Fmy-first-blog-post\u002Ffirst-post-image.jpg"},toc:[],body:{type:"root",children:[{type:b,tag:h,props:{id:"january-2022-windows-updates"},children:[{type:b,tag:f,props:{href:"#january-2022-windows-updates",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:"January-2022 Windows Updates"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"On January 11th, Microsoft released Windows updates to fix security vulnerabilities and bugs as part of the January 2022 Patch."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"These updates include KB5009566 for Windows 11 and KB5009543 for Windows 10 2004, 20H1, and 21H1."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Windows 10 users and administrators report problems making L2TP VPN connections after installing the recent Windows 10 KB5009543 and Windows 11 KB5009566 cumulative updates."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{id:"updates-breaking-l2tp-connections"},children:[{type:b,tag:f,props:{href:"#updates-breaking-l2tp-connections",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:"Updates breaking L2TP connections"}]},{type:a,value:c},{type:b,tag:"img",props:{src:"\u002Fblog\u002Fimages\u002FDodgy-Windows-KB5009543-KB5009566-updates\u002Ffailed-connecting-to-VPN.jpg",alt:"windows updates",title:"Windows-KB5009543-KB5009566-updates",width:"80%"},children:[]},{type:a,value:c},{type:b,tag:g,props:{},children:[]},{type:a,value:c},{type:b,tag:g,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{id:"microsoft-confirms-bug-provides-mitigation"},children:[{type:b,tag:f,props:{href:"#microsoft-confirms-bug-provides-mitigation",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:"Microsoft confirms bug, provides mitigation"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Microsoft confirmed on Thursday that \"Certain IPSEC connections might fail\" and that they will fix the issue in an upcoming release of Windows."}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"\"After installing KB5009543, IP Security (IPSEC) connections which contain a Vendor ID might fail. VPN connections using Layer 2 Tunneling Protocol (L2TP) or IP security Internet Key Exchange (IPSEC IKE) might also be affected.\"\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Microsoft states that it may be possible to mitigate the bug by disabling the 'Vendor ID,' if possible, on the VPN server."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\""},{type:b,tag:d,props:{},children:[{type:a,value:"To mitigate the issue for some VPNs, you can disable Vendor ID within the server-side settings. Note: Not all VPN servers have the option to disable Vendor ID from being used"}]},{type:a,value:",\" Microsoft explains in a new known update issue."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Windows users can remove the KB5009566 and KB5009543 updates using the following commands from an Elevated Command Prompt."}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:w,props:{},children:[{type:a,value:" Windows 10: wusa \u002Funinstall \u002Fkb:5009543\n Windows 11: wusa \u002Funinstall \u002Fkb:5009566\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{id:"uninstall-windows-kb5009543--kb5009566-updates"},children:[{type:b,tag:f,props:{href:"#uninstall-windows-kb5009543--kb5009566-updates",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:"Uninstall Windows KB5009543 & KB5009566 updates"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Here are the steps to uninstall the patch "},{type:b,tag:o,props:{},children:[{type:a,value:x}]},{type:a,value:y},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:A},{type:b,tag:o,props:{},children:[{type:a,value:B}]},{type:a,value:C},{type:b,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:")."}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Go to "},{type:b,tag:d,props:{},children:[{type:a,value:"Control Panel"}]},{type:a,value:p},{type:b,tag:d,props:{},children:[{type:a,value:"Programs"}]},{type:a,value:p},{type:b,tag:d,props:{},children:[{type:a,value:"Programs and Features"}]},{type:a,value:p},{type:b,tag:d,props:{},children:[{type:a,value:"Installed Updates"}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Depending on your OS click the patch "},{type:b,tag:o,props:{},children:[{type:a,value:x}]},{type:a,value:y},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:A},{type:b,tag:o,props:{},children:[{type:a,value:B}]},{type:a,value:C},{type:b,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:") --\u003E"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Click "},{type:b,tag:d,props:{},children:[{type:a,value:"Uninstall"}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Once the uninstallation is completed, reboot your machine and try connecting to VPN."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{},children:[]},{type:b,tag:g,props:{},children:[]}]},{type:a,value:c},{type:b,tag:h,props:{id:"references"},children:[{type:b,tag:f,props:{href:"#references",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:"References"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.bleepingcomputer.com\u002Fnews\u002Fmicrosoft\u002Fnew-windows-kb5009543-kb5009566-updates-break-l2tp-vpn-connections\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"bleepingcomputer - New Windows KB5009543, KB5009566 updates break L2TP VPN connections"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"info-box",props:{placeholder:E},children:[{type:a,value:F},{type:b,tag:"template",props:{"#info-box":E},children:[],content:[{type:a,value:F}]},{type:a,value:c}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fdodgy-windows-KB5009543-KB5009566-updates-breaking-L2TP-VPN-connection",extension:".md",createdAt:"2022-01-14T00:41:18.087Z",updatedAt:"2022-01-14T00:50:16.201Z"},prev:{slug:"my-3rd-blog-post copy",title:"My 3rd Blog Post"},next:null}],fetch:{},mutations:[]}}("text","element","\n","em","p","a","br","h1","true",-1,"span","icon","icon-link","li","strong"," --\u003E ","Dodgy Windows KB5009543 & KB5009566 updates","div","nuxt-content-highlight","pre","language-text","line-numbers","code","KB5009566"," (for ","Windows 11",") or ","KB5009543"," (on ","Windows 10","","\n  ")));