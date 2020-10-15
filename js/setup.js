'use strict';

const WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARDS_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARDS_COATS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
const QUANTITY = 4;

const userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');


const similarListElement = document.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFrom = (arr) => {
  return arr[getRandom(0, arr.length - 1)];
}

const getRandomNames = () => {
  return getRandomFrom(WIZARDS_NAMES) + ' ' + getRandomFrom(WIZARDS_SURNAME);
}


const getRandomCoatColor = () => {
  return getRandomFrom(WIZARDS_COATS_COLOR);
}

const getRandomEyesColor = () => {
  return getRandomFrom(WIZARDS_EYES_COLOR);
}


const getCreateWizards = (amount) => {
  const wizards = [];

  for (let i = 0; i < QUANTITY; i++) {
    wizards.push({
      name: getRandomNames(),
      coatColor: getRandomCoatColor(),
      eyesColor: getRandomEyesColor()
    })

  }
  return wizards;
}

const wizards = getCreateWizards(QUANTITY)


const getRenderWizards = (wizard) => {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(getRenderWizards(wizards[i]));
}
similarListElement.appendChild(fragment);
