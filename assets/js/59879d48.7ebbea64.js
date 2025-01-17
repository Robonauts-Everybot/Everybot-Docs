"use strict";(self.webpackChunkeverybot_docs=self.webpackChunkeverybot_docs||[]).push([[1320],{7420:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var t=o(5893),i=o(1151),n=o(7492);const s={sidebar_label:"Electrical",sidebar_position:3},l="Robot Wiring",a={id:"fundamentals/electrical-overview",title:"Robot Wiring",description:"For those of you building the Everybot, the manual will have an electrical section specific to the robot. The resources here serve to help you prepare for wiring your Everybot, there may be materials used in the linked content that are not included in the Everybot's BOM or tools.",source:"@site/docs/fundamentals/electrical-overview.md",sourceDirName:"fundamentals",slug:"/fundamentals/electrical-overview",permalink:"/Everybot-Docs/fundamentals/electrical-overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Electrical",sidebar_position:3},sidebar:"fundamentalSidebar",previous:{title:"Imaging the roboRIO and Programming the Radio",permalink:"/Everybot-Docs/fundamentals/programming/roboRIO-and-radio"},next:{title:"CAD",permalink:"/Everybot-Docs/fundamentals/CAD"}},c={},h=[{value:"Introduction to FRC Robot Wiring from WPILib",id:"introduction-to-frc-robot-wiring-from-wpilib",level:2},{value:"General Notes",id:"general-notes",level:3},{value:"Gather Materials",id:"gather-materials",level:3},{value:"Weidmuller Connectors",id:"weidmuller-connectors",level:3},{value:"Motor Controller Signal Wires",id:"motor-controller-signal-wires",level:3},{value:"Robot Signal Light (RSL)",id:"robot-signal-light-rsl",level:3},{value:"Motor Power",id:"motor-power",level:3},{value:"Finishing up and other resources",id:"finishing-up-and-other-resources",level:2}];function d(e){const r={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"robot-wiring",children:"Robot Wiring"}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"For those of you building the Everybot"}),", the manual will have an electrical section specific to the robot. The resources here serve to help you prepare for wiring your Everybot, there may be materials used in the linked content that are not included in the Everybot's BOM or tools."]})}),"\n",(0,t.jsx)(r.h2,{id:"introduction-to-frc-robot-wiring-from-wpilib",children:(0,t.jsx)(r.a,{href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html",children:"Introduction to FRC Robot Wiring from WPILib"})}),"\n",(0,t.jsx)(r.p,{children:"The resource above from WPILib is excellent for learning how to wire a robot."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.p,{children:"This resource can be used in combination with Everybot's electrical manual section or on its own to create a test bed. If you have the time, creating a test bed is great for verifying the operation of components, flashing the radio/imaging the roboRIO, ensuring you are able to connect to the robot via wifi and testing robot code."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.p,{children:"If you plan on building the Everybot, here are some general notes and tips on the various sections:"}),"\n",(0,t.jsx)(r.h3,{id:"general-notes",children:"General Notes"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The REV Power Distribution Hub (PDH) is the newest power distribution device. It comes in the rookie kit of parts, and will be used on the Everybot. If you do not have the PDH, you can also select the CTR tabs for wiring your system."}),"\n",(0,t.jsx)(r.li,{children:"CAN bus should always be used over PWM due to past issues with utlizing PWM mode on the SPARK MAX controllers. Make sure to follow the CAN bus setup tabs in the linked resource."}),"\n",(0,t.jsx)(r.li,{children:"It is most likely that the Everybot will use SPARK Max and/or Victor SPX motor controllers."}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"danger",children:(0,t.jsx)(r.p,{children:"If you create a test bed you may use some consumables. This could include wire if cut shorter, zip ties and terminal lugs if the setup does not transfer well to the completed Everybot."})}),"\n",(0,t.jsx)(r.h3,{id:"gather-materials",children:(0,t.jsx)(r.a,{href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html#gather-materials",children:"Gather Materials"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"In past years we have not used Pneumatics, double check with Everybot's bill of materials when it is released."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["We heavily recommend using ",(0,t.jsx)(r.a,{href:"https://www.andymark.com/products/wago-221-series-inline-splicing-connector-with-lever?via=Z2lkOi8vYW5keW1hcmsvV29ya2FyZWE6Ok5hdmlnYXRpb246OlNlYXJjaFJlc3VsdHMvJTdCJTIyYnV0dG9uJTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIycSUyMiUzQSUyMndhZ28lMjIlMkMlMjJ1dGY4JTIyJTNBJTIyJUUyJTlDJTkzJTIyJTdE",children:"inline WAGOs"})," over the quick disconnect terminals as they are easier to impliment and require less training."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"When using the WAGOs, 11mm of insulation needs to be removed. This length is also represented on the side of the WAGO."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["The cable intended for PWM signals will be used to wire the RSL, but any 22 gauge wire will work. The included Molex CAN Bus kit is used for the motor controllers. To make them easier to work with you may want",(0,t.jsx)(r.a,{href:"https://www.revrobotics.com/rev-21-2052/",children:"CAN Extension Cables"}),"."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["If using the extension cables, these [Cable Clips] (",(0,t.jsx)(r.a,{href:"https://www.revrobotics.com/rev-11-1229/",children:"https://www.revrobotics.com/rev-11-1229/"}),") will prevent unwaited disconnections."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"The 10 AWG wire can be replaced with 12 AWG wire."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Most of these items will come in the kit of parts, the rest can be purchased from FRC vendors like ",(0,t.jsx)(r.a,{href:"https://www.andymark.com/pages/electrical",children:"AndyMark"})," or ",(0,t.jsx)(r.a,{href:"https://www.revrobotics.com/ion/electronics/",children:"REV"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"weidmuller-connectors",children:(0,t.jsx)(r.a,{href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html#weidmuller-connectors",children:"Weidmuller Connectors"})}),"\n",(0,t.jsx)(r.p,{children:"The video attached is private, here an image of the connector:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("div",{style:{overflow:"hidden",display:"inline-block",margin:"0.00px 0.00px"},children:(0,t.jsx)("span",{style:{overflow:"hidden",display:"inline-block",margin:"0.00px 0.00px",border:"0.00px solid #000000",transform:"rotate(0.00rad) translateZ(0px)"},children:(0,t.jsx)(n.Z,{autoLoad:"true",img:o(1413),style:{marginLeft:"0.00px",marginTop:"0.00px",transform:"rotate(0.00rad) translateZ(0px)",maxWidth:"700px"}})})})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.h3,{id:"motor-controller-signal-wires",children:(0,t.jsx)(r.a,{href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html#motor-controller-signal-wires",children:"Motor Controller Signal Wires"})}),"\n",(0,t.jsx)(r.p,{children:"Select the CAN tab."}),"\n",(0,t.jsx)(r.h3,{id:"robot-signal-light-rsl",children:(0,t.jsx)(r.a,{href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html#robot-signal-light",children:"Robot Signal Light (RSL)"})}),"\n",(0,t.jsx)(r.p,{children:"You may use a cable indtended for PWM as the 2-pin cable."}),"\n",(0,t.jsx)(r.h3,{id:"motor-power",children:(0,t.jsx)(r.a,{href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html#motor-power",children:"Motor Power"})}),"\n",(0,t.jsxs)(r.p,{children:['We heavily prefer using WAGOs over the quick disconnect terminals. WAGOs work best when the wire is untwisted and cut to 11mm (~7/16") in length. If you are connecting to a brushless motor (NEO or NEO 550), you will need to connect all 3 wires to the SPARK MAX, along with the sensor cable. For more information on wiring SPARK MAXes please see ',(0,t.jsx)(r.a,{href:"https://docs.revrobotics.com/sparkmax/gs-sm/wiring-the-spark-max",children:"REV's documentation"}),". We also recommend using WAGOs over Power Poles for teams who are less experienced."]}),"\n",(0,t.jsx)(r.h2,{id:"finishing-up-and-other-resources",children:"Finishing up and other resources"}),"\n",(0,t.jsxs)(r.p,{children:["The last step involves connecting a battery, here the WPILib guide for that: ",(0,t.jsx)(r.a,{href:"https://docs.wpilib.org/en/stable/docs/hardware/hardware-basics/robot-battery.html",children:"Robot Battery Basics"}),"."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.p,{children:["For more information on wiring CAN WPILib has a ",(0,t.jsx)(r.a,{href:"https://docs.wpilib.org/en/stable/docs/hardware/hardware-basics/can-wiring-basics.html",children:"guide"})," that uses older power distribution panel but the basics are the same. The PCM (Pneumatic Control Module) portion can be ignored."]})]})}function u(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7492:(e,r,o)=>{o.d(r,{Z:()=>n});o(7294);var t=o(8007),i=o(5893);function n(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.Z,{shouldAutoDownload:s,...e})})}const s=e=>{let{connection:r,size:o,threshold:t,possiblySlowNetwork:i}=e;return!0}},1413:(e,r,o)=>{o.r(r),o.d(r,{default:()=>t});const t=o.p+"assets/images/circuit-breaker-REV-1400-46b760529c7d84405015ecaa7d44e892.webp"}}]);