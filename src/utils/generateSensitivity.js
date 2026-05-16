const tierBaseSensitivity = {
  flagship: 120,
  midrange: 145,
  lowend: 170,
};

export default function generateSensitivity(
  device,
  sleeveType
) {

  let general =
    tierBaseSensitivity[device.tier];

  // Sleeves
  if (sleeveType === "noSleeves") {
    general += 25;
  } else {
    general -= 10;
  }

  // Touch response
  general -= device.touch * 2;

  // Smooth FPS
  general -= device.smoothness * 1.5;

  // Bigger displays need more sensi
  general += device.displaySize * 2;

  // Clamp
  if (general > 200) general = 200;
  if (general < 70) general = 70;

  return {
    general: Math.round(general),

    redDot: Math.round(general - 12),

    scope2x: Math.round(general - 28),

    scope4x: Math.round(general - 48),

    sniper: Math.round(general - 85),
  };
}