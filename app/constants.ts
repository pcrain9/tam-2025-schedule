import type { AccordionProps } from "./types";
const emptySpeakers = [
  { name: "", institution: "", headshot: "/head-shots/.jpg" },
  { name: "", institution: "", headshot: "/head-shots/.jpg" },
  { name: "", institution: "", headshot: "/head-shots/.jpg" },
  { name: "", institution: "", headshot: "/head-shots/.jpg" },
];
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
            institution: "",
            headshot: "/head-shots/erin-whitmore.jpeg",
          },
        ],
      },
      {
        id: 6,
        title:
          "There's No 'I' in Museum: Using Heritage Tourism to Teach Collaboration",
        time: "9:45am-10:45am",
        speakers: [
          {
            name: "Jennifer Eckermann",
            institution: "",
            headshot: "/head-shots/jennifer-eckermann.jpg",
          },
          {
            name: "Mallory Laurel",
            institution: "",
            headshot: "/head-shots/mallory-laurel.jpg",
          },
          {
            name: "Erin Shields",
            institution: "",
            headshot: "/head-shots/erin-shields.png",
          },

          {
            name: "Shelby Curtis",
            institution: "",
            headshot: "/head-shots/shelby-curtis.jpg",
          },
        ],
      },
      {
        id: 7,
        title: "Inspired: Small Museums Share Impact of IMLS Inspire grants",
        time: "9:45am-10:45am",
        speakers: [
          {
            name: "Caitlin Clay",
            institution: "",
            headshot: "/head-shots/caitlin-clay.jpg",
          },
          {
            name: "Marcelo Ramirez Garcia-Rojas",
            institution: "International Museum of Art and Science",
            headshot: "/head-shots/marcelo-ramirez-garcia-rojas.JPG",
          },
          {
            name: "Melinda McPeek",
            institution: "",
            headshot: "/head-shots/melinda-mcpeek.gif",
          },
          {
            name: "Michael Ables",
            institution: "",
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
            institution: "",
            headshot: "/head-shots/paul-cato.jpg",
          },
          {
            name: "Daniel Carey-Whalen",
            institution: "",
            headshot: "/head-shots/daniel-carey-whalen.jpg",
          },
          {
            name: "Nikki Diller",
            institution: "",
            headshot: "/head-shots/nikki-diller.jpg",
          },
        ],
      },
      { id: 9, title: "Break", time: "10:45am-11am" },
      {
        id: 10,
        title: "Affinity Group: MELT",
        time: "11am-12pm",
        speakers: [
          {
            name: "Chris Dyer",
            institution: "",
            headshot: "/head-shots/chris-dyer.JPG",
          },
          {
            name: "Rachael A. Nadeau Johnson",
            institution: "",
            headshot: "/head-shots/rachael-nadeau.jpg",
          },
          {
            name: "Coyote Balderrama Shook",
            institution: "",
            headshot: "/head-shots/coyote-shook.jpg",
          },
          {
            name: "April Love",
            institution: "",
            headshot: "/head-shots/april-love.jpeg",
          },
        ],
      },
      {
        id: 11,
        title: "Affinity Group: HSHAG",
        time: "11am-12pm",
        speakers: [
          {
            name: "Alysha Richardson",
            institution: "",
            headshot: "/head-shots/alysha-richardson.jpg",
          },
          {
            name: "Steve Baird",
            institution: "",
            headshot: "/head-shots/steven-baird.jpg",
          },
        ],
      },
      {
        id: 12,
        title: "STEM Lens on History and Culture",
        time: "11am-12pm",
        speakers: [
          {
            name: "Erin Frigo",
            institution: "",
            headshot: "/head-shots/erin-shields.png",
          },
          {
            name: "Lauren Siegel",
            institution: "",
            headshot: "/head-shots/lauren-siegel.jpg",
          },
          {
            name: "Morgan Oldham",
            institution: "",
            headshot: "/head-shots/morgan-oldham.jpg",
          },
        ],
      },
      {
        id: 13,
        title: "Designing Community Spaces in Historic Buildings ",
        time: "11am-12pm",
        speakers: [
          {
            name: "Roula Tsapalas",
            institution: "",
            headshot: "/head-shots/roula-tsapalas-mccarthy.jpg",
          },
          {
            name: "Natalie George",
            institution: "",
            headshot: "/head-shots/natalie-george.jpg",
          },
          {
            name: "Angela Kennedy",
            institution: "",
            headshot: "/head-shots/angela-kennedy.jpg",
          },
          {
            name: "Nina Murrell",
            institution: "",
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
            institution: "",
            headshot: "/head-shots/craig-farrell.png",
          },
          {
            name: "Joyce Gabiola",
            institution: "",
            headshot: "/head-shots/joyce-gabiola.jpeg",
          },
          {
            name: "Dr. Brian Riedel",
            institution: "",
            headshot: "/head-shots/brian-riedel.jpeg",
          },
        ],
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
        speakers: [
          {
            name: "Dr. Jen Benoit-Bryan, Research Director",
            institution: "",
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
      },
      {
        id: 19,
        title: "Starting Conversations About Volunteer Best Practices ",
        time: "1:15pm-2:15pm",
      },
      {
        id: 20,
        title: "Working Together: Raising the Profile of Black Austin History",
        time: "1:15pm-2:15pm",
      },
      {
        id: 21,
        title: "Collection Clues: Identifying Photographic Processes",
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
        time: "3:30pm-4pm",
      },
      {
        id: 26,
        title:
          "Be a Solution, Not Just a Resource: Meeting Schools and Communities Where They Are",
        time: "3:30pm-4pm",
      },
      {
        id: 27,
        title:
          "Bridging the Gap from Idea to Reality: How the Briscoe Center for American History Solved Exhibit Challenges Using Practical Solutions",
        time: "3:30pm-4pm",
      },
      {
        id: 28,
        title:
          "Small, but Mighty! Corporate Sponsorship Programs for Small Organizations",
        time: "3:30pm-4pm",
      },
      {
        id: 29,
        title:
          "Small Spaces Big Ideas: Interpreting Sensitive Content Through the Eyes of Children",
        time: "4pm-4:30pm",
      },
      {
        id: 30,
        title: "Innovative Programming: Filling the Gap",
        time: "4pm-4:30pm",
      },
      {
        id: 31,
        title:
          "Demystifying Collections Insurance: How This Valuable Tool Can Help Safeguard Your Museum’s Mission",
        time: "4pm-4:30pm",
      },
      {
        id: 32,
        title:
          "Texas and America's 250th Anniversary - Sponsored by The Bullock Museum",
        time: "4pm-4:30pm",
      },
      {
        id: 33,
        title: "Exhibitor Reception",
        time: "4:30pm-5pm",
      },
      {
        id: 34,
        title: "Evening Event *Invite only*",
        location: "Bullock Museum TEST ONLY",
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
    events: [{ id: 0, title: "Registration", time: "8am-4pm" }],
  },
  {
    id: 3,
    title: "Wednesday, April 9th",
    open: false,
    events: [{ id: 0, title: "Registration", time: "8am-4pm" }],
  },
];
