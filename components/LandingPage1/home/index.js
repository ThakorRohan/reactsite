import React, { useEffect } from 'react';
import RevSlider from '../../qloud/RevSlider'
import { rev_slider_0_1 } from '../../../config/revslider'

const Index = props => {
    useEffect(() => {
        setTimeout(() => {
            rev_slider_0_1();
        }, 500);
    });
    return (
        <>
            <RevSlider
                revId={"rev_slider_0_1"}
            >
                <rs-slide data-key="rs-1" data-title="Slide" data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;">
                    <img src="../../../assets/revslider/assets/shape.png" alt="qloud" title="shape" width="1600" height="707"
                        data-bg="p:center bottom;" data-parallax="off" className="rev-slidebg" data-no-retina />

                    <rs-layer id="slider-1-slide-1-layer-0" className="textgyreadventor" data-type="text" data-color="#ffffff"
                        data-rsp_ch="on" data-xy="x:132px;y:c;yo:-69px;" data-text="w:normal;s:70;l:90;fw:700;"
                        data-frame_0="x:-50;" data-frame_1="st:600;sp:1000;sR:600;" data-frame_999="o:0;st:w;sR:7400;"
                        style={{ zIndex: 8, fontFamily: "Roboto" }}>Qloud Storage
                    <br /> Service
                    </rs-layer>
                    <a id="slider-1-slide-1-layer-1" className="rs-layer iq-btn-round iq-button rev-btn" href="#"
                        target="_self" rel="nofollow" data-type="button" data-color="#ffffff" data-rsp_ch="on"
                        data-xy="x:135px;y:471px;" data-text="w:normal;s:18;l:18;fw:500;" data-dim="h:50px;minh:0px;"
                        data-vbility="t,t,f,f" data-padding="t:15;r:30;b:15;l:30;" data-border="bor:10px,10px,10px,10px;"
                        data-frame_0="x:-50;" data-frame_1="st:1000;sp:1000;sR:1000;" data-frame_999="o:0;st:w;sR:7000;"
                        data-frame_hover="bgc:#007aff;bor:10px,10px,10px,10px;sp:100;e:Power1.easeInOut;bri:120%;"
                        style={{ zIndex: 10, backgroundColor: "#007aff", fontFamily: "Roboto" }}>Start a Free Trial
                    </a>
                    <rs-layer id="slider-1-slide-1-layer-2" data-type="image" data-rsp_ch="on" data-xy="x:984px;y:205px;" data-text="w:normal;" data-dim="w:217px;h:126px;" data-frame_0="y:-50;" data-frame_1="st:2400;sp:1000;sR:2400;" data-frame_999="o:0;st:w;sR:5600;" data-loop_0="x:-2px;" data-loop_999="x:2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 16 }}><img src="../../../assets/revslider/assets/box3.png" alt="qloud" width="217" height="126" data-no-retina />
                    </rs-layer>

                    <rs-layer id="slider-1-slide-1-layer-3" data-type="image" data-rsp_ch="on" data-xy="x:984px;y:341px;" data-text="w:normal;" data-dim="w:217px;h:126px;" data-frame_0="y:-50;" data-frame_1="st:2400;sp:1000;sR:2400;" data-frame_999="o:0;st:w;sR:5600;" data-loop_0="x:-2px;" data-loop_999="x:2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 31 }}><img src="../../../assets/revslider/assets/box3.png" alt="qloud" width="217" height="126" data-no-retina />
                    </rs-layer>
                    <rs-layer id="slider-1-slide-1-layer-4" data-type="image" data-rsp_ch="on" data-xy="x:862px;y:272px;" data-text="w:normal;" data-dim="w:217px;h:126px;" data-frame_0="y:-50;" data-frame_1="st:2400;sp:1000;sR:2400;" data-frame_999="o:0;st:w;sR:5600;" data-loop_0="x:-2px;" data-loop_999="x:2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 26 }}><img src="../../../assets/revslider/assets/box3.png" alt="qloud" width="217" height="126" data-no-retina />
                    </rs-layer>
                    <rs-layer id="slider-1-slide-1-layer-5" data-type="image" data-rsp_ch="on" data-xy="x:1108px;y:275px;" data-text="w:normal;" data-dim="w:217px;h:126px;" data-frame_0="y:-50;" data-frame_1="st:2400;sp:1000;sR:2400;" data-frame_999="o:0;st:w;sR:5600;" data-loop_0="x:-2px;" data-loop_999="x:2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 21 }}><img src="../../../assets/revslider/assets/box3.png" alt="qloud" width="217" height="126" data-no-retina />
                    </rs-layer>
                    <rs-layer id="slider-1-slide-1-layer-6" data-type="image" data-rsp_ch="on" data-xy="x:985px;y:571px;" data-text="w:normal;" data-dim="w:217px;h:199px;" data-frame_0="y:-50;" data-frame_1="st:1200;sp:1000;sR:1200;" data-frame_999="o:0;st:w;sR:6800;" data-loop_0="x:2px;" data-loop_999="x:-2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 27 }}><img src="../../../assets/revslider/assets/box2.png" alt="qloud" width="217" height="199" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-7" data-type="image" data-rsp_ch="on" data-xy="x:1107px;y:502px;" data-text="w:normal;" data-dim="w:217px;h:198px;" data-frame_0="y:-50;" data-frame_1="st:1200;sp:1000;sR:1200;" data-frame_999="o:0;st:w;sR:6800;" data-loop_0="x:2px;" data-loop_999="x:-2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 17 }}><img src="../../../assets/revslider/assets/box1.png" alt="qloud" width="217" height="198" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-8" data-type="image" data-rsp_ch="on" data-xy="x:864px;y:500px;" data-text="w:normal;" data-dim="w:217px;h:198px;" data-frame_0="y:-50;" data-frame_1="st:1200;sp:1000;sR:1200;" data-frame_999="o:0;st:w;sR:6800;" data-loop_0="x:2px;" data-loop_999="x:-2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 22 }}><img src="../../../assets/revslider/assets/box1.png" alt="qloud" width="217" height="198" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-9" data-type="image" data-rsp_ch="on" data-xy="x:987px;y:427px;" data-text="w:normal;" data-dim="w:217px;h:198px;" data-frame_0="y:-50;" data-frame_1="st:1200;sp:1000;sR:1200;" data-frame_999="o:0;st:w;sR:6800;" style={{ zIndex: 12 }}><img src="../../../assets/revslider/assets/box1.png" alt="qloud" width="217" height="198" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-10" data-type="image" data-rsp_ch="on" data-xy="x:985px;y:495px;" data-text="w:normal;" data-dim="w:217px;h:198px;" data-frame_0="y:-50;" data-frame_1="st:1500;sp:1000;sR:1500;" data-frame_999="o:0;st:w;sR:6500;" data-loop_0="x:-2px;" data-loop_999="x:2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 28 }}><img src="../../../assets/revslider/assets/box1.png" alt="qloud" width="217" height="198" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-11" data-type="image" data-rsp_ch="on" data-xy="x:1107px;y:425px;" data-text="w:normal;" data-dim="w:217px;h:199px;" data-frame_0="y:-50;" data-frame_1="st:1500;sp:1000;sR:1500;" data-frame_999="o:0;st:w;sR:6500;" data-loop_0="x:-2px;" data-loop_999="x:2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 18 }}><img src="../../../assets/revslider/assets/box2.png" alt="qloud" width="217" height="199" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-12" data-type="image" data-rsp_ch="on" data-xy="x:987px;y:352px;" data-text="w:normal;" data-dim="w:217px;h:198px;" data-frame_0="y:-50;" data-frame_1="st:1500;sp:1000;sR:1500;" data-frame_999="o:0;st:w;sR:6500;" style={{ zIndex: 13 }}><img src="../../../assets/revslider/assets/box1.png" alt="qloud" width="217" height="198" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-13" data-type="image" data-rsp_ch="on" data-xy="x:864px;y:424px;" data-text="w:normal;" data-dim="w:217px;h:198px;" data-frame_0="y:-50;" data-frame_1="st:1500;sp:1000;sR:1500;" data-frame_999="o:0;st:w;sR:6500;" data-loop_0="x:-2px;" data-loop_999="x:2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 23 }}><img src="../../../assets/revslider/assets/box1.png" alt="qloud" width="217" height="198" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-14" data-type="image" data-rsp_ch="on" data-xy="x:985px;y:418px;" data-text="w:normal;" data-dim="w:217px;h:199px;" data-frame_0="y:-50;" data-frame_1="st:1800;sp:1000;sR:1800;" data-frame_999="o:0;st:w;sR:6200;" data-loop_0="x:2px;" data-loop_999="x:-2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 29 }}><img src="../../../assets/revslider/assets/box2.png" alt="qloud" width="217" height="199" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-15" data-type="image" data-rsp_ch="on" data-xy="x:1107px;y:350px;" data-text="w:normal;" data-dim="w:217px;h:198px;" data-frame_0="y:-50;" data-frame_1="st:1800;sp:1000;sR:1800;" data-frame_999="o:0;st:w;sR:6200;" data-loop_0="x:2px;" data-loop_999="x:-2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 19 }}><img src="../../../assets/revslider/assets/box1.png" alt="qloud" width="217" height="198" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-16" data-type="image" data-rsp_ch="on" data-xy="x:864px;y:348px;" data-text="w:normal;" data-dim="w:217px;h:198px;" data-frame_0="y:-50;" data-frame_1="st:1800;sp:1000;sR:1800;" data-frame_999="o:0;st:w;sR:6200;" data-loop_0="x:2px;" data-loop_999="x:-2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 24 }}><img src="../../../assets/revslider/assets/box1.png" alt="qloud" width="217" height="198" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-17" data-type="image" data-rsp_ch="on" data-xy="x:987px;y:283px;" data-text="w:normal;" data-dim="w:217px;h:198px;" data-frame_0="y:-50;" data-frame_1="st:1800;sp:1000;sR:1800;" data-frame_999="o:0;st:w;sR:6200;" style={{ zIndex: 14 }}><img src="../../../assets/revslider/assets/box1.png" alt="qloud" width="217" height="198" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-18" data-type="image" data-rsp_ch="on" data-xy="x:985px;y:342px;" data-text="w:normal;" data-dim="w:217px;h:198px;" data-frame_0="y:-50;" data-frame_1="st:2100;sp:1000;sR:2100;" data-frame_999="o:0;st:w;sR:5900;" data-loop_0="x:-2px;" data-loop_999="x:2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 30 }}><img src="../../../assets/revslider/assets/box1.png" alt="qloud" width="217" height="198" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-19" data-type="image" data-rsp_ch="on" data-xy="x:1107px;y:273px;" data-text="w:normal;" data-dim="w:217px;h:199px;" data-frame_0="y:-50;" data-frame_1="st:2100;sp:1000;sR:2100;" data-frame_999="o:0;st:w;sR:5900;" data-loop_0="x:-2px;" data-loop_999="x:2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 20 }}><img src="../../../assets/revslider/assets/box2.png" alt="qloud" width="217" height="199" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-20" data-type="image" data-rsp_ch="on" data-xy="x:986px;y:206px;" data-text="w:normal;" data-dim="w:217px;h:198px;" data-frame_0="y:-50;" data-frame_1="st:2100;sp:1000;sR:2100;" data-frame_999="o:0;st:w;sR:5900;" data-loop_0="x:-2px;" data-loop_999="x:2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 15 }}><img src="../../../assets/revslider/assets/box1.png" alt="qloud" width="217" height="198" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-21" data-type="image" data-rsp_ch="on" data-xy="x:862px;y:272px;" data-text="w:normal;" data-dim="w:217px;h:198px;" data-frame_0="y:-50;" data-frame_1="st:2100;sp:1000;sR:2100;" data-frame_999="o:0;st:w;sR:5900;" data-loop_0="x:-2px;" data-loop_999="x:2px;sp:3500;e:Sine.easeInOut;yym:t;" style={{ zIndex: 25 }}><img src="../../../assets/revslider/assets/box1.png" alt="qloud" width="217" height="198" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-23" className="rs-pxl-10" data-type="image" data-rsp_ch="on" data-xy="x:1183px;y:388px;" data-text="w:normal;" data-dim="w:269px;h:168px;" data-frame_0="x:50;" data-frame_1="st:3300;sp:1000;sR:3300;" data-frame_999="o:0;st:w;sR:4700;" data-loop_0="x:-10px;" data-loop_999="x:10px;sp:5000;e:Sine.easeInOut;yym:t;" style={{ zIndex: 32 }}><img src="../../../assets/revslider/assets/cloud1.png" alt="qloud" width="287" height="179" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-24" className="rs-pxl-10" data-type="image" data-rsp_ch="on" data-xy="x:785px;y:149px;" data-text="w:normal;" data-dim="w:400px;h:211px;" data-frame_0="x:50;" data-frame_1="st:2700;sp:1000;sR:2700;" data-frame_999="o:0;st:w;sR:5300;" data-loop_0="x:-10px;" data-loop_999="x:10px;sp:5000;e:Sine.easeInOut;yym:t;" style={{ zIndex: 11 }} ><img src="../../../assets/revslider/assets/cloud2.png" alt="qloud" width="400" height="211" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-25" data-type="text" data-color="#ffffff" data-rsp_ch="on" data-xy="x:136px;y:578px;" data-text="w:normal;s:24;l:30;" data-dim="w:22px;" data-vbility="t,t,t,f" data-frame_0="y:-50;" data-frame_1="st:3700;sp:1000;sR:3700;" data-frame_999="o:0;st:w;sR:4300;" style={{ zIndex: 37, fontFamily: "Roboto" }} ><i className="fab fa-gitlab"></i>
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-27" data-type="text" data-color="#ffffff" data-rsp_ch="on" data-xy="x:185px;y:578px;" data-text="w:normal;s:24;l:30;" data-dim="w:22px;" data-vbility="t,t,t,f" data-frame_0="y:-50;" data-frame_1="st:3600;sp:1000;sR:3600;" data-frame_999="o:0;st:w;sR:4400;" style={{ zIndex: 36, fontFamily: "Roboto" }} ><i className="fab fa- cloud - upload"></i>
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-28" data-type="text" data-color="#ffffff" data-rsp_ch="on" data-xy="x:285px;y:578px;" data-text="w:normal;s:24;l:30;" data-dim="w:22px;" data-vbility="t,t,t,f" data-frame_0="y:-50;" data-frame_1="st:3500;sp:1000;sR:3500;" data-frame_999="o:0;st:w;sR:4500;" style={{ zIndex: 34, fontFamily: "Roboto" }} ><i className="fab fa- gitlab"></i>
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-29" data-type="text" data-color="#ffffff" data-rsp_ch="on" data-xy="x:239px;y:578px;" data-text="w:normal;s:24;l:30;" data-dim="w:22px;" data-vbility="t,t,t,f" data-frame_0="y:-50;" data-frame_1="st:3400;sp:1000;sR:3400;" data-frame_999="o:0;st:w;sR:4600;" style={{ zIndex: 33, fontFamily: "Roboto" }} ><i className="fas fa-recycle"></i></rs-layer>



                    <rs-layer id="slider-1-slide-1-layer-30" data-type="image" data-rsp_ch="on" data-xy="x:679px;y:121px;" data-text="w:normal;" data-dim="w:151px;h:81px;" data-frame_0="sX:0.8;sY:0.8;" data-frame_1="e:Power4.easeOut;sp:1000;" data-frame_999="o:0;st:w;sR:8000;" data-loop_0="x:10px;" data-loop_999="x:-10px;sp:5000;e:Sine.easeInOut;yym:t;" style={{ zIndex: 35 }}><img src="../../../assets/revslider/assets/banner-pattern-4-1.png" alt="qloud" width="151" height="81" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-31" data-type="image" data-rsp_ch="on" data-xy="x:-32px;y:12px;" data-text="w:normal;" data-dim="w:151px;h:81px;" data-frame_0="sX:0.9;sY:0.9;" data-frame_1="sp:1000;" data-frame_999="o:0;st:w;sR:8000;" data-loop_0="x:-10px;" data-loop_999="x:10px;sp:5000;e:Sine.easeInOut;yym:t;" style={{ zIndex: 38 }}><img src="../../../assets/revslider/assets/banner-pattern-3-1.png" alt="qloud" width="151" height="81" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-32" data-type="image" data-rsp_ch="on" data-xy="x:r;y:50px;" data-text="w:normal;" data-dim="w:151px;h:81px;" data-frame_0="sX:0.9;sY:0.9;" data-frame_1="sp:1000;" data-frame_999="o:0;st:w;sR:8000;" data-loop_0="x:10px;" data-loop_999="x:-10px;sp:5000;e:Sine.easeInOut;yym:t;" style={{ zIndex: 39 }}><img src="../../../assets/revslider/assets/banner-pattern-5-1.png" alt="qloud" width="151" height="81" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-33" data-type="image" data-rsp_ch="on" data-xy="x:r;xo:-100px;y:b;yo:100px;" data-text="w:normal;" data-dim="w:116px;h:214px;" data-frame_0="sX:0.9;sY:0.9;" data-frame_1="sp:1000;" data-frame_999="o:0;st:w;sR:8000;" data-loop_0="y:-10px;" data-loop_999="y:10px;sp:5000;e:Sine.easeInOut;yym:t;" style={{ zIndex: 40 }}><img src="../../../assets/revslider/assets/banner-pattern-2.png" alt="qloud" width="116" height="214" data-no-retina />
                    </rs-layer>


                    <rs-layer id="slider-1-slide-1-layer-34" data-type="image" data-rsp_ch="on" data-xy="x:-100px;y:b;yo:150px;" data-text="w:normal;" data-dim="w:151px;h:289px;" data-frame_0="sX:0.9;sY:0.9;" data-frame_1="sp:1000;" data-frame_999="o:0;st:w;sR:8000;" data-loop_0="y:-10px;" data-loop_999="y:10px;sp:5000;e:Sine.easeInOut;yym:t;" style={{ zIndex: 41 }}><img src="../../../assets/revslider/assets/banner-pattern-1.png" alt="qloud" width="151" height="289" data-no-retina />
                    </rs-layer>
                </rs-slide>
            </RevSlider >
        </>
    );
}

export default Index