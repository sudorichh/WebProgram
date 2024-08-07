const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60);
});
// COURSE SECTION
const courses = [
  {
    title: "Bachelor of Computing",
    code: "BCOM",
    duration: "3 years academic, 1 year workplace training",
    nqf: "Level 8",
    credits: 506,
    saqaId: 62689,
    location: ["Pretoria Campus", "Kempton Park Campus"],
    description:
      "Our Bachelor of Computing degree will teach you the essential computing skills of troubleshooting and formulating viable solutions. Additionally, you will learn to apply theories and integrate them in real-world environments, across multiple disciplines, by presenting best practices and solutions.",
    modules: [
      { title: "Academic Writing 181", code: "ACW181", nqf: 5, credits: 4 },
      {
        title: "Computer Architecture 181",
        code: "COA181",
        nqf: 5,
        credits: 4,
      },
      {
        title: "Database Development 181",
        code: "DBD181",
        nqf: 5,
        credits: 12,
      },
      { title: "Information Systems 181", code: "INF181", nqf: 5, credits: 12 },
      {
        title: "Innovation and Leadership 101",
        code: "INL101",
        nqf: 5,
        credits: 5,
      },
    ],
  },
  {
    title: "Bachelor of Information Technology",
    code: "BIT",
    duration: "3 years academic",
    nqf: "Level 7",
    credits: 360,
    saqaId: 94121,
    location: ["Pretoria Campus", "Kempton Park Campus"],
    description:
      "This IT degree focuses on information systems modules and will provide you with foundational knowledge in software engineering and business intelligence. You will cover an extensive range of topics, from mobile and wireless networks to artificial intelligence and intelligent systems.",
    modules: [
      { title: "Academic Writing 171", code: "ACW171", nqf: 5, credits: 4 },
      {
        title: "Computer Architecture 171",
        code: "COA171",
        nqf: 5,
        credits: 7,
      },
      {
        title: "Database Development 171",
        code: "DBD171",
        nqf: 5,
        credits: 12,
      },
      {
        title: "English Communication 171",
        code: "ENG171",
        nqf: 5,
        credits: 7,
      },
      { title: "Information Systems 171", code: "INF171", nqf: 5, credits: 12 },
    ],
  },
  {
    title: "Diploma in Information Technology",
    code: "DIT",
    duration: "2½ years of academic training, 6 months of workplace training",
    nqf: "Level 6",
    credits: 360,
    saqaId: 120097,
    location: ["Pretoria Campus", "Kempton Park Campus"],
    description:
      "Our Diploma in Information Technology consists of a generic foundation phase and a specialisation phase. The foundation phase gives insight into the field of information technology, while the specialisation phase is career oriented.",
    modules: [
      {
        title: "Business Communication 161",
        code: "BUC161",
        nqf: 5,
        credits: 4,
      },
      {
        title: "Business Management and Entrepreneurship 161",
        code: "BME161",
        nqf: 5,
        credits: 8,
      },
      {
        title: "Computer Architecture 161",
        code: "COA161",
        nqf: 5,
        credits: 8,
      },
      { title: "Database Concept 161", code: "DBC161", nqf: 5, credits: 8 },
      {
        title: "Database Functionality 161",
        code: "DBF161",
        nqf: 5,
        credits: 8,
      },
    ],
  },
];

const lecturers = [
  "Freancoise-Venter",
  "Francois Venter",
  "Tendai Mkwaira",
  "Francois Smit",
  "Anila Mundackal",
  "Edward van Niekerk",
  "Charmaine Tavagwisa",
  "Kudzayi Matekaire",
  "Alfred Mazorodze",
  "Matildah Chiruka",
  "Gift Mudare",
  "Nsuku Ngoveni",
  "Raymond Hood",
  "Caviner Ruiters",
  "Desire Sundire",
  "Masimba Zengeni",
  "Evangelistars Shayamano",
  "Elaine Rynners",
  "Stanley Makweche",
  "Catharina Boshoff",
  "Dino Giovannoni",
  "Reason Sithole",
  "Surani Laubscher",
  "Michael Combrinck",
  "Asiphe Magaudeni",
  "Tshegofatso Hutang",
  "Duan Steyn",
  "Tichaona Chinyerere",
  "Sannie Zwane",
  "Pula Moila",
  "Philip van Huyssteen",
  "Nkululeko Lekokoane",
  "Ikraam Sadek",
  "Shakeng Thamaga",
  "Galaletsang Modimola",
  "Lungile Saula",
  "Hein Van Niekerk",
  "Eddie Cheteni",
  "Melary Magorimbo",
  "Sibusiso Mhlabane",
  "Bekithemba Mpofu",
  "Solomon Ruwende",
  "Naledi Msiya",
  "Juanita Blignaut",
];

const venues = [
  "IOTA",
  "GAMMA",
  "YPSILLON",
  "CHI",
  "PI",
  "PHI",
  "OMEGA",
  "OMNIKRON",
  "THETA",
  "KAPPA1",
  "KAPPA2",
];

function displayCourses(filteredCourses) {
  const coursesContainer = document.getElementById("courses");
  coursesContainer.innerHTML = "";

  filteredCourses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.className = "course-card";
    courseCard.innerHTML = `
          <h3>${course.title}</h3>
          <p><strong>Course Code:</strong> ${course.code}</p>
          <p><strong>Duration:</strong> ${course.duration}</p>
          <p>${course.description}</p>
          <button onclick="viewCourseDetails('${course.code}')">View Details</button>
      `;
    coursesContainer.appendChild(courseCard);
  });
}

function viewCourseDetails(courseCode) {
  const course = courses.find((c) => c.code === courseCode);
  const courseInfo = document.getElementById("courseInfo");
  const courseDetails = document.getElementById("course-details");
  const completedModules = document.getElementById("completed-modules");

  courseInfo.innerHTML = `
      <h3>${course.title}</h3>
      <p><strong>Course Code:</strong> ${course.code}</p>
      <p><strong>Duration:</strong> ${course.duration}</p>
      <p><strong>NQF Level:</strong> ${course.nqf}</p>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>SAQA ID:</strong> ${course.saqaId}</p>
      <p><strong>Location:</strong> ${course.location.join(", ")}</p>
      <p>${course.description}</p>
      <h4>Modules</h4>
      <table>
          <tr>
              <th>Title</th>
              <th>Code</th>
              <th>NQF Level</th>
              <th>Credits</th>
              <th>Actions</th>
          </tr>
          ${course.modules
            .map(
              (module) => `
              <tr>
                  <td>${module.title}</td>
                  <td>${module.code}</td>
                  <td>${module.nqf}</td>
                  <td>${module.credits}</td>
                  <td>
                      <button onclick="markAsCompleted('${module.code}')">Mark as Completed</button>
                      <button onclick="downloadStudyGuide('${module.code}')">Download Study Guide</button>
                      <button class="video-button" onclick="watchVideo('${module.code}')">Watch Video</button>
                  </td>
              </tr>
          `
            )
            .join("")}
      </table>
      <h4>Lecturers</h4>
      <ul>
          ${getRandomLecturers(8)
            .map((lecturer) => `<li>${lecturer}</li>`)
            .join("")}
      </ul>
      <h4>Venues</h4>
      <ul>
          ${getRandomVenues(3)
            .map((venue) => `<li>${venue}</li>`)
            .join("")}
      </ul>
  `;

  courseDetails.style.display = "block";
  completedModules.style.display = "block";
}

function getRandomLecturers(count) {
  return lecturers.sort(() => 0.5 - Math.random()).slice(0, count);
}

function getRandomVenues(count) {
  return venues.sort(() => 0.5 - Math.random()).slice(0, count);
}

function markAsCompleted(moduleCode) {
  const completedList = document.getElementById("completedList");
  const listItem = document.createElement("li");
  listItem.textContent = moduleCode;
  completedList.appendChild(listItem);

  // Mark the module as completed in the table
  const moduleRow = document.querySelector(
    `tr:has(td:contains('${moduleCode}'))`
  );
  if (moduleRow) {
    moduleRow.classList.add("completed");
  }
}

function downloadStudyGuide(moduleCode) {
  alert(`Downloading study guide for module ${moduleCode}`);
  // In a real application, this would trigger a file download
}

function watchVideo(moduleCode) {
  alert(`Opening video for module ${moduleCode}`);
  // In a real application, this would open a video player or redirect to a video page
}

document.getElementById("searchButton").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(query) ||
      course.code.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query)
  );
  displayCourses(filteredCourses);
});

document.getElementById("printCourse").addEventListener("click", () => {
  window.print();
});
