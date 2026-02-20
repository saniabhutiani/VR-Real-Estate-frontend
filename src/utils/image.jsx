export const getImageUrl = (path) => {
  if (!path) return "/no-image.png";
  if (path.startsWith("http")) return path;
  return path; 
};
