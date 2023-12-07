function messege(button_text, func, after_buttons) {
    this.button_text = button_text;
    this.func = func;
    this.after_buttons = after_buttons;
}
function bread(name, price, img_address, explain, best_before, storage_method, size, allergy, ingredient) {
    this.name = name;//0한국어 1외국어
    this.price = price;
    this.img_address = img_address;
    this.explain = explain;
    this.best_before = best_before;
    this.storage_method = storage_method;
    this.size = size;
    this.allergy = allergy;
    this.ingredient = ingredient;
}
function brand(name, address, img_address, site_address, explain, work_time, phone, naver_location) {
    this.name = name;
    this.address = address;
    this.img_address = img_address;
    this.site_address = site_address;
    this.explain = explain;
    this.work_time = work_time;
    this.phone = phone;
    this.naver_location = naver_location;
}
const breads = [
    new bread("보문산메아리", "6,000원", "img/breads/보문산메아리.jpg",
        '숲속의 산책 달콤한 오후의 [보문산메아리] 보문산메아리는 촉촉한 페스츄리가 돌돌말려 메아리가 되었어요. 한겹 한겹 보드라운 빵결에 골드럼 시럽이 섬세하게 발려져 있어 깊은 풍미를 느끼실 수 있답니다. 보문산의 추억이 겹겹이 담긴 대전 시민을 위한 빵.※2012년 성심당 대전역 입점 기념빵',
        '당일섭취 권장상품',
        '직사광선을 피하고 서늘한 곳 보관',
        '17cm*17cm(높이10)',
        '밀, 우유, 난류(가금류) 함유/본 제품은 난류(가금류), 우유, 메밀, 아황산류, 대두, 토마토, 호두, 땅콩, 닭고기, 쇠고기, 밀, 새우, 돼지고기, 오징어, 잣을 사용한 제품과 같은 시설에서 제조하고 있습니다.',
        '강력(미국/캐나다) 버터시트(프랑스) 우유(원유:국산) 계란(국산)'
    ),
    new bread("튀김소보로", "1,700원", "img/breads/튀김소보로.png",
        "1980년 탄생 소보로, 앙금빵, 도넛의 3단 합체빵.<br>하나의 빵으로 3가지 맛을 즐기실 수 있는성심당 No.1 튀김소보로 입니다.", "당일섭취 권장상품", '직사광선을 피하고 서늘한 곳 보관', '10cm* 10cm', '난류(가금류), 우유, 아몬드, 대두, 밀 함유/본 제품은 난류(가금류), 우유, 메밀, 아황산류, 대두, 토마토, 호두, 땅콩, 닭고기, 쇠고기, 밀, 새우, 돼지고기, 오징어, 잣을 사용한 제품과 같은 시설에서 제조하고 있습니다.', '통팥앙금[단팥(중국),정제염(국산)] 강력(미국/캐나다) 박력(미국)'
    ),
    new bread("명란바게트", "3,800원", "img/breads/명란바게트.png",
        "빠삭 짭쪼롬 씹을수록 고소한 [명란바게트] <br>짭쪼롬한 명란과 쫄깃 꼬소한 바게트가 만나 먹을수록 손이 가는 빠사삭 명란바게트. 2018년 '전지적 참견시점' 예능 프로그램에 영자언니가 직접 추천한 빵으로 많은 인기를 얻은 빵 이에요. 명란 특유의 짭쪼롬한 맛에 감칠맛 나는 김가루를 더해서 매콤 짭쪼롬한 안주빵으로도 손색이 없는 명란바게트. 시원한 생맥주와 함께 빵맥으로 최고!", '당일섭취 권장상품', '직사광선을 피하고 서늘한 곳 보관',
        '6cm* 27cm', '밀, 대두, 난류(가금류), 쇠고기, 조개류(굴) 함유/본 제품은 난류(가금류), 우유, 메밀, 아황산류, 대두, 토마토, 호두, 땅콩, 닭고기, 쇠고기, 밀, 새우, 돼지고기, 오징어, 잣을 사용한 제품과 같은 시설에서 제조하고 있습니다.', '고급강력(프랑스) 명란젓[명란(러시아산),식염(국산)] 버터(덴마크)'
    ),
    new bread("작은메아리", "3,000원", "img/breads/작은메아리.jpg",
        '달콤 바삭 찐한 버터의 풍미 깊은 [작은메아리] <br>달콤한 버터 맛이 풍미깊은 작은 메아리는 한입 베어물면 카라멜 맛의 달콤함, 바삭한 껍질, 부드럽고 고소한 버터의 풍미가 진하게 느껴지는 버터과자 같은 페이스트리 입니다.', '당일섭취 권장상품', '직사광선을 피하고 서늘한 곳 보관', '12cm * 12cm', '밀, 우유, 난류(가금류) 함유/본 제품은 난류(가금류), 우유, 메밀, 아황산류, 대두, 토마토, 호두, 땅콩, 닭고기, 쇠고기, 밀, 새우, 돼지고기, 오징어, 잣을 사용한 제품과 같은 시설에서 제조하고 있습니다.', '버터시트(프랑스) 고급밀가루(프랑스) 밀가루(미국/캐나다) 우유(원유:국산)'
    ),
    new bread("단팥빵", "1,700원", "img/breads/단팥빵.png",
        '달달한 팥앙금 밤 알갱이 콕 박힌 성심당 [단팥빵]<br> 빵하면 앙금빵. 달콤한 통팥앙금에 살짝살짝 씹히는 호두와 톡톡한 밤 알갱이가 포인트인 매력만점 단팥빵은 남녀노소 불문하고 사랑받는 앙꼬빵입니다. 간편 답례빵으로도 추천드려요!',
        '당일섭취 권장상품',
        '직사광선을 피하고 서늘한 곳 보관',
        '11cm * 11cm',
        '밀, 우유, 대두, 난류(가금류), 호두, 아황산류 함유/본 제품은 난류(가금류), 우유, 메밀, 아황산류, 대두, 토마토, 호두, 땅콩, 닭고기, 쇠고기, 밀, 새우, 돼지고기, 오징어, 잣을 사용한 제품과 같은 시설에서 제조하고 있습니다.',
        '통팥앙금[팥(중국산), 정제소금(국산)] 강력(미국/캐나다) 계란(국산)'
    ),
    new bread("토요빵", "3,800원", "img/breads/토요빵.png",
        "토요일의 휴식같은 달달 쫀득 [토요빵]<br> 자색 고구마의 달콤한 맛과 타피오카의 쫀득한 식감이 조화로운 성심당 인기빵! 빵 표면은 달달 바삭한 옥수수가루와 연유로 만든 소보로가 코팅되어 크런키하고, 속에는 쫀득한 타피오카가 쫄깃한 토요빵. 2005년 5월 어느 토요일에 첫 선을 보여 토요빵이라 불리게 된 재밌는 사연을 가진 빵이에요",
        '당일섭취 권장상품', '직사광선을 피하고 서늘한 곳 보관', '9cm * 16cm',
        '밀, 우유, 쇠고기, 대두 함유/본 제품은 난류(가금류), 우유, 메밀, 아황산류, 대두, 토마토, 호두, 땅콩, 닭고기, 쇠고기, 밀, 새우, 돼지고기, 오징어, 잣을 사용한 제품과 같은 시설에서 제조하고 있습니다.', '강력(미국/캐나다) 우유(원유:국산) 크림치즈(호주) 적고구마(국산)'
    ),
    new bread("소보로", "1,300원", "img/breads/소보로.jpg",
        '바삭 촉촉 기본에 충실한 성심당 [소보로]<br>겉면은 바삭, 속은 촉촉! 성심당 소보로. 고소한 땅콩버터의 풍미가 가득한 크런치한 비스킷이 올려진 고전적인 소보로. 특유의 촉촉함과 부드러움의 깊이가 남다른 소보로는 차가운 우유와 함께 드시면 고소한 맛이 살아나는 간편한 기본 간식빵입니다.※단체주문 추천빵', '당일섭취 권장상품', '직사광선을 피하고 서늘한 곳 보관',
        '10cm * 10cm',
        '밀, 우유, 난류(가금류), 대두, 아몬드, 땅콩 함유/본 제품은 난류(가금류), 우유, 메밀, 아황산류, 대두, 토마토, 호두, 땅콩, 닭고기, 쇠고기, 밀, 새우, 돼지고기, 오징어, 잣을 사용한 제품과 같은 시설에서 제조하고 있습니다.', '강력(미국/캐나다) 박력(미국) 계란(국산)'
    ),
    // new bread("팡오레", "2,000원", "img/breads/팡오레.jpg"),
    new bread("초코튀소", "2,000원", "img/breads/초코튀소.jpg"),
    new bread("판타롱부추빵", "2,000원", "img/breads/판타롱부추빵.png"),
    new bread("월넛브레드", "4,000원", "img/breads/월넛브레드.png"),
    new bread("빅매치", "2,300원", "img/breads/빅매치.jpg"),
    new bread("교황님의 치즈스콘", "4,000원", "img/breads/교황님의 치즈스콘.jpg")
];
const brands = [
    new brand("성심당 본점", '대전광역시 중구 대종로 480번길 15 (은행동 145)', "img/brands/성심당 본점.JPG", 'https://www.sungsimdang.co.kr/31/15'
        , "대전역 앞 작은 찐빵집, 대전의 문화가 되다.", "매일 : 08:00~22:00 / 연중무휴", "1588-8069", "https://map.naver.com/p/entry/place/11871325?placePath=%2Fhome&c=15.00,0,0,0,dh"),
    new brand("성심당 케익부띠끄", '대전광역시 중구 대종로 480', "img/brands/성심당 케익부띠끄.JPG", 'https://www.sungsimdang.co.kr/31/16', '성심당만의 다양하고 특별한 케익을 만날 수 있는 클래식한 공간', '월화수목금일 : 08:00~21:30 / 토 : 08:00~22:00 / 연중무휴', '1588-8069', 'https://map.naver.com/p/entry/place/35644550?placePath=%2Fhome&c=15.00,0,0,0,dh'),
    new brand("성심당 DCC점", '대전광역시 유성구 엑스포로107(도룡동 4-19) 대전컨벤션센터1F', "img/brands/성심당 DCC점.JPG", 'https://www.sungsimdang.co.kr/31/17', '대전컨벤션센터를 찾는 세미나. 국제학술대회. 문화행사와 함께 만나는 향토기업 성심당', '1F.빵.매일 : 08:00~22:00 / 1F카페.매일 : 08:00~21:00 / 2F.카페 : 매일 08:00~20:00', '1588-8069', 'https://map.naver.com/p/entry/place/1977855888?placePath=%2Fhome&c=15.00,0,0,0,dh'),
    new brand("성심당 롯데백화점 대전점", '대전광역시 서구 계룡로 598', "img/brands/성심당 롯데백화점.JPG", 'https://www.sungsimdang.co.kr/31/18', '성심당 시그니쳐 스토어. 케익부띠크. 옛맛솜씨. 카페. 감성충전 오븐스토리(B1)', '매일 : 08:00~22:00 / 연중무휴', '1588-8069', 'https://map.naver.com/p/entry/place/1170663310?placePath=%2Fhome&c=15.00,0,0,0,dh'),
    new brand("성심당 대전역점", '대전광역시 동구 중앙로 215', "img/brands/성심당 대전역점.JPG", 'https://www.sungsimdang.co.kr/31/19', '밀가루 두 포대로 대전에서 시작된 성심당. 56년만에 대전역에 입점하다.', '매일 : 07:00~22:30 / 연중무휴', '1588-8069', 'https://map.naver.com/p/entry/place/36731468?placePath=%2Fhome&c=15.00,0,0,0,dh'),


    new brand("성심당 옛맛솜씨", '대전광역시 중구 대종로 480길 14', "img/brands/성심당 옛맛솜씨.JPG", 'https://www.sungsimdang.co.kr/31/24', '성심당의 노스탤지어 감성으로 탄생한 옛맛솜씨는 70년대 옛 정서가 가득한 우리 과자점', '매일 : 09:30~21:00 / 연중무휴', '042-220-4188', 'https://map.naver.com/p/entry/place/1829271382?placePath=%2Fhome&c=15.00,0,0,0,dh'),

    new brand("성심당문화원", '대전광역시 중구 중교로73번길 11', "img/brands/성심당문화원.JPG", 'https://www.sungsimdang.co.kr/31/26', '성심당의 이념과 대전의 정서를 담은 성심당문화원입니다.', 'Think bread, Thank nature<br>1F˙2F: 메아리상점 / 3F: 메아리라운지 / 4F˙5F: 갤러리라루 / B1: 메아리곳간', '1588-8069', 'https://map.naver.com/p/entry/place/1068735116?placePath=%2Fhome&c=15.00,0,0,0,dh'),

    new brand("테라스키친", '대전광역시 중구 대종로480번길 15, 2F', "img/brands/테라스키친.JPG", 'https://www.sungsimdang.co.kr/31/20', '1992년 오픈한 전국 최초 베이커리 레스토랑', '매일 : 08:00~21:30 / 연중무휴', '042-220-4128', 'https://map.naver.com/p/entry/place/16043374?placePath=%2Fhome&c=15.00,0,0,0,dh'),
    new brand("플라잉팬", '대전광역시 중구 대종로 480 2F', "img/brands/플라잉팬.JPG", 'https://www.sungsimdang.co.kr/31/21', '비즈니스 미팅. 디너코스, 스테이크가 있는 프라이빗 하고 품격있는 성심당 이탈리안 레스토랑', '매일 : 11:00~21:00 / 연중무휴', '042-223-4126', 'https://map.naver.com/p/entry/place/16045148?placePath=%2Fhome&c=15.00,0,0,0,dh'),
    new brand("우동야", '대전광역시 중구 대종로480번길 15 지하상가 D가-22', "img/brands/우동야.JPG", 'https://www.sungsimdang.co.kr/31/22'
        , '춤추는 면발로 즐기는 성심당 자가제면 일본식 우동야', '매일 : 10:30~20:00 / 지하상가휴무일(매달3째주 화요일)', '042-220-4131', 'https://map.naver.com/p/entry/place/20601419?placePath=%2Fhome&c=15.00,0,0,0,dh'),


    new brand("삐아또", '대전광역시 중구 중앙로156번길 28', "img/brands/삐아또.JPG", 'https://www.sungsimdang.co.kr/31/23', '이탈리아 토스카나지방의 따뜻한과 정취가 묻어나는 소박한 파스타전문점', '매일 : 11:00~21:30 / 연중무휴', '042-220-4130', 'https://map.naver.com/p/entry/place/16259064?placePath=%2Fhome&c=15.00,0,0,0,dh'),
    new brand("오븐스토리", '대전 중구 대종로 605 1F', "img/brands/오븐스토리.JPG", 'https://www.sungsimdang.co.kr/31/25', 'DAEJEON SUNGSIMDANG’S CATERING & PARTY', '연중무휴', '042-220-4112', 'https://map.naver.com/p/entry/place/36519792?placePath=%2Fhome&c=15.00,0,0,0,dh')
];