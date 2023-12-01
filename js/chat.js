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
            tmp.style.width = "20rem";
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
////////////////////////////////////////////////////////////////////////////////////////
var body = document.querySelector("body");
var chat_body = document.querySelector("#chat-body");
var chat_create_button = document.querySelector("#chat-create-button");
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var answer_idx = 0;
chat_create_button.addEventListener('click', (e) => {
    if (chat_body.style.opacity == 0) {
        init();
        tree_implement(0, 0);
        chat_body.style.visibility = "visible";
        chat_body.style.setProperty('opacity', 1);
        if (windowWidth >= 768)
            chat_body.style.setProperty('transform', 'translateY(-20px)');
    } else {
        chat_body.style.setProperty('opacity', 0);
        if (windowWidth >= 768)
            chat_body.style.setProperty('transform', 'translateY(20px)');
        setTimeout(() => {
            chat_body.style.visibility = "hidden";
        }, 200);
    }
});
chat_create_button.addEventListener('mousedown', (e) => {
    chat_create_button.style.setProperty('transform', 'translateY(2px)');
});
chat_create_button.addEventListener('mouseup', (e) => {
    chat_create_button.style.setProperty('transform', 'translateY(-2px)');
});
document.querySelector('#chat-img').addEventListener('click', (e) => {
    chat_body.style.setProperty('opacity', 0);
    if (windowWidth >= 768)
        chat_body.style.setProperty('transform', 'translateY(20px)');
    setTimeout(() => {
        chat_body.style.visibility = "hidden";
    }, 200);
});

////////////////////////////////////////////////////////////////////////////////////////////
function bread_box(_bread) {
    var result = document.createElement('div');
    var head = document.createElement('div');
    var tmp = document.createElement('div');
    tmp.innerHTML = _bread.name;
    head.appendChild(tmp);
    tmp = document.createElement('div');
    tmp.innerHTML = _bread.price;
    head.appendChild(tmp);


    result.appendChild(head);
    tmp = document.createElement('img');
    tmp.src = _bread.img_address;

    tmp.style.width = '3rem';
    tmp.style.height = '3rem';
    result.appendChild(tmp);

    result.style.display = 'flex';
    result.style.justifyContent = 'space-between';
    return result;
}
function init() {
    var chat_content = document.querySelector('#chat-content');
    while (chat_content.firstChild) {
        chat_content.removeChild(chat_content.firstChild);
    }
    const cur_time = new Date();
    var chat_content_time = document.createElement('div');
    chat_content_time.innerHTML += `📅${cur_time.getFullYear()}년 ${cur_time.getMonth() + 1}월 ${cur_time.getDate()}일`;
    chat_content_time.classList.add('chat-content-time');
    var chat_content_time_contain = document.createElement('div');
    chat_content_time_contain.appendChild(chat_content_time);
    chat_content.appendChild(chat_content_time_contain);
}
function tree_implement(idx, flag) {//0 first 1 not first
    var chat_content = document.querySelector('#chat-content');
    if (flag) {
        if (chat_content.firstChild) {
            chat_content.removeChild(chat_content.lastChild);
        }
        chat_content.appendChild(make_box(tree[idx].button_text, 0));
    }
    make_bot(idx);
    make_buttons(tree[idx].after_buttons);
}
function make_bot(idx) {
    var chat_content = document.querySelector('#chat-content');
    var result = document.createElement('div');

    var bot_img = document.createElement('img');
    bot_img.src = "img/성심당프로필.png";
    bot_img.classList.add('bot-img');
    result.appendChild(bot_img);

    var chat_bot_content = document.createElement('div');
    var bot_name = document.createElement('div');
    bot_name.classList.add('bot-name');
    bot_name.innerText = '성심당';
    chat_bot_content.appendChild(bot_name);

    var chat_bot_content_box = document.createElement('div');
    chat_bot_content_box.classList.add('bot-messege');
    tree[idx].func(chat_bot_content_box);
    chat_bot_content.appendChild(chat_bot_content_box);
    result.appendChild(chat_bot_content);
    result.style.display = "flex";
    chat_content.appendChild(result);
}
function make_box(str, flag) {//0 user 1 bot
    var result = document.createElement('div');
    if (flag)
        result.classList.add('bot-messege');
    else
        result.classList.add('user-messege');
    var tmp = document.createElement('div');
    tmp.innerHTML = str;
    result.appendChild(tmp);
    return result;
}
function make_buttons(buttons) {
    document.querySelector("#chat-content").innerHTML += '<div id="chat-buttons"></div>';
    var chat_buttons = document.querySelector("#chat-buttons");
    for (var idx of buttons) {
        var result = document.createElement('div');
        result.innerText = tree[idx].button_text;
        result.classList.add('chat-button');
        result.addEventListener('click', (e) => {
            var idx = -1;
            for (var i = 0; i < tree.length; i++) {
                if (tree[i].button_text == e.target.innerText) {
                    idx = i;
                    break;
                }
            }
            tree_implement(idx, 1);
        });
        chat_buttons.appendChild(result);
    }
    var chat_content = document.querySelector("#chat-content");
    chat_content.scrollTop = chat_content.scrollHeight;
}