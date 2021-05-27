// 현재 페이지
var mode = 'dps_fist';

// 포지션 별 캐릭터 추가 기능을 위한 D-D
var name_list = [["-1", "no data"],
["1", "로라스"],["2", "휴톤"],["3", "루이스"],["4", "타라"],["5", "트리비아"],
["6", "카인"],["7", "레나"],["8", "드렉슬러"],["9", "도일"],["10", "토마스"],
["11", "나이오비"],["12", "시바"],["13", "웨슬리"],["14", "스텔라"],["15", "앨리셔"],
["16", "클레어"],["17", "다이무스"],["18", "이글"],["19", "마를렌"],["20", "샬럿"],
["21", "윌라드"],["22", "레이튼"],["23", "미쉘"],["24", "린"],["25", "빅터"],
["26", "카를로스"],["27", "호타루"],["28", "트릭시"],["29", "히카르도"],["30", "까미유"],
["31", "자네트"],["32", "피터"],["33", "아이작"],["34", "레베카"],["35", "엘리"],
["36", "마틴"],["37", "브루스"],["38", "미아"],["39", "드니스"],["40", "제레온"],
["41", "루시"],["42", "티엔"],["43", "하랑"],["44", "제이"],["45", "벨져"],
["46", "리첼"],["47", "리사"],["48", "릭"],["49", "제키엘"],["50", "탄야"],
["51", "캐럴"],["52", "라이샌더"],["53", "루드빅"],["54", "멜빈"],["55", "디아나"],
["56", "클리브"],["57", "헬레나"],["58", "에바"],["59", "론"],["60", "레오노르"],
["61", "시드니"],["62", "테이"],["63", "티모시"],["64", "엘프리데"],["65", "티샤"],
["66", "카로슈"],["67", "라이언"],["68", "파수꾼"],["69", "에밀리"],["70", "플로리안"],
["71", "케니스"]]

// -[근거리딜러] 캐릭터 목록
var dps_fist = [-1,
1,  //검룡 로라스
3,  //결정의 루이스
12, //시바 포
17, //태도 다이무스
22, //방출의 레이튼
26, //질풍의 카를로스
27, //둔갑의 호타루
28, //냉혈의 트릭시
29, //복수의 히카르도
31, //관통의 자네트
44, //거너 J
52, //광대 라이샌더
53, //환멸의 루드빅
56, //기자 클리브
62, //흑영의 테이
66, //카로슈 //default-off
71  //선구자 케니스
];

// -[탱커] 캐릭터 목록
var tank = [-1,
2,  //파괴왕 휴톤
7,  //강각의 레나
9,  //캐논 도일
14, //별빛의 스텔라
18, //쾌검 이글
24, //신비의 린 //default-off
33, //가면의 아이작
34, //강철의 레베카
37, //표효의 브루스
40, //격검의 제레온
42, //천기의 티엔
45, //섬광의 벨져
46, //파문의 선율 리첼 //default-off
49, //사도 제키엘
55, //성흔의 디아나 //default-off
58, //격투가 에바 //default-off
60, //폭룡 레오노르 //default-off
63, //잿더미의 티모시
66, //카로슈 //default-off
67, //대지의 라이언
70  //갈증의 플로리안
];

// -[원거리딜러] 캐릭터 목록
var dps_ad = [-1,
4,  //불의 마녀 타라
5,  //밤의 여왕 트리비아
6,  //숙명의 카인
8,  //창룡 드렉슬러
11, //재앙의 나이오비
16, //쫓는 빛의 클레어
19, //소공녀 마를렌
21, //전격의 윌라드
23, //기적의 미쉘
25, //삭풍의 빅터
30, //닥터 까미유
32, //경이의 피터
35, //축포의 엘리
38, //드루이드 미아
39, //엘윈의 드니스
41, //선무의 루시
43, //신령의 하랑
48, //여행자 릭
50, //헌터 탄야
51, //논보라의 캐럴
54, //공학도 멜빈
57, //증폭의 헬레나
59, //설계자 론
64, //집행자 엘프리데
68, //파수꾼 A
69  //연금술사 에밀리
];

// -[서포터] 캐릭터 목록
var supporter = [-1,
10, //조각의 지휘자 토마스
13, //제너럴 웨슬리
15, //광휘의 앨리셔
20, //격류의 샬럿
36, //통찰의 마틴
47, //조화의 선율 리사 //default-off
48, //여행자 릭
61, //구원자 시드시
65  //악몽의 티샤
];

// -[ALL] 캐릭터 목록
var all_char = new Array(72);
all_char[0] = -1;

// 캐릭터 활성화/비활성화 flag
var on_off = new Array(72);
on_off[0] = -1;

for (var i = 1; i < on_off.length; i++) {
    on_off[i] = 1;
    all_char[i] = i;
}

//defalut-setting
on_off[24] = 0;
on_off[46] = 0;
on_off[47] = 0;
on_off[55] = 0;
on_off[58] = 0;
on_off[60] = 0;
on_off[66] = 0;

// 활성화/비활성화
function changeimg(num) {
    if (on_off[num] == 1) {
        document.getElementById(num).src = "images/x_icon/" + num + ".jpg";
        on_off[num] = 0;
    }
    else {
        document.getElementById(num).src = "images/icon/" + num + ".jpg";
        on_off[num] = 1;
    }
}

function init(data,modechg) {
    mode = modechg;

    var datalotCnt = on_off.length;
    var index = 1;
    
    // <tr>태그의 중복 출력 방지 flag
    var flag =1;

    const element = document.getElementById('char_list');

    var head = '<div><table style="margin: 0px; padding: 0px; border-collapse: collapse;">';

    for (var i = 1; i < datalotCnt; i++) {
        if (index % 10 == 1 && flag == 1) {
            head +='<tr>';
            flag = 0;
        }

        // 아래 조건문 배열 index 참조오류 방지
        if (data.length == index) {
            head += '</tr>';
            break;
        }

        if (data[index] == i) {

            if (on_off[i] == 1) {
                head += '<td style="margin: 0px; padding: 0px; border-collapse: collapse;"><img id="'
                    + i
                    + '" src="images/icon/'
                    + i
                    + '.jpg" onclick="changeimg('
                    + i
                    + ')"></td>';
            }

            else {
                head += '<td style="margin: 0px; padding: 0px; border-collapse: collapse;"><img id="'
                    + i
                    + '" src="images/x_icon/'
                    + i
                    + '.jpg" onclick="changeimg('
                    + i
                    + ')"></td>';

            }

            if (index % 10 == 0 && flag == 0)
            {   head += '</tr>';
                flag =1; }
            index = index + 1;
        }

    }
    
    head += '</table></div>';

    element.innerHTML =head;
    
}

// 캐릭터 추가 기능
function saveName() {
    element1 = document.getElementById('inputValue');
    // ALL 캐릭터 페이지일 경우 작동 X
    if (element1 != null && mode != 'all_char') {

        var input_value = document.getElementById("inputValue").value;
        for (i = 1; i < name_list.length; i++) {
            if (input_value == name_list[i][1]) {
                var num = i;

                var temp = num;

                if (mode == 'dps_fist') {
                    if (dps_fist.includes(num) == false) {
                        dps_fist.push(temp);
                        dps_fist.sort(function (a, b) {
                            return a - b;
                        });
                        init(dps_fist, 'dps_fist');
                    }
                }
                else if (mode == 'tank') {
                    if (tank.includes(num) == false) {
                        tank.push(temp);
                        tank.sort(function (a, b) {
                            return a - b;
                        });
                        init(tank, 'tank');
                    }
                }
                else if (mode == 'dps_ad') {
                    if (dps_ad.includes(num) == false) {
                        dps_ad.push(temp);
                        dps_ad.sort(function (a, b) {
                            return a - b;
                        });
                        init(dps_ad, 'dps_ad');
                    }
                }
                else if (mode == 'supporter') {
                    if (supporter.includes(num) == false) {
                        supporter.push(temp);
                        supporter.sort(function (a, b) {
                            return a - b;
                        });
                        init(supporter, 'supporter');
                    }
                }
                document.getElementById("inputValue").value = ""

                break;
            }
        }
    }
}

before_result = 0;

function rand() {

    if (mode == 'dps_fist') {
       data = dps_fist;
    }
    else if (mode == 'tank') {
        data=tank;
    }
    else if (mode == 'dps_ad') {
        data=dps_ad;
    }
    else if (mode == 'supporter') {
        data=supporter;
    }
    else {
        data=all_char;
    }

    datalotCnt = data.length-1;

    flag = 0;
    //무한루프방지
    stack_1 = 0;
    stack_2 = 0;

    while (flag == 0) {
        var result = Math.floor(Math.random() * datalotCnt)+1;
        
        //비활성화캐릭터
        if(on_off[data[result]] == 0){
            stack_1++;
            if(stack_1 == 10000){
                result=0;
                break;
            }
            continue;
        }
        //중복방지
        else if(before_result == result){
            stack_2++;
            if(stack_2 == 10000){
                result=0;
                break;
            }
            continue;
        }
        else{
            flag=1;
        }
    }

    if(result==0){
        result=before_result;
    }
    document.getElementById("random_result").src= "images/icon/" + data[result] + ".jpg";
    before_result=result;
}