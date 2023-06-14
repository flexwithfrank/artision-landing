import {v4 as uuid} from "uuid"

export const jobData = {
    benefits: {
        label: "Benefits:",
        items: [
            "Health insurance",
            "Dental and vision insurance",
            "Flexible schedule",
            "Paid time off",
            "Holidays",
            "Parental leave"
        ]
    },
    contact: {
        label: "Apply",
        link: "mailto:careers@artesion.com",
        email: "careers@artesion.com"
    },
    jobs: [
        {
            id: uuid(),
            active: true,
            jobTitle: "Graph Analytics Software Engineer",
            jobType: "Full-Time, Remote",
            description: {
                paragraphs: [
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
                }
            ]
        },
        {
            id: uuid(),
            active: true,
            jobTitle: "Java Software Engineer",
            jobType: "Full-Time, Remote",
            description: {
                paragraphs: [
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
                }
            ]
        }
    ]
}
