/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v1/posts/{id}": {
    /** 글 상세 정보 */
    get: operations["getDetail"];
    /** 글 수정 */
    put: operations["modify"];
    /** 글 삭제 */
    delete: operations["delete"];
  };
  "/api/v1/courses/{id}": {
    /** 강좌 수정 */
    put: operations["modify_1"];
    /** 강좌 삭제 */
    delete: operations["delete_1"];
  };
  "/api/v1/comments/{postId}/{commentId}": {
    /** 댓글 수정 */
    put: operations["modifyComment"];
    /** 댓글 삭제 */
    delete: operations["deleteComment"];
  };
  "/api/v1/admin/{courseId}/videos/{id}": {
    /** 강의 수정 */
    put: operations["modify_2"];
    /** 강의 삭제 */
    delete: operations["delete_2"];
  };
  "/api/v1/posts": {
    /** 글 리스트 */
    get: operations["getPosts"];
    /** 글 등록 */
    post: operations["createPost"];
  };
  "/api/v1/posts/{id}/like": {
    /** 글 추천 */
    post: operations["vote"];
    /** 글 추천 취소 */
    delete: operations["deleteVote"];
  };
  "/api/v1/posts/qna": {
    /** 1대1 문의 목록 */
    get: operations["getMyQna"];
    /** 1대1 문의 등록 */
    post: operations["createQna"];
  };
  "/api/v1/members/logout": {
    post: operations["logout"];
  };
  "/api/v1/courses": {
    /** 전체 강좌 목록 조회 */
    get: operations["getCourses"];
    /** 강좌 등록 */
    post: operations["createCourse"];
  };
  "/api/v1/comments": {
    /** 댓글 등록 */
    post: operations["createComment"];
  };
  "/api/v1/comments/{postId}/{commentId}/like": {
    /** 댓글 추천 */
    post: operations["voteComment"];
    /** 댓글 추천 취소 */
    delete: operations["deleteVoteComment"];
  };
  "/api/v1/admin/{courseId}/videos": {
    /** 강의 등록 */
    post: operations["createVideo"];
  };
  "/api/v1/posts/qna/{id}": {
    /** 1대1 문의 상세 정보 */
    get: operations["getQnaDetail"];
    /** 1대1 문의 삭제 */
    delete: operations["deleteQna"];
  };
  "/api/v1/members/me": {
    get: operations["getMe"];
  };
  "/api/v1/courses/{courseId}/videos": {
    /** 강의 리스트 */
    get: operations["getVideos"];
  };
  "/api/v1/courses/{courseId}/videos/{id}": {
    /** 특정 강의 */
    get: operations["getVideos_1"];
  };
  "/api/v1/courses/{course-id}": {
    /** 강좌 상세 조회 */
    get: operations["getCourse"];
  };
  "/api/v1/comments/{postId}": {
    /** 댓글 목록 */
    get: operations["getComments"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    PostDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      /** Format: int64 */
      authorId: number;
      authorName: string;
      title: string;
      body: string;
      /** Format: int32 */
      voteCount?: number;
      likedByCurrentUser?: boolean;
    };
    RsDataPostDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["PostDto"];
      success: boolean;
      fail: boolean;
    };
    CourseDto: {
      /** Format: int64 */
      id?: number;
      title?: string;
      notice?: string;
      imgUrl?: string;
      overView?: string;
      ownerName?: string;
      /** Format: date-time */
      createDate?: string;
    };
    RsDataCourseDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CourseDto"];
      success: boolean;
      fail: boolean;
    };
    CreateCommentDto: {
      body: string;
    };
    CommentDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      /** Format: int64 */
      authorId: number;
      authorName: string;
      body: string;
      likedByCurrentUser?: boolean;
      /** Format: int64 */
      postId: number;
    };
    RsDataCommentDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CommentDto"];
      success: boolean;
      fail: boolean;
    };
    Course: {
      /** Format: int64 */
      id?: number;
      /** Format: date-time */
      createDate?: string;
      title?: string;
      notice?: string;
      imgUrl?: string;
      overView?: string;
      owner?: components["schemas"]["Member"];
      videoList?: components["schemas"]["Video"][];
      voter?: components["schemas"]["Member"][];
    };
    CourseEnroll: {
      /** Format: int64 */
      id?: number;
      /** Format: date-time */
      createDate?: string;
      /** Format: date-time */
      cancelDate?: string;
      course?: components["schemas"]["Course"];
      member?: components["schemas"]["Member"];
    };
    GrantedAuthority: {
      authority?: string;
    };
    Member: {
      /** Format: int64 */
      id?: number;
      /** Format: date-time */
      createDate?: string;
      username?: string;
      password?: string;
      nickname?: string;
      /** Format: int32 */
      point?: number;
      report?: boolean;
      refreshToken?: string;
      profileImgUrl?: string;
      courseEnrollList?: components["schemas"]["CourseEnroll"][];
      name?: string;
      authoritiesAsStringList?: string[];
      profileImgUrlOrDefault?: string;
      authorities?: components["schemas"]["GrantedAuthority"][];
    };
    SummaryNote: {
      /** Format: int64 */
      id?: number;
      /** Format: date-time */
      createDate?: string;
      content?: string;
      writer?: components["schemas"]["Member"];
      video?: components["schemas"]["Video"];
    };
    Video: {
      /** Format: int64 */
      id?: number;
      /** Format: date-time */
      createDate?: string;
      url?: string;
      overView?: string;
      course?: components["schemas"]["Course"];
      summaryNotes?: components["schemas"]["SummaryNote"][];
    };
    VideoDto: {
      /** Format: int64 */
      id: number;
      url: string;
      overView?: string;
      /** Format: int64 */
      courseId: number;
      summaryNotes?: components["schemas"]["SummaryNote"][];
    };
    RsDataVideoDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["VideoDto"];
      success: boolean;
      fail: boolean;
    };
    CreatePostDto: {
      title: string;
      body: string;
    };
    RsDataCreatePostDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CreatePostDto"];
      success: boolean;
      fail: boolean;
    };
    RsDataVoid: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: Record<string, never>;
      success: boolean;
      fail: boolean;
    };
    QnaDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      /** Format: int64 */
      authorId: number;
      authorName: string;
      title: string;
      body: string;
    };
    RsDataQnaDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["QnaDto"];
      success: boolean;
      fail: boolean;
    };
    Empty: Record<string, never>;
    RsDataEmpty: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["Empty"];
      success: boolean;
      fail: boolean;
    };
    CreateCourseDto: {
      title?: string;
      notice?: string;
      imgUrl?: string;
      overView?: string;
    };
    RsDataCreateCourseDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CreateCourseDto"];
      success: boolean;
      fail: boolean;
    };
    RsDataCreateCommentDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CreateCommentDto"];
      success: boolean;
      fail: boolean;
    };
    CreateVideoDto: {
      url: string;
      overView?: string;
      course: components["schemas"]["Course"];
    };
    RsDataCreateVideoDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CreateVideoDto"];
      success: boolean;
      fail: boolean;
    };
    GetPostsResponseBody: {
      items: components["schemas"]["PostDto"][];
    };
    RsDataGetPostsResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetPostsResponseBody"];
      success: boolean;
      fail: boolean;
    };
    RsDataListQnaDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["QnaDto"][];
      success: boolean;
      fail: boolean;
    };
    MeResponseBody: {
      item: components["schemas"]["MemberDto"];
    };
    MemberDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      name: string;
      profileImgUrl: string;
      authorities: string[];
    };
    RsDataMeResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["MeResponseBody"];
      success: boolean;
      fail: boolean;
    };
    GetCoursesResponsebody: {
      items: components["schemas"]["CourseDto"][];
    };
    RsDataGetCoursesResponsebody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetCoursesResponsebody"];
      success: boolean;
      fail: boolean;
    };
    RsDataListVideoDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["VideoDto"][];
      success: boolean;
      fail: boolean;
    };
    RsDataListCommentDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CommentDto"][];
      success: boolean;
      fail: boolean;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** 글 상세 정보 */
  getDetail: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataPostDto"];
        };
      };
    };
  };
  /** 글 수정 */
  modify: {
    parameters: {
      path: {
        id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PostDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataPostDto"];
        };
      };
    };
  };
  /** 글 삭제 */
  delete: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 강좌 수정 */
  modify_1: {
    parameters: {
      path: {
        id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CourseDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataCourseDto"];
        };
      };
    };
  };
  /** 강좌 삭제 */
  delete_1: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 댓글 수정 */
  modifyComment: {
    parameters: {
      path: {
        commentId: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateCommentDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataCommentDto"];
        };
      };
    };
  };
  /** 댓글 삭제 */
  deleteComment: {
    parameters: {
      path: {
        commentId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 강의 수정 */
  modify_2: {
    parameters: {
      path: {
        courseId: number;
        id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["VideoDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataVideoDto"];
        };
      };
    };
  };
  /** 강의 삭제 */
  delete_2: {
    parameters: {
      path: {
        courseId: number;
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 글 리스트 */
  getPosts: {
    parameters: {
      query?: {
        page?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetPostsResponseBody"];
        };
      };
    };
  };
  /** 글 등록 */
  createPost: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreatePostDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataCreatePostDto"];
        };
      };
    };
  };
  /** 글 추천 */
  vote: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataVoid"];
        };
      };
    };
  };
  /** 글 추천 취소 */
  deleteVote: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataVoid"];
        };
      };
    };
  };
  /** 1대1 문의 목록 */
  getMyQna: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListQnaDto"];
        };
      };
    };
  };
  /** 1대1 문의 등록 */
  createQna: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["QnaDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataQnaDto"];
        };
      };
    };
  };
  logout: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 전체 강좌 목록 조회 */
  getCourses: {
    parameters: {
      query?: {
        page?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetCoursesResponsebody"];
        };
      };
    };
  };
  /** 강좌 등록 */
  createCourse: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateCourseDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataCreateCourseDto"];
        };
      };
    };
  };
  /** 댓글 등록 */
  createComment: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateCommentDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataCreateCommentDto"];
        };
      };
    };
  };
  /** 댓글 추천 */
  voteComment: {
    parameters: {
      path: {
        commentId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataVoid"];
        };
      };
    };
  };
  /** 댓글 추천 취소 */
  deleteVoteComment: {
    parameters: {
      path: {
        commentId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataVoid"];
        };
      };
    };
  };
  /** 강의 등록 */
  createVideo: {
    parameters: {
      path: {
        courseId: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateVideoDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataCreateVideoDto"];
        };
      };
    };
  };
  /** 1대1 문의 상세 정보 */
  getQnaDetail: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataQnaDto"];
        };
      };
    };
  };
  /** 1대1 문의 삭제 */
  deleteQna: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  getMe: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataMeResponseBody"];
        };
      };
    };
  };
  /** 강의 리스트 */
  getVideos: {
    parameters: {
      path: {
        courseId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListVideoDto"];
        };
      };
    };
  };
  /** 특정 강의 */
  getVideos_1: {
    parameters: {
      path: {
        courseId: number;
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataVideoDto"];
        };
      };
    };
  };
  /** 강좌 상세 조회 */
  getCourse: {
    parameters: {
      path: {
        "course-id": number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataCourseDto"];
        };
      };
    };
  };
  /** 댓글 목록 */
  getComments: {
    parameters: {
      path: {
        postId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListCommentDto"];
        };
      };
    };
  };
}
