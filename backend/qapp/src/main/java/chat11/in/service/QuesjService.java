package chat11.in.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import chat11.in.synup.QuesJ;

public interface QuesjService extends JpaRepository<QuesJ, Long> {

    List<QuesJ> findByCategory(String category);

}