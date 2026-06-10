export const siteSettings = {
  businessName: "Dante's Detailing",
  basePath: "/DantesDetailing",
  serviceArea: "Genesee County, Michigan",
  phone: "(810) 555-1234",
  email: "dantesdetailing@example.com",
  formsEnabled: false,
  socialLinks: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
};

export function staticAssetPath(path: string) {
  return `${siteSettings.basePath}${path}`;
}
