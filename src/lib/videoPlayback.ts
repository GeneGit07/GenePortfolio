export function activateExclusiveVideo(currentVideo: HTMLVideoElement): void {
  currentVideo.muted = false;
  currentVideo.volume = 1;

  document.querySelectorAll("video").forEach((video) => {
    if (video !== currentVideo) video.pause();
  });
}