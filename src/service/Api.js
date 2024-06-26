import { FaRegLightbulb } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { GrCopy } from "react-icons/gr";

export const serviceData = [
  {
    count: "01.",
    title: "Communication Solutions",
    content:
      "Effective & reliable communication is the secret that lies at the heart of every successful business.",
    link: "/servicesolution"
  },
  {
    count: "02.",
    title: "Software Development",
    content:
      "Any business that aims to offer a personalized service needs to cater to its own specific needs first.",
    link: "/servicesoftware"
  },
  {
    count: "03.",
    title: "Process Automation",
    content:
      "You need to free your teams from drudgery of routine tasks to enhance customers’ experience.",
    link: "/serviceautomation"
  },
];

// TESTMONIAL CONTENT SECTION
export const testContent = [
  {
    title: "Brian Colombiana",
    subtitle: "Smart Automation Systems",
    content: "GoMarkho crafts highly stable applications with exceptional support, backed by a vast team of experts enabling rapid infrastructure scaling.",
    img: '/image/testmonial/img-1.png',
    videoLink: "/image/testmonial/video-1.mp4"
  },
  {
    title: "Marcos Manzi",
    subtitle: "CEO at TeleConnect Solutions",
    content: `GoMarkho's VoIP solutions revolutionize communication infrastructure, making them a top choice for organizations seeking streamlined voice workflows.`,
    img: "/image/testmonial/img-5.png",
    videoLink: "/image/testmonial/video-2.mp4"
  },
  {
    title: "John Smith",
    subtitle: "IT Manager at ConnectGlobal",
    content:
      "GoMarkho's VoIP and automation expertise revolutionized our communication, delivering unmatched efficiency and transforming our operations.",
    img: '/image/testmonial/img-3.png',
  },
  {
    title: "emily Brown",
    subtitle: "Operations Director",
    content: "GoMarkho IT services are highly regarded for their 24/7 support, swiftly resolving assistance needs with efficiency and reliability.",
    img: '/image/testmonial/img-4.png',
  },
  {
    title: "David Martinez",
    subtitle: "CTO at CommuniTech Innovations",
    content: "GoMarkho's VoIP services have enhanced our customer support capabilities, enabling exceptional service delivery through intuitive call routing.",
    img: '/image/testmonial/img-5.png',
  },
  {
    title: "Lisa Taylor",
    subtitle: "Customer Manager ",
    content:
      "Choosing GoMarkho was transformative for us. Their VoIP expertise and automation streamlined communication, boosting efficiency. ",
    img: '/image/testmonial/img-6.png',
  },
];
// ABOUT STORY CONTENT
export const storyContent = [
  {
    icon: <FaRegLightbulb />,
    title: 'Innovation',
    content: 'Innovation threads through our DNA, sparking creativity and progress in every venture we undertake.',
  },
  {
    icon: <FaUserFriends />,
    title: 'Team work',
    content: 'Teamwork is our driving force, weaving diverse skills into a tapestry of shared success and collective achievements.',
  },
  {
    icon: <FaAward />,
    title: 'Integrity',
    content: 'In the spirit of true partnership, we want to do right by you and that means we will advise and provide you with the solutions we think are best for you.',
  },
  {
    icon: <GrCopy />,
    title: 'Responsibility',
    content: 'For us it is not about a one-time sale, we will be your technology partners and thus our approach to work in action-oriented and result driven.',
  },
]


// CAREER TRACKER CONTENT
export const trackerContent = [
  { img: '/image/career/career-tracker/img-1.png', title: 'Experienced Professionals' },
  { img: '/image/career/career-tracker/img-2.png', title: 'Graduates' },
  { img: '/image/career/career-tracker/img-3.png', title: 'Internship/MTO' },
]


// CAREER JOB CARD CONTENT
export const jobContent = [
  {
    id: 0,
    title: 'Project Manager',
    location: 'Islamabad, Pakistan',
    jobType: 'Full Time',
    content: 'Lead the successful delivery of projects, overseeing timelines, budgets, and resources to achieve client objectives.',
    role: [
      "Lead the planning and execution of projects, including VoIP system deployments as well as other projects as assigned.",
      "Define project scope, objectives, and deliverables in collaboration with stakeholders and clients.",
      "Develop project plans, timelines, and budgets, and track progress against milestones and KPIs.",
      "Coordinate with internal teams and external vendors to ensure timely delivery of project deliverables.",
      "Communicate project status, risks, and issues to stakeholders and propose solutions to mitigate risks and resolve issues.",
      "Conduct regular project meetings, including kick-off meetings, status meetings, and post-mortem reviews.",
      "Monitor project budget and expenses, and ensure adherence to budget constraints and financial targets.",
      "Ensure compliance with project management methodologies and best practices."
    ],
    requirement: [
      "Bachelor's or Master's degree in Project Management, Business Administration, or a related field.",
      "Proven experience of 0 – 3 years as a Project Manager, with experience in managing VoIP-related projects being a plus.",
      "Strong understanding of project management principles, methodologies, and tools.",
      "Excellent communication, leadership, and stakeholder management skills.",
      "Strong analytical and problem-solving skills, with the ability to identify and address project risks and issues proactively.",
    ],
  },

  {
    id: 1,
    title: 'Front-end developer',
    location: 'Islamabad, Pakistan',
    jobType: 'Full Time',
    content: 'Bring design mockups to life with responsive and interactive web interfaces, enhancing user engagement.',
    role: [
      "Develop responsive and user-friendly web interfaces based on design mockups and wireframes.",
      "Collaborate with UI/UX designers and backend developers to bridge the gap between design and technical implementation.",
      "Optimize application performance for maximum speed and scalability.",
      "Ensure cross-browser and cross-device compatibility by conducting thorough testing and debugging.",
      "Implement and maintain frontend build pipelines and automation tools.",
      "Stay updated on emerging frontend technologies and best practices.",
      "Troubleshoot and resolve frontend-related issues as they arise",
    ],
    requirement: [
      "Bachelor's or Master's degree in Computer Science, Engineering, or a related field.",
      "Proven experience of 0 – 3 years as a Frontend Developer, with a strong portfolio showcasing your coding skills.",
      "Proficiency in HTML, CSS, and JavaScript, with experience in modern frontend frameworks such as React, Angular.",
      "Solid understanding of responsive design principles and mobile-first development.",
      "Experience with version control systems (e.g., Git) and frontend build tools (e.g., Webpack, Gulp).",
      "Hands-on experience with both white box and black box testing.",
      "Strong problem-solving skills and attention to detail.",
    ],
  },

  {
    id: 2,
    title: 'Quality Assurance Engineer',
    location: 'Islamabad, Pakistan',
    jobType: 'Full Time',
    content: 'Ensure the seamless functionality and reliability of our products through meticulous testing and analysis.',
    role: [
      "Review, analyse and evaluate product code according to system specifications.",
      "Create and execute detailed and well-structured test plans and test cases (manual or automated) and analyse results.",
      "Plan and coordinate testing activities.",
      "Create logs to identify, track and document testing phases and defects.",
      "Design, develop and execute automation scripts using open-source tools (Jira, Selenium, JMeter)",
      "Perform thorough regression testing when bugs are resolved.",
      "Develop and apply testing processes for new and existing products to meet client needs.",
      "Work with cross-functional teams to ensure quality throughout the software development lifecycle.",
    ],
    requirement: [
      "BS/MS degree in Computer Science, Engineering, or a related field.",
      "Proven experience of 0 – 3 years as a quality assurance tester.",
      "Strong knowledge of software QA methodologies, tools, and processes.",
      "Experience in writing concise, and comprehensive test plans and test cases.",
      "Hands-on experience with both white box and black box testing.",
      "Experience in GUI test automation by using Selenium Web Driver (Web application)",
    ],
  },

  {
    id: 3,
    title: 'UI / UX Designer',
    location: 'Islamabad, Pakistan',
    jobType: 'Full Time',
    content: 'Craft intuitive and visually engaging user experiences for our digital products with user-centric design principles.',
    role: [
      "Collaborate with product managers and developers to understand user requirements and business goals.",
      "Design intuitive and visually appealing user interfaces for web and mobile applications.",
      "Create wireframes, prototypes, and mockups to communicate design concepts effectively.",
      "Conduct user research, including interviews, surveys, and usability testing, to gather insights and validate design decisions.",
      "Iterate on designs based on feedback from stakeholders and end-users.",
      "Work closely with development teams to ensure seamless implementation of designs.",
      "Stay updated on industry trends and best practices in UI/UX design.",
    ],
    requirement: [
      "Bachelor's or Master's degree in Design, Human-Computer Interaction, or a related field.",
      "Proven experience of 0 – 3 years as a UI/UX Designer, with a strong portfolio showcasing your design skills and process.",
      "Proficiency in design tools such as Adobe XD, Sketch, Figma, or similar.",
      "Strong understanding of user-centered design principles and methodologies.",
      "Experience with user research techniques and usability testing.",
      "Familiarity with front-end development technologies (HTML, CSS, JavaScript) is a plus.",
    ]
  },

  {
    id: 4,
    title: 'Backend Developer',
    location: 'Islamabad, Pakistan',
    jobType: 'Full Time',
    content: 'Build robust and scalable server-side solutions to power our web applications, ensuring optimal performance.',
    role: [
      "Design and develop server-side logic and database schemas for web applications.",
      "Collaborate with frontend developers and UI/UX designers to integrate frontend components with backend functionality.",
      "Implement RESTful APIs and microservices to facilitate communication between frontend and backend systems.",
      "Optimize application performance and scalability by implementing caching mechanisms, database indexing, and other optimization techniques.",
      "Implement security features and protocols to protect sensitive data and prevent unauthorized access.",
      "Monitor and troubleshoot backend-related issues, including performance bottlenecks and system failures.",
      "Stay updated on emerging backend technologies and best practices.",
    ],
    requirement: [
      "Bachelor's or Master's degree in Computer Science, Engineering, or a related field.",
      "Proven experience of 0 – 3 years as a Backend Developer, with a strong portfolio showcasing your coding skills.",
      "Proficiency in backend programming languages such as Java, Python, Node.js, or Ruby.",
      "Experience with backend frameworks such as Spring Boot, Django, Express.js, or Ruby on Rails.",
      "Solid understanding of relational and NoSQL databases, including database design and optimization.",
      "Familiarity with cloud platforms and services (e.g., AWS, Azure, Google Cloud Platform).",
    ],
  },

  {
    id: 5,
    title: 'Devops/VoIP Engineer',
    location: 'Islamabad, Pakistan',
    jobType: 'Full Time',
    content: 'Architect and automate the deployment and management of VoIP solutions, ensuring high availability and scalability.',
    role: [
      "Design, implement, and maintain  VoIP solutions, using tools such as Terraform, Ansible, or Chef.",
      "Configure and manage VoIP platforms and systems, such as Asterisk, FreeSWITCH, or Cisco Unified Communications Manager.",
      "Automate deployment, scaling, and monitoring of VoIP services using containerization technologies (e.g., Docker, Kubernetes).",
      "Collaborate  to implement CI/CD pipelines for automated testing, and deployment of VoIP applications and services.",
      "Monitor and troubleshoot VoIP-related issues, and implement solutions to address them proactively.",
      "Implement security measures and best practices to protect VoIP infrastructure and data from unauthorized access.",
      "Provide support and technical expertise to operations and support teams for diagnosing and resolving VoIP-related issues.",
      "Stay updated on emerging technologies and best practices in DevOps and VoIP engineering, and recommend improvements to infrastructure and processes."
    ],
    requirement: [
      "Bachelor's or Master's degree in Computer Science, Engineering, or a related field.",
      "Proven experience of 0 – 3 years as a DevOps Engineer, with experience in VoIP engineering being a plus.",
      "Strong understanding of DevOps principles and practices, including continuous integration, and continuous deployment.",
      "Experience with cloud platforms and services (e.g., AWS, Azure, Google Cloud Platform).",
      "Proficiency in scripting and programming languages such as Python, Bash, or Ruby.",
      "Familiarity with VoIP protocols and technologies, such as SIP, RTP, VoIP codecs, and VoIP platforms/systems.",
    ],
  },

]


// CAREER HIRING CARD CONTENT 
export const hiringContent = [
  { img: '/image/career/career-hiring/img-1.svg', title: '01', subtitle: 'apply', content: 'Please browse through the job openings and submit your application for positions that match your skillset.' },
  { img: '/image/career/career-hiring/img-2.svg', title: '02', subtitle: 'review', content: 'Our recruiters will review your application and match you with the best-fit opportunity.' },
  { img: '/image/career/career-hiring/img-3.svg', title: '03', subtitle: 'interviews', content: 'Our interviewing process is competency-based, designed to identify individuals thrive.' },
  { img: '/image/career/career-hiring/img-4.svg', title: '04', subtitle: 'on borading', content: 'Our onboarding process will refine and prepare you for your professional journey with GoMarkho.' },
];


// CONTACT ACCORDIN CONTENT
export const accordinContent = [
  {
    title: `How can GoMarkho enhance business communication?`,
    content: 'GoMarkho specializes in providing tailored VoIP solutions, software development, and intelligent automation. We empower businesses with cost-efficient communication systems, cutting-edge software, and streamlined workflows to enhance connectivity, operational efficiency, and overall growth.'
  },
  {
    title: "What sets GoMarkho apart from other communication solution providers?",
    content: 'What distinguishes GoMarkho is our commitment to innovation, customization, and seamless integration. We offer a comprehensive suite of services, combining expertise in VoIP, software development, and intelligent automation, ensuring that your business receives a unique, end-to-end solution tailored to your specific needs.'
  },
  {
    title: "How does the implementation work for your solutions?",
    content: 'Our implementation process is designed for simplicity and efficiency. We start with a thorough assessment of your requirements, followed by a seamless integration plan. Our team ensures a smooth transition, providing training and support to guarantee a successful implementation and optimal utilization of our solutions.'
  },
  {
    title: "Can GoMarkho assist with ongoing support?",
    content: 'Absolutely. GoMarkho is committed to providing continuous support. Our team is available to address any queries, troubleshoot issues, and ensure that your systems are always running at their best. We offer ongoing maintenance to keep your communication infrastructure reliable and up-to-date.'
  },
  {
    title: "What industries does GoMarkho cater to?",
    content: 'GoMarkho caters to a diverse range of industries, including but not limited to [list of specific industries]. Our customizable solutions are designed to meet the unique communication needs of businesses across various sectors, ensuring versatility and adaptability to specific industry requirements.'
  },
]


// BLOG CONTENT
export const blogContent = [
  {
    date: 'January 04, 2023',
    title: 'Mastering the Art of Digital Marketing',
    content: 'Navigate remote work successfully with strategies for productivity and maintaining work-life balance.',
    link: "https://coda.io/d/Mastering-the-Art-of-Digital-Marketing_dm64V67-ehs/Mastering-the-Art-of-Digital-Marketing-Strategies-for-Success-in_suZiB#_luI6y",
  },
  {
    date: 'January 15, 2023',
    title: 'Strategies for Remote Work Success',
    content: 'Navigate remote work successfully with strategies for productivity and maintaining work-life balance.',
    link: "https://coda.io/d/Navigating-the-New-Normal_dWI-cjFdsH3/Navigating-the-New-Normal-Strategies-for-Remote-Work-Success_su7q4#_luvtH",
  },
  {
    date: 'February 18, 2023',
    title: 'Unleashing the Power of VoIP',
    content: `Discover global connectivity and seamless collaboration solutions with VoIP's communication revolution.`,
    link: "https://coda.io/d/Unleashing-the-Power-of-VoIP_dEGlb0x6Z-B/Unleashing-the-Power-of-VoIP-Revolutionizing-Communication-in-th_suNKc#_luIk6",
  },
  {
    date: 'March 10, 2023',
    title: '10 Tips for Making Automation Easy',
    content: `Streamline tasks effortlessly with 10 automation tips for boosted efficiency in your workflow.`,
    link: "https://coda.io/d/10-Tips-for-Making-Automation-Easy_dLC6eWr7-xA/10-Tips-for-Making-Automation-Easy_suuOp#_luldw",
  },
]


// SOLUTION CARD CONTENT
export const solutionCardContent = [
  {
    icon: '/image/solution/benefit/icon-1.svg',
    title: 'cost Effective',
    content: 'VoIP is a cost-effective option because it lets you leverage the internet service you are already using.'
  },
  {
    icon: '/image/solution/benefit/icon-2.svg',
    title: 'Flexible',
    content: 'VoIP solutions allow you to integrate critical communications tools, such as video conferencing.  '
  },
  {
    icon: '/image/solution/benefit/icon-3.svg',
    title: 'Reliable',
    content: 'VoIP solutions help maintain business continuity by forwarding calls to preset numbers in case of any untoward incident.'
  },
]

// SOLUTION TAB CONTENT
export const solutionTabContent = [
  {
    icon: '/image/solution/tab/img-3.svg',
    title: 'Hosted PBX'
  },
  {
    icon: '/image/solution/tab/img-1.svg',
    // icon: '/image/solution/tab/img-2.svg',
    title: 'Voice Broadcasting'
  },
  {
    icon: '/image/solution/tab/img-2.svg',
    // icon: '/image/solution/tab/img-3.svg',
    title: 'Interactive Voice Response'
  },
  {
    icon: '/image/solution/tab/img-4.svg',
    title: 'Ringless Voicemail'
  },
]


// SOLUTION FEATURE CARD CONTENT
export const solutionFeatureCard = [
  {
    icon: '/image/solution/feature/img-1.png',
    title: 'Secured Platform',
    content: "We make sure every system we make stay safe for users as well as customers, as security is our key component.",
  },
  {
    icon: '/image/solution/feature/img-2.png',
    title: 'Unlimited Scalability',
    content: "We provide multiple iterations and leave space for scalability in future maintenance phases.",
  },
  {
    icon: '/image/solution/feature/img-3.png',
    title: 'Automated Calls',
    content: "It involves auto attendant, calling in business hours, block calls, voicemails, call transfer, call recording and monitoring, etc.",
  },
]


// SOLUTION CARD CONTENT
export const DevelopmentCardContent = [
  {
    icon: '/image/solution/benefit/icon-1.svg',
    title: 'cost Effective',
    content: 'VoIP is a cost-effective option because it lets you leverage the internet service you are already using.'
  },
  {
    icon: '/image/solution/benefit/icon-2.svg',
    title: 'Flexible',
    content: 'VoIP solutions allow you to integrate critical communications tools, such as video conferencing.  '
  },
  {
    icon: '/image/solution/benefit/icon-3.svg',
    title: 'Reliable',
    content: 'VoIP solutions help maintain business continuity by forwarding calls to preset numbers in case of any untoward incident.'
  },
]


// SOFTWARE DEVELOPEMENT BENEFIT CARD CONTENT
export const developmentCard = [
  {
    icon: '/image/software-development/benefit/img-1.svg',
    title: 'Cost Effective',
    content: "Custom solutions are a smart investment. They save you from the hassle of investing in multiple partially suitable software purchases.",
  },
  {
    icon: '/image/software-development/benefit/img-2.svg',
    title: 'Scalability',
    content: "Businesses grow and their processes become more complex. This can be too much to handle for off-the-shelf solutions.",
  },
  {
    icon: '/image/software-development/benefit/img-3.svg',
    title: 'Security',
    content: "A public software is available to everyone and is an easy target for hackers, while a custom-developed software is harder for hackers.",
  },
  {
    icon: '/image/software-development/benefit/img-4.svg',
    title: 'Efficiency ',
    content: "Using a software that is designed to cater to your needs will enable your team to perform tasks faster and more efficiently.",
  },
]

// DEVELOPMENT  TAB CONTENT
export const developmentTabContent = [
  {
    icon: '/image/software-development/tab/img-1.svg',
    title: 'business Interaction'
  },
  {
    icon: '/image/software-development/tab/img-2.svg',
    title: 'B2C Interactions'
  },
  {
    icon: '/image/software-development/tab/img-3.svg',
    title: 'B2B Dealings'
  },
]


// SERVICE AUTOMATION CARD CONTENT
export const automationCardContent = [
  {
    icon: '/image/service-automation/benefit/img-1.svg',
    title: 'cost Effective',
    content: 'Automation may seems like an expensive project but in reality it frees up employees for higher value work.'
  },
  {
    icon: '/image/service-automation/benefit/img-2.svg',
    title: 'Better User Experience',
    content: 'Greater insight into your target audience allows you to offer your consumers a more personalized experience.'
  },
  {
    icon: '/image/service-automation/benefit/img-3.svg',
    title: 'Improved Efficiency',
    content: 'It is a cost-effective option because it lets you leverage the internet service you are already using.'
  },
]


// DEVELOPMENT  TAB CONTENT
export const automationTabContent = [
  {
    icon: '/image/service-automation/tab/img-1.svg',
    title: 'Workflow Optimization'
  },
  {
    icon: '/image/service-automation/tab/img-2.svg',
    title: 'Marketing Automation'
  },
]

