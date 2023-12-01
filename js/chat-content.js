function messege(button_text, func, after_buttons) {
    this.button_text = button_text;
    this.func = func;
    this.after_buttons = after_buttons;
}
function bread(name, price, img_address) {
    this.name = name;//0한국어 1외국어
    this.price = price;
    this.img_address = img_address;
}
const breads = [
    new bread("보문산메아리", "6,000원", "img/breads/보문산메아리.jpg"),
    new bread("튀김소보로", "1,700원", "img/breads/튀김소보로.png"),
    new bread("명란바게트", "3,800원", "img/breads/명란바게트.png"),
    new bread("작은메아리", "3,000원", "img/breads/작은메아리.jpg"),
    new bread("토요빵", "3,800원", "img/breads/토요빵.png"),
    new bread("단팥빵", "1,700원", "img/breads/단팥빵.png"),
    new bread("소보로", "1,300원", "img/breads/소보로.jpg"),
    new bread("팡오레", "2,000원", "img/breads/팡오레.jpg"),

    new bread("초코튀소", "2,000원", "img/breads/초코튀소.jpg"),
    new bread("판타롱부추빵", "2,000원", "img/breads/판타롱부추빵.png"),
    new bread("월넛브레드", "4,000원", "img/breads/월넛브레드.png"),
    new bread("빅매치", "2,300원", "img/breads/빅매치.jpg"),
    new bread("교황님의 치즈스콘", "4,000원", "img/breads/교황님의 치즈스콘.jpg")
];
var tree = [
    new messege(
        "처음부터",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = "안녕하세요, 성심당입니다.<br><br> <strong>​운영시간</strong><br> 평일 10:00~18:00<br> - 점심시간(12:00~13:00) 제외 <br>- 주말,공휴일 휴무 <br><br>문의 사항을 아래에서 선택해주세요.";
            bot_content.appendChild(result);
        }
        , [1, 2, 3]
    ),
    new messege(
        "인기메뉴",
        (bot_content) => {
            var best = [0, 1, 2, 3, 4];
            var result = document.createElement('div');
            var tmp = document.createElement('div');
            tmp.innerHTML = "베 스 트";
            tmp.style.marginBottom = "2rem";
            tmp.style.width = "15rem";
            result.appendChild(tmp);

            var bot_scroll = document.createElement('div');

            bot_scroll.style.paddingRight = "0.2rem";
            for (var i = 0; i < best.length; i++) {
                bot_scroll.appendChild(bread_box(breads[best[i]]));
                if (i != best.length - 1) {
                    tmp = document.createElement('hr');
                    bot_scroll.appendChild(tmp);
                }
            }
            result.appendChild(bot_scroll);
            bot_content.appendChild(result);
        },
        [0]
    ),
    new messege(
        "전체메뉴",
        (bot_content) => {

            var result = document.createElement('div');
            var content = document.createElement('div');
            content.innerHTML = "전 체 메 뉴";
            content.style.marginBottom = "2rem";
            result.appendChild(content);

            var content_scroll = document.createElement('div');
            content_scroll.classList.add('hidden-scroll');
            content_scroll.style.overflow = "scroll";
            content_scroll.style.width = "15rem";
            content_scroll.style.height = "30rem";
            content_scroll.style.paddingRight = "0.2rem";

            for (var i = 0; i < breads.length; i++) {

                content_scroll.appendChild(bread_box(breads[i]));
                if (i != breads.length - 1) {
                    content = document.createElement('hr');
                    content_scroll.appendChild(content);
                }
                result.appendChild(content_scroll);
            }
            bot_content.appendChild(result);
        },
        [0]
    ),
    new messege(
        "성심당의 역사",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = "성심당은 1956년에 설립되었으며, 국내에서 가장 오래된 빵집 중 하나로 알려져 있습니다. ";
            bot_content.appendChild(result);
            var result = document.createElement('div');
            result.innerHTML = "성심당 창업주 故임길순·故한순덕 부부는 함경남도 함주 고향으로 1950년 한국전쟁 중 흥남부두 철수작전 마지막 피난민을 싣은 메러디스빅토리호에 기적적으로 몸을 싣어, 잠시 거제도에 머문 뒤 진해에 정착했습니다. ";
            bot_content.appendChild(result);
            var result = document.createElement('div');
            result.innerHTML = "이후 서울로 이주하고자 열차를 타고 이동하던 중 열차 고장으로 의도치 않게 대전에 머물게 되었고 대흥동성당에서 원조 받은 밀가루 두 포대로 대전역 앞에서 찐빵집을 시작해 오늘날의 성심당이 되었습니다.";
            bot_content.appendChild(result);
        },
        [0]
    )
];