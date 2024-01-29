package com.ll.edubridge.domain.course.course.repository;

import com.ll.edubridge.domain.course.course.entity.Course;
import com.ll.edubridge.domain.member.member.entity.Member;
import com.ll.edubridge.domain.post.post.entity.Post;
import com.ll.edubridge.standard.base.KwTypeCourse;
import com.ll.edubridge.standard.base.KwTypeV1;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.PathBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.support.PageableExecutionUtils;

import static com.ll.edubridge.domain.post.post.entity.QPost.post;
import static com.ll.edubridge.domain.course.course.entity.QCourse.course;

@RequiredArgsConstructor
public class CustomCourseRepositoryImpl implements CustomCourseRepository{

    private final JPAQueryFactory queryFactory;

    @Override
    public Page<Course> findByKw(KwTypeCourse kwType, String kw, Member owner, Pageable pageable) {
        BooleanBuilder builder = new BooleanBuilder();

        if (owner != null) {
            builder.and(post.writer.eq(owner));
        }


        if (kw != null && !kw.isBlank()) {
            applyKeywordFilter(kwType, kw, builder);
        }

        JPAQuery<Course> cousrsesQuery = createCourseQuery(builder);
        applySorting(pageable, cousrsesQuery);

        cousrsesQuery.offset(pageable.getOffset()).limit(pageable.getPageSize());

        JPAQuery<Long> totalQuery = createTotalQuery(builder);

        return PageableExecutionUtils.getPage(cousrsesQuery.fetch(), pageable, totalQuery::fetchOne);
    }


    private void applyKeywordFilter(KwTypeCourse kwType, String kw, BooleanBuilder builder) {
        switch (kwType) {
            case kwType.TITLE -> builder.and(course.title.containsIgnoreCase(kw));
            case kwType.NAME -> builder.and(course.owner.nickname.containsIgnoreCase(kw));
            default -> builder.and(
                    course.title.containsIgnoreCase(kw)
                                    .or(course.owner.nickname.containsIgnoreCase(kw))

            );
        }
    }

    private JPAQuery<Course> createCourseQuery(BooleanBuilder builder) {
        return queryFactory
                .select(course)
                .from(course)
                .where(builder);
    }

    private void applySorting(Pageable pageable, JPAQuery<Course> courseQuery) {
        for (Sort.Order o : pageable.getSort()) {
            PathBuilder pathBuilder = new PathBuilder(course.getType(), course.getMetadata());
            courseQuery.orderBy(new OrderSpecifier(o.isAscending() ? Order.ASC : Order.DESC, pathBuilder.get(o.getProperty())));
        }
    }

    private JPAQuery<Long> createTotalQuery(BooleanBuilder builder) {
        return queryFactory
                .select(course.count())
                .from(course)
                .where(builder);
    }
}