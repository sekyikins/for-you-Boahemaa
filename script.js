document.addEventListener('DOMContentLoaded', function() {
    const graduationDate = new Date('2025-05-16T00:17:00'); // Set your graduation date here
    const countdownSection = document.getElementById('countdown-section');
    const graduationCard = document.getElementById('graduation-card');
    const congratulations = document.getElementById('congratulations');
    const confetti = document.getElementById('confetti');
    let hasPlayedCheers = false; // Flag to track if cheers sound has been played

    function updateCountdown() {
        const now = new Date();
        const timeDifference = graduationDate - now;

        if (timeDifference <= 0) {
            countdownSection.style.display = 'none';
            graduationCard.style.display = 'flex';
            congratulations.style.display = 'flex';
            confetti.style.display = 'flex';

            // Play the celebration sound only once
            if (!hasPlayedCheers) {
                const cheers = document.getElementById('cheers');
                if (cheers) {
                    cheers.volume = 0.3;
                    cheers.play().catch(error => console.error('Playback failed:', error));
                }
                hasPlayedCheers = true;
            }

            const sound = document.getElementById('celebration-sound');
            if (sound) {
                sound.volume = 0.3;
                sound.play().catch(error => console.error('Playback failed:', error));
            }

            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Add functionality to change the background image every 3 seconds
    const backgroundImageElement = document.getElementById('background-image');
    const backgroundImages = [
        'Assets/pic3.jpg',
        'Assets/pic4.jpg',
        'Assets/pic1.jpg',
        'Assets/pic2.jpg',
        'Assets/pic5.jpg',
        'Assets/confetti.gif'
    ];

    let currentImageIndex = 0;

    // Add smooth transition for background image changes
    backgroundImageElement.style.transition = 'background 1s ease-in';

    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        backgroundImageElement.style.background = `url('${backgroundImages[currentImageIndex]}') no-repeat center center fixed`;
        backgroundImageElement.style.backgroundSize = 'cover';
    }

    setInterval(changeBackgroundImage, 5000);

    // Add functionality to change the graduation message text periodically
    const graduationMessageElement = document.getElementById('graduation-message');
    // Update graduation messages to include line breaks for multiple lines
    const graduationMessages = [
        "She believed, She could, so She did... <br>And She is you, Afia Boahemaa",
        "Congrats my girl, <br>I hope your graduation opens up a plethora of wonderful options for you ahead",
        "Seeing you graduate fills me with so much pride. Your journey has been a testament to your unwavering faith and hardwork. <br>Your determination, creativity leadership skills and resilience are truly inspiring - your intelligence and sense of humor makes it a plus . <br>Remember all those late-night study sessions? - and waking up early to make it to class on time everyday without complaints? You know what, They paid off! <br>Have the most out of the graduation.",
        "Be strong and courageous. <br>Do not be afraid or terrified because of them, <br>for the Lord your God goes with you; <br>he will never leave you nor forsake you. <br> Deuteronomy 31:6",
        "Seeing you graduate fills me with so much pride. <br>Your journey has been a testament to your unwavering faith and hard-work. i still remember how you aced your tests in school. <br>Your hard work and dedication were truly inspiring. <br>Happy Graduation! May your future be filled with even greater achievements and joy!",
        "You did it! Happy Graduation!<br>I am so proud of you!",
        "'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.' <br>Happy Graduation! I'm so excited to see all the amazing things you'll achieve. <br>Keep shining✨, and trusting in His plan!",
        "May your future be filled with exciting opportunities! <br>Keep reaching for the stars! <br>🌟✨🌟✨✨",
        "Congratulations on your amazing achievement!<br>Celebrate this milestone!",
        "Wishing you success in all your future endeavors!<br>Good luck on your journey!",
    ];

    let currentMessageIndex = 0;

    graduationMessageElement.style.transition = 'opacity 1.5s ease-in-out';
    graduationMessageElement.style.opacity = '1';

    graduationMessageElement.innerHTML = `
        <h1>🎉🎉Congratulations!!🎉🎉</h1>
        <h1>Miss Afia Boahemaa</h1>
        <p id="graduation-message-text">${graduationMessages[currentMessageIndex]}</p>
    `;

    const graduationMessageTextElement = document.getElementById('graduation-message-text');
    graduationMessageTextElement.style.transition = 'opacity 1.5s ease-in-out';
    graduationMessageTextElement.style.opacity = '1';

    function changeGraduationMessage() {
        // Fade out the <p> element
        graduationMessageTextElement.style.opacity = '0';

        // Wait for the fade-out transition to complete before changing the content
        setTimeout(() => {
            currentMessageIndex = (currentMessageIndex + 1) % graduationMessages.length;
            graduationMessageTextElement.innerHTML = graduationMessages[currentMessageIndex];

            // Fade the <p> element back in
            graduationMessageTextElement.style.opacity = '1';
        }, 1500); // Match the duration of the fade-out transition
    }

    setInterval(changeGraduationMessage, 15000); // Change message every 15 seconds
});