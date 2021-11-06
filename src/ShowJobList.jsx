import React from 'react';


const ShowJobList = ({ jobLists, filter, arrayWorks, activeItem }) => {

    return (<>
        <nav className='nav'>
            <div className='nav__box-button' >
                {arrayWorks.map(work => <div className={work === activeItem ? 'nav__box-button--button_active' : 'nav__box-button--button'} key={work} onClick={filter}><p >{work}</p></div>)}
            </div>
        </nav>
        <main className='main'>
            {jobLists ? jobLists.map(job => {
                return (
                    <div key={job.id} className='main__container-info'>
                        <img src={job.logo} alt="" />
                        <div className='main__container-info_company'>
                            <div><p>{job.company}</p> </div>
                            {job.new ? <div><p>{job.new && "NEW!"}</p></div> : null}
                            {job.featured ? <div><p>{job.featured && "FEATURED"}</p></div> : null}
                        </div>
                        <div className='main__container-info-position'>
                            <h1>{job.position}</h1>
                        </div>
                        <div className='main__container-info-contract'>
                            <div><p>{job.postedAt} <span>&#183;</span> </p></div>
                            <div><p>{job.contract} <span>&#183;</span> </p></div>
                            <div><p>{job.location}</p></div>
                        </div>
                        <div className='main__container-name-work'>
                            <div><p>{job.role}</p></div>
                            <div><p>{job.level}</p></div>
                            {job?.languages?.map(language => <div key={language}><p>{language}</p></div>)}
                            {job?.tools?.map(tool => <div key={tool}><p>{tool}</p></div>)}
                        </div>
                    </div>
                )
            }) : "Loading..."}
        </main>
    </>)
}

export { ShowJobList };