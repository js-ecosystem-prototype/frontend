import {
  CORNER_RADIUS_DATA,
  CornerRadiusID,
  THEME_DATA,
  ThemeID,
} from "@/types/ui";

export const applyTheme = (themeID: ThemeID) => {
  document.documentElement.setAttribute("data-theme", themeID);

  // localStorage.setItem("data-theme", themeID);

  console.log(`Apply theme: ${THEME_DATA[themeID].name}`);
};

export const applyCornerRadius = (cornerRadiusID: CornerRadiusID) => {
  document.documentElement.setAttribute("data-corner-radius", cornerRadiusID);

  // localStorage.setItem("data-corner-radius", cornerRadiusID);

  console.log(
    `Apply corner radius: ${CORNER_RADIUS_DATA[cornerRadiusID].name}`
  );
};
