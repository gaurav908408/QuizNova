package chat11.in.service;

import org.springframework.data.jpa.repository.JpaRepository;
import chat11.in.synup.Category;

public interface CategoryService extends JpaRepository<Category, Long> {

}