import React from "react";

const companyBlurb = "Artesion is a software product and services company operating at the Edge. Artesion’s platform is bringing the scalability and reliability of the cloud to the edge providing AI, ML, analytics, and compute to industries such as the Department of Defense, healthcare, and agriculture."
const benefits = {
  label: "Benefits:",
  items: [
      "Health insurance",
      "Dental and vision insurance",
      "Flexible schedule",
      "Paid time off",
      "Holidays",
      "Parental leave"
  ]
}
const contact = {
    label: "Apply",
    link: "mailto:careers@artesion.com",
    email: "careers@artesion.com"
}

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
                {listings.map((job) => (
                    <li key={job.jobTitle}>
                        <div className="space-y-4 rounded-lg">
                            <section>
                                <div className="relative flex flex-col justify-center items-center overflow-hidden p-2">
                                    <div className="bg-white shadow w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md">
                                        <div>
                                            <div className="float-right"><button>
                                                <a href={`${contact.link}?subject=${job.jobTitle.replace(' ', '%20')}`} className="bg-blue-800 text-white font-medium px-7 py-2 rounded-full flex gap-1 items-center foa-book">
                                                    {contact.label}
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
                                            {job.sections.map(section => (
                                                <div>
                                                    <div>&nbsp;</div>
                                                    <div><span><u>{section.label}</u></span>
                                                        {section.items.map(item => (
                                                            <div className="indent-3 list-inside">- {item}</div>
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
    list.map(item => {
        if (!first) paragraphs.push(<div>&nbsp;</div>)
        first = false
        paragraphs.push(<div>{item}</div>)
    })
    return (
        <div>
            { paragraphs }
        </div>
    )
}

const listings = [
    {
        jobTitle: "Graph Analytics Software Engineer",
        jobType: "Full-Time, Remote",
        description: {
            paragraphs: [
                companyBlurb,
                "Artesion is project funded and you’d be getting in on the ground floor with an opportunity to grow your skill set as you contribute to the core platform and client projects. We are looking for an experienced software engineer with a background in graph databases including data modeling and using graph algorithms to solve complex problems."
            ]
        },
        sections: [
            {
                label: "Basic Qualifications:",
                items: [
                    "Bachelor’s degree in computer science, data science, engineering or related field",
                    "Strong understanding of graph database concepts and experience with technologies such as OrientDB, Neo4j, TigerGraph, JanusGraph, etc.",
                    "Demonstrated ability to perform data modeling and apply graph algorithms to solve problems",
                    "Well versed in linux flavored operating systems as a development platform and Git for source control",
                    "Proficient developer in a modern language such as Kotlin, Java, Python, c#, R, Go, etc.",
                    "Familiarity with containerization tools such as, Docker, Podman, k8s, Rancher",
                    "Experience with messaging or event platforms like, Kafka, Pulsar, MQTT, is a plus",
                    "Strong problem-solving and analytical skills",
                    "Excellent communication and collaboration abilities",
                    "US Citizen"
                ]
            },
            {
                label: "Additional Desired Skills",
                items: [
                    "Familiarity with machine learning techniques for graph analytics",
                    "Background with AI, tensors, LLM, etc. and AI training techniques",
                    "Experience with Spark & GraphX",
                    "MongoDB, Redis, RocksDB, etc",
                    "Understanding of the CAP theorem, why it’s important, and how to apply it",
                    "Security Clearance (or ability to obtain clearance)"
                ]
            },
            benefits
        ]
    },
    {
    jobTitle: "Java Software Engineer",
    jobType: "Full-Time, Remote",
    description: {
      paragraphs: [
          companyBlurb,
          "Artesion is project funded and you’d be getting in on the ground floor with an opportunity to grow your skillset as you contribute to the core platform and client projects. We are looking for an experienced Kotlin/Java Software Engineer with a passion for building large-scale edge-based solutions. "
      ]
    },
    sections: [
      {
        label: "General:",
        items: [
            "4 years of experience in the JVM ecosystem",
            "Comfortable working within Spring Boot",
            "Well versed using linux flavored operating systems as a development platform",
            "Domain Driven Design and working in scrum teams",
            "Must know Git, Git branching and tagging and CI/CD concepts",
            "US Citizen"
        ]
      },
      {
        label: "Languages:",
        items: [
            "Java (Must)",
            "Kotlin (Preferred)",
            "TypeScript, Javascript, Python, Go a plus"
        ]
      },
      {
        label: "Platforms:",
        items: [
            "Modern clustered NoSQL databases such as, MongoDB, Redis, RocksDB, etc.",
            "Messaging or Event based tools such as Kafka, Pulsar, mqtt desired",
            "Kubernetes, Rancher, Docker, Podman, familiarity desired"
        ]
      },
      {
        label: "Pluses:",
        items: [
            "Event driven architecture knowledge",
            "AI, Analytics or Data science experience",
            "Graph database experience including data modeling, OrientDB, Neo4j, TigerGraph, etc."
        ]
      },
      benefits
    ]
  }
];

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
                  exceptional team email resume and cover letter to <a href={contact.link}>{contact.email}</a>.
              </div>
           </div>
              {renderPostings(true)}
           </div>
        </div>
      </div>
    </>
  );
}
