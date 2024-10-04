let filtered = null;
const styleEle = document.head.appendChild(document.createElement("style"));

async function fetchDataIfNeeded() {
    if (!filtered) {
        try {
            const res = await fetch('data.js');
            filtered = await res.json();
            filtered = filtered.reverse();
        } catch (err) {
            console.log(err);
        }
    }
}

function setPercentage(stateLiveEvent, stateRead, stateCreate, stateDigitalConsumption) {
    document.querySelector("#live-events-percentage .percentage-text").textContent = `${stateLiveEvent}%`;
    document.querySelector("#read-percentage .percentage-text").textContent = `${stateRead}%`;
    document.querySelector("#create-percentage .percentage-text").textContent = `${stateCreate}%`;
    document.querySelector("#digital-media-percentage .percentage-text").textContent = `${stateDigitalConsumption}%`;
    let lEBorderRadius1200 = 0;
    let lEBorderRadius600 = 0;
    let lEBorderRadius = 0;
    if(stateLiveEvent > 82) {
        lEBorderRadius600 = stateLiveEvent - 81;
    }
    if(stateLiveEvent > 80) {
        lEBorderRadius = stateLiveEvent - 79;
    }
    if(stateLiveEvent > 71) {
        lEBorderRadius1200 = stateLiveEvent - 70;
    }

    let rBorderRadius1200 = 0;
    let rBorderRadius600 = 0;
    let rBorderRadius = 0;
    if(stateRead > 82) {
        rBorderRadius600 = stateRead - 81;
    }
    if(stateRead > 80) {
        rBorderRadius = stateRead - 79;
    }
    if(stateRead > 71) {
        rBorderRadius1200 = stateRead - 70;
    }

    let cBorderRadius1200 = 0;
    let cBorderRadius600 = 0;
    let cBorderRadius = 0;
    if(stateCreate > 82) {
        cBorderRadius600 = stateCreate - 81;
    }
    if(stateCreate > 80) {
        cBorderRadius = stateCreate - 79;
    }
    if(stateCreate > 71) {
        cBorderRadius1200 = stateCreate - 70;
    }
    
    let borderRadius1200 = 0;
    let borderRadius600 = 0;
    let borderRadius = 0;
    if(stateDigitalConsumption > 82) {
        borderRadius600 = stateDigitalConsumption - 81;
    }
    if(stateDigitalConsumption > 80) {
        borderRadius = stateDigitalConsumption - 79;
    }
    if(stateDigitalConsumption > 71) {
        borderRadius1200 = stateDigitalConsumption - 70;
    }
    styleEle.innerHTML = `
        @media (max-width:410px){
            .percentage-live-events:after {
                border-radius: ${lEBorderRadius600}px ${lEBorderRadius600}px 33px 33px;
            }
            .percentage-read:after {
                border-radius: ${rBorderRadius600}px ${rBorderRadius600}px 33px 33px;
            }
            .percentage-create:after {
                border-radius: ${cBorderRadius600}px ${cBorderRadius600}px 33px 33px;
            }
            .percentage-digital-media:after {
                border-radius: ${borderRadius600}px ${borderRadius600}px 33px 33px;
            }
        }
        @media (min-width:600px){
            .percentage-live-events:after {
                border-radius: ${lEBorderRadius600}px ${lEBorderRadius600}px 33px 33px;
            }
            .percentage-read:after {
                border-radius: ${rBorderRadius600}px ${rBorderRadius600}px 33px 33px;
            }
            .percentage-create:after {
                border-radius: ${cBorderRadius600}px ${cBorderRadius600}px 33px 33px;
            }
            .percentage-digital-media:after {
                border-radius: ${borderRadius600}px ${borderRadius600}px 33px 33px;
            }
        }
        @media (min-width:768px){
            .percentage-live-events:after {
                border-radius: ${lEBorderRadius}px ${lEBorderRadius}px 33px 33px;
            }
            .percentage-read:after {
                border-radius: ${rBorderRadius}px ${rBorderRadius}px 33px 33px;
            }
            .percentage-create:after {
                border-radius: ${cBorderRadius}px ${cBorderRadius}px 33px 33px;
            }
            .percentage-digital-media:after {
                border-radius: ${borderRadius}px ${borderRadius}px 33px 33px;
            }
        }
        @media (min-width:1200px){
            .percentage-live-events:after {
                border-radius: ${lEBorderRadius1200}px ${lEBorderRadius1200}px 33px 33px;
            }
            .percentage-read:after {
                border-radius: ${rBorderRadius1200}px ${rBorderRadius1200}px 33px 33px;
            }
            .percentage-create:after {
                border-radius: ${cBorderRadius1200}px ${cBorderRadius1200}px 33px 33px;
            }
            .percentage-digital-media:after {
                border-radius: ${borderRadius1200}px ${borderRadius1200}px 33px 33px;
            }
        }
        .percentage-live-events:after {
            background: #b274ed;
            height: ${stateLiveEvent}%;
        }
        .percentage-read:after {
            background-color:  #F29972;
            height: ${stateRead}%;
        }
        .percentage-create:after {
            background-color: #FFD473;
            height: ${stateCreate}%;
        }
        .percentage-digital-media:after {
            background-color: #4F5CAA;
            height: ${stateDigitalConsumption}%;
        }
    `;
}

// function createDropdownOptions(data) {
//     const dropdown = document.createElement('select');
//     dropdown.setAttribute('id', 'stateDropdown');

//     data.forEach(state => {
//         if(state.stateAbbr !== 'US') {
//             const option = document.createElement('option');
//             option.value = state.stateAbbr;
//             option.textContent = state.state;
//             dropdown.appendChild(option);
//         }
//     });

//     return dropdown;
// }

// async function handleStateSelection(selectedStateAbbr) {
//     await fetchDataIfNeeded();

//     const selectedState = filtered.find(state => state.stateAbbr === selectedStateAbbr);
//     if (selectedState) {
//         const { liveEvent, read, create, digitalConsumption, state } = selectedState;
//         setPercentage(liveEvent, read, create, digitalConsumption, state);
//     }
// }

// // Call fetchDataIfNeeded function when the document has fully loaded
// document.addEventListener('DOMContentLoaded', async () => {
//     await fetchDataIfNeeded();

//     const dropdownContainer = document.getElementById('dropdown');
//     dropdownContainer.appendChild(createDropdownOptions(filtered));

//     // Add event listener to the dropdown
//     const dropdown = document.getElementById('stateDropdown');
//     dropdown.addEventListener('change', () => {
//         const selectedStateAbbr = dropdown.value;
//         dropdownChanged(selectedStateAbbr);
//     });
//     document.querySelector("#stateDropdown").addEventListener('click',() =>{
//         document.querySelector("#stateDropdown").classList.toggle("open")
//     })
   
// });

// async function stateClick(clickedState) {
//     console.log('clickedState ===== ',clickedState);
//     let stateAbbr = clickedState.getAttribute('state-target');

//     Array.from(document.getElementsByClassName('active-state')).forEach(element => {
//         element.classList.remove('active-state');
//     });    
//     document.getElementById(''+ stateAbbr +'').classList.add('active-state');

//     let dropdown = document.getElementById('stateDropdown');
//     if (dropdown) {
//         let options = dropdown.options;
//         for (let i = 0; i < options.length; i++) {
//             if (options[i].value === stateAbbr) {
//                 options[i].selected = true;
//                 break;
//             }
//         }
//     }
    
//     await handleStateSelection(stateAbbr);
// }

// async function dropdownChanged(selectedStateAbbr) {
//     console.log('changed ===== ',selectedStateAbbr);
//     Array.from(document.getElementsByClassName('active-state')).forEach(element => {
//         element.classList.remove('active-state');
//     });    
//     document.getElementById(''+ selectedStateAbbr +'').classList.add('active-state');
//     await handleStateSelection(selectedStateAbbr);
// }



function createDropdownOptions(data) {
    const details = document.createElement('details');
    details.classList.add('country-select');
    details.setAttribute('id', 'stateDropdownDetails');

    const summary = document.createElement('summary');
    summary.textContent = 'Select State';

    const ul = document.createElement('ul');
    ul.classList.add('country-list');

    data.forEach(state => {
        if (state.stateAbbr !== 'US') {
            const li = document.createElement('li');
            li.dataset.value = state.stateAbbr;
            li.textContent = state.state;
            ul.appendChild(li);
        }
    });

    details.appendChild(summary);
    details.appendChild(ul);

    return details;
}

async function handleStateSelection(selectedStateAbbr) {
    await fetchDataIfNeeded();

    const selectedState = filtered.find(state => state.stateAbbr === selectedStateAbbr);
    if (selectedState) {
        const { liveEvent, read, create, digitalConsumption, state } = selectedState;
        setPercentage(liveEvent, read, create, digitalConsumption, state);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await fetchDataIfNeeded();

    const dropdownContainer = document.getElementById('dropdown');
    dropdownContainer.appendChild(createDropdownOptions(filtered));

    // Add event listener to the <li> elements inside the <ul>
    const dropdownDetails = document.getElementById('stateDropdownDetails');
    const summary = dropdownDetails.querySelector('summary');
    const options = dropdownDetails.querySelectorAll('li');

    options.forEach(option => {
        option.addEventListener('click', async () => {
            const selectedStateAbbr = option.dataset.value;
            summary.textContent = option.textContent;
            dropdownDetails.removeAttribute('open');
            await dropdownChanged(selectedStateAbbr);
        });
    });
});

async function stateClick(clickedState) {
    //console.log('clickedState ===== ', clickedState);
    let stateAbbr = clickedState.getAttribute('state-target');

    Array.from(document.getElementsByClassName('active-state')).forEach(element => {
        element.classList.remove('active-state');
    });
    document.getElementById('' + stateAbbr + '').classList.add('active-state');

    let dropdownDetails = document.getElementById('stateDropdownDetails');
    if (dropdownDetails) {
        let options = dropdownDetails.querySelectorAll('li');
        for (let i = 0; i < options.length; i++) {
            if (options[i].dataset.value === stateAbbr) {
                const summary = dropdownDetails.querySelector('summary');
                summary.textContent = options[i].textContent;
                break;
            }
        }
    }

    await handleStateSelection(stateAbbr);
}

async function dropdownChanged(selectedStateAbbr) {
    //console.log('changed ===== ', selectedStateAbbr);
    Array.from(document.getElementsByClassName('active-state')).forEach(element => {
        element.classList.remove('active-state');
    });
    document.getElementById('' + selectedStateAbbr + '').classList.add('active-state');
    await handleStateSelection(selectedStateAbbr);
}

