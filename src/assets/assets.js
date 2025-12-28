import banner from "./banner.jpg";
import appointment from "./appointment.png";
import book_appointment from "./book_appointment.jpg";
import calculator from "./calculator.png";
import car from "./car.png";
import Cardiology from "./Cardiology.png";
import clock from "./clock.png";
import doctor_1 from "./doctor_1.jpg";
import doctor_2 from "./doctor_2.jpg";
import doctor_3 from "./doctor_3.jpg";
import doctor_4 from "./doctor_4.jpg";
import doctor from "./doctor.png";
import Fever from "./Fever.png";
import gallery_1 from "./gallery_1.jpg";
import gallery_2 from "./gallery_2.jpg";
import gallery_3 from "./gallery_3.jpg";
import gallery_4 from "./gallery_4.jpg";

import Hematology from "./Hematology.png";
import hero_img from "./hero_img.jpg";
import home from "./home.png";
import Infection from "./Infection.png";
import mission_img1 from "./mission_img1.jpg";
import mission_img2 from "./mission_img2.jpg";
import mobile from "./mobile.png";
import Neurology from "./Neurology.png";
import Oncology from "./Oncology.png";
import Paediatrician from "./Paediatrician.png";
import profile from "./profile.png";
import Pulmonology from "./Pulmonology.png";
import t1 from "./t1.jpg";
import t2 from "./t2.jpg";
import t3 from "./t3.jpg";
import telephone from "./telephone.png";
import why_choose_us from "./why_choose_us.jpg";
import { CheckCheckIcon } from "lucide-react";
import banner_img from "./banner_img.jpg";
import logo from "./logo.png";
export const assets = {
  mission_img1,
  mission_img2,
  profile,
  logo,
  banner_img,
  hero_img,
  why_choose_us,
  banner,
  appointment,
  book_appointment,
};
export const specialtiesData = [
  {
     name: "Cudurrada Dhiigga",
    image: Dhiig,
    description: "Ogaanshaha iyo daaweynta cudurrada la xiriira dhiigga.",
  },
  {
    name: "Cudurrada Maskaxda iyo Neerfaha",
    image: MaskaxNeerfo,
    description: "Daryeelka cudurrada maskaxda, lafdhabarta, iyo habdhiska neerfaha.",
  },
  {
    name: "Cudurrada Kansarka",
    image: Kansar,
    description: "Ka hortagga, ogaanshaha, iyo daaweynta cudurrada kansarka.",
  },
  {
    name: "Dhakhtarka Carruurta",
    image: DhakhtarCarruur,
    description: "Daryeel caafimaad oo gaar ah oo loogu talagalay dhallaanka, carruurta, iyo dhalinyarada.",
  },
  {
    name: "Cudurrada Sambabada",
    image: Sambabo,
    description: "Daaweynta cudurrada sambabada iyo habdhiska neefsashada.",
  },
  {
    name: "Cudurrada Caabuqa",
    image: Caabuq,
    description: "Daryeel khabiirnimo leh oo loogu talagalay caabuqyada bakteeriyada, fayraska, iyo fangaska.",
  },
  {
    name: "Cudurrada Wadnaha",
    image: Wadne,
    description: "Baaritaan, daaweyn, iyo daryeel ku saabsan cudurrada wadnaha.",
  },
  {
    name: "Qandho",
    image: Qandho,
    description: "La-talin degdeg ah oo ku saabsan qandhada iyo calaamadaha la xiriira.",
  },
];

export const featuresData = [
  {
    image: home,
    heading: "Home MD",
    description:
      "Get medical care from the comfort of your home. Our qualified doctors visit you when you need them most.",
  },
  {
    image: calculator,
    heading: "Book Appointment",
    description:
      "Easily schedule appointments with just a few clicks. Choose your doctor, date, and time instantly.",
  },
  {
    image: mobile,
    heading: "Tele-Health",
    description:
      "Connect with doctors virtually through secure video calls. Get expert advice without leaving your home.",
  },
  {
    image: telephone,
    heading: "Get Consultation",
    description:
      "Talk to a doctor over the phone for quick medical guidance. Perfect for follow-ups and urgent concerns.",
  },
];
export const howItWorks = [
  {
    icon: CheckCheckIcon,
    heading: "Choose Medical Specialist",
    description:
      "Browse and select from our wide range of verified doctors. Find the right specialist for your health concern.",
  },
  {
    icon: CheckCheckIcon,
    heading: "Choose Consultation Service",
    description:
      "Pick how you want to consult — in-person, tele-health, or phone. We make healthcare convenient for you.",
  },
  {
    icon: CheckCheckIcon,
    heading: "Make an Appointment",
    description:
      "Schedule your appointment in just a few clicks. Get instant confirmation for your preferred date and time.",
  },
  {
    icon: CheckCheckIcon,
    heading: "Get Diagnosed",
    description:
      "Meet with the doctor and receive a proper diagnosis. Follow-up instructions and treatment plans included.",
  },
];
export const benefitsData = [
  {
    image: car,
    heading: "Fast And Reliable",
    description:
      "Get quick access to medical services with minimal waiting time. We ensure timely and trustworthy care.",
  },
  {
    image: clock,
    heading: "Healthcare Anywhere Any Time",
    description:
      "Book consultations 24/7 from any location. Your health support is available whenever you need it.",
  },
  {
    image: doctor,
    heading: "Experienced Professionals",
    description:
      "Our team consists of verified and skilled doctors. Receive quality treatment from trusted experts.",
  },
  {
    image: calculator,
    heading: "Easy Appointment",
    description:
      "Scheduling is simple and user-friendly. Choose your doctor, select a slot, and confirm instantly.",
  },
];
export const doctorsData = [
  {
    _id: 1,
    image: doctor_1,
    name: "Dr. Ahmed Ali ",
    specialty: "Dhakhtarka Wadnaha",
    rating: 5,
    education: "MBBS",
    experience: "12 years",
    fees: 1500, // in PKR or USD
    location: "Xarunta Daryeelka Wadnaha",
    phone: "0611111110",
    email: "Ahmed Ali@gmail.com",
    buttonText: "Book Appointment",
  },
  {
    _id: 2,
    image: doctor_2,
    name: "Dr. Sabirin Mohamed abdi",
    specialty: "Dhaqtarka ",
    rating: 4.9,
    education: "MBBS",
    experience: "10 years",
    fees: 1200,
    location: "Heart Care Clinic, Lahore",
    phone: "0619999991",
    email: "Sabrin@gmail.com",
    buttonText: "Book Appointment",
  },
  {
    _id: 3,
    image: doctor_3,
    name: "Dr. Siham Osman",
    specialty: "Dhaqtarka Haweenka",
    rating: 4.8,
    education: "MBBS",
    experience: "8 years",
    fees: 1000,
    location: "Children’s Hospital, Islamabad",
    phone: "+92-345-5678910",
    email: "sophia.martinez@example.com",
    buttonText: "Book Appointment",
  },
  {
    _id: 4,
    image: doctor_4,
    name: "Dr. Ali Abdirahman",
    specialty: "Dermatologist",
    rating: 4.7,
    education: "MBBS, MD (Dermatology)",
    experience: "7 years",
    fees: 900,
    location: "Skin Care Clinic, Karachi",
    phone: "+92-312-2233445",
    email: "amelia.clarke@example.com",
    buttonText: "Book Appointment",
  },
];

export const testimonialsData = [
  {
    image: t1,
    name: "Johnathan Miller",
    designation: "Software Engineer",
    description:
      "Waxaan la kulmay khibrad aad u wanaagsan markii aan ballan ka qabsanayay dhakhtar anigoo isticmaalaya platform-kan. \
           Habka ballan-qaadashadu wuxuu ahaa mid sahlan oo aan wax dhib ah lahayn. \
           Dhakhtarku wuxuu ahaa mid xirfad leh isla markaana daryeel badan. \
           Waxaan si degdeg ah u helay ogaansho sax ah. \
           Waxaan si weyn ugu talinayaa qof kasta oo raadinaya adeeg caafimaad oo lagu kalsoonaan karo.",
  },
  {
    image: t2,
    name: "Emily Johnson",
    designation: "Marketing Specialist",
    description:
      "Ballan ka qabsashada la-talin caafimaad waxay ahayd mid aad u fudud oo raaxo leh. \
          Aad ayaan uga helay sida degdegga ah ee aan ku heli karo dhakhtar ii dhow. \
          Adeegga la-talin online ah (tele-health) wuxuu ii badbaadiyay waqti badan. \
          Adeeg aad u fiican, waana hubaa inaan mar kale isticmaali doono mustaqbalka.",
  },
  {
    image: t3,
    name: "Michael Brown",
    designation: "Business Analyst",
    description:
      "Platform-kan waa mid si fudud loo isticmaali karo isla markaana si qurux badan loo naqshadeeyay. \
       Waxaan awooday inaan isbarbar dhigo dhakhaatiirta oo aan doorto kan iigu habboon baahidayda. \
      Nidaamka xasuusinta ballanta waa mid aad u wanaagsan. \
      Waxaan dareemay taageero buuxda inta aan adeegga isticmaalayay.",
  },
];
export const galleryData = [
  {
    image: gallery_1,
    heading: "Qolka Qalliinka",
    description:
      "Qol qalliineed oo si buuxda u qalabaysan, kuna shaqeeya tiknoolajiyad casri ah iyo badbaado sare.",
  },
  {
    image: gallery_2,
    heading: "Qolka Bukaanka",
    description:
      "Qolal nadiif ah oo raaxo leh si loo daryeelo bukaanka.",
  },
  {
    image: gallery_3,
    heading: "Qolka Gurmadka Degdegga ah",
    description:
      "Daryeel degdeg ah oo 24 saac ah diyaar u ah dhammaan bukaannada u baahan.",
  },
  {
    image: gallery_4,
    heading: "Qolka Soo-kabashada Bukaanka",
    description:
      "Goob nadiif ah oo raaxo leh oo loogu talagalay bukaanka ka soo kabanaya qalliinka kadib",
  },
];
