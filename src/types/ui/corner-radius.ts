export const CORNER_RADIUS = {
  NONE: "none",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  FULL: "full",
} as const;

export type CornerRadiusID = (typeof CORNER_RADIUS)[keyof typeof CORNER_RADIUS];

export type CornerRadiusData = {
  id: CornerRadiusID;
  name: string;
};

export const CORNER_RADIUS_DATA: Record<CornerRadiusID, CornerRadiusData> = {
  [CORNER_RADIUS.NONE]: {
    id: CORNER_RADIUS.NONE,
    name: "Sharp",
  },
  [CORNER_RADIUS.SMALL]: {
    id: CORNER_RADIUS.SMALL,
    name: "Small",
  },
  [CORNER_RADIUS.MEDIUM]: {
    id: CORNER_RADIUS.MEDIUM,
    name: "Medium",
  },
  [CORNER_RADIUS.LARGE]: {
    id: CORNER_RADIUS.LARGE,
    name: "Large",
  },
  [CORNER_RADIUS.FULL]: {
    id: CORNER_RADIUS.FULL,
    name: "Full",
  },
};
