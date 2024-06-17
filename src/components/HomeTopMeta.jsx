import React, { useEffect, useState } from 'react';


const HomeTopMeta = () => {
    const [getData, setGetData] = useState({})
    useEffect(() => {
        fetchProject();
    }, []);
    const fetchProject = async () => {
        const response = await fetch(`${import.meta.env.PUBLIC_STRAPI_URL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
                query{
                    homePageSection1{
                        data{
                            attributes{
                                section_two_title
                                section_two_content
                                section_three_title1
                                section_three_title2
                                section_three_content
                                section_three_button1
                                section_three_button2
                                section_four_title
                                section_four_content
                                section_four_button
                                section_four_video
                                section_five_title
                                section_five_content
                                section_five_button
                                section_five_video
                                section_six_title
                                section_six_content
                                section_six_button
                                section_six_video
                                section_seven_title
                                section_seven_content
                                section_seven_button
                                section_eight_title
                                section_eight_content
                                section_eight_button
                            }
                        }
                    }
                }
                `,
            }),
        });
        let data = await response.json();
        console.log(data, "datacheck");
        setGetData(data.data.homePageSection1.data.attributes);

    };
    var $animation_elements = $(".animation-element");
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position =
            window_top_position + window_height;

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position =
                element_top_position + element_height;

            //check to see if this current container is within viewport
            if (
                element_bottom_position >= window_top_position &&
                element_top_position <= window_bottom_position
            ) {
                $element.addClass("in-view");
            }
            // else {
            //   $element.removeClass('in-view');
            // }
        });
    }

    $window.on("scroll resize", check_if_in_view);
    $window.trigger("scroll", check_if_in_view);
    console.log(getData, "getData");
    return (

        <div className="">
            <section class="aboutmeta about-main abt-1 topmeta-dev-company">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="about-ms animation-element slide-right">
                                <h1 class="text-black top-t">
                                    {
                                        getData
                                            .section_two_title
                                    }
                                </h1>
                                <p class="text-gray2">
                                    {
                                        getData
                                            .section_two_content
                                    }
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div
                                class="about-ms-r text-right animation-element slide-left"
                            >
                                <div class="about-ms-img ams2">
                                    <img
                                        src="/assets/images/about2.webp"
                                        alt="About"
                                        class=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="aboutmeta about-main abt-1 topmeta-dev-company2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="about-ms animation-element slide-left">
                                <p class="text-black unlock-heading">
                                    {
                                        getData
                                            .section_three_title1
                                    }
                                </p>
                                <h2 class="text-blue h2-blue">
                                    {
                                        getData
                                            .section_three_title2
                                    }
                                </h2>
                                <p class="text-gray2 normal-paras">
                                    {
                                        getData
                                            .section_three_content
                                    }
                                </p>
                                <div class="unlock-btn-sec">
                                    <a
                                        href="https://api.whatsapp.com/send?l=en&text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20&phone=919942011919"
                                        target="_blank"
                                        class="btn btn-primary"
                                    >{
                                            getData.section_three_button1
                                        }
                                    </a>
                                    <a href="#contact" class="btn btn-primary"
                                    >{
                                            getData.section_three_button2
                                        }</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div
                                class="about-ms-r text-right animation-element slide-right"
                            >
                                <div class="about-ms-img">
                                    <img
                                        src="assets/images/about.webp"
                                        alt="About"
                                        class="vert-move3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="immersive-experience" id="demo">
                <div class="bg-vectors">
                    <img src="assets/images/white-bg.webp" alt="white bg" />
                </div>
                <div class="container immersive-experience-c">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="immersive-m-l animation-element slide-left">
                                {/* <iframe
                                    title="Metaprolane Video"
                                    srcdoc="
                    <style>
                    body, .full {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    position: absolute;
                    display: flex;
                    justify-content: center;watch
                    object-fit: cover;
                    }
                    </style>
                    <a
                    href='https://www.youtube.com/embed/Yb-xi5hI5gQ?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1'
                    class='full'
                    >
                    <img
                    src='https://metaprolane.stsdev.site/assets/images/video3.png'
                    class='full'
                    />
                    <svg
                    version='1.1'
                    viewBox='0 0 68 48'
                    width='68px'
                    style='position: relative;'
                    >
                    <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path>
                    <path d='M 45,24 27,14 27,34' fill='#fff'></path>
                    </svg>
                    </a>
                    "
                                    style="max-width: 640px; width: 100%; aspect-ratio: 16/9;"
                                    frameborder="0"></iframe> */}
                            </div>
                            {/* https://vumbnail.com/t0NKhGQVuhQ.jpg */}
                        </div>
                        <div class="col-lg-6">
                            <div
                                class="immersive-m-r animation-element slide-right"
                            >
                                <h5 class="text-white get-experience">
                                    {
                                        getData
                                            .section_four_title
                                    }
                                </h5>
                                <p class="text-white text-last-right">
                                    {
                                        getData
                                            .section_four_content
                                    }
                                </p>
                                <p class="py-3">
                                    <a class="btn btn-secondary" href="#contact"
                                    >{
                                            getData.section_four_button
                                        }</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-vectors">
                    <img
                        src="assets/images/bg-vector1-white.webp"
                        alt="vector bg"
                    />
                </div>
            </section>
            <section class="aboutmeta about-main trans-box">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-ms animation-element slide-left">
                                <h5
                                    class="text-black text-last-left2 ims get-experience pb-3"
                                >
                                    {
                                        getData
                                            .section_five_title
                                    }
                                </h5>
                                <p class="text-gray2 text-last-left">
                                    {
                                        getData
                                            .section_five_content
                                    }
                                </p>
                                <p class="btn-section py-3">
                                    <a class="btn btn-primary" href="#contact"
                                    >{
                                            getData.section_five_button
                                        }</a>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div
                                class="immersive-m-l animation-element slide-right"
                            >
                                {/* https://www.youtube.com/embed/t0NKhGQVuhQ?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1 */}
                                {/* <iframe
                                    title="Metaprolane Video"
                                    srcdoc="
                    <style>
                    body, .full {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    position: absolute;
                    display: flex;
                    justify-content: center;watch
                    object-fit: cover;
                    }
                    </style>
                    <a
                    href='https://www.youtube.com/embed/R-uCpc5KC1c?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1'
                    class='full'
                    >
                    <img
                    src='https://metaprolane.stsdev.site/assets/images/video1.png'
                    class='full'
                    />
                    <svg
                    version='1.1'
                    viewBox='0 0 68 48'
                    width='68px'
                    style='position: relative;'
                    >
                    <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path>
                    <path d='M 45,24 27,14 27,34' fill='#fff'></path>
                    </svg>
                    </a>
                    "
                                    style="max-width: 640px; width: 100%; aspect-ratio: 16/9;"
                                    frameborder="0"></iframe> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="immersive-experience">
                <div class="bg-vectors">
                    <img src="assets/images/white-bg.webp" alt="white bg" />
                </div>
                <div class="container immersive-experience-c">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="immersive-m-l animation-element slide-left">
                                {/* <iframe
                                    title="Metaprolane Video"
                                    srcdoc="
                    <style>
                    body, .full {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    position: absolute;
                    display: flex;
                    justify-content: center;watch
                    object-fit: cover;
                    }
                    </style>
                    <a
                    href='https://www.youtube.com/embed/veaeTQJdOFA?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1'
                    class='full' 
                    >
                    <img
                    src='https://metaprolane.stsdev.site/assets/images/video2.png'
                    class='full'
                    />
                    <svg
                    version='1.1'
                    viewBox='0 0 68 48'
                    width='68px'
                    style='position: relative;'
                    >
                    <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path>
                    <path d='M 45,24 27,14 27,34' fill='#fff'></path>
                    </svg>
                    </a>
                    "
                                    style="max-width: 640px; width: 100%; aspect-ratio: 16/9;"
                                    frameborder="0"></iframe> */}
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div
                                class="immersive-m-r animation-element slide-right"
                            >
                                <h4 class="text-white get-experience">
                                    {
                                        getData
                                            .section_six_title
                                    }
                                </h4>
                                <p class="text-white text-last-right">
                                    {
                                        getData
                                            .section_six_content
                                    }
                                </p>
                                <p class="py-3">
                                    <a class="btn btn-secondary" href="#contact"
                                    >{
                                            getData.section_six_button
                                        }</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-vectors">
                    <img
                        src="assets/images/bg-vector1-white.webp"
                        alt="vector bg"
                    />
                </div>
            </section>
            <section class="aboutmeta about-main trans-box">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-ms animation-element slide-left">
                                <h5
                                    class="text-black text-last-left2 ims get-experience pb-3"
                                >
                                    {
                                        getData
                                            .section_seven_title
                                    }
                                </h5>
                                <p class="text-gray2 text-last-left">
                                    {
                                        getData
                                            .section_seven_content
                                    }
                                </p>
                                <p class="btn-section py-3">
                                    <a class="btn btn-primary" href="#contact"
                                    >{
                                            getData.section_seven_button
                                        }</a>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div
                                class="immersive-m-l animation-element slide-right"
                            >
                                <img
                                    src="https://metaprolane.stsdev.site/assets/images/mall-home/home-mall.png"
                                    alt="Casino"
                                    class="w-100 img-border-6-20-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="immersive-experience">
                <div class="bg-vectors">
                    <img src="assets/images/white-bg.webp" alt="white bg" />
                </div>
                <div class="container immersive-experience-c">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="immersive-m-l animation-element slide-left">
                                <img
                                    src="https://metaprolane.stsdev.site/assets/images/casino-game/home-casino.png"
                                    alt="Casino"
                                    class="w-100 img-border-6-20"
                                />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div
                                class="immersive-m-r animation-element slide-right"
                            >
                                <h4 class="text-white get-experience">
                                    {
                                        getData
                                            .section_eight_title
                                    }
                                </h4>
                                <p class="text-white text-last-right">
                                    {
                                        getData
                                            .section_eight_content
                                    }
                                </p>
                                <p class="py-3">
                                    <a class="btn btn-secondary" href="#contact"
                                    >{
                                            getData.section_eight_button
                                        }</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            
            
        </div>

    );
};

export default HomeTopMeta;