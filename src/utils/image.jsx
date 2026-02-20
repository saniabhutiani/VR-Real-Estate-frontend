export const getImageUrl = (path) => {
  if (!path) return "/no-image.png";

  // If already full URL (Cloudinary etc)
  if (path.startsWith("http")) return path;

  // IMPORTANT — Backend live URL
  return `https://vr-real-estate-backend.vercel.app/${path}`;
};