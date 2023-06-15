import React from "react";
import { jobData } from "./jobData"
import {v4 as uuid} from "uuid"

const companyBlurb = "Artesion is a software product and services company operating at the Edge. Artesion’s platform is bringing the scalability and reliability of the cloud to the edge providing AI, ML, analytics, and compute to industries such as the Department of Defense, healthcare, and agriculture."

const activeJobs = jobData.jobs.filter(job => job.active)
activeJobs.map(job => {
    job.sections.push(jobData.benefits)
    job.description.paragraphs = [companyBlurb].concat(job.description.paragraphs)
})

const renderPostings = (show) => {
    if (!show) return

    return (
        <div>
            <h3 className="text-3xl tracking-tight sm:text-4xl text-blue-800 pt-20 opacity-50">
                Current openings:
            </h3>
            <ul
                role="list"
                className="sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-2 sm:space-y-0 lg:grid-cols-1 lg:gap-x-8">
                {activeJobs.map((job) => (
                    <li key={uuid()}>
                        <div className="space-y-4 rounded-lg">
                            <section>
                                <div className="relative flex flex-col justify-center items-center overflow-hidden p-2">
                                    <div className="bg-white shadow w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md">
                                        <div>
                                            <div className="float-right"><button>
                                                <a href={`${jobData.contact.link}?subject=${job.jobTitle.replace(' ', '%20')}`} className="bg-blue-800 text-white font-medium px-7 py-2 rounded-full flex gap-1 items-center foa-book">
                                                    {jobData.contact.label}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                        />
                                                    </svg>
                                                </a>
                                            </button></div>
                                            <h3 className="mt-px foa">{job.jobTitle}</h3>
                                            <span className="text-blue-800 text-sm foa-book">
                              {job.jobType}
                            </span>
                                            <div className="flex items-center gap-3 mt-2">
                              <span className="bg-blue-100 text-blue-700 px-3 py-1 text-sm foa-book">
                                  { renderParagraphs(job.description.paragraphs)}
                              </span>
                                            </div>
                                            {job.sections.map((section,) => (
                                                <div key={uuid()}>
                                                    <div>&nbsp;</div>
                                                    <div><span><u>{section.label}</u></span>
                                                        {section.items.map((item) => (
                                                            <div key={uuid()} className="indent-3 list-inside">- {item}</div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div>&nbsp;</div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const renderParagraphs = (list) => {
    let first = true
    const paragraphs = []
    list.map((item) => {
        if (!first) paragraphs.push(<div key={uuid()}>&nbsp;</div>)
        first = false
        paragraphs.push(<div key={uuid()}>{item}</div>)
    })
    return (
        <div key={uuid()}>
            { paragraphs }
        </div>
    )
}

export default function CareersContent() {
  return (
    <>
      <div className="bg-[#eeeeee] pt-8">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div>
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl tracking-tight sm:text-6xl text-blue-800">
                Careers
              </h2>
              <div className="text-xl text-gray-500 foa-book">
                We're seeking talented individuals like you to join our
                  exceptional team email resume and cover letter to <a href={jobData.contact.link}>{jobData.contact.email}</a>.
              </div>
           </div>
              {renderPostings(true)}
           </div>
        </div>
      </div>
    </>
  );
}
