export default [
  {
    index: 0,
    name: '公共分类',
    desc: '公共分类',
    add_time: 1591173211,
    up_time: 1591173211,
    list: [
      {
        query_path: {
          path: '/docs/:id',
          params: []
        },
        edit_uid: 0,
        status: 'undone',
        type: 'var',
        req_body_is_json_schema: false,
        res_body_is_json_schema: false,
        api_opened: false,
        index: 0,
        tag: [],
        _id: 311,
        method: 'GET',
        catid: 63,
        title: 'doc-get',
        path: '/docs/:id',
        project_id: 29,
        req_params: [
          {
            _id: '5ed882ab0b3db220e529b612',
            name: 'id',
            desc: ''
          }
        ],
        res_body_type: 'json',
        uid: 11,
        add_time: 1591173230,
        up_time: 1591247531,
        req_query: [],
        req_headers: [],
        req_body_form: [],
        __v: 0,
        desc: '',
        markdown: '',
        res_body: ''
      },
      {
        query_path: {
          path: '/docs',
          params: []
        },
        edit_uid: 0,
        status: 'undone',
        type: 'static',
        req_body_is_json_schema: true,
        res_body_is_json_schema: true,
        api_opened: false,
        index: 0,
        tag: [],
        _id: 315,
        method: 'POST',
        catid: 63,
        title: 'doc-post',
        path: '/docs',
        project_id: 29,
        req_params: [],
        res_body_type: 'json',
        uid: 11,
        add_time: 1591173274,
        up_time: 1591262395,
        req_query: [
          {
            required: '0',
            _id: '5ed8bcbb0b3db2efbd29b615',
            name: 'test',
            example: '1231',
            desc: ''
          }
        ],
        req_headers: [
          {
            required: '1',
            _id: '5ed8bcbb0b3db20d6929b616',
            name: 'Content-Type',
            value: 'application/json'
          }
        ],
        req_body_form: [],
        __v: 0,
        desc: '',
        markdown: '',
        req_body_other: '{"type":"object","properties":{"content":{"type":"string","title":"内容","minLength":0,"maxLength":5000},"type":{"type":"string","title":"类型","mock":{"mock":"@string"},"minLength":1,"maxLength":20,"enum":["example","hexo","weibo"]}},"required":["content","type"]}',
        req_body_type: 'json',
        res_body: '{"type":"object","title":"title","properties":{"code":{"type":"integer"},"result":{"type":"string"}},"required":["code","result"]}'
      },
      {
        query_path: {
          path: '/docs',
          params: []
        },
        edit_uid: 0,
        status: 'undone',
        type: 'static',
        req_body_is_json_schema: false,
        res_body_is_json_schema: false,
        api_opened: false,
        index: 0,
        tag: [],
        _id: 319,
        method: 'GET',
        catid: 63,
        title: 'docs-get',
        path: '/docs',
        project_id: 29,
        req_params: [],
        res_body_type: 'json',
        req_query: [],
        req_headers: [],
        req_body_form: [],
        desc: '',
        markdown: '',
        res_body: '',
        uid: 11,
        add_time: 1591247550,
        up_time: 1591247575,
        __v: 0
      }
    ]
  }
]
