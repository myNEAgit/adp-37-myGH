const loadData = async () => {
    try {
        const res = await fetch('data.js');
        filtered = await res.json();
        console.log('filtered ===== ',filtered);
        filtered.forEach(function(x){
            // console.log('x ===== ',x);
            // console.warn('modal_'+x.stateAbbr.replace(' ', '-'));
            //dropdown
            var dropdown = document.getElementById('dropdownItems');
            dropdown.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" state-target="'+x.stateAbbr+'">'+x.state+'</a>');
            //modals    
            var stateContainer = document.getElementById('state');
            stateContainer.insertAdjacentHTML('afterend',
            '<div id="modal_'+x.stateAbbr.replace(' ', '-')+'" class="modal">\
              <div class="modal-content">\
                <p class="close">&times;</p>\
                <h1>'+x.state+'</h1>\
                <div class="d-flex data-row" id="all-artists">\
                    <img src="img/all-artists.svg" />\
                    <div class="all-artists-info">\
                        <h2>All Artists</h2>\
                        <div class="d-flex">\
                            <p><strong>Count</strong><br>'+x.allArtists[0].count+'</p>\
                            <p class="location-quotient"><strong>Location Quotient</strong><br>'+x.allArtists[0].lq+'</p>\
                        </div>\
                    </div>\
                </div>\
                <hr>\
                <div class="d-flex data-row">\
                    <div>\
                        <img src="img/architects.svg" />\
                        <h2>Architects</h2>\
                        <p><strong>Count</strong><br>'+x.architects[0].count+'</p>\
                        <p class="location-quotient"><strong>Location Quotient</strong><br>'+x.architects[0].lq+'</p>\
                    </div>\
                    <div>\
                        <img src="img/art-directors.svg" />\
                        <h2>Art Directors, Fine Artists, and Animators</h2>\
                        <p><strong>Count</strong><br>'+x.artDirectors[0].count+'</p>\
                        <p class="location-quotient"><strong>Location Quotient</strong><br>'+x.artDirectors[0].lq+'</p>\
                    </div>\
                    <div>\
                        <img src="img/designers.svg" />\
                        <h2>Designers</h2>\
                        <p><strong>Count</strong><br>'+x.designers[0].count+'</p>\
                        <p class="location-quotient"><strong>Location Quotient</strong><br>'+x.designers[0].lq+'</p>\
                    </div>\
                </div>\
                <div class="d-flex data-row">\
                    <div>\
                        <img src="img/dancers.svg" />\
                        <h2>Dancers and Choreographers</h2>\
                        <p><strong>Count</strong><br>'+x.dancers[0].count+'</p>\
                        <p class="location-quotient"><strong>Location Quotient</strong><br>'+x.dancers[0].lq+'</p>\
                    </div>\
                    <div>\
                        <img src="img/musicians.svg" />\
                        <h2>Musicians</h2>\
                        <p><strong>Count</strong><br>'+x.musicians[0].count+'</p>\
                        <p class="location-quotient"><strong>Location Quotient</strong><br>'+x.musicians[0].lq+'</p>\
                    </div>\
                    <div>\
                        <img src="img/actors.svg" />\
                        <h2>Actors</h2>\
                        <p><strong>Count</strong><br>'+x.actors[0].count+'</p>\
                        <p class="location-quotient"><strong>Location Quotient</strong><br>'+x.actors[0].lq+'</p>\
                    </div>\
                </div>\
                <div class="d-flex data-row">\
                    <div>\
                        <img src="img/entertainers.svg" />\
                        <h2>Entertainers</h2>\
                        <p><strong>Count</strong><br>'+x.entertainers[0].count+'</p>\
                        <p class="location-quotient"><strong>Location Quotient</strong><br>'+x.entertainers[0].lq+'</p>\
                    </div>\
                    <div>\
                        <img src="img/writers.svg" />\
                        <h2>Writers and Authors</h2>\
                        <p><strong>Count</strong><br>'+x.writers[0].count+'</p>\
                        <p class="location-quotient"><strong>Location Quotient</strong><br>'+x.writers[0].lq+'</p>\
                    </div>\
                    <div>\
                        <img src="img/photographers.svg" />\
                        <h2>Photographers</h2>\
                        <p><strong>Count</strong><br>'+x.photographers[0].count+'</p>\
                        <p class="location-quotient"><strong>Location Quotient</strong><br>'+x.photographers[0].lq+'</p>\
                    </div>\
                </div>\
              </div>\
            </div>'
            );
        });
    } catch (err) {
        console.log(err);
    };
    function fireModal(target, selector){
        target.forEach(function(x){
            var getAttributes = x.getAttribute('state-target');
            //get button
            var targetAttributes = document.querySelector(selector + '[state-target="'+getAttributes+'"]');
            //get modal
            var getModal = document.getElementById('modal_'+getAttributes);
            //get close button
            var getCloseBtn = document.querySelector('#modal_'+getAttributes+' .modal-content .close');
            targetAttributes.addEventListener('click', function(){
                getModal.style.display = "block";
                var removeLQ = document.querySelectorAll('.modal .location-quotient');
                if(target === getAllStateTargetId){
                    removeLQ.forEach(function(x){
                        x.style.display = "none";
                    })
                }else{
                    removeLQ.forEach(function(x){
                        x.style.display = "block";
                    })
                }
            })
            getCloseBtn.onclick = function() {
                getModal.style.display = "none";
            }
        })
    }
    var getStateTargetIds = document.querySelectorAll('svg a');
    var getDropdownTargets = document.querySelectorAll('#dropdownItems a');
    var getAllStateTargetId = document.querySelectorAll('.intro-data a');
    
    fireModal(getStateTargetIds, 'svg a');
    fireModal(getDropdownTargets, '#dropdownItems a');
    fireModal(getAllStateTargetId, '.intro-data a');

    var getIntroCount = document.getElementsByClassName('all-count')[0];
    getIntroCount.innerHTML = filtered['51']['allArtists'][0]['count'];
};
function dropdown() {
    document.getElementById('dropdownItems').classList.toggle('show');
    
    document.getElementById('arrow').classList.toggle('rotated');

    var ariaExpanded = document.getElementsByClassName('dropbtn')[0];
    var getAriaExpanded = ariaExpanded.getAttribute('aria-expanded');

    if (getAriaExpanded === 'false') {
        ariaExpanded.setAttribute('aria-expanded', 'true');
    } else {
        ariaExpanded.setAttribute('aria-expanded', 'false');
    };
};
window.onclick = function(event) {
    // console.log('event.target.matches(#arrow) ===== ',event.target.matches('#arrow'));
    // console.log('event.target.matches(.select-state) ===== ',event.target.matches('.select-state'));
    // console.log('condition ===== ',(!event.target.matches('#arrow')) && ((!event.target.matches('.select-state'))));
    if ((!event.target.matches('#arrow')) && ((!event.target.matches('.select-state')))) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        if (dropdowns[0].classList.contains('show')) {
            dropdowns[0].classList.remove('show');
        };
    };
};
loadData();
var getStateName = document.getElementById('state-name');
function tooltipShow(x){
    var stateName = x.getAttribute('aria-label');
    getStateName.innerHTML = '<h2>'+stateName+'</h2>';
};
function tooltipHide(){
    getStateName.innerHTML = '<h2>Hover Your Cursor Over a State</h2>';
};