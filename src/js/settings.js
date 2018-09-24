let settingOptions = document.getElementById('settings-options');

const createLlist = () => {
    siteList.map(i => {
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
        console.log(wrapper);
        settingOptions.appendChild(wrapper);
    })
}

createLlist();