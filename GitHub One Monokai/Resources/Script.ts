function show(enabled: any, useSettingsInsteadOfPreferences: boolean) {
    if (useSettingsInsteadOfPreferences) {
        document.querySelector(".state-on").textContent = "Status: Enabled";
        document.querySelector(".state-off").textContent = "Status: Disabled";
        document.querySelector(".state-unknown").textContent =
            "You can turn on GitHub One Monokai’s extension in the Extensions section of Safari Settings.";
        document.querySelector(".open-preferences").textContent =
            "Open in Safari Settings…";
    }

    if (typeof enabled === "boolean") {
        document.body.classList.toggle(`state-on`, enabled);
        document.body.classList.toggle(`state-off`, !enabled);
    } else {
        document.body.classList.remove(`state-on`);
        document.body.classList.remove(`state-off`);
    }
}

function openPreferences() {
    // @ts-ignore
    webkit.messageHandlers.controller.postMessage("open-preferences");
}

document
    .querySelector("button.open-preferences")
    .addEventListener("click", openPreferences);
