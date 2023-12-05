var tree = [
    new messege(
        "처음부터",
        function (bot_content) {
            var result = document.createElement('div');
            result.innerHTML = "안녕하세요, 성심당입니다.<br><br> <strong>​운영시간</strong><br> 평일 10:00~18:00<br> - 점심시간(12:00~13:00) 제외 <br>- 주말,공휴일 휴무 <br><br>문의 사항을 아래에서 선택해주세요.";
            bot_content.appendChild(result);
            var result = document.createElement('div');
        }
        , [1, 2, 3, 4, 5]
    ),
    new messege(
        "인기메뉴",
        (bot_content) => {
            var best = [0, 1, 2, 3, 4];
            var result = document.createElement('div');
            var tmp = document.createElement('div');
            tmp.innerHTML = "베 스 트";
            tmp.style.marginBottom = "2rem";
            result.appendChild(tmp);

            var bot_scroll = document.createElement('div');
            bot_scroll.style.height = "20rem";
            bot_scroll.style.paddingRight = "0.2rem";
            for (var i = 0; i < best.length; i++) {
                var _bread = bread_box(breads[best[i]]);
                if (i % 2 == 0) {
                    _bread.style.backgroundColor = "#FFE8B9";
                } else {
                    _bread.style.backgroundColor = "#FFFFFF";
                }
                bot_scroll.appendChild(_bread);
                if (i != best.length - 1) {
                    tmp = document.createElement('hr');
                    bot_scroll.appendChild(tmp);
                }
            }
            result.appendChild(bot_scroll);
            result.style.width = '15rem';
            result.style.paddingBottom = '1.5rem';
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
            content_scroll.style.height = "20rem";
            content_scroll.style.paddingRight = "0.2rem";

            for (var i = 0; i < breads.length; i++) {
                var _bread = bread_box(breads[i]);
                if (i % 2 == 0) {
                    _bread.style.backgroundColor = "#FFE8B9";
                } else {
                    _bread.style.backgroundColor = "#FFFFFF";
                }
                content_scroll.appendChild(_bread);
                if (i != breads.length - 1) {
                    content_scroll.appendChild(document.createElement('hr'));
                }
                result.appendChild(content_scroll);
            }
            result.style.width = '15rem';
            bot_content.appendChild(result);
        },
        [0]
    ),
    new messege(
        "성심당의 역사",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = "성심당은 1956년에 설립되었으며, 국내에서 가장 오래된 빵집 중 하나로 알려져 있습니다. ";
            result.style.maxWidth = "15rem";
            bot_content.appendChild(result);
            var result = document.createElement('div');
            result.innerHTML = "성심당 창업주 故임길순·故한순덕 부부는 함경남도 함주 고향으로 1950년 한국전쟁 중 흥남부두 철수작전 마지막 피난민을 싣은 메러디스빅토리호에 기적적으로 몸을 싣어, 잠시 거제도에 머문 뒤 진해에 정착했습니다. ";
            result.style.maxWidth = "15rem";
            bot_content.appendChild(result);
            var result = document.createElement('div');
            result.innerHTML = "이후 서울로 이주하고자 열차를 타고 이동하던 중 열차 고장으로 의도치 않게 대전에 머물게 되었고 대흥동성당에서 원조 받은 밀가루 두 포대로 대전역 앞에서 찐빵집을 시작해 오늘날의 성심당이 되었습니다.";
            result.style.maxWidth = "15rem";
            bot_content.appendChild(result);
            result.style.maxWidth = "15rem";
        },
        [0]
    ),
    new messege(
        "매장 위치",
        (bot_content) => {
            var result = document.createElement('div');
            var tmp = document.createElement('div');
            tmp.innerHTML = "매 장 위 치";
            tmp.style.marginBottom = "2rem";
            result.appendChild(tmp);

            var content_scroll = document.createElement('div');
            content_scroll.classList.add('hidden-scroll');
            content_scroll.style.overflow = "scroll";
            content_scroll.style.height = "20rem";
            content_scroll.style.width = "15rem";
            content_scroll.style.paddingRight = "0.2rem";

            for (let i = 0; i < brands.length; i++) {
                var _brand;
                if (i % 2 == 0) {
                    _brand = brand_box(brands[i], 0);
                } else {
                    _brand = brand_box(brands[i], 1);
                }
                _brand.addEventListener("click", (e) => {
                    tree_implement(i + 6, 1);
                });
                content_scroll.appendChild(_brand);
                if (i != brands.length - 1) {
                    content_scroll.appendChild(document.createElement('hr'));
                }
            }
            result.appendChild(content_scroll);
            bot_content.appendChild(result);
        },
        [0]
    ),

    new messege(//5
        "매장내 지도",
        (bot_content) => {
            var result = document.createElement('div');
            result.classList.add('asdf');
            result.innerText = 'asdf';
            result.style.cursor = 'pointer';
            result.addEventListener("click", () => {
                console.log('success');
            });
            bot_content.appendChild(result);
        },
        [0]
    ),

    new messege(
        "성심당 본점",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[0]));
        },
        [0]
    )
    ,
    new messege(
        "성심당 케익부띠끄",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[1]));
        },
        [0]
    ),

    new messege(
        "성심당 DCC점",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[2]));
        },
        [0]
    )
    ,
    new messege(
        "성심당 롯데백화점 대전점",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[3]));
        },
        [0]
    ),
    new messege(
        "성심당 대전역점",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[4]));
        },
        [0]
    )
    ,
    new messege(
        "성심당 옛맛솜씨",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[5]));
        },
        [0]
    ),
    new messege(
        "성심당문화원",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[6]));
        },
        [0]
    )
    ,
    new messege(
        "테라스키친",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[7]));
        },
        [0]
    ),
    new messege(
        "플라잉팬",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[8]));
        },
        [0]
    ),
    new messege(
        "우동야",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[9]));
        },
        [0]
    ),
    new messege(
        "삐아또",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[10]));
        },
        [0]
    ),
    new messege(
        "오븐스토리",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[11]));
        },
        [0]
    ),
];