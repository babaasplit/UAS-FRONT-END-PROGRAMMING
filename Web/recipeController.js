var app = angular.module('thriveSoulApp', []);

app.controller('RecipeController', function($scope, $location) {

    // Main Recipes Data
    const recipes = [
        { 
            id: 1, 
            imgSrc: 'images/recipe1.jpg', 
            description: 'Craft Your Own Signature Scents with Essential Oil Blends', 
            details: 'Learn to mix essential oils to create unique and natural fragrances.',
            steps: [
                "Siapkan essential oils, carrier oil, dan botol kaca.",
                "Tentukan komposisi aroma (top, middle, base notes).",
                "Campur essential oils sesuai takaran.",
                "Tambahkan carrier oil ke botol hingga penuh.",
                "Kocok campuran selama 1-2 menit, lalu diamkan selama 24 jam.",
                "Gunakan campuran sebagai parfum atau pengharum ruangan."
            ]
        },
        { 
            id: 2, 
            imgSrc: 'images/recipe2.jpg', 
            description: 'Natural Acne Solutions: 12 DIY Masks for Clearer Skin', 
            details: 'Step-by-step instructions to create acne-fighting face masks using natural ingredients.',
            steps: [
                "Campurkan madu dan kayu manis untuk masker antibakteri.",
                "Gunakan oatmeal dan yogurt untuk masker yang menenangkan kulit.",
                "Buat masker lemon dan putih telur untuk mencerahkan kulit.",
                "Gunakan lidah buaya dan teh hijau untuk meredakan jerawat."
            ]
        },
        { 
            id: 3, 
            imgSrc: 'images/recipe3.jpg', 
            description: 'Exfoliate Naturally: Homemade Face Scrubs Using Pantry Staples', 
            details: 'Create gentle scrubs with ingredients you already have at home.',
            steps: [
                "Buat scrub gula dan minyak kelapa untuk kulit lembut.",
                "Gunakan bubuk kopi dan madu untuk menyegarkan kulit.",
                "Campurkan oatmeal dan susu untuk membersihkan pori-pori."
            ]
        },
        { 
            id: 4, 
            imgSrc: 'images/recipe4.jpg', 
            description: 'Fresh Juicing Guide: 3 Simple Recipes for a Healthy Boost', 
            details: 'Prepare delicious and nutritious juices to energize your day.',
            steps: [
                "Blender apel hijau, bayam, mentimun, dan air kelapa untuk jus detoks.",
                "Campurkan mangga, nanas, dan jeruk untuk jus energi.",
                "Blender wortel, jahe, dan madu untuk jus anti-inflamasi."
            ]
        },
        { 
            id: 5, 
            imgSrc: 'images/beauty1.jpg', 
            description: '5 Face Massage Techniques for a Youthful Glow', 
            details: 'Langkah-langkah pijat wajah untuk kulit glowing.',
            steps: [
                "Gosokkan telapak tangan untuk memanaskan kulit.",
                "Pijat area dagu ke arah telinga.",
                "Lakukan pijatan lembut di sekitar mata.",
                "Fokus pada dahi dan pelipis untuk mengurangi stres."
            ]
        },
        { 
            id: 6, 
            imgSrc: 'images/beauty2.jpg', 
            description: '5 Face Massage Techniques for a Youthful Glow', 
            details: 'Langkah-langkah pijat wajah untuk kulit glowing.',
            steps: [
                "Gosokkan telapak tangan untuk memanaskan kulit.",
                "Pijat area dagu ke arah telinga.",
                "Lakukan pijatan lembut di sekitar mata.",
                "Fokus pada dahi dan pelipis untuk mengurangi stres."
            ]
        },
        { 
            id: 7, 
            imgSrc: 'images/beauty3.jpg', 
            description: 'What You Need to Know About the Viral Skin Flooding Trend', 
            details: 'Learn the benefits of skin flooding for hydration.',
            steps: [
                "Gunakan hydrating toner sebagai dasar.",
                "Tambahkan serum dengan kandungan tinggi air.",
                "Gunakan pelembap kaya untuk menjaga kelembapan.",
                "Ulangi proses ini beberapa kali."
            ]
        },
        { 
            id: 8, 
            imgSrc: 'images/beauty4.jpg', 
            description: 'The Benefits of Green Tea for Your Skin and Hair', 
            details: 'Discover the powerful antioxidants of green tea.',
            steps: [
                "Gunakan teh hijau sebagai masker wajah.",
                "Gunakan teh hijau untuk bilasan rambut.",
                "Manfaatkan kandungan anti-inflamasi dalam teh hijau."
            ]
        },
        { 
            id: 9, 
            imgSrc: 'images/haircare1.jpg', 
            description: '10 DIY Hair Masks to Repair Damaged Hair', 
            details: 'Easy-to-make hair masks for smoother, healthier hair.',
            steps: [
                "Gunakan alpukat dan madu untuk masker pelembap.",
                "Coba masker yogurt dan minyak zaitun untuk rambut kering.",
                "Gunakan minyak kelapa dan pisang untuk masker penebalan rambut."
            ]
        },
        { 
            id: 10, 
            imgSrc: 'images/haircare2.jpg', 
            description: '5 Natural Oils for Hair Growth and Thickness', 
            details: 'Top oils to stimulate hair growth.',
            steps: [
                "Gunakan minyak rosemary untuk merangsang pertumbuhan rambut.",
                "Minyak jarak membantu memperbaiki rambut rontok.",
                "Minyak kelapa melindungi rambut dari kerusakan."
            ]
        },
        { 
            id: 11, 
            imgSrc: 'images/haircare3.jpg', 
            description: 'How to Make Your Own Dry Shampoo at Home', 
            details: 'Learn to create your own dry shampoo using natural ingredients.',
            steps: [
                "Campurkan tepung jagung dan kakao untuk warna alami.",
                "Tambahkan minyak esensial untuk aroma segar.",
                "Saring campuran dan simpan dalam wadah.",
                "Gunakan dengan kuas atau botol penyemprot."
            ]
        },
        { 
            id: 12, 
            imgSrc: 'images/haircare4.jpg', 
            description: 'The Best Scalp Treatments for Healthy Hair', 
            details: 'Improve scalp health with these effective treatments.',
            steps: [
                "Gunakan minyak tea tree untuk mengatasi ketombe.",
                "Lakukan pijatan dengan minyak jojoba untuk rambut sehat.",
                "Gunakan masker alpukat untuk menutrisi kulit kepala."
            ]
        },
        { 
            id: 13, 
            imgSrc: 'images/good1.jpg', 
            description: 'Avocado Toast with Egg - A perfect healthy breakfast!', 
            details: 'A quick and nutritious breakfast option.',
            steps: [
                "Ratakan alpukat di atas roti panggang.",
                "Tambahkan telur mata sapi di atasnya.",
                "Taburkan garam dan merica untuk rasa."
            ]
        },
        { 
            id: 14, 
            imgSrc: 'images/good2.jpg', 
            description: 'Berry Smoothie Bowl - Refreshing and full of antioxidants.', 
            details: 'A healthy smoothie bowl for breakfast.',
            steps: [
                "Blender beri campuran dengan yogurt.",
                "Tambahkan granola dan biji chia di atasnya.",
                "Nikmati saat sarapan untuk energi pagi."
            ]
        },
        { 
            id: 15, 
            imgSrc: 'images/good3.jpg', 
            description: 'Quinoa Salad - Packed with protein and fresh veggies.', 
            details: 'A nutritious and filling salad.',
            steps: [
                "Campurkan quinoa yang sudah matang dengan sayuran segar.",
                "Tambahkan alpukat dan minyak zaitun untuk rasa.",
                "Taburkan biji labu dan kacang kenari untuk tekstur."
            ]
        },
        { 
            id: 16, 
            imgSrc: 'images/good4.jpg', 
            description: 'Dark Chocolate Energy Bites - A guilt-free sweet treat.', 
            details: 'A healthy, energizing snack.',
            steps: [
                "Campurkan cokelat hitam, kacang almond, dan madu.",
                "Bentuk bola kecil dan simpan di lemari es.",
                "Nikmati sebagai camilan sehat di siang hari."
            ]
        },
        { 
            id: 17, 
            imgSrc: 'images/skincare1.jpg', 
            description: 'Gentle Face Scrub', 
            details: 'A soothing scrub to exfoliate your skin gently.',
            steps: [
                "Campurkan gula pasir dan minyak kelapa.",
                "Pijatkan pada wajah dengan gerakan memutar.",
                "Bilas dengan air hangat dan gunakan pelembap setelahnya."
            ]
        },
        { 
            id: 18, 
            imgSrc: 'images/skincare2.jpg', 
            description: 'Soothing Face Mask', 
            details: 'A calming face mask to hydrate your skin.',
            steps: [
                "Campurkan madu dan yogurt, aplikasikan ke wajah.",
                "Diamkan selama 15 menit, lalu bilas dengan air hangat."
            ]
        },
        { 
            id: 19, 
            imgSrc: 'images/skincare3.jpg', 
            description: 'Hydrating Serum', 
            details: 'A serum to keep your skin moisturized all day.',
            steps: [
                "Campurkan minyak jojoba dan vitamin E.",
                "Aplikasikan beberapa tetes ke wajah setelah toner."
            ]
        },
        { 
            id: 20, 
            imgSrc: 'images/skincare4.jpg', 
            description: 'Nourishing Night Cream', 
            details: 'A nourishing cream for your nightly skincare routine.',
            steps: [
                "Oleskan cream secara merata ke wajah sebelum tidur.",
                "Biarkan semalaman untuk hasil maksimal."
            ]
        },
        { 
            id: 21, 
            imgSrc: 'images/haircare1.jpg', 
            description: 'Deep Conditioning Treatment', 
            details: 'A treatment to restore moisture and strength to your hair.',
            steps: [
                "Gunakan masker rambut berbahan dasar alpukat dan minyak kelapa.",
                "Diamkan selama 20 menit, lalu bilas dengan air hangat."
            ]
        },
        { 
            id: 22, 
            imgSrc: 'images/haircare2.jpg', 
            description: 'Herbal Hair Rinse', 
            details: 'A rinse to soothe your scalp and promote healthy hair.',
            steps: [
                "Seduh teh chamomile atau daun peppermint.",
                "Gunakan sebagai bilasan setelah keramas."
            ]
        },
        { 
            id: 23, 
            imgSrc: 'images/haircare3.jpg', 
            description: 'Volumizing Mousse', 
            details: 'A mousse to add volume and texture to your hair.',
            steps: [
                "Aplikasikan mousse pada rambut basah.",
                "Keringkan rambut dengan hair dryer untuk hasil maksimal."
            ]
        },
        { 
            id: 24, 
            imgSrc: 'images/haircare4.jpg', 
            description: 'Frizz Control Serum', 
            details: 'A serum to tame frizz and keep your hair smooth.',
            steps: [
                "Teteskan serum pada rambut kering.",
                "Ratakan ke seluruh bagian rambut untuk hasil yang halus."
            ]
        },
    ];

    // Get Recipe ID from URL
    const queryParams = new URLSearchParams($location.absUrl().split('?')[1]);
    const recipeId = parseInt(queryParams.get('id'), 10);

    // Find the Recipe by ID
    $scope.recipe = recipes.find(r => r.id === recipeId) || null;
});
