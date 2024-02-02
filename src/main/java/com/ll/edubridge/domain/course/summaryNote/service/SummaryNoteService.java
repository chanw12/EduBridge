package com.ll.edubridge.domain.course.summaryNote.service;

import com.ll.edubridge.domain.course.course.entity.Course;
import com.ll.edubridge.domain.course.summaryNote.dto.CreateSummaryNoteDto;
import com.ll.edubridge.domain.course.summaryNote.entity.SummaryNote;
import com.ll.edubridge.domain.course.summaryNote.repository.SummaryNoteRepository;
import com.ll.edubridge.domain.course.video.service.VideoService;
import com.ll.edubridge.domain.member.member.entity.Member;
import com.ll.edubridge.domain.member.member.repository.MemberRepository;
import com.ll.edubridge.global.exceptions.CodeMsg;
import com.ll.edubridge.global.exceptions.GlobalException;
import com.ll.edubridge.global.rq.Rq;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SummaryNoteService {
    private final SummaryNoteRepository summaryNoteRepository;
    private final MemberRepository memberRepository;
    private final Rq rq;
    private final VideoService videoService;

    public Page<SummaryNote> findAll(Pageable pageable) {
        return summaryNoteRepository.findAll(pageable);
    }

    public Optional<SummaryNote> findById(Long id) {
        return summaryNoteRepository.findById(id);
    }


    @Transactional
    public SummaryNote getSummaryNote(Long id) {
        Optional<SummaryNote> summaryNote = this.findById(id);
        if (summaryNote.isPresent()) {
            return summaryNote.get();
        } else {
            throw new GlobalException(CodeMsg.E404_1_DATA_NOT_FIND.getCode(), CodeMsg.E404_1_DATA_NOT_FIND.getMessage());
        }
    }

    @Transactional
    public SummaryNote create(Member member, CreateSummaryNoteDto createSummaryNoteDto,Long videoid) {
        SummaryNote summaryNote = SummaryNote.builder()
                .content(createSummaryNoteDto.getContent())
                .writer(member)
                .video(videoService.findById(videoid).get())
                .build();

        // 포인트 지급 -> 로컬 테스트 실패
        Course course = summaryNote.getVideo().getCourse();
        int point = member.getPoint() + course.getPrice()/10;
        member.setPoint(point);
        memberRepository.save(member);

        return summaryNoteRepository.save(summaryNote);
    }

    @Transactional
    public SummaryNote modify(Long id , CreateSummaryNoteDto createSummaryNoteDto) {
        SummaryNote summaryNote = this.getSummaryNote(id);

        summaryNote.setContent(createSummaryNoteDto.getContent());

        return summaryNoteRepository.save(summaryNote);
    }

    @Transactional
    public void delete(Long id) {
        SummaryNote summaryNote = this.getSummaryNote(id);
        summaryNoteRepository.delete(summaryNote);
    }

    @Transactional
    public boolean haveAuthority(Long id) {
        Member member = rq.getMember();

        if (member == null) return false;

        if (rq.isAdmin()) return true;

        return true;
    }


    public Page<SummaryNote> findByVideoId(Pageable pageable,Long videoid) {
        return summaryNoteRepository.findByVideoId(pageable,videoid);
    }

    public List<SummaryNote> recentSummaryNotes() {
        return summaryNoteRepository.findTop5ByOrderByIdDesc();
    }
}