exports.id=205,exports.ids=[205],exports.modules={807:(e,t,i)=>{Promise.resolve().then(i.bind(i,6564)),Promise.resolve().then(i.t.bind(i,2481,23))},321:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2994,23)),Promise.resolve().then(i.t.bind(i,6114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,9671,23)),Promise.resolve().then(i.t.bind(i,1868,23)),Promise.resolve().then(i.t.bind(i,4759,23))},6564:(e,t,i)=>{"use strict";i.d(t,{default:()=>c});var s=i(326),l=i(7577);let n=[{id:1,url:"/",label:"Home"},{id:2,url:"/About",label:"About"},{id:3,url:"/Services",label:"Services"},{id:4,url:"/projects",label:"Projects"},{id:5,url:"/Review",label:"Reviews"},{id:6,url:"/contact",label:"Contacts"}];var r=i(434),a=i(8785);let o=({showNav:e,closeNav:t})=>{let i=e?"translate-x-0":"translate-x-[-100%]";return(0,s.jsxs)("div",{children:[s.jsx("div",{className:` fixed ${i} transform transition-all duration-500  inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}),(0,s.jsxs)("div",{className:`fixed text-white ${i} transform transition-all duration-500 delay-300 flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] 
        space-y-6 z-[10000] `,children:[n.map(e=>s.jsx(r.default,{href:e.url,children:s.jsx("p",{className:"nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]",children:e.label})},e.id)),s.jsx(a.Fk5,{onClick:t,className:"absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6  text-white"})]})]})};var p=i(6226),h=i(8010);let d=({openNav:e})=>{let[t,i]=(0,l.useState)();return s.jsx("div",{className:"fixed h-[14vh] z-[10] bg-blue-950 w-full",children:(0,s.jsxs)("div",{className:"flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto",children:[s.jsx(p.default,{src:"/images/logo1.png",alt:"logo",width:70,height:70,className:"ml-[0.3rem] sm:ml-0"}),(0,s.jsxs)("div",{className:"flex items-center space-x-10 ",children:[s.jsx("div",{className:"hidden lg:flex items-center space-x-8",children:n.map(e=>s.jsx(r.default,{href:e.url,children:s.jsx("p",{className:"nav_link",children:e.label})},e.id))}),(0,s.jsxs)("div",{className:"flex items-center space-x-4 ",children:[s.jsx(r.default,{className:"md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg",target:"_blank",href:"https://github.com/ayesha-aziz123",children:"Hire me"}),s.jsx(h.AQw,{onClick:e,className:"w-8 h-8 cursor-pointer text-white lg:hidden"})]})]})]})})},c=()=>{let[e,t]=(0,l.useState)(!1);return(0,s.jsxs)("div",{children:[s.jsx(d,{openNav:()=>t(!0)}),s.jsx(o,{showNav:e,closeNav:()=>t(!1)})]})}},2705:(e,t,i)=>{"use strict";i.d(t,{default:()=>c});var s=i(326),l=i(7577);"function"==typeof SuppressedError&&SuppressedError;let n=(e,t,i,s)=>{e.style.transition=`${t} ${i}ms ${s}`},r=(e,t,i)=>Math.min(Math.max(e,t),i);class a{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{let{width:t,height:i}=e,s=Math.sqrt(Math.pow(t,2)+Math.pow(i,2));return{width:s,height:s}},this.setSize=e=>{let t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,i,s)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,i,s)},this.updateAngle=(e,t)=>{let{xPercentage:i,yPercentage:s}=e;this.glareAngle=(i?180/Math.PI*Math.atan2(s,-i):0)-(t?180:0)},this.updateOpacity=(e,t,i,s)=>{let{xPercentage:l,yPercentage:n}=e,{glarePosition:a,glareReverse:o,glareMaxOpacity:p}=t,h=i?-1:1,d=s?-1:1,c=o?-1:1,g=0;switch(a){case"top":g=-l*h*c;break;case"right":g=n*d*c;break;case"bottom":case void 0:g=l*h*c;break;case"left":g=-n*d*c;break;case"all":g=Math.hypot(l,n)}let m=r(g,0,100);this.glareOpacity=m*p/100},this.render=e=>{let{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";let i=this.calculateGlareSize(e),s={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${i.width}px`,height:`${i.height}px`};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"}),Object.assign(this.glareEl.style,s)}}class o{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{let{xPercentage:i,yPercentage:s}=e,{tiltMaxAngleX:l,tiltMaxAngleY:n}=t;this.tiltAngleX=i*l/100,this.tiltAngleY=-(s*n/100*1)},this.updateTiltManualInput=(e,t)=>{let{tiltAngleXManual:i,tiltAngleYManual:s,tiltMaxAngleX:l,tiltMaxAngleY:n}=t;(null!==i||null!==s)&&(this.tiltAngleX=null!==i?i:0,this.tiltAngleY=null!==s?s:0,e.xPercentage=100*this.tiltAngleX/l,e.yPercentage=100*this.tiltAngleY/n)},this.updateTiltReverse=e=>{let t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{let{tiltAxis:t}=e;this.tiltAngleX=r(this.tiltAngleX,-90,90),this.tiltAngleY=r(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{let{tiltMaxAngleX:t,tiltMaxAngleY:i}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}let p=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class h extends l.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>(function(e,t,i,s){return new(i||(i=Promise))(function(l,n){function r(e){try{o(s.next(e))}catch(e){n(e)}}function a(e){try{o(s.throw(e))}catch(e){n(e)}}function o(e){var t;e.done?l(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(r,a)}o((s=s.apply(e,t||[])).next())})})(this,void 0,void 0,function*(){if(!window.DeviceOrientationEvent)return;let e=DeviceOrientationEvent.requestPermission;"function"==typeof e?"granted"===(yield e())&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)}),this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{let{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{let{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){let e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{let{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":{let{tiltAngleXInitial:e,tiltAngleYInitial:t,tiltMaxAngleX:i,tiltMaxAngleY:s}=this.props;this.wrapperEl.clientPosition.xPercentage=r(e/i*100,-100,100),this.wrapperEl.clientPosition.yPercentage=r(t/s*100,-100,100),this.wrapperEl.scale=1}}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;let{tiltMaxAngleX:t,tiltMaxAngleY:i}=this.props,s=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=s/i*100,this.wrapperEl.clientPosition.xPercentage=r(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=r(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{let{tiltEnable:t,flipVertically:i,flipHorizontally:s}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,s)},this.updateClientInput=()=>{let e,t;let{trackOnWindow:i}=this.props;if(i){let{x:i,y:s}=this.wrapperEl.clientPosition;e=s/window.innerHeight*200-100,t=i/window.innerWidth*200-100}else{let{size:{width:i,height:s,left:l,top:n},clientPosition:{x:r,y:a}}=this.wrapperEl;e=(a-n)/s*200-100,t=(r-l)/i*200-100}this.wrapperEl.clientPosition.xPercentage=r(e,-100,100),this.wrapperEl.clientPosition.yPercentage=r(t,-100,100)},this.updateFlip=()=>{let{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new o,this.initGlare(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;let e=new CustomEvent("autoreset");this.mainLoop(e);let t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){let e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){let e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){let{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new a(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){let{onMove:t}=this.props;if(!t)return;let i=0,s=0;this.glare&&(i=this.glare.glareAngle,s=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:s,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){let{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){let{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){let{transitionSpeed:e,transitionEasing:t}=this.props;n(this.wrapperEl.node,"all",e,t),this.glare&&n(this.glare.glareEl,"opacity",e,t)}render(){let{children:e,className:t,style:i}=this.props;return l.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:i},e)}}h.defaultProps=p;var d=i(6226);let c=({service:e})=>(0,s.jsxs)(h,{className:"shadow-2xl rounded-lg p-6 bg-blue-900",children:[s.jsx(d.default,{src:e.icon,alt:e.title,width:50,height:50}),s.jsx("h1",{className:"mt-4 text-lg font-bold text-gray-100",children:e.title}),s.jsx("p",{className:"mt-3 text-sm text-white text-opacity-80",children:e.description})]})},7086:(e,t,i)=>{"use strict";i.d(t,{GS:()=>l,Ny:()=>s,Yf:()=>o,ZU:()=>a,o8:()=>r,ub:()=>n});let s={name:"Muhammad Mudassar Sattar",position:"Full Stack Developer",description:"Hi Im Muhammad Mudassar Sattar, a 19-year-old web Developer from Karachi Pakistan. Ive also developed a strong interest in web development. Im Expertise in HTML, CSS, and JavaScript, TypeScript TailwindCSS to create responsive and functional websites. Looking ahead, I'm also planning to dive deeper React into frameworks like Next.js Powerful Framework ro enhance to deliver high-quality modern web solutions. My goal is to combine my passion for learning with technical expertise to create efficient, user-friendly digital experiences. Lets collaborate and bring your ideas to life!",profilePic:"/mudassar.png"},l={title:"Crafting Web Application with Passion and Precision",description:"At webdev warriors, were a dedicated team of designers and developers committed to delivering tailored web solutions. With a blend of creativity and technical expertise, we help businesses elevate their online presence and achieve their goals",client:"50+",experience:"1+",project:"150+",website:"80+"},n=[{id:1,title:" Web Applications",description:"Tailored web apps built with the latest technologies.",icon:"/s1.png"},{id:2,title:"E-commerce Websites",description:"Secure online stores with user-friendly shopping.",icon:"/s2.png"},{id:3,title:"API Integration",description:"Seamless integration for smooth data sharing.",icon:"/s3.png"},{id:4,title:"User Interfaces",description:"Engaging, responsive front-end designs and user experiences.",icon:"/s4.png"},{id:5,title:"Speed Optimization",description:"Boost performance with faster load times and optimization.",icon:"/s7.png"},{id:6,title:"Website Management",description:"Easy content management systems with flexible controls.",icon:"/s8.png"}],r=[{id:1,image:"/p3.PNG",url:"https://milestone1-static-interactive-resume-builder-ayesha.vercel.app/"},{id:2,image:"/p6.PNG",url:"https://coffee-web-a.vercel.app/"},{id:3,image:"/p.PNG",url:"https://milestone-2-assiangment-a.vercel.app/"},{id:4,image:"/p1.PNG",url:"https://adventure-website-ayesha.vercel.app/"},{id:5,image:"/p2.PNG",url:"https://tic-tac-toe-game-ayesha.vercel.app/"},{id:5,image:"/p7.PNG",url:"https://my-portfolio-ayesha-aziz.vercel.app/"}],a=[{id:1,title:"React",image:"/react.svg",percent:"75%"},{id:2,title:"CSS",image:"/css.svg",percent:"95%"},{id:3,title:"JavaScript",image:"/js.svg",percent:"75%"},{id:4,title:"TypeScript",image:"/ts.svg",percent:"80%"},{id:5,title:"HTML",image:"/html.svg",percent:"95%"},{id:6,title:"Node JS",image:"/node.svg",percent:"50%"},{id:7,title:"Python",image:"/python.svg",percent:"50%"},{id:8,title:"Next.JS",image:"/nextCustom.svg",percent:"75%"}],o={phone:"+923131148362",email:"ayesha12@gmail.com",address:"Karachi , Pakistan"}},4124:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var s=i(9510);let l=({children:e})=>s.jsx("div",{children:s.jsx("h1",{className:"bg-orange-700 w-fit text-center px-4 py-3 mx-auto text-white text-2xl  sm:text-3xl md:text-4xl uppercase -rotate-6",children:e})})},6782:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d});var s=i(9510),l=i(4124),n=i(7086),r=i(8570);let a=(0,r.createProxy)(String.raw`C:\Users\hp\Downloads\Nextjs-Web-Portfolio-main\next-js-portfolio\app\Services\ServiceCard.tsx`),{__esModule:o,$$typeof:p}=a;a.default;let h=(0,r.createProxy)(String.raw`C:\Users\hp\Downloads\Nextjs-Web-Portfolio-main\next-js-portfolio\app\Services\ServiceCard.tsx#default`),d=()=>(0,s.jsxs)("div",{className:"pt-32 pb-16 bg-[#0f0715] ",children:[s.jsx(l.Z,{children:"Services"}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 w-[80%] mx-auto items-center mt-20",children:n.ub.map(e=>s.jsx("div",{children:s.jsx(h,{service:e})},e.id))})]})},6142:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>m,metadata:()=>g});var s=i(9510),l=i(9693),n=i.n(l);i(7272);var r=i(8570);let a=(0,r.createProxy)(String.raw`C:\Users\hp\Downloads\Nextjs-Web-Portfolio-main\next-js-portfolio\app\Navbar\ResponsiveNavbar.tsx`),{__esModule:o,$$typeof:p}=a;a.default;let h=(0,r.createProxy)(String.raw`C:\Users\hp\Downloads\Nextjs-Web-Portfolio-main\next-js-portfolio\app\Navbar\ResponsiveNavbar.tsx#default`);var d=i(7710);let c=()=>(0,s.jsxs)("div",{className:"pt-16 px-3 lg:px-4 pb-10 bg-[#0f0e0f]",children:[s.jsx("div",{className:"ml-[1rem] lg:ml-[2rem]",children:s.jsx(d.default,{src:"/images/logo1.png",width:90,height:90,alt:"logo",className:"w-[80px] h-[80px]"})}),(0,s.jsxs)("div",{className:"flex justify-center px-2 text-[14px] lg:text-[18px] items-center flex-wrap space-x-10 space-y-4 text-white font-bold",children:[s.jsx("div",{children:"Home."}),s.jsx("div",{children:"Services."}),s.jsx("div",{children:"Projects."}),s.jsx("div",{children:"Review."}),s.jsx("div",{children:"Contact."})]}),s.jsx("p",{className:"text-white text-opacity-60 text-center mt-6 text-[13px] lg:text-[18px] ",children:"\xa9 2024 All Rights Reserved Ayesha Aziz "})]}),g={title:"Web Dev Portfolio",description:"Personal Portfolio"};function m({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:n().className,children:[s.jsx(h,{}),e,s.jsx(c,{})]})})}},7272:()=>{}};