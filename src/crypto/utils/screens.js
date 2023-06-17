export const multipleWidthChart = () => {
    const screenWidth = window.screen.width;

    if (screenWidth >= 900) {
        return 300;
    } else if (screenWidth >= 512) {
        return 280;
    } else if (screenWidth >= 1140) {
        return 350;
    } else if (screenWidth >= 320) {
        return 220;
    } else {
        return 320;
    }
};