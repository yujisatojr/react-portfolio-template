// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { faReact, faAppStoreIos, faDocker, faPython } from '@fortawesome/free-brands-svg-icons'

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Yuji",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "hello@chetanverma.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Project One", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://www.yujisatojr.com/static/media/mockup4.5566450f.png",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
      head: "Integrated Learning Platform: Datum",
      desc: "Used: Ruby on Rails, ReactJS, HTML, SCSS, PostgreSQL",
    },
    {
      title: "Project Two", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://yuji-aws-bucket.s3.us-east-2.amazonaws.com/real-estate-app-mockup.11572062.png",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
      head: "Real Estate Asset Management Mobile App",
      desc: "Used: Ruby on Rails, PostgreSQL",
    },
    {
      title: "Project Three", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://yuji-aws-bucket.s3.us-east-2.amazonaws.com/screencapture-byuh-edu-covid-19-case-management-2021-05-01-00_38_00.png",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
      head: "COVID-19 Case Management Dashboard",
      desc: "Used: Chart.js",
    },
    {
      title: "Project Four", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://yuji-aws-bucket.s3.us-east-2.amazonaws.com/screencapture-holokai-byuh-edu-programs-of-study-2021-05-01-00_38_15.png",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
      head: "Holokai Programs of Study module",
      desc: "Used: Java, Handlebars, LESS, JSON"
    },
    {
      title: "Project Five", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://yuji-aws-bucket.s3.us-east-2.amazonaws.com/screencapture-hookele-byuh-edu-transfer-evaluation-guidelines-and-matrix-2021-05-01-00_38_34.png",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
      head: "Hoʻokele Admissions module",
      desc: "Used: Java, Handlebars, LESS, JSON"
    },
    {
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://yuji-aws-bucket.s3.us-east-2.amazonaws.com/screencapture-enabling-jp-2021-05-01-00_39_12.png",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
      head: "Enabling official website",
      desc: "Used: PHP, HTML, CSS"
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hi! My name is Yuji. I am a self-motivated developer and passionate about utilizing technology to turn creative ideas into tangible business values. I believe that using the right digital tools can maximize our ability to serve others and enhance each user’s experience. I am also a committed life-long learner and eager to implement more efficient algorithms.",
  aboutParaTwo:
    "Specialties: software development, mobile & web applications development, RESTful API, data analysis, data visualization, machine learning.",
  aboutParaThree:
    "If I am not coding, you can find me hiking, surfing, traveling, playing the guitar, taking photographs, or hanging out with my wife.",
  aboutImage:
    "https://yuji-aws-bucket.s3.us-east-2.amazonaws.com/profile.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      icon: faReact,
      h5:
        "Frontend/Backend Web Development",
      para:
        "I have worked as a frontend / backend web developer in the higher education industry. Implementing effective designs to improve each user's experience (UX) is my drive. Experience in JavaScript, ReactJS, Django, Ruby on Rails, HTML, CSS, SASS, LESS, PHP, Handlebars.js",
    },
    {
      icon: faAppStoreIos,
      h5:
        "Mobile App Development",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      icon: faDocker,
      h5:
        "Software Development",
      para:
        "My experience in software development & mobile/web applications development includes building iOS/Android applications, an automated web-scraping program, and Mendix applications.",
    },
    {
      icon: faPython,
      h5:
        "Data Analysis",
      para:
        "Data analysis is how I attempt to interact and understand the world. I have professonal experience of analyzing dataset contains over 800000+ rows for a real estate company in Japan. Experience in Python libralies (NumPy, Pandas, Matplotlib, Seaborn, and Sklearn), R, MySQL, PostgreSQL, Tensorflow",
    },
    {
      icon: faBrain,
      h5:
        "Machine Learning",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      icon: faBrain,
      h5:
        "BI Intelligence",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/chetanverma16" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
