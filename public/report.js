var pathname = encodeURIComponent(window.location.pathname);
async function reportPlaying() {
  fetch(`/r?u=${pathname}`, { method: "POST" });
}
setInterval(reportPlaying, 1000 * 60);
