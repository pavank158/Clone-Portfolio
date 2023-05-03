    import React from 'react'
    import {
        VerticalTimeline,
        VerticalTimelineElement
    }from "react-vertical-timeline-component";
    import "react-vertical-timeline-component/style.min.css";
    import SchoolIcon from "@material-ui/icons/School";
    import WorkIcon from "@material-ui/icons/Work"
    import "../Styles/Experience.css"

    function Experience() {
      return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017 - 2020"
                    iconStyle={{background: "#3e497a",color: "#fff"}}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title">
                        SIES College of Arts, Science and Commerce, Mumbai
                    </h3>
                    <p>B.Sc. Computer Science</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021 - 2023"
                    iconStyle={{background: "#3e497a",color: "#fff"}}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title">
                        SIES College of Commerce and Economics, Mumbai
                    </h3>
                    <p>M.Sc. Information Technology</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="May-2022 - jul-2022"
                    iconStyle={{background: "#e9d35b",color: "#fff"}}
                    icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title">
                        Speegile Pwc Internship, Mumbai
                    </h3>
                    <p>Handling Databases and SQL Queries</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
      )
    }
    
    export default Experience