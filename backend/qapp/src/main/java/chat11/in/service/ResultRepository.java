package chat11.in.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import chat11.in.synup.Result;

public interface ResultRepository extends JpaRepository<Result, Long> {

    List<Result> findByUserId(Long userId);

}