AFRAME.registerComponent("room", {
    init: function () {
        startMoment();
    },
});

defaultCursorPos = { x: 0, y: 0, z: 0 };
roomCursorPos = { x: 0, y: 0, z: -0.4 };

const startMoment = () => {
    document
        .getElementById("camera")
        .setAttribute("position", { x: -2.8, y: 0.9, z: -5.3 });
    document
        .getElementById("rig")
        .setAttribute("rotation", { x: 0, y: 90, z: 0 });
    document
        .getElementById("cursor")
        .setAttribute("position", this.roomCursorPos);
    document.getElementById("camera").setAttribute("wasd-controls", false);
};
