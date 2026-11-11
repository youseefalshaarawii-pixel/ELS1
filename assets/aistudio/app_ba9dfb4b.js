/**
 * ===================================================================================================
 * 🏫 المدرسة المصرية للغات (Egyptian Language School) - منصة الأخبار الرسمية
 * ===================================================================================================
 * 
 * 👨‍🏫 دليل المبرمج / المعلم لتعديل الأخبار في هذا الملف:
 * ---------------------------------------------------------------------------------------------------
 * يمكنك تعديل الأخبار الحالية أو إدخال الأخبار الحقيقية للمدرسة عبر:
 * 1. فتح لوحة تحكم المبرمج السرية (بالنقر 5 مرات متتالية على شعار درع المدرسة أعلى الموقع).
 *    ومن هناك يمكنك إضافة أو تعديل أو حذف أي خبر، ثم نسخ كود JSON الجاهز ولصقه هنا مباشرة!
 * 2. أو التعديل المباشر في المصفوفة `DEFAULT_NEWS_DATA` أدناه.
 *
 * كل خبر يحتوي على:
 * - id: رقم فريد لا يتكرر.
 * - title: عنوان الخبر الرئيسي.
 * - category: التصنيف ("أخبار الطلاب" | "المعلمين" | "الفعاليات والإمتحانات").
 * - author: الجهة أو القسم الناشر.
 * - date: تاريخ النشر (YYYY-MM-DD).
 * - readTime: مدة القراءة (مثال: "3 دقائق").
 * - isFeatured: هل هو الخبر المميز للأسبوع في الصفحة الرئيسية؟ (true / false).
 * - image: رابط صورة المقال.
 * - summary: ملخص قصير لسحابة الخبر.
 * - content: النص الكامل بتنسيق فقرات HTML.
 * ===================================================================================================
 */

// 1. مصفوفة الأخبار الافتراضية المعتمدة (Sample Real-World School Articles)
const DEFAULT_NEWS_DATA = [
  {
    id: 1,
    title: "انطلاق أسبوع الابتكار العلمي والتكنولوجي بمشاركة نخبة من طلاب المدرسة المصرية للغات",
    category: "أخبار الطلاب",
    author: "قسم العلوم والتكنولوجيا",
    date: "2026-11-04",
    readTime: "4 دقائق",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    summary: "افتتحت إدارة المدرسة أسبوع الابتكار السنوي مستعرضة أكثر من 45 مشروعاً تطبيقياً في مجالات الذكاء الاصطناعي، الطاقة المتجددة، والبرمجيات المتقدمة لطلاب المرحلتين الإعدادية والثانوية.",
    content: `
      <p>شهدت قاعة المؤتمرات الكبرى بالمدرسة المصرية للغات صباح اليوم انطلاق فعاليات "أسبوع الابتكار والريادة العلمية"، بحضور مجلس إدارة المدرسة، ونخبة من أساتذة كليات الهندسة والعلوم بالجامعات المصرية ولفيف من أولياء الأمور والمهتمين بالتعليم الرقمي.</p>
      
      <blockquote>"إن الاستثمار في عقول أبنائنا الطلاب من خلال التجربة العلمية التطبيقية هو الركيزة الأساسية لصناعة قادة المستقبل والعلماء الذين تفتخر بهم مصر." — إدارة المدرسة</blockquote>

      <h3>محاور المعرض والمشاريع المتنافسة</h3>
      <p>تضمّن المعرض هذا العام أكثر من 45 مشروعاً ابتكارياً تم تطويرها بالكامل داخل معامل ومختبرات المدرسة، وشملت المحاور التالية:</p>
      <ul>
        <li><strong>تطبيقات الذكاء الاصطناعي:</strong> أنظمة مساعدة لذوي الهمم ونماذج ذكية لترشيد استهلاك الطاقة داخل الفصول الدراسية.</li>
        <li><strong>الطاقة النظيفة والاستدامة:</strong> نماذج أولية لخلايا شمسية محسنة ومحطات تدوير مياه مصغرة للحديقة المدرسية.</li>
        <li><strong>الروبوتات والأتمتة:</strong> روبوتات مبرمجة لفرز النفايات والمساعدة في الخدمات اللوجستية التعليمية.</li>
      </ul>

      <p>وأعلنت لجنة التحكيم المكونة من خبراء أكاديميين أنه سيتم تكريم الفرق الفائزة بالمراكز الثلاثة الأولى في الحفل الختامي يوم الخميس القادم، بالإضافة إلى تقديم منح تدريبية متقدمة في المراكز البحثية المتخصصة.</p>
    `
  },
  {
    id: 2,
    title: "برنامج التطوير المهني للمعلمين: ورشة عمل توظيف الذكاء الاصطناعي في التعليم والتقييم",
    category: "المعلمين",
    author: "إدارة التطوير الأكاديمي",
    date: "2026-11-02",
    readTime: "3 دقائق",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    summary: "اختتم قسم التدريب والتطوير ورشة عمل مكثفة لأعضاء هيئة التدريس ركزت على إدماج أدوات الذكاء الاصطناعي التوليدي في تصميم الأنشطة التفاعلية وتخصيص مسارات التعلم الفردية.",
    content: `
      <p>في إطار خطة التطوير المستمر للكادر التعليمي بالمدرسة المصرية للغات، اختتمت اليوم فعاليات البرنامج التدريبي المتخصص حول "استراتيجيات التدريس الرقمي وتطبيقات الذكاء الاصطناعي في الفصول المدرسية"، بمشاركة أكثر من 60 معلماً ومعلمة من مختلف التخصصات اللغوية والعلمية.</p>

      <h3>أهم مخرجات الورشة التدريبية</h3>
      <p>ركزت جلسات التدريب على التطبيقات المباشرة التي تخدم العملية التعليمية بصورة آمنة وأخلاقية، ومن أبرزها:</p>
      <ul>
        <li>بناء خطط دروس مخصصة تراعي الفروق الفردية ومستويات الاستيعاب لدى الطلاب.</li>
        <li>تصميم أسئلة تفاعلية وبنوك اختبارات تقيس مهارات التفكير العليا وحل المشكلات.</li>
        <li>معايير النزاهة الأكاديمية وكيفية توجيه الطلاب للاستخدام الإيجابي للتقنيات الحديثة.</li>
      </ul>

      <p>وأعرب المشاركون عن استفادتهم الكبيرة من الجوانب التطبيقية للورشة، مؤكدين عزمهم تطبيق النماذج المطورة خلال الفصل الدراسي الحالي لتعزيز تفاعل الطلاب وإثراء الحصص الدراسية.</p>
    `
  },
  {
    id: 3,
    title: "جدول اختبارات منتصف الفصل الدراسي الأول وتوجيهات الحضور والانضباط المدرسي",
    category: "الفعاليات والإمتحانات",
    author: "لجنة الامتحانات وشؤون الطلاب",
    date: "2026-10-30",
    readTime: "2 دقيقة",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    summary: "أعلنت إدارة شؤون الطلاب والامتحانات عن جدول اختبارات منتصف الفصل الدراسي لجميع المراحل، مؤكدة على أهمية الالتزام بالحضور المبكر والزي المدرسي الموحد والضوابط المعتمدة.",
    content: `
      <p>تعلن إدارة المدرسة المصرية للغات لجميع أبنائنا وبناتنا الطلاب وأولياء أمورهم الكرام عن موعد وجدول امتحانات منتصف الفصل الدراسي الأول لصفوف المرحلة الابتدائية والإعدادية والثانوية، والتي ستبدأ بمشيئة الله مطلع الأسبوع المقبل.</p>

      <h3>توجيهات وتعليمات هامة لجميع الطلاب:</h3>
      <ul>
        <li><strong>مواعيد الحضور:</strong> يبدأ طابور الصباح في تمام الساعة 7:45 صباحاً، وتبدأ لجان الاختبارات في تمام الساعة 8:30 صباحاً دون تأخير.</li>
        <li><strong>الأدوات الشخصية:</strong> يلتزم كل طالب بإحضار أدواته الهندسية والكتابية كاملة، ويُمنع منعاً باتاً تبادل الأدوات داخل اللجان.</li>
        <li><strong>الأجهزة الإلكترونية:</strong> يحظر اصطحاب الهواتف الذكية أو الساعات الذكية داخل قاعات الامتحانات طبقاً للتعليمات الوزارية الصارمة.</li>
      </ul>

      <blockquote>"نتمنى لأبنائنا الطلبة التوفيق والتميز والسداد في امتحاناتهم، وندعوهم للحرص على أوقات الراحة والمذاكرة الهادئة." — لجنة الامتحانات</blockquote>
    `
  },
  {
    id: 4,
    title: "تتويج فريق المدرسة المصرية للغات بالمركز الأول في بطولة دوري المدارس لكرة السلة",
    category: "أخبار الطلاب",
    author: "قسم التربية الرياضية",
    date: "2026-10-27",
    readTime: "3 دقائق",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
    summary: "حقق منتخب المدرسة لكرة السلة فوزاً مستحقاً في المباراة النهائية لبطولة المدارس الدولية بعد أداء بطولي وروح رياضية استثنائية من كافة لاعبي الفريق.",
    content: `
      <p>في إنجاز رياضي جديد يضاف إلى سجلات الشرف بالمدرسة المصرية للغات، أحرز فريق المدرسة لكرة السلة (تحت 16 سنة) كأس المركز الأول والميداليات الذهبية في بطولة دوري المدارس التنافسية الكبرى بالقاهرة الجديدة، بعد تغلبه في المباراة النهائية بنتيجة مشرفة (68 - 59).</p>

      <p>وشهدت المباراة النهائية حضوراً حماسياً كبيراً من طلاب ومعلمي المدرسة الذين شجعوا زملاءهم بكل حماس ومسؤولية وروح رياضية راقية نالت استحسان حكام البطولة ومنظميها.</p>

      <h3>تكريم خاص لأبطال الفريق:</h3>
      <p>وقامت إدارة المدرسة بتكريم مدرب الفريق واللاعبين في طابور الصباح، ومنحهم شهادات تقدير ودروعاً تذكارية تقديراً لالتزامهم بالتدريبات المكثفة والتوازن الرائع بين التفوق الرياضي والتحصيل الدراسي المتميز.</p>
    `
  },
  {
    id: 5,
    title: "تكريم المعلمين المتميزين في احتفالية يوم العطاء والوفاء الأكاديمي السنوية",
    category: "المعلمين",
    author: "مجلس الإدارة والعلاقات العامة",
    date: "2026-10-24",
    readTime: "3 دقائق",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    summary: "نظمت إدارة المدرسة حفلاً مميزاً تقديراً للجهود المخلصة التي يبذلها المعلمون والمعلمات في غرس القيم وبناء الشخصية المتوازنة لأبناء المدرسة عبر السنين.",
    content: `
      <p>أقامت المدرسة المصرية للغات حفلها السنوي السنوي "يوم الوفاء للمعلم"، والذي شهد تكريم نخبة من المربين والمعلمين الذين قدموا إسهامات تربوية وأكاديمية بارزة خلال مسيرتهم التعليمية بالمدرسة.</p>

      <p>واشتمل الحفل على كلمات شكر مؤثرة ألقاها ممثلون عن مجالس الآباء واتحاد الطلاب، أشادوا فيها بالدور التربوي النبيل للمعلم الذي يتجاوز نقل المعرفة إلى بناء القيم الأخلاقية وصقل المواهب الإبداعية.</p>

      <p>وفي ختام الحفل، قام السيد مدير المدرسة بتسليم دروع التميز الأكاديمي للمعلمين الفائزين بجائزة "معلم العام" في مختلف التخصصات، مؤكداً أن المدرسة تضع راحة المعلم وتطويره المستمر على رأس أولوياتها الاستراتيجية.</p>
    `
  },
  {
    id: 6,
    title: "انطلاق المخيم البيئي والكشفي السنوي لطلاب المرحلة الابتدائية بمحمية وادي دجلة",
    category: "الفعاليات والإمتحانات",
    author: "قسم الأنشطة الكشفية والرحلات",
    date: "2026-10-20",
    readTime: "4 دقائق",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
    summary: "شارك أكثر من 120 شبلاً وزهرة من طلاب المرحلة الابتدائية في المخيم البيئي السنوي، وتضمنت الرحلة فعاليات استكشافية وتدريبات على الاعتماد على النفس والحفاظ على البيئة الطبيعية.",
    content: `
      <p>نظمت فرقة الكشافة والمرشدات بالمدرسة المصرية للغات رحلتها الميدانية السنوية إلى محمية وادي دجلة الطبيعية، بمشاركة طلاب الصفوف الرابع والخامس والسادس الابتدائي وتحت إشراف قادة النشاط الكشفي ومعلمي العلوم والتربية الاجتماعية.</p>

      <h3>أبرز أنشطة المخيم البيئي:</h3>
      <ul>
        <li><strong>التدريب الكشفي:</strong> نصب الخيام وتطبيق مهارات الإسعافات الأولية وتوجيه البوصلة والخرائط الطبوغرافية.</li>
        <li><strong>التوعية الجيولوجية والبيئية:</strong> جولة حقلية برفقة مرشدين بيئيين للتعرف على التكوينات الصخرية والحياة البرية النادرة في مصر.</li>
        <li><strong>حملة النظافة المجتمعية:</strong> جمع وتصنيف المخلفات البلاستيكية والتأكيد على شعار "لا تترك خلفك سوى أثر قدمك".</li>
      </ul>

      <p>وقد عاد جميع الطلاب بسلام وسعادة غامرة محملين بذكريات ملهمة ومهارات عملية جديدة تعزز حب الوطن والانتماء والحفاظ على مقدراته الطبيعية.</p>
    `
  }
];

// مكتبة الصور الجاهزة
const PRESET_IMAGE_MAP = {
  science: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  students: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
  teachers: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
  sports: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
  exams: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
};

// قاموس الترجمة للغتين العربية والإنجليزية (Bilingual Dictionary)
const I18N_DICTIONARY = {
  ar: {
    breaking_tag: "عاجل",
    school_motto: "العلم • الأخلاق • التميز",
    school_title: "المدرسة المصرية للغات",
    school_subtitle: "Egyptian Language School — المنصة الإخبارية المعتمدة",
    search_placeholder: "ابحث في الأخبار والفعاليات...",
    settings_title: "الإعدادات",
    tab_home: "الرئيسية",
    tab_students: "أخبار الطلاب",
    tab_teachers: "المعلمين",
    tab_events: "الفعاليات والإمتحانات",
    tab_bookmarks: "المفضلة",
    sort_label: "الترتيب:",
    sort_newest: "الأحدث أولاً",
    sort_oldest: "الأقدم أولاً",
    sort_readtime: "الأسرع قراءة",
    cloud_badge: "سحب الأخبار والتحديثات",
    home_section_title: "أحدث العناوين والمستجدات",
    home_section_subtitle: "انقر على أي سحابة إخبارية لفتح وتصفح المقال بالكامل",
    displaying_count: "عرض",
    articles_word: "خبر",
    ticker_title: "موجز أخبار اليوم",
    students_hero_tag: "بوابة التميز الطلابي",
    students_hero_title: "شؤون وتفوق الطلاب والأنشطة الإبداعية",
    students_hero_desc: "تغطية شاملة لكل إنجازات وبطولات ومشاريع الطلاب في جميع المراحل (الابتدائية، الإعدادية، والثانوية).",
    stat_projects: "مشروع ابتكاري سنوي",
    stat_sports: "فريق رياضي منافس",
    stat_success: "نسبة التفوق والنجاح",
    students_list_title: "أحدث تقارير وإعلانات الطلاب",
    teachers_hero_tag: "ركن الكادر الأكاديمي",
    teachers_hero_title: "منصة هيئة التدريس والتطوير المهني",
    teachers_hero_desc: "ورش العمل، التدريب على أحدث تقنيات التعليم الرقمي والذكاء الاصطناعي، وتكريمات العطاء المستمر.",
    stat_teachers: "معلماً ومعلمة مؤهلين",
    stat_workshops: "ورشة تطوير مهني سنوياً",
    stat_accreditation: "اعتماد جودة التعليم",
    teachers_list_title: "أحدث أخبار وفعاليات هيئة التدريس",
    events_hero_tag: "التقويم واللجان الرسمية",
    events_hero_title: "جدول الامتحانات والفعاليات المدرسية",
    events_hero_desc: "مواعيد الاختبارات الدورية، توجيهات اللجان، رحلات الكشافة، وجداول الأنشطة الموسمية.",
    countdown_title: "⏳ المتبقي على بدء اختبارات منتصف الفصل الدراسي:",
    cd_days: "أيام",
    cd_hours: "ساعة",
    cd_mins: "دقيقة",
    events_list_title: "جداول الاختبارات وتقارير الفعاليات",
    bookmarks_page_title: "الأخبار والمقالات المحفوظة",
    bookmarks_page_desc: "يمكنك حفظ أي خبر ترغب في قراءته لاحقاً بالضغط على أيقونة الإشارة المرجعية داخل المقال.",
    clear_bookmarks: "مسح كل المحفوظات",
    empty_title: "لا توجد أخبار مطابقة",
    empty_desc: "لم نتمكن من العثور على أي خبر يطابق معايير البحث أو التصفية الحالية.",
    reset_filters: "إعادة ضبط التصفية",
    archive_tag: "تصنيف الأرشيف:",
    official_seal_text: "منشور رسمي معتمد من إدارة المدرسة المصرية للغات",
    lang_setting_name: "لغة الواجهة (Language)",
    lang_setting_desc: "التبديل بين العربية والإنجليزية",
    darkmode_setting_name: "الوضع الليلي (Dark Mode)",
    darkmode_setting_desc: "مظهر داكن مريح في الإضاءة الخافتة",
    fontsize_setting_name: "حجم خط القراءة",
    fontsize_setting_desc: "تكبير أو تصغير نصوص المقالات",
    speed_setting_name: "سرعة تقليب كروت اليوم",
    speed_setting_desc: "فترة بقاء الكارت قبل التقليب الذاتي",
    reset_settings_btn: "استعادة الإعدادات الافتراضية",
    mag_btn_title: "📖 مجلة المدرسة التفاعلية",
    mag_btn_sub: "إصدار صحفي مقلوب ثلاثي الأبعاد",
    weather_text: "التجمع الخامس 24°C • معتدل ومشمس",
    reactions_prompt: "شارك تفاعلك وتشجيعك مع هذا الخبر:",
    reaction_claps: "تشجيع",
    reaction_ideas: "ملهم",
    reaction_pride: "فخر ELS",
    reaction_love: "ممتاز",
    mag_badge: "المجلة الدورية الرسمية • الإصدار 01",
    mag_title: "جريدة ومجلة المدرسة المصرية للغات",
    mag_btn_prev: "◀ الصفحة السابقة",
    mag_btn_next: "الصفحة التالية ▶",
    footer_desc: "منصة إخبارية رقمية هادئة تسلط الضوء على إنجازات مجتمع المدرسة التعليمي من طلاب ومعلمين وإدارة، وتقدم الإعلانات والتقارير بمصداقية وأناقة صحفية.",
    footer_sections: "صفحات وأقسام الموقع",
    footer_contact: "التواصل الرسمي",
    address_label: "العنوان:",
    address_val: "التجمع الخامس، القاهرة الجديدة، جمهورية مصر العربية",
    email_label: "البريد الإخباري:",
    phone_label: "هاتف الإدارة:",
    footer_copyright: "© 2026 جميع الحقوق محفوظة — المدرسة المصرية للغات (Egyptian Language School). صُممت المنصة وفق أرقى معايير الصحافة المدرسية الرقمية."
  },
  en: {
    breaking_tag: "BREAKING",
    school_motto: "Knowledge • Ethics • Excellence",
    school_title: "Egyptian Language School",
    school_subtitle: "Official Editorial News & Updates Portal",
    search_placeholder: "Search news, exams, and events...",
    settings_title: "Settings",
    tab_home: "Home",
    tab_students: "Students",
    tab_teachers: "Faculty",
    tab_events: "Exams & Events",
    tab_bookmarks: "Bookmarks",
    sort_label: "Sort by:",
    sort_newest: "Newest First",
    sort_oldest: "Oldest First",
    sort_readtime: "Quickest Read",
    cloud_badge: "News Clouds & Feeds",
    home_section_title: "Headlines & Live Highlights",
    home_section_subtitle: "Click on any news cloud to expand and read full article",
    displaying_count: "Showing",
    articles_word: "articles",
    ticker_title: "Today's Live Stories",
    students_hero_tag: "Student Excellence Portal",
    students_hero_title: "Student Affairs, Achievements & Projects",
    students_hero_desc: "Comprehensive coverage of all student championships, science fairs, and scholastic excellence across all grades.",
    stat_projects: "Annual Innovation Projects",
    stat_sports: "Competitive Sports Teams",
    stat_success: "Excellence & Success Rate",
    students_list_title: "Latest Student News & Reports",
    teachers_hero_tag: "Faculty & Staff Corner",
    teachers_hero_title: "Academic Staff & Professional Development",
    teachers_hero_desc: "Hands-on workshops, AI-driven educational training, and faculty appreciation awards.",
    stat_teachers: "Certified Educators",
    stat_workshops: "Workshops Hosted Yearly",
    stat_accreditation: "Quality Accreditation",
    teachers_list_title: "Latest Faculty News & Seminars",
    events_hero_tag: "Calendar & Official Boards",
    events_hero_title: "Exam Schedules & School Calendar",
    events_hero_desc: "Term exam timetables, committee instructions, scouting expeditions, and seasonal events.",
    countdown_title: "⏳ Countdown to Mid-Term Exams Commencement:",
    cd_days: "Days",
    cd_hours: "Hours",
    cd_mins: "Mins",
    events_list_title: "Examination Schedules & Event Reports",
    bookmarks_page_title: "Saved Articles & Reading List",
    bookmarks_page_desc: "Bookmark articles anytime to read offline or review during exam preparation.",
    clear_bookmarks: "Clear All Bookmarks",
    empty_title: "No Matching News Found",
    empty_desc: "We could not find any news matching your current query or category filter.",
    reset_filters: "Reset Filters",
    archive_tag: "Archive Category:",
    official_seal_text: "Official verified release — Egyptian Language School Management",
    lang_setting_name: "Interface Language",
    lang_setting_desc: "Switch between Arabic and English",
    darkmode_setting_name: "Dark Mode",
    darkmode_setting_desc: "Calm, eye-pleasing theme in low light",
    fontsize_setting_name: "Reading Font Size",
    fontsize_setting_desc: "Adjust typography scale for comfort",
    speed_setting_name: "Today's Card Flip Speed",
    speed_setting_desc: "Display duration before switching to next story",
    reset_settings_btn: "Restore Default Settings",
    mag_btn_title: "📖 Interactive Magazine",
    mag_btn_sub: "3D Flipbook Magazine",
    weather_text: "New Cairo 24°C • Sunny & Mild",
    reactions_prompt: "Share your reaction & support for this story:",
    reaction_claps: "Claps",
    reaction_ideas: "Inspiring",
    reaction_pride: "ELS Pride",
    reaction_love: "Love it",
    mag_badge: "Official Periodical • Issue 01",
    mag_title: "Egyptian Language School Magazine",
    mag_btn_prev: "◀ Previous Page",
    mag_btn_next: "Next Page ▶",
    footer_desc: "A calm digital newsroom highlighting the scholastic achievements of students, teachers, and school leadership with editorial integrity.",
    footer_sections: "Portal Pages",
    footer_contact: "Official Contact",
    address_label: "Address:",
    address_val: "5th Settlement, New Cairo, Egypt",
    email_label: "Editorial Desk:",
    phone_label: "Administration Phone:",
    footer_copyright: "© 2026 All Rights Reserved — Egyptian Language School. Built to digital journalism standards."
  }
};

const STORAGE_KEYS = {
  NEWS: "els_school_news_database_v3",
  SETTINGS: "els_school_settings_v3",
  BOOKMARKS: "els_school_bookmarks_v3",
  REACTIONS: "els_school_reactions_v3"
};

/**
 * ===================================================================================================
 * 2. الفئة الرئيسية للتطبيق (NewsApp Core Controller)
 * ===================================================================================================
 */
class NewsApp {
  constructor() {
    this.newsList = [];
    this.bookmarks = [];
    this.currentPage = "home"; // 'home' | 'students' | 'teachers' | 'events' | 'bookmarks'
    this.searchQuery = "";
    this.sortOrder = "newest";
    this.selectedPreset = "science";

    // تتبع النقرات السرية للمبرمج
    this.crestClickCount = 0;
    this.crestClickTimer = null;

    // الإعدادات العامة
    this.settings = {
      lang: "ar",             // 'ar' | 'en'
      theme: "light",         // 'light' | 'dark'
      fontSize: "normal",     // 'small' | 'normal' | 'large'
      tickerSpeed: 10         // 10 ثوانٍ افتراضية
    };

    // حالة سلايدر أخبار اليوم (10 ثوانٍ)
    this.tickerIndex = 0;
    this.tickerInterval = null;
    this.isTickerPaused = false;
    this.isTickerHovered = false;

    // قارئ الصوت الذكي (Text-to-Speech)
    this.synth = window.speechSynthesis || null;
    this.currentUtterance = null;
    this.isSpeaking = false;

    // حالة المجلة المدرسية التفاعلية ثلاثية الأبعاد
    this.currentMagPage = 1;
    this.totalMagPages = 4;
    this.reactionsData = {};

    this.initDOMElements();
    this.loadData();
    this.applySettings();
    this.initDateDisplay();
    this.initExamCountdown();
    this.attachEventListeners();
    this.initTodayTicker();
    this.render();
  }

  initDOMElements() {
    // الترويسة وأزرار التحكم
    this.schoolSecretCrest = document.getElementById("school-secret-crest");
    this.langToggleBtn = document.getElementById("lang-toggle-btn");
    this.currentLangText = document.getElementById("current-lang-text");
    this.quickThemeBtn = document.getElementById("quick-theme-btn");
    this.themeSunIcon = this.quickThemeBtn.querySelector(".theme-sun-icon");
    this.themeMoonIcon = this.quickThemeBtn.querySelector(".theme-moon-icon");
    this.headerBookmarksBtn = document.getElementById("header-bookmarks-btn");
    this.bookmarksCountBadge = document.getElementById("bookmarks-count-badge");
    this.searchInput = document.getElementById("news-search-input");
    this.sortSelect = document.getElementById("sort-select");

    // عناصر المجلة المدرسية التفاعلية ثلاثية الأبعاد
    this.openMagazineBtn = document.getElementById("open-magazine-btn");
    this.magazineModal = document.getElementById("magazine-flipbook-modal");
    this.closeMagazineBtn = document.getElementById("close-magazine-btn");
    this.magazinePrintBtn = document.getElementById("magazine-print-btn");
    this.flipPrevBtn = document.getElementById("flip-prev-btn");
    this.flipNextBtn = document.getElementById("flip-next-btn");
    this.magSidePrevBtn = document.getElementById("mag-side-prev");
    this.magSideNextBtn = document.getElementById("mag-side-next");
    this.magCurrentPageText = document.getElementById("mag-current-page-text");
    this.magPages = document.querySelectorAll(".magazine-page");
    this.magSpreadPills = document.querySelectorAll(".spread-pill-btn");
    this.tocEntries = document.querySelectorAll(".toc-entry");

    // تفاعلات المقال وتشجيع الطلاب
    this.reactionBtns = document.querySelectorAll(".reaction-pill-btn");

    // تبويبات الصفحات واللوحات
    this.pageTabs = document.querySelectorAll(".page-tab");
    this.pagePanels = document.querySelectorAll(".page-view-panel");

    // عناصر الصفحة الرئيسية
    this.heroSection = document.getElementById("hero-featured-section");
    this.newsGridContainer = document.getElementById("news-grid-container");
    this.emptyState = document.getElementById("empty-state");
    this.resetFiltersBtn = document.getElementById("reset-filters-btn");
    this.visibleCount = document.getElementById("visible-count");

    // حاويات الصفحات المنفصلة
    this.studentsGridContainer = document.getElementById("students-grid-container");
    this.teachersGridContainer = document.getElementById("teachers-grid-container");
    this.eventsGridContainer = document.getElementById("events-grid-container");
    this.bookmarksGridContainer = document.getElementById("bookmarks-grid-container");
    this.clearBookmarksBtn = document.getElementById("clear-bookmarks-btn");

    // عدادات التبويبات
    this.countHome = document.getElementById("count-home");
    this.countStudents = document.getElementById("count-students");
    this.countTeachers = document.getElementById("count-teachers");
    this.countEvents = document.getElementById("count-events");
    this.countBookmarks = document.getElementById("count-bookmarks");

    // ويدجت أخبار اليوم المتحركة (10 ثوانٍ)
    this.tickerWidget = document.getElementById("today-ticker-widget");
    this.tickerViewport = document.getElementById("ticker-slider-viewport");
    this.tickerProgressBar = document.getElementById("ticker-progress-bar");
    this.sliderCountdownText = document.getElementById("slider-countdown-text");
    this.sliderDotsContainer = document.getElementById("slider-dots-container");
    this.tickerPrevBtn = document.getElementById("ticker-prev-btn");
    this.tickerNextBtn = document.getElementById("ticker-next-btn");
    this.tickerPauseBtn = document.getElementById("ticker-pause-btn");
    this.pauseIcon = document.getElementById("pause-icon");
    this.playIcon = document.getElementById("play-icon");

    // لوحة تحكم المبرمج السرية
    this.adminNewsModal = document.getElementById("admin-news-modal");
    this.closeAdminModalBtn = document.getElementById("close-admin-modal-btn");
    this.adminTabs = document.querySelectorAll(".admin-tab");
    this.adminTabContents = document.querySelectorAll(".admin-tab-content");
    this.adminNewsForm = document.getElementById("admin-news-form");
    this.editingArticleId = document.getElementById("editing-article-id");
    this.submitNewsBtn = document.getElementById("submit-news-btn");
    this.cancelEditBtn = document.getElementById("cancel-edit-btn");
    this.adminNewsCardsList = document.getElementById("admin-news-cards-list");
    this.adminTotalNewsCount = document.getElementById("admin-total-news-count");
    this.jsonExportArea = document.getElementById("json-export-area");
    this.copyJsonBtn = document.getElementById("copy-json-btn");
    this.resetDefaultNewsBtn = document.getElementById("reset-default-news-btn");
    this.presetButtons = document.querySelectorAll(".preset-img-btn");
    this.newsImageInput = document.getElementById("news-image-input");
    this.newsDateInput = document.getElementById("news-date-input");

    // نافذة القارئ
    this.articleModal = document.getElementById("article-modal");
    this.closeArticleModalBtn = document.getElementById("close-article-modal");
    this.modalCategoryBadge = document.getElementById("modal-category-badge");
    this.modalDate = document.getElementById("modal-date");
    this.modalReadTime = document.getElementById("modal-read-time");
    this.modalArticleTitle = document.getElementById("modal-article-title");
    this.modalAuthorAvatar = document.getElementById("modal-author-avatar");
    this.modalAuthorName = document.getElementById("modal-author-name");
    this.modalAuthorRole = document.getElementById("modal-author-role");
    this.modalArticleImage = document.getElementById("modal-article-image");
    this.modalImageCaption = document.getElementById("modal-image-caption");
    this.modalArticleLead = document.getElementById("modal-article-lead");
    this.modalArticleContent = document.getElementById("modal-article-content");
    this.modalTagChip = document.getElementById("modal-tag-chip");
    this.modalBookmarkToggle = document.getElementById("modal-bookmark-toggle");
    this.modalTtsBtn = document.getElementById("modal-tts-btn");
    this.modalCopyLinkBtn = document.getElementById("modal-copy-link-btn");
    this.modalPrintBtn = document.getElementById("modal-print-btn");

    // القائمة الجانبية
    this.settingsDrawer = document.getElementById("settings-sidebar");
    this.drawerBackdrop = document.getElementById("drawer-backdrop");
    this.openSettingsBtn = document.getElementById("open-settings-drawer-btn");
    this.closeSettingsBtn = document.getElementById("close-settings-drawer-btn");
    this.footerSettingsBtn = document.getElementById("footer-settings-btn");
    this.drawerDarkModeToggle = document.getElementById("drawer-dark-mode-toggle");
    this.langPills = document.querySelectorAll(".lang-pill");
    this.fontSizeBtns = document.querySelectorAll(".font-size-btn");
    this.speedBtns = document.querySelectorAll(".speed-btn");
    this.resetAllSettingsBtn = document.getElementById("reset-all-settings-btn");

    // التوست
    this.toast = document.getElementById("toast-notification");
    this.toastMessage = document.getElementById("toast-message");
  }

  // تحميل البيانات من المتصفح
  loadData() {
    try {
      const storedNews = localStorage.getItem(STORAGE_KEYS.NEWS);
      this.newsList = storedNews ? JSON.parse(storedNews) : [...DEFAULT_NEWS_DATA];

      const storedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (storedSettings) this.settings = Object.assign(this.settings, JSON.parse(storedSettings));

      const storedBookmarks = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      this.bookmarks = storedBookmarks ? JSON.parse(storedBookmarks) : [];

      const storedReactions = localStorage.getItem(STORAGE_KEYS.REACTIONS);
      this.reactionsData = storedReactions ? JSON.parse(storedReactions) : {};
    } catch (e) {
      console.warn("استعادة البيانات الافتراضية:", e);
      this.newsList = [...DEFAULT_NEWS_DATA];
      this.reactionsData = {};
    }
  }

  saveNews() {
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(this.newsList));
  }

  saveSettings() {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(this.settings));
  }

  saveBookmarks() {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(this.bookmarks));
  }

  saveReactions() {
    localStorage.setItem(STORAGE_KEYS.REACTIONS, JSON.stringify(this.reactionsData));
  }

  /**
   * ===================================================================================================
   * 3. محرك الترجمة واللغة (Bilingual Translation Engine)
   * ===================================================================================================
   */
  applySettings() {
    const lang = this.settings.lang;
    const isEn = lang === "en";

    // ضبط اتجاه المستند واللغة
    document.documentElement.lang = lang;
    document.documentElement.dir = isEn ? "ltr" : "rtl";
    document.documentElement.setAttribute("data-theme", this.settings.theme);
    document.documentElement.setAttribute("data-font-size", this.settings.fontSize);

    // تحديث أزرار الوضع الليلي
    if (this.themeSunIcon && this.themeMoonIcon) {
      const isDark = this.settings.theme === "dark";
      this.themeSunIcon.classList.toggle("hidden", isDark);
      this.themeMoonIcon.classList.toggle("hidden", !isDark);
      if (this.drawerDarkModeToggle) this.drawerDarkModeToggle.checked = isDark;
    }

    // تحديث زر اللغة في الهيدر
    if (this.currentLangText) {
      this.currentLangText.textContent = isEn ? "العربية" : "English";
    }

    // تحديث الأزرار في القائمة الجانبية
    this.langPills.forEach(p => p.classList.toggle("active", p.dataset.lang === lang));
    this.fontSizeBtns.forEach(b => b.classList.toggle("active", b.dataset.size === this.settings.fontSize));
    this.speedBtns.forEach(b => b.classList.toggle("active", parseInt(b.dataset.speed) === this.settings.tickerSpeed));

    // ترجمة كافة العناصر الموسومة بـ data-i18n
    const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.ar;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.placeholder = dict[key];
    });

    // تحديث شارة المفضلة
    this.updateBookmarksBadge();
  }

  toggleLanguage() {
    this.settings.lang = this.settings.lang === "ar" ? "en" : "ar";
    this.saveSettings();
    this.applySettings();
    this.initDateDisplay();
    this.render();
    this.showToast(this.settings.lang === "en" ? "Language switched to English 🌐" : "تم تغيير اللغة إلى العربية 🌐");
  }

  toggleTheme() {
    this.settings.theme = this.settings.theme === "dark" ? "light" : "dark";
    this.saveSettings();
    this.applySettings();
    this.showToast(this.settings.theme === "dark" ? "تم تفعيل الوضع الليلي 🌙" : "تم تفعيل الوضع النهاري ☀️");
  }

  initDateDisplay() {
    const dateEl = document.getElementById("current-date-display");
    if (!dateEl) return;
    const now = new Date();
    const locale = this.settings.lang === "en" ? "en-US" : "ar-EG";
    dateEl.textContent = now.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    if (this.newsDateInput) {
      this.newsDateInput.value = now.toISOString().split("T")[0];
    }
  }

  // عداد تنازلي حقيقي للامتحانات القادمة (Exam Countdown)
  initExamCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);
    targetDate.setHours(targetDate.getHours() + 12);

    const updateCountdown = () => {
      const diff = targetDate - new Date();
      if (diff <= 0) return;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const dEl = document.getElementById("cd-days");
      const hEl = document.getElementById("cd-hours");
      const mEl = document.getElementById("cd-minutes");
      if (dEl) dEl.textContent = String(days).padStart(2, '0');
      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 60000);
  }

  /**
   * ===================================================================================================
   * 4. ربط الأحداث وإدارة التنقل بين الصفحات واللوحة السرية
   * ===================================================================================================
   */
  attachEventListeners() {
    // 1. النقر السري 5 مرات على شعار درع المدرسة لفتح لوحة المبرمج السرية
    this.schoolSecretCrest.addEventListener("click", () => {
      this.crestClickCount++;
      if (this.crestClickTimer) clearTimeout(this.crestClickTimer);

      this.crestClickTimer = setTimeout(() => {
        this.crestClickCount = 0;
      }, 2500);

      if (this.crestClickCount === 5) {
        this.crestClickCount = 0;
        this.openAdminModal();
        this.showToast("🔐 تم فتح لوحة تحكم المبرمج السرية لإدارة الأخبار!");
      }
    });

    // 2. زر تبديل اللغة السريع
    this.langToggleBtn.addEventListener("click", () => this.toggleLanguage());

    // 3. زر الوضع الليلي السريع في الهيدر
    this.quickThemeBtn.addEventListener("click", () => this.toggleTheme());

    // 4. زر المفضلة في الهيدر
    this.headerBookmarksBtn.addEventListener("click", () => this.switchPage("bookmarks"));

    // 5. تبديل الصفحات المنفصلة (Home, Students, Teachers, Events, Bookmarks)
    this.pageTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const page = tab.dataset.page;
        this.switchPage(page);
      });
    });

    // روابط الفوتر
    document.querySelectorAll(".footer-nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.switchPage(link.dataset.page);
        window.scrollTo({ top: 120, behavior: 'smooth' });
      });
    });

    // 6. البحث المباشر
    this.searchInput.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.render();
    });

    // 7. الفرز
    this.sortSelect.addEventListener("change", (e) => {
      this.sortOrder = e.target.value;
      this.render();
    });

    // 8. إعادة ضبط البحث
    this.resetFiltersBtn.addEventListener("click", () => {
      this.searchInput.value = "";
      this.searchQuery = "";
      this.render();
    });

    // 9. مسح المفضلة
    this.clearBookmarksBtn.addEventListener("click", () => {
      if (confirm(this.settings.lang === "en" ? "Clear all saved articles?" : "هل أنت متأكد من مسح جميع الأخبار المحفوظة؟")) {
        this.bookmarks = [];
        this.saveBookmarks();
        this.updateBookmarksBadge();
        this.render();
        this.showToast(this.settings.lang === "en" ? "Bookmarks cleared" : "تم مسح قائمة المحفوظات");
      }
    });

    // 10. القائمة الجانبية (Settings Drawer)
    const openDrawer = () => {
      this.settingsDrawer.classList.add("open");
      this.drawerBackdrop.classList.add("show");
      document.body.style.overflow = "hidden";
    };

    const closeDrawer = () => {
      this.settingsDrawer.classList.remove("open");
      this.drawerBackdrop.classList.remove("show");
      document.body.style.overflow = "";
    };

    this.openSettingsBtn.addEventListener("click", openDrawer);
    this.footerSettingsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openDrawer();
    });
    this.closeSettingsBtn.addEventListener("click", closeDrawer);
    this.drawerBackdrop.addEventListener("click", closeDrawer);

    // تبديل اللغة من القائمة الجانبية
    this.langPills.forEach(pill => {
      pill.addEventListener("click", () => {
        this.settings.lang = pill.dataset.lang;
        this.saveSettings();
        this.applySettings();
        this.render();
      });
    });

    // تبديل الوضع الليلي من القائمة
    this.drawerDarkModeToggle.addEventListener("change", (e) => {
      this.settings.theme = e.target.checked ? "dark" : "light";
      this.saveSettings();
      this.applySettings();
    });

    // أحجام الخطوط
    this.fontSizeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.settings.fontSize = btn.dataset.size;
        this.saveSettings();
        this.applySettings();
      });
    });

    // سرعة السلايدر
    this.speedBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.settings.tickerSpeed = parseInt(btn.dataset.speed, 10);
        this.saveSettings();
        this.applySettings();
        this.resetTickerTimer();
      });
    });

    // استعادة الإعدادات
    this.resetAllSettingsBtn.addEventListener("click", () => {
      this.settings = { lang: "ar", theme: "light", fontSize: "normal", tickerSpeed: 10 };
      this.saveSettings();
      this.applySettings();
      this.resetTickerTimer();
      this.showToast("تمت استعادة الإعدادات الافتراضية");
    });

    // 11. أحداث سلايدر أخبار اليوم المتحركة
    this.tickerPrevBtn.addEventListener("click", () => {
      this.prevTickerItem();
      this.resetTickerTimer();
    });
    this.tickerNextBtn.addEventListener("click", () => {
      this.nextTickerItem();
      this.resetTickerTimer();
    });
    this.tickerPauseBtn.addEventListener("click", () => this.toggleTickerPlayPause());

    this.tickerWidget.addEventListener("mouseenter", () => { this.isTickerHovered = true; });
    this.tickerWidget.addEventListener("mouseleave", () => { this.isTickerHovered = false; });

    // 12. نافذة القارئ (Modal Reader)
    this.closeArticleModalBtn.addEventListener("click", () => this.closeArticleModal());
    this.articleModal.addEventListener("click", (e) => {
      if (e.target === this.articleModal) this.closeArticleModal();
    });

    this.modalCopyLinkBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href.split('#')[0] + `?news=${this.currentOpenArticleId || 1}`);
      this.showToast(this.settings.lang === "en" ? "Article link copied 📋" : "تم نسخ رابط الخبر بنجاح 📋");
    });

    this.modalPrintBtn.addEventListener("click", () => window.print());

    // زر حفظ المقال الحالي في المفضلة
    this.modalBookmarkToggle.addEventListener("click", () => {
      if (!this.currentOpenArticleId) return;
      this.toggleBookmark(this.currentOpenArticleId);
    });

    // زر القراءة الصوتية (TTS)
    this.modalTtsBtn.addEventListener("click", () => this.toggleSpeech());

    // 13. لوحة تحكم المبرمج السرية (Admin Modal)
    this.closeAdminModalBtn.addEventListener("click", () => this.closeAdminModal());
    this.adminNewsModal.addEventListener("click", (e) => {
      if (e.target === this.adminNewsModal) this.closeAdminModal();
    });

    this.adminTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        this.adminTabs.forEach(t => t.classList.remove("active"));
        this.adminTabContents.forEach(c => c.classList.remove("active"));
        tab.classList.add("active");
        const targetId = `admin-tab-${tab.dataset.tab}`;
        const targetEl = document.getElementById(targetId);
        if (targetEl) targetEl.classList.add("active");
      });
    });

    this.presetButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        this.presetButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.selectedPreset = btn.dataset.img;
        if (btn.dataset.img !== "custom") {
          this.newsImageInput.value = PRESET_IMAGE_MAP[btn.dataset.img] || "";
        } else {
          this.newsImageInput.value = "";
          this.newsImageInput.focus();
        }
      });
    });

    this.adminNewsForm.addEventListener("submit", (e) => this.handleAdminFormSubmit(e));
    this.cancelEditBtn.addEventListener("click", () => this.resetAdminForm());
    this.copyJsonBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(this.jsonExportArea.value);
      this.showToast("تم نسخ كود الـ JSON بنجاح 📋");
    });
    this.resetDefaultNewsBtn.addEventListener("click", () => this.resetToDefaultNews());

    // 14. أحداث المجلة المدرسية التفاعلية ثلاثية الأبعاد
    if (this.openMagazineBtn) {
      this.openMagazineBtn.addEventListener("click", () => this.openMagazineModal());
    }
    if (this.closeMagazineBtn) {
      this.closeMagazineBtn.addEventListener("click", () => this.closeMagazineModal());
    }
    if (this.magazineModal) {
      this.magazineModal.addEventListener("click", (e) => {
        if (e.target === this.magazineModal) this.closeMagazineModal();
      });
    }
    if (this.magazinePrintBtn) {
      this.magazinePrintBtn.addEventListener("click", () => window.print());
    }
    if (this.flipPrevBtn) {
      this.flipPrevBtn.addEventListener("click", () => this.goToMagazinePage(this.currentMagPage - 1));
    }
    if (this.flipNextBtn) {
      this.flipNextBtn.addEventListener("click", () => this.goToMagazinePage(this.currentMagPage + 1));
    }
    if (this.magSidePrevBtn) {
      this.magSidePrevBtn.addEventListener("click", () => this.goToMagazinePage(this.currentMagPage - 1));
    }
    if (this.magSideNextBtn) {
      this.magSideNextBtn.addEventListener("click", () => this.goToMagazinePage(this.currentMagPage + 1));
    }
    if (this.magSpreadPills) {
      this.magSpreadPills.forEach(pill => {
        pill.addEventListener("click", () => {
          const page = parseInt(pill.dataset.page, 10);
          this.goToMagazinePage(page);
        });
      });
    }
    if (this.tocEntries) {
      this.tocEntries.forEach(entry => {
        entry.addEventListener("click", () => {
          const targetSpread = parseInt(entry.dataset.jump, 10);
          this.goToMagazinePage(targetSpread);
        });
      });
    }

    // 15. تفاعلات المقال وتشجيع الطلاب (Reactions & Claps)
    this.reactionBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const reactionType = btn.dataset.reaction;
        this.handleReactionClick(reactionType);
      });
    });

    // أحداث لوحة المفاتيح
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeDrawer();
        this.closeArticleModal();
        this.closeAdminModal();
        this.closeMagazineModal();
        this.stopSpeech();
      }

      // تقليب صفحات المجلة بالأسهم إذا كانت نافذة المجلة مفتوحة
      if (this.magazineModal && (this.magazineModal.open || this.magazineModal.hasAttribute("open"))) {
        const isEn = this.settings.lang === "en";
        if (e.key === "ArrowLeft") {
          this.goToMagazinePage(isEn ? this.currentMagPage - 1 : this.currentMagPage + 1);
        } else if (e.key === "ArrowRight") {
          this.goToMagazinePage(isEn ? this.currentMagPage + 1 : this.currentMagPage - 1);
        }
      }
    });
  }

  // التبديل بين الصفحات المنفصلة
  switchPage(page) {
    this.currentPage = page;
    this.pageTabs.forEach(tab => {
      const isActive = tab.dataset.page === page;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    this.pagePanels.forEach(panel => {
      panel.classList.toggle("active", panel.id === `view-page-${page}`);
    });

    this.render();
    window.scrollTo({ top: 120, behavior: 'smooth' });
  }

  /**
   * ===================================================================================================
   * 5. سلايدر أخبار اليوم المتحرك كل 10 ثوانٍ (Today's Live Stories Ticker)
   * ===================================================================================================
   */
  initTodayTicker() {
    this.tickerItems = [...this.newsList];
    if (this.tickerItems.length === 0) return;
    this.renderTickerDots();
    this.renderCurrentTickerCard();
    this.startTickerTimer();
  }

  renderTickerDots() {
    const count = Math.min(this.tickerItems.length, 5);
    this.sliderDotsContainer.innerHTML = Array.from({ length: count }).map((_, i) => {
      return `<button class="slider-dot ${i === this.tickerIndex ? 'active' : ''}" data-index="${i}" aria-label="شريحة ${i + 1}"></button>`;
    }).join("");

    this.sliderDotsContainer.querySelectorAll(".slider-dot").forEach(dot => {
      dot.addEventListener("click", () => {
        this.tickerIndex = parseInt(dot.dataset.index, 10);
        this.renderCurrentTickerCard();
        this.resetTickerTimer();
      });
    });
  }

  renderCurrentTickerCard() {
    if (this.tickerItems.length === 0) return;
    if (this.tickerIndex >= this.tickerItems.length) this.tickerIndex = 0;
    if (this.tickerIndex < 0) this.tickerIndex = this.tickerItems.length - 1;

    const item = this.tickerItems[this.tickerIndex];
    const catClass = this.getCategoryClass(item.category);
    const dateFormatted = this.formatDate(item.date);
    const isEn = this.settings.lang === "en";

    this.tickerViewport.innerHTML = `
      <div class="ticker-slide-card" data-id="${item.id}">
        <div class="ticker-media-box">
          <img src="${this.escapeHTML(item.image)}" alt="${this.escapeHTML(item.title)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80'">
          <div class="ticker-card-badge">
            <span class="category-pill ${catClass}">${this.escapeHTML(item.category)}</span>
          </div>
        </div>
        <div class="ticker-time-line">
          <span>📅 ${dateFormatted}</span>
          <span>•</span>
          <span>⏱️ ${this.escapeHTML(item.readTime)}</span>
        </div>
        <h4 class="ticker-slide-title" title="${this.escapeHTML(item.title)}">${this.escapeHTML(item.title)}</h4>
        <p class="ticker-slide-excerpt">${this.escapeHTML(item.summary)}</p>
        <button type="button" class="ticker-open-btn">
          <span>${isEn ? "Read Full Story" : "عرض التفاصيل الكاملة"}</span>
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
    `;

    const openBtn = this.tickerViewport.querySelector(".ticker-open-btn");
    const titleBtn = this.tickerViewport.querySelector(".ticker-slide-title");
    const openHandler = () => this.openArticleModal(item.id);
    if (openBtn) openBtn.addEventListener("click", openHandler);
    if (titleBtn) titleBtn.addEventListener("click", openHandler);

    this.sliderDotsContainer.querySelectorAll(".slider-dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === this.tickerIndex);
    });
  }

  startTickerTimer() {
    this.stopTickerTimer();
    const duration = this.settings.tickerSpeed; // 10 ثوانٍ
    let elapsed = 0;

    this.tickerInterval = setInterval(() => {
      if (this.isTickerPaused || this.isTickerHovered) return;

      elapsed += 0.1;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);
      if (this.tickerProgressBar) {
        this.tickerProgressBar.style.width = `${progressPercent}%`;
      }

      const remaining = Math.max(Math.ceil(duration - elapsed), 0);
      if (this.sliderCountdownText) {
        this.sliderCountdownText.textContent = `${remaining}s`;
      }

      if (elapsed >= duration) {
        elapsed = 0;
        this.nextTickerItem();
      }
    }, 100);
  }

  stopTickerTimer() {
    if (this.tickerInterval) {
      clearInterval(this.tickerInterval);
      this.tickerInterval = null;
    }
  }

  resetTickerTimer() {
    if (this.tickerProgressBar) this.tickerProgressBar.style.width = "0%";
    if (this.sliderCountdownText) this.sliderCountdownText.textContent = `${this.settings.tickerSpeed}s`;
    this.startTickerTimer();
  }

  nextTickerItem() {
    this.tickerIndex = (this.tickerIndex + 1) % this.tickerItems.length;
    this.renderCurrentTickerCard();
  }

  prevTickerItem() {
    this.tickerIndex = (this.tickerIndex - 1 + this.tickerItems.length) % this.tickerItems.length;
    this.renderCurrentTickerCard();
  }

  toggleTickerPlayPause() {
    this.isTickerPaused = !this.isTickerPaused;
    if (this.pauseIcon && this.playIcon) {
      this.pauseIcon.classList.toggle("hidden", this.isTickerPaused);
      this.playIcon.classList.toggle("hidden", !this.isTickerPaused);
    }
    this.showToast(this.isTickerPaused ? "تم إيقاف تقليب الأخبار مؤقتاً ⏸️" : "تم استئناف التقليب التلقائي ▶️");
  }

  /**
   * ===================================================================================================
   * 6. نظام رسم الصفحات وسحب الأخبار (Cloud News Renderer)
   * ===================================================================================================
   */
  filterAndSort(list) {
    let result = [...list];

    if (this.searchQuery) {
      result = result.filter(item => {
        return (
          item.title.toLowerCase().includes(this.searchQuery) ||
          item.summary.toLowerCase().includes(this.searchQuery) ||
          item.author.toLowerCase().includes(this.searchQuery)
        );
      });
    }

    result.sort((a, b) => {
      if (this.sortOrder === "newest") return new Date(b.date) - new Date(a.date);
      if (this.sortOrder === "oldest") return new Date(a.date) - new Date(b.date);
      if (this.sortOrder === "readtime") return (parseInt(a.readTime) || 3) - (parseInt(b.readTime) || 3);
      return 0;
    });

    return result;
  }

  updateBadges() {
    const total = this.newsList.length;
    const students = this.newsList.filter(n => n.category === "أخبار الطلاب").length;
    const teachers = this.newsList.filter(n => n.category === "المعلمين").length;
    const events = this.newsList.filter(n => n.category === "الفعاليات والإمتحانات").length;
    const bookmarks = this.bookmarks.length;

    if (this.countHome) this.countHome.textContent = total;
    if (this.countStudents) this.countStudents.textContent = students;
    if (this.countTeachers) this.countTeachers.textContent = teachers;
    if (this.countEvents) this.countEvents.textContent = events;
    if (this.countBookmarks) this.countBookmarks.textContent = bookmarks;

    const sPageCount = document.getElementById("students-page-count");
    if (sPageCount) sPageCount.textContent = `${students} ${this.settings.lang === "en" ? "reports" : "تقرير"}`;
    const tPageCount = document.getElementById("teachers-page-count");
    if (tPageCount) tPageCount.textContent = `${teachers} ${this.settings.lang === "en" ? "announcements" : "إعلان"}`;
    const ePageCount = document.getElementById("events-page-count");
    if (ePageCount) ePageCount.textContent = `${events} ${this.settings.lang === "en" ? "events" : "فعالية"}`;
  }

  render() {
    this.updateBadges();

    // 1. رسم صفحة الرئيسية (Home)
    if (this.currentPage === "home") {
      const homeList = this.filterAndSort(this.newsList);
      this.visibleCount.textContent = homeList.length;
      this.renderHeroSection(homeList);
      this.renderCloudGrid(homeList, this.newsGridContainer);
    } 
    // 2. رسم صفحة أخبار الطلاب
    else if (this.currentPage === "students") {
      const studentNews = this.filterAndSort(this.newsList.filter(n => n.category === "أخبار الطلاب"));
      this.renderCloudGrid(studentNews, this.studentsGridContainer);
    }
    // 3. رسم صفحة المعلمين
    else if (this.currentPage === "teachers") {
      const teacherNews = this.filterAndSort(this.newsList.filter(n => n.category === "المعلمين"));
      this.renderCloudGrid(teacherNews, this.teachersGridContainer);
    }
    // 4. رسم صفحة الفعاليات والإمتحانات
    else if (this.currentPage === "events") {
      const eventNews = this.filterAndSort(this.newsList.filter(n => n.category === "الفعاليات والإمتحانات"));
      this.renderCloudGrid(eventNews, this.eventsGridContainer);
    }
    // 5. رسم صفحة المفضلة
    else if (this.currentPage === "bookmarks") {
      const bookmarkedArticles = this.filterAndSort(this.newsList.filter(n => this.bookmarks.includes(n.id)));
      this.renderCloudGrid(bookmarkedArticles, this.bookmarksGridContainer);
    }
  }

  renderHeroSection(list) {
    let heroItem = this.newsList.find(item => item.isFeatured) || this.newsList[0];
    if (!heroItem) {
      this.heroSection.style.display = "none";
      return;
    }

    this.heroSection.style.display = "block";
    const catClass = this.getCategoryClass(heroItem.category);
    const dateFormatted = this.formatDate(heroItem.date);
    const isEn = this.settings.lang === "en";

    this.heroSection.innerHTML = `
      <div class="hero-card" data-id="${heroItem.id}" tabindex="0" role="article" aria-label="${this.escapeHTML(heroItem.title)}">
        <div class="hero-image-wrap">
          <img src="${this.escapeHTML(heroItem.image)}" alt="${this.escapeHTML(heroItem.title)}" loading="eager" onerror="this.src='https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80'">
          <div class="hero-overlay-tag">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span>${isEn ? "Featured Story" : "خبر الأسبوع المميز"}</span>
          </div>
        </div>
        <div class="hero-content">
          <div>
            <div class="hero-meta-strip">
              <span class="category-pill ${catClass}">${this.escapeHTML(heroItem.category)}</span>
              <span>📅 ${dateFormatted}</span>
              <span class="meta-separator">•</span>
              <span>⏱️ ${this.escapeHTML(heroItem.readTime)}</span>
            </div>
            <h2 class="hero-title">${this.escapeHTML(heroItem.title)}</h2>
            <p class="hero-summary">${this.escapeHTML(heroItem.summary)}</p>
          </div>
          <div class="hero-footer-bar">
            <div class="hero-author">
              <div class="author-avatar-sm">${this.escapeHTML(heroItem.author.charAt(0))}</div>
              <div class="author-details">
                <span class="author-name-text">${this.escapeHTML(heroItem.author)}</span>
                <span class="author-role-text">${isEn ? "Editorial Desk" : "إدارة التحرير والمتابعة"}</span>
              </div>
            </div>
            <div class="read-more-link">
              <span>${isEn ? "Read Full Article" : "قراءة الخبر كاملاً"}</span>
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `;

    const heroCard = this.heroSection.querySelector(".hero-card");
    if (heroCard) {
      heroCard.addEventListener("click", () => this.openArticleModal(heroItem.id));
    }
  }

  // رسم شبكة سحب الأخبار في أي حاوية صفحة
  renderCloudGrid(list, container) {
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = "";
      if (this.emptyState) this.emptyState.classList.remove("hidden");
      return;
    }

    if (this.emptyState) this.emptyState.classList.add("hidden");

    const isEn = this.settings.lang === "en";

    container.innerHTML = list.map(item => {
      const catClass = this.getCategoryClass(item.category);
      const dateFormatted = this.formatDate(item.date);
      const isBookmarked = this.bookmarks.includes(item.id);

      return `
        <article class="news-cloud-card" data-id="${item.id}" tabindex="0" role="article" aria-label="${this.escapeHTML(item.title)}">
          <div class="cloud-media-thumb">
            <img src="${this.escapeHTML(item.image)}" alt="${this.escapeHTML(item.title)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80'">
          </div>
          <div class="cloud-content">
            <div class="cloud-top-row">
              <span class="category-pill ${catClass}">${this.escapeHTML(item.category)}</span>
              <span>📅 ${dateFormatted}</span>
              <span>•</span>
              <span>⏱️ ${this.escapeHTML(item.readTime)}</span>
              ${isBookmarked ? '<span title="محفوظ في المفضلة">⭐</span>' : ''}
            </div>
            <h3 class="cloud-headline-title">${this.escapeHTML(item.title)}</h3>
            <p class="cloud-summary-snippet">${this.escapeHTML(item.summary)}</p>
            <div class="cloud-bottom-meta">
              <div class="cloud-author-pill">
                <span class="cloud-avatar-dot">${this.escapeHTML(item.author.charAt(0))}</span>
                <span>${this.escapeHTML(item.author)}</span>
              </div>
              <div class="cloud-action-hint">
                <span>${isEn ? "Read Details" : "اضغط للتفاصيل"}</span>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");

    container.querySelectorAll(".news-cloud-card").forEach(card => {
      const id = parseInt(card.dataset.id, 10);
      card.addEventListener("click", () => this.openArticleModal(id));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.openArticleModal(id);
        }
      });
    });
  }

  /**
   * ===================================================================================================
   * 7. نافذة القارئ والقراءة الصوتية والمفضلة (Reader & TTS)
   * ===================================================================================================
   */
  openArticleModal(id) {
    const article = this.newsList.find(n => n.id === id);
    if (!article) return;

    this.currentOpenArticleId = article.id;
    this.stopSpeech();

    const catClass = this.getCategoryClass(article.category);
    this.modalCategoryBadge.className = `category-pill ${catClass}`;
    this.modalCategoryBadge.textContent = article.category;
    this.modalDate.textContent = `📅 ${this.formatDate(article.date)}`;
    this.modalReadTime.textContent = `⏱️ ${article.readTime}`;
    this.modalArticleTitle.textContent = article.title;
    this.modalAuthorAvatar.textContent = article.author.charAt(0);
    this.modalAuthorName.textContent = article.author;
    this.modalArticleImage.src = article.image;
    this.modalArticleImage.alt = article.title;
    this.modalImageCaption.textContent = `${this.settings.lang === "en" ? "Official coverage:" : "تغطية موثقة من:"} ${article.title}`;
    this.modalArticleLead.textContent = article.summary;
    this.modalArticleContent.innerHTML = article.content;
    this.modalTagChip.textContent = article.category;

    // تمييز زر المفضلة
    const isBookmarked = this.bookmarks.includes(article.id);
    this.modalBookmarkToggle.classList.toggle("active", isBookmarked);

    // تحميل تفاعلات المقال الحالية
    this.loadArticleReactions(article.id);

    if (typeof this.articleModal.showModal === "function") {
      this.articleModal.showModal();
    } else {
      this.articleModal.setAttribute("open", "true");
    }
    document.body.style.overflow = "hidden";
  }

  closeArticleModal() {
    this.stopSpeech();
    if (typeof this.articleModal.close === "function") {
      this.articleModal.close();
    } else {
      this.articleModal.removeAttribute("open");
    }
    document.body.style.overflow = "";
    this.currentOpenArticleId = null;
  }

  toggleBookmark(id) {
    const idx = this.bookmarks.indexOf(id);
    if (idx > -1) {
      this.bookmarks.splice(idx, 1);
      this.modalBookmarkToggle.classList.remove("active");
      this.showToast(this.settings.lang === "en" ? "Removed from bookmarks" : "تمت إزالة الخبر من المفضلة");
    } else {
      this.bookmarks.push(id);
      this.modalBookmarkToggle.classList.add("active");
      this.showToast(this.settings.lang === "en" ? "Saved to bookmarks ⭐" : "تم حفظ الخبر في المفضلة ⭐");
    }
    this.saveBookmarks();
    this.updateBookmarksBadge();
    this.render();
  }

  updateBookmarksBadge() {
    if (this.bookmarksCountBadge) {
      this.bookmarksCountBadge.textContent = this.bookmarks.length;
    }
  }

  // القارئ الصوتي للمقال (Text-to-Speech)
  toggleSpeech() {
    if (!this.synth) {
      this.showToast("المتصفح لا يدعم القارئ الصوتي");
      return;
    }

    if (this.isSpeaking) {
      this.stopSpeech();
      return;
    }

    const title = this.modalArticleTitle.textContent;
    const lead = this.modalArticleLead.textContent;
    const textToRead = `${title}. ${lead}`;

    this.currentUtterance = new SpeechSynthesisUtterance(textToRead);
    this.currentUtterance.lang = this.settings.lang === "en" ? "en-US" : "ar-SA";
    this.currentUtterance.rate = 0.95;

    this.currentUtterance.onstart = () => {
      this.isSpeaking = true;
      this.modalTtsBtn.classList.add("speaking");
      this.showToast("جاري الاستماع للخبر بصوت ذكي 🎧");
    };

    this.currentUtterance.onend = () => {
      this.stopSpeech();
    };

    this.currentUtterance.onerror = () => {
      this.stopSpeech();
    };

    this.synth.speak(this.currentUtterance);
  }

  stopSpeech() {
    if (this.synth && this.isSpeaking) {
      this.synth.cancel();
      this.isSpeaking = false;
      if (this.modalTtsBtn) this.modalTtsBtn.classList.remove("speaking");
    }
  }

  /**
   * ===================================================================================================
   * 8. المجلة المدرسية التفاعلية ثلاثية الأبعاد (Digital Flipbook Magazine)
   * ===================================================================================================
   */
  openMagazineModal() {
    this.goToMagazinePage(1);
    if (typeof this.magazineModal.showModal === "function") {
      this.magazineModal.showModal();
    } else {
      this.magazineModal.setAttribute("open", "true");
    }
    document.body.style.overflow = "hidden";
  }

  closeMagazineModal() {
    if (!this.magazineModal) return;
    if (typeof this.magazineModal.close === "function") {
      this.magazineModal.close();
    } else {
      this.magazineModal.removeAttribute("open");
    }
    document.body.style.overflow = "";
  }

  goToMagazinePage(pageNum) {
    if (pageNum < 1) pageNum = 1;
    if (pageNum > this.totalMagPages) pageNum = this.totalMagPages;
    this.currentMagPage = pageNum;

    // تحديث الصفحات النشطة
    if (this.magPages) {
      this.magPages.forEach(page => {
        const pNum = parseInt(page.dataset.pageNum, 10);
        page.classList.toggle("active", pNum === pageNum);
      });
    }

    // تحديث أزرار الملفات التفاعلية (Spread Pills)
    if (this.magSpreadPills) {
      this.magSpreadPills.forEach(pill => {
        const pNum = parseInt(pill.dataset.page, 10);
        pill.classList.toggle("active", pNum === pageNum);
      });
    }

    // عناوين الملفات المفتوحة
    const spreadTitlesAr = [
      "الملف 1 من 4 • غلاف العدد والافتتاحية الرسمية",
      "الملف 2 من 4 • أسبوع الابتكار وركن الكادر الأكاديمي",
      "الملف 3 من 4 • البطولات الرياضية ومخيم وادي دجلة",
      "الملف 4 من 4 • جداول الامتحانات والختام والاعتماد"
    ];
    const spreadTitlesEn = [
      "Spread 1 of 4 • Grand Cover & Editorial Welcome",
      "Spread 2 of 4 • Science Fair & Faculty Workshop",
      "Spread 3 of 4 • Sports Champions & Eco-Scouting",
      "Spread 4 of 4 • Examination Timetable & Official Seal"
    ];

    // تحديث نص مؤشر الصفحة
    const isEn = this.settings.lang === "en";
    if (this.magCurrentPageText) {
      this.magCurrentPageText.textContent = isEn
        ? spreadTitlesEn[pageNum - 1]
        : spreadTitlesAr[pageNum - 1];
    }

    // تمييز حالة أزرار التالي والسابق السفلية والجانبية
    const isFirst = pageNum <= 1;
    const isLast = pageNum >= this.totalMagPages;

    if (this.flipPrevBtn) {
      this.flipPrevBtn.disabled = isFirst;
    }
    if (this.flipNextBtn) {
      this.flipNextBtn.disabled = isLast;
    }
    if (this.magSidePrevBtn) {
      this.magSidePrevBtn.style.display = isFirst ? "none" : "flex";
    }
    if (this.magSideNextBtn) {
      this.magSideNextBtn.style.display = isLast ? "none" : "flex";
    }

    // تمرير هادئ لأعلى المجلة عند التقليب
    const viewport = document.getElementById("flipbook-viewport");
    if (viewport) {
      viewport.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  /**
   * ===================================================================================================
   * 8.1 نظام التفاعلات والتشجيع للمقالات (Article Reactions & Claps System)
   * ===================================================================================================
   */
  loadArticleReactions(articleId) {
    if (!articleId) return;

    // قيم افتراضية متوازنة لكل خبر
    const defaultReactions = {
      claps: 142 + (articleId * 13) % 40,
      ideas: 88 + (articleId * 9) % 30,
      pride: 215 + (articleId * 17) % 50,
      love: 176 + (articleId * 11) % 35
    };

    if (!this.reactionsData[articleId]) {
      this.reactionsData[articleId] = {
        counts: defaultReactions,
        userReacted: {}
      };
      this.saveReactions();
    }

    const articleData = this.reactionsData[articleId];

    ["claps", "ideas", "pride", "love"].forEach(type => {
      const countEl = document.getElementById(`count-reaction-${type}`);
      const btn = document.querySelector(`.reaction-pill-btn[data-reaction="${type}"]`);
      if (countEl && articleData.counts && articleData.counts[type] !== undefined) {
        countEl.textContent = articleData.counts[type];
      }
      if (btn) {
        const hasReacted = Boolean(articleData.userReacted && articleData.userReacted[type]);
        btn.classList.toggle("user-reacted", hasReacted);
      }
    });
  }

  handleReactionClick(reactionType) {
    if (!this.currentOpenArticleId) return;
    const articleId = this.currentOpenArticleId;

    if (!this.reactionsData[articleId]) {
      this.loadArticleReactions(articleId);
    }

    const data = this.reactionsData[articleId];
    if (!data.userReacted) data.userReacted = {};
    if (!data.counts) data.counts = {};

    const hasReacted = Boolean(data.userReacted[reactionType]);

    if (hasReacted) {
      data.counts[reactionType] = Math.max(0, (data.counts[reactionType] || 1) - 1);
      data.userReacted[reactionType] = false;
    } else {
      data.counts[reactionType] = (data.counts[reactionType] || 0) + 1;
      data.userReacted[reactionType] = true;

      const emojisAr = {
        claps: "👏 تشجيعك وصل للطلاب!",
        ideas: "💡 شكراً لإلهامك!",
        pride: "🏆 فخر المدرسة المصرية للغات دائماً!",
        love: "❤️ تم تسجيل إعجابك بالمقال!"
      };
      const emojisEn = {
        claps: "👏 Your cheer was sent!",
        ideas: "💡 Inspiring reaction added!",
        pride: "🏆 Proud of Egyptian Language School!",
        love: "❤️ Loved this story!"
      };
      const msg = this.settings.lang === "en" ? emojisEn[reactionType] : emojisAr[reactionType];
      this.showToast(msg);
    }

    this.saveReactions();
    this.loadArticleReactions(articleId);
  }

  /**
   * ===================================================================================================
   * 9. لوحة تحكم المبرمج السرية لإدارة وتعديل وتصدير الأخبار
   * ===================================================================================================
   */
  openAdminModal() {
    this.resetAdminForm();
    this.renderAdminNewsList();
    this.updateJsonExport();

    if (typeof this.adminNewsModal.showModal === "function") {
      this.adminNewsModal.showModal();
    } else {
      this.adminNewsModal.setAttribute("open", "true");
    }
    document.body.style.overflow = "hidden";
  }

  closeAdminModal() {
    if (typeof this.adminNewsModal.close === "function") {
      this.adminNewsModal.close();
    } else {
      this.adminNewsModal.removeAttribute("open");
    }
    document.body.style.overflow = "";
  }

  renderAdminNewsList() {
    this.adminTotalNewsCount.textContent = this.newsList.length;

    this.adminNewsCardsList.innerHTML = this.newsList.map(item => {
      return `
        <div class="admin-news-row" data-id="${item.id}">
          <div class="admin-row-info">
            <h5 class="admin-row-title">${this.escapeHTML(item.title)}</h5>
            <div class="admin-row-meta">
              <span>🏷️ ${this.escapeHTML(item.category)}</span>
              <span>📅 ${this.escapeHTML(item.date)}</span>
              <span>✍️ ${this.escapeHTML(item.author)}</span>
              ${item.isFeatured ? '<span style="color:#2563EB; font-weight:800;">⭐ خبر الأسبوع المميز</span>' : ''}
            </div>
          </div>
          <div class="admin-row-actions">
            <button type="button" class="btn-edit-sm" data-id="${item.id}">✏️ تعديل</button>
            <button type="button" class="btn-delete-sm" data-id="${item.id}">🗑️ حذف</button>
          </div>
        </div>
      `;
    }).join("");

    this.adminNewsCardsList.querySelectorAll(".btn-edit-sm").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        this.editArticle(id);
      });
    });

    this.adminNewsCardsList.querySelectorAll(".btn-delete-sm").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        this.deleteArticle(id);
      });
    });
  }

  editArticle(id) {
    const article = this.newsList.find(n => n.id === id);
    if (!article) return;

    this.editingArticleId.value = article.id;
    document.getElementById("news-title-input").value = article.title;
    document.getElementById("news-category-select").value = article.category;
    document.getElementById("news-author-input").value = article.author;
    document.getElementById("news-date-input").value = article.date;
    document.getElementById("news-readtime-input").value = article.readTime;
    document.getElementById("news-summary-input").value = article.summary;
    document.getElementById("news-content-input").value = article.content.replace(/<[^>]*>/g, "\n\n").trim();
    this.newsImageInput.value = article.image;
    document.getElementById("news-featured-toggle").checked = article.isFeatured;

    this.submitNewsBtn.querySelector("span").textContent = "حفظ التعديلات على الخبر";
    this.cancelEditBtn.classList.remove("hidden");

    // تحويل التبويب إلى الإضافة والتعديل
    const editTab = document.querySelector('.admin-tab[data-tab="add-edit"]');
    if (editTab) editTab.click();
  }

  deleteArticle(id) {
    if (confirm("هل أنت متأكد من رغبتك في حذف هذا الخبر نهائياً من المنصة؟")) {
      this.newsList = this.newsList.filter(n => n.id !== id);
      this.saveNews();
      this.tickerItems = [...this.newsList];
      this.renderAdminNewsList();
      this.updateJsonExport();
      this.render();
      this.showToast("تم حذف الخبر بنجاح 🗑️");
    }
  }

  resetAdminForm() {
    this.adminNewsForm.reset();
    this.editingArticleId.value = "";
    this.submitNewsBtn.querySelector("span").textContent = "نشر الخبر في المنصة";
    this.cancelEditBtn.classList.add("hidden");
    this.initDateDisplay();
  }

  handleAdminFormSubmit(e) {
    e.preventDefault();

    const title = document.getElementById("news-title-input").value.trim();
    const category = document.getElementById("news-category-select").value;
    const author = document.getElementById("news-author-input").value.trim();
    const date = document.getElementById("news-date-input").value;
    const readTime = document.getElementById("news-readtime-input").value.trim();
    const summary = document.getElementById("news-summary-input").value.trim();
    const rawContent = document.getElementById("news-content-input").value.trim();
    let image = this.newsImageInput.value.trim();
    const isFeatured = document.getElementById("news-featured-toggle").checked;
    const editId = this.editingArticleId.value;

    if (!title || !author || !summary || !rawContent) {
      this.showToast("يرجى ملء جميع الحقول المطلوبة ⚠️");
      return;
    }

    if (!image) {
      image = PRESET_IMAGE_MAP[this.selectedPreset] || PRESET_IMAGE_MAP.students;
    }

    let formattedContent = rawContent;
    if (!rawContent.includes("<p>")) {
      formattedContent = rawContent.split("\n\n").map(p => `<p>${this.escapeHTML(p.trim())}</p>`).join("");
    }

    if (isFeatured) {
      this.newsList.forEach(n => n.isFeatured = false);
    }

    if (editId) {
      // تعديل خبر حالي
      const article = this.newsList.find(n => n.id === parseInt(editId, 10));
      if (article) {
        article.title = title;
        article.category = category;
        article.author = author;
        article.date = date;
        article.readTime = readTime;
        article.summary = summary;
        article.content = formattedContent;
        article.image = image;
        article.isFeatured = isFeatured;
      }
      this.showToast("تم تحديث الخبر بنجاح! ✏️");
    } else {
      // إضافة خبر جديد
      const newArticle = {
        id: Date.now(),
        title, category, author,
        date: date || new Date().toISOString().split("T")[0],
        readTime: readTime || "3 دقائق",
        isFeatured, image, summary,
        content: formattedContent
      };
      this.newsList.unshift(newArticle);
      this.showToast("تم نشر الخبر بنجاح في المنصة! 🎉");
    }

    this.saveNews();
    this.tickerItems = [...this.newsList];
    this.resetAdminForm();
    this.renderAdminNewsList();
    this.updateJsonExport();
    this.render();
  }

  // تحديث كود الـ JSON للتصدير
  updateJsonExport() {
    if (this.jsonExportArea) {
      this.jsonExportArea.value = JSON.stringify(this.newsList, null, 2);
    }
  }

  resetToDefaultNews() {
    if (confirm("استعادة الأخبار النموذجية الأصلية؟ سيتم استبدال الأخبار الحالية.")) {
      this.newsList = [...DEFAULT_NEWS_DATA];
      this.saveNews();
      this.tickerItems = [...this.newsList];
      this.tickerIndex = 0;
      this.renderAdminNewsList();
      this.updateJsonExport();
      this.render();
      this.showToast("تمت استعادة الأخبار الأصلية بنجاح 🔄");
    }
  }

  /**
   * ===================================================================================================
   * 9. الدوال المساعدة وتنسيق التواريخ
   * ===================================================================================================
   */
  getCategoryClass(category) {
    if (category === "أخبار الطلاب" || category === "Students") return "students";
    if (category === "المعلمين" || category === "Faculty") return "teachers";
    if (category === "الفعاليات والإمتحانات" || category === "Exams & Events") return "events";
    return "students";
  }

  formatDate(dateString) {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      const locale = this.settings.lang === "en" ? "en-US" : "ar-EG";
      return date.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' });
    } catch {
      return dateString;
    }
  }

  escapeHTML(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  showToast(message) {
    this.toastMessage.textContent = message;
    this.toast.classList.add("show");
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toast.classList.remove("show");
    }, 3500);
  }
}

// بدء التطبيق
document.addEventListener("DOMContentLoaded", () => {
  window.elsApp = new NewsApp();
});
