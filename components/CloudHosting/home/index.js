import React, { useEffect } from 'react';
import { rev_slider_4_1 } from '../../../config/revslider';
import RevSlider from '../../qloud/RevSlider'

const Index = props => {
    useEffect(() => {
        setTimeout(() => {
            rev_slider_4_1();
        }, 500);
    });
    return (
        <>
            <RevSlider
                revId={"rev_slider_4_1"}
            >
                <rs-slide data-key="rs-4" data-title="Slide" data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;">
                    <img alt="banner-img" src="../../../assets/revslider/assets/qloud4sliderbg.png" title="qloud4sliderbg.png" width="1600" height="904" className="rev-slidebg" data-no-retina />
                    <rs-layer
                        id="slider-4-slide-4-layer-0"
                        className="textgyreadventor"
                        data-type="text"
                        data-color="#142149"
                        data-rsp_ch="on"
                        data-xy="xo:100px,71px,53px,15px;y:m;yo:-194px,-137px,-173px,-115px;"
                        data-text="w:normal;s:60,42,31,32;l:75,53,40,45;"
                        data-frame_0="x:-50,-35,-26,-16;"
                        data-frame_1="st:600;sp:1000;sR:600;"
                        data-frame_999="o:0;st:w;sR:7400;"
                        style={{ zindex: 5, fontfamily: "Roboto" }}
                    >Business with Advanced
                        </rs-layer>
                    <rs-layer
                        id="slider-4-slide-4-layer-1"
                        className="textgyreadventor"
                        data-type="text"
                        data-color="#0d1e67"
                        data-rsp_ch="on"
                        data-xy="xo:94px,66px,50px,15px;y:m;yo:-126px,-89px,-134px,-82px;"
                        data-text="w:normal;s:60,42,31,32;l:75,53,40,45;fw:700;"
                        data-frame_0="x:-50,-35,-26,-16;"
                        data-frame_1="st:800;sp:1000;sR:800;"
                        data-frame_999="o:0;st:w;sR:7200;"
                        style={{ zindex: 6, fontfamily: "Roboto" }}
                    >Cloud Hosting
                    </rs-layer>
                    <rs-layer
                        id="slider-4-slide-4-layer-2"
                        data-type="text"
                        data-color="#5e7290"
                        data-rsp_ch="on"
                        data-xy="xo:100px,71px,46px,15px;y:m;yo:-32px,-22px,-82px,-23px;"
                        data-text="w:normal;s:20,14,16,14;l:32,22,24,24;"
                        data-frame_0="x:-50,-35,-26,-16;"
                        data-frame_1="st:1000;sp:1000;sR:1000;"
                        data-frame_999="o:0;st:w;sR:7000;"
                        style={{ zindex: 7, fontfamily: "Roboto" }}
                    >It is a long established fact that a reader will be distracted by the readable <br />content of a page when looking at its layout.
                    </rs-layer>
                    <rs-layer
                        id="slider-4-slide-4-layer-3"
                        className="iq-btn-round iq-button rev-btn"
                        data-type="button"
                        data-rsp_ch="on"
                        data-xy="xo:94px,66px,53px,15px;y:m;yo:91px,64px,-2px,47px;"
                        data-text="w:normal;s:18,12,16,16;l:32,22,48,48;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-padding="r:30,21,16,30;l:30,21,16,30;"
                        data-border="bor:10px,10px,10px,10px;"
                        data-frame_0="x:-50,-35,-26,-16;"
                        data-frame_1="st:1400;sp:1000;sR:1400;"
                        data-frame_999="o:0;st:w;sR:6600;"
                        data-frame_hover="bgc:#0d1e67;bor:10px,10px,10px,10px;sp:100;e:Power1.easeInOut;bri:120%;"
                        style={{ zindex: 8, backgroundcolor: "#007aff", fontfamily: "Roboto" }}
                    >Read More
                        </rs-layer>
                    <rs-layer
                        id="slider-4-slide-4-layer-4"
                        data-type="text"
                        data-color="#142149"
                        data-rsp_ch="on"
                        data-xy="xo:298px,211px,193px,154px;y:m;yo:92px,65px,0,48px;"
                        data-text="w:normal;s:20,14,16,9;l:25,17,24,14;"
                        data-vbility="t,t,t,f"
                        data-frame_0="x:-50,-35,-26,-16;"
                        data-frame_1="st:1900;sp:1000;sR:1900;"
                        data-frame_999="o:0;st:w;sR:6100;"
                        style={{ zindex: 9, fontfamily: "Roboto" }}
                    ><i className="fa-play mr-3"></i> Watch Video
                            </rs-layer>
                    <rs-layer
                        id="slider-4-slide-4-layer-5"
                        data-type="image"
                        data-rsp_ch="on"
                        data-xy="x:r,r,c,c;xo:-170px,-66px,0,0;y:m,m,b,b;yo:32px,30px,0,0;"
                        data-text="w:normal;s:20,14,10,6;l:0,17,12,7;"
                        data-dim="w:919px,653px,496px,306px;h:412px,292px,221px,136px;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2300;sp:1000;sR:2300;"
                        data-frame_999="o:0;st:w;sR:5700;"
                        style={{ zindex: 10 }}
                    ><img src="../../../assets/revslider/assets/qloudhome4.png" alt="banner-img" width="919" height="412" data-no-retina />
                    </rs-layer>
                </rs-slide>
            </RevSlider>
        </>
    );
}

export default Index