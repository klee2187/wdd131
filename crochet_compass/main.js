import crochetPatterns from './crochet-patterns.mjs';


//calculator script

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#yarn-calc-form');
    const resetBtn = document.querySelector('#reset-btn');
    const yarnResultSpan = document.querySelector('#yarn-result');
    const resultBox = document.querySelector('#result');
    const hookSizeSelect = document.querySelector('#hook-size');

    function hookSizeList(start, end, step = 0.25) {
    const sizes = []; 
    const smallNum = 0.0001;
    for (let size = start; size <= end + smallNum; size += step) {
        sizes.push(parseFloat(size.toFixed(2)));
    }
    return sizes;

}

if (hookSizeSelect) {
    const sizes = hookSizeList(2.0, 15.0, 0.25);
    sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = `${size}mm`;
        hookSizeSelect.appendChild(option);
    });

    hookSizeSelect.value = '5.0';
}

    const yarnWeightFactors = {
        'lace': 0.005,
        'fingering': 0.01,
        'sport': 0.015,
        'dk': 0.02,
        'worsted': 0.03,
        'bulky': 0.05,
        'superBulky': 0.08
    };

    const stitchMultipliers = {
        'sc': 1.0,
        'hdc': 1.5,
        'dc': 2.0,
        'tr': 2.5
    };

    if (form && resetBtn && yarnResultSpan && resultBox && hookSizeSelect) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const stitchType = document.querySelector('#stitch-type').value;
            const yarnType = document.querySelector('#yarn-type').value;
            const hookSize = parseFloat(hookSizeSelect.value);
            const numStitchesInput = document.querySelector('#num-stitches');
            const numStitches = parseInt(numStitchesInput.value);

            if (isNaN(hookSize) || hookSize <= 0) {
                displayMessage('Please enter a valid Hook size (ex. 4.5)', 'error');
                hookSizeSelect.focus();
                return;
            }

            if (isNaN(numStitches) || numStitches <= 0) {
                displayMessage('Please enter a valid number of stitches (ex. 1000)', 'error');
                numStitchesInput.focus();
                return;
            }

            let baseFactor  = yarnWeightFactors[yarnType];
            if(!baseFactor) {
                displayMessage('Error, invalid yarn type. Please choose from the list.', 'error');
                return;
            }

            let stitchFactor = stitchMultipliers[stitchType];
            if(!stitchFactor) {
                displayMessage('Error, invalid stitch type. Please choose from list.', 'error');
                return;
            }

            let hookAdjustment = 1.0;
            if (hookSize < 4.0) {
                hookAdjustment = 0.9;
            } else if (hookSize > 5.5) {
                    hookAdjustment = 1.1;
                
            }

            let estimatedYards = numStitches * baseFactor * stitchFactor * hookAdjustment;

            yarnResultSpan.textContent = estimatedYards.toFixed(2);
            resultBox.classList.remove('hidden');

            displayMessage('Successful yarn calculation!', 'success');
        });

        resetBtn.addEventListener('click', () => {
            form.reset();
            resultBox.classList.add('hidden');

            const customMessage = document.getElementById('customMessage');
            if (customMessage) customMessage.remove();
            if (hookSizeSelect) hookSizeSelect.value = '5.0';
        });
    }
    
    function displayMessage (message, type = 'info') {
        let customMessage = document.getElementById('customMessage');

        if (!customMessage) {
            customMessage = document.createElement('div');
            customMessage.id = 'customMessage';
            customMessage.classList.add('fixed', 'top-4', 'left-1/2', '-translate-x-1/2', 
                'p-4', 'rounded-md', 'shadow-lg', 'z-50', 'transition-all', 'duration-300', 
                'ease-out');
            document.body.appendChild(customMessage);
        }

        customMessage.textContent = message;

        customMessage.style.backgroundColor = '';
        customMessage.style.borderColor = '';
        customMessage.style.color = '';

        if (type === 'error') {
            customMessage.style.backgroundColor = '#fef2f2';
            customMessage.style.borderColor = '#fca5a5';
            customMessage.style.color = '#dc2626';
        } else if (type === 'success') {
            customMessage.style.backgroundColor = '#f0fdf4';
            customMessage.style.borderColor = '#a7f3d0';
            customMessage.style.color = '#065f46';
        } else {
            customMessage.style.backgroundColor = '#e0f2f7';
            customMessage.style.borderColor = '#a0aec0';
            customMessage.style.color = '#4a5568';
        }

        customMessage.classList.remove('hidden');
        setTimeout(() => {
            customMessage.classList.add('hidden');
        }, 3000);

    }
});

//pattern display

function getRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

function getRandomPattern(array) {
    const arrayLen = array.length;
    const randomNumIndex = getRandomNumber(arrayLen);
    return array[randomNumIndex];
}

console.log(getRandomPattern(crochetPatterns));

function materialsTemplate(materials) {
    if (!materials || materials.length === 0) {
        return '';
    }

    const patternMaterials = materials.map(material => `<li>${material}</li>`).join('');
    return `<h4>Materials</h4><ul class="pattern-materials">${patternMaterials}</ul>`;
}

function instructionsTemplate(instructions) {
    if (!instructions || instructions.length === 0) {
        return '';
    }

    const patternInstructions = instructions.map(instruction => `<li>${instruction}</li>`).join('');
    return `<h4>Pattern</h4><ul class="pattern-instructions">${patternInstructions}</ul>`;
}

function patternTemplate(pattern) {
    if(!pattern) {
        return `<p>Pattern not found<p>`;
    }

    return `<figure class="pattern-card">
            <div>
                <img src="${pattern.imageUrl}" 
                alt="photo of crochet flower applique">
            </div>
            <figcaption class="card-text">
                <p class="pattern-description">
                    ${pattern.description}
                </p>
                ${materialsTemplate(pattern.materials)}
                <h4>Hook Size</h4>
                <p>${pattern.hookSize}</p>
                ${instructionsTemplate(pattern.instructions)}

            </figcaption>
        </figure>`;
}

function renderPatterns(patternList) {
    const displayArea = document.querySelector("#pattern-display-area");

        if (!displayArea) {
            console.error("Pattern display area element not found.");
            return;
        }

    displayArea.innerHTML = '';

    if (patternList.length === 0) {
        displayArea.innerHTML = "<p>No patterns found for your search.</p>";
        return;
    }

    const patternHTMLstr = patternList.map(pattern => patternTemplate(pattern));
    displayArea.innerHTML = patternHTMLstr.join('');
}

function filterPatterns(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = crochetPatterns.filter(pattern => {
        if (pattern.name && pattern.name.toLowerCase().includes(lowerCaseQuery)) {
            return true;
        }

        if (pattern.description && pattern.description.toLowerCase().includes(lowerCaseQuery)) {
            return true;
        }

        if (pattern.materials && pattern.materials.some(material => material.toLowerCase().includes(lowerCaseQuery))) {
            return true;
        }

        if (pattern.instructions && pattern.instructions.some(instruction => instruction.toLowerCase().includes(lowerCaseQuery))) {
            return true;
        }

        return false;
    });

    filtered.sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
}

function searchHandler(event) {

    if (event && event.preventDefault) {
        event.preventDefault();
    }

    const searchInput = document.querySelector('#search-bar');

    const query = searchInput.value.trim();
    const filteredResults = filterPatterns(query);
    renderPatterns(filteredResults);
}

function init() {
    const initialPattern = getRandomPattern(crochetPatterns);
    renderPatterns([initialPattern]);

}

    document.querySelector('.search-container')
            .addEventListener('submit', searchHandler);

    init();