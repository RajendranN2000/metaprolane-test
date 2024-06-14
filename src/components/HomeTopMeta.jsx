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
        </div>

    );
};

export default HomeTopMeta;