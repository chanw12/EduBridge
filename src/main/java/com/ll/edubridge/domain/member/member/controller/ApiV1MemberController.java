package com.ll.edubridge.domain.member.member.controller;


import com.ll.edubridge.domain.course.course.dto.CourseDto;
import com.ll.edubridge.domain.course.course.service.CourseService;
import com.ll.edubridge.domain.member.member.dto.MemberDto;
import com.ll.edubridge.domain.member.member.dto.MyPageDto;
import com.ll.edubridge.domain.member.member.entity.Member;
import com.ll.edubridge.domain.member.member.service.MemberService;
import com.ll.edubridge.global.msg.Msg;
import com.ll.edubridge.global.rq.Rq;
import com.ll.edubridge.global.rsData.RsData;
import com.ll.edubridge.standard.base.Empty;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/members")
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ApiV1MemberController {
    private final MemberService memberService;
    private final Rq rq;
    private final CourseService courseService;

    public record LoginRequestBody(@NotBlank String username, @NotBlank String password) {
    }

    public record LoginResponseBody(@NonNull MemberDto item) {
    }

    public record isLoginResponseBody(@NonNull Boolean isLogin){

    }

    public record isAdminResponseBody(@NonNull Boolean isAdmin){

    }
    @GetMapping("/isAdmin")
    @Operation(summary = "관리자 여부 확인")
    public RsData<isAdminResponseBody> isAdmin(){

        return RsData.of(Msg.E200_1_INQUIRY_SUCCEED.getCode(),Msg.E200_1_INQUIRY_SUCCEED.getMsg(),new isAdminResponseBody(rq.isAdmin()));
    }


    @GetMapping("/isLogin")
    @Operation(summary = "로그인 여부 확인")
    public RsData<isLoginResponseBody> isLogin(){

        return RsData.of(Msg.E200_1_INQUIRY_SUCCEED.getCode(),Msg.E200_1_INQUIRY_SUCCEED.getMsg(),new isLoginResponseBody(rq.isLogin()));
    }

    @PostMapping(value = "/login")
    @Operation(summary = "로그인, accessToken, refreshToken 쿠키 생성됨")
    public RsData<LoginResponseBody> login(@Valid @RequestBody LoginRequestBody body) {
        RsData<MemberService.AuthAndMakeTokensResponseBody> authAndMakeTokensRs = memberService.authAndMakeTokens(
                body.username,
                body.password
        );

        rq.setCrossDomainCookie("refreshToken", authAndMakeTokensRs.getData().refreshToken());
        rq.setCrossDomainCookie("accessToken", authAndMakeTokensRs.getData().accessToken());

        return authAndMakeTokensRs.newDataOf(
                new LoginResponseBody(
                        new MemberDto(authAndMakeTokensRs.getData().member())
                )
        );
    }


    public record MeResponseBody(@NonNull MemberDto item) {
    }

    @GetMapping("/me")
    public RsData<MeResponseBody> getMe() {
        return RsData.of(Msg.E200_1_INQUIRY_SUCCEED.getCode(),
                Msg.E200_1_INQUIRY_SUCCEED.getMsg(),
                new MeResponseBody(
                        new MemberDto(rq.getMember())
                )
        );
    }

    @PostMapping("/logout")
    public RsData<Empty> logout() {
        rq.setLogout();

        return RsData.of(Msg.E200_6_LOGOUT_SUCCEED.getCode(),
                Msg.E200_6_LOGOUT_SUCCEED.getMsg());
    }

    public record MyPageResponseBody(@NonNull MyPageDto item){

    }


    @GetMapping("/{id}")
    @Operation(summary = "마이 페이지 데이터 요청")
    public RsData<MyPageResponseBody> myPage(@PathVariable("id") Long id){
        Member member = memberService.getMember(id);

        List<CourseDto> learningCourses = member
                .getCourseEnrollList()
                .stream()
                .map(courseEnroll -> new CourseDto(courseEnroll.getCourse(), member))
                .collect(Collectors.toList());
        List<CourseDto> likeCourses = courseService.findByVoter(member).stream().map(course -> new CourseDto(course,member)).collect(Collectors.toList());

        MyPageDto myPageDto = new MyPageDto(learningCourses,likeCourses,member);
        return RsData.of("200","성공",
                new MyPageResponseBody(
                        myPageDto
                ));
    }

}