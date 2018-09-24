let settingOptions = document.getElementById('settings-options');

const createNode = (i) => {
    let wrapper = document.createElement('div');
    let name = document.createElement('span');
    let colorPicker = document.createElement('input');

    colorPicker.type = 'color';
    wrapper.classList.add('settings__options__option');
    name.classList.add('settings__options__option__name');

    wrapper.appendChild(name);
    wrapper.appendChild(colorPicker);

    name.innerText = i.name;
    colorPicker.value = i.color;

    return wrapper
}

const createLlist = () => {
    siteList.map(i => {
        let node = createNode(i);
        console.log(node);
        settingOptions.appendChild(node);
    })
}

createLlist();