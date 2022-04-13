/**
 * 显示博文用，建表用
 * @returns 博文的全部的属性
 */
 export const blog = () => {
    return {
      // id: 0,
      title: '', // 这是一个博客标题
      groupId: 0, // 分组ID
      addTime: new Date(), // 添加时间
      introduction: '', // 这是博客的简介
      concent: '', // 这是博客的详细内容
      state: 1, // 1：草稿；2：发布；3：删除
      viewCount: 0, // 浏览量
      agreeCount: 0, // 点赞数量
      discussCount: 0 // 讨论数量
    }
  }
  
  /**
   * 表单用的博文，绑定表单用。
   * * title：文章标题
   * @returns 添加博文需要的属性
   */
   export const blogForm = () => {
    return {
      // id: new Date().valueOf(),
      title: '', // 这是一个博客标题
      addTime: new Date(), // 添加时间
      introduction: '', // 这是博客的简介
      concent: '', // 这是博客的详细内容
      state: 1 // 1：草稿；2：发布；3：删除
    }
  }
  
  /**
   * 首页用的博文列表，按需设置字段
   * @returns 博文列表
   */
   export const blogList = () => {
    return {
      id: 0,
      title: '', // 这是一个博客标题
      addTime: '', // 添加时间
      introduction: '', // 这是博客的简介
      viewCount: 0, // 浏览量
      agreeCount: 0, // 点赞数量
      discussCount: 0 // 讨论数量
    }
  }
  
  /**
   * 编辑博文用的列表
   * @returns 文章标题列表
   */
   export const articleList = () => {
    return {
      id: 0,
      title: '', // 这是一个博客标题
      addTime: '', // 添加时间
      viewCount: 0, // 浏览量
      agreeCount: 0, // 点赞数量
      discussCount: 0 // 讨论数量
    }
  }
  
  /**
   * 建表用的讨论
   * @returns 讨论表
   */
   export const discussForm= () => { 
    return {
      // id: 0,
      blogId: 0,
      discusser: '' , // 昵称
      addTime: new Date(), // 时间
      concent: '', // 内容
      agreeCount: 0
    }
  }
  
  /**
   * 
   * @returns 讨论的model
   */
  export const discussList = () => { 
    return {
      id: 0,
      discusser: '' , // 昵称
      addTime: '', // 时间
      concent: '', // 内容
      agreeCount: 0
    }
  }
  