function show(enabled: any, useSettingsInsteadOfPreferences: boolean) {
    if (useSettingsInsteadOfPreferences) {
        let querySelector = document.querySelector;

        querySelector<HTMLElement>(".state-on").innerText =
            "Status: Enabled";
        querySelector<HTMLElement>(".state-off").innerText =
            "Status: Disabled";
        querySelector<HTMLElement>(".state-unknown").innerText =
            "You can turn on GitHub One Monokai’s extension in the Extensions section of Safari Settings.";
        querySelector<HTMLElement>(".open-preferences").innerText =
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
