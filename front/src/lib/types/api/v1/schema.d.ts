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
  "/api/v1/courses/{videoId}/note/{noteId}": {
    /** 강의 요약 노트 상세 보기 */
    get: operations["getSummaryNote"];
    /** 강의 요약 노트 수정 */
    put: operations["modify_1"];
    /** 강의 요약 노트 삭제 */
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
    put: operations["modifyVideo"];
    /** 강의 삭제 */
    delete: operations["deleteVideo"];
  };
  "/api/v1/admin/{courseId}/startOrStop": {
    /** 강좌 공개 or 비공개 */
    put: operations["startOrStopCourse"];
  };
  "/api/v1/admin/courses/{id}": {
    /** 강좌 수정 */
    put: operations["modifyCourse"];
    /** 강좌 삭제 */
    delete: operations["deleteCourse"];
  };
  "/api/v1/posts": {
    /** 글 다건 조회 */
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
  "/api/v1/members/login": {
    /** 로그인, accessToken, refreshToken 쿠키 생성됨 */
    post: operations["login"];
  };
  "/api/v1/enroll/{courseId}": {
    /** 수강 등록 */
    post: operations["create"];
  };
  "/api/v1/courses/{videoId}/note": {
    /** 강의 요약 노트 등록 */
    post: operations["create_1"];
  };
  "/api/v1/courses/{id}/like": {
    /** 강좌 좋아요 */
    post: operations["vote_1"];
    /** 강좌 좋아요 취소 */
    delete: operations["deleteVote_1"];
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
  "/api/v1/admin/courses": {
    /** 강좌 최신순 */
    get: operations["getRecentCourses"];
    /** 강좌 등록 */
    post: operations["createCourse"];
  };
  "/api/v1/posts/{postId}/report": {
    /** 신고하기 */
    patch: operations["report"];
  };
  "/api/v1/admin/posts/{postId}/report": {
    /** 게시물 신고 취소 */
    patch: operations["cancelReport"];
  };
  "/api/v1/posts/qna/{id}": {
    /** 1대1 문의 상세 정보 */
    get: operations["getQnaDetail"];
    /** 1대1 문의 삭제 */
    delete: operations["deleteQna"];
  };
  "/api/v1/posts/myList": {
    /** 내 글 목록 */
    get: operations["getMyPosts"];
  };
  "/api/v1/members/{id}": {
    /** 마이 페이지 데이터 요청 */
    get: operations["myPage"];
  };
  "/api/v1/members/me": {
    get: operations["getMe"];
  };
  "/api/v1/members/isLogin": {
    /** 로그인 여부 확인 */
    get: operations["isLogin"];
  };
  "/api/v1/home": {
    /** 홈화면 최신 강좌 N개조회 */
    get: operations["getPosts_1"];
  };
  "/api/v1/enroll": {
    /** 수업 목록 조회 */
    get: operations["getEnrollList"];
  };
  "/api/v1/courses": {
    /** 강좌 다건 조회 */
    get: operations["getCourses"];
  };
  "/api/v1/courses/{videoId}/note/admin": {
    /** 비디오별 강의노트 조회(관리자 기능) */
    get: operations["getSummaryNoteAdmin"];
  };
  "/api/v1/courses/{courseId}": {
    /** 강좌 상세 조회 */
    get: operations["getCourse"];
  };
  "/api/v1/courses/{courseId}/videos": {
    /** 강의 리스트 */
    get: operations["getVideos"];
  };
  "/api/v1/courses/{courseId}/videos/{id}": {
    /** 특정 강의 */
    get: operations["getVideos_1"];
  };
  "/api/v1/courses/{courseId}/auth": {
    /** 해당 멤버가 해당 강좌를 수강 중인지 */
    get: operations["getCourseAuth"];
  };
  "/api/v1/courses/summary/{writerId}": {
    /** 작성자별 강의 요약노트 조회 */
    get: operations["getSummaryNoteByWriter"];
  };
  "/api/v1/courses/summary/{writerId}/{courseId}": {
    /** 작성자별 강좌의 모든 요약노트 목록 조회 */
    get: operations["getSummaryNoteByWriterandCourse"];
  };
  "/api/v1/comments/{postId}": {
    /** 댓글 목록 */
    get: operations["getComments"];
  };
  "/api/v1/admin/{courseId}/enroll": {
    /** 강좌별 수강생 목록 */
    get: operations["getEnrollByCourseId"];
  };
  "/api/v1/admin/summaryNotes": {
    /** 최신 요약노트 */
    get: operations["getSummeryNotes"];
  };
  "/api/v1/admin/summaryNotes/list": {
    /** 요약노트 목록 */
    get: operations["getAllSummeryNotes"];
  };
  "/api/v1/admin/reports": {
    /** 신고 게시물 최신순 */
    get: operations["getReportedPosts"];
  };
  "/api/v1/admin/reports/list": {
    /** 신고 게시물 목록 */
    get: operations["getAllReportedPosts"];
  };
  "/api/v1/admin/qna": {
    /** 최신 문의 */
    get: operations["getQna"];
  };
  "/api/v1/admin/qna/list": {
    /** 1대1 문의 목록 */
    get: operations["getAllQna"];
  };
  "/api/v1/admin/members": {
    /** 회원 최신순 */
    get: operations["getMembers"];
  };
  "/api/v1/admin/members/list": {
    /** 회원 목록 */
    get: operations["getAllMembers"];
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
      voteCount: number;
      likedByCurrentUser: boolean;
      /** Format: int32 */
      commentCount: number;
      report: boolean;
    };
    RsDataPostDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["PostDto"];
      fail: boolean;
      success: boolean;
    };
    CreateSummaryNoteDto: {
      content: string;
    };
    CourseEnroll: {
      /** Format: int64 */
      id?: number;
      /** Format: date-time */
      createDate?: string;
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
      visitedToday?: boolean;
      /** Format: int32 */
      dailyGoal?: number;
      /** Format: int32 */
      dailyAchievement?: number;
      courseEnrollList?: components["schemas"]["CourseEnroll"][];
      name?: string;
      authoritiesAsStringList?: string[];
      authorities?: components["schemas"]["GrantedAuthority"][];
      profileImgUrlOrDefault?: string;
    };
    RsDataSummaryNoteDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["SummaryNoteDto"];
      fail: boolean;
      success: boolean;
    };
    SummaryNoteDto: {
      /** Format: int64 */
      id?: number;
      /** Format: date-time */
      createDate?: string;
      member?: components["schemas"]["Member"];
      content?: string;
      /** Format: int64 */
      score?: number;
      /** Format: int64 */
      courseId?: number;
      /** Format: int64 */
      videoId?: number;
      courseName?: string;
      pass?: boolean;
    };
    CreateCommentDto: {
      body: string;
      /** Format: int64 */
      postId?: number;
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
      /** Format: int32 */
      voteCount?: number;
    };
    RsDataCommentDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CommentDto"];
      fail: boolean;
      success: boolean;
    };
    VideoDto: {
      /** Format: int64 */
      id: number;
      url: string;
      overView?: string;
      imgUrl: string;
      /** Format: int64 */
      courseId: number;
      summaryNotes: components["schemas"]["SummaryNoteDto"][];
      keywords: string;
    };
    RsDataVideoDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["VideoDto"];
      fail: boolean;
      success: boolean;
    };
    CourseDto: {
      /** Format: int64 */
      id?: number;
      title?: string;
      notice?: string;
      imgUrl?: string;
      overView?: string;
      grade?: string;
      /** Format: int32 */
      price?: number;
      /** Format: int32 */
      voteCount?: number;
      likedByCurrentUser?: boolean;
      /** Format: int32 */
      videoCount?: number;
      confirm?: boolean;
      /** Format: int32 */
      enrollCount?: number;
    };
    RsDataCourseDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CourseDto"];
      fail: boolean;
      success: boolean;
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
      fail: boolean;
      success: boolean;
    };
    RsDataVoid: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: Record<string, never>;
      fail: boolean;
      success: boolean;
    };
    Empty: Record<string, never>;
    RsDataEmpty: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["Empty"];
      fail: boolean;
      success: boolean;
    };
    LoginRequestBody: {
      username: string;
      password: string;
    };
    LoginResponseBody: {
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
      visitedToday: boolean;
      /** Format: int32 */
      dailyGoal: number;
      /** Format: int32 */
      dailyAchievement: number;
      /** Format: int32 */
      point?: number;
    };
    RsDataLoginResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["LoginResponseBody"];
      fail: boolean;
      success: boolean;
    };
    RsDataCreateCommentDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CreateCommentDto"];
      fail: boolean;
      success: boolean;
    };
    CreateVideoDto: {
      url: string;
      overView: string;
      /** Format: int64 */
      courseId?: number;
      imgUrl: string;
      keywords: string;
    };
    RsDataCreateVideoDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CreateVideoDto"];
      fail: boolean;
      success: boolean;
    };
    CreateCourseDto: {
      title: string;
      notice: string;
      imgUrl: string;
      overView: string;
      grade: string;
    };
    RsDataCreateCourseDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CreateCourseDto"];
      fail: boolean;
      success: boolean;
    };
    GetPostsResponseBody: {
      itemPage: components["schemas"]["PageDtoPostDto"];
    };
    PageDtoPostDto: {
      /** Format: int64 */
      totalElementsCount: number;
      /** Format: int64 */
      pageElementsCount: number;
      /** Format: int64 */
      totalPagesCount: number;
      /** Format: int32 */
      number: number;
      content: components["schemas"]["PostDto"][];
    };
    RsDataGetPostsResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetPostsResponseBody"];
      fail: boolean;
      success: boolean;
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
      /** Format: int32 */
      commentCount: number;
    };
    RsDataListQnaDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["QnaDto"][];
      fail: boolean;
      success: boolean;
    };
    RsDataQnaDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["QnaDto"];
      fail: boolean;
      success: boolean;
    };
    RsDataListPostDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["PostDto"][];
      fail: boolean;
      success: boolean;
    };
    MyPageDto: {
      learningCourses?: components["schemas"]["CourseDto"][];
      favoriteCourses?: components["schemas"]["CourseDto"][];
      member?: components["schemas"]["Member"];
    };
    MyPageResponseBody: {
      item: components["schemas"]["MyPageDto"];
    };
    RsDataMyPageResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["MyPageResponseBody"];
      fail: boolean;
      success: boolean;
    };
    MeResponseBody: {
      item: components["schemas"]["MemberDto"];
    };
    RsDataMeResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["MeResponseBody"];
      fail: boolean;
      success: boolean;
    };
    RsDataIsLoginResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["isLoginResponseBody"];
      fail: boolean;
      success: boolean;
    };
    isLoginResponseBody: {
      isLogin: boolean;
    };
    CourseEnrollDto: {
      /** Format: int64 */
      courseId?: number;
      title?: string;
      imgUrl?: string;
      /** Format: int32 */
      price?: number;
    };
    GetCourseEnrollResponsebody: {
      items: components["schemas"]["CourseEnrollDto"][];
    };
    RsDataGetCourseEnrollResponsebody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetCourseEnrollResponsebody"];
      fail: boolean;
      success: boolean;
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
      fail: boolean;
      success: boolean;
    };
    GetSummaryNoteResponsebody: {
      items: components["schemas"]["SummaryNoteDto"][];
    };
    RsDataGetSummaryNoteResponsebody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetSummaryNoteResponsebody"];
      fail: boolean;
      success: boolean;
    };
    RsDataListVideoDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["VideoDto"][];
      fail: boolean;
      success: boolean;
    };
    CourseAuthDto: {
      enroll?: boolean;
    };
    RsDataCourseAuthDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CourseAuthDto"];
      fail: boolean;
      success: boolean;
    };
    RsDataListSummaryNoteDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["SummaryNoteDto"][];
      fail: boolean;
      success: boolean;
    };
    RsDataListCommentDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CommentDto"][];
      fail: boolean;
      success: boolean;
    };
    AdminCourseEnrollDto: {
      /** Format: int64 */
      id?: number;
      name?: string;
    };
    RsDataListAdminCourseEnrollDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["AdminCourseEnrollDto"][];
      fail: boolean;
      success: boolean;
    };
    AdminSummaryNoteDto: {
      /** Format: int64 */
      id: number;
      name: string;
      courseName: string;
      /** Format: int64 */
      videoId: number;
      /** Format: int64 */
      courseId: number;
      /** Format: date-time */
      createDate: string;
      pass: boolean;
    };
    RsDataListAdminSummaryNoteDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["AdminSummaryNoteDto"][];
      fail: boolean;
      success: boolean;
    };
    GetNotesResponseBody: {
      itemPage?: components["schemas"]["PageDtoAdminSummaryNoteDto"];
    };
    PageDtoAdminSummaryNoteDto: {
      /** Format: int64 */
      totalElementsCount: number;
      /** Format: int64 */
      pageElementsCount: number;
      /** Format: int64 */
      totalPagesCount: number;
      /** Format: int32 */
      number: number;
      content: components["schemas"]["AdminSummaryNoteDto"][];
    };
    RsDataGetNotesResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetNotesResponseBody"];
      fail: boolean;
      success: boolean;
    };
    ReportedPostDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      /** Format: int64 */
      authorId: number;
      authorName: string;
      title: string;
    };
    RsDataListReportedPostDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["ReportedPostDto"][];
      fail: boolean;
      success: boolean;
    };
    AdminQnaDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      authorName: string;
      title: string;
      /** Format: int32 */
      commentCount: number;
    };
    RsDataListAdminQnaDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["AdminQnaDto"][];
      fail: boolean;
      success: boolean;
    };
    GetQnaResponseBody: {
      itemPage?: components["schemas"]["PageDtoAdminQnaDto"];
    };
    PageDtoAdminQnaDto: {
      /** Format: int64 */
      totalElementsCount: number;
      /** Format: int64 */
      pageElementsCount: number;
      /** Format: int64 */
      totalPagesCount: number;
      /** Format: int32 */
      number: number;
      content: components["schemas"]["AdminQnaDto"][];
    };
    RsDataGetQnaResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetQnaResponseBody"];
      fail: boolean;
      success: boolean;
    };
    AdminMemberDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      name: string;
      report: boolean;
    };
    RsDataListAdminMemberDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["AdminMemberDto"][];
      fail: boolean;
      success: boolean;
    };
    GetMembersResponseBody: {
      itemPage?: components["schemas"]["PageDtoAdminMemberDto"];
    };
    PageDtoAdminMemberDto: {
      /** Format: int64 */
      totalElementsCount: number;
      /** Format: int64 */
      pageElementsCount: number;
      /** Format: int64 */
      totalPagesCount: number;
      /** Format: int32 */
      number: number;
      content: components["schemas"]["AdminMemberDto"][];
    };
    RsDataGetMembersResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetMembersResponseBody"];
      fail: boolean;
      success: boolean;
    };
    AdminCourseDto: {
      /** Format: int64 */
      id: number;
      title: string;
      grade: string;
      /** Format: int32 */
      enrollCount: number;
    };
    RsDataListAdminCourseDto: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["AdminCourseDto"][];
      fail: boolean;
      success: boolean;
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
  /** 강의 요약 노트 상세 보기 */
  getSummaryNote: {
    parameters: {
      path: {
        noteId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataSummaryNoteDto"];
        };
      };
    };
  };
  /** 강의 요약 노트 수정 */
  modify_1: {
    parameters: {
      path: {
        noteId: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateSummaryNoteDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataSummaryNoteDto"];
        };
      };
    };
  };
  /** 강의 요약 노트 삭제 */
  delete_1: {
    parameters: {
      path: {
        noteId: number;
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
  modifyVideo: {
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
  deleteVideo: {
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
  /** 강좌 공개 or 비공개 */
  startOrStopCourse: {
    parameters: {
      path: {
        courseId: number;
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
  /** 강좌 수정 */
  modifyCourse: {
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
  deleteCourse: {
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
  /** 글 다건 조회 */
  getPosts: {
    parameters: {
      query?: {
        page?: number;
        kw?: string;
        kwType?: "ALL" | "TITLE" | "BODY" | "NAME";
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
  /** 로그인, accessToken, refreshToken 쿠키 생성됨 */
  login: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginRequestBody"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataLoginResponseBody"];
        };
      };
    };
  };
  /** 수강 등록 */
  create: {
    parameters: {
      path: {
        courseId: number;
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
  /** 강의 요약 노트 등록 */
  create_1: {
    parameters: {
      path: {
        videoId: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateSummaryNoteDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataSummaryNoteDto"];
        };
      };
    };
  };
  /** 강좌 좋아요 */
  vote_1: {
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
  /** 강좌 좋아요 취소 */
  deleteVote_1: {
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
  /** 강좌 최신순 */
  getRecentCourses: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListAdminCourseDto"];
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
  /** 신고하기 */
  report: {
    parameters: {
      path: {
        postId: number;
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
  /** 게시물 신고 취소 */
  cancelReport: {
    parameters: {
      path: {
        postId: number;
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
  /** 내 글 목록 */
  getMyPosts: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListPostDto"];
        };
      };
    };
  };
  /** 마이 페이지 데이터 요청 */
  myPage: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataMyPageResponseBody"];
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
  /** 로그인 여부 확인 */
  isLogin: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataIsLoginResponseBody"];
        };
      };
    };
  };
  /** 홈화면 최신 강좌 N개조회 */
  getPosts_1: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataGetPostsResponseBody"];
        };
      };
    };
  };
  /** 수업 목록 조회 */
  getEnrollList: {
    parameters: {
      query?: {
        page?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetCourseEnrollResponsebody"];
        };
      };
    };
  };
  /** 강좌 다건 조회 */
  getCourses: {
    parameters: {
      query?: {
        page?: number;
        kw?: string;
        kwType?: "ALL" | "TITLE" | "NAME";
        grade?: string;
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
  /** 비디오별 강의노트 조회(관리자 기능) */
  getSummaryNoteAdmin: {
    parameters: {
      query?: {
        page?: number;
      };
      path: {
        videoId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetSummaryNoteResponsebody"];
        };
      };
    };
  };
  /** 강좌 상세 조회 */
  getCourse: {
    parameters: {
      path: {
        courseId: number;
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
  /** 해당 멤버가 해당 강좌를 수강 중인지 */
  getCourseAuth: {
    parameters: {
      path: {
        courseId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataCourseAuthDto"];
        };
      };
    };
  };
  /** 작성자별 강의 요약노트 조회 */
  getSummaryNoteByWriter: {
    parameters: {
      path: {
        writerId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListSummaryNoteDto"];
        };
      };
    };
  };
  /** 작성자별 강좌의 모든 요약노트 목록 조회 */
  getSummaryNoteByWriterandCourse: {
    parameters: {
      path: {
        writerId: number;
        courseId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListSummaryNoteDto"];
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
  /** 강좌별 수강생 목록 */
  getEnrollByCourseId: {
    parameters: {
      path: {
        courseId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListAdminCourseEnrollDto"];
        };
      };
    };
  };
  /** 최신 요약노트 */
  getSummeryNotes: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListAdminSummaryNoteDto"];
        };
      };
    };
  };
  /** 요약노트 목록 */
  getAllSummeryNotes: {
    parameters: {
      query?: {
        page?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetNotesResponseBody"];
        };
      };
    };
  };
  /** 신고 게시물 최신순 */
  getReportedPosts: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListReportedPostDto"];
        };
      };
    };
  };
  /** 신고 게시물 목록 */
  getAllReportedPosts: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListReportedPostDto"];
        };
      };
    };
  };
  /** 최신 문의 */
  getQna: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListAdminQnaDto"];
        };
      };
    };
  };
  /** 1대1 문의 목록 */
  getAllQna: {
    parameters: {
      query?: {
        page?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetQnaResponseBody"];
        };
      };
    };
  };
  /** 회원 최신순 */
  getMembers: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataListAdminMemberDto"];
        };
      };
    };
  };
  /** 회원 목록 */
  getAllMembers: {
    parameters: {
      query?: {
        page?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetMembersResponseBody"];
        };
      };
    };
  };
}
