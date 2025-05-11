HEAD
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
