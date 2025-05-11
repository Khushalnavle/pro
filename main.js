<<<<<<< HEAD
// Live Time and Date
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    }) + " [NZ]";
  
    const options = {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    };
    const dateString = now.toLocaleDateString("en-GB", options);
  
    document.getElementById("live-time").textContent = timeString;
    document.getElementById("live-date").textContent = dateString;
  }
  setInterval(updateTime, 60000);
  updateTime();
=======
// Function to end the intro screen and reveal the main content
function endIntro() {
    const intro = document.getElementById('intro-container');
    const main = document.getElementById('main-content');
  
    if (intro && main) {
      intro.style.display = 'none';           // Hide the intro
      main.style.display = 'block';           // Show the main content
      document.body.style.overflow = 'auto';  // Allow scrolling again
      document.body.style.background = '#f5f5f5'; // Restore background
    } else {
      console.warn("Intro or Main container not found.");
    }
  }
  
  // Function to update live time and date
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    }) + " [NZ]";
  
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    };
    const dateString = now.toLocaleDateString("en-GB", options);
  
    const timeEl = document.getElementById("live-time");
    const dateEl = document.getElementById("live-date");
  
    if (timeEl && dateEl) {
      timeEl.textContent = timeString;
      dateEl.textContent = dateString;
    }
  }
  
  // Wait for DOM to fully load before executing
  window.addEventListener("DOMContentLoaded", () => {
    // Hide scroll during intro
    document.body.style.overflow = 'hidden';
  
    // Start the intro and schedule its end
    setTimeout(endIntro, 4000); // Adjust based on your actual animation duration
  
    // Start live time updates
    updateTime();
    setInterval(updateTime, 60000);
  });
>>>>>>> ea5e4ee3ac12521772aa98941901751f596cc8de
  