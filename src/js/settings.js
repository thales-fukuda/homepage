let settingOptions = document.getElementById('settings-options');

const createNode = (i) => {
    let wrapper = document.createElement('div');
    let name = document.createElement('span');
    let colorPicker = document.createElement('input');


    wrapper.classList.add('settings__options__option');
    name.classList.add('settings__options__option__name');

    wrapper.appendChild(name);
    wrapper.appendChild(colorPicker);

    colorPicker.type = 'color';
    name.innerText = i.name;
    colorPicker.value = i.color;

    return wrapper
}

const createLlist = () => {
    siteList.map(i => {
        let node = createNode(i);
        settingOptions.appendChild(node);
    })
}

createLlist();