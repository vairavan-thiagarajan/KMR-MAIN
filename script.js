

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const heroHeight = document.querySelector('.hero').offsetHeight;
    window.addEventListener('scroll', function () {
        if (window.scrollY > heroHeight) {
            navbar.classList.add('navbar-dark-bg');
        } else {
            navbar.classList.remove('navbar-dark-bg');
        }
    });
});

function scrollreadMore() {
    const vehicleDescription = document.getElementById('v-des-section');
    vehicleDescription.scrollIntoView({behavior: 'smooth'});
}

function scrollToFeatures() {
    const featuresSection = document.getElementById('features-section');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}

function scrolltoAchievements() {
    const achievementsSection = document.getElementById('achievements-section');
    achievementsSection.scrollIntoView({behavior: 'smooth'});
}
