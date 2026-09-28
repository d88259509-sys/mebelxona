/**
 * Mebelxona Complete Product Catalog & Storefront Data
 * 66 Furniture Items, 12 Categories, 6 Room Sets, 6 Reviews, 6 FAQs
 */
(function() {
  window.CATEGORIES = [
    { id: 'all', key: 'catAll' },
    { id: 'sofas', key: 'catSofas' },
    { id: 'beds', key: 'catBeds' },
    { id: 'tables', key: 'catTables' },
    { id: 'chairs', key: 'catChairs' },
    { id: 'wardrobes', key: 'catWardrobes' },
    { id: 'kitchen', key: 'catKitchen' },
    { id: 'office', key: 'catOffice' },
    { id: 'kids', key: 'catKids' },
    { id: 'living', key: 'catLiving' },
    { id: 'bathroom', key: 'catBathroom' },
    { id: 'outdoor', key: 'catOutdoor' },
    { id: 'hallway', key: 'catHallway' }
  ];

  // Helper color palettes
  const OAK_PALETTE = [
    { hex: '#d4a373', name: { en: 'Golden Oak', ru: 'Золотистый дуб', uz: 'Oltinrang eman' } },
    { hex: '#7c5e42', name: { en: 'Dark Walnut', ru: 'Темный орех', uz: "To'q yong'oq" } },
    { hex: '#e2d9cc', name: { en: 'Bleached Ash', ru: 'Беленый ясень', uz: 'Oqartirilgan shumtol' } },
    { hex: '#374151', name: { en: 'Smoked Charcoal', ru: 'Мореный графит', uz: 'Tutunrang grafit' } }
  ];

  const FABRIC_PALETTE = [
    { hex: '#d4a373', name: { en: 'Warm Sand Linen', ru: 'Песочный лен', uz: 'Qumrang zigir mato' } },
    { hex: '#4b5563', name: { en: 'Nordic Slate', ru: 'Скандинавский серый', uz: 'Shimoliy kulrang' } },
    { hex: '#2f4858', name: { en: 'Deep Ocean Blue', ru: 'Морская глубина', uz: "To'q ko'k okean" } },
    { hex: '#3b5343', name: { en: 'Sage Green', ru: 'Шалфейный зеленый', uz: 'Shalfey yashili' } }
  ];

  const LEATHER_PALETTE = [
    { hex: '#8c5828', name: { en: 'Cognac Leather', ru: 'Коньячная кожа', uz: 'Konyak tusli teri' } },
    { hex: '#3f2e22', name: { en: 'Espresso Brown', ru: 'Шоколадный эспрессо', uz: "To'q shokolad" } },
    { hex: '#1f2937', name: { en: 'Midnight Black', ru: 'Глубокий черный', uz: 'Tungi qora' } },
    { hex: '#d4a373', name: { en: 'Tan Camel', ru: 'Верблюжий песок', uz: 'Tuyarang qum' } }
  ];

  const PINE_PALETTE = [
    { hex: '#e6cca3', name: { en: 'Natural Pine', ru: 'Натуральная сосна', uz: "Tabiiy qarag'ay" } },
    { hex: '#c28b58', name: { en: 'Amber Glaze', ru: 'Янтарный лак', uz: 'Qahrabo sirlama' } },
    { hex: '#fdfbf7', name: { en: 'Nordic White Wash', ru: 'Скандинавский белый', uz: 'Oq shimoliy sirlama' } },
    { hex: '#4a5568', name: { en: 'Muted Forest Grey', ru: 'Лесной серый', uz: "O'rmon kulrangi" } }
  ];

  // 66 distinct furniture products across 12 categories (5-6 items each)
  window.PRODUCTS = [
    // --- 1. SOFAS (6 items) ---
    {
      id: 'sofa-1',
      category: 'sofas',
      svgType: 'sofa',
      names: {
        en: 'Nordic Minimalist 3-Seater Sofa',
        ru: 'Скандинавский 3-местный диван Nordic',
        uz: 'Nordic minimal 3 kishilik divan'
      },
      descriptions: {
        en: 'Solid beech internal frame, layered high-resilience memory foam, and natural washable linen. Elegant slanted oak feet with brass caps.',
        ru: 'Каркас из массива бука камерной сушки, ортопедическая пена высокой плотности и съемные чехлы из натурального льна. Конусные дубовые ножки.',
        uz: 'Quritilgan qoraqayin karkasi, ortopedik zich ko‘pik va yechib yuviladigan zig‘ir mato. Guruch qoplamali qiya eman oyoqlar.'
      },
      material: 'oak',
      dimensions: '220 × 95 × 85 cm',
      price: 890,
      productionTime: '12-14',
      warranty: 5,
      colors: FABRIC_PALETTE,
      badge: 'bestseller',
      rating: 4.9
    },
    {
      id: 'sofa-2',
      category: 'sofas',
      svgType: 'sofa',
      names: {
        en: 'Chesterfield Artisan Leather Sofa',
        ru: 'Кожаный диван Chesterfield Artisan',
        uz: 'Chesterfield klassik charm divan'
      },
      descriptions: {
        en: 'Deep hand-tufted diamond buttons in genuine Italian full-grain leather. Crafted with hand-tied coil springs for lifelong heirloom comfort.',
        ru: 'Глубокая каретная стяжка ручной работы из натуральной итальянской кожи. Пружинный блок ручной вязки для безупречного комфорта.',
        uz: 'Haqiqiy Italiya charmidan qo‘lda tikilgan chuqur tugmali qoplama. Mustahkam prujinali blok bilan umrbod qulaylik ta’minlaydi.'
      },
      material: 'leather',
      dimensions: '235 × 100 × 78 cm',
      price: 1650,
      productionTime: '16-20',
      warranty: 5,
      colors: LEATHER_PALETTE,
      badge: null,
      rating: 5.0
    },
    {
      id: 'sofa-3',
      category: 'sofas',
      svgType: 'sofa',
      names: {
        en: 'Curved Bouclé Velvet Lounge Sofa',
        ru: 'Изогнутый диван из букле Velvet Lounge',
        uz: 'Yoy shaklidagi bukle baxmal divan'
      },
      descriptions: {
        en: 'Architectural sculptural silhouette wrapped in tactile bouclé texture. Creates a stunning conversation centerpiece in modern spacious living rooms.',
        ru: 'Скульптурный изогнутый силуэт в тактильной ткани букле. Станет центральным акцентом современной просторной гостиной.',
        uz: 'Yumshoq bukle to‘qimasiga ega arxitekturaviy egri chiziqli dizayn. Zamonaviy mehmonxonalarning markaziy bezagiga aylanadi.'
      },
      material: 'velvet',
      dimensions: '240 × 110 × 76 cm',
      price: 1280,
      productionTime: '14-16',
      warranty: 5,
      colors: FABRIC_PALETTE,
      badge: 'new',
      rating: 4.8
    },
    {
      id: 'sofa-4',
      category: 'sofas',
      svgType: 'sofa',
      names: {
        en: 'Japandi Low-Profile Solid Pine Daybed',
        ru: 'Кушетка-дейбед Japandi из сосны',
        uz: 'Japandi uslubidagi past bo‘yli daybed'
      },
      descriptions: {
        en: 'Japanese minimalism meets Scandinavian craft. Wide solid timber plinth base with integrated side table ledge and futon mattress.',
        ru: 'Японский минимализм и скандинавский уют. Широкое основание из массива с интегрированной полочкой и упругим матрасом.',
        uz: 'Yapon minimalizmi va Skandinaviya qulayligi. Yon tokchali keng tabiiy yog‘och asos va qulay futon to‘shak.'
      },
      material: 'pine',
      dimensions: '210 × 90 × 42 cm',
      price: 740,
      productionTime: '10-12',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: '-20%',
      rating: 4.7
    },
    {
      id: 'sofa-5',
      category: 'sofas',
      svgType: 'sofa',
      names: {
        en: 'Modular Corner Sectional Sofa',
        ru: 'Модульный угловой диван Sectional',
        uz: 'Modulli burchak divan Sectional'
      },
      descriptions: {
        en: 'Versatile 4-piece sectional arrangement. Reversible chaise configuration with duck feather-blend back cushions and stain-resistant fabric.',
        ru: 'Универсальный модульный диван из 4 блоков. Переставляемая оттоманка, подушки с наполнителем из гусиного пуха и водоотталкивающая ткань.',
        uz: '4 ta mustaqil moduldan iborat ko‘p funksiyali burchak divan. Suv va dog‘ yuqmaydigan mato hamda patli yumshoq yostiqlar.'
      },
      material: 'oak',
      dimensions: '280 × 180 × 82 cm',
      price: 1850,
      productionTime: '16-18',
      warranty: 5,
      colors: FABRIC_PALETTE,
      badge: 'bestseller',
      rating: 4.9
    },
    {
      id: 'sofa-6',
      category: 'sofas',
      svgType: 'sofa',
      names: {
        en: 'Compact Studio 2-Seater Loveseat',
        ru: 'Компактный 2-местный диван Loveseat',
        uz: 'Kichik xonalar uchun 2 kishilik divan'
      },
      descriptions: {
        en: 'Tailored proportions for urban apartments, home offices, and reception rooms. Durable weave with firm orthopedic back support.',
        ru: 'Идеальные пропорции для уютных квартир и кабинетов. Износостойкая фактурная рогожка и надежная поддержка спины.',
        uz: 'Shahar xonadonlari va ish kabinetlari uchun mo‘ljallangan ixcham o‘lcham. Mustahkam mato va orqa suyanchiq tayanchi.'
      },
      material: 'oak',
      dimensions: '160 × 85 × 80 cm',
      price: 650,
      productionTime: '10-12',
      warranty: 5,
      colors: FABRIC_PALETTE,
      badge: null,
      rating: 4.7
    },

    // --- 2. BEDS (6 items) ---
    {
      id: 'bed-1',
      category: 'beds',
      svgType: 'bed',
      names: {
        en: 'Nordic Floating Oak Bed (King)',
        ru: 'Парящая кровать из массива дуба Nordic',
        uz: 'Oyoqsiz suzuvchi eman krovat (King)'
      },
      descriptions: {
        en: 'Recessed center base creates a weightless floating look. Integrated warm LED underglow channel and curved slatted headboard.',
        ru: 'Утопленное основание создает эффект парения в воздухе. Встроенная теплая контурная подсветка и изголовье из ламелей дуба.',
        uz: 'Havoda suzib turgandek ko‘rinuvchi yashirin asos. Yumshoq LED chiroq o‘rni va qiya eman lamel bosh qismi.'
      },
      material: 'oak',
      dimensions: '200 × 215 × 95 cm',
      price: 1150,
      productionTime: '14-16',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'bestseller',
      rating: 5.0
    },
    {
      id: 'bed-2',
      category: 'beds',
      svgType: 'bed',
      names: {
        en: 'Wingback Upholstered Linen Bed',
        ru: 'Кровать с мягким изголовьем Wingback',
        uz: 'Yumshoq boshli zig‘ir krovat Wingback'
      },
      descriptions: {
        en: 'Luxurious cocooning wingback headboard lined with washed Belgian linen. Heavy-duty slatted birch base with pneumatic gas-lift storage.',
        ru: 'Уютное охватывающее изголовье с «ушками» из бельгийского льна. Подъемный механизм на газлифтах с огромным бельевым коробом.',
        uz: 'Belgiya zig‘ir matosi bilan qoplangan qulay bosh qismi. Gazliftli ko‘tarish mexanizmi va keng ichki saqlash bo‘limi.'
      },
      material: 'oak',
      dimensions: '190 × 215 × 115 cm',
      price: 1320,
      productionTime: '14-18',
      warranty: 5,
      colors: FABRIC_PALETTE,
      badge: 'new',
      rating: 4.9
    },
    {
      id: 'bed-3',
      category: 'beds',
      svgType: 'bed',
      names: {
        en: 'Artisan Solid Walnut Platform Bed',
        ru: 'Платформенная кровать из ореха Artisan',
        uz: 'Artisan tabiiy yong‘oq krovati'
      },
      descriptions: {
        en: 'Precision dovetail corner joints showing natural walnut heartwood variegation. Floating matching nightstands included in design.',
        ru: 'Угловые соединения типа «ласточкин хвост» подчеркивают красоту ореха. В комплекте две парящие прикроватные тумбы.',
        uz: 'Yong‘oq daraxtining tabiiy naqshlarini ko‘rsatuvchi mustahkam birikmalar. Ikkita osma tungi tumbasi bilan taqdim etiladi.'
      },
      material: 'walnut',
      dimensions: '210 × 220 × 90 cm',
      price: 1780,
      productionTime: '18-21',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 5.0
    },
    {
      id: 'bed-4',
      category: 'beds',
      svgType: 'bed',
      names: {
        en: 'Minimalist Tatami Low Bed Frame',
        ru: 'Низкая кровать в японском стиле Tatami',
        uz: 'Yaponcha past platforma krovat Tatami'
      },
      descriptions: {
        en: 'Grounding low-profile design promoting natural air circulation. Wide solid pine perimeter edges serve as nightstands.',
        ru: 'Низкая посадка в восточном стиле способствует гармонии и простору. Широкие боковые бортики из сосны заменяют тумбочки.',
        uz: 'Xonani keng ko‘rsatuvchi past profilli dizayn. Qarag‘ay yog‘ochidan ishlangan keng hoshiyasi stolcha vazifasini ham o‘taydi.'
      },
      material: 'pine',
      dimensions: '220 × 230 × 30 cm',
      price: 680,
      productionTime: '10-12',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: '-20%',
      rating: 4.8
    },
    {
      id: 'bed-5',
      category: 'beds',
      svgType: 'bed',
      names: {
        en: 'Solid Pine Storage Bed with 4 Drawers',
        ru: 'Кровать из сосны с 4 ящиками для белья',
        uz: '4 ta tortmali qarag‘ay krovati'
      },
      descriptions: {
        en: 'Four deep silent soft-closing under-bed storage drawers on smooth ball-bearing glides. Solid timber slatted mattress support.',
        ru: 'Четыре вместительных бесшумных ящика с доводчиками плавного закрывания. Ортопедическое реечное дно из массива.',
        uz: 'Oson suriluvchi 4 ta keng va shovqinsiz tortma. To‘liq tabiiy yog‘ochdan yasalgan mustahkam ortopedik taglik.'
      },
      material: 'pine',
      dimensions: '170 × 210 × 92 cm',
      price: 820,
      productionTime: '12-14',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: null,
      rating: 4.7
    },
    {
      id: 'bed-6',
      category: 'beds',
      svgType: 'bed',
      names: {
        en: 'Classic French Oak Queen Bed',
        ru: 'Кровать из дуба Classic French Queen',
        uz: 'Klassik fransuz uslubidagi eman krovat'
      },
      descriptions: {
        en: 'Subtly fluted post legs and hand-carved arch detailing. Finished in matte organic protective hardwax for authentic tactile warmth.',
        ru: 'Изящные резные стойки и плавные арочные линии. Покрытие матовым восковым маслом для сохранения живого тепла дерева.',
        uz: 'Nafis o‘yilgan ustunlar va klassik kamar shakli. Yog‘ochning tabiiy iliqligini saqlovchi ekologik qattiq mum bilan qoplangan.'
      },
      material: 'oak',
      dimensions: '180 × 215 × 105 cm',
      price: 1390,
      productionTime: '15-18',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.9
    },

    // --- 3. TABLES (6 items) ---
    {
      id: 'table-1',
      category: 'tables',
      svgType: 'table',
      names: {
        en: 'Live Edge Solid Oak Dining Table',
        ru: 'Обеденный стол из массива дуба Live Edge',
        uz: 'Tabiiy chetli (Live Edge) eman dasturxon stoli'
      },
      descriptions: {
        en: 'Hand-selected single trunk cross-cut oak slab maintaining the organic tree bark edge. Supported by matte powder-coated steel spider legs.',
        ru: 'Цельный спил векового дуба с сохраненным естественным природным краем ствола. Мощное металлическое подстолье «паук».',
        uz: 'Daraxtning tabiiy chet qirralari saqlangan yaxlit eman taxtasi. Qora kukun bo‘yoqli baquvvat metall oyoqlar ustiga o‘rnatilgan.'
      },
      material: 'oak',
      dimensions: '220 × 95 × 76 cm',
      price: 1120,
      productionTime: '12-15',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'bestseller',
      rating: 5.0
    },
    {
      id: 'table-2',
      category: 'tables',
      svgType: 'table',
      names: {
        en: 'Round Walnut Bistro Pedestal Table',
        ru: 'Круглый обеденный стол из ореха Bistro',
        uz: 'Dumaloq yong‘oq stol Bistro'
      },
      descriptions: {
        en: 'Curved conical fluted pedestal base crafted from solid American walnut. Seats 4-6 comfortably without leg collision.',
        ru: 'Рифленая коническая ножка из массива американского ореха. Вмещает 4–6 человек без помех для ног.',
        uz: 'Amerika yong‘og‘idan ishlangan qovurg‘ali ustun oyoq. 4-6 kishi oyoqlari tegmasdan bemalol o‘tirishi uchun qulay.'
      },
      material: 'walnut',
      dimensions: 'Ø 120 × 76 cm',
      price: 940,
      productionTime: '12-14',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.9
    },
    {
      id: 'table-3',
      category: 'tables',
      svgType: 'table',
      names: {
        en: 'Minimalist Extendable Oak Dining Table',
        ru: 'Раздвижной обеденный стол из дуба Nordic',
        uz: 'Kengaytiriluvchi eman tushlik stoli'
      },
      descriptions: {
        en: 'Concealed central butterfly mechanism extends table from 180cm to 260cm in 5 seconds. Precision aluminum synchronous glides.',
        ru: 'Скрытый механизм «бабочка» раздвигает стол с 180 до 260 см за 5 секунд. Немецкие синхронные направляющие.',
        uz: 'Yashirin mexanizm yordamida stol uzunligi 5 soniyada 180 dan 260 sm gacha kengayadi. Germaniya sinxron relslari.'
      },
      material: 'oak',
      dimensions: '180-260 × 90 × 76 cm',
      price: 1350,
      productionTime: '14-16',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'new',
      rating: 4.8
    },
    {
      id: 'table-4',
      category: 'tables',
      svgType: 'table',
      names: {
        en: 'Brass Inlay Marble & Oak Dining Table',
        ru: 'Стол из дуба с мраморной вставкой и латунью',
        uz: 'Marmar va latun bezakli eman stoli'
      },
      descriptions: {
        en: 'Solid white oak surround framed with warm brushed brass inlay and a central Italian Calacatta honed marble heat-resistant trivet zone.',
        ru: 'Массив белого дуба с инкрустацией шлифованной латунью и центральной термостойкой вставкой из мрамора Calacatta.',
        uz: 'Oq eman yog‘ochi, silliqlangan latun hoshiya va o‘rtasidagi issiqqa chidamli italyan marmar bezagi uyg‘unligi.'
      },
      material: 'metal',
      dimensions: '200 × 100 × 76 cm',
      price: 1580,
      productionTime: '16-18',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.9
    },
    {
      id: 'table-5',
      category: 'tables',
      svgType: 'table',
      names: {
        en: 'Japanese Low Tea Table (Chabudai)',
        ru: 'Низкий чайный столик Чабудай из ясеня',
        uz: 'Yaponcha past choy stoli Chabudai'
      },
      descriptions: {
        en: 'Traditional floor-seated tea and coffee table with folding mortise-hinge solid legs. Coated in waterproof organic wax.',
        ru: 'Традиционный восточный столик для чаепитий со складными устойчивыми ножками. Защищен водостойким воском.',
        uz: 'Yerda o‘tirib choy ichish uchun qulay yig‘iluvchi oyoqli an’anaviy stolcha. Suv o‘tkazmaydigan tabiiy mum bilan qoplangan.'
      },
      material: 'pine',
      dimensions: '110 × 65 × 36 cm',
      price: 380,
      productionTime: '7-10',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: '-20%',
      rating: 4.8
    },
    {
      id: 'table-6',
      category: 'tables',
      svgType: 'table',
      names: {
        en: 'Modern Solid Teak Dining Table',
        ru: 'Обеденный стол из массива тика Modern',
        uz: 'Zamonaviy tik yog‘ochli tushlik stoli'
      },
      descriptions: {
        en: 'Extreme natural resistance to humidity, spills, and UV. Chamfered underside tabletop edge with tapered structural corner posts.',
        ru: 'Природная стойкость к влаге и пятнам. Скошенная нижняя фаска столешницы и изящные конусные ножки.',
        uz: 'Namlik va dog‘larga yuqori chidamli tabiiy tik yog‘ochi. Pastki qirrasi silliqlangan va mustahkam burchak oyoqlari mavjud.'
      },
      material: 'oak',
      dimensions: '210 × 95 × 76 cm',
      price: 1240,
      productionTime: '12-14',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.9
    },

    // --- 4. CHAIRS (6 items) ---
    {
      id: 'chair-1',
      category: 'chairs',
      svgType: 'chair',
      names: {
        en: 'Danish Cord Hand-Woven Dining Chair',
        ru: 'Стул с плетением из датского шнура',
        uz: 'Daniya shnuri to‘qilgan eman stul'
      },
      descriptions: {
        en: 'Hand-woven unbleached paper cord seat taking 4 hours of artisan weaving per chair. Kiln-dried steam-bent solid oak backrest.',
        ru: 'Сиденье ручного плетения из прочного датского шнура (4 часа работы мастера). Изогнутая паром спинка из дуба.',
        uz: 'Usta tomonidan 4 soat davomida qo‘lda to‘qilgan mustahkam o‘rindiq. Bug‘da egilgan yaxlit eman suyanchig‘i.'
      },
      material: 'oak',
      dimensions: '52 × 50 × 78 cm',
      price: 210,
      productionTime: '7-9',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'bestseller',
      rating: 5.0
    },
    {
      id: 'chair-2',
      category: 'chairs',
      svgType: 'chair',
      names: {
        en: 'Mid-Century Lounge Armchair & Ottoman',
        ru: 'Кресло с пуфом Mid-Century Lounge',
        uz: 'Mid-Century oromgoh kreslosi va pufik'
      },
      descriptions: {
        en: 'Ergonomic 15-degree reclined posture crafted with molded walnut plywood and supple grain leather. Includes matching footrest.',
        ru: 'Эргономичный наклон спинки 15 градусов, гнутый шпон ореха и мягкая кожа. В комплекте подставка для ног.',
        uz: '15 gradus qiyalikdagi ergonomik qulaylik, egilgan yong‘oq shponi va yumshoq tabiiy teri. Oyoq qo‘yish pufi bilan birga.'
      },
      material: 'leather',
      dimensions: '84 × 85 × 82 cm',
      price: 890,
      productionTime: '12-14',
      warranty: 5,
      colors: LEATHER_PALETTE,
      badge: 'bestseller',
      rating: 4.9
    },
    {
      id: 'chair-3',
      category: 'chairs',
      svgType: 'chair',
      names: {
        en: 'Sculptural Solid Walnut Accent Chair',
        ru: 'Скульптурное кресло из массива ореха',
        uz: 'Mualliflik yong‘oq yog‘ochli kreslo'
      },
      descriptions: {
        en: 'Flowing continuous armrest sculpted from single blocks of black walnut with floating bouclé cushion seat.',
        ru: 'Плавные перетекающие подлокотники вырезаны из массива ореха. Парящая мягкая подушка из букле.',
        uz: 'Yaxlit qora yong‘oqdan yo‘nilgan silliq suyanchiqlar va havoda turgandek qulay bukle yostiqcha.'
      },
      material: 'walnut',
      dimensions: '68 × 72 × 76 cm',
      price: 680,
      productionTime: '10-12',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'new',
      rating: 4.8
    },
    {
      id: 'chair-4',
      category: 'chairs',
      svgType: 'chair',
      names: {
        en: 'Spindle Back Oak Chair (Set of 2)',
        ru: 'Стулья с точеными спинками (Комплект из 2 шт.)',
        uz: 'Yo‘nilgan suyanchoqli eman stullar (2 dona)'
      },
      descriptions: {
        en: 'Traditional Windsor style spindle spokes with saddle-contoured solid seat for natural ergonomic lumbar comfort.',
        ru: 'Традиционный виндзорский стиль с точеными спицами и анатомически спрофилированным сиденьем.',
        uz: 'Klassik Vindzor uslubidagi nafis yo‘nilgan tirgaklar va o‘tirishga juda mos qilib chuqurlashtirilgan o‘rindiq.'
      },
      material: 'oak',
      dimensions: '48 × 48 × 86 cm',
      price: 360,
      productionTime: '8-10',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.7
    },
    {
      id: 'chair-5',
      category: 'chairs',
      svgType: 'chair',
      names: {
        en: 'Curved Bouclé Reading Chair',
        ru: 'Уютное кресло для чтения из букле',
        uz: 'Kitob mutolaasi uchun yumshoq bukle kreslo'
      },
      descriptions: {
        en: 'Deep cocoon embrace with high density resilient cushioning. Heavyweight base with 360-degree silent bronze swivel mechanism.',
        ru: 'Глубокая посадка с эффектом объятий. Бесшумный поворотный механизм на 360 градусов из бронзы.',
        uz: 'Insonni quchoqlab olgandek yumshoq va chuqur o‘rindiq. 360 gradusga shovqinsiz aylanuvchi bronza asos.'
      },
      material: 'velvet',
      dimensions: '78 × 82 × 75 cm',
      price: 590,
      productionTime: '10-12',
      warranty: 5,
      colors: FABRIC_PALETTE,
      badge: null,
      rating: 4.9
    },
    {
      id: 'chair-6',
      category: 'chairs',
      svgType: 'chair',
      names: {
        en: 'Minimalist Dining Armchair in Solid Ash',
        ru: 'Обеденное полукресло из массива ясеня',
        uz: 'Shumtol daraxtidan yarim kreslo'
      },
      descriptions: {
        en: 'Stackable space-saving design with seamless finger-jointed corners and spill-proof treated woven wool seat.',
        ru: 'Штабелируемая конструкция с надежными шиповыми соединениями и водоотталкивающей шерстяной обивкой.',
        uz: 'Joy tejovchi, bir-birining ustiga taxlanadigan ixcham dizayn. Suv yuqmaydigan jun matoli o‘rindiq.'
      },
      material: 'oak',
      dimensions: '56 × 54 × 76 cm',
      price: 240,
      productionTime: '7-9',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: '-20%',
      rating: 4.8
    },

    // --- 5. WARDROBES (6 items) ---
    {
      id: 'wardrobe-1',
      category: 'wardrobes',
      svgType: 'wardrobe',
      names: {
        en: '3-Door Solid Walnut Wardrobe with Mirror',
        ru: '3-дверный шкаф из массива ореха с зеркалом',
        uz: 'Ko‘zguli 3 eshikli tabiiy yong‘oq shkaf'
      },
      descriptions: {
        en: 'Full-length bronzed mirror center panel flanked by book-matched walnut veneer doors. Integrated drawer chest and LED clothes rails.',
        ru: 'Центральная дверь с бронзированным зеркалом и двери из отборного ореха. Встроенный комод и штанги с подсветкой.',
        uz: 'Bronza tusli markaziy ko‘zgu va sara yong‘oq shponidan eshiklar. Ichki tortmalar va yoritgichli kiyim ilgichlar.'
      },
      material: 'walnut',
      dimensions: '180 × 60 × 220 cm',
      price: 2150,
      productionTime: '20-25',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'bestseller',
      rating: 5.0
    },
    {
      id: 'wardrobe-2',
      category: 'wardrobes',
      svgType: 'wardrobe',
      names: {
        en: 'Fluted White Oak Double Wardrobe',
        ru: '2-дверный рифленый шкаф из белого дуба',
        uz: '2 eshikli qovurg‘ali oq eman shkafi'
      },
      descriptions: {
        en: 'Artisan fluted vertical wood slats on cabinet doors with brushed satin brass bar pulls. Push-to-open lower shoe drawers.',
        ru: 'Вертикальные фрезерованные рейки на фасадах и латунные длинные ручки. Нижние ящики с системой Push-to-open.',
        uz: 'Eshiklarida nafis bo‘ylama o‘yilgan chiziqlar va cho‘zinchoq latun tutqichlar. Pastki poyabzal tortmalari bosib ochiladi.'
      },
      material: 'oak',
      dimensions: '120 × 58 × 210 cm',
      price: 1480,
      productionTime: '15-18',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'new',
      rating: 4.9
    },
    {
      id: 'wardrobe-3',
      category: 'wardrobes',
      svgType: 'wardrobe',
      names: {
        en: 'Open Modular Dressing Room System',
        ru: 'Открытая гардеробная система модулей',
        uz: 'Ochiq modulli kiyinish xonasi tizimi'
      },
      descriptions: {
        en: 'Modular wall-mounted uprights with solid oak shelves, leather-lined jewelry trays, and automatic sensor illumination.',
        ru: 'Настенная модульная система из стоек и полок из дуба с кожаными лотками для аксессуаров и датчиками света.',
        uz: 'Eman tokchalari, soat va taqinchoqlar uchun charm qutilar hamda harakat datchikli chiroqlar bilan jihozlangan ochiq tizim.'
      },
      material: 'oak',
      dimensions: '240 × 50 × 240 cm',
      price: 1950,
      productionTime: '18-22',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.8
    },
    {
      id: 'wardrobe-4',
      category: 'wardrobes',
      svgType: 'wardrobe',
      names: {
        en: 'Sliding Fluted Glass Wardrobe',
        ru: 'Шкаф-купе с рифленым стеклом и подсветкой',
        uz: 'Qirrali shishali surma eshikli shkaf'
      },
      descriptions: {
        en: 'Sleek black anodized aluminum frames holding tempered ribbed glass panels. Smooth ceiling-suspended sliding track.',
        ru: 'Матовый алюминиевый профиль с безопасным рифленым стеклом. Верхнеподвесная плавная система скольжения дверей.',
        uz: 'Xiralashtirilgan mustahkam qovurg‘ali shisha va qora alyuminiy rom. Shiftga o‘rnatilgan yengil sirpanuvchi mexanizm.'
      },
      material: 'metal',
      dimensions: '200 × 65 × 230 cm',
      price: 1820,
      productionTime: '16-20',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.9
    },
    {
      id: 'wardrobe-5',
      category: 'wardrobes',
      svgType: 'wardrobe',
      names: {
        en: '2-Door Solid Pine Armoire',
        ru: '2-дверный платяной шкаф из сосны',
        uz: 'Qarag‘ay yog‘ochidan 2 eshikli shkaf'
      },
      descriptions: {
        en: 'Classic paneled doors with traditional mortise locking hardware. Removable interior shelf pack and solid wooden hanging rod.',
        ru: 'Филенчатые двери в классическом загородном стиле с винтажным ключиком. Переставные полки и деревянная штанга.',
        uz: 'Klassik romli eshiklar va antik uslubdagi kalitli qulf. Olinadigan tokchalar va baquvvat kiyim osmog‘i.'
      },
      material: 'pine',
      dimensions: '105 × 55 × 195 cm',
      price: 790,
      productionTime: '10-12',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: '-20%',
      rating: 4.6
    },
    {
      id: 'wardrobe-6',
      category: 'wardrobes',
      svgType: 'wardrobe',
      names: {
        en: 'Compact Entryway Wardrobe with Mirror',
        ru: 'Компактный шкаф для прихожей с зеркалом',
        uz: 'Dahliz uchun ixcham ko‘zguli shkaf'
      },
      descriptions: {
        en: 'Shallow 42cm depth engineered specifically for hallways. Integrated coat hooks, shoe rack, and full-height dressing mirror.',
        ru: 'Небольшая глубина 42 см идеальна для узких коридоров. Внутри крючки для пальто, полка для обуви и зеркало во весь рост.',
        uz: 'Tor dahlizlar uchun maxsus 42 sm qalinlikda ishlangan. Palto ilgichlar, poyabzal tokchalari va to‘liq bo‘yli ko‘zgu mavjud.'
      },
      material: 'mdf',
      dimensions: '90 × 42 × 205 cm',
      price: 680,
      productionTime: '10-12',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.7
    },

    // --- 6. KITCHEN (5 items) ---
    {
      id: 'kitchen-1',
      category: 'kitchen',
      svgType: 'kitchen',
      names: {
        en: 'Artisan Solid Oak Kitchen Island',
        ru: 'Островная кухня из массива дуба Artisan',
        uz: 'Artisan tabiiy eman oshxona oroli'
      },
      descriptions: {
        en: 'Freestanding kitchen island with quartz stone countertop, deep dovetail pot drawers, wine storage cubbies, and breakfast bar seating.',
        ru: 'Островной модуль со столешницей из кварцевого агломерата, глубокими ящиками для посуды и отсеками для вина.',
        uz: 'Kvarts toshli ustki qism, qozonlar uchun keng tortmalar, sharbat bo‘limi va bar stullari uchun joyga ega oshxona oroli.'
      },
      material: 'oak',
      dimensions: '180 × 90 × 92 cm',
      price: 1980,
      productionTime: '18-22',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'bestseller',
      rating: 5.0
    },
    {
      id: 'kitchen-2',
      category: 'kitchen',
      svgType: 'kitchen',
      names: {
        en: 'Wall-Mounted Fluted Glass Pantry Cabinet',
        ru: 'Навесной буфет с рифленым стеклом',
        uz: 'Oshxona uchun qovurg‘ali shishali osma shkaf'
      },
      descriptions: {
        en: 'Double-door wall cupboard featuring reeded glass panels and brass hardware. Moisture-sealed natural oak carcass.',
        ru: 'Настенный шкаф с рельефным стеклом и латунной фурнитурой. Влагостойкая пропитка натурального дубового корпуса.',
        uz: 'Nafis qirrali shisha va latun tutqichlarga ega ikki eshikli osma shkaf. Namlikka qarshi maxsus qoplangan eman korpus.'
      },
      material: 'oak',
      dimensions: '100 × 35 × 85 cm',
      price: 620,
      productionTime: '10-12',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'new',
      rating: 4.8
    },
    {
      id: 'kitchen-3',
      category: 'kitchen',
      svgType: 'kitchen',
      names: {
        en: 'Solid Walnut Wall Spice & Glass Rack',
        ru: 'Полка для специй и бокалов из ореха',
        uz: 'Ziravor va qadahlar uchun yong‘oq javon'
      },
      descriptions: {
        en: 'Precision routed slots holding 8 stemmed glasses and two display shelves with brass retaining guard rails.',
        ru: 'Прорези для 8 винных бокалов и две открытые полочки с защитными латунными бортиками от падения.',
        uz: '8 ta qadah ilish uchun maxsus o‘yiqlar va latun to‘siqli ziravorlar uchun 2 qavatli ochiq tokcha.'
      },
      material: 'walnut',
      dimensions: '80 × 18 × 45 cm',
      price: 240,
      productionTime: '5-7',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.9
    },
    {
      id: 'kitchen-4',
      category: 'kitchen',
      svgType: 'kitchen',
      names: {
        en: 'Butcher Block Mobile Kitchen Cart',
        ru: 'Мобильный кухонный столик-тележка',
        uz: 'G‘ildirakli harakatchan oshxona stolchasi'
      },
      descriptions: {
        en: 'Thick end-grain hornbeam cutting surface on locking caster wheels. Slatted lower storage shelf and stainless steel towel rail.',
        ru: 'Торцевая разделочная доска на колесах со стопорами. Решетчатая полка для овощей и полотенцедержатель.',
        uz: 'Tormozli g‘ildirakli qalin qoraqayin chopish yuzasi. Pastki sabzavot savati va sochiq ilish ushlagichi mavjud.'
      },
      material: 'pine',
      dimensions: '75 × 55 × 88 cm',
      price: 450,
      productionTime: '8-10',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: null,
      rating: 4.7
    },
    {
      id: 'kitchen-5',
      category: 'kitchen',
      svgType: 'kitchen',
      names: {
        en: 'Modular Solid Oak Kitchen Credenza',
        ru: 'Кухонный комод-креденца из дуба',
        uz: 'Idishlar uchun eman oshxona komodi'
      },
      descriptions: {
        en: 'Three soft-close drawers and two storage bays with adjustable shelving. Perfect for coffee station and fine chinaware storage.',
        ru: 'Три ящика с доводчиками и два вместительных отделения. Идеально под кофейную станцию и сервизы.',
        uz: 'Yumshoq yopiluvchi 3 ta tortma va 2 ta katta eshikli bo‘lim. Kofe burchagi va qimmatbaho idishlar saqlashga juda mos.'
      },
      material: 'oak',
      dimensions: '150 × 48 × 86 cm',
      price: 1150,
      productionTime: '14-16',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: '-20%',
      rating: 4.8
    },

    // --- 7. OFFICE (5 items) ---
    {
      id: 'office-1',
      category: 'office',
      svgType: 'office',
      names: {
        en: 'Executive Solid Walnut Writing Desk',
        ru: 'Кабинетный письменный стол из ореха',
        uz: 'Yong‘oq daraxtidan rahbar yozuv stoli'
      },
      descriptions: {
        en: 'Concealed magnetic cable management trench, full-grain Italian leather blotter insert, and 3 lockable felt-lined drawers.',
        ru: 'Скрытый кабель-канал на магнитах, кожаная накладка на столешнице и 3 ящика с замком и отделкой бархатом.',
        uz: 'Simlar uchun magnitli yashirin quti, ustidagi haqiqiy charm qoplama va qulflanadigan 3 ta yumshoq tortma.'
      },
      material: 'walnut',
      dimensions: '160 × 75 × 76 cm',
      price: 1420,
      productionTime: '15-18',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'bestseller',
      rating: 5.0
    },
    {
      id: 'office-2',
      category: 'office',
      svgType: 'office',
      names: {
        en: 'Minimalist Ash Wood Computer Desk',
        ru: 'Компьютерный стол из ясеня Minimalist',
        uz: 'Shumtol yog‘ochidan ixcham kompyuter stoli'
      },
      descriptions: {
        en: 'Slender tapered legs with beveled underside edge. Integrated dual USB/Type-C charging hub flush mounted into desktop.',
        ru: 'Тонкие конусные ножки и скошенные грани. Встроенный врезной блок розеток с USB и Type-C зарядкой.',
        uz: 'Ixcham nafis oyoqlar va silliq hoshiyalar. Stol ustiga o‘rnatilgan USB va Type-C quvvatlash uyasi bilan jihozlangan.'
      },
      material: 'oak',
      dimensions: '130 × 65 × 75 cm',
      price: 680,
      productionTime: '10-12',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'new',
      rating: 4.8
    },
    {
      id: 'office-3',
      category: 'office',
      svgType: 'office',
      names: {
        en: 'Library Floor-to-Ceiling Bookcase',
        ru: 'Библиотечный стеллаж до потолка с лестницей',
        uz: 'Zinapoyali baland kutubxona javoni'
      },
      descriptions: {
        en: 'Heavy-duty modular oak shelving with brass rolling ladder rail system. Holds 600+ volumes without shelf sagging.',
        ru: 'Мощный стеллаж из дуба с латунным рельсом и приставной лестницей на колесах. Выдерживает до 600 тяжелых книг.',
        uz: 'G‘ildirakli latun narvoni bo‘lgan baquvvat eman kitob javoni. 600 dan ortiq og‘ir kitoblarni egilmasdan ko‘taradi.'
      },
      material: 'oak',
      dimensions: '220 × 38 × 260 cm',
      price: 2450,
      productionTime: '22-26',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 5.0
    },
    {
      id: 'office-4',
      category: 'office',
      svgType: 'chair',
      names: {
        en: 'Ergonomic Leather Swivel Office Chair',
        ru: 'Кожаное рабочее кресло на колесах',
        uz: 'Aylanuvchi charm ergonomik ofis kreslosi'
      },
      descriptions: {
        en: 'Pneumatic height adjustment with synchronous tilt-lock tension mechanism. Solid wood armrests and breathable padded seat.',
        ru: 'Пневмолифт регулировки высоты и механизм качания с фиксацией. Деревянные подлокотники и дышащая кожа.',
        uz: 'Balandlikni sozlovchi gazlift va tebranish qulflari. Tabiiy yog‘och tirsaklagichlar va qulay nafas oluvchi charm.'
      },
      material: 'leather',
      dimensions: '65 × 65 × 100-110 cm',
      price: 780,
      productionTime: '12-14',
      warranty: 5,
      colors: LEATHER_PALETTE,
      badge: null,
      rating: 4.9
    },
    {
      id: 'office-5',
      category: 'office',
      svgType: 'office',
      names: {
        en: 'Floating Wall Shelf Set for Workspace',
        ru: 'Комплект парящих полок для документов',
        uz: 'Ish xonasi uchun devorga ilinuvchi osma tokchalar'
      },
      descriptions: {
        en: 'Concealed steel bracket mount holding up to 45kg. Set of three graduated oak shelves with cable cutout slots.',
        ru: 'Скрытые стальные крепления выдерживают до 45 кг. Набор из трех полок разной длины с пазом под провода.',
        uz: '45 kg gacha vazn ko‘taruvchi yashirin po‘lat ilmoqlar. Sim o‘tadigan tirqishli 3 dona turli o‘lchamdagi eman tokcha.'
      },
      material: 'oak',
      dimensions: '120 / 90 / 60 × 22 × 4 cm',
      price: 290,
      productionTime: '5-7',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: '-20%',
      rating: 4.7
    },

    // --- 8. KIDS (5 items) ---
    {
      id: 'kids-1',
      category: 'kids',
      svgType: 'kids',
      names: {
        en: 'Montessori House Frame Low Bed',
        ru: 'Детская кровать-домик Montessori',
        uz: 'Montessori bolalar uy-krovati'
      },
      descriptions: {
        en: 'Floor-level safe sleep design made from 100% splinter-free natural beech with water-based certified non-toxic organic lacquer.',
        ru: 'Безопасная низкая посадка по методике Монтессори. Массив бука, закругленные углы и немецкий эко-лак без запаха.',
        uz: 'Bolalar uchun xavfsiz pol sathidagi yotoq. Qirralari silliqlangan toza qoraqayin yog‘ochi va hidsiz xavfsiz nemis bo‘yog‘i.'
      },
      material: 'pine',
      dimensions: '160 × 80 × 140 cm',
      price: 520,
      productionTime: '9-12',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: 'bestseller',
      rating: 5.0
    },
    {
      id: 'kids-2',
      category: 'kids',
      svgType: 'wardrobe',
      names: {
        en: 'Modular Wooden Toy Organizer & Bins',
        ru: 'Модульный стеллаж для игрушек и книг',
        uz: 'O‘yinchoq va kitoblar uchun modulli javon'
      },
      descriptions: {
        en: 'Low-height storage unit with pull-out wheeled wooden crates. Enables toddlers to access and clean up toys independently.',
        ru: 'Низкий стеллаж с выдвижными ящиками на колесиках. Помогает ребенку самостоятельно убирать игрушки.',
        uz: 'Bolalar bemalol yetadigan past bo‘yli g‘ildirakli yog‘och qutilar. Bolani mustaqil tartibga o‘rgatishga yordam beradi.'
      },
      material: 'pine',
      dimensions: '110 × 38 × 78 cm',
      price: 340,
      productionTime: '7-9',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: 'new',
      rating: 4.8
    },
    {
      id: 'kids-3',
      category: 'kids',
      svgType: 'office',
      names: {
        en: "Adjustable Children's Study Desk & Chair",
        ru: 'Растущая парта и стул из массива сосны',
        uz: 'Bo‘yi o‘suvchi bolalar partasi va stul'
      },
      descriptions: {
        en: 'Height-adjustable desk surface with 5 incline angles for reading, drawing, and writing. Ergonomically curved matching stool.',
        ru: 'Регулируемая высота и 5 углов наклона столешницы для рисования и уроков. Эргономичный стул в комплекте.',
        uz: 'Bolaning bo‘yiga qarab ko‘tariluvchi va chizish uchun 5 burchakka egiluvchi stol. Moslashuvchan qulay stul bilan.'
      },
      material: 'pine',
      dimensions: '90 × 60 × 55-75 cm',
      price: 390,
      productionTime: '8-10',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: null,
      rating: 4.9
    },
    {
      id: 'kids-4',
      category: 'kids',
      svgType: 'bed',
      names: {
        en: 'Two-Tier Solid Beech Bunk Bed',
        ru: 'Двухъярусная кровать из массива бука',
        uz: 'Ikki qavatli mustahkam bolalar krovati'
      },
      descriptions: {
        en: 'Ultra-sturdy bolted posts supporting 150kg per bunk. Integrated storage steps with safety handrail and detachable split capability.',
        ru: 'Сверхнадежный каркас, нагрузка до 150 кг на ярус. Удобные ступени-ящики с перилами. Трансформируется в 2 отдельные кровати.',
        uz: 'Har bir qavatga 150 kg yuk ko‘taruvchi baquvvat karkas. Ichki tortmali xavfsiz zinapoya, kelajakda 2 ta alohida krovat bo‘ladi.'
      },
      material: 'oak',
      dimensions: '200 × 100 × 165 cm',
      price: 980,
      productionTime: '14-16',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: null,
      rating: 4.9
    },
    {
      id: 'kids-5',
      category: 'kids',
      svgType: 'wardrobe',
      names: {
        en: "Children's Wardrobe with Pastel Accents",
        ru: 'Детский гардеробный шкаф с пастельными фасадами',
        uz: 'Pastel rangli qulay bolalar kiyim shkafi'
      },
      descriptions: {
        en: 'Soft-closing hinges preventing finger pinching. Child-height hanging rail, open book cubbies, and wide bottom shoe drawer.',
        ru: 'Плавные доводчики с защитой от прищемления пальчиков. Низкая штанга, полочки для книг и глубокий ящик.',
        uz: 'Barmoq qisilishidan asrovchi yumshoq petlyalar. Bolalar qo‘li yetadigan ilgich, kitob javonlari va keng tortma.'
      },
      material: 'mdf',
      dimensions: '95 × 50 × 170 cm',
      price: 610,
      productionTime: '10-12',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: '-20%',
      rating: 4.7
    },

    // --- 9. LIVING ROOM (6 items) ---
    {
      id: 'living-1',
      category: 'living',
      svgType: 'living',
      names: {
        en: 'Floating Minimalist Oak TV Unit',
        ru: 'Подвесная тумба под ТВ из дуба Minimalist',
        uz: 'Devorga osiluvchi eman TV tumbasi'
      },
      descriptions: {
        en: 'Wall-hung horizontal media console with drop-down acoustically transparent fabric speaker flap and concealed wire routing.',
        ru: 'Парящая тумба с откидным акустическим фасадом под саундбар и скрытым выводом всех кабелей к телевизору.',
        uz: 'Soundbar uchun tovush o‘tkazuvchi matoli old qopqoq va yashirin sim kanallariga ega devoriy zamonaviy TV konsol.'
      },
      material: 'oak',
      dimensions: '200 × 40 × 35 cm',
      price: 760,
      productionTime: '10-12',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'bestseller',
      rating: 4.9
    },
    {
      id: 'living-2',
      category: 'living',
      svgType: 'living',
      names: {
        en: 'Geometric Black Walnut Bookshelf',
        ru: 'Геометрический стеллаж из ореха Geometric',
        uz: 'Geometrik shaklli yong‘oq kitob javoni'
      },
      descriptions: {
        en: 'Asymmetric offset box partitions creating an artful shadowbox gallery for books, ceramics, and indoor greenery.',
        ru: 'Асимметричные ячейки создают стильную витрину для книг, скульптур и комнатных растений.',
        uz: 'Kitoblar, haykalchalar va uy gullari uchun ajoyib ko‘rinish beruvchi assimetrik zamonaviy tokchalar majmuasi.'
      },
      material: 'walnut',
      dimensions: '140 × 32 × 180 cm',
      price: 1120,
      productionTime: '14-16',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'new',
      rating: 4.8
    },
    {
      id: 'living-3',
      category: 'living',
      svgType: 'table',
      names: {
        en: 'Nesting Coffee Tables (Set of 2)',
        ru: 'Журнальные столики Nesting (Набор из 2 шт.)',
        uz: 'Juflik jurnallik stollari Nesting (2 dona)'
      },
      descriptions: {
        en: 'Organic pebble-shaped tops with beveled edges that slide beneath one another to save space. Solid turned wood tripod legs.',
        ru: 'Органическая форма морской гальки. Меньший столик легко задвигается под большой. Точеные ножки из массива.',
        uz: 'Dengiz toshlari shaklidagi silliq stollar. Joy tejash uchun kichigi kattasining tagiga osongina kirib turadi.'
      },
      material: 'oak',
      dimensions: '85 × 60 × 44 cm / 60 × 45 × 38 cm',
      price: 440,
      productionTime: '7-9',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.8
    },
    {
      id: 'living-4',
      category: 'living',
      svgType: 'living',
      names: {
        en: 'Slatted Credenza Media Console',
        ru: 'Тумба-креденца с реечными фасадами',
        uz: 'Reykali fasadga ega keredentsa'
      },
      descriptions: {
        en: 'Curved radius corners wrapped in vertical solid oak tambour slats that glide smoothly around the frame sides.',
        ru: 'Закругленные углы и гибкие реечные дверцы-жалюзи, плавно скользящие по направляющим вдоль боковин.',
        uz: 'Burchaklari yumaloqlangan va yon tomonlarga qarab yengil suriluvchi reyka eshikli ajoyib mebel.'
      },
      material: 'oak',
      dimensions: '180 × 45 × 65 cm',
      price: 1180,
      productionTime: '14-16',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.9
    },
    {
      id: 'living-5',
      category: 'living',
      svgType: 'table',
      names: {
        en: 'Solid Pine Sculptural Side Table',
        ru: 'Приставной столик-монолит из сосны',
        uz: 'Yaxlit qarag‘aydan yo‘nilgan kofe stolchasi'
      },
      descriptions: {
        en: 'Carved from a single timber cylinder showcasing concentric tree rings. Smooth satin wax finish and protective brass base ring.',
        ru: 'Выточен из цельного древесного ствола с сохранением годовых колец. Защитное восковое покрытие и латунный цоколь.',
        uz: 'Yaxlit daraxt xodasidan yo‘nib yasalgan, yillik halqalari ko‘rinib turuvchi tabiiy chiroyli stolcha.'
      },
      material: 'pine',
      dimensions: 'Ø 42 × 50 cm',
      price: 280,
      productionTime: '6-8',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: '-20%',
      rating: 4.7
    },
    {
      id: 'living-6',
      category: 'living',
      svgType: 'wardrobe',
      names: {
        en: 'Open Cubes Bookshelf Room Divider',
        ru: 'Стеллаж-перегородка для зонирования комнаты',
        uz: 'Xonani ajratuvchi ochiq katakli javon'
      },
      descriptions: {
        en: 'Double-sided accessible bookshelf perfect for dividing open-plan living rooms without obstructing natural window light.',
        ru: 'Двусторонний стеллаж для грамотного зонирования комнаты без потери естественного дневного света.',
        uz: 'Har ikki tomondan foydalanish mumkin bo‘lgan, yorug‘likni to‘smay xonani chiroyli ajratib turuvchi javon.'
      },
      material: 'oak',
      dimensions: '160 × 35 × 160 cm',
      price: 890,
      productionTime: '12-14',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.8
    },

    // --- 10. BATHROOM (5 items) ---
    {
      id: 'bathroom-1',
      category: 'bathroom',
      svgType: 'bathroom',
      names: {
        en: 'Floating Solid Teak Bathroom Vanity',
        ru: 'Подвесная тумба в ванную из тика',
        uz: 'Tik daraxtidan osma vanna tumbasi'
      },
      descriptions: {
        en: 'Naturally oil-rich waterproof teak wood paired with a honed Italian Carrara marble countertop and undermount ceramic basin.',
        ru: 'Влагостойкий массив тика с природными маслами, столешница из мрамора Carrara и керамическая раковина.',
        uz: 'Suvdan qo‘rqmaydigan moyli tabiiy tik yog‘ochi, silliq Carrara marmar yuzasi va oq sopol rakovina.'
      },
      material: 'oak',
      dimensions: '120 × 52 × 48 cm',
      price: 1190,
      productionTime: '14-16',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'bestseller',
      rating: 5.0
    },
    {
      id: 'bathroom-2',
      category: 'bathroom',
      svgType: 'bathroom',
      names: {
        en: 'Backlit Round Mirror with Oak Shelf',
        ru: 'Круглое зеркало с дубовой полочкой и LED',
        uz: 'Eman tokchali dumaloq LED ko‘zgu'
      },
      descriptions: {
        en: 'Demister heated anti-fog glass mirror with continuous 3000K warm LED halo ring and a solid oak vanity ledge.',
        ru: 'Зеркало с подогревом против запотевания, мягкой подсветкой 3000K и полочкой для парфюма из дуба.',
        uz: 'Bug‘lanishga qarshi qizdiruvchi mexanizm, yumshoq 3000K LED nuri va atirlar qo‘yish uchun qulay eman tokcha.'
      },
      material: 'oak',
      dimensions: 'Ø 80 × 12 cm',
      price: 360,
      productionTime: '7-9',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'new',
      rating: 4.9
    },
    {
      id: 'bathroom-3',
      category: 'bathroom',
      svgType: 'wardrobe',
      names: {
        en: 'Solid Cedar Linen & Towel Storage Tower',
        ru: 'Шкаф-пенал для полотенец из кедра',
        uz: 'Sochiqlar uchun baland kedr javoni'
      },
      descriptions: {
        en: 'Aromatic cedar interior naturally repelling moths and mildew. Slatted louvered door ensures fresh airflow for stored towels.',
        ru: 'Ароматный кедр защищает от сырости и плесени. Жалюзийные дверцы для постоянной вентиляции белья.',
        uz: 'Xushbo‘y tabiiy kedr yog‘ochi zax va mog‘ordan asraydi. Sochiqlar doim toza turishi uchun shamollatuvchi panjarali eshik.'
      },
      material: 'pine',
      dimensions: '45 × 38 × 185 cm',
      price: 680,
      productionTime: '10-12',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: null,
      rating: 4.8
    },
    {
      id: 'bathroom-4',
      category: 'bathroom',
      svgType: 'bathroom',
      names: {
        en: 'Compact Under-Sink Oak Cabinet',
        ru: 'Компактная тумба под раковину из дуба',
        uz: 'Rakovina tagiga ixcham eman shkafi'
      },
      descriptions: {
        en: 'U-shaped siphon cutout drawer maximizing storage around existing plumbing pipes. Sealed with marine yacht varnish.',
        ru: 'U-образный вырез под сифон для сохранения полезного места. Защита трехслойным яхтным лаком.',
        uz: 'Quvur atrofidagi joyni tejovchi U-shaklidagi tortma. Suv tomchilaridan saqlovchi 3 qavatli mustahkam laklangan.'
      },
      material: 'oak',
      dimensions: '75 × 46 × 52 cm',
      price: 540,
      productionTime: '8-10',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.7
    },
    {
      id: 'bathroom-5',
      category: 'bathroom',
      svgType: 'chair',
      names: {
        en: 'Spa Bath Caddy & Bamboo Shower Bench',
        ru: 'Спа-скамья и столик для ванны из бамбука',
        uz: 'Spa vanna o‘rindig‘i va patnisi'
      },
      descriptions: {
        en: 'Water-draining slatted curved shower stool with rubber foot pads and matching expandable tub tray for books and tea.',
        ru: 'Скамья с нескользящими ножками и раздвижной столик на ванну для книги, свечи и чашки чая.',
        uz: 'Sirpanmaydigan oyoqli qulay dush o‘rindig‘i va vanna ustiga qo‘yiladigan cho‘ziluvchi kitob va choy patnisi.'
      },
      material: 'pine',
      dimensions: '55 × 30 × 44 cm',
      price: 220,
      productionTime: '5-7',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: '-20%',
      rating: 4.8
    },

    // --- 11. OUTDOOR & GARDEN (5 items) ---
    {
      id: 'outdoor-1',
      category: 'outdoor',
      svgType: 'outdoor',
      names: {
        en: 'Weather-Resistant Teak Garden Bench',
        ru: 'Садовая скамья из массива тика Park',
        uz: 'Tashqi muhitga chidamli tik bog‘ o‘rindig‘i'
      },
      descriptions: {
        en: 'Generous 3-seater garden bench with contoured lumbar slats and broad flat armrests ideal for resting coffee mugs.',
        ru: 'Вместительная 3-местная скамья с эргономичной спинкой и широкими плоскими подлокотниками под чашку кофе.',
        uz: 'Qulay qiyalikdagi suyanchiq va choy piyolasini qo‘yishga mos keng tirsaklagichlarga ega 3 kishilik bog‘ skameykasi.'
      },
      material: 'oak',
      dimensions: '160 × 65 × 88 cm',
      price: 580,
      productionTime: '9-12',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'bestseller',
      rating: 4.9
    },
    {
      id: 'outdoor-2',
      category: 'outdoor',
      svgType: 'table',
      names: {
        en: 'Outdoor Acacia Dining Table & 6 Chairs',
        ru: 'Обеденный комплект для террасы из акации',
        uz: 'Terrasa uchun akatsiya stoli va 6 ta stul'
      },
      descriptions: {
        en: 'Slatted water-shedding acacia timber construction with stainless steel outdoor-rated connecting hardware.',
        ru: 'Комплект из прочной акации с зазорами для отвода дождевой воды и нержавеющей фурнитурой.',
        uz: 'Yomg‘ir suvi to‘planib qolmaydigan oraliqli akatsiya yog‘ochi va zanglamas po‘lat birikmalar bilan tayyorlangan to‘plam.'
      },
      material: 'oak',
      dimensions: '200 × 90 × 76 cm',
      price: 1380,
      productionTime: '14-16',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'new',
      rating: 4.9
    },
    {
      id: 'outdoor-3',
      category: 'outdoor',
      svgType: 'outdoor',
      names: {
        en: 'Teak Sun Lounger with Concealed Wheels',
        ru: 'Шезлонг из массива тика с колесиками',
        uz: 'G‘ildirakli tik yog‘ochidan quyosh shezlongi'
      },
      descriptions: {
        en: '4-position backrest recline, slide-out drinks tray, and rear rubber-tread wheels for effortless movement across the patio.',
        ru: '4 положения спинки, выдвижная подставка для напитков и резиновые колеса для легкого перемещения по террасе.',
        uz: 'Suyanchig‘i 4 xil balandlikda yotadi, ichidan ichimlik qo‘yish tokchasi chiqadi va hovlida oson surish uchun g‘ildiraklari bor.'
      },
      material: 'oak',
      dimensions: '200 × 68 × 35 cm',
      price: 640,
      productionTime: '10-12',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.8
    },
    {
      id: 'outdoor-4',
      category: 'outdoor',
      svgType: 'chair',
      names: {
        en: 'Covered Porch Rocking Chair in Solid Ash',
        ru: 'Кресло-качалка для веранды из ясеня',
        uz: 'Veranda uchun shumtol tebranma kreslosi'
      },
      descriptions: {
        en: 'Smooth rhythmic balance arc engineered for meditative porch relaxation. UV and moisture-resistant outdoor marine coating.',
        ru: 'Идеально сбалансированная дуга качания для вечернего отдыха на веранде. Защита от солнца и влаги.',
        uz: 'Maromida tebranish uchun puxta hisoblangan oyoq yoyi. Quyosh nurlari va namlikdan asrovchi maxsus tashqi qoplama.'
      },
      material: 'pine',
      dimensions: '70 × 85 × 102 cm',
      price: 420,
      productionTime: '8-10',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: null,
      rating: 4.9
    },
    {
      id: 'outdoor-5',
      category: 'outdoor',
      svgType: 'table',
      names: {
        en: 'Compact Balcony Bistro Set (Table + 2 Chairs)',
        ru: 'Складной комплект для балкона (Стол + 2 стула)',
        uz: 'Balkon uchun yig‘iluvchi to‘plam (Stol + 2 stul)'
      },
      descriptions: {
        en: 'Folds completely flat in 3 seconds for compact winter storage. Solid teak slats with electro-coated anti-rust frame.',
        ru: 'Полностью складывается за 3 секунды для зимнего хранения. Рейки из тика и антикоррозийный металлокаркас.',
        uz: 'Qishda saqlash uchun 3 soniyada yupqa qilib yig‘iladi. Tik taxtachalari va zanglamas metall korpus.'
      },
      material: 'metal',
      dimensions: '60 × 60 × 74 cm',
      price: 320,
      productionTime: '6-8',
      warranty: 5,
      colors: PINE_PALETTE,
      badge: '-20%',
      rating: 4.7
    },

    // --- 12. HALLWAY (5 items) ---
    {
      id: 'hallway-1',
      category: 'hallway',
      svgType: 'hallway',
      names: {
        en: 'Entryway Bench with Coat Hooks & Shoe Shelf',
        ru: 'Прихожая со скамьей, вешалкой и обувницей',
        uz: 'O‘rindiqli dahliz kiyim ilgichi va poyabzal javoni'
      },
      descriptions: {
        en: 'All-in-one entryway solution: thick cushioned sitting bench, bottom ventilated slatted shoe rack, and solid brass double coat hooks.',
        ru: 'Универсальный модуль: мягкая скамья, вентилируемая полка для обуви и надежные латунные крючки для одежды.',
        uz: 'Yumshoq o‘tirgich, shamollatuvchi poyabzal javoni va baquvvat latun kiyim ilgichlarini birlashtirgan universal dahliz mebeli.'
      },
      material: 'oak',
      dimensions: '110 × 42 × 195 cm',
      price: 590,
      productionTime: '9-12',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'bestseller',
      rating: 5.0
    },
    {
      id: 'hallway-2',
      category: 'hallway',
      svgType: 'table',
      names: {
        en: 'Slender Solid Walnut Entryway Console',
        ru: 'Узкая консоль для прихожей из ореха',
        uz: 'Dahliz uchun nafis ensiz yong‘oq konsoli'
      },
      descriptions: {
        en: 'Only 30cm deep to keep narrow entry passages clear. Two velvet-lined soft-close key drawers and lower display plinth.',
        ru: 'Глубина всего 30 см оставляет свободным проход. Два ящика для ключей с бархатом и нижняя полка для декора.',
        uz: 'Tor dahlizda erkin harakatlanish uchun bor-yo‘g‘i 30 sm enlikda ishlangan. Kalitlar uchun baxmalli 2 ta tortmasi bor.'
      },
      material: 'walnut',
      dimensions: '120 × 30 × 82 cm',
      price: 640,
      productionTime: '9-11',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: 'new',
      rating: 4.9
    },
    {
      id: 'hallway-3',
      category: 'hallway',
      svgType: 'hallway',
      names: {
        en: 'Full-Length Standing Mirror with Coat Pegs',
        ru: 'Напольное зеркало во весь рост с вешалкой сзади',
        uz: 'Orqasida ilgichi bor to‘liq bo‘yli oyna'
      },
      descriptions: {
        en: 'Swiveling full-height arch mirror concealing four hidden jacket pegs and an umbrella storage tray behind the reflective frame.',
        ru: 'Поворотное ростовое арочное зеркало с потайными крючками для верхней одежды и зонтов с обратной стороны.',
        uz: 'Orqa qismida ustki kiyim va soyabonlar uchun yashirin ilgichlari bo‘lgan aylanuvchi arkali baland oyna.'
      },
      material: 'oak',
      dimensions: '50 × 40 × 175 cm',
      price: 430,
      productionTime: '7-9',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.8
    },
    {
      id: 'hallway-4',
      category: 'hallway',
      svgType: 'hallway',
      names: {
        en: '4-Tier Slatted Oak Shoe Rack',
        ru: '4-ярусная деревянная обувница из дуба',
        uz: '4 qavatli panjarali eman poyabzal javoni'
      },
      descriptions: {
        en: 'Holds up to 16 pairs of footwear with an elevated bottom clearance accommodating high boots and robot vacuum cleaners.',
        ru: 'Вмещает до 16 пар обуви. Высокий нижний просвет подходит для высоких сапог и проезда робота-пылесоса.',
        uz: '16 juftgacha poyabzal sig‘adi. Baland pastki tirqishi uzun etiklar va robot-changyutgich o‘tishi uchun juda qulay.'
      },
      material: 'oak',
      dimensions: '90 × 32 × 78 cm',
      price: 310,
      productionTime: '6-8',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: null,
      rating: 4.7
    },
    {
      id: 'hallway-5',
      category: 'hallway',
      svgType: 'table',
      names: {
        en: 'Floating Key & Mail Organizer with Mirror',
        ru: 'Настенная ключница-органайзер с зеркалом',
        uz: 'Ko‘zguli osma kalit va xatlar javonchasi'
      },
      descriptions: {
        en: 'Compact wall entryway shelf with magnetic key rack underside, letter slots, and a small quick-check round mirror.',
        ru: 'Настенная полочка со скрытыми магнитами для ключей, слотом для почты и круглым зеркалом перед выходом.',
        uz: 'Uydan chiqishda qarash uchun kichik dumaloq oyna, magnitli kalit tutqichlar va xatlar uchun joyga ega ixcham osma javon.'
      },
      material: 'oak',
      dimensions: '60 × 15 × 35 cm',
      price: 180,
      productionTime: '4-6',
      warranty: 5,
      colors: OAK_PALETTE,
      badge: '-20%',
      rating: 4.8
    }
  ];

  // 6 Ready Room Sets
  window.ROOM_SETS = [
    {
      id: 'set-living',
      names: {
        en: 'Nordic Living Room Set',
        ru: 'Гостиный гарнитур Nordic',
        uz: 'Nordic mehmonxona to‘plami'
      },
      descriptions: {
        en: 'Harmonious oak and linen ensemble creating an airy Scandinavian sanctuary.',
        ru: 'Гармоничный ансамбль из дуба и льна для создания светлой скандинавской гостиной.',
        uz: 'Yorug‘ va shinam Skandinaviya uslubidagi eman va zig‘ir matoli uyg‘un to‘plam.'
      },
      items: [
        'Nordic Minimalist 3-Seater Sofa',
        'Floating Minimalist Oak TV Unit',
        'Nesting Coffee Tables (Set of 2)',
        'Danish Cord Accent Chair'
      ],
      oldPrice: 2300,
      bundlePrice: 1950,
      discount: '-15%',
      svgType: 'living'
    },
    {
      id: 'set-bedroom',
      names: {
        en: 'Master Sanctuary Bedroom Suite',
        ru: 'Спальный гарнитур Master Sanctuary',
        uz: 'Master Sanctuary yotoqxona to‘plami'
      },
      descriptions: {
        en: 'Complete sleep sanctuary combining solid oak floating bed with dual matching nightstands and 3-door wardrobe.',
        ru: 'Полный спальный гарнитур: парящая дубовая кровать, 2 тумбы и вместительный 3-дверный шкаф.',
        uz: 'To‘liq yotoqxona to‘plami: havoda suzuvchi eman krovat, 2 ta osma tumba va keng 3 eshikli shkaf.'
      },
      items: [
        'Nordic Floating Oak Bed (King)',
        '2-Door / 3-Door Solid Walnut Wardrobe',
        'Pair of Floating Nightstands',
        'Curved Bouclé Reading Chair'
      ],
      oldPrice: 3890,
      bundlePrice: 3250,
      discount: '-16%',
      svgType: 'bed'
    },
    {
      id: 'set-kitchen',
      names: {
        en: 'Artisan Kitchen & Dining Ensemble',
        ru: 'Кухонно-обеденный гарнитур Artisan',
        uz: 'Artisan oshxona va dasturxon to‘plami'
      },
      descriptions: {
        en: 'Solid oak kitchen island paired with Live Edge dining table and 4 Danish Cord hand-woven chairs.',
        ru: 'Кухонный остров из дуба, обеденный стол Live Edge и 4 плетеных стула ручной работы.',
        uz: 'Tabiiy eman oshxona oroli, tabiiy chetli (Live Edge) katta dasturxon stoli va 4 ta to‘qilgan stul.'
      },
      items: [
        'Artisan Solid Oak Kitchen Island',
        'Live Edge Solid Oak Dining Table',
        '4× Danish Cord Dining Chairs',
        'Wall Spice & Glass Rack'
      ],
      oldPrice: 4180,
      bundlePrice: 3490,
      discount: '-16%',
      svgType: 'kitchen'
    },
    {
      id: 'set-kids',
      names: {
        en: 'Creative Montessori Kids Haven',
        ru: 'Детская комната Creative Montessori',
        uz: 'Creative Montessori bolalar xonasi to‘plami'
      },
      descriptions: {
        en: 'Natural splinter-free timber room setup fostering independence, restful sleep, and creative learning.',
        ru: 'Безопасная мебель из массива для гармоничного развития, крепкого сна и творчества ребенка.',
        uz: 'Bolaning erkin rivojlanishi, xotirjam uyqusi va dars qilishi uchun toza tabiiy yog‘ochdan xavfsiz to‘plam.'
      },
      items: [
        'Montessori House Frame Low Bed',
        'Adjustable Children’s Study Desk & Chair',
        'Modular Wooden Toy Organizer & Bins',
        'Pastel Wardrobe Storage Unit'
      ],
      oldPrice: 1860,
      bundlePrice: 1540,
      discount: '-17%',
      svgType: 'kids'
    },
    {
      id: 'set-office',
      names: {
        en: 'Executive Heritage Study Suite',
        ru: 'Кабинетный гарнитур Executive Heritage',
        uz: 'Executive Heritage rahbar kabinet to‘plami'
      },
      descriptions: {
        en: 'Distinguished solid walnut workspace with ergonomic leather executive armchair and library shelving.',
        ru: 'Престижный кабинет из американского ореха с кожаным креслом и высокой библиотечной витриной.',
        uz: 'Qora yong‘oqdan tayyorlangan nufuzli ish stoli, yumshoq charm aylanma kreslo va baland kitob javoni.'
      },
      items: [
        'Executive Solid Walnut Writing Desk',
        'Ergonomic Leather Swivel Chair',
        'Geometric Black Walnut Bookshelf',
        'Floating Wall Shelves Set'
      ],
      oldPrice: 3610,
      bundlePrice: 2980,
      discount: '-17%',
      svgType: 'office'
    },
    {
      id: 'set-hallway',
      names: {
        en: 'Warm Welcome Entryway Collection',
        ru: 'Комплект для прихожей Warm Welcome',
        uz: 'Warm Welcome dahliz to‘plami'
      },
      descriptions: {
        en: 'Organized and elegant entrance suite with cushioned bench, mirror, console, and 4-tier shoe storage.',
        ru: 'Элегантный и функциональный комплект для прихожей: скамья с вешалкой, консоль и обувница.',
        uz: 'Xonadon ostonasidanoq qulaylik beruvchi to‘plam: o‘rindiqli ilgich, ko‘zgu, yong‘oq konsol va poyabzal javoni.'
      },
      items: [
        'Entryway Bench with Coat Hooks',
        'Slender Solid Walnut Entryway Console',
        '4-Tier Slatted Oak Shoe Rack',
        'Full-Length Standing Mirror'
      ],
      oldPrice: 1970,
      bundlePrice: 1620,
      discount: '-18%',
      svgType: 'hallway'
    }
  ];

  // 6 Verified Customer Reviews
  window.CUSTOMER_REVIEWS = [
    {
      name: 'Aziz Karimov',
      city: { en: 'Tashkent, Chilonzor', ru: 'Ташкент, Чиланзар', uz: 'Toshkent, Chilonzor' },
      item: { en: 'Live Edge Oak Dining Table', ru: 'Обеденный стол Live Edge', uz: 'Live Edge eman stoli' },
      stars: 5,
      avatar: 'A',
      quote: {
        en: 'The oak table is a true work of art. The natural grain and solid weight are beyond anything imported. Our family dinners feel like a celebration every day.',
        ru: 'Дубовый стол — это настоящее произведение искусства! Живой рисунок древесины и монолитная устойчивость. Семейные ужины стали особенными.',
        uz: 'Eman daraxtidan yasalgan stol haqiqiy san’at asari! Tabiiy naqshlari va salobati chet el mebellaridan ancha ustun. Oilaviy kechki ovqatlarimiz bayramdek o‘tmoqda.'
      }
    },
    {
      name: 'Elena Smirnova',
      city: { en: 'Tashkent, Mirabad', ru: 'Ташкент, Мирабад', uz: 'Toshkent, Mirobod' },
      item: { en: 'Nordic Floating Bed & Wardrobe', ru: 'Парящая кровать и шкаф Nordic', uz: 'Suzuvchi krovat va shkaf' },
      stars: 5,
      avatar: 'E',
      quote: {
        en: 'The 3D model was exact down to the centimeter. When the master joiners delivered and assembled everything, there was zero dust and the wood scent was heavenly.',
        ru: '3D-проект совпал до миллиметра! Мастера приехали вовремя, собрали без пыли и шума. В спальне стоит потрясающий аромат натурального воска и дерева.',
        uz: '3D loyiha millimetrigacha aniq chiqdi. Ustalar o‘z vaqtida kelib, toza va ehtiyotkorlik bilan yig‘ib berishdi. Xonadagi tabiiy yog‘och hidi kishiga huzur bag‘ishlaydi.'
      }
    },
    {
      name: 'Jamshid Rahimov',
      city: { en: 'Samarkand, Center', ru: 'Самарканд, Центр', uz: 'Samarqand shahri' },
      item: { en: 'Executive Walnut Office Suite', ru: 'Кабинет из массива ореха', uz: 'Yong‘oq daraxtli kabinet' },
      stars: 5,
      avatar: 'J',
      quote: {
        en: 'I ordered a custom walnut executive desk and matching bookshelf. The concealed cable management and solid joinery command instant respect from clients.',
        ru: 'Заказал стол и библиотеку из ореха в свой кабинет. Скрытые провода, солидная фактура дерева — все партнеры обращают внимание.',
        uz: 'Xususiy kabinetim uchun yong‘oqdan yozuv stoli va kitob javoni buyurtma qilgandim. Yashirin sim kanallari va yog‘och sifati barcha mehmonlarimda katta taassurot qoldirdi.'
      }
    },
    {
      name: 'Nodira Usmonova',
      city: { en: 'Bukhara, Old City', ru: 'Бухара, Старый город', uz: 'Buxoro shahri' },
      item: { en: 'Montessori Kids Haven Set', ru: 'Детская комната Montessori', uz: 'Montessori bolalar to‘plami' },
      stars: 5,
      avatar: 'N',
      quote: {
        en: 'Zero chemical smell! Our 3-year old daughter immediately fell in love with her house bed. The rounded corners give us complete peace of mind.',
        ru: 'Никакого запаха химии или клея! Дочка в восторге от кровати-домика. Все углы идеально закруглены, для ребенка абсолютно безопасно.',
        uz: 'Hech qanday kimyoviy hid yo‘q! 3 yoshli qizimiz uy-krovatini bir ko‘rishda yaxshi ko‘rib qoldi. Burchaklarining silliqligi bolamiz xavfsizligiga to‘liq ishonch beradi.'
      }
    },
    {
      name: 'Farrukh Aliev',
      city: { en: 'Tashkent, Yunusobod', ru: 'Ташкент, Юнусабад', uz: 'Toshkent, Yunusobod' },
      item: { en: 'Custom Artisan Kitchen Island', ru: 'Кухонный остров из дуба', uz: 'Eman oshxona oroli' },
      stars: 5,
      avatar: 'F',
      quote: {
        en: 'The quartz and solid oak blend seamlessly. Blum soft-close slides feel buttery smooth. A huge thank you to the master craftsmen at Mebelxona!',
        ru: 'Идеальное сочетание кварца и массива дуба. Австрийские доводчики работают как часы. Огромная благодарность мастерам цеха!',
        uz: 'Kvarts tosh va eman yog‘ochi bir-biriga juda yarashgan. Tortmalari bir tegishda mayin va shovqinsiz yopiladi. Mebelxona ustalariga katta rahmat!'
      }
    },
    {
      name: 'Malika Karimova',
      city: { en: 'Fergana, Center', ru: 'Фергана, Центр', uz: 'Farg‘ona shahri' },
      item: { en: 'Chesterfield Leather Sofa', ru: 'Кожаный диван Chesterfield', uz: 'Chesterfield charm divan' },
      stars: 5,
      avatar: 'M',
      quote: {
        en: 'The Italian leather feels supple and luxurious. Delivery to Fergana was fast, packed with multi-layer bubble wrap without a single scratch.',
        ru: 'Настоящая итальянская кожа высшего качества. Доставили в Фергану в надежной пятислойной упаковке, ни единой царапины.',
        uz: 'Haqiqiy oliy navli Italiya charmi. Farg‘onagacha ko‘p qavatli himoya qutilarida yetkazib berishdi, birorta ham tirnalishsiz yetib keldi.'
      }
    }
  ];

  // 6 FAQ Questions & Answers
  window.FAQS = [
    {
      q: {
        en: 'Can I order furniture according to my custom dimensions and sketches?',
        ru: 'Можно ли заказать мебель по моим индивидуальным размерам и эскизам?',
        uz: 'Mebelni o‘zimning shaxsiy o‘lchamlarim va chizmalarim asosida buyurtma qilsam bo‘ladimi?'
      },
      a: {
        en: 'Yes, absolutely! 80% of our projects are bespoke commissions. You can specify exact width, height, timber species (oak, walnut, pine, ash), and fabric colors. Our design engineer prepares a 3D drawing before production.',
        ru: 'Да, конечно! Более 80% наших заказов — индивидуальные проекты. Вы можете скорректировать габариты до сантиметра, выбрать породу древесины и оттенок обивки. Перед распилом мы подготовим точную 3D-модель.',
        uz: 'Albatta! Buyurtmalarimizning 80% dan ortig‘i shaxsiy loyihalar asosida tayyorlanadi. Siz o‘lchamlarni santimetrigacha o‘zgartirishingiz, yog‘och turini (eman, yong‘oq, qarag‘ay) va mato rangini tanlashingiz mumkin. Ish boshlanishidan oldin aniq 3D model tayyorlab beramiz.'
      }
    },
    {
      q: {
        en: 'What wood species do you work with and how is timber treated?',
        ru: 'С какими породами дерева вы работаете и как сушится массив?',
        uz: 'Qanday yog‘och turlari bilan ishlaysiz va yog‘och qanday quritiladi?'
      },
      a: {
        en: 'We work exclusively with kiln-dried solid timber (moisture content below 8%) and natural wood veneers: Caucasian Oak, American Black Walnut, Ash, Teak, and Scandinavian Pine. We treat the timber with organic bio-oils and beeswax without toxic formaldehyde.',
        ru: 'Мы используем массив только камерной сушки (влажность не более 8%): кавказский дуб, американский орех, ясень, тик и сосна. Для финишной защиты применяем сертифицированные немецкие эко-масла с твердым воском без формальдегида.',
        uz: 'Biz faqat maxsus quritish kamerasida quritilgan (namligi 8% dan kam) toza tabiiy yog‘och va shpondan foydalanamiz: Kavkaz emani, Amerika yong‘og‘i, shumtol, tik va qarag‘ay. Mebel yuzasiga zararli formaldegidsiz ekologik nemis tabiiy mumlari surtiladi.'
      }
    },
    {
      q: {
        en: 'What is the typical production timeline from agreement to delivery?',
        ru: 'Сколько времени занимает изготовление мебели от заказа до установки?',
        uz: 'Buyurtma berilganidan to yetkazib o‘rnatilguncha qancha vaqt ketadi?'
      },
      a: {
        en: 'Individual dining tables, chairs, and consoles take 7-14 days. Complex bedroom suites, kitchen islands, and bespoke wardrobes take 14-22 business days depending on design complexity.',
        ru: 'Изготовление обеденных столов, стульев и комодов занимает 7–14 рабочих дней. Сложные гарнитуры, кухни и крупногабаритные шкафы — от 14 до 22 рабочих дней.',
        uz: 'Alohida dasturxon stollari, stullar va konsollar 7-14 ish kunida tayyor bo‘ladi. Murakkab yotoqxona to‘plamlari, oshxona orollari va katta shkaflar 14-22 ish kuni davomida tayyorlanadi.'
      }
    },
    {
      q: {
        en: 'How does payment and the 5-year warranty contract work?',
        ru: 'Как происходит оплата и как действует 5-летняя гарантия?',
        uz: 'To‘lov tartibi qanday va 5 yillik kafolat qanday ishlaydi?'
      },
      a: {
        en: 'We operate under an official contract with a 30% down payment upon 3D approval, and the remaining 70% paid after white-glove installation and inspection. The 5-year warranty covers timber stability, joints, and Austrian hardware.',
        ru: 'Работаем по официальному договору: 30% предоплата при согласовании 3D-проекта, остальные 70% — после доставки, сборки и вашей проверки. 5-летняя гарантия распространяется на геометрию дерева, клеевые швы и фурнитуру.',
        uz: 'Rasmiy shartnoma asosida ishlaymiz: 3D loyiha tasdiqlangach 30% oldindan to‘lov, qolgan 70% esa mebel xonangizga o‘rnatilib, siz to‘liq tekshirib qabul qilganingizdan so‘ng to‘lanadi. 5 yillik kafolat yog‘och mustahkamligi va furnituralarga beriladi.'
      }
    },
    {
      q: {
        en: 'Do you deliver and install furniture across the country?',
        ru: 'Осуществляете ли вы доставку и сборку по всему Узбекистану?',
        uz: 'O‘zbekiston bo‘ylab yetkazib berish va o‘rnatish xizmati bormi?'
      },
      a: {
        en: 'Yes! We deliver across Tashkent with our own crew and specialized vehicle. For Samarkand, Bukhara, Fergana Valley, and all other regions, we pack items in reinforced crates and provide installation by our mobile master team.',
        ru: 'Да! По Ташкенту доставка и занос на этаж осуществляются нашим собственным транспортом. В Самарканд, Бухару, Ферганскую долину и другие регионы отправляем в жестких деревянных коробах с выездом бригады сборщиков.',
        uz: 'Ha, albatta! Toshkent shahri bo‘ylab o‘z transportimizda bepul yetkazib, qavatlarga ko‘tarib o‘rnatib beramiz. Samarqand, Buxoro, Farg‘ona vodiysi va boshqa barcha viloyatlarga maxsus qalin himoya qutilarida yetkaziladi va mutaxassislarimiz yig‘ib beradi.'
      }
    },
    {
      q: {
        en: 'How should I care for natural wood furniture to preserve its beauty?',
        ru: 'Как ухаживать за мебелью из натурального дерева?',
        uz: 'Tabiiy yog‘och mebellarini uzoq yillar yaxshi saqlash uchun qanday parvarishlash kerak?'
      },
      a: {
        en: 'Simply dust with a soft dry microfiber cloth. Spills should be wiped within minutes. Avoid aggressive abrasive cleaners. Every 2-3 years, we provide our clients with organic wood-care wax balm to restore the original luster.',
        ru: 'Протирайте сухой или слегка влажной мягкой салфеткой из микрофибры. Избегайте агрессивной химии. Каждые 2–3 года мы рекомендуем обновлять защитный слой нашим фирменным бальзамом на основе пчелиного воска.',
        uz: 'Yumshoq mikrofibra mato bilan changini artib turish kifoya. Suv yoki choy to‘kilsa darhol artilishi lozim. Agressiv kimyoviy tozalagichlar ishlatilmaydi. Har 2-3 yilda tabiiy jilosini yangilab turish uchun mijozlarimizga maxsus tabiiy asal mumi balzamini taqdim etamiz.'
      }
    }
  ];
})();
