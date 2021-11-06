import React, { useState, useEffect } from "react";
import { ShowJobList } from "./ShowJobList";
import { arrayAllJobs } from "./arrayAllJobs";

const ShowJobs = () => {
    const [arrayJobs, setArrayJobs] = useState();
    const [filterArrayJobs, setFilterArrayJobs] = useState([]);
    const [activeItem, setActiveItem] = useState(null);
    const arrayWorks = ['All', 'Frontend', 'HTML', 'CSS', 'JavaScript', 'Fullstack', 'React', 'Python', 'Ruby', 'Sass', 'Backend', 'RoR', 'Vue', 'Django'];


    useEffect(() => {
        setArrayJobs(arrayAllJobs);
        setFilterArrayJobs(arrayAllJobs);
    }, []);

    const handleFilter = (e) => {
        if (e.target.innerHTML === 'All') {
            setFilterArrayJobs(arrayAllJobs);
        } else {
            const filteredJobs = arrayJobs.filter(item => item.role === e.target.innerHTML || item.level === e.target.innerHTML || item?.languages?.includes(e.target.innerHTML) || item?.tools?.includes(e.target.innerHTML));
            setFilterArrayJobs(filteredJobs);
        };
        setActiveItem(e.target.innerHTML);
    }
    return (<ShowJobList filter={handleFilter} jobLists={filterArrayJobs} arrayWorks={arrayWorks} activeItem={activeItem} />)
}

export { ShowJobs };