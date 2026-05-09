import { NavigationBarSection } from './NavigationBarSection'
import arImage from './assets/ar.jpg'
import arGalleryImage from './assets/ARGallery.jpeg'
import palaypalayImage from './assets/Palaypalay.jpg'
import logoImage from './assets/Logo.png'

const featureCards = [
  {
    title: 'Augmented Reality Plant Visualization',
    description: 'View plant species in immersive AR directly on your mobile device',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.74933 16.464C2.6382 16.1646 2.6382 15.8353 2.74933 15.536C3.83159 12.9118 5.66868 10.668 8.02769 9.08919C10.3867 7.51034 13.1614 6.66748 16 6.66748C18.8386 6.66748 21.6133 7.51034 23.9723 9.08919C26.3313 10.668 28.1684 12.9118 29.2507 15.536C29.3618 15.8353 29.3618 16.1646 29.2507 16.464C28.1684 19.0882 26.3313 21.3319 23.9723 22.9108C21.6133 24.4897 18.8386 25.3325 16 25.3325C13.1614 25.3325 10.3867 24.4897 8.02769 22.9108C5.66868 21.3319 3.83159 19.0882 2.74933 16.464Z" stroke="#517156" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="#517156" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    title: 'Plant Species from Protected Area',
    description: 'Explore flora documented from Cavite Protected Area ecosystem',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.6667 13.3333C26.6667 19.9906 19.2813 26.924 16.8013 29.0653C16.5703 29.239 16.2891 29.333 16 29.333C15.7109 29.333 15.4297 29.239 15.1987 29.0653C12.7187 26.924 5.33334 19.9906 5.33334 13.3333C5.33334 10.5043 6.45715 7.79121 8.45754 5.79082C10.4579 3.79043 13.171 2.66663 16 2.66663C18.829 2.66663 21.5421 3.79043 23.5425 5.79082C25.5429 7.79121 26.6667 10.5043 26.6667 13.3333Z" stroke="#517156" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 17.3334C18.2091 17.3334 20 15.5425 20 13.3334C20 11.1242 18.2091 9.33337 16 9.33337C13.7909 9.33337 12 11.1242 12 13.3334C12 15.5425 13.7909 17.3334 16 17.3334Z" stroke="#517156" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    title: 'Scientific Plant Information',
    description: 'Access detailed botanical data, classification, and characteristics',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.33337V28" stroke="#517156" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00002 24C3.6464 24 3.30726 23.8595 3.05721 23.6095C2.80716 23.3594 2.66669 23.0203 2.66669 22.6667V5.33333C2.66669 4.97971 2.80716 4.64057 3.05721 4.39052C3.30726 4.14048 3.6464 4 4.00002 4H10.6667C12.0812 4 13.4377 4.5619 14.4379 5.5621C15.4381 6.56229 16 7.91885 16 9.33333C16 7.91885 16.5619 6.56229 17.5621 5.5621C18.5623 4.5619 19.9189 4 21.3334 4H28C28.3536 4 28.6928 4.14048 28.9428 4.39052C29.1929 4.64057 29.3334 4.97971 29.3334 5.33333V22.6667C29.3334 23.0203 29.1929 23.3594 28.9428 23.6095C28.6928 23.8595 28.3536 24 28 24H20C18.9392 24 17.9217 24.4214 17.1716 25.1716C16.4214 25.9217 16 26.9391 16 28C16 26.9391 15.5786 25.9217 14.8284 25.1716C14.0783 24.4214 13.0609 24 12 24H4.00002Z" stroke="#517156" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    title: 'Conservation Status Awareness',
    description: 'Learn about threatened species and their protection requirements',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.6667 17.3333C26.6667 23.9999 22 27.3333 16.4534 29.2666C16.1629 29.365 15.8474 29.3603 15.56 29.2533C10 27.3333 5.33337 23.9999 5.33337 17.3333V7.99995C5.33337 7.64633 5.47385 7.30719 5.7239 7.05714C5.97395 6.80709 6.31309 6.66662 6.66671 6.66662C9.33337 6.66662 12.6667 5.06662 14.9867 3.03995C15.2692 2.79861 15.6285 2.66602 16 2.66602C16.3716 2.66602 16.7309 2.79861 17.0134 3.03995C19.3467 5.07995 22.6667 6.66662 25.3334 6.66662C25.687 6.66662 26.0261 6.80709 26.2762 7.05714C26.5262 7.30719 26.6667 7.64633 26.6667 7.99995V17.3333Z" stroke="#517156" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
]

const galleryDetails = [
  {
    title: 'Plant Description',
    text: 'Detailed morphological and ecological descriptions',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#517156"/>
<g clip-path="url(#clip0_567_117)">
<path d="M12 18.6667C15.6819 18.6667 18.6666 15.6819 18.6666 12C18.6666 8.31814 15.6819 5.33337 12 5.33337C8.31808 5.33337 5.33331 8.31814 5.33331 12C5.33331 15.6819 8.31808 18.6667 12 18.6667Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14.6667V12" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9.33325H12.0067" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_567_117">
<rect width="16" height="16" fill="white" transform="translate(4 4)"/>
</clipPath>
</defs>
</svg>
    ),
  },
  {
    title: 'Scientific Classification',
    text: 'Complete taxonomic information and nomenclature',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#517156"/>
<g clip-path="url(#clip0_567_128)">
<path d="M12 8.66675V18.0001" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.99998 16C5.82317 16 5.6536 15.9298 5.52858 15.8047C5.40355 15.6797 5.33331 15.5101 5.33331 15.3333V6.66667C5.33331 6.48986 5.40355 6.32029 5.52858 6.19526C5.6536 6.07024 5.82317 6 5.99998 6H9.33331C10.0406 6 10.7188 6.28095 11.2189 6.78105C11.719 7.28115 12 7.95942 12 8.66667C12 7.95942 12.2809 7.28115 12.781 6.78105C13.2811 6.28095 13.9594 6 14.6666 6H18C18.1768 6 18.3464 6.07024 18.4714 6.19526C18.5964 6.32029 18.6666 6.48986 18.6666 6.66667V15.3333C18.6666 15.5101 18.5964 15.6797 18.4714 15.8047C18.3464 15.9298 18.1768 16 18 16H14C13.4695 16 12.9608 16.2107 12.5858 16.5858C12.2107 16.9609 12 17.4696 12 18C12 17.4696 11.7893 16.9609 11.4142 16.5858C11.0391 16.2107 10.5304 16 9.99998 16H5.99998Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_567_128">
<rect width="16" height="16" fill="white" transform="translate(4 4)"/>
</clipPath>
</defs>
</svg>
    ),
  },
  {
    title: 'Physical Characteristics',
    text: 'Size, structure, leaf patterns, and identifying features',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#517156"/>
<path d="M9.33335 16.6667C8.76134 16.6679 8.20409 16.4853 7.74386 16.1456C7.28362 15.8059 6.9448 15.3273 6.77743 14.7803C6.61005 14.2334 6.62298 13.6471 6.81432 13.108C7.00565 12.569 7.36525 12.1057 7.84001 11.7867C7.5473 11.4209 7.37145 10.9755 7.33536 10.5085C7.29926 10.0414 7.40458 9.57432 7.63762 9.16794C7.87065 8.76157 8.22061 8.43474 8.64196 8.23C9.0633 8.02526 9.53651 7.95209 10 8.02V8C10 7.46957 10.2107 6.96086 10.5858 6.58579C10.9609 6.21071 11.4696 6 12 6C12.5304 6 13.0392 6.21071 13.4142 6.58579C13.7893 6.96086 14 7.46957 14 8V8.02667C14.4635 7.95876 14.9367 8.03193 15.3581 8.23667C15.7794 8.44141 16.1294 8.76823 16.3624 9.17461C16.5954 9.58098 16.7008 10.0481 16.6647 10.5152C16.6286 10.9822 16.4527 11.4276 16.16 11.7933C16.6318 12.1134 16.9886 12.5763 17.178 13.1141C17.3674 13.6519 17.3795 14.2362 17.2124 14.7813C17.0454 15.3264 16.708 15.8036 16.2499 16.143C15.7917 16.4823 15.2368 16.6658 14.6667 16.6667H9.33335Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16.6667V18.6667" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    title: 'Habitat Information',
    text: 'Natural distribution and environmental requirements',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#517156"/>
<g clip-path="url(#clip0_567_148)">
<path d="M17.3334 10.6666C17.3334 13.9953 13.6407 17.4619 12.4007 18.5326C12.2852 18.6194 12.1446 18.6664 12 18.6664C11.8555 18.6664 11.7149 18.6194 11.5994 18.5326C10.3594 17.4619 6.66669 13.9953 6.66669 10.6666C6.66669 9.2521 7.22859 7.89554 8.22878 6.89535C9.22898 5.89516 10.5855 5.33325 12 5.33325C13.4145 5.33325 14.7711 5.89516 15.7713 6.89535C16.7715 7.89554 17.3334 9.2521 17.3334 10.6666Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12.6667C13.1046 12.6667 14 11.7713 14 10.6667C14 9.56218 13.1046 8.66675 12 8.66675C10.8954 8.66675 10 9.56218 10 10.6667C10 11.7713 10.8954 12.6667 12 12.6667Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_567_148">
<rect width="16" height="16" fill="white" transform="translate(4 4)"/>
</clipPath>
</defs>
</svg>
    ),
  },
  {
    title: 'Ecological Importance',
    text: 'Role in ecosystem and environmental contributions',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#517156"/>
<g clip-path="url(#clip0_567_158)">
<path d="M11.3333 17.3333C10.1627 17.3368 9.03351 16.9003 8.16968 16.1102C7.30586 15.3201 6.77052 14.2343 6.66983 13.068C6.56914 11.9017 6.91047 10.7402 7.62611 9.81375C8.34175 8.88733 9.37943 8.26372 10.5333 8.06659C14.3333 7.33325 15.3333 6.98659 16.6667 5.33325C17.3333 6.66659 18 8.11992 18 10.6666C18 14.3333 14.8133 17.3333 11.3333 17.3333Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.33331 18C5.33331 16 6.56665 14.4267 8.71998 14C10.3333 13.68 12 12.6667 12.6666 12" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_567_158">
<rect width="16" height="16" fill="white" transform="translate(4 4)"/>
</clipPath>
</defs>
</svg>
    ),
  },
  {
    title: 'Conservation Status',
    text: 'Current threat level and protection requirements',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#517156"/>
<g clip-path="url(#clip0_567_168)">
<path d="M17.3334 12.6666C17.3334 16 15 17.6666 12.2267 18.6333C12.0815 18.6825 11.9237 18.6802 11.78 18.6266C9.00002 17.6666 6.66669 16 6.66669 12.6666V7.99997C6.66669 7.82316 6.73693 7.65359 6.86195 7.52857C6.98697 7.40355 7.15654 7.33331 7.33335 7.33331C8.66669 7.33331 10.3334 6.53331 11.4934 5.51997C11.6346 5.39931 11.8143 5.33301 12 5.33301C12.1858 5.33301 12.3655 5.39931 12.5067 5.51997C13.6734 6.53997 15.3334 7.33331 16.6667 7.33331C16.8435 7.33331 17.0131 7.40355 17.1381 7.52857C17.2631 7.65359 17.3334 7.82316 17.3334 7.99997V12.6666Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_567_168">
<rect width="16" height="16" fill="white" transform="translate(4 4)"/>
</clipPath>
</defs>
</svg>
    ),
  },
]

const conservationStatuses = [
  {
    name: 'Critically Endangered',
    description: 'Species facing extremely high risk of extinction',
    tone: 'bg-red-100 border-red-200 text-red-700',
    accent: 'bg-red-200',
    iconTone: 'text-red-500',
  },
  {
    name: 'Endangered',
    description: 'Species at very high risk of extinction in the wild',
    tone: 'bg-orange-100 border-orange-200 text-orange-700',
    accent: 'bg-orange-200',
    iconTone: 'text-orange-500',
  },
  {
    name: 'Vulnerable',
    description: 'Species facing high risk of endangerment in the wild',
    tone: 'bg-amber-100 border-amber-200 text-amber-700',
    accent: 'bg-amber-200',
    iconTone: 'text-amber-500',
  },
  {
    name: 'Threatened',
    description: 'Species under immediate conservation concern requiring protection',
    tone: 'bg-orange-100 border-orange-200 text-orange-700',
    accent: 'bg-orange-200',
    iconTone: 'text-orange-500',
  },
  {
    name: 'Other Threatened Status',
    description: 'Special threatened classifications based on local assessments',
    tone: 'bg-orange-100 border-orange-200 text-orange-700',
    accent: 'bg-orange-200',
    iconTone: 'text-orange-500',
  },
  {
    name: 'Near Threatened (NT)',
    description: 'Species close to qualifying for a threatened category',
    tone: 'bg-lime-100 border-lime-200 text-lime-700',
    accent: 'bg-lime-200',
    iconTone: 'text-lime-500',
  },
  {
    name: 'Not Threatened',
    description: 'Species with stable populations and no immediate concerns',
    tone: 'bg-teal-100 border-teal-200 text-teal-700',
    accent: 'bg-teal-200',
    iconTone: 'text-teal-500',
  },
  {
    name: 'Least Concern (LC)',
    description: 'Species with stable populations and low risk of extinction',
    tone: 'bg-green-100 border-green-200 text-green-700',
    accent: 'bg-green-200',
    iconTone: 'text-green-500',
  },
  {
    name: 'Data Deficient (DD)',
    description: 'Insufficient data to assess extinction risk',
    tone: 'bg-slate-100 border-slate-200 text-slate-700',
    accent: 'bg-slate-200',
    iconTone: 'text-slate-500',
  },
]

const speciesCards = [
  {
    name: 'Dao',
    latin: 'Dracontomelon dao (Blanco) Merr. & Rolfe',
    image:
      'https://www.nparks.gov.sg/-/media/ffw/migrated/round2/flora/3287/ba0d492ac3434927bb2107068bc5af59.jpg',
  },
  {
    name: 'Kamagong/Mabolo',
    latin: 'Diospyros discolor Wild.',
    image:
      'https://tse3.mm.bing.net/th/id/OIP.FBUF9xYWyenBYbvnbg8mBwHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    name: 'Narra',
    latin: 'Pterocarpus indicus Wild.',
    image:
      'https://tse2.mm.bing.net/th/id/OIP.oXdgL96x0pdnkdmQKXXczAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    name: 'Molave',
    latin: 'Vitex parviflora A.Juss.',
    image:
      'https://tropical.theferns.info/plantimages/sized/c/b/cb81a82860c10c3019dd890337e219362cc7c256_480px.jpg',
  },
]

const stats = [
  { value: '199+', label: 'Plant Species Documented' },
  { value: '19+', label: 'Threatened Species Listed' },
  { value: '3D', label: 'Interactive AR Models' },
]

function App() {
  const goToDownloadPage = () => {
    window.location.href = '/download'
  }

  return (
    <div className="min-h-screen bg-[#f3f7f1] text-neutral-800">
      <NavigationBarSection />

      <main>
        <section className="bg-linear-to-b from-[#88a08b] via-[#a8baab] to-[#88a08b] px-4 py-6 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-6 md:gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white/80 px-3 py-0.5 text-xs font-medium text-[#517156] shadow md:px-4 md:py-1 md:text-sm">
                AR Botanical Education Platform
              </span>
              <h1 className="mt-3 font-['Merriweather',serif] text-2xl font-bold leading-tight text-[#2f3d31] md:mt-5 md:text-4xl lg:text-6xl">
                Explore Plants Through
                <span className="block text-[#517156]">Augmented Reality</span>
              </h1>
              <p className="mt-3 max-w-xl text-xs leading-6 text-[#33453a] md:mt-5 md:text-base md:leading-7">
                Discover plant species found in protected areas and learn about
                scientific characteristics, habitats, and conservation status
                through an immersive AR botanical gallery.
              </p>
              <button
                onClick={goToDownloadPage}
                className="mt-4 rounded-full bg-[#517156] px-4 py-1.5 text-xs font-medium text-white shadow-lg transition-colors hover:bg-[#3c5a41] md:mt-7 md:px-6 md:py-2 md:text-sm"
              >
                Explore the AR Botanical Gallery
              </button>
            </div>

            <div className="relative">
              <div className="h-56 rounded-2xl bg-cover bg-center shadow-2xl md:h-96 lg:h-130" style={{ backgroundImage: `url(${arImage})` }} />
              <div className="absolute -bottom-4 left-3 rounded-xl bg-white px-3 py-2 shadow-xl md:-bottom-5 md:left-4 md:rounded-2xl md:px-4 md:py-3">
                <p className="text-xs text-neutral-500 md:text-xs">Interactive AR</p>
                <p className="font-['Merriweather',serif] text-sm font-bold text-[#303d32] md:text-base">
                  3D Plant Models
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-white px-4 py-8 md:scroll-mt-28 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-['Merriweather',serif] text-2xl font-bold text-[#303d32] md:text-4xl">
                About GreenAtlas
              </h2>
              <p className="mt-3 text-xs leading-6 text-neutral-600 md:mt-5 md:text-base md:leading-8">
                GreenAtlas is an educational platform that presents plant species
                from Cavite Protected Area using immersive augmented reality and
                science-backed ecological context.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:mt-12 md:gap-6 xl:grid-cols-4 md:grid-cols-2">
              {featureCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-4 text-center md:p-6"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#5171561a] md:h-15 md:w-15 md:mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-['Merriweather',serif] text-sm font-bold text-[#303d32] md:text-base lg:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-neutral-600 md:mt-3 md:text-sm md:leading-6">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="ar-gallery"
          className="scroll-mt-12 bg-linear-to-b from-[#b6c6b8] to-[#f8faf8] px-4 py-8 md:scroll-mt-15 md:px-8 md:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-6 md:gap-10 md:grid-cols-2 md:items-start">
            <div className="h-56 rounded-2xl bg-cover bg-center shadow-2xl md:h-96 lg:h-130" style={{ backgroundImage: `url(${arGalleryImage})` }} />

            <div>
              <h2 className="font-['Merriweather',serif] text-2xl font-bold text-[#303d32] md:text-4xl">
                AR Botanical Gallery
              </h2>
              <p className="mt-2 text-xs leading-6 text-neutral-600 md:mt-4 md:text-base md:leading-8">
                Explore plant species in interactive augmented reality and access
                detailed plant profiles with comprehensive botanical information.
              </p>

              <div className="mt-4 space-y-3 md:mt-8 md:space-y-4">
                {galleryDetails.map((item) => (
                  <div key={item.title} className="flex gap-2 md:gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#517156] md:h-6 md:w-6 md:mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-[#303d32] md:text-base">{item.title}</h3>
                      <p className="text-xs text-neutral-600 md:text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="conservation"
          className="scroll-mt-5 bg-white px-4 py-8 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-['Merriweather',serif] text-2xl font-bold text-[#303d32] md:text-4xl">
                Understanding Plant Conservation
              </h2>
              <p className="mt-3 text-xs leading-6 text-neutral-600 md:mt-5 md:text-base md:leading-8">
                Many plant species found in protected areas are classified under
                different conservation statuses. Understanding these
                classifications helps people recognize which plants require
                protection and why biodiversity preservation is important.
              </p>
            </div>

            <div className="mt-6 grid gap-3 md:mt-12 md:gap-5 md:grid-cols-2 xl:grid-cols-3">
              {conservationStatuses.map((status) => (
                <article
                  key={status.name}
                  className="overflow-hidden rounded-2xl border border-[#303d3226] bg-white shadow-xs"
                >
                  <div className={`h-1 md:h-1.5 ${status.accent}`} />
                  <div className="p-3 md:p-5">
                    <div className="flex items-start justify-between gap-2 md:gap-3">
                      <span
                        className={`inline-flex rounded-md border px-2 py-0.5 text-xs font-semibold ${status.tone} md:px-3 md:py-1 md:text-sm`}
                      >
                        {status.name}
                      </span>
                      <svg
                        className={`mt-0.5 h-3 w-3 shrink-0 ${status.iconTone} md:h-4 md:w-4`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 8.5V12.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16.5H12.01"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.29 3.86L1.82 18A2 2 0 0 0 3.53 21H20.47A2 2 0 0 0 22.18 18L13.71 3.86A2 2 0 0 0 10.29 3.86Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-neutral-600 md:mt-4 md:text-sm md:leading-6">
                      {status.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div
              className="mt-6 h-48 rounded-2xl bg-cover bg-center shadow-2xl md:mt-12 md:h-70 md:rounded-3xl"
              style={{ backgroundImage: `url(${palaypalayImage})` }}
            />
          </div>
        </section>

        <section
          id="species"
          className="scroll-mt-20 bg-linear-to-b from-white to-[#e5f1e8] px-4 py-8 md:scroll-mt-28 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-['Merriweather',serif] text-2xl font-bold text-[#303d32] md:text-4xl">
                Featured Plant Species
              </h2>
              <p className="mt-3 text-xs leading-6 text-neutral-600 md:mt-5 md:text-base md:leading-8">
                Learning about threatened plant species promotes appreciation for
                biodiversity and the ecosystems that support them.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:mt-12 md:gap-6 md:grid-cols-2 xl:grid-cols-4">
              {speciesCards.map((species) => (
                <article
                  key={species.name}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
                >
                  <div
                    className="relative h-40 bg-cover bg-center md:h-56"
                    style={{ backgroundImage: `url(${species.image})` }}
                  >
                  </div>
                  <div className="p-3 md:p-5">
                    <h3 className="font-['Merriweather',serif] text-base font-bold text-[#303d32] md:text-xl">
                      {species.name}
                    </h3>
                    <p className="mt-1 text-xs italic text-neutral-600 md:text-sm">{species.latin}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#51715633] bg-white p-4 text-center shadow-xl md:mt-12 md:rounded-3xl md:p-8 lg:p-12">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f1f4ef] md:h-18 md:w-18">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.3335V28.0002" stroke="#517156" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00002 24C3.6464 24 3.30726 23.8595 3.05721 23.6095C2.80716 23.3594 2.66669 23.0203 2.66669 22.6667V5.33333C2.66669 4.97971 2.80716 4.64057 3.05721 4.39052C3.30726 4.14048 3.6464 4 4.00002 4H10.6667C12.0812 4 13.4377 4.5619 14.4379 5.5621C15.4381 6.56229 16 7.91885 16 9.33333C16 7.91885 16.5619 6.56229 17.5621 5.5621C18.5623 4.5619 19.9189 4 21.3334 4H28C28.3536 4 28.6928 4.14048 28.9428 4.39052C29.1929 4.64057 29.3334 4.97971 29.3334 5.33333V22.6667C29.3334 23.0203 29.1929 23.3594 28.9428 23.6095C28.6928 23.8595 28.3536 24 28 24H20C18.9392 24 17.9217 24.4214 17.1716 25.1716C16.4214 25.9217 16 26.9391 16 28C16 26.9391 15.5786 25.9217 14.8284 25.1716C14.0783 24.4214 13.0609 24 12 24H4.00002Z" stroke="#517156" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
              <h3 className="font-['Merriweather',serif] text-xl font-bold text-[#303d32] mt-3 md:text-3xl md:mt-5">
                Discover More Plant Species
              </h3>
              <p className="mx-auto mt-2 max-w-3xl text-xs text-neutral-600 md:mt-4 md:text-base">
                Explore our complete botanical database featuring hundreds of plant 
                species from  Cavite Protected Areas, each with detailed AR models 
                and scientific information.
              </p>
              <button
                onClick={goToDownloadPage}
                className="mt-3 rounded-full bg-[#517156] px-4 py-1.5 text-xs font-medium text-white shadow-lg transition-colors hover:bg-[#3c5a41] md:mt-6 md:px-6 md:py-2 md:text-sm"
              >
                Install Now
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#303d32] px-4 py-8 md:px-8 md:py-14">
          <div className="mx-auto grid max-w-6xl gap-4 text-center md:gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-['Merriweather',serif] text-3xl font-bold text-[#8cac91] md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-neutral-300 md:mt-2 md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#517156] px-4 py-8 text-white md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <img src={logoImage} alt="GreenAtlas logo" className="h-10 w-10 rounded-full bg-white object-cover md:h-14 md:w-14" />
              <h2 className="font-['Poppins',Helvetica] text-xl font-semibold md:text-3xl">GreenAtlas</h2>
            </div>
            <p className="mt-2 text-xs text-neutral-200 md:mt-3 md:text-sm">
              Exploring plant biodiversity through augmented reality and science
              education
            </p>
            <p className="mt-1 text-xs text-neutral-300 md:mt-2">
              In partnership with the Department of Environment and Natural
              Resources - Cavite 
            </p>
          </div>

          <div className="mt-6 border-t border-white/20 pt-6 md:mt-10 md:pt-10">
            <h3 className="text-center font-['Merriweather',serif] text-lg font-bold md:text-2xl">
              DENR Contact Information
            </h3>

            <div className="mt-4 grid gap-3 md:mt-8 md:gap-6 md:grid-cols-3">
              <article className="rounded-xl border border-white/20 bg-white/10 p-3 md:rounded-2xl md:p-6">
                <h4 className="font-['Merriweather',serif] text-sm font-bold md:text-lg">DENR Main Office</h4>
                <p className="mt-2 text-xs text-neutral-300 md:mt-4">Address</p>
                <p className="text-xs md:text-sm">DENR Bldg. Visayas Avenue, Diliman</p>
                <p className="text-xs md:text-sm">Quezon City Metro Manila 1100 Philippines</p>
                <p className="mt-2 text-xs text-neutral-300 md:mt-3">Phone</p>
                <p className="text-xs md:text-sm">(02) 8925-8277</p>
                <p className="text-xs md:text-sm">0939-918-0169</p>
                 <p className="text-xs md:text-sm">0939-938-0876</p>
                <p className="mt-2 text-xs text-neutral-300 md:mt-3">Email</p>
                <p className="text-xs md:text-sm">actioncenter@denr.gov.ph</p>
              </article>

              <article className="rounded-xl border border-white/20 bg-white/10 p-3 md:rounded-2xl md:p-6">
                <h4 className="font-['Merriweather',serif] text-sm font-bold md:text-lg">DENR Cavite</h4>
                <p className="mt-2 text-xs text-neutral-300 md:mt-4">Address</p>
                <p className="text-xs md:text-sm">Provincial Capitol Compound</p>
                <p className="text-xs md:text-sm">Brgy.Gregorio, Trece Martires City, Cavite</p>
                <p className="mt-2 text-xs text-neutral-300 md:mt-3">Phone</p>
                <p className="text-xs md:text-sm">(046) 430-5201</p>
                <p className="text-xs md:text-sm">0939-224-9336</p>
                <p className="mt-2 text-xs text-neutral-300 md:mt-3">Email</p>
                <p className="text-xs md:text-sm">penro.cavite@denr.gov.ph</p>
              </article>

              <article className="rounded-xl border border-white/20 bg-white/10 p-3 md:rounded-2xl md:p-6">
                <h4 className="font-['Merriweather',serif] text-sm font-bold md:text-lg">DENR CALABARZON</h4>
                <p className="mt-2 text-xs text-neutral-300 md:mt-4">Address</p>
                <p className="text-xs md:text-sm">DENR CALABARZON Compound, Mayapa Main Road (Along SLEX)</p>
                 <p className="text-xs md:text-sm">Barangay Mayapa Calamba City Laguna 4027 Philippines</p>
                <p className="mt-2 text-xs text-neutral-300 md:mt-3">Phone</p>
                <p className="text-xs md:text-sm">(049) 540-DENR (3367) local 100</p>
                <p className="text-xs md:text-sm">0945-621-5007</p>
                <p className="text-xs md:text-sm">0908-334-0224</p>
                <p className="mt-2 text-xs text-neutral-300 md:mt-3">Email</p>
                <p className="text-xs md:text-sm">r4a@denr.gov.ph</p>
              </article>

            </div>

            <div className="mt-4 rounded-lg border border-red-300 bg-[#82181a4c] p-3 text-center md:mt-8 md:rounded-2xl md:p-6">
              <p className="font-['Merriweather',serif] text-base font-bold md:text-xl">
                Report Environmental Violations
              </p>
              <p className="mt-1 text-xs text-neutral-200 md:mt-2 md:text-sm">
                For illegal logging, wildlife trafficking, and urgent
                environmental concerns
              </p>
              <p className="mt-2 font-['Merriweather',serif] text-2xl font-bold md:mt-3 md:text-4xl">8888</p>
              <p className="mt-0.5 text-xs text-neutral-200 md:mt-1">DENR Hotline</p>
            </div>
          </div>

          <p className="mt-6 border-t border-white/20 pt-4 text-center text-xs text-neutral-200 md:mt-10 md:pt-8 md:text-sm">
            © 2026 GreenAtlas. Promoting plant biodiversity awareness and
            conservation education.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
