import React, { useEffect, useState } from 'react';


const HomeProjectDetails = () => {
    const [projectData, setProjectData] = useState({})
    useEffect(() => {
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
                                    project_details{
                                        data{
                                            attributes{
                                                title
                                                count
                                                img_path
                                            }
                                        }
                                    }                                      
                                }
                            }
                        }
                    }
                    `,
                }),
            });
            let data = await response.json();
            setProjectData(data.data.homePageSection1.data.attributes.project_details.data);
        };
        fetchProject();
    }, []);
    // console.log(projectData.data.homePageSection1.data.attributes.project_details,"projectData");
    return (
        <div class="row">
            {
                projectData.length > 0 && projectData?.map(
                    (each, index) => {
                        return (
                            <div key={index} class="col-lg-3">
                                <div class="svs-main d-flex count-area-content pluss">
                                    <div class="svs-l">
                                        <img
                                            src={
                                                each.attributes
                                                    .img_path
                                            }
                                            alt="icon1"
                                        />
                                    </div>
                                    <div class="svs-r">
                                        <h6 class="text-green numbers-top">
                                            {each.attributes.title}
                                        </h6>
                                        <div
                                            class={`count-digit ${each.attributes.img_path == "/assets/images/icon1.webp" ? "noplus" : "numbers-bot"}`}
                                        >
                                            {each.attributes.count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
        </div>

    );
};

export default HomeProjectDetails;