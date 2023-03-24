export function getCroppedImage(url: string) {
  const target = "/media/";
  const targetIndex = url.indexOf(target);
  const newUrl =
    url.slice(0, targetIndex) +
    target +
    "crop/600/400/" +
    url.slice(targetIndex + target.length);

  return newUrl;
}
