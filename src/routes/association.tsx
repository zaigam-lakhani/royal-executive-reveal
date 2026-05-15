import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, GraduationCap, HandHeart, Moon, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PropertyGallery } from "@/components/PropertyGallery";
import { useI18n } from "@/i18n/I18nProvider";
import type { Lang } from "@/i18n/translations";

// Original photos from the uploaded ASSOCIATION_NEURONES_MADAGASCAR document
import docP2_1 from "@/assets/association/doc-p2-1.jpg";
import docP2_2 from "@/assets/association/doc-p2-2.jpg";
import docP2_3 from "@/assets/association/doc-p2-3.jpg";
import docP3_1 from "@/assets/association/doc-p3-1.jpg";
import docP3_2 from "@/assets/association/doc-p3-2.jpg";
import docP3_3 from "@/assets/association/doc-p3-3.jpg";
import docP4_1 from "@/assets/association/doc-p4-1.jpg";
import docP4_2 from "@/assets/association/doc-p4-2.jpg";
import docP4_3 from "@/assets/association/doc-p4-3.jpg";
import docP4_4 from "@/assets/association/doc-p4-4.jpg";
import docP5_1 from "@/assets/association/doc-p5-1.jpg";
import docP5_2 from "@/assets/association/doc-p5-2.jpg";
import docP5_3 from "@/assets/association/doc-p5-3.jpg";
import docP6_1 from "@/assets/association/doc-p6-1.jpg";
import docP6_2 from "@/assets/association/doc-p6-2.jpg";
import docP6_3 from "@/assets/association/doc-p6-3.jpg";
import docP6_4 from "@/assets/association/doc-p6-4.jpg";
import docP7_1 from "@/assets/association/doc-p7-1.jpg";
import docP7_2 from "@/assets/association/doc-p7-2.jpg";
import docP8_1 from "@/assets/association/doc-p8-1.jpg";
import docP8_2 from "@/assets/association/doc-p8-2.jpg";
import docP9_1 from "@/assets/association/doc-p9-1.jpg";
import docP9_2 from "@/assets/association/doc-p9-2.jpg";
import docP10_1 from "@/assets/association/doc-p10-1.jpg";
import docP10_2 from "@/assets/association/doc-p10-2.jpg";
import docP10_3 from "@/assets/association/doc-p10-3.jpg";

// Photo per project (mapped from the original document pages)
const imgProtection = docP2_1;
const imgPrevention = docP3_1;
const imgTransport = docP3_2;
const imgCartable = docP4_1;
const imgSoutien = docP4_3;
const imgCeremonie = docP5_1;
const imgCamping = docP4_4;
const imgInfra = docP6_1;
const imgFormation = docP6_2;
const imgHabillement = docP7_1;
const imgRamadan = docP8_1;
const imgFamilial = docP9_1;
const imgZakat = docP10_1;

// Every original photo from the uploaded document (for the full gallery)
const ALL_DOC_IMAGES = [
  docP2_1, docP2_2, docP2_3,
  docP3_1, docP3_2, docP3_3,
  docP4_1, docP4_2, docP4_3, docP4_4,
  docP5_1, docP5_2, docP5_3,
  docP6_1, docP6_2, docP6_3, docP6_4,
  docP7_1, docP7_2,
  docP8_1, docP8_2,
  docP9_1, docP9_2,
  docP10_1, docP10_2, docP10_3,
];

export const Route = createFileRoute("/association")({
  head: () => ({
    meta: [
      { title: "Association Neurones Madagascar — Synaps Group" },
      { name: "description", content: "Non-profit improving access to education and social impact for 5,000+ Malagasy students in rural Madagascar." },
      { property: "og:title", content: "Association Neurones Madagascar" },
      { property: "og:description", content: "Health, Education and Social projects across Madagascar." },
      { property: "og:image", content: imgCeremonie },
    ],
  }),
  component: AssociationPage,
});

type ProjectKey =
  | "protection" | "prevention" | "transport" | "cartable" | "soutien"
  | "ceremonie" | "camping" | "infra" | "formation"
  | "habillement" | "ramadan" | "familial";

interface ProjectContent { title: string; text: string; }
interface PageContent {
  eyebrow: string;
  title: string;
  intro1: string;
  intro2: string;
  intro3: string;
  axesTitle: string;
  axesIntro: string;
  axisHealth: string;
  axisEdu: string;
  axisSocial: string;
  reach: string;
  supportTitle: string;
  supportText: string;
  supportNote: string;
  motto: string;
  motto2: string;
  donate: string;
  donateLong: string;
  catHealth: string;
  catEdu: string;
  catSocial: string;
  zakatTitle: string;
  zakatPillar: string;
  zakatLegal: string;
  zakatRole: string;
  zakatFormTitle: string;
  zakatFormNote: string;
  ctaSupport: string;
  ctaPartner: string;
  projects: Record<ProjectKey, ProjectContent>;
}

const CONTENT: Record<Lang, PageContent> = {
  fr: {
    eyebrow: "Association à But Non Lucratif",
    title: "Association Neurones Madagascar",
    intro1: "L'Association à But Non Lucratif NEURONES MADAGASCAR régie par l'Ordonnance N° 60-133 du 03 Octobre 1960 portant régime générale des associations.",
    intro2: "Fondée en Mai 2026 dans la ville d'Antananarivo, la capitale de Madagascar, l'Association NEURONES MADAGASCAR est une association indépendante de développement qui met en œuvre des programmes et des projets visant à améliorer l'accès à l'éducation des élèves malagasy, principalement en milieu rural.",
    intro3: "L'association n'est affiliée à aucune organisation politique, syndicale ou religieuse et œuvre de manière holistique à encourager la scolarisation de ces élèves et à lutter contre le décrochage scolaire.",
    axesTitle: "Nos axes d'intervention",
    axesIntro: "Pour découvrir concrètement nos axes d'intervention et mieux comprendre les défis que nous souhaitons relever, consultez nos projets dans chacun de nos trois domaines d'action :",
    axisHealth: "Projets santé",
    axisEdu: "Projets éducation",
    axisSocial: "Projets sociaux",
    reach: "L'association NEURONES MADAGASCAR vient aujourd'hui en aide à plus de 5 000 élèves répartis dans différentes écoles primaires et secondaires situées dans les zones rurales de Madagascar. Nos actions s'étendent dans toute l'île, plus précisément dans les zones les plus enclavées du pays — régions Vatovavy, Fitovinany et Grand Sud (Androy). Dans ces territoires souvent oubliés, nous soutenons l'éducation des enfants grâce à des projets concrets et humains, pensés main dans la main avec les équipes locales.",
    supportTitle: "Comment soutenir notre association ?",
    supportText: "Chez Association NEURONES MADAGASCAR chaque soutien compte ! Que ce soit par un don financier, du matériel, des compétences, du temps ou même une idée — chaque geste peut faire une vraie différence.",
    supportNote: "Il n'y a pas de « petite contribution », tout appui, qu'il soit intellectuel ou humain, nous aide à avancer.",
    motto: "« Soutenir leur éducation, c'est soutenir notre avenir. »",
    motto2: "et les Malagasy AVANCENT…",
    donate: "Faire un don",
    donateLong: "Faire un « DON »",
    catHealth: "Nos projets : Santé",
    catEdu: "Nos projets : Éducation",
    catSocial: "Nos projets : Sociaux",
    zakatTitle: "NEURONES MADAGASCAR récolte également vos Zakât Al-Maal",
    zakatPillar: "La Zakât al-Maal est le 3ème pilier de l'Islam. Celle-ci correspond à l'aumône obligatoire versée annuellement par le musulman dont la richesse dépasse le Nissâb.",
    zakatLegal: "C'est une aumône légale qui permet un partage des richesses au profit des plus vulnérables.",
    zakatRole: "NEURONES MADAGASCAR se charge de distribuer votre aumône à ceux qui en ont le plus besoin, dans le respect de la tradition musulmane et des principes humanitaires.",
    zakatFormTitle: "Verser ma Zakât Al-Maal",
    zakatFormNote: "Paiement sécurisé par carte bancaire (Visa, Mastercard, Discover). Reçu envoyé par e-mail.",
    ctaSupport: "Nous Soutenir",
    ctaPartner: "Devenir Partenaire",
    projects: {
      protection: { title: "Protection sociale", text: "Ce projet a pour but de protéger les élèves des fléaux sociaux et des dangers de la rue par la sensibilisation et l'intervention directe des autorités locales et des cadres administratifs et éducatifs." },
      prevention: { title: "Prévention santé", text: "Ce projet a pour but de prendre en charge la santé des apprenants : règlement des consultations et analyses médicales, factures de médicaments, lunettes ; financement d'urgence d'opérations chirurgicales." },
      transport: { title: "Transport scolaire", text: "Ce projet a pour but d'apporter une couverture complète des frais de transport scolaire des élèves vivant en milieu rural." },
      cartable: { title: "Opération cartable", text: "Ce projet a pour but de distribuer des cartables et des fournitures scolaires à la rentrée scolaire 2026-2027." },
      soutien: { title: "Soutien à la scolarité", text: "Ce projet a pour but la mise en place de cours de soutien scolaire gratuits afin d'aider les élèves à surmonter leurs lacunes, à faire progresser leurs notes ou à exceller dans une matière. Un accompagnement individuel de l'élève peut également être assuré." },
      ceremonie: { title: "Cérémonie d'excellence", text: "Ce projet a pour but l'organisation d'une cérémonie de fin d'année académique mêlant activités culturelles, artistiques et de divertissement pour encourager les enfants à l'excellence : « Remise de prix aux élèves les plus méritants »." },
      camping: { title: "Camping scolaire", text: "Ce projet a pour but l'organisation, pendant les grandes vacances suivant le calendrier du Ministère de l'Éducation de Base, d'un « camping éducatif pour récompenser les élèves qui excellent sur le plan scolaire »." },
      infra: { title: "Équipement des infrastructures scolaires", text: "Ce projet a pour but de préparer et équiper l'espace scolaire des aménagements dont le corps enseignant a besoin (aires de jeux, espace vert, bibliothèque scolaire, fontaines d'eau…) et de « mettre à disposition des aides didactiques et des moyens de travail »." },
      formation: { title: "Orientation scolaire et formation professionnelle", text: "Ce projet a pour but d'orienter les étudiants dans le choix du cursus le mieux adapté à leur parcours académique et professionnel et de les aider à s'insérer dans le monde du travail en suivant la « Formation aux Métiers »." },
      habillement: { title: "Habillement", text: "Ce projet a pour but la distribution de vêtements aux élèves ainsi qu'à leurs familles tout au long de l'année. Des couvertures et des matelas sont fournis en hiver pour prévenir le froid hivernal." },
      ramadan: { title: "Panier Ramadan & Fête de l'Aïd", text: "Ce projet a pour but la collecte et la distribution de denrées alimentaires aux familles des élèves nécessiteux afin de leur permettre de vivre dignement ces moments." },
      familial: { title: "Soutien familial", text: "Ce projet a pour but d'apporter un soutien matériel direct aux familles d'élèves nécessiteux et de contribuer à leur assurer les moyens d'une vie décente (logement, médicaments, électricité, eau à travers des forages de puits notamment…)." },
    },
  },
  en: {
    eyebrow: "Non-Profit Association",
    title: "Association Neurones Madagascar",
    intro1: "NEURONES MADAGASCAR is a non-profit association governed by Ordinance No. 60-133 of 3 October 1960 on the general regime of associations.",
    intro2: "Founded in May 2026 in Antananarivo, the capital of Madagascar, NEURONES MADAGASCAR is an independent development association that implements programmes and projects to improve access to education for Malagasy students, primarily in rural areas.",
    intro3: "The association is not affiliated with any political, trade-union or religious organisation and works holistically to encourage school enrolment and fight against early drop-out.",
    axesTitle: "Our areas of intervention",
    axesIntro: "To discover our areas of intervention and better understand the challenges we want to address, explore our projects across our three fields of action:",
    axisHealth: "Health Projects",
    axisEdu: "Education Projects",
    axisSocial: "Social Projects",
    reach: "NEURONES MADAGASCAR currently supports more than 5,000 students across primary and secondary schools located in rural Madagascar. Our actions extend across the entire island, particularly in the most isolated regions — Vatovavy, Fitovinany and the Grand South (Androy). In these often-forgotten territories, we support children's education through concrete, human-centred projects designed hand-in-hand with local teams.",
    supportTitle: "How can you support our association?",
    supportText: "At Association NEURONES MADAGASCAR every gesture counts — financial donations, equipment, skills, time or even an idea: every contribution can make a real difference.",
    supportNote: "There is no such thing as a “small contribution” — every input, intellectual or human, helps us move forward.",
    motto: "“Supporting their education means supporting our future.”",
    motto2: "and the Malagasy people MOVE FORWARD…",
    donate: "Donate",
    donateLong: "Make a “DONATION”",
    catHealth: "Our Projects: Health",
    catEdu: "Our Projects: Education",
    catSocial: "Our Projects: Social",
    zakatTitle: "NEURONES MADAGASCAR also collects your Zakat Al-Maal",
    zakatPillar: "Zakat al-Maal is the 3rd pillar of Islam. It corresponds to the obligatory annual alms paid by any Muslim whose wealth exceeds the Nisâb.",
    zakatLegal: "It is a legal almsgiving that allows the sharing of wealth for the benefit of the most vulnerable.",
    zakatRole: "NEURONES MADAGASCAR is responsible for distributing your alms to those who need them most, in full respect of Islamic tradition and humanitarian principles.",
    zakatFormTitle: "Pay my Zakat Al-Maal",
    zakatFormNote: "Secure card payment (Visa, Mastercard, Discover). Receipt sent by email.",
    ctaSupport: "Support Us",
    ctaPartner: "Partner With Us",
    projects: {
      protection: { title: "Social Protection", text: "This project aims to protect students from social ills and street dangers through awareness and direct intervention by local authorities and educational and administrative leaders." },
      prevention: { title: "Health Prevention", text: "This project covers learners' healthcare: medical consultations and analyses, medicine bills, glasses, and emergency funding for surgical operations." },
      transport: { title: "School Transport", text: "This project provides full coverage of school transport costs for students living in rural areas." },
      cartable: { title: "School-Bag Operation", text: "This project distributes school bags and supplies for the 2026-2027 back-to-school season." },
      soutien: { title: "Tutoring Support", text: "This project sets up free tutoring classes to help students overcome learning gaps, improve their grades or excel in a subject. Individual mentoring of students is also provided." },
      ceremonie: { title: "Excellence Ceremony", text: "This project organises an end-of-year ceremony with cultural, artistic and entertainment activities to encourage children towards excellence: an awards ceremony for the most deserving students." },
      camping: { title: "School Camping", text: "This project organises, during the school holidays following the Ministry of Basic Education calendar, an educational camp to reward students who excel academically." },
      infra: { title: "School Infrastructure Equipment", text: "This project equips schools with the facilities teachers need (playgrounds, green areas, school libraries, water fountains…) and provides teaching aids and working tools." },
      formation: { title: "Career Guidance & Vocational Training", text: "This project guides students towards the curriculum best suited to their academic and professional path, and helps them integrate the labour market through vocational training programmes." },
      habillement: { title: "Clothing", text: "This project distributes clothing to students and their families throughout the year. Blankets and mattresses are provided in winter to prevent cold-related illness." },
      ramadan: { title: "Ramadan Basket & Eid Celebration", text: "This project collects and distributes food parcels to the families of students in need so that they can live these special moments with dignity." },
      familial: { title: "Family Support", text: "This project provides direct material support to families of students in need, helping them secure the means for a decent life (housing, medication, electricity, water — including through well drilling)." },
    },
  },
  ar: {
    eyebrow: "جمعية غير ربحية",
    title: "جمعية نيرونز مدغشقر",
    intro1: "جمعية نيرونز مدغشقر جمعية غير ربحية تخضع للأمر رقم ١٣٣-٦٠ المؤرخ في ٣ أكتوبر ١٩٦٠ المتعلق بالنظام العام للجمعيات.",
    intro2: "تأسست في مايو ٢٠٢٦ في مدينة أنتاناناريفو عاصمة مدغشقر، وهي جمعية تنموية مستقلة تنفّذ برامج ومشاريع لتحسين وصول التلاميذ الملغاشيين إلى التعليم، خاصةً في المناطق الريفية.",
    intro3: "الجمعية غير منتمية لأي تنظيم سياسي أو نقابي أو ديني، وتعمل بشكل شامل على تشجيع التمدرس ومكافحة التسرب المدرسي.",
    axesTitle: "محاور تدخّلنا",
    axesIntro: "لاكتشاف محاور تدخّلنا وفهم التحديات التي نسعى لرفعها، تصفّح مشاريعنا ضمن مجالات عملنا الثلاثة:",
    axisHealth: "مشاريع الصحة",
    axisEdu: "مشاريع التعليم",
    axisSocial: "المشاريع الاجتماعية",
    reach: "تدعم جمعية نيرونز مدغشقر اليوم أكثر من ٥٬٠٠٠ تلميذ موزعين على مدارس ابتدائية وثانوية في المناطق الريفية بمدغشقر، خاصةً في فاتوفافي وفيتوفينياني والجنوب الكبير (أندروي). في هذه المناطق المنسية غالباً، ندعم تعليم الأطفال عبر مشاريع ملموسة وإنسانية مصمَّمة بالشراكة مع الفرق المحلية.",
    supportTitle: "كيف تدعم جمعيتنا؟",
    supportText: "في جمعية نيرونز مدغشقر كل دعم مهم: تبرع مالي، عتاد، مهارات، وقت أو حتى فكرة — كل لمسة قد تُحدث فرقاً حقيقياً.",
    supportNote: "لا توجد «مساهمة صغيرة»؛ كل دعم فكري أو إنساني يساعدنا على المضي قدماً.",
    motto: "«دعم تعليمهم هو دعم لمستقبلنا.»",
    motto2: "والملغاشيون يتقدّمون…",
    donate: "تبرّع",
    donateLong: "تقديم «تبرّع»",
    catHealth: "مشاريعنا: الصحة",
    catEdu: "مشاريعنا: التعليم",
    catSocial: "مشاريعنا: الاجتماعية",
    zakatTitle: "نيرونز مدغشقر تجمع أيضاً زكاة المال",
    zakatPillar: "زكاة المال هي الركن الثالث من أركان الإسلام، وهي صدقة واجبة يؤديها سنوياً المسلم الذي تجاوزت ثروته النصاب.",
    zakatLegal: "هي صدقة شرعية تتيح إعادة توزيع الثروة لصالح الفئات الأكثر هشاشة.",
    zakatRole: "تتكفّل جمعية نيرونز مدغشقر بتوزيع زكاتك على من هم في أمسّ الحاجة، وفقاً للتقاليد الإسلامية والمبادئ الإنسانية.",
    zakatFormTitle: "أداء زكاة المال",
    zakatFormNote: "دفع آمن بالبطاقة البنكية (Visa, Mastercard, Discover). يُرسَل الإيصال بالبريد الإلكتروني.",
    ctaSupport: "ادعمنا",
    ctaPartner: "كن شريكاً",
    projects: {
      protection: { title: "الحماية الاجتماعية", text: "يهدف هذا المشروع إلى حماية التلاميذ من الآفات الاجتماعية ومخاطر الشارع عبر التوعية والتدخل المباشر للسلطات المحلية والأطر الإدارية والتربوية." },
      prevention: { title: "الوقاية الصحية", text: "يتكفّل هذا المشروع بصحة المتعلمين: تسديد الاستشارات والتحاليل الطبية وفواتير الأدوية والنظارات، وتمويل العمليات الجراحية الطارئة." },
      transport: { title: "النقل المدرسي", text: "يهدف هذا المشروع إلى تغطية شاملة لمصاريف النقل المدرسي للتلاميذ في الأرياف." },
      cartable: { title: "عملية المحفظة المدرسية", text: "توزيع محافظ ولوازم مدرسية بمناسبة الدخول المدرسي ٢٠٢٦-٢٠٢٧." },
      soutien: { title: "الدعم المدرسي", text: "تنظيم دروس دعم مدرسي مجانية لمساعدة التلاميذ على تجاوز ثغراتهم وتحسين نتائجهم أو التميّز في مادة معيّنة، مع إمكانية مرافقة فردية للتلميذ." },
      ceremonie: { title: "حفل التميّز", text: "تنظيم حفل نهاية السنة الدراسية مع أنشطة ثقافية وفنية وترفيهية لتشجيع الأطفال على التميّز: «تكريم التلاميذ الأكثر استحقاقاً»." },
      camping: { title: "المخيم المدرسي", text: "تنظيم مخيّم تعليمي خلال العطلة الكبرى لمكافأة التلاميذ المتميّزين دراسياً." },
      infra: { title: "تجهيز البنى التحتية المدرسية", text: "تجهيز الفضاء المدرسي بما يحتاجه الطاقم التربوي (ملاعب، مساحات خضراء، مكتبة مدرسية، نوافير ماء…) وتوفير الوسائل التعليمية." },
      formation: { title: "التوجيه المدرسي والتكوين المهني", text: "توجيه الطلاب نحو المسار الأكاديمي والمهني الأنسب ومساعدتهم على الاندماج في سوق الشغل عبر «التكوين على المهن»." },
      habillement: { title: "اللباس", text: "توزيع الملابس على التلاميذ وعائلاتهم طوال السنة، مع توفير الأغطية والفرشات في الشتاء للوقاية من البرد." },
      ramadan: { title: "سلة رمضان وعيد الفطر", text: "جمع وتوزيع المواد الغذائية على عائلات التلاميذ المحتاجين لمساعدتهم على عيش هذه المناسبات بكرامة." },
      familial: { title: "الدعم العائلي", text: "تقديم دعم مادي مباشر لأسر التلاميذ المحتاجين لضمان مقومات حياة كريمة (سكن، أدوية، كهرباء، ماء عبر حفر الآبار…)." },
    },
  },
  it: {
    eyebrow: "Associazione No-Profit",
    title: "Associazione Neurones Madagascar",
    intro1: "L'Associazione no-profit NEURONES MADAGASCAR è disciplinata dall'Ordinanza N° 60-133 del 3 ottobre 1960 sul regime generale delle associazioni.",
    intro2: "Fondata a maggio 2026 ad Antananarivo, capitale del Madagascar, NEURONES MADAGASCAR è un'associazione indipendente di sviluppo che realizza programmi e progetti volti a migliorare l'accesso all'istruzione degli studenti malgasci, principalmente in ambito rurale.",
    intro3: "L'associazione non è affiliata ad alcuna organizzazione politica, sindacale o religiosa e opera in modo olistico per favorire la scolarizzazione e contrastare l'abbandono scolastico.",
    axesTitle: "I nostri ambiti di intervento",
    axesIntro: "Per scoprire i nostri ambiti di intervento e comprendere meglio le sfide che vogliamo affrontare, esplora i nostri progetti nei tre pilastri d'azione:",
    axisHealth: "Progetti Sanitari",
    axisEdu: "Progetti Educativi",
    axisSocial: "Progetti Sociali",
    reach: "L'associazione NEURONES MADAGASCAR sostiene oggi oltre 5.000 studenti distribuiti in scuole primarie e secondarie nelle aree rurali del Madagascar — in particolare nelle regioni Vatovavy, Fitovinany e Grand Sud (Androy). In questi territori spesso dimenticati sosteniamo l'istruzione dei bambini con progetti concreti e umani, pensati insieme alle équipe locali.",
    supportTitle: "Come sostenere la nostra associazione?",
    supportText: "Per l'Associazione NEURONES MADAGASCAR ogni sostegno conta: donazione finanziaria, materiali, competenze, tempo o anche solo un'idea — ogni gesto può fare davvero la differenza.",
    supportNote: "Non esiste “piccolo contributo”: ogni apporto, intellettuale o umano, ci aiuta ad andare avanti.",
    motto: "“Sostenere la loro educazione significa sostenere il nostro futuro.”",
    motto2: "e i Malgasci AVANZANO…",
    donate: "Dona",
    donateLong: "Fai una “DONAZIONE”",
    catHealth: "I nostri progetti: Sanità",
    catEdu: "I nostri progetti: Educazione",
    catSocial: "I nostri progetti: Sociali",
    zakatTitle: "NEURONES MADAGASCAR raccoglie anche la tua Zakat Al-Maal",
    zakatPillar: "La Zakat al-Maal è il 3° pilastro dell'Islam. Corrisponde all'elemosina obbligatoria annuale versata dal musulmano la cui ricchezza supera il Nisâb.",
    zakatLegal: "È un'elemosina legale che permette la condivisione delle ricchezze a beneficio dei più vulnerabili.",
    zakatRole: "NEURONES MADAGASCAR si occupa di distribuire la tua elemosina a chi ne ha più bisogno, nel rispetto della tradizione musulmana e dei principi umanitari.",
    zakatFormTitle: "Versare la mia Zakat Al-Maal",
    zakatFormNote: "Pagamento sicuro con carta (Visa, Mastercard, Discover). Ricevuta inviata via email.",
    ctaSupport: "Sostienici",
    ctaPartner: "Diventa Partner",
    projects: {
      protection: { title: "Protezione sociale", text: "Questo progetto mira a proteggere gli studenti dai mali sociali e dai pericoli della strada attraverso la sensibilizzazione e l'intervento diretto delle autorità locali e dei quadri amministrativi ed educativi." },
      prevention: { title: "Prevenzione sanitaria", text: "Questo progetto si fa carico della salute degli studenti: visite e analisi mediche, fatture di medicinali, occhiali, e finanziamento di operazioni chirurgiche d'urgenza." },
      transport: { title: "Trasporto scolastico", text: "Questo progetto offre la copertura totale dei costi di trasporto scolastico per gli studenti delle aree rurali." },
      cartable: { title: "Operazione zaino", text: "Distribuzione di zaini e materiale scolastico per il rientro a scuola 2026-2027." },
      soutien: { title: "Sostegno scolastico", text: "Attivazione di corsi di sostegno scolastico gratuiti per aiutare gli studenti a colmare le lacune, migliorare i voti o eccellere in una materia. È previsto anche un accompagnamento individuale." },
      ceremonie: { title: "Cerimonia dell'eccellenza", text: "Organizzazione di una cerimonia di fine anno con attività culturali, artistiche e di intrattenimento per incoraggiare i bambini all'eccellenza: premiazione degli studenti più meritevoli." },
      camping: { title: "Campo scolastico", text: "Organizzazione, durante le vacanze estive secondo il calendario del Ministero dell'Educazione di Base, di un campo educativo per premiare gli studenti che eccellono." },
      infra: { title: "Equipaggiamento delle infrastrutture scolastiche", text: "Allestimento dello spazio scolastico con quanto serve al corpo docente (aree giochi, spazi verdi, biblioteca scolastica, fontanelle…) e fornitura di sussidi didattici e strumenti di lavoro." },
      formation: { title: "Orientamento e formazione professionale", text: "Orientare gli studenti verso il percorso più adatto al loro profilo accademico e professionale, e aiutarli a inserirsi nel mondo del lavoro tramite la “Formazione ai Mestieri”." },
      habillement: { title: "Abbigliamento", text: "Distribuzione di abbigliamento agli studenti e alle loro famiglie tutto l'anno. In inverno vengono forniti coperte e materassi per prevenire il freddo." },
      ramadan: { title: "Cesto Ramadan & Festa dell'Eid", text: "Raccolta e distribuzione di derrate alimentari alle famiglie degli studenti in difficoltà per vivere con dignità questi momenti." },
      familial: { title: "Sostegno familiare", text: "Sostegno materiale diretto alle famiglie degli studenti in difficoltà per garantire i mezzi di una vita dignitosa (alloggio, medicinali, elettricità, acqua tramite perforazione di pozzi…)." },
    },
  },
  zh: {
    eyebrow: "非营利协会",
    title: "马达加斯加神经元协会",
    intro1: "「马达加斯加神经元协会」是一家非营利协会,依据一九六〇年十月三日颁布的第六〇—一三三号关于协会一般制度的法令而设立。",
    intro2: "本协会于二〇二六年五月在马达加斯加首都塔那那利佛创立,是一家独立的发展协会,致力于实施旨在改善马达加斯加学生受教育机会的项目与计划,重点服务于农村地区。",
    intro3: "本协会不隶属于任何政治、工会或宗教组织,以整体方式鼓励学生入学并致力于减少辍学。",
    axesTitle: "我们的行动方向",
    axesIntro: "若想具体了解我们的行动方向并更好地理解我们想要应对的挑战,请浏览我们三大行动领域中的项目:",
    axisHealth: "健康项目",
    axisEdu: "教育项目",
    axisSocial: "社会项目",
    reach: "马达加斯加神经元协会目前帮助分布在马达加斯加农村地区的中小学超过五千名学生。我们的行动覆盖整个岛屿,尤其是国内最偏远的地区——瓦图瓦维、菲图维尼阿尼以及大南方(安德罗伊)。在这些常被遗忘的土地上,我们与本地团队携手,通过具体而充满人性的项目支持儿童教育。",
    supportTitle: "如何支持我们的协会?",
    supportText: "在马达加斯加神经元协会,每一份支持都很重要:无论是资金捐赠、物资、技能、时间,甚至一个想法——每一个举动都能带来真正的改变。",
    supportNote: "没有所谓的「微小贡献」,任何智识或人力上的支持都帮助我们前行。",
    motto: "「支持他们的教育,就是支持我们的未来。」",
    motto2: "马达加斯加人民正在前进……",
    donate: "捐赠",
    donateLong: "做一次「捐赠」",
    catHealth: "我们的项目:健康",
    catEdu: "我们的项目:教育",
    catSocial: "我们的项目:社会",
    zakatTitle: "神经元协会同时为您募集天课(Zakât Al-Maal)",
    zakatPillar: "天课是伊斯兰教的第三大支柱,是财富超过尼萨布(Nisâb)的穆斯林每年应当缴纳的法定施舍。",
    zakatLegal: "这是一种合法的施舍,使财富得以共享,惠及最脆弱的群体。",
    zakatRole: "马达加斯加神经元协会负责按照伊斯兰传统与人道原则,将您的天课分发给最需要的人。",
    zakatFormTitle: "缴纳我的天课",
    zakatFormNote: "通过银行卡安全付款(Visa、Mastercard、Discover),收据将通过电子邮件发送。",
    ctaSupport: "支持我们",
    ctaPartner: "成为合作伙伴",
    projects: {
      protection: { title: "社会保护", text: "本项目通过宣传与地方当局、行政及教育干部的直接介入,保护学生免受社会不良现象与街头危险的侵害。" },
      prevention: { title: "健康预防", text: "本项目承担学生的健康开支:支付医疗咨询与化验、药费、眼镜,并紧急资助手术。" },
      transport: { title: "校车接送", text: "本项目全额承担农村地区学生的校车交通费用。" },
      cartable: { title: "书包行动", text: "在二〇二六—二〇二七学年开学之际,分发书包及学习用品。" },
      soutien: { title: "学业辅导", text: "开设免费的学业辅导课程,帮助学生弥补知识缺口、提高成绩或在某一学科上脱颖而出,并提供个性化辅导。" },
      ceremonie: { title: "卓越颁奖典礼", text: "组织学年末典礼,结合文化、艺术与娱乐活动,鼓励孩子追求卓越:为最优秀的学生颁奖。" },
      camping: { title: "学生夏令营", text: "依据基础教育部假期日历,在长假期间举办教育露营,奖励学业表现优秀的学生。" },
      infra: { title: "学校基础设施配备", text: "为学校空间配备教师所需的设施(游乐区、绿地、学校图书馆、饮水点……),并提供教学辅助工具。" },
      formation: { title: "升学指导与职业培训", text: "为学生提供最契合其学业与职业道路的指导,并通过「职业培训」帮助他们融入劳动力市场。" },
      habillement: { title: "衣物援助", text: "全年向学生及其家庭分发衣物;冬季提供毛毯与床垫,防御严寒。" },
      ramadan: { title: "斋月礼篮与开斋节", text: "为困难学生家庭收集并分发食品物资,让他们尊严地度过斋月与节日。" },
      familial: { title: "家庭援助", text: "为困难学生家庭提供直接的物资支援,保障他们过上体面生活的基本条件(住房、药品、电力、通过钻井获得饮水……)。" },
    },
  },
};

interface ProjectMeta { key: ProjectKey; img: string; }

const HEALTH: ProjectMeta[] = [
  { key: "protection", img: imgProtection },
  { key: "prevention", img: imgPrevention },
];
const EDU: ProjectMeta[] = [
  { key: "transport", img: imgTransport },
  { key: "cartable", img: imgCartable },
  { key: "soutien", img: imgSoutien },
  { key: "ceremonie", img: imgCeremonie },
  { key: "camping", img: imgCamping },
  { key: "infra", img: imgInfra },
  { key: "formation", img: imgFormation },
];
const SOCIAL: ProjectMeta[] = [
  { key: "habillement", img: imgHabillement },
  { key: "ramadan", img: imgRamadan },
  { key: "familial", img: imgFamilial },
];

function ProjectCard({ meta, content, reverse }: { meta: ProjectMeta; content: ProjectContent; reverse?: boolean }) {
  return (
    <Reveal>
      <div className={`grid items-center gap-8 rounded-3xl border border-[color-mix(in_oklab,var(--gold)_20%,transparent)] bg-[oklch(0.11_0.008_60)/0.6] p-6 backdrop-blur-xl shadow-elegant md:grid-cols-2 md:gap-12 md:p-10 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
        <div className="overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-[oklch(0.08_0.008_60)]">
          <img
            src={meta.img}
            alt={content.title}
            loading="lazy"
            className="aspect-[4/3] w-full object-contain transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-luxury text-gold">Project</span>
          <h3 className="mt-3 font-serif text-2xl text-ivory sm:text-3xl">{content.title}</h3>
          <div className="my-4 gold-divider opacity-50" />
          <p className="text-base leading-relaxed text-ivory/80">{content.text}</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
            style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
          >
            <Heart className="h-3.5 w-3.5" /> {/* donate */}
            <span>{useDonateLabel()}</span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

function useDonateLabel() {
  const { lang } = useI18n();
  return CONTENT[lang].donateLong;
}

function CategoryHeader({ icon: Icon, label, title }: { icon: typeof Heart; label: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-10 flex items-center gap-5">
        <div className="grid h-14 w-14 place-items-center rounded-2xl shadow-gold" style={{ background: "var(--gradient-gold)" }}>
          <Icon className="h-6 w-6" style={{ color: "var(--charcoal)" }} strokeWidth={1.6} />
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-luxury text-gold">{label}</span>
          <h2 className="mt-1 font-serif text-3xl text-ivory sm:text-4xl">{title}</h2>
        </div>
      </div>
    </Reveal>
  );
}

function AssociationPage() {
  const { lang } = useI18n();
  const c = CONTENT[lang];

  const allImages = ALL_DOC_IMAGES.map((src, i) => ({
    src,
    alt: `Neurones Madagascar — photo ${i + 1}`,
  }));

  return (
    <div className="relative pt-32 pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[50rem] opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-luxury text-gold">{c.eyebrow}</span>
              <h1 className="mx-auto mt-6 max-w-4xl font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">
                {c.title}
              </h1>
              <div className="mx-auto mt-8 h-px w-32 bg-gradient-gold" />
            </div>
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-12 max-w-4xl glass-card rounded-3xl p-8 sm:p-12">
              <p className="text-base leading-relaxed text-ivory/85">{c.intro1}</p>
              <p className="mt-5 text-base leading-relaxed text-ivory/85">{c.intro2}</p>
              <p className="mt-5 text-base leading-relaxed text-ivory/85">{c.intro3}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AXES */}
      <section className="relative mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs uppercase tracking-luxury text-gold">{c.axesTitle}</span>
              <p className="mt-6 text-lg text-ivory/80">{c.axesIntro}</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Heart, label: c.axisHealth },
              { icon: GraduationCap, label: c.axisEdu },
              { icon: HandHeart, label: c.axisSocial },
            ].map((a, i) => (
              <Reveal key={a.label} delay={i * 120}>
                <div className="glass-card h-full rounded-2xl p-8 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl shadow-gold" style={{ background: "var(--gradient-gold)" }}>
                    <a.icon className="h-6 w-6" style={{ color: "var(--charcoal)" }} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-ivory">{a.label}</h3>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 glass-card rounded-3xl p-10">
              <p className="text-base leading-relaxed text-ivory/85">{c.reach}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HEALTH */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <CategoryHeader icon={Heart} label="01" title={c.catHealth} />
          <div className="space-y-8">
            {HEALTH.map((m, i) => (
              <ProjectCard key={m.key} meta={m} content={c.projects[m.key]} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <CategoryHeader icon={GraduationCap} label="02" title={c.catEdu} />
          <div className="space-y-8">
            {EDU.map((m, i) => (
              <ProjectCard key={m.key} meta={m} content={c.projects[m.key]} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <CategoryHeader icon={HandHeart} label="03" title={c.catSocial} />
          <div className="space-y-8">
            {SOCIAL.map((m, i) => (
              <ProjectCard key={m.key} meta={m} content={c.projects[m.key]} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="glass-card relative overflow-hidden rounded-3xl p-10 sm:p-14">
              <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-gold" />
                  <span className="text-[10px] uppercase tracking-luxury text-gold">{c.supportTitle}</span>
                </div>
                <p className="mt-6 max-w-3xl text-lg text-ivory/85">{c.supportText}</p>
                <p className="mt-4 max-w-3xl text-base text-ivory/70 italic">{c.supportNote}</p>
                <div className="mt-8 font-serif text-2xl text-gradient-gold sm:text-3xl">{c.motto}</div>
                <p className="mt-3 text-sm uppercase tracking-luxury text-ivory/60">{c.motto2}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ZAKAT */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-3">
                <div className="flex items-start gap-5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl shadow-gold" style={{ background: "var(--gradient-gold)" }}>
                    <Moon className="h-6 w-6" style={{ color: "var(--charcoal)" }} strokeWidth={1.6} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-luxury text-gold">Zakât Al-Maal</span>
                    <h2 className="mt-2 font-serif text-3xl text-ivory sm:text-4xl">{c.zakatTitle}</h2>
                  </div>
                </div>
                <div className="mt-8 space-y-4 text-base leading-relaxed text-ivory/85">
                  <p>{c.zakatPillar}</p>
                  <p>{c.zakatLegal}</p>
                  <p className="font-medium text-ivory">{c.zakatRole}</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="overflow-hidden rounded-3xl border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] shadow-elegant bg-[oklch(0.08_0.008_60)]">
                  <img src={imgZakat} alt="Zakat Al-Maal" loading="lazy" className="h-80 w-full object-contain" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 glass-card rounded-3xl p-8 sm:p-12">
              <h3 className="font-serif text-2xl text-ivory">{c.zakatFormTitle}</h3>
              <div className="my-5 gold-divider opacity-50" />
              <p className="text-sm text-ivory/70">{c.zakatFormNote}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
                >
                  {c.donateLong} <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-xs uppercase tracking-luxury text-ivory/60">Visa · Mastercard · Discover</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FULL GALLERY */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-luxury text-gold">Gallery</span>
              <div className="mx-auto mt-6 h-px w-24 bg-gradient-gold" />
            </div>
          </Reveal>
          <div className="mt-10">
            <PropertyGallery images={allImages} label="Neurones Madagascar" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
                style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
                {c.ctaSupport}
              </Link>
              <Link to="/contact" className="inline-flex rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                {c.donateLong}
              </Link>
              <Link to="/contact" className="inline-flex rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                {c.ctaPartner}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
