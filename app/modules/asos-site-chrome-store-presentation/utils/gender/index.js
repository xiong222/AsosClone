export var getGenderByFloorId = function getGenderByFloorId(floorId) {
  switch (Number(floorId)) {
    case 1000:
      return "women";
    case 1001:
      return "men";
    default:
      return "default";
  }
};

export var getFloorIdByGender = function getFloorIdByGender(gender) {
  if (typeof gender !== "string") {
    return null;
  }
  switch (gender.toLowerCase()) {
    case "women":
      return 1000;
    case "men":
      return 1001;
    default:
      return null;
  }
};
