document.getElementById("facebook").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = tabs[0].url;
    let fbURL = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(fbURL, "_blank");
  });
});

document.getElementById("twitter").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = tabs[0].url;
    let tweetText = "Check this out!";
    let twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterURL, "_blank");
  });
});
