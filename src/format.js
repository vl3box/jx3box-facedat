import _ from "lodash";
const roletype_map = {
    1: "成男",
    2: "成女",
    5: "正太",
    6: "萝莉",
};

function format(input) {
    let type = _.get(input, "nRoleType");

    let output = {
        misc: [
            {
                name: "RoleType",
                value: type,
                desc: roletype_map[type],
            },
        ],
        eye: [
            {
                name: "OUT",
                value: _.get(input, "tBone.OUT"),
                desc: "眼睛凸出",
                min: "-128",
                max: "10",
            },
            {
                name: "EYE_POS",
                value: _.get(input, "tBone.EYE_POS"),
                desc: "眼睛位置",
                min: "-46",
                max: "15",
            },
            {
                name: "EYE_SIZE",
                value: _.get(input, "tBone.EYE_SIZE"),
                desc: "眼睛大小",
                min: "-25",
                max: "18",
            },
            {
                name: "EYE_DIRC",
                value: _.get(input, "tBone.EYE_DIRC"),
                desc: "眼睛倾斜",
                min: "-42",
                max: "32",
            },
            {
                name: "EYE_DIST",
                value: _.get(input, "tBone.EYE_DIST"),
                desc: "眼睛间距",
                min: "-5",
                max: "40",
            },
            {
                name: "EYE_OPEN",
                value: _.get(input, "tBone.EYE_OPEN"),
                desc: "眼睛开合",
                min: "-28",
                max: "32",
            },
            {
                name: "EYEBOW_OUT",
                value: _.get(input, "tBone.EYEBOW_OUT"),
                desc: "眉骨凸出",
                min: "-85",
                max: "126",
            },
            {
                name: "EYEBOW_DIRC",
                value: _.get(input, "tBone.EYEBOW_DIRC"),
                desc: "眉毛倾斜",
                min: "-61",
                max: "90",
            },
            {
                name: "EYEBOW_POS",
                value: _.get(input, "tBone.EYEBOW_POS"),
                desc: "眉毛高度",
                min: "-78",
                max: "41",
            },
            {
                name: "PUPIL_SIZE",
                value: _.get(input, "tBone.PUPIL_SIZE"),
                desc: "瞳孔大小",
                min: "-96",
                max: "18",
            },
            {
                name: "PUPIL_DIRC",
                value: _.get(input, "tBone.PUPIL_DIRC"),
                desc: "瞳孔位置",
                min: "-53",
                max: "15",
            },
            {
                name: "UP_LID_POS",
                value: _.get(input, "tBone.UP_LID_POS"),
                desc: "上眼睑高度",
                min: "-10",
                max: "95",
            },
            {
                name: "LOW_LID_POS",
                value: _.get(input, "tBone.LOW_LID_POS"),
                desc: "下眼睑高度",
                min: "-28",
                max: "87",
            },
            {
                name: "EYECROW_Y",
                value: _.get(input, "tBone.EYECROW_Y"),
                desc: "外眼角倾斜",
                min: "-128",
                max: "65",
            },
            {
                name: "RIDGE_Y",
                value: _.get(input, "tBone.RIDGE_Y"),
                desc: "内眼角倾斜",
                min: "-63",
                max: "49",
            },
        ],
        mouth: [
            {
                name: "MOUTH_POS",
                value: _.get(input, "tBone.MOUTH_POS"),
                desc: "嘴巴位置",
                min: "-27",
                max: "55",
            },
            {
                name: "MOUTH_SIZE",
                value: _.get(input, "tBone.MOUTH_SIZE"),
                desc: "嘴巴大小",
                min: "-27",
                max: "55",
            },
            {
                name: "MOUTH_ROT",
                value: _.get(input, "tBone.MOUTH_ROT"),
                desc: "下颚倾斜",
                min: "-10",
                max: "10",
            },
            {
                name: "MOUTH_OPEN",
                value: _.get(input, "tBone.MOUTH_OPEN"),
                desc: "嘴唇开合",
                min: "-20",
                max: "20",
            },
            {
                name: "MOUTH_OUT",
                value: _.get(input, "tBone.MOUTH_OUT"),
                desc: "嘴巴凸出",
                min: "-78",
                max: "10",
            },
            {
                name: "MOUTH_END",
                value: _.get(input, "tBone.MOUTH_END"),
                desc: "嘴角位置",
                min: "-32",
                max: "56",
            },
            {
                name: "UP_LIP",
                value: _.get(input, "tBone.UP_LIP"),
                desc: "上唇厚度",
                min: "-69",
                max: "10",
            },
            {
                name: "LOW_LIP",
                value: _.get(input, "tBone.LOW_LIP"),
                desc: "下唇厚度",
                min: "-39",
                max: "97",
            },
            {
                name: "UP_LIP_OUT",
                value: _.get(input, "tBone.UP_LIP_OUT"),
                desc: "上唇凸出",
                min: "-36",
                max: "21",
            },
            {
                name: "LOW_LIP_OUT",
                value: _.get(input, "tBone.UP_LIP_OUT"),
                desc: "下唇凸出",
                min: "-6",
                max: "25",
            },
            {
                name: "UP_LIP_POS",
                value: _.get(input, "tBone.UP_LIP_POS"),
                desc: "上唇位置",
                min: "-32",
                max: "25",
            },
            {
                name: "LOW_LIP_POS",
                value: _.get(input, "tBone.LOW_LIP_POS"),
                desc: "下唇位置",
                min: "-29",
                max: "89",
            },
            {
                name: "MOUTH_END_L",
                value: _.get(input, "tBone.MOUTH_END_L"),
                desc: "左嘴角高度",
                min: "-22",
                max: "22",
            },
            {
                name: "MOUTH_END_R",
                value: _.get(input, "tBone.MOUTH_END_R"),
                desc: "右嘴角高度",
                min: "-22",
                max: "22",
            },
        ],
        nose: [
            {
                name: "NOSE_SIZE",
                value: _.get(input, "tBone.NOSE_SIZE"),
                desc: "鼻子大小",
                min: "-92",
                max: "105",
            },
            {
                name: "NOSE_HEIGHT",
                value: _.get(input, "tBone.NOSE_HEIGHT"),
                desc: "鼻子高度",
                min: "-128",
                max: "20",
            },
            {
                name: "NOSETOP_POS_Z",
                value: _.get(input, "tBone.NOSETOP_POS_Z"),
                desc: "鼻头高度",
                min: "-128",
                max: "20",
            },
            {
                name: "NOSETOP_POS_Y",
                value: _.get(input, "tBone.NOSETOP_POS_Y"),
                desc: "鼻头位置",
                min: "-66",
                max: "33",
            },
            {
                name: "NOSETOP_WIDTH",
                value: _.get(input, "tBone.NOSETOP_WIDTH"),
                desc: "鼻头宽度",
                min: "-67",
                max: "126",
            },
            {
                name: "NOSETOP_UP",
                value: _.get(input, "tBone.NOSETOP_UP"),
                desc: "鼻尖弯度",
                min: "-128",
                max: "127",
            },
            {
                name: "NOSEBOW_WIDTH",
                value: _.get(input, "tBone.NOSEBOW_WIDTH"),
                desc: "鼻梁宽度",
                min: "-128",
                max: "126",
            },
            {
                name: "NOSEBOW_BEND",
                value: _.get(input, "tBone.NOSEBOW_BEND"),
                desc: "鼻梁高度",
                min: "-76",
                max: "55",
            },
        ],
        face: [
            {
                name: "CHEEK_Y",
                value: _.get(input, "tBone.CHEEK_Y"),
                desc: "颧骨位置",
                min: "-128",
                max: "116",
            },
            {
                name: "CHEEK_Z",
                value: _.get(input, "tBone.CHEEK_Z"),
                desc: "颧骨凸出",
                min: "-15",
                max: "33",
            },
            {
                name: "FACE_Y",
                value: _.get(input, "tBone.FACE_Y"),
                desc: "脸颊宽度",
                min: "-128",
                max: "126",
            },
            {
                name: "FACE_Z",
                value: _.get(input, "tBone.FACE_Z"),
                desc: "脸颊高度",
                min: "-112",
                max: "67",
            },
            {
                name: "UP_FACE",
                value: _.get(input, "tBone.UP_FACE"),
                desc: "上脸宽度",
                min: "-107",
                max: "126",
            },
            {
                name: "LOW_FACE",
                value: _.get(input, "tBone.LOW_FACE"),
                desc: "下脸宽度",
                min: "-128",
                max: "126",
            },
            {
                name: "FACE_SCALE",
                value: _.get(input, "tBone.FACE_SCALE"),
                desc: "脸蛋丰满",
                min: "-119",
                max: "57",
            },
            {
                name: "JAW_WIDTH",
                value: _.get(input, "tBone.JAW_WIDTH"),
                desc: "下巴宽度",
                min: "-36",
                max: "126",
            },
            {
                name: "JAW_POS",
                value: _.get(input, "tBone.JAW_POS"),
                desc: "下巴位置",
                min: "-128",
                max: "126",
            },
            {
                name: "JAW_LENGTH",
                value: _.get(input, "tBone.JAW_LENGTH"),
                desc: "下巴长度",
                min: "-39",
                max: "21",
            },
            {
                name: "JAW_END",
                value: _.get(input, "tBone.JAW_END"),
                desc: "下巴尖宽度",
                min: "-105",
                max: "38",
            },
            {
                name: "JAW_ROT",
                value: _.get(input, "tBone.JAW_ROT"),
                desc: "下巴凸出",
                min: "-69",
                max: "126",
            },
        ],
        decal: [
            {
                name: "BASE",
                value: _.get(input, "tDecal.BASE.nShowID"),
                desc: "面部皮肤",
                type: 0,
            },
            {
                name: "IRIS_RIGHT",
                value: _.get(input, "tDecal.IRIS_RIGHT.nShowID"),
                desc: "右瞳",
                type: 1,
            },
            {
                name: "IRIS_LEFT",
                value: _.get(input, "tDecal.IRIS_LEFT.nShowID"),
                desc: "左瞳",
                type: 2,
            },
            {
                name: "EYE_SHADOW",
                value: _.get(input, "tDecal.EYE_SHADOW.nShowID"),
                desc: "眼影",
                type: 3,
            },
            {
                name: "EYE_SHADOW1",
                value: _.get(input, "tDecal.EYE_SHADOW1.nShowID"),
                desc: "眼影·底",
                type: 13,
            },
            {
                name: "EYE_SHADOW2",
                value: _.get(input, "tDecal.EYE_SHADOW2.nShowID"),
                desc: "眼影·叠",
                type: 14,
            },
            {
                name: "EYE_SHADOW3",
                value: _.get(input, "tDecal.EYE_SHADOW3.nShowID"),
                desc: "眼影·晕",
                type: 15,
            },
            {
                name: "EYE_SHADOW_FLASH1",
                value: _.get(input, "tDecal.EYE_SHADOW_FLASH1.nShowID"),
                desc: "闪点·底",
                type: 17,
            },
            {
                name: "EYE_SHADOW_FLASH2",
                value: _.get(input, "tDecal.EYE_SHADOW_FLASH2.nShowID"),
                desc: "闪点·叠",
                type: 18,
            },
            {
                name: "EYE_SHADOW_FLASH3",
                value: _.get(input, "tDecal.EYE_SHADOW_FLASH3.nShowID"),
                desc: "闪点·晕",
                type: 19,
            },
            {
                name: "EYE_LINE",
                value: _.get(input, "tDecal.EYE_LINE.nShowID"),
                desc: "眼线",
                type: 4,
            },
            {
                name: "BROW",
                value: _.get(input, "tDecal.BROW.nShowID"),
                desc: "眉毛",
                type: 5,
            },
            {
                name: "BLUSHER_MOUSTACHE",
                value: _.get(input, "tDecal.BLUSHER_MOUSTACHE.nShowID"),
                desc: "腮红和胡须",
                type: 6,
            },
            {
                name: "LIP_GLOSS",
                value: _.get(input, "tDecal.LIP_GLOSS.nShowID"),
                desc: "唇形",
                type: 7,
            },
            {
                name: "LIP_FLASH",
                value: _.get(input, "tDecal.LIP_FLASH.nShowID"),
                desc: "闪粉",
                type: 10,
            },
            {
                name: "LIP_OVERLAP",
                value: _.get(input, "tDecal.LIP_OVERLAP.nShowID"),
                desc: "叠涂",
                type: 12,
            },
            {
                name: "EYE_LIGHT",
                value: _.get(input, "tDecal.EYE_LIGHT.nShowID"),
                desc: "眼神光",
                type: 8,
            },
            {
                name: "DECAL",
                value: _.get(input, "tDecal.DECAL.nShowID"),
                desc: "贴花",
                type: 9,
            },
        ],
    };
    return output;
}

export default format;
