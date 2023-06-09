import React, { useEffect } from 'react';
import { rev_slider_5_1 } from '../../../config/revslider';
import RevSlider from '../../qloud/RevSlider'

const Index = props => {
    useEffect(() => {
        setTimeout(() => {
            rev_slider_5_1();
        }, 500);
    });
    return (
        <>
            <RevSlider
                revId={"rev_slider_5_1"}
            >
                <rs-slide data-key="rs-5" data-title="Slide" data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;">
                    <img src="../../../assets/revslider/assets/transparent.png" alt="QLOUD" title="qbanner1" width="1600" height="867" data-bg="c:#eff1fe;" data-parallax="off" className="rev-slidebg" data-no-retina />
                    <rs-layer
                        id="slider-5-slide-5-layer-0"
                        className="textgyreadventor"
                        data-type="text"
                        data-color="#142149"
                        data-rsp_ch="on"
                        data-xy="xo:135px,96px,72px,15px;y:m;yo:-120px,-85px,-187px,-222px;"
                        data-text="w:normal;s:60,42,36,36;l:80,56,50,45;fw:700;"
                        data-frame_0="x:-50,-35,-26,-16;"
                        data-frame_1="st:600;sp:1000;sR:600;"
                        data-frame_999="o:0;st:w;sR:7400;"
                        style={{ zIndex: 8, fontFamily: "Roboto" }}
                    >Cloud <span className="bluetext">Analytics</span><br />Everything You Need
                     </rs-layer><rs-layer
                        id="slider-5-slide-5-layer-1"
                        data-type="text"
                        data-color="#5e7290"
                        data-rsp_ch="on"
                        data-xy="xo:135px,96px,72px,21px;y:m;yo:40px,28px,-78px,-126px;"
                        data-text="w:normal;s:16,11,18,12;l:32,22,30,24;"
                        data-frame_0="x:-50,-35,-26,-16;"
                        data-frame_1="st:900;sp:1000;sR:900;"
                        data-frame_999="o:0;st:w;sR:7100;"
                        style={{ zIndex: 9, fontFamily: "Roboto" }}
                    >It is a long established fact that a reader will be distracted by the readable content of <br />a page when looking at its layout.
                     </rs-layer><a
                        id="slider-5-slide-5-layer-2"
                        className="rs-layer iq-btn-round iq-button rev-btn"
                        href="https://iqonic.design/wp-themes/qloud/contact-us-2/" target="_self" rel="nofollow"
                        data-type="button"
                        data-rsp_ch="on"
                        data-xy="xo:135px,96px,72px,24px;y:m;yo:163px,115px,14px,-46px;"
                        data-text="w:normal;s:18,16,16,16;l:18,16,45,20;"
                        data-dim="h:50px;minh:0px,none,none,none;"
                        data-padding="t:15,15,0,15;r:30;b:15,15,0,15;l:30;"
                        data-border="bor:10px,10px,10px,10px;"
                        data-frame_0="x:-50,-35,-26,-16;"
                        data-frame_1="st:1200;sp:1000;sR:1200;"
                        data-frame_999="o:0;st:w;sR:6800;"
                        data-frame_hover="bgc:#0d1e67;bor:10px,10px,10px,10px;sp:100;e:Power1.easeInOut;bri:120%;"
                        style={{ zIndex: 10, backgroundColor: "#007bfc", fontFamily: "Roboto" }}
                    >Read More
                     </a><rs-layer
                        id="slider-5-slide-5-layer-3"
                        className="rs-pxl-1"
                        data-type="image"
                        data-rsp_ch="on"
                        data-xy="x:r,r,r,c;xo:0,-36px,217px,0;y:m,m,m,b;yo:13px,67px,157px,0;"
                        data-text="w:normal;s:20,14,10,6;l:0,17,12,7;"
                        data-dim="w:593px,388px,307px,334px;h:619px,288px,320px,349px;"
                        data-frame_0="sX:0.9;sY:0.9;"
                        data-frame_1="st:2000;sp:1000;sR:2000;"
                        data-frame_999="o:0;st:w;sR:6000;"
                        style={{ zIndex: 12 }}
                    ><img src="../../../assets/revslider/assets/home52.png" alt="qloud" width="593" height="619" data-no-retina />
                    </rs-layer>
                </rs-slide>
            </RevSlider>
        </>
    );
}

export default Index