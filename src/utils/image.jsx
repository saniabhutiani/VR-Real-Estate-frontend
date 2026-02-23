export const getImageUrl = (imgPath) => {
  if (!imgPath) return "";

  // Already full URL (Cloudinary etc)
  if (imgPath.startsWith("http")) return imgPath;

  // LOCAL backend images
  return `http://localhost:3000/uploads/properties/${imgPath}`;
};