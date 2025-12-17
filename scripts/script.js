const gallery = {
  covers: {
    "Asha Banks": {
      sum: 17,
      date: "2025-12-01",
      fontFamily: "trebuchet ms",
      fontSize: "60px",
    },
    "Isabela Merced": {
      sum: 17,
      date: "2025-09-01",
      fontSize: "50px",
    },
    "Aja Naomi King": {
      sum: 8,
      date: "2025-07-01",
      fontFamily: "Impact, Chicago",
      fontSize: "50px",
      textTransform: "uppercase",
      letterSpacing: "-0.02em",
    },
    "Emma Appleton": {
      sum: 14,
      date: "2024-12-01",
      fontSize: "60px",
    },
    "Lashana Lynch": {
      sum: 6,
      date: "2024-10-01",
      fontFamily: "Times",
      fontSize: "71px",
      fontWeight: "normal",
    },
    "Demi Singleton": {
      sum: 30,
      date: "2024-02-01",
      fontWeight: "normal",
    },
  },
  "CONTENTs man": {
    "Corey Mylchreest": {
      sum: 8,
      date: "2025-08-01",
      fontSize: "62px",
    },
    "Jason Isaacs": {
      sum: 12,
      date: "2025-03-01",
      fontFamily: "Impact, Chicago",
      fontSize: "42px",
      letterSpacing: "-0.02em",
    },
    "Alessandro Nivola": {
      sum: 9,
      date: "2024-12-01",
      fontFamily: "avenir-reg",
      fontSize: "58px",
      fontStyle: "italic",
    },
    "Daniel Zovatto": {
      sum: 6,
      date: "2024-10-01",
      fontFamily: "didot",
      fontSize: "60px",
      fontWeight: "normal",
    },
    "Brandon Sklenar": {
      sum: 6,
      date: "2024-08-01",
      fontFamily: "raleway-italic",
      fontSize: "58px",
      fontStyle: "italic",
    },
    "Justin H. Min": {
      sum: 16,
      date: "2024-05-01",
      fontSize: "50px",
      fontWeight: "normal",
    },
    "Chance Perdomo": {
      sum: 14,
      date: "2023-12-01",
      fontWeight: "normal",
    },
    "Phil Dunster": {
      sum: 15,
      date: "2023-04-01",
    },
  },
  features: {
    "Zoe Cipres": {
      sum: 7,
      date: "2025-02-24",
      fontFamily: "Impact, Chicago",
      fontSize: "55px",
      textTransform: "uppercase",
      letterSpacing: "-0.02em",
    },
    "Ayden Mayeri": {
      sum: 12,
      date: "2024-08-01",
      fontFamily: "asenine",
      fontSize: "70px",
      fontStyle: "italic",
    },
    "Julian Kostov": {
      sum: 7,
      date: "2025-04-01",
      fontFamily: "gil-sans-light",
      fontSize: "80px",
      textTransform: "uppercase",
      letterSpacing: "-0.02em",
      fontStyle: "italic",
    },
    "Desi Lydic": {
      sum: 7,
      date: "2023-12-31",
    },
    "Richa Moorjani": {
      sum: 6,
      date: "2023-12-01",
      fontWeight: "normal",
    },
    "Tyler Alvarez": {
      sum: 14,
      date: "2022-11-18",
      fontFamily: "genghis-khan",
      fontWeight: "normal",
    },
    "Christine Ko": {
      sum: 17,
      date: "2022-10-01",
      fontFamily: "montserrat",
    },
    "Julia Butters": {
      sum: 17,
      date: "2022-08-01",
      fontFamily: "Symbol",
    },
    "Camila Perez": {
      sum: 24,
      date: "2021-12-01",
      fontFamily: "Belleza",
      fontWeight: "normal",
      textTransform: "uppercase",
    },
    "Daniel Henney": {
      sum: 10,
      date: "2022-03-14",
      fontFamily: "Impact, Chicago",
      textTransform: "uppercase",
      letterSpacing: "0.4px",
    },
    "Jake Lacy": {
      sum: 12,
      date: "2021-07-01",
      fontFamily: "EB Garamond",
      fontSize: "24pt",
      fontWeight: "normal",
    },
    "Mason Gooding": {
      sum: 17,
      date: "2020-07-01",
      fontFamily: "genghis-khan",
      fontSize: "69px",
      textTransform: "uppercase",
      letterSpacing: "-1.8px",
    },
    "May Calamawy": {
      sum: 8,
      date: "2020-06-01",
      fontFamily: "Petit Formal Script",
      fontSize: "42px",
      letterSpacing: "0.7px",
      fontStyle: "italic",
    },
    Herizen: {
      sum: 10,
      date: "2020-04-01",
      fontFamily: "Abril Fatface",
      fontSize: "47px",
      textTransform: "uppercase",
      letterSpacing: "-1.8px",
    },
    "Laysla De Oliveira": {
      sum: 15,
      date: "2018-08-01",
      fontFamily: "Abril Fatface",
      fontSize: "48px",
      textTransform: "uppercase",
      letterSpacing: "-1.8px",
    },
  },
  beauty: {
    "Maia Reficco": {
      sum: 12,
      date: "2025-02-01",
      fontFamily: "Impact, Chicago",
      fontSize: "55px",
      textTransform: "uppercase",
      letterSpacing: "-0.02em",
    },
    "Grace Van Patten": {
      sum: 15,
      date: "2021-10-01",
      fontFamily: "Archivo Black",
      fontSize: "26pt",
      textTransform: "uppercase",
    },
    "Hailey Kilgore": {
      sum: 14,
      date: "2021-09-01",
      fontFamily: "Arial Black",
      fontSize: "18pt",
      textTransform: "uppercase",
    },
    "Madelyn Cline": {
      sum: 18,
      date: "2021-08-01",
      fontFamily: "Radiant",
      fontSize: "76px",
    },
  },
};

for (const section in gallery) {
  gallery[section] = Object.fromEntries(
    Object.entries(gallery[section]).sort(([, a], [, b]) =>
      b.date.localeCompare(a.date)
    )
  );
}

const basicLink = "https://shoneal.github.io/contentmode/images/";
const logo = `${basicLink}logo.png`;

document.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
}); // Смена темы

const navigation = document.querySelector(".navigation");
const navList = navigation.querySelector(".navigation_list");
if (navList) {
  const fragment = document.createDocumentFragment();
  const keys = Object.keys(gallery);

  for (let i = 0; i < keys.length; i++) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "navigation_button";
    button.textContent = keys[i];
    button.dataset.section = keys[i];
    li.appendChild(button);
    fragment.appendChild(li);
  }

  navList.appendChild(fragment);
} // Добавление кнопок в навигацию

const recentBlock = document.querySelector(".recent");
const recentTemplate = document.getElementById("recent-template");
const formatName = (name) =>
  name.replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, "_");
const isSpecialSection = (section) => section === "CONTENTs man"; // Специальная секция
const getSectionPath = (sectionName) =>
  isSpecialSection(sectionName) ? sectionName.split(" ")[1] : sectionName; // Второе слово из специальной секции или обычная секция
function createCoverListItem(name, sectionName) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const img = document.createElement("img");

  div.classList = "cover_link";
  div.dataset.name = name;

  img.src = `${basicLink}${getSectionPath(sectionName)}/covers/768/${formatName(
    name
  )}.jpg`;
  img.alt = `${name} Cover`;
  img.addEventListener("load", () => {
    img.style.opacity = "1";
  });

  div.appendChild(img);
  li.appendChild(div);

  return li;
} // Шаблон создания блока с обложками
for (const [sectionName, items] of Object.entries(gallery)) {
  const clone = recentTemplate.content.cloneNode(true);
  const button = clone.querySelector(".section_button");
  const img = button.querySelector("img");
  const list = clone.querySelector(".section_list");

  button.dataset.section = sectionName;
  if (isSpecialSection(sectionName)) {
    img.classList.replace("logo", "special_logo");
    img.src = `${basicLink}special-logo-white.png`;
    img.alt = "Special Logo";
  } else {
    const text = document.createTextNode(sectionName);
    button.appendChild(text);
  }

  for (const [name] of Object.entries(items).slice(0, 3)) {
    list.appendChild(createCoverListItem(name, sectionName));
  }

  recentBlock.appendChild(clone);
} // Вставляем секции в HTML

for (const img of document.querySelectorAll("img.logo")) {
  img.src = logo;
  img.alt = "Logo";
} // Добавление всем одного логотипа

const headerButton = document.querySelector(".header_button");
const sectionFull = document.querySelector(".section_full");
const sectionFullTitle = document.querySelector(".section_full_title");
const sectionFullList = document.querySelector(".section_full_list");
const clearContainer = (el) => el.replaceChildren?.() || (el.innerHTML = ""); // Очистка divoв
document.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-section]");
  if (!btn || btn === headerButton) return;

  e.preventDefault();

  const sectionName = btn.dataset.section;
  navigation.style.display = recentBlock.style.display = "none";
  sectionFull.style.display = "block";
  headerButton.classList.replace("button-is_active", "button-is_not_active");
  headerButton.disabled = false;

  if (sectionName === "covers")
    sectionFullList.classList.add("full_list_covers");

  if (isSpecialSection(sectionName)) {
    sectionFullTitle.appendChild(
      Object.assign(document.createElement("img"), {
        src: `${basicLink}special-logo-black.jpg`,
        alt: "Special Logo",
        className: "section_full_logo",
      })
    );
  } else {
    sectionFullTitle.appendChild(
      Object.assign(document.createElement("h2"), {
        textContent: sectionName,
      })
    );
  }

  const items = gallery[sectionName];
  if (items) {
    for (const [name] of Object.entries(items)) {
      sectionFullList.appendChild(createCoverListItem(name, sectionName));
    }
  }
  window.scroll(0, 0);
  setCoverHeights(sectionFullList);
  window.addEventListener("resize", () => setCoverHeights(sectionFullList));
}); // Обработка клика по кнопкам навигации
headerButton.addEventListener("click", (e) => {
  if (!headerButton.classList.contains("button-is_not_active")) return;

  e.preventDefault();

  navigation.style.display = recentBlock.style.display = "block";
  sectionFull.style.display = "none";

  headerButton.classList.replace("button-is_not_active", "button-is_active");
  headerButton.disabled = true;
  clearContainer(sectionFullTitle);
  clearContainer(sectionFullList);
  sectionFullList.className = "section_full_list";
  setCoverHeights();
}); // Обработка клика по главной кнопке

const setCoverHeights = (container = document) => {
  const root = container instanceof HTMLElement ? container : document;
  if (window.innerWidth >= 768) {
    root
      .querySelectorAll(".cover_link")
      .forEach((el) => (el.style.height = ""));
    return;
  }

  const heights = Array.from(root.querySelectorAll(".cover_link img"))
    .filter((img) => img.complete && img.naturalHeight)
    .map((img) => (img.naturalHeight * img.clientWidth) / img.naturalWidth);

  const minHeight = Math.floor(Math.min(...heights));
  root
    .querySelectorAll(".cover_link")
    .forEach((el) => (el.style.height = `${minHeight}px`));
}; // Уставнока изображениям одной высоты в вертикальном расположении
document.addEventListener("DOMContentLoaded", () => setCoverHeights());
window.addEventListener("resize", () => setCoverHeights());

const openPopup = (popup) => {
  document.body.dataset.scrollPosition = window.scrollY;
  document.body.style.top = `-${window.scrollY}px`;
  document.body.classList.add("scroll-lock");
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupByEsc);
}; // Открытие popup
const closePopup = (popup) => {
  const scrollPosition = document.body.dataset.scrollPosition;
  document.body.style.top = "";
  document.body.classList.remove("scroll-lock");
  window.scrollTo(0, scrollPosition);
  popup.classList.remove("popup_is-opened");
  popup.querySelectorAll("img").forEach((img) => {
    if (!img.closest(".close")) {
      img.src = "";
    }
  });
  document.removeEventListener("keydown", closePopupByEsc);
}; // Закрытие popup
const closePopupByEsc = (e) =>
  e.key === "Escape" && closePopup(document.querySelector(".popup_is-opened")); // Закрытие popup по Esc

const popup = document.querySelector(".popup");
const closeBtn = popup.querySelector(".close");
document.addEventListener("click", (e) => {
  const coverLink = e.target.closest(".cover_link");
  if (!coverLink || !coverLink.dataset.name) return;

  const name = coverLink.dataset.name;
  let section, data;

  for (const [sec, items] of Object.entries(gallery)) {
    if (items[name]) {
      section = sec;
      data = items[name];
      break;
    }
  }

  renderPopupContent(name, section, data);
  openPopup(popup);
}); // Клик по обложкам
const renderPopupContent = (name, section, data) => {
  const popupHeader = popup.querySelector(".popup_header");
  const img = popupHeader.querySelector(".popup_header_image");
  const title = popupHeader.querySelector(".popup_header_title");
  const container = popup.querySelector(".popup_main");

  clearContainer(container);
  img.src = `${basicLink}${getSectionPath(section)}/${formatName(
    name
  )}/768/main.jpg`;
  img.alt = name;
  img.style.opacity = "0";
  img.addEventListener("load", () => {
    if (img.naturalWidth > img.naturalHeight)
      popupHeader.classList.add("popup_header_row");
    else popupHeader.classList.remove("popup_header_row");
    img.style.opacity = "1";
  });
  title.textContent = name;
  title.style.fontFamily = data.fontFamily || "gil-sans";
  title.style.fontSize = data.fontSize || "36pt";
  title.style.fontWeight = data.fontWeight || "bolder";
  title.style.textTransform = data.textTransform || "capitalize";
  title.style.letterSpacing = data.letterSpacing || "normal";
  title.style.fontStyle = data.fontStyle || "normal";

  const wrappers = [];

  for (let i = 1; i <= data.sum; i++) {
    const wrapper = document.createElement("div");
    wrapper.className = "popup_image_wrapper";

    const imgEl = document.createElement("img");
    imgEl.src = `${basicLink}${getSectionPath(section)}/${formatName(
      name
    )}/768/${i}.jpg`;
    imgEl.alt = name;
    imgEl.loading = "lazy";
    imgEl.style.opacity = "0";

    wrapper.append(imgEl);
    container.append(wrapper);
    wrappers.push({ wrapper, img: imgEl });
  }

  const processVerticalGroup = (group) => {
    group.forEach((wrapper, index) => {
      if (index % 2 === 0) wrapper.classList.add("odd_vertical");
      if (index % 2 === 0 && index + 1 >= group.length)
        wrapper.classList.add("alone_image");
    });
  };

  const processHorizontalSequence = (sequence) => {
    const total = sequence.length;
    if (total < 2) return;

    const limit = total % 2 === 0 ? total : total - 1;

    for (let i = 0; i < limit; i++) {
      if (i % 2 === 0) sequence[i].classList.add("odd_horizontal");
      else sequence[i].classList.add("even_horizontal");
    }
  };

  const assignClasses = () => {
    let verticalGroup = [];
    let horizontalSequence = [];

    wrappers.forEach(({ wrapper, img }, index) => {
      const isHorizontal = img.naturalWidth > img.naturalHeight;

      if (isHorizontal) {
        wrapper.classList.add("horizontal_image");
        horizontalSequence.push(wrapper);
        if (verticalGroup.length > 0) {
          processVerticalGroup(verticalGroup);
          verticalGroup = [];
        }
      } else {
        wrapper.classList.add("vertical_image");
        verticalGroup.push(wrapper);
        if (horizontalSequence.length > 0) {
          processHorizontalSequence(horizontalSequence);
          horizontalSequence = [];
        }
      }
      if (index === wrappers.length - 1) {
        processVerticalGroup(verticalGroup);
        processHorizontalSequence(horizontalSequence);
      }
    });
    container.style.opacity = "1";
  };

  Promise.all(
    wrappers.map(({ img }) => {
      return new Promise((resolve) => {
        if (img.complete) {
          img.style.opacity = "1";
          resolve();
        } else {
          img.addEventListener("load", () => {
            img.style.opacity = "1";
            resolve();
          });
          img.addEventListener("error", () => {
            img.style.opacity = "1";
            resolve();
          });
        }
      });
    })
  ).then(assignClasses);
}; // Подгрузка инфы в popup

closeBtn.addEventListener("click", () => closePopup(popup)); // Клик по закрытию popup
