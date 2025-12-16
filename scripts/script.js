const gallery = {
  covers: {
    "Asha Banks": [17, "2025-12-01", "trebuchet ms"],
    "Isabela Merced": [17, "2025-09-01", "gil-sans"],
    "Aja Naomi King": [8, "2025-07-01", "Impact, Chicago"],
    "Emma Appleton": [14, "2024-12-01", "gil-sans"],
    "Lashana Lynch": [6, "2024-10-01", "Andale Mono"],
    "Demi Singleton": [30, "2024-02-01", "gil-sans"],
  },
  "CONTENTs man": {
    "Noah Schnapp": [9, "2025-12-01", "Helvetica"],
    "Corey Mylchreest": [8, "2025-08-01", "gil-sans"],
    "Jason Isaacs": [12, "2025-03-01", "Impact, Chicago"],
    "Alessandro Nivola": [9, "2024-12-01", "avenir-reg", "italic"],
    "Daniel Zovatto": [6, "2024-10-01", "didot"],
    "Brandon Sklenar": [6, "2024-08-01", "raleway", "italic"],
    "Justin H. Min": [16, "2024-05-01", "gil-sans"],
    "Chance Perdomo": [14, "2023-12-01", "gil-sans"],
    "Phil Dunster": [15, "2023-04-01", "gil-sans"],
  },
  features: {
    "Zoe Cipres": [7, "2025-02-24", "Impact, Chicago"],
    "Ayden Mayeri": [12, "2024-08-01", "asenine", "italic"],
    "Julian Kostov": [7, "2025-04-01", "gil-sans-light", "italic"],
    "Desi Lydic": [7, "2023-12-31", "gil-sans"],
    "Richa Moorjani": [6, "2023-12-01", "gil-sans"],
    "Tyler Alvarez": [14, "2022-11-18", "genghis-khan"],
    "Christine Ko": [17, "2022-10-01", "montserrat"],
    "Julia Butters": [17, "2022-08-01", "Symbol"],
    "Camila Perez": [24, "2021-12-01", "Belleza"],
    "Daniel Henney": [10, "2022-03-14", "Impact, Chicago"],
    "Jake Lacy": [12, "2021-07-01", "EB Garamond"],
    "Mason Gooding": [17, "2020-07-01", "genghis-khan"],
    "May Calamawy": [8, "2020-06-01", "Petit Formal Script", "italic"],
    Herizen: [10, "2020-04-01", "Abril Fatface"],
    "Laysla De Oliveira": [15, "2018-08-01", "Abril Fatface"],
  },
  beauty: {
    "Grace Van Patten": [15, "2021-10-01", "Archivo Black"],
    "Hailey Kilgore": [14, "2021-09-01", "Arial Black"],
    "Madelyn Cline": [18, "2021-08-01", "EB Garamond"],
  },
};

for (const section in gallery) {
  gallery[section] = Object.fromEntries(
    Object.entries(gallery[section]).sort(([, a], [, b]) =>
      b[1].localeCompare(a[1])
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
  const img = popup.querySelector(".popup_header_image");
  const title = popup.querySelector(".popup_header_title");
  const container = popup.querySelector(".popup_main");

  clearContainer(container);
  img.src = `${basicLink}${getSectionPath(section)}/${formatName(
    name
  )}/768/main.jpg`;
  img.alt = name;
  img.addEventListener("load", () => {
    img.style.opacity = "1";
  });
  title.textContent = name;
  title.style.fontFamily = data[2];
  title.style.fontStyle = data[3] || "normal";

  for (let i = 1; i <= data[0]; i++) {
    const div = document.createElement("div");
    div.className = "popup_image_wrapper";

    const imgEl = document.createElement("img");
    imgEl.src = `${basicLink}${getSectionPath(section)}/${formatName(
      name
    )}/768/${i}.jpg`;
    imgEl.alt = name;
    imgEl.loading = "lazy";
    imgEl.onload = () => {
      if (imgEl.naturalWidth > imgEl.naturalHeight) {
        div.classList.add("horizontal_image");
      } else {
        div.classList.add("vertical_image");
      }
      imgEl.style.opacity = "1";
    };

    div.append(imgEl);
    container.append(div);
  }
}; // Подгрузка инфы в popup
closeBtn.addEventListener("click", () => closePopup(popup)); // Клик по закрытию popup
