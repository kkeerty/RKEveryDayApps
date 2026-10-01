const form = document.querySelector("#support-form");

const params = new URLSearchParams(location.search);
const selected = params.get("app");

if (
    selected &&
    [...form.app.options].some(option => option.value === selected)
) {
    form.app.value = selected;
}

