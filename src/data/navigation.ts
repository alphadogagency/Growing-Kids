export const nav = [
  ['Locations', '/locations/'], ['Programs', '/programs/'],
  ['Curriculum', '/curriculum/'], ['Tuition And Support', '/tuition-support/'],
  ['Our Team', '/team/'], ['FAQ', '/faqs/']
];
export const programs = [['Infants','/programs/infants/'],['Toddlers And Young Preschool','/programs/toddlers/'],['Preschool','/programs/preschool/'],['School Age Care','/programs/school-age-care/'],['Camps','/programs/camps/']];
export const company = [['Our Team','/team/'],['Careers','/careers/'],['Reviews','/testimonials/'],['Community','/community-involvement/'],['Closings','/school-closings/'],['Policies','/resource-policy-library/'],['News and Events','/company-news-events/'],['The Growing Kids Difference','/why-choose-us/'],['Privacy','/privacy-policy/'],['Terms','/terms-of-service/']];
export function previewHref(path: string) {
  return path === '/curriculum/' ? '/#curriculum' : path === '/team/' ? 'https://growingkids.com/our-teachers/' : `https://growingkids.com${path}`;
}

export function homeHref(path: string) { return path; }
