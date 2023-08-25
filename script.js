//your code here

const images = document.querySelectorAll('.images img');

// Get the reset and verify buttons
const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');

// Get the paragraph for displaying messages
const para = document.getElementById('para');

// Variable to store selected images
let selectedImages = [];

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to reset the game to initial state
function resetGame() {
  selectedImages = [];
  images.forEach(img => img.classList.remove('selected'));
  resetButton.style.display = 'none';
  verifyButton.style.display = 'none';
  para.textContent = '';
}

// Function to handle image click
function handleImageClick(event) {
  const clickedImage = event.target;

  // If image is already selected, return
  if (selectedImages.includes(clickedImage)) {
    return;
  }

  selectedImages.push(clickedImage);
  clickedImage.classList.add('selected');

  if (selectedImages.length === 1) {
    resetButton.style.display = 'block';
  }

  if (selectedImages.length === 2) {
    verifyButton.style.display = 'block';
  }
}

// Event listener for image click
images.forEach(img => img.addEventListener('click', handleImageClick));

// Event listener for reset button click
resetButton.addEventListener('click', resetGame);

// Event listener for verify button click
verifyButton.addEventListener('click', () => {
  if (selectedImages.length === 2) {
    const class1 = selectedImages[0].classList[0];
    const class2 = selectedImages[1].classList[0];

    if (class1 === class2) {
      para.textContent = "You are a human. Congratulations!";
    } else {
      para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
    }

    verifyButton.style.display = 'none';
  }
});