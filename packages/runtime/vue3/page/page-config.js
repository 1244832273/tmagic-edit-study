window.magicDSL = [
  // DSL
  ({
    id: "75f0extui9d7yksklx27hff8xg",
    name: "test",
    type: "app",
    codeBlocks: {
      code_5336: {
        name: "getData",
        content: ({ app, params }) => {
          console.log("this is getData function", params, app);
        },
        params: [
          {
            name: "age",
            type: "number",
            tip: "年纪"
          },
          {
            name: "studentName",
            type: "text",
            tip: "学生姓名"
          }
        ]
      },
      code_5316: {
        name: "getList",
        content: () => {
          console.log("this is getList function");
        },
        params: []
      }
    },
    items: [
      {
        type: "page",
        id: "page_299",
        name: "index",
        title: "",
        layout: "absolute",
        style: {
          position: "relative",
          left: 0,
          top: 0,
          right: "",
          bottom: "",
          width: "100vw",
          height: "100vh",
          backgroundImage: "",
          backgroundColor: "rgba(248, 218, 218, 1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          color: "",
          fontSize: "",
          fontWeight: "",
          borderWidth: "0",
          borderColor: "",
          borderStyle: "none",
          transform: {
            rotate: "",
            scale: ""
          }
        },
        events: [
          {
            name: "magic:common:events:click",
            actions: [
              {
                actionType: "code",
                codeId: "code_5336",
                params: {
                  age: 12
                }
              },
              {
                actionType: "comp",
                to: "overlay_2159",
                method: "openOverlay"
              }
            ]
          },
          {
            name: "magic:common:events:click",
            actions: [
              {
                actionType: "code",
                codeId: "code_5316",
                params: {}
              }
            ]
          }
        ],
        created: {
          hookType: "code",
          hookData: [
            {
              codeId: "code_5336",
              params: {
                studentName: "lisa",
                age: 14
              }
            },
            {
              codeId: "code_5316",
              params: {}
            }
          ]
        },
        items: [
          {
            type: "text",
            id: "text_9027",
            style: {
              width: "280.75",
              height: "38.97",
              position: "absolute",
              top: 87,
              left: 64,
              right: "",
              bottom: "",
              backgroundImage: "",
              backgroundColor: "",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              color: "",
              fontSize: "20",
              fontWeight: ""
            },
            name: "文本",
            text: "Tmagic editor 营销活动编辑器",
            multiple: true,
            events: []
          },
          {
            type: "qrcode",
            id: "qrcode_4738",
            style: {
              position: "absolute",
              left: 120,
              width: "176",
              height: "176",
              top: 532,
              right: "",
              bottom: "",
              backgroundImage: "",
              backgroundColor: "",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              color: "",
              fontSize: "",
              fontWeight: ""
            },
            name: "二维码",
            url: "https://github.com/Tencent/tmagic-editor",
            events: [],
            created: []
          },
          {
            type: "img",
            id: "img_3877",
            style: {
              position: "absolute",
              left: 104,
              width: "176",
              height: "176",
              top: 289,
              right: "",
              bottom: "",
              backgroundImage: "",
              backgroundColor: "",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              color: "",
              fontSize: "",
              fontWeight: ""
            },
            name: "图片",
            src: "https://vfiles.gtimg.cn/vupload/20210811/388ed01628667545737.png",
            url: "",
            events: [],
            created: []
          },
          {
            type: "button",
            id: "button_430",
            style: {
              position: "absolute",
              width: "270",
              height: "37.5",
              border: 0,
              backgroundColor: "#fb6f00",
              top: 176,
              left: 47,
              right: "",
              bottom: "",
              backgroundImage: "",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              color: "",
              fontSize: "",
              fontWeight: "",
              borderWidth: "0",
              borderColor: "",
              borderStyle: "none",
              transform: {
                rotate: "",
                scale: ""
              }
            },
            name: "按钮",
            text: "${ds_b64c92b5.text}",
            multiple: true,
            events: [
              {
                name: "magic:common:events:click",
                actions: [
                  {
                    actionType: "comp",
                    to: "overlay_2159",
                    method: "openOverlay"
                  }
                ]
              }
            ],
            created: []
          },
          {
            type: "overlay",
            id: "overlay_2159",
            style: {
              position: "fixed",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)"
            },
            name: "蒙层",
            items: [
              {
                type: "container",
                id: "container_607",
                style: {
                  position: "absolute",
                  width: "80%",
                  height: "400",
                  top: "143.87",
                  left: 37.5,
                  right: "",
                  bottom: "",
                  backgroundImage: "",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  color: "",
                  fontSize: "",
                  fontWeight: ""
                },
                name: "组",
                items: [
                  {
                    type: "button",
                    id: "button_7265",
                    style: {
                      position: "absolute",
                      width: "270",
                      height: "37.5",
                      border: 0,
                      backgroundColor: "#fb6f00",
                      top: "322.71",
                      left: "15.99",
                      right: "",
                      bottom: "",
                      backgroundImage: "",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      color: "",
                      fontSize: "",
                      fontWeight: "",
                      borderWidth: "0",
                      borderColor: "",
                      borderStyle: "none",
                      transform: {
                        rotate: "",
                        scale: ""
                      }
                    },
                    name: "按钮",
                    text: "关闭弹窗",
                    multiple: true,
                    events: [
                      {
                        name: "magic:common:events:click",
                        actions: [
                          {
                            actionType: "comp",
                            to: "overlay_2159",
                            method: "closeOverlay"
                          }
                        ]
                      }
                    ],
                    created: []
                  },
                  {
                    type: "img",
                    id: "img_3291",
                    style: {
                      position: "absolute",
                      left: "63.94",
                      width: "176",
                      height: "176",
                      top: "105.91"
                    },
                    name: "图片",
                    src: "https://puui.qpic.cn/vupload/0/1573555382625_bhp0wud8l6w.png/0",
                    url: ""
                  },
                  {
                    type: "text",
                    id: "text_8598",
                    style: {
                      position: "absolute",
                      width: "86.92",
                      height: "37.97",
                      left: "106.90",
                      top: "35.97",
                      right: "",
                      bottom: "",
                      backgroundImage: "",
                      backgroundColor: "",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      color: "",
                      fontSize: "24",
                      fontWeight: ""
                    },
                    name: "文本",
                    text: "Tmagic",
                    multiple: false,
                    events: [],
                    created: []
                  }
                ],
                layout: "absolute",
                events: [],
                created: []
              }
            ]
          },
          {
            id: "overlay_44923e69",
            type: "overlay",
            style: {
              position: "fixed",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)"
            },
            name: "弹窗",
            items: []
          }
        ],
        mounted: "",
        displayConds: []
      }
    ],
    dataSources: [
      {
        id: "ds_b64c92b5",
        type: "base",
        title: "button",
        description: "按钮",
        fields: [
          {
            type: "string",
            name: "text",
            title: "按钮文案",
            description: "",
            defaultValue: "打开弹窗"
          }
        ]
      }
    ],
    dataSourceDeps: {
      ds_b64c92b5: {
        button_430: {
          name: "按钮",
          keys: [
            "text"
          ]
        }
      }
    },
    dataSourceCondDeps: {
      ds_b64c92b5: {}
    }
  })
]