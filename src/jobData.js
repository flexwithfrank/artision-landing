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
            jobTitle: "Data Scientist",
            jobType: "Full-Time, Remote",
            description: {
                paragraphs: [
                    "Artesion is project funded and you’d be getting in on the ground floor with an opportunity to apply and grow your skill set while you contribute to the core AI/ML & Analytics platform. We are looking for an experienced data scientist that enjoys the implementation side of data science."
                ]
            },
            sections: [
                {
                    label: "Basic Qualifications:",
                    items: [
                        "Bachelor’s degree in computer science, data science, engineering or related field",
                        "Expertise in advanced analytics, including data aggregation, statistical and predictive modeling, and machine learning",
                        "Background with AI, tensors, LLM, etc. and AI training techniques",
                        "Experience with Spark, GraphX, Gremlin, TinkerPop, Pytorch",
                        "Understanding of graph database concepts and experience with technologies such as OrientDB, Neo4j, TigerGraph, JanusGraph, etc.",
                        "Comfortable with linux/mac as a development platform and Git for source control",
                        "Proficient with languages such as Python, R, Go, Kotlin/Java, etc.",
                        "Strong problem-solving and analytical skills",
                        "Excellent communication and collaboration abilities"
                    ]
                },
                {
                    label: "Additional Desired Skills",
                    items: [
                        "Hands on experience with anomaly detection techniques and algorithms",
                        "Familiarity with containerization tools such as, Docker, Podman, k8s, Rancher",
                        "MongoDB, Redis, RocksDB, etc",
                        "Security Clearance (or ability to obtain clearance)"
                    ]
                }
            ]
        },
        {
            id: uuid(),
            active: true,
            jobTitle: "Sr Software Engineer",
            jobType: "Full-Time, Remote",
            description: {
                paragraphs: [
                    "Artesion is project funded and you’d be getting in on the ground floor with an opportunity to apply and grow your skill set while contributing to the core platform and client projects. We are looking for an experienced Kotlin/Java Software Engineer with a passion for building large-scale edge-based distributed solutions. "
                ]
            },
            sections: [
                {
                    label: "Basic Qualifications:",
                    items: [
                        "Bachelor’s degree in computer science, engineering or related field",
                        "5+ years of experience in the JVM ecosystem, Kotlin preferred",
                        "Comfortable working within Spring Boot",
                        "Must have experience with NoSQL databases such as MongoDB, Redis, RocksDB, etc.",
                        "Experience with Event Sourcing and message based application development (NATS, Kafka, Pulsar, etc.)",
                        "Understanding of containerization and tools like Docker, Rancher, Kubernetes",
                        "Able to use linux flavored operating systems as a development platform",
                        "Strong problem-solving and analytical skills",
                        "Excellent communication and collaboration abilities",
                        "Must know Git, Git branching and tagging and CI/CD concepts",
                    ]
                },
                {
                    label: "Additional Desired Skills",
                    items: [
                        "Understanding of the CAP theorem, why it’s important, and how to apply it",
                        "Devops crossover work (CI pipelines, SAST, DAST)",
                        "Experience with Domain Driven Design and knowledgeable with Twelve-Factor App principles",
                        "Security Clearance (or ability to obtain clearance)"
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
                        "AI, Analytics or Data science experience",
                        "Graph database experience including data modeling, OrientDB, Neo4j, TigerGraph, etc."
                    ]
                }
            ]
        }
    ]
}
