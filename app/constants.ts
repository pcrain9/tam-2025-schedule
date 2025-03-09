import type { AccordionProps } from "./types";

export const accordionProps: AccordionProps[] = [
  {
    id: 0,
    title: "Sunday, April 6th",
    open: false,
    events: [
      { id: 0, title: "Conference Registration", time: "5pm-6pm" },
      { id: 1, title: "Opening Reception", time: "6pm-8pm" },
    ],
  },
  {
    id: 1,
    title: "Monday, April 7th",
    open: false,
    events: [
      { id: 0, title: "Conference Registration", time: "8am-4:30pm" },
      { id: 1, title: "Breakfast with Exhibitors", time: "8am-9am" },
      {
        id: 2,
        title: "Opening Remarks and TAM 50th Anniversary Retrospective",
        time: "8:30am-9:30am",
      },
      { id: 3, title: "Break", time: "9:30am-9:45am" },
      {
        id: 4,
        title:
          "Affinity Group: CMC - Creative Solutions for Museum Preservation ",
        speakers: [
          {
            name: "Aubrey Nielsen",
            headshot: "/head-shots/aubrey-nielsen.jpg",
            institution: "Brownsville Historical Association",
          },
          {
            name: "Cecilia Abad",
            headshot: "/head-shots/cecilia-abad.jpg",
            institution: "Texas Historical Commission",
          },
        ],
        time: "9:45am-10:45am",
        description:
          "Join the Collections Managers Committee (CMC) Affinity Group to discuss creative solutions. Whether you are a seasoned professional or new to the field, come prepared to share your stories, challenges, and successes in collections while navigating budget constraints.",
      },
      {
        id: 5,
        title: "Affinity Group: TAMEC Roundtable",
        time: "9:45am-10:45am",
        speakers: [
          {
            name: "Erin Whitmore",
            institution: "The Old Jail Art Center",
            headshot: "/head-shots/erin-whitmore.jpeg",
          },
        ],
      },
      {
        id: 6,
        title:
          "There's No 'I' in Museum: Using Heritage Tourism to Teach Collaboration",
        time: "9:45am-10:45am",
        description:
          "This session highlights the Texas Historical Commission’s (THC) unique approach to implementing the Smithsonian’s Museum on Main Street (MoMS) program, a traveling exhibition program serving rural towns across America. Exploring the program's heritage tourism potential, the THC designed its MoMS training to advance interdisciplinary partnerships and emphasize the strategic alignment of storytelling, experience development, and promotion. This approach made room for different kinds of community organizations and their unique skills. More importantly, it treated capacity-building, specifically in regard to the cultivation of robust heritage landscapes, as a community-wide or regional aim, not just an organizational one. Attendees will hear from THC staff and past MoMS participants on successful partnerships, challenges, and lessons learned. Key takeaways include strategies for regional collaboration, understanding different organizational needs, and best practices for heritage tourism initiatives.",
        speakers: [
          {
            name: "Jennifer Eckermann",
            institution: "Visit Brenham/City of Brenham",
            headshot: "/head-shots/jennifer-eckermann.jpg",
          },
          {
            name: "Mallory Laurel",
            institution: "Texas Historical Commission",
            headshot: "/head-shots/mallory-laurel.jpg",
          },
          {
            name: "Erin Shields",
            institution: "The Old Jail Art Center",
            headshot: "/head-shots/erin-shields.jpg",
          },

          {
            name: "Shelby Curtis",
            institution: "City of San Augustine",
            headshot: "/head-shots/shelby-curtis.jpg",
          },
        ],
      },
      {
        id: 7,
        title: "Inspired: Small Museums Share Impact of IMLS Inspire grants",
        description:
          "The IMLS Inspire grant for small museums funds projects between $5,000 and $25,000 requiring no matching funds and those projects requesting funding between $25,001 and $75,000 do require a 1:1 match in two categories: Lifelong Learning and Collections Access and Stewardship. These funds can be transformative for small museums enabling giant leaps forward, incremental change, and exploration of new initiatives that would otherwise be unattainable due to limited resources. Inspire grant recipients share their experiences and the impact these project-specific grant funds have made on their museums. Participants will gain insights on the Inspire grant process through peer-to-peer learning from these case studies.",
        time: "9:45am-10:45am",
        speakers: [
          {
            name: "Caitlin Clay",
            institution: "Art Museum of Southeast Texas",
            headshot: "/head-shots/caitlin-clay.jpg",
          },
          {
            name: "Marcelo Ramirez Garcia-Rojas",
            institution: "International Museum of Art and Science",
            headshot: "/head-shots/marcelo-ramirez-garcia-rojas.JPG",
          },
          {
            name: "Melinda McPeek",
            institution: "Institute of Museum and Library Services ",
            headshot: "/head-shots/melinda-mcpeek.gif",
          },
          {
            name: "Michael Ables",
            institution: "Texas Maritime Museum",
            headshot: "/head-shots/michael-ables.jpeg",
          },
        ],
      },
      {
        id: 8,
        title: "From the Magnificent to the Mundane",
        time: "9:45am-10:45am",
        speakers: [
          {
            name: "Paul Cato",
            institution: "Neill-Cochran House Museum",
            headshot: "/head-shots/paul-cato.jpg",
          },
          {
            name: "Daniel Carey-Whalen",
            institution: "Centennial Museum and Chihuahuan Desert Gardens",
            headshot: "/head-shots/daniel-carey-whalen.jpg",
          },
          {
            name: "Nikki Diller",
            institution: "Fort Worth Museum of Science and History",
            headshot: "/head-shots/nikki-diller.jpg",
          },
        ],
        description:
          "This session explores mundane programs like Docusign, practical programs like CatalogIt, and magnificent technology like the Omni Digital Dome. Come hear about three different institutions' experiences with very different technology. How can technology help your museum improve its operations or expand your visitor experiences?",
      },
      { id: 9, title: "Break", time: "10:45am-11am" },
      {
        id: 10,
        title: "Affinity Group: MELT",
        time: "11am-12pm",
        speakers: [
          {
            name: "Chris Dyer",
            institution: "Dr Pepper Museum",
            headshot: "/head-shots/chris-dyer.JPG",
          },
          {
            name: "Rachael A. Nadeau Johnson",
            institution: "Dr Pepper Museum",
            headshot: "/head-shots/rachael-nadeau.jpg",
          },
          {
            name: "Coyote Balderrama Shook",
            institution: "Bullock Texas State History Museum",
            headshot: "/head-shots/coyote-shook.jpg",
          },
          {
            name: "April Love",
            institution: "Mayborn Museum",
            headshot: "/head-shots/april-love.jpeg",
          },
        ],
        description:
          "Forms and policies are part of everyday life in museums and cultural institutions. These look different not only in different departments but also across different types and sizes of institutions. Join the Museum Emerging Leaders of Texas (MELT) Affinity Group in a roundtable discussion and idea share for all departments: collections, exhibits, education, administration, and volunteer management. Please bring your own policies and forms for peer review and feedback.",
      },
      {
        id: 11,
        title: "Affinity Group: HSHAG",
        time: "11am-12pm",
        description:
          "Join the Historic Sites and Houses Affinity Group (HSHAG) for a dynamic roundtable session focused on the unique challenges and opportunities of preserving and operating historic sites and houses across Texas. This interactive discussion provides attendees a chance to ask questions and share ideas on topics such as preservation, maintenance, operations, and programming. Whether you're tackling structural concerns, engaging visitors, or developing innovative programs, this session offers a collaborative space to exchange insights, strategies, and solutions with fellow professionals dedicated to keeping Texas history alive.",
        speakers: [
          {
            name: "Alysha Richardson",
            institution: "Temple Railroad and Heritage Museum",
            headshot: "/head-shots/alysha-richardson.jpg",
          },
          {
            name: "Steve Baird",
            institution: "Klein Historical Foundation",
            headshot: "/head-shots/steven-baird.jpg",
          },
        ],
      },
      {
        id: 12,
        title: "STEM Lens on History and Culture",
        time: "11am-12pm",
        description:
          "This panel will provide museum and cultural site education and interpretation staff with tools to create STEM and STEAM programming successfully. Panelists from the Texas Historical Commission describe, analyze and assess their STEM and STEAM programming with the intention of providing inspiration and support for participants who wish to incorporate STEM and STEAM concepts in educational programming. Panelists share images, stories, successes, and lessons from programs they created or helped to create at their historical and cultural sites. They offer a short, easy hands-on example for participants to experience the exploration of STEM and STEAM concepts in a historical and cultural setting.",
        speakers: [
          {
            name: "Erin Frigo",
            institution: "Texas Historical Commission",
            headshot: "/head-shots/erin-frigo.png",
          },
          {
            name: "Lauren Siegel",
            institution: "MathHappens Foundation",
            headshot: "/head-shots/lauren-siegel.jpg",
          },
          // {
          //   name: "Rachel Flinn",
          //   institution: "Texas Parks and Wildlife",
          //   headshot: "/head-shots/rachel-flinn.jpg",
          // },
          {
            name: "Morgan Oldham",
            institution: "The Alamo",
            headshot: "/head-shots/morgan-oldham.jpg",
          },
        ],
      },
      {
        id: 13,
        title: "Designing Community Spaces in Historic Buildings ",
        description:
          "How is your museum balancing the use of spaces to accommodate community gatherings, programs, and exhibits? Museum directors from Flower Hill Center in Austin and Heart of the Hills Heritage Center in Kerrville and Chief Operating Officer/Partner at Quatrefoil Associates exhibit design firm will share ideas about designing flexible spaces at museums in historic buildings that balance the use of their unique and limited spaces to offer programs and exhibitions. Each unique perspective will provide insight into how small museums are taking different approaches to create vibrant hubs for their communities.",
        time: "11am-12pm",
        speakers: [
          {
            name: "Roula Tsapalas",
            institution: "Quatrefoil Associates",
            headshot: "/head-shots/roula-tsapalas-mccarthy.jpg",
          },
          {
            name: "Natalie George",
            institution: "Flower Hill Center",
            headshot: "/head-shots/natalie-george.jpg",
          },
          {
            name: "Angela Kennedy",
            institution: "Heart of the Hills Heritage Center",
            headshot: "/head-shots/angela-kennedy.jpg",
          },
          {
            name: "Nina Murrell",
            institution:
              "Flower Hill Center / Murrell Office for Development and Architecture, LLC",
            headshot: "/head-shots/nina-murrell.jpg",
          },
        ],
      },
      {
        id: 14,
        title:
          "Listening, Learning, and Working: Five Years into an Alternative Future",
        time: "11am-12pm",
        speakers: [
          {
            name: "Craig Farrell",
            institution: "Gulf Coast Archive & Museum of GLBT History, Inc.",
            headshot: "/head-shots/craig-farrell.png",
          },
          {
            name: "Joyce Gabiola",
            institution: "University of Houston",
            headshot: "/head-shots/joyce-gabiola.jpeg",
          },
          {
            name: "Dr. Brian Riedel",
            institution:
              "Center for the Study of Women, Gender, and Sexuality at Rice University ",
            headshot: "/head-shots/brian-riedel.jpeg",
          },
        ],
        description:
          "Join longtime TAM member Craig Farrell as he shares the journey of the Gulf Coast Archive & Museum of GLBT History, Inc. (GCAM) and its evolution in preserving Houston’s LGBTQ+ history. Dr. Brian Riedel of Rice University’s Center for the Study of Women, Gender, and Sexuality will provide broader context on GCAM’s impact within Houston’s LGBTQ+ community, drawing from his research and involvement with other key organizations. Joyce Gabiola, LGBTQ+ History Research Librarian at the University of Houston, will discuss the transition of GCAM’s collection to the university and how it is now being used for research.",
      },
      {
        id: 15,
        title: "Lunch Buffet",
        time: "12pm-12:15pm",
      },
      {
        id: 16,
        title: "Lunch and Keynote",
        time: "12:15pm-1pm",
        description:
          "This keynoye address explores how to leverage data in the museum field to inform strategic change, foster equity and inclusion, and support advocacy efforts. Starting with grounding in recent trends in data across the sector, we’ll discuss easy options for data collection around a range of topics, share available sources of data, and discuss how they can be activated.  Case studies will be woven into the discussion to illustrate how museums of various types and sizes are leveraging research and data as helpful tools for their work.",
        speakers: [
          {
            name: "Dr. Jen Benoit-Bryan, Research Director",
            institution: "SMU DataArts",
            headshot: "/head-shots/Jen-Benoit-Bryant.jpg",
          },
        ],
      },
      {
        id: 17,
        title: "Break",
        time: "1pm-1:15pm",
      },
      {
        id: 18,
        title:
          "Affinity Group: TAMEL - Making the Most of Your Earned Income - Let’s Hear Your 2 Cents!",
        time: "1:15pm-2:15pm",
        description:
          "TAM Executive Leaders (TAMEL) roundtable meets for discussion topics relevant to museum directors. This session is only open to Executive Directors and CEOs. ",
        speakers: [
          {
            name: "Liz Jackson",
            institution: "Briscoe Western Art Museum",
            headshot: "/head-shots/liz-jackson.jpg",
          },
        ],
      },
      {
        id: 19,
        title: "Starting Conversations About Volunteer Best Practices ",
        speakers: [
          {
            name: "Arpil Love",
            institution: "Mayborn Museum",
            headshot: "/head-shots/april-love.jpeg",
          },
          {
            name: "Kaleigh Reid",
            institution: "Mayborn Museum",
            headshot: "/head-shots/kaleigh-reid.jpg",
          },
        ],

        description:
          "Volunteers are an integral part of museums, yet volunteer issues are rarely discussed at conferences. Session attendees will examine real-world examples (including questions about firing a volunteer and grappling with federal labor regulations) and identify the best resources available to them. We will then facilitate a guided conversation in small groups to cross-pollinate ideas so that attendees can begin to outline volunteer best practices for their museums.",
        time: "1:15pm-2:15pm",
      },
      {
        id: 20,
        title: "Working Together: Raising the Profile of Black Austin History",
        speakers: [
          {
            name: "Dr. Tara A. Dudley",
            institution: "NHCM",
            headshot: "/head-shots/tara-dudley.jpg",
          },
          {
            name: "Cathy Runnels",
            institution: "Carver Museum",
            headshot: "/head-shots/cathy-runnels.png",
          },
          {
            name: "Dr. Rowena Dasch",
            institution: "Neill-Cochran House Museum",
            headshot: "/head-shots/rowena-dasch.jpg",
          },
          {
            name: "A. Arro Smith, Ph.D. ",
            institution: "Save Austin Cemeteries",
            headshot: "/head-shots/arro-smith.JPG",
          },
          {
            name: "Michael Ward",
            institution: "Jourdan-Bachman Pioneer Farms",
            headshot: "/head-shots/michael-ward.jpg",
          },
        ],
        description:
          "This panel will acquaint participants with the historical meta narrative of Austin history, which has been narrow and often exclusionary, and then will share the ways the included sites are challenging that traditional narrative. Participants will walk away with tools and ideas to expand the narrative frameworks in their own communities.",
        time: "1:15pm-2:15pm",
      },
      {
        id: 21,
        title: "Collection Clues: Identifying Photographic Processes",
        speakers: [
          {
            name: "Alexandra Vanderhider Cuthbert",
            institution: "Texas Historical Commission",
            headshot: "/head-shots/alexandra-cuthbert.jpg",
          },
        ],
        description:
          "Since the invention of photography, the methods used to take photographs have changed drastically. Identifying the processes used in photography can help date an image and determine vital information about the people, places, and events captured in the photograph. Additionally, identifying photographic processes will assist collections managers in preserving and caring for their photographic objects.",
        time: "1:15pm-2:15pm",
      },
      {
        id: 22,
        title: "Break",
        time: "2:15pm-2:30pm",
      },
      {
        id: 23,
        title: "Speed Networking",
        description:
          "Bring your business cards and your badge for a chance to meet fellow TAM Annual Meeting attendees. Through rapid-fire facilitated conversations, share what you’re doing, where you’re from, what you’re excited about, or what you want help with. Come ready to talk—the time goes quickly!",
        time: "2:30pm-3:15pm",
      },
      {
        id: 24,
        title: "Break",
        time: "3:15pm-3:30pm",
      },
      {
        id: 25,
        title: "Preparing For a Website Redesign: Where the Heck Do You Start?",
        description:
          "In 2014, the Bullock Museum revamped its website with a custom CMS. As our strategy evolved and our CMS became unsustainable, we knew it was time for an overhaul. This session will share our journey of developing a content strategy and preparing for a website redesign. We’ll discuss engaging staff through a strategic planning framework and surveys, leveraging data from Google Analytics, and navigating the challenges we faced along the way. Participants will gain practical skills and ideas to employ in their own website and content strategy projects.",
        speakers: [
          {
            name: "Mel Tamporello",
            institution: "Bullock Texas State History Museum",
            headshot: "/head-shots/mel-tamporello.jpg",
          },
          {
            name: "Emily Henne",
            institution: "Bullock Texas State History Museum",
            headshot: "/head-shots/emily-henne.jpg",
          },
        ],
        time: "3:30pm-4pm",
      },
      {
        id: 26,
        title:
          "Be a Solution, Not Just a Resource: Meeting Schools and Communities Where They Are",
        description:
          "Join the Discovery Center Collective to explore a community-driven approach to education and outreach. Learn how we expanded summer camps to low-income schools, brought museum experiences directly to students, and hosted inclusive events for neurodiverse individuals. Discover strategies for fostering inclusivity, building partnerships, and meeting evolving needs. Engage in group brainstorming to generate solutions for your community.",
        speakers: [
          {
            name: "Wendy Taylor",
            institution: "Don Harrington Discovery Center",
            headshot: "/head-shots/wendy-taylor.jpeg",
          },
        ],
        time: "3:30pm-4pm",
      },
      {
        id: 27,
        title:
          "Bridging the Gap from Idea to Reality: How the Briscoe Center for American History Solved Exhibit Challenges Using Practical Solutions",
        speakers: [
          {
            name: "Dr. Sarah Sonner",
            institution: "Briscoe Center for American History, UT Austin",
            headshot: "/head-shots/sarah-sonner.png",
          },
          {
            name: "Suzanne M. McGarraugh",
            institution: "Suzanne M. McGarraugh Exhibit Design Services",
            headshot: "/head-shots/suzanne-mcgarraugh.JPEG",
          },
          {
            name: "Michelle Rossomando, AIA, RID",
            institution: "McKinney York Architects",
            headshot: "/head-shots/michelle-rossomando.jpg",
          },
          {
            name: "Aaron Taylor, AIA",
            institution: "McKinney York Architects",
            headshot: "/head-shots/aaron-taylor.jpg",
          },
        ],
        description:
          "Through stewardship, scholarship, and outreach, the Briscoe Center for American History cultivates historical knowledge and fosters exploration of our nation’s past. As a small museum whose mission is to showcase historically significant collections, the Center utilizes rotating exhibits in a flexible gallery space to maximize its program, often with limited resources. This session will feature an open discussion between members of the Center’s exhibits team focusing on the approaches, challenges, and lessons learned from successful installations. In the context of the Center’s recent exhibits, the session will explore themes of practicality, resourcefulness, and collaboration to illuminate creative ways for small museums and archival institutions to display their unique collections to a wider audience.",
        time: "3:30pm-4pm",
      },
      {
        id: 28,
        title:
          "Small, but Mighty! Corporate Sponsorship Programs for Small Organizations",
        description:
          "Are you looking to launch or build your corporate sponsorship program, but not sure how to start? Get some practical ideas on how to identify, attract, and steward corporate donors. We’ll also cover the bonus benefits that corporate partners can bring to your mission – including prospective board members, volunteers, in-kind services, and publicity. The discussion will be intended for implementation by organizations with few or no development staff.",
        speakers: [
          {
            name: "Jacqui Schraad, CFRE, CNM, CFRM",
            institution: "Texas State History Museum Foundation",
            headshot: "/head-shots/jacqui-schraad.jpg",
          },
        ],
        time: "3:30pm-4pm",
      },
      {
        id: 29,
        title:
          "Small Spaces Big Ideas: Interpreting Sensitive Content Through the Eyes of Children",
        speakers: [
          {
            name: "Chris Frison",
            institution: "National Musuem of the Pacific War - D|G Studios",
            headshot: "/head-shots/chris-frison.JPG",
          },
          {
            name: "Brad Parker",
            institution: "BPI",
            headshot: "/head-shots/brad-parker.jpg",
          },
          {
            name: "Nicole Huang",
            institution: "BPI",
            headshot: "/head-shots/nicole-huang.jpg",
          },
          {
            name: "Aaron Scarlata",
            institution: "Exhibit Concepts, Inc.",
            headshot: "/head-shots/aaron-scarlata.JPG",
          },
          {
            name: "David Shields",
            institution: "National Museum of the Pacific War",
            headshot: "/head-shots/david-shields.jpg",
          },
        ],
        description:
          "This session explores the challenges and insights gained in developing an exhibition on children’s experiences during World War II. From addressing sensitive topics in an age-appropriate way to overcoming space limitations while creating immersive environments, the exhibition’s concept evolved—from placing children in the role of soldiers to examining how the war shaped their daily lives and families. Learn about the creative solutions and lessons learned throughout the process.",
        time: "4pm-4:30pm",
      },
      {
        id: 30,
        title: "Innovative Programming: Filling the Gap",
        speakers: [
          {
            name: "Shae Nawoj",
            institution: "Log Cabin Village",
            headshot: "/head-shots/shae-nawoj.png",
          },
          {
            name: "Bethany Cuthbertson",
            institution: "Fort Worth Museum of Science and History",
            headshot: "/head-shots/bethany-cuthbertson.jpg",
          },
          {
            name: "Rebecca Reed",
            institution: "Fort Worth Museum of Science and History",
            headshot: "/head-shots/rebecca-reed.jpg",
          },
        ],
        description:
          "Every museum has a gap in who they reach in their community and it can be overwhelming to come up with different ways to engage with your gap audiences. This session will look at ways the Log Cabin Village and the Fort Worth Museum of Science and History have developed programs with their gap communities in mind. ",
        time: "4pm-4:30pm",
      },
      {
        id: 31,
        title:
          "Demystifying Collections Insurance: How This Valuable Tool Can Help Safeguard Your Museum’s Mission",
        speakers: [
          {
            name: "Nonie Tompkins",
            institution: "Distinguished Fine Art and Collectibles",
            headshot: "/head-shots/nonie-tompkins.jpg",
          },
          {
            name: "Joy S. Simpson",
            institution: "Higginbotham",
            headshot: "/head-shots/joy-simpson.jpg",
          },
        ],
        description:
          "Collections insurance plays a crucial role in safeguarding your museum’s mission. In this informative session, we’ll explore the ins and outs of collections insurance, demystifying its purpose, coverage, and who needs it. Whether you’re a curator, museum director, registrar, board member, or collector, understanding collections insurance is essential for protecting your irreplaceable collection. Join us as we unravel the complexities of collections insurance and empower you to make informed decisions for your museum collection.",
        time: "4pm-4:30pm",
      },
      {
        id: 32,
        title:
          "Texas and America's 250th Anniversary - Sponsored by The Bullock Museum",
        speakers: [
          {
            name: "Margaret Koch",
            institution: "Bullock Texas State History Museum",
            headshot: "/head-shots/margaret-koch.jpg",
          },
        ],
        description:
          "Curious about the Semiquicentennial in 2026 (like how to pronounce it) and what you can do to participate? Join the presiding chair of the Texas America250 Commission for insight into this historic anniversary and learn how Texas is key to this national conversation. This 25-minute, fast-paced informational session will include time for questions and idea-sharing.",
        time: "4pm-4:30pm",
      },
      {
        id: 33,
        title: "Exhibitor Reception",
        description:
          "Join us for a lively evening of networking, featuring an Austin-inspired cocktail and the latest innovations from our exhibitors. Connect with industry peers, explore new services and solutions, and don’t forget to visit each exhibitor for a chance to win a free registration to the TAM 2026 Annual Conference!",
        time: "4:30pm-5pm",
      },
      {
        id: 34,
        title: "Evening Event *Invite only*",
        description:
          "Join your Capitol Mall colleagues in celebrating TAM’s 50th anniversary! Behind-the-scenes tours at the State Library and Archives, Capitol Grounds, The General Land Office, and historic Gethsemane Catholic Church, plus Great Promise for American Indians and special guest musical performances, whiskey tasting, 1970s throwback movie reels from the Texas Archive of the Moving Image, curators/archivists/educators meet-up, Tamster photo-ops, and delicious hors d’oeuvres await!",
        time: "5pm-6pm",
      },
      {
        id: 35,
        title: "Evening Event",
        time: "5pm-8pm",
      },
    ],
  },
  {
    id: 2,
    title: "Tuesday, April 8th",
    open: false,
    events: [
      { id: 0, title: "Conference Registration", time: "8am-3:30pm" },
      { id: 1, title: "Breakfast with Exhibitors", time: "8am-9am" },
      {
        id: 2,
        title: "TAM Annual Business Meeting",
        time: "8:15am-9am",
        description:
          "Join us as TAM introduces its newest Council members and holds its annual business meeting, where members will review the organization’s top priorities and direction for 2026 and beyond.",
      },
      {
        id: 3,
        title: "TAM Awards Ceremony",
        time: "9:15am-10am",
        description:
          "Celebrate the best of Texas museums with us! This is a chance to recognize museum industry award winners for their incredible work. Featured winners include the Jo Stewart Randel Outstanding Trustee Award, Jack Nokes Outstanding Service Award, Mitchell A. Wilder Publication Design Award Competition, the Texas Association of Museums Media Innovation & Excellence Awards (TAMMIEs), and the inaugural Texas Association of Museums Advocacy Award.",
      },
      {
        id: 4,
        title: "Networking Break",
        time: "10am-10:30am",
        description: "Award Winners Join Us on Stage for Pictures",
      },
      {
        id: 5,
        title:
          "Informed Decisions: Using Museum Visitor Data to Envision, Plan, and Make Change",
        time: "10:30am-11:30am",
        speakers: [
          {
            name: "Regina Faden",
            institution: "Fort Worth Museum of Science and History",
            headshot: "/head-shots/regina-faden.jpg",
          },
          {
            name: "Amanda Blake",
            institution: "Amon Carter Museum of American Art",
            headshot: "/head-shots/amanda-blake.jpg",
          },
          {
            name: "Noël Koehn",
            institution: "Wilkening Consulting",
            headshot: "/head-shots/noel-koehn.jpg",
          },
        ],
        description:
          "Each fall, American Alliance of Museums and Wilkening Consulting partner to gather visitor data from Texas museums, with the Annual Survey of Museum Goers. The data collected reveal statewide, regional, and museum-specific trends, giving insight into museum visitor desires, and values. In this panel, participating Texas science, art, and history museum leaders share their experiences with the Survey, including process, methodology, analysis, and the practical application of museum data for strategic planning, board education, community outreach, and more.",
      },
      {
        id: 6,
        title: "On the Road: Teacher Travel Professional Development",
        time: "10:30am-11:30am",
        speakers: [
          {
            name: "Rosemary Kriegel",
            institution: "The Alamo",
            headshot: "/head-shots/rosemary-kriegel.jpg",
          },
          {
            name: "Alexander Rivard",
            institution: "The Alamo",
            headshot: "/head-shots/alexander-rivard.jpg",
          },
          {
            name: "Heike (Hika) Jenkins",
            institution: "Texas Historical Commission",
            headshot: "/head-shots/heike-jenkins.jpg",
          },
        ],
        description:
          "In 2024, for the first time, the Alamo hosted multiple free travel professional development programs for teachers to Texas Revolution sites and Mexico City. Educators gained new perspectives and enthusiasm that invigorated their teaching practice, engaging students in the historical content more vividly. Participants will consider offsite teacher education and how it may strengthen their professional network, grow their teacher audience, and address permanent or temporary space constraints.",
      },
      {
        id: 7,
        title:
          "Transformations: Physically and Intellectually Moving Museum Collections",
        time: "10:30am-11:30am",
        speakers: [
          {
            name: "Stephanie Allen-Givens",
            institution:
              "Crow Museum of Asian Art at the University of Texas at Dallas",
            headshot: "/head-shots/stephanie-allen-givens.png",
          },
          {
            name: "Charles Camp",
            institution:
              "Crow Museum of Asian Art at the University of Texas at Dallas",
            headshot: "/head-shots/charles-camp.jpg",
          },
          {
            name: "Devorah Hale",
            institution: "Perot Museum of Nature and Science",
            headshot: "/head-shots/devorah-hale.jpg",
          },
          {
            name: "Karen Morton",
            institution: "Perot Museum of Nature and Science",
            headshot: "/head-shots/karen-morton.jpg",
          },
        ],
        description:
          "Join the Collections staff of the Perot Museum of Nature and Science and the Crow Museum of Asian Art to learn about moving collections under two very different circumstances.  One moved during a global pandemic, the other moved into a museum under construction.",
      },
      {
        id: 8,
        title: "Museum Hot Seat: What’s on Your Mind?",
        time: "10:30am-11:30am",
        description:
          "What’s on everyone’s mind in the museum world? You tell us! In this interactive session, we’re tackling the most pressing topics submitted anonymously by TAM members—no question is off-limits. A moderator will guide the discussion, diving into the challenges, trends, and hot topics that matter most to you. Whether you’re here to listen, share insights, or get advice, come ready to talk and engage in a dynamic conversation shaped by your peers.",
      },
      {
        id: 9,
        title: "Networking & Exhibitor Break",
        time: "11:30am-12pm",
      },
      {
        id: 10,
        title: "Lunch Buffet",
        time: "12pm-12:15pm",
      },
      {
        id: 11,
        title: "Lunch and Keynote: Creative Aging Comes of Age - In Museums",
        time: "12:15pm-1pm",
        speakers: [
          {
            name: "Teresa Bonner",
            institution: "E.A. Michelson Philanthropy",
            headshot: "/head-shots/teresa-bonner.jpeg",
          },
          {
            name: "Paul Coffey",
            institution: "Glassell School of Art, Museum of Fine Arts Houston",
            headshot: "/head-shots/paul-coffey.jpg",
          },
        ],
        description:
          "Teresa Bonner will give an overview of the Vitality Arts Project for Art Museums initiative that helped art museums strategically reframe their relationships with older adults – to understand them as essential, competent, creative and contributing participants in the life of the museum – and to create Vitality Arts programs designed for them. Each museum developed art-making programs for older adults to address the growing awareness of ageism in our society and in recognition of the role that art museums can play in providing creative aging opportunities to the community. Paul Coffey will address how the Museum of Fine Arts, Houston and the Glassell School of Art achieved the ambitious goals of the Vitality Arts Project in collaboration with underserved communities of older adults in Houston, Texas. The project What I Know and When I Knew It is MFAH’s answer to Vitality Arts proposition.",
      },
      {
        id: 12,
        title: "Break",
        time: "1pm-1:15pm",
      },
      {
        id: 13,
        time: "1:15pm-2:15pm",
        title:
          "Affinity Group: IDEA - Inclusive and Belonging Leadership: Building Stronger Teams and Organizations",
        speakers: [
          {
            name: "Tonya Veasey",
            institution: "Open Channels Group+ ",
            headshot: "/head-shots/tonya-veasey.jpg",
          },
        ],
        description:
          "Join IDEA (Inclusivity, Diversity, Equity, and Access) for a presentation from special guest speaker Tonya Veasey,  President and CEO of Open Channels Group+.",
      },
      {
        id: 14,
        time: "1:15pm-2:15pm",
        title: "Affinity Group: AAG - 'The Color Inside'",
        speakers: [
          {
            name: "Catherine Whited",
            institution: "University of Texas at Austin, Landmarks",
            headshot: "/head-shots/catherine-whited.jpg",
          },
        ],
        description:
          "The Art Affinity Group (AAG) roundtable exploring public art as an educational tool will take place at the “The Color Inside” by James Turrell on the University of Texas at Austin campus. This installation, a work in the Landmark public art collection, is a naked-eye observatory on top of the WCP building, where visitors view the sky through an oculus in the ceiling. Begin the session with a mediation in the space led by Landmark Education Coordinator, Catherine Whited. A roundtable conversation facilitated in part by Whited will follow. ",
      },
      {
        id: 15,
        title:
          "'Not Another Furniture Tour!': Connect Historic House Museums with the 21st Century Community",
        time: "1:15pm-2:15pm",
        speakers: [
          {
            name: "Jamie A. Ross",
            institution: "Texas Historical Commission",
            headshot: "/head-shots/jamie-ross.jpg",
          },
          {
            name: "Sara Nezamabadi",
            institution: "Texas Historical Commission",
            headshot: "/head-shots/sara-nezamabadi.jpeg",
          },
        ],
        description:
          "Focusing on historic house museums with varying collections and visitor involvement, this talk looks at options for staff to encourage interest in their sites through programs and exhibits grounded in a reexamination of their objects. Based on current initiatives at art and history museums, we will discuss using collections as a starting place for dialogs that connect audiences with contemporary social and community interests. We hope to provide curators and interpreters with a new framework for looking at material culture by walking through examples using artifacts from the Texas Historical Commission’s Historic Sites.",
      },
      {
        id: 16,
        title:
          "Most Expensive Mistakes Museum Administrators Make You Easily Can Avoid        ",
        time: "1:15pm-2:15pm",
        speakers: [
          {
            name: "Laura Fowler",
            institution: "Fowler Law Firm",
            headshot: "/head-shots/laura-fowler.jpeg",
          },
        ],
        description:
          "Want to make sure your institution follows both the letter and the spirit of laws related to collections and exhibitions? Laura Fowler, from Fowler Law Firm, will discuss how to turn “best intentions” into best practices in ownership, use, and promotion of art and artifacts, sharing what to do before, not after, you discover an issue.",
      },
      {
        id: 17,
        time: "1:15pm-2:15pm",
        title:
          "Bridging Art & Play: Creating Public Spaces for Community, Culture, and Collaboration",
        speakers: [
          {
            name: "Jenny Townzen",
            institution:
              "Kreische Brewery & Monument Hill SHS (Texas Historical Commission)",
            headshot: "/head-shots/jenny-townzen.JPEG",
          },
          {
            name: "Gavin Miculka",
            institution:
              "Kreische Brewery & Monument Hill SHS (Texas Historical Commission)",
            headshot: "/head-shots/gavin-miculka.jpg",
          },
          {
            name: "Trey Crumpton",
            institution: "Mayborn Museum",
            headshot: "/head-shots/trey-crumpton.JPG",
          },
        ],
        description:
          "When designing outdoor art that is meant for public interaction, what perspectives are important to consider? From playscapes to monumental bronze, how can we honor our heritage and serve our communities through the design process? This session explores two diverse projects—life-size mammoth sculptures at the Mayborn Museum and an outdoor children’s exhibit at Kreische Brewery & Monument Hill State Historic Sites, the interactivity and creativity involved, and what we didn’t realize we didn’t know!",
      },
      { id: 18, title: "Break", time: "2:15pm-2:30pm" },
      {
        id: 19,
        title:
          "Rising from the Rubble: Community Building in the Wake of Disaster",
        time: "2:30pm-3:30pm",
        speakers: [
          {
            name: "Wendy Taylor",
            institution: "Don Harrington Discovery Center",
            headshot: "/head-shots/wendy-taylor.jpeg",
          },
        ],
        description:
          "In Feb/March of 2024, the largest wildfire in Texas history ripped through the Panhandle. Feeling helpless, Discovery Center staff identified ways we could think and act outside the box to be a present and helpful member of our community. DCC staff will share strategies for connection and support, from opening their doors to the public to hosting Smokey Bear’s 80th Birthday with our neighboring wildlife rescue. This session will identify ways museums can connect in unique ways with other organizations to support communities during and after loss.",
      },
      {
        id: 20,
        title: "When Museums and Libraries Collide",
        time: "2:30pm-3:30pm",
        speakers: [
          {
            name: "Kali Mercy",
            institution: "Perot Family Collections",
            headshot: "/head-shots/kali-mercy.JPEG",
          },
          {
            name: "Rachel Lavenda",
            institution:
              "University of Pittsburgh Library System, Archives & Special Collections",
            headshot: "/head-shots/rachel-lavenda.jpg",
          },
          {
            name: "Megan Massanelli",
            institution: "University of Pittsburgh ",
            headshot: "/head-shots/megan-massanelli.JPG",
          },
        ],
        description:
          "On university and college campuses, exhibits in non-museum spaces are not uncommon. Libraries, in particular, are expected to have dedicated exhibit spaces to showcase their collections. While the core mission of academic libraries revolves around access and research, they are also home to rare materials that are only sometimes found in typical museums. These exhibit spaces enhance the library's mission by providing context and insight into the institution's unique holdings",
      },
      {
        id: 21,
        title:
          "Who's Got the Buckets: Bailing Yourself out of Situations You Weren't Trained For",
        time: "2:30pm-3:30pm",
        speakers: [
          {
            name: "Alysha Richardson",
            institution: "Temple Railroad and Heritage Museum",
            headshot: "/head-shots/alysha-richardson.jpg",
          },
          {
            name: "Emily Smith",
            institution: "Temple Children's Museum ",
            headshot: "/head-shots/emily-smith.jpg",
          },
          {
            name: "Veronica Amoe",
            institution: "City of Nacogdoches Historic Sites Division",
            headshot: "/head-shots/veronica-amoe.JPG",
          },
          {
            name: "Logan Baird",
            institution: "Museum Professional",
            headshot: "/head-shots/logan-baird.jpg",
          },
        ],
        description:
          "Every museum leader faces challenges that feel overwhelming—burnout, imposter syndrome, unexpected disasters, and more. How do we navigate these situations, stay in control, and lead effectively when our degrees didn’t prepare us for everything? In this session, we’ll share strategies to prioritize problems, manage crises without reaching burnout, and put difficult moments into perspective. Attendees will learn how to step back, maintain balance, and recognize their role as professionals equipped to handle tough situations with confidence. Join us to gain tools for managing yourself and your team through life’s most difficult moments.",
      },
      {
        id: 22,
        title:
          "Playing Detective: Maintaining Outdoor Public Art When Information is Lacking",
        time: "2:30pm-3:30pm",
        speakers: [
          {
            name: "Kirstin Cutts",
            institution: "City of San Antonio Department of Arts and Culture",
            headshot: "/head-shots/kirstin-cutts.jpg",
          },
          {
            name: "Lindsay Hamm Havekost",
            institution:
              "Landmarks, the public art program of the University of Texas at Austin",
            headshot: "/head-shots/lindsay-hamm.jpg",
          },
        ],
        description:
          "In a perfect world, outdoor artworks would have detailed maintenance manuals full of instructions, photos and advice. In reality, many collections managers must don their detective hats to deduce the best means to maintain particular artworks. In this session, public art professionals will highlight recent maintenance projects which required creative thinking in finding information, determining when to consult outside experts, executing the task, and archiving projects. Topics discussed will include: working with incomplete or inaccessible documentation; assessing and adapting to physical issues; and communication challenges. The presenters will also share multiple pathways to success that were found or forged from these instances, and how such experiences can lead to better records, strong networks of diverse specialists, and longer lifetimes for public artworks.",
      },
      {
        id: 23,
        time: "3:30pm-5:30pm",
        title: "TAM Academic Project Showcase Competition",
        description:
          "See the future of Texas museum professionals on display at the Bullock Museum’s Austin room, where students will present their research contributions to the museum field before a state-wide audience of scholars and museum professionals.",
      },
      {
        id: 24,
        time: "3:30pm-5:30pm",
        title: "Austin Museum Activations",
        description:
          "TAM is excited to offer educational activities highlighting Austin’s local institutions. Join us across the street at the Bullock Museum’s Austin room for hands-on engagement experiences.",
      },
      {
        id: 25,
        time: "5:30pm-8:30pm",
        title:
          "Fossils, Friends, and Fantastic Views: An Evening at the Texas Science and Natural History Museum and The Contemporary Austin - Jones Center",
        description:
          "Travel across the city for a night of science AND art! Begin your evening with hors d’oeuvres and beverages at the Texas Science and Natural History Museum, generously underwritten by MuseWorks. Next, shuttle to The Contemporary Austin - Jones Center for sunset views, contemporary art, and rooftop refreshments.",
      },
    ],
  },
  {
    id: 3,
    title: "Wednesday, April 9th",
    open: false,
    events: [
      { id: 0, title: "TAM at the Texas State Capitol", time: "9am" },
      {
        id: 1,
        title:
          "Putting It All Together: Preparing for 2026 at Small History Organizations",
        time: "9:15am-12:15pm",
        speakers: [
          {
            name: "Melissa Prycer",
            institution: "Prycer Consulting",
            headshot: "/head-shots/melissa-prycer.jpg",
          },
        ],
        description:
          "The U.S. 250th is an opportunity to share history that tells everyone's story and to strengthen the history field. AASLH has developed key resources to help practitioners both conceptually and concretely plan for this commemoration's transformative potential. Attend this workshop to learn more about the Making History at 250 field guide, our new handbook of low-resource programming ideas, and how to effectively apply these tools to your site or organization.",
      },
      {
        id: 2,
        title:
          "Full S.T.E.A.M Ahead: How to Foster the S.T.E.A.M. Mindset in Your Museum",
        time: "9:15am-12:15pm",
        speakers: [
          {
            name: "Kathleen Havens",
            institution: "Houston Museum of Natural Science",
            headshot: "/head-shots/kathleen-havens.png",
          },
          {
            name: "Nicole Temple",
            institution: "Houston Museum of Natural Science",
            headshot: "/head-shots/nicole-temple.png",
          },
        ],
        description:
          "Everything is science! Everything is art! Explore how you can incorporate a S.T.E.A.M. mindset into your facility using cross-curricular, multi-modal approaches to help connect all learners to your core subject matter. S.T.E.M. (Science, Technology, Engineering, and Math) has been a buzzword for some time and is often used to help justify field trips or get donors on board with an eye to workforce preparedness. Recently, an A for Art has been added to change the S.T.E.M. to S.T.E.A.M. but, rather than treating art as a science and vice versa, art is often used superficially to convey scientific concepts. Additionally, museums that do not deal directly with science or art as a core subject matter, may find it more difficult to make meaningful connections to S.T.E.A.M. in their programming and displays. Looking at subject matter in a cross-curricular, multi-modal way is fundamental for making all learners feel successful, creating equitable pathways for discovery and creating meaningful connections to content.",
      },
      {
        id: 3,
        title:
          "Innovative and Non-Traditional Strategies: Relaunching Your Museum for The Future",
        time: "9:15am-12:15pm",
        speakers: [
          {
            name: "Abigail Erickson-Torres",
            institution: "Frontiers of Flight Museum",
            headshot: "/head-shots/abigail-erickson-torres.jpg",
          },
        ],
        description:
          "In today's competitive environment, museums must continuously innovate and adapt their fundraising, hiring and social enterprise strategies to ensure sustainable growth and success. This workshop will explore cutting-edge approaches to expanding social enterprise/branding, fundraising operations and hiring practices, focusing on practical examples, audience participation, and diverse perspectives. Attendees will learn how to effectively diversify their funding sources, leverage community partnerships, and implement best hiring practices and new technology-driven tools, implement board diversification strategies and new fundraising solutions and social enterprise opportunities. Guest panelists include; Teresa Heidt, Neiman Marcus; Catharine Recht, Frontiers of Flight Museum; and Allison Allen, GTN Consulting.",
      },
      {
        id: 4,
        title:
          "Preserving Moving Images: Building Confidence with Archival Media Formats",
        time: "9:15am-12:15pm",
        speakers: [
          {
            name: "Ari Negovschi Regalado",
            institution: "Texas Archive of the Moving Image",
            headshot: "/head-shots/ari-negovschi-regalado.JPG",
          },
        ],
        description:
          "Cultural workers face a challenging lack of hands-on educational opportunities to learn the basics of preserving archival audiovisual materials. Our workshop addresses the growing need for media preservation skills among archivists, historians, curators, genealogists, and generally those who work with historic materials. In this 3 hour workshop, participants will learn how to identify common media formats, conduct preservation assessments, and digitize video formats. Attendees will become confident in their ability to identify and preserve analog film and video formats and gain the skills necessary to work with these materials when encountering them in the field. This workshop is hosted by Ari Negovschi Regalado, Technical Director of Texas Archive of the Moving Image. ",
      },
      {
        id: 5,
        title:
          "Don't Just Prepare for the Last War: Informed Emergency Preparedness",
        time: "9:15am-12:15pm",
        speakers: [
          {
            name: "Ellen Cone Busch",
            institution: "Texas Historical Commission ",
            headshot: "/head-shots/ellen-cone-busch.png",
          },
        ],
        description:
          "Emergency preparedness is as much about understanding the risks a museum faces and mitigating those risks as it is about gathering resources to recover from their impacts.  Using risk assessment and after-action review tools, online resources, and active mitigation steps, museums can target their emergency preparedness efforts and resources effectively amid changing staff, climate, and demographics.  THC historic sites speakers will present experiences with some of the most common emergencies with lessons learned, and basic long- and short-range preparedness steps.  This will focus on medical emergencies, grassland fires, and severe weather events.",
      },
      {
        id: 6,
        title: "Landmarks Tour: Public Art at UT Austin",
        time: "10am-11:30am",
        speakers: [
          {
            name: "Catherine Whited",
            institution: "University of Texas at Austin, Landmarks",
            headshot: "/head-shots/catherine-whited.jpg",
          },
        ],
        description:
          "Join a walking tour with Landmarks staff to see highlights from UT Austin’s award-winning public art program. Comprised of 50 modern and contemporary works by some of the most admired artists of our time, the collection is one of the most distinguishing features of the main campus. On this tour, you will see installations by artists José Parlá, Raoul Hague, and others, and learn about Landmarks’ process for selecting and funding new projects. Participants will be on foot for the entirety of the tour.LANDMARKS TOUR IMAGE",
      },
      {
        id: 7,
        title:
          "Briscoe Center for American History Tour History and Fate: The Goodwins and The 1960s",
        time: "10am-11:30am",
        speakers: [
          {
            name: "Dr. Sarah Sonner",
            institution: "Briscoe Center for American History",
            headshot: "/head-shots/sarah-sonner.png",
          },
        ],
        description:
          "History and Fate: The Goodwins and the 1960s Join Dr. Sarah Sonner, Associate Director for Curation at the Briscoe Center for American History, for a private guided tour of History and Fate: The Goodwins and the 1960s, an exhibition that presents the events and pivotal figures of the decade through the papers of Doris Kearns Goodwin and Richard N. Goodwin. The exhibition traces the entwining stories of the Goodwins' relationship, their proximity to power, and reflections on a tumultuous era seen in its most intimate moments. On the tour, Dr. Sonner will also talk about working with archival materials and the role Dr. Goodwin played in the creation of the exhibition. Attendees meet at the entrance to the Briscoe Center for American History",
      },
      {
        id: 8,
        title: "Black Austin History Tour with Visit Austin ",
        time: "10am-11:30am",
        speakers: [
          {
            name: "Harrison Eppright",
            institution: "Visit Austin",
            headshot: "/head-shots/harrison-eppright.jpg",
          },
        ],
        description:
          "Join celebrated tour guide and native Austinite Harrison Eppright on an exploration of Black Austin history from the city's founding up through school desegregation in the 1970s. The tour will visit important sites of Black Austin history in Central Austin and then explore the East Side, where the Black community consolidated in the twentieth century. Optional: Pay your own way lunch at Hoover’s after the tour. Further info will be sent to registrants.",
      },
    ],
  },
];
